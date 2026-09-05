// Web Gamepad API consumer.
//
// We always read through `navigator.getGamepads()`. The
// `native-gamepad-bridge.js` module monkey-patches this method when
// inside the iOS wrapper; outside the wrapper, this is the standard
// browser API, which also works for desktop USB / Bluetooth pads.
//
// Stick mapping (twin-stick: fly with the left, look with the right):
//   axis 0 → LX → yaw          axis 2 → RX → camera orbit (look left/right)
//   axis 1 → LY → throttle     axis 3 → RY → camera orbit (look up/down)
//
// In words: LEFT stick FLIES the ship (forward thrust + turn left/right),
// RIGHT stick is the CAMERA GIMBAL — it swings the chase camera around
// the ship without touching the ship's heading, and the camera keeps the
// ship centred in frame the whole time (see `src/chaseCamera.js`).
// The Web Gamepad convention is "positive Y = stick down", so throttle
// and look-up use sign -1 to make "stick up = forward / look up".
//
// That leaves pitch and roll off the sticks, so they live on the D-pad:
// Up/Down pitch the nose, Left/Right bank. (The D-pad only doubles as a
// menu scroller, and flight input is ignored while a menu is open.)
//
// Button mapping uses the standard layout (`pad.mapping === 'standard'`):
//   0=A, 1=B, 2=X, 3=Y, 4=L1, 5=R1, 6=L2, 7=R2,
//   8=Select, 9=Start, 10=L3, 11=R3, 12=Up, 13=Down, 14=Left, 15=Right.
// The bridge fakes this exactly; modern Xbox/DualSense/Switch pads on
// Chrome also report `standard`.
//
// A pad that reports anything else is not guaranteed to have its sticks
// on those axes at all, and on one of those the bindings below read an
// axis nothing is connected to. `padCalibration.js` asks the player to
// push each stick once and replaces them; see the setup screen in
// `src/padSetup.js`.
import { loadPad } from './padCalibration.js';

export const DEAD_ZONE = 0.15;

// `rest` is where the axis sits untouched — 0 for a stick. A calibrated
// pad can say otherwise (a trigger sits at -1), and everything is read
// as a deviation from it. See `padCalibration.js`.
export const AXIS_BINDINGS = {
  throttle: { axisIndex: 1, sign: -1, rest: 0 }, // LY: up    → forward thrust
  yaw:      { axisIndex: 0, sign: -1, rest: 0 }, // LX: left  → +yaw (turn nose left)
  lookX:    { axisIndex: 2, sign: 1, rest: 0 },  // RX: right → swing the view right
  lookY:    { axisIndex: 3, sign: -1, rest: 0 }, // RY: up    → swing the view up
};

// Named button slots used by main.js — these are stable indices, the
// raw numbers come from the standard mapping above.
export const BUTTONS = {
  A: 0, B: 1, X: 2, Y: 3,
  L1: 4, R1: 5, L2: 6, R2: 7,
  Select: 8, Start: 9,
  L3: 10, R3: 11,
  Up: 12, Down: 13, Left: 14, Right: 15,
};

function applyDeadzone(value, dz = DEAD_ZONE) {
  const abs = Math.abs(value);
  if (abs < dz) return 0;
  // Rescale so the value goes 0→1 smoothly outside the deadzone.
  return Math.sign(value) * ((abs - dz) / (1 - dz));
}

function readBound(pad, binding) {
  const raw = pad.axes[binding.axisIndex] ?? 0;
  const rest = binding.rest ?? 0;
  let dev = raw - rest;
  // Rescale so a full push still reads 1 however far from the middle
  // the axis rests: an axis sitting at -1 has twice as far to travel
  // upwards as a centred one, and half as far down.
  if (rest !== 0) {
    const span = dev >= 0 ? 1 - rest : 1 + rest;
    if (span > 1e-3) dev /= span;
    if (dev > 1) dev = 1; else if (dev < -1) dev = -1;
  }
  return binding.sign * applyDeadzone(dev);
}

