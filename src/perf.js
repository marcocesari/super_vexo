// Adaptive resolution: keep the frame rate up by rendering fewer
// pixels when the device can't keep up.
//
// Geometry is not what makes this game stutter — the whole town is 39
// draw calls and 18k triangles. What costs is FILL: in space most of
// the screen is empty black, but on the surface every pixel is lit
// ground, fogged, at up to 2x device pixel ratio. On a retina phone
// that's four shaded pixels for every one you can see.
//
// So instead of cutting detail, we cut resolution — and only when the
// frames actually get slow. The scale multiplies the pixel ratio the
// viewport asks for; at 1.0 nothing changes at all, so a fast machine
// never pays for this.
//
// The thresholds sit well outside the common refresh rates on purpose.
// A device locked to 30 Hz is not struggling — it's just a 30 Hz
// device — so "too slow" means slower than ~26 fps, and "room to
// spare" means faster than ~52 fps. Anything between the two is left
// alone, which is what keeps this from oscillating.
const SLOW_MS = 38; // slower than this for a whole window → scale down
const FAST_MS = 19; // faster than this for a whole window → scale up

const WINDOW_FRAMES = 45;   // ~0.75s at 60fps: long enough to ignore one bad frame
const COOLDOWN_S = 1.5;     // resizing churns GPU buffers; don't do it often
const STEP = 0.25;
const MIN_SCALE = 0.5;
const MAX_SCALE = 1;

/**
 * @param {(scale: number) => void} onScale called when the render scale
 *        changes; the caller re-applies its viewport size with it.
 */
export function createFrameScaler(onScale) {
  let scale = MAX_SCALE;
  let cooldown = 0;
  const window = [];

  return {
    get scale() { return scale; },

    /** Feed one frame's delta (seconds). */
    sample(dt) {
      const ms = dt * 1000;
      // A frame longer than a quarter second is a tab switch or a
      // garbage-collection stall, not a rendering cost. Ignore it.
      if (ms > 250) return;

      window.push(ms);
      if (window.length < WINDOW_FRAMES) return;

      // Median, not mean: one 100ms hitch shouldn't drag the whole
      // window down and drop the resolution for everyone.
      const sorted = [...window].sort((a, b) => a - b);
      const median = sorted[Math.floor(sorted.length / 2)];
      window.length = 0;

      if (cooldown > 0) return;

      let next = scale;
      if (median > SLOW_MS) next = Math.max(MIN_SCALE, scale - STEP);
      else if (median < FAST_MS) next = Math.min(MAX_SCALE, scale + STEP);

      if (next !== scale) {
        scale = next;
        cooldown = COOLDOWN_S;
        onScale(scale);
      }
    },

    /** Tick the cooldown. Call once a frame with the frame delta. */
    update(dt) {
      if (cooldown > 0) cooldown -= dt;
    },

    /** Back to full resolution — used when the quality reason changes. */
    reset() {
      if (scale === MAX_SCALE) return;
      scale = MAX_SCALE;
      window.length = 0;
      cooldown = COOLDOWN_S;
      onScale(scale);
    },
  };
}
