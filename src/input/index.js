// Unified input layer. M1: keyboard only. M2 will add gamepad + gyro and
// fold them into this same `sample()` contract behind a single
// `isBridgeAvailable()` check (see program.md M2 rules).
import { createKeyboard } from './keyboard.js';

export function createInput() {
  const keyboard = createKeyboard();

  return {
    keyboard,
    /** Returns axes in [-1, 1]. */
    sample() {
      // For now the unified sample is just the keyboard sample.
      return keyboard.sample();
    },
    /** Which input sources are active right now (for HUD display). */
    activeSources() {
      // M1: only keyboard exists. M2 will add 'PAD' / 'GYRO'.
      return ['KB'];
    },
  };
}
