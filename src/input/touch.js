// Touch input. Right now it does one job: let a tap stand in for "press
// any button", so a phone with no gamepad attached can still get past
// the cinematic and the title card. Flight input still comes from the
// pad / keyboard / gyro.
//
// We listen for `pointerdown` rather than `touchstart` because it covers
// finger, stylus and mouse with one event — and we ignore the mouse so a
// desktop click doesn't skip the intro by accident.

/** True on phones and tablets: the device has a touchscreen. */
export const isTouchDevice =
  (typeof window !== 'undefined' && 'ontouchstart' in window) ||
  (typeof navigator !== 'undefined' && navigator.maxTouchPoints > 0);

export function createTouch() {
  let tapped = false; // set on tap, cleared by whoever consumes it

  function onPointerDown(e) {
    if (e.pointerType === 'mouse') return;
    tapped = true;
  }

  window.addEventListener('pointerdown', onPointerDown, { passive: true });

  return {
    /** True once per tap; consuming it clears the flag. */
    consumeJustPressed() {
      const was = tapped;
      tapped = false;
      return was;
    },
    /** Drop any pending tap — used so one tap can't pass two gates. */
    clear() {
      tapped = false;
    },
  };
}
