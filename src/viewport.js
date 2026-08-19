// Viewport sizing that survives an iPhone rotation.
//
// The obvious way to size a WebGL canvas — read `window.innerWidth` /
// `window.innerHeight` inside a `resize` listener — is unreliable on
// iOS. Both Chrome and Safari fire `resize` and `orientationchange`
// *while* they are still re-laying-out for the new orientation, so the
// numbers you read there can still be the old portrait ones. The canvas
// then keeps a portrait-shaped drawing buffer in a landscape window,
// which is exactly the "doesn't rotate properly" bug.
//
// The fix is to stop guessing. CSS pins the canvas to the whole screen
// (`position: fixed; inset: 0`), and a `ResizeObserver` tells us the
// element's *actual* size — it only fires once the browser has really
// finished the layout, whenever that is. We then resize only the
// drawing buffer and leave the CSS size alone, so the picture can never
// disagree with the box it's drawn in.
//
// The extra listeners below are belt-and-braces for the cases a
// ResizeObserver can't see: a rotation that lands on the same CSS size,
// or a device-pixel-ratio change (moving the window between screens).

// iOS reports its final size some way into the rotation animation. After
// an orientation change we re-measure at these delays (milliseconds) and
// keep whatever the last one says.
const SETTLE_DELAYS_MS = [0, 120, 350, 700];

// Retina phones are typically 3x. Rendering at full 3x costs 2.25x the
// pixels of 2x for almost no visible gain, so cap it — this is the
// single biggest frame-rate lever on a phone.
const MAX_PIXEL_RATIO = 2;

/** Current size of `element` in CSS pixels, plus the ratio to render at. */
export function measureViewport(element) {
  const rect = element.getBoundingClientRect();
  // A fresh canvas can measure 0 before its first layout; fall back to
  // the window so we never build a zero-sized render target.
  const width = Math.max(1, Math.round(rect.width || window.innerWidth));
  const height = Math.max(1, Math.round(rect.height || window.innerHeight));
  return {
    width,
    height,
    pixelRatio: Math.min(window.devicePixelRatio || 1, MAX_PIXEL_RATIO),
  };
}

/**
 * Watch `element` and call `onChange({width, height, pixelRatio})`
 * whenever its size (or the device pixel ratio) actually changes.
 * Fires once immediately so the caller never has to size things itself.
 *
 * @returns {{ measure: () => void, dispose: () => void }}
 */
export function createViewport(element, onChange) {
  let last = { width: 0, height: 0, pixelRatio: 0 };
  const timers = [];

  function measure() {
    const next = measureViewport(element);
    if (
      next.width === last.width &&
      next.height === last.height &&
      next.pixelRatio === last.pixelRatio
    ) {
      return; // nothing actually moved — don't churn the GPU buffers
    }
    last = next;
    onChange(next);
  }

  // Re-measure now and again as the rotation animation settles.
  function measureRepeatedly() {
    for (const t of timers.splice(0)) clearTimeout(t);
    for (const delay of SETTLE_DELAYS_MS) {
      timers.push(setTimeout(measure, delay));
    }
  }

  const observer = new ResizeObserver(measure);
  observer.observe(element);

  window.addEventListener('resize', measure);
  window.addEventListener('orientationchange', measureRepeatedly);
  // Safari/Chrome on iOS move the visual viewport around as the URL bar
  // shows and hides; this fires for that.
  window.visualViewport?.addEventListener('resize', measure);
  // Coming back from the bfcache (tab switch, app switch) can land on a
  // different size than we left with.
  window.addEventListener('pageshow', measureRepeatedly);
  screen.orientation?.addEventListener('change', measureRepeatedly);

  measure();

  return {
    measure,
    dispose() {
      for (const t of timers.splice(0)) clearTimeout(t);
      observer.disconnect();
      window.removeEventListener('resize', measure);
      window.removeEventListener('orientationchange', measureRepeatedly);
      window.visualViewport?.removeEventListener('resize', measure);
      window.removeEventListener('pageshow', measureRepeatedly);
      screen.orientation?.removeEventListener('change', measureRepeatedly);
    },
  };
}
