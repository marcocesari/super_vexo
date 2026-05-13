// Web Gamepad API consumer.
//
// We always read through `navigator.getGamepads()`. The
// `native-gamepad-bridge.js` module monkey-patches this method when
// inside the iOS wrapper; outside the wrapper, this is the standard
// browser API, which also works for desktop USB / Bluetooth pads.
//
// Stick mapping (twin-stick flight, matches the user's diagram):
//   axis 0 → LX → yaw          axis 2 → RX → roll
//   axis 1 → LY → throttle     axis 3 → RY → pitch
//
// In words: LEFT stick MOVES the ship (forward/back + turn left/right),
// RIGHT stick LOOKS (nose up/down + bank left/right). The Web Gamepad
// convention is "positive Y = stick down", so throttle and pitch use
// sign -1 to make "stick up = forward / nose up".
//
// Button mapping uses the standard layout (`pad.mapping === 'standard'`):
//   0=A, 1=B, 2=X, 3=Y, 4=L1, 5=R1, 6=L2, 7=R2,
//   8=Select, 9=Start, 10=L3, 11=R3, 12=Up, 13=Down, 14=Left, 15=Right.
// The bridge fakes this exactly; modern Xbox/DualSense/Switch pads on
// Chrome also report `standard`.

export const DEAD_ZONE = 0.15;

export const AXIS_BINDINGS = {
  throttle: { axisIndex: 1, sign: -1 }, // LY: up   → forward thrust
  yaw:      { axisIndex: 0, sign: -1 }, // LX: left → +yaw (turn nose left)
  pitch:    { axisIndex: 3, sign: -1 }, // RY: up   → nose up
  roll:     { axisIndex: 2, sign: -1 }, // RX: left → +roll
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
        if (!wasPressed.has(i)) justPressed.add(i);
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
          `(id="${pad.id}"). Throttle/roll may not be on axes 2/3 as expected.`,
          'See BACKLOG.md for the calibration follow-up.',
        );
      }

      refreshButtons(pad);

      const yaw = readBound(pad, AXIS_BINDINGS.yaw);
      const pitch = readBound(pad, AXIS_BINDINGS.pitch);
      const roll = readBound(pad, AXIS_BINDINGS.roll);
      const throttle = readBound(pad, AXIS_BINDINGS.throttle);

      const anyStick = (yaw || pitch || roll || throttle) !== 0;
      const anyButton = pressedNow.size > 0;
      active = anyStick || anyButton;

      return { throttle, yaw, pitch, roll };
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
  };
}
