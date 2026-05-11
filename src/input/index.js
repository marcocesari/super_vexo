// Unified input. M2 wires three sources into one sample:
//   - keyboard          (always)
//   - gamepad           (Web Gamepad API; bridged on iOS by the native
//                        wrapper, plain on desktop)
//   - gyro              (DeviceOrientationEvent, gated by permission)
//
// Fusion rule per program.md M2:
//   - Gamepad sticks set the primary axes.
//   - Keyboard sets axes when the gamepad is idle (so KB-only desktop
//     play is identical to M1).
//   - Gyro contributes a small fraction (20% default) to pitch and yaw,
//     additive on top of the primary source.
//
// `activeSources()` reports which sources produced signal this frame
// for the HUD — values are joined with `+` (e.g. `KB`, `PAD+GYRO`).
import { createKeyboard } from './keyboard.js';
import { createGamepad } from './gamepad.js';
import { createGyro } from './gyro.js';
import { isBridgeAvailable } from '../bridge.js';

function clamp1(v) { return v < -1 ? -1 : (v > 1 ? 1 : v); }

export function createInput() {
  const keyboard = createKeyboard();
  const gamepad = createGamepad();
  const gyro = createGyro();

  let lastSources = ['KB'];

  return {
    keyboard,
    gamepad,
    gyro,

    /** True if running inside the iOS wrapper. */
    bridgeAvailable: isBridgeAvailable,

    /**
     * Try to enable gyro. iOS 13+ requires a user gesture, so call this
     * from within a keydown / click handler (we trigger it on the
     * title-card dismiss). Idempotent; NO-OP on desktop.
     */
    async enableGyro() {
      return gyro.request();
    },

    /** Returns axes in [-1, 1]. */
    sample() {
      const kb = keyboard.sample();
      const pad = gamepad.sample();
      const sources = [];

      let throttle, yaw, pitch, roll;
      if (pad && (pad.throttle || pad.yaw || pad.pitch || pad.roll)) {
        // Gamepad has signal → primary source.
        throttle = pad.throttle;
        yaw = pad.yaw;
        pitch = pad.pitch;
        roll = pad.roll;
        sources.push('PAD');
        // KB can still add — useful when a player overlaps keys + pad.
        if (kb.throttle || kb.yaw || kb.pitch || kb.roll) {
          throttle = clamp1(throttle + kb.throttle);
          yaw = clamp1(yaw + kb.yaw);
          pitch = clamp1(pitch + kb.pitch);
          roll = clamp1(roll + kb.roll);
          sources.push('KB');
        }
      } else {
        // Keyboard is the only stick-source.
        throttle = kb.throttle;
        yaw = kb.yaw;
        pitch = kb.pitch;
        roll = kb.roll;
        if (kb.throttle || kb.yaw || kb.pitch || kb.roll) sources.push('KB');
      }

      // Gyro adds fine pitch/yaw if calibrated and producing signal.
      const g = gyro.sample();
      if (g && gyro.active) {
        pitch = clamp1(pitch + g.pitchDelta);
        yaw = clamp1(yaw + g.yawDelta);
        sources.push('GYRO');
      }

      // Always at least show 'KB' so the HUD has something — matches M1.
      if (sources.length === 0) sources.push('KB');
      lastSources = sources;

      return { throttle, yaw, pitch, roll };
    },

    activeSources() {
      return lastSources;
    },
  };
}
