// Web Gamepad API consumer.
//
// We always read through `navigator.getGamepads()`. The
// `native-gamepad-bridge.js` module monkey-patches this method when
// inside the iOS wrapper; outside the wrapper, this is the standard
// browser API, which also works for desktop USB / Bluetooth pads.
//
// Stick mapping (program.md M2, "standard" Web Gamepad API layout):
//   axis 0 → LX → yaw       axis 2 → RX → roll
//   axis 1 → LY → pitch     axis 3 → RY → throttle
//
// **Assumption: `pad.mapping === 'standard'`.** This holds for:
//   - the synthetic gamepad served by `native-gamepad-bridge.js`
//     (`mapping: 'standard'`, exactly 4 axes — the production target),
//   - most modern Xbox / DualSense / Switch Pro controllers on Chrome.
//
// Non-standard desktop pads (some 8BitDo / GameSir USB modes, certain
// generic-HID pads) report `mapping: ''` with axis indices in
// different positions. Those will work partially or not at all here.
// Calibration UI is parked in BACKLOG.md.
//
// Web Gamepad API axis convention: positive Y on a stick = stick pulled
// **down**. Throttle and pitch invert that so pulling the stick *up*
// pushes the ship up / forward, which is what a pilot expects.

export const DEAD_ZONE = 0.15;

/**
 * Axis bindings. Each entry says: pull from `axisIndex` of the Web
 * Gamepad's `axes`, multiply by `sign`, and use the result as the
 * named flight axis. Change *here* to remap; nothing else cares.
 *
 * Signs explained: the Web Gamepad API uses positive-Y = stick *down*.
 * Pilots expect "stick up = nose up / throttle forward", so most
 * Y-derived axes have sign -1.
 */
export const AXIS_BINDINGS = {
  yaw:      { axisIndex: 0, sign: -1 },  // LX: left → +yaw (turn nose left)
  pitch:    { axisIndex: 1, sign: -1 },  // LY: up   → +pitch (nose up)
  roll:     { axisIndex: 2, sign: -1 },  // RX: left → +roll
  throttle: { axisIndex: 3, sign: -1 },  // RY: up   → forward thrust
};

/** Apply a radial deadzone to a stick value. */
function applyDeadzone(value, dz = DEAD_ZONE) {
  const abs = Math.abs(value);
  if (abs < dz) return 0;
  // Rescale so the value goes 0→1 smoothly outside the deadzone instead
  // of jumping from 0 to dz.
  return Math.sign(value) * ((abs - dz) / (1 - dz));
}

function readBound(pad, binding) {
  return binding.sign * applyDeadzone(pad.axes[binding.axisIndex] ?? 0);
}

export function createGamepad() {
  let active = false; // any gamepad axis/button outside deadzone this frame
  let warnedNonStandard = false;

  function findFirstConnected() {
    const pads = typeof navigator.getGamepads === 'function'
      ? navigator.getGamepads()
      : [];
    for (const p of pads) if (p && p.connected) return p;
    return null;
  }

  return {
    /** True if a gamepad produced any signal this frame. */
    get active() { return active; },

    /** Read normalized axes from the gamepad. Returns null if none. */
    sample() {
      const pad = findFirstConnected();
      if (!pad) {
        active = false;
        return null;
      }

      // Warn once per session if a non-standard pad shows up — this
      // means our axis 0..3 assumption may not hold on desktop. On
      // device this never fires (the bridge guarantees standard).
      if (!warnedNonStandard && pad.mapping !== 'standard') {
        warnedNonStandard = true;
        console.info(
          '[input/gamepad] Connected pad reports non-standard mapping',
          `(id="${pad.id}"). Throttle/roll may not be on axes 2/3 as expected.`,
          'See BACKLOG.md for the calibration follow-up.',
        );
      }

      const yaw = readBound(pad, AXIS_BINDINGS.yaw);
      const pitch = readBound(pad, AXIS_BINDINGS.pitch);
      const roll = readBound(pad, AXIS_BINDINGS.roll);
      const throttle = readBound(pad, AXIS_BINDINGS.throttle);

      active = (yaw || pitch || roll || throttle) !== 0;
      return { throttle, yaw, pitch, roll };
    },
  };
}
