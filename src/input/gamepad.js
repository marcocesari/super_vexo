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

export const DEAD_ZONE = 0.15;

export const AXIS_BINDINGS = {
  throttle: { axisIndex: 1, sign: -1 }, // LY: up    → forward thrust
  yaw:      { axisIndex: 0, sign: -1 }, // LX: left  → +yaw (turn nose left)
  lookX:    { axisIndex: 2, sign: 1 },  // RX: right → swing the view right
  lookY:    { axisIndex: 3, sign: -1 }, // RY: up    → swing the view up
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
  return binding.sign * applyDeadzone(pad.axes[binding.axisIndex] ?? 0);
}

export function createGamepad() {
  let active = false; // any axis or button outside deadzone this frame
  let warnedNonStandard = false;

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

    /** Read normalized axes from the gamepad. Returns null if none. */
    sample() {
      const pad = findFirstConnected();
      if (!pad) {
        active = false;
        justPressed.clear();
        pressedNow.clear();
        wasPressed.clear();
        return null;
      }

      if (!warnedNonStandard && pad.mapping !== 'standard') {
        warnedNonStandard = true;
        console.info(
          '[input/gamepad] Connected pad reports non-standard mapping',
          `(id="${pad.id}"). Throttle/look may not be on axes 1/2/3 as expected.`,
          'See BACKLOG.md for the calibration follow-up.',
        );
      }

      refreshButtons(pad);

      const yaw = readBound(pad, AXIS_BINDINGS.yaw);
      const throttle = readBound(pad, AXIS_BINDINGS.throttle);
      const lookX = readBound(pad, AXIS_BINDINGS.lookX);
      const lookY = readBound(pad, AXIS_BINDINGS.lookY);

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
