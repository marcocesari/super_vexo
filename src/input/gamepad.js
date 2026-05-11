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

/** Apply a radial deadzone to a stick value. */
function applyDeadzone(value, dz = DEAD_ZONE) {
  const abs = Math.abs(value);
  if (abs < dz) return 0;
  // Rescale so the value goes 0→1 smoothly outside the deadzone instead
  // of jumping from 0 to dz.
  return Math.sign(value) * ((abs - dz) / (1 - dz));
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

      const lx = applyDeadzone(pad.axes[0] ?? 0);
      const ly = applyDeadzone(pad.axes[1] ?? 0);
      const rx = applyDeadzone(pad.axes[2] ?? 0);
      const ry = applyDeadzone(pad.axes[3] ?? 0);

      // Web Gamepad Y is positive-down → invert for pitch and throttle.
      const yaw = -lx;          // left = +yaw (turn nose left)
      const pitch = -ly;        // stick up = nose up
      const roll = -rx;         // right stick left = roll left
      const throttle = -ry;     // stick up = forward thrust

      active = (lx || ly || rx || ry) !== 0;
      return { throttle, yaw, pitch, roll };
    },
  };
}
