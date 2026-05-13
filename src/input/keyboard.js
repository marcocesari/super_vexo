// Keyboard input → normalized flight axes.
// The keyboard path must always work; gamepad/gyro (M2) will layer on top.

// Key bindings live here so they can be re-bound later without touching
// the update loop.
export const KEYS = {
  throttleUp: ['KeyW'],
  throttleDown: ['KeyS'],
  yawLeft: ['KeyA'],
  yawRight: ['KeyD'],
  pitchUp: ['ArrowUp'],
  pitchDown: ['ArrowDown'],
  rollLeft: ['KeyQ'],
  rollRight: ['KeyE'],
  toggleDamping: ['KeyX'],
};

export function createKeyboard() {
  const pressed = new Set();
  // One-shot events that fire on keydown only (not held). Consumer reads
  // and clears each frame.
  const justPressed = new Set();

  function onKeyDown(e) {
    if (!pressed.has(e.code)) justPressed.add(e.code);
    pressed.add(e.code);
  }
  function onKeyUp(e) {
    pressed.delete(e.code);
  }

  window.addEventListener('keydown', onKeyDown);
  window.addEventListener('keyup', onKeyUp);

  function any(codes) {
    for (const c of codes) if (pressed.has(c)) return true;
    return false;
  }
  function anyJust(codes) {
    for (const c of codes) if (justPressed.has(c)) return true;
    return false;
  }

  return {
    isDown: (code) => pressed.has(code),
    /** Read input axes; returns values in [-1, 1]. */
    sample() {
      const throttle = (any(KEYS.throttleUp) ? 1 : 0) - (any(KEYS.throttleDown) ? 1 : 0);
      const yaw = (any(KEYS.yawLeft) ? 1 : 0) - (any(KEYS.yawRight) ? 1 : 0);
      // ArrowUp pitches the nose UP, which in our convention is a positive
      // rotation around the local X axis.
      const pitch = (any(KEYS.pitchUp) ? 1 : 0) - (any(KEYS.pitchDown) ? 1 : 0);
      const roll = (any(KEYS.rollLeft) ? 1 : 0) - (any(KEYS.rollRight) ? 1 : 0);
      return { throttle, yaw, pitch, roll };
    },
    /** True if any key was pressed this frame (for the title-card gate). */
    consumeAnyJustPressed() {
      const had = justPressed.size > 0;
      justPressed.clear();
      return had;
    },
    consumeJustPressed(codes) {
      if (anyJust(codes)) {
        for (const c of codes) justPressed.delete(c);
        return true;
      }
      return false;
    },
    /** Drop everything in `justPressed` without observing it. Useful
     *  when one keypress logically belongs to a UI step that's already
     *  consumed it (e.g. "skip cinematic"); we don't want the next
     *  game-loop frame to also see that same key as "just pressed". */
    clearJustPressed() {
      justPressed.clear();
    },
    dispose() {
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('keyup', onKeyUp);
    },
  };
}
