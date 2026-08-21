// Unified input. M2 wires three sources into one sample:
//   - keyboard          (always)
//   - gamepad           (Web Gamepad API; bridged on iOS by the native
//                        wrapper, plain on desktop)
//   - gyro              (DeviceOrientationEvent, gated by permission)
//   - touch             (taps only — stands in for "press any button"
//                        so a phone without a pad can start the game)
//
// Fusion rule per program.md M2:
//   - Gamepad sticks set the primary axes.
//   - Keyboard sets axes when the gamepad is idle (so KB-only desktop
//     play is identical to M1).
//   - Gyro contributes a small fraction (20% default) to pitch and yaw,
//     additive on top of the primary source.
//
// The sample also carries `lookX` / `lookY` — the right stick, which
// aims the chase camera rather than the ship. Only the gamepad produces
// it today; every other source reports 0.
//
// `activeSources()` reports which sources produced signal this frame
// for the HUD — values are joined with `+` (e.g. `KB`, `PAD+GYRO`).
import { createKeyboard } from './keyboard.js';
import { createGamepad } from './gamepad.js';
import { createGyro, GYRO_CONTRIBUTION, GYRO_LOOK_CONTRIBUTION } from './gyro.js';
import { createTouch, isTouchDevice } from './touch.js';
import { isBridgeAvailable } from '../bridge.js';

function clamp1(v) { return v < -1 ? -1 : (v > 1 ? 1 : v); }

export function createInput() {
  const keyboard = createKeyboard();
  const gamepad = createGamepad();
  const gyro = createGyro();
  const touch = createTouch();

  let lastSources = ['KB'];

  return {
    keyboard,
    gamepad,
    gyro,
    touch,

    /** True when running on a touchscreen (phone/tablet). */
    isTouchDevice,

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

      // Right stick → camera gimbal. The pad's stick never mixes with
      // the flight axes, so it passes straight through.
      let lookX = pad ? pad.lookX : 0;
      let lookY = pad ? pad.lookY : 0;
      if ((lookX || lookY) && !sources.includes('PAD')) sources.push('PAD');

      // …and the gyro drives the gimbal too, so a phone with no right
      // stick can still look around: THE VIEW GOES WHERE YOU TILT IT.
      // Tilt the right edge down and the camera swings right; tilt the
      // top away from you and it swings up. `sample()` has already
      // scaled its output by GYRO_CONTRIBUTION for the flight axes, so
      // rescale to the look share rather than reading the sensor twice.
      if (g && gyro.active) {
        const share = GYRO_LOOK_CONTRIBUTION / GYRO_CONTRIBUTION;
        lookX = clamp1(lookX + g.yawDelta * share);
        lookY = clamp1(lookY + g.pitchDelta * share);
      }

      // Always at least show 'KB' so the HUD has something — matches M1.
      if (sources.length === 0) sources.push('KB');
      lastSources = sources;

      return { throttle, yaw, pitch, roll, lookX, lookY };
    },

    activeSources() {
      return lastSources;
    },

    /**
     * Consume "any input edge this frame" — used by the title card,
     * cinematic skip, and any other "press any key" gate. Drains BOTH
     * the keyboard's justPressed set and the gamepad's justPressed set
     * so the same gesture can't fire twice on adjacent gates (e.g. the
     * tap that skips the cinematic must not also dismiss the title).
     */
    consumeAnyJustPressed() {
      const kb = keyboard.consumeAnyJustPressed();
      // We need to poll the gamepad to refresh its justPressed set
      // before consuming it. `gamepad.sample()` does the poll; we don't
      // care about its axes here.
      gamepad.sample();
      const gp = gamepad.consumeAnyJustPressed();
      const tp = touch.consumeJustPressed();
      return kb || gp || tp;
    },
  };
}