export function createGamepad() {
  let active = false; // any axis or button outside deadzone this frame
  let warnedNonStandard = false;

  // Which pad we are reading, and what we have been told about it. Both
  // are re-read whenever the id changes, so unplugging one controller
  // and plugging in another picks up that one's calibration.
  let padId = null;
  let padStandard = true;
  let bindings = AXIS_BINDINGS;
  let calibrated = false;
  let known = null;      // the stored entry: bindings, or `skipped`
  let rawAxes = [];

  function adoptPad(pad) {
    if (pad.id === padId) return;
    padId = pad.id;
    padStandard = pad.mapping === 'standard';
    known = loadPad(padId);
    if (known?.bindings) {
      // Only the axes the player actually answered — a setup they
      // stepped halfway through leaves the rest on their defaults.
      bindings = { ...AXIS_BINDINGS, ...known.bindings };
      calibrated = true;
    } else {
      bindings = AXIS_BINDINGS;
      calibrated = false;
    }
  }

  // Button edge detection: track previous-frame pressed state so we can
  // synthesise "justPressed" events from the polled Gamepad API (which,
  // unlike keydown, gives us no events).
  const wasPressed = new Set();
  const justPressed = new Set();
  // Buttons that must be released before they can fire `justPressed`
  // again. Used when one state transition (e.g. cinematic skip) "eats"
  // a button press — if the player is still holding the same button as
  // the title card appears, we DON'T want that hold to bleed through
  // and dismiss it. They have to release and press again, which matches
  // the keyboard's behavior.
  const suppressUntilReleased = new Set();

  function findFirstConnected() {
    const pads = typeof navigator.getGamepads === 'function'
      ? navigator.getGamepads()
      : [];
    for (const p of pads) if (p && p.connected) return p;
    return null;
  }

  // Latest button state, updated each sample(). Map from index → pressed.
  const pressedNow = new Set();

  function refreshButtons(pad) {
    justPressed.clear();
    pressedNow.clear();
    if (!pad.buttons) return;
    for (let i = 0; i < pad.buttons.length; i++) {
      const b = pad.buttons[i];
      const isDown = !!(b && b.pressed);
      if (isDown) {
        pressedNow.add(i);
        if (!wasPressed.has(i) && !suppressUntilReleased.has(i)) {
          justPressed.add(i);
        }
      } else {
        // Released → re-arm: the next press of this button can fire again.
        suppressUntilReleased.delete(i);
      }
    }
    // Buttons that are no longer pressed leave wasPressed; otherwise we
    // miss the next press-after-release.
    for (const i of wasPressed) {
      if (!pressedNow.has(i)) wasPressed.delete(i);
    }
    for (const i of pressedNow) wasPressed.add(i);
  }

  return {
    /** True if a gamepad produced any signal (stick or button) this frame. */
    get active() { return active; },

    /** The connected pad's id, or null when there isn't one. */
    get padId() { return padId; },

    /** True when the pad promises the standard axis and button layout. */
    get isStandard() { return padStandard; },

    /** True when this pad's sticks were taught to the game. */
    get isCalibrated() { return calibrated; },

    /** Whatever the sticks are being read through right now. */
    get bindings() { return bindings; },

    /**
     * A pad we cannot trust and have never asked about. The setup
     * screen offers itself once on this, and never again for a pad the
     * player has calibrated or told to leave alone.
     */
    get needsSetup() {
      return !!padId && !padStandard && !known;
    },

    /** The pad's axes exactly as reported, for the setup screen. */
    rawAxes() { return rawAxes; },

    /**
     * Read the sticks through a set of bindings — used by the setup
     * screen's "try it" readout, which has to show the NEW mapping
     * before it is saved.
     */
    readThrough(custom) {
      const pad = findFirstConnected();
      if (!pad) return { throttle: 0, yaw: 0, lookX: 0, lookY: 0 };
      const b = { ...AXIS_BINDINGS, ...custom };
      return {
        throttle: readBound(pad, b.throttle),
        yaw: readBound(pad, b.yaw),
        lookX: readBound(pad, b.lookX),
        lookY: readBound(pad, b.lookY),
      };
    },

    /**
     * Take a finished calibration into use at once, without waiting for
     * the pad to be unplugged and back in again.
     */
    useCalibration(newBindings) {
      bindings = { ...AXIS_BINDINGS, ...newBindings };
      calibrated = true;
      known = { bindings: newBindings };
    },

    /** Remember that the player declined the setup for this pad. */
    noteSetupDeclined() {
      known = { skipped: true };
    },

    /** Read normalized axes from the gamepad. Returns null if none. */
    sample() {
      const pad = findFirstConnected();
      if (!pad) {
        active = false;
        justPressed.clear();
        pressedNow.clear();
        wasPressed.clear();
        padId = null;
        rawAxes = [];
        return null;
      }

      adoptPad(pad);
      rawAxes = pad.axes ? Array.from(pad.axes, (v) => v ?? 0) : [];

      if (!warnedNonStandard && !padStandard) {
        warnedNonStandard = true;
        console.info(
          '[input/gamepad] Connected pad reports non-standard mapping',
          `(id="${pad.id}"). Its sticks may not be on axes 0-3 as expected;`,
          calibrated
            ? 'using this pad\'s saved calibration.'
            : 'the controller setup screen can teach the game where they are.',
        );
      }

      refreshButtons(pad);

      const yaw = readBound(pad, bindings.yaw);
      const throttle = readBound(pad, bindings.throttle);
      const lookX = readBound(pad, bindings.lookX);
      const lookY = readBound(pad, bindings.lookY);

      // Pitch and roll moved off the right stick when it became the
      // camera gimbal, so the D-pad flies them: Up/Down = nose, Left/
      // Right = bank. Digital, so they read as full deflection.
      const pitch = (pressedNow.has(BUTTONS.Up) ? 1 : 0) - (pressedNow.has(BUTTONS.Down) ? 1 : 0);
      const roll = (pressedNow.has(BUTTONS.Left) ? 1 : 0) - (pressedNow.has(BUTTONS.Right) ? 1 : 0);

      const anyStick = (yaw || pitch || roll || throttle || lookX || lookY) !== 0;
      const anyButton = pressedNow.size > 0;
      active = anyStick || anyButton;

      return { throttle, yaw, pitch, roll, lookX, lookY };
    },

    /** True if the named/numbered button is currently held. */
    isButtonDown(index) {
      return pressedNow.has(index);
    },

    /** Consume a single edge-press for button `index`. */
    consumeJustPressed(index) {
      if (!justPressed.has(index)) return false;
      justPressed.delete(index);
      return true;
    },

    /** Consume any edge-press this frame (used for "press any key" gates). */
    consumeAnyJustPressed() {
      if (justPressed.size === 0) return false;
      justPressed.clear();
      return true;
    },

    /**
     * Mark every currently-held button as "must release before firing
     * again". Call after a state transition that was triggered by a
     * button press, so the same hold doesn't immediately re-fire on
     * the next gate (cinematic skip → title card, etc).
     */
    suppressCurrentlyPressed() {
      for (const i of pressedNow) suppressUntilReleased.add(i);
    },
  };
}
