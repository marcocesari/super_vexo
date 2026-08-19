// Gyro input via the standard DeviceOrientationEvent (no wrapper
// channel needed; see BRIDGE.md §3).
//
// The event gives us:
//   alpha — rotation around Z (compass / yaw)   [0..360°]
//   beta  — rotation around X (front-back tilt) [-180..180°]
//   gamma — rotation around Y (left-right tilt) [-90..90°]
//
// We capture a "neutral" pose during the first second of the session
// and report deviations from it. The deviations are scaled by
// GYRO_CONTRIBUTION so the gyro is a small fine-tuning of the gamepad
// stick rather than the primary input (program.m2: "default 20%").
//
// On iOS 13+ permission must be requested from a user gesture, so we
// expose a `request()` method instead of asking at module-load. Calling
// `request()` outside iOS (where `DeviceOrientationEvent.requestPermission`
// is undefined) is a NO-OP that still wires the listener.

export const GYRO_CONTRIBUTION = 0.2; // 20%
const CALIBRATION_MS = 1000;          // hold neutral 1s
// Pitch / yaw saturate at this much device tilt (degrees) → +/- 1.
const PITCH_FULL_DEG = 35;
const YAW_FULL_DEG = 35;

/**
 * How far the screen is rotated away from the phone's natural (portrait)
 * orientation, in radians. `beta` and `gamma` are measured against the
 * *device*, not the screen, so in landscape they swap roles — this is
 * what we rotate them by to get back to screen-relative pitch and yaw.
 */
function screenAngleRad() {
  const deg = screen.orientation?.angle ?? window.orientation ?? 0;
  return (deg * Math.PI) / 180;
}

export function createGyro() {
  let listening = false;
  let permissionGranted = false;
  let permissionAsked = false;

  let neutral = null;          // { alpha, beta, gamma } captured during calibration
  let calibrationStart = 0;
  let calibrationSum = { alpha: 0, beta: 0, gamma: 0, n: 0 };

  let lastEvent = null;        // most recent event
  let lastEventTime = 0;

  function onEvent(e) {
    // beta is the value we care most about for pitch; we tolerate nulls.
    if (e.alpha == null && e.beta == null && e.gamma == null) return;

    lastEvent = {
      alpha: e.alpha ?? 0,
      beta: e.beta ?? 0,
      gamma: e.gamma ?? 0,
    };
    lastEventTime = (typeof performance !== 'undefined') ? performance.now() : Date.now();

    if (neutral == null) {
      const now = lastEventTime;
      if (calibrationStart === 0) calibrationStart = now;
      // Accumulate samples for a stable average.
      calibrationSum.alpha += lastEvent.alpha;
      calibrationSum.beta += lastEvent.beta;
      calibrationSum.gamma += lastEvent.gamma;
      calibrationSum.n += 1;
      if (now - calibrationStart >= CALIBRATION_MS && calibrationSum.n > 0) {
        neutral = {
          alpha: calibrationSum.alpha / calibrationSum.n,
          beta: calibrationSum.beta / calibrationSum.n,
          gamma: calibrationSum.gamma / calibrationSum.n,
        };
      }
    }
  }

  /**
   * Throw away the neutral pose so the next second of samples
   * re-captures it. Called when the phone is rotated: "flat and level"
   * reads as completely different beta/gamma values in landscape than
   * it did in portrait, so the old neutral would leave the stick
   * jammed over to one side.
   */
  function recalibrate() {
    neutral = null;
    calibrationStart = 0;
    calibrationSum = { alpha: 0, beta: 0, gamma: 0, n: 0 };
  }

  function attach() {
    if (listening) return;
    window.addEventListener('deviceorientation', onEvent);
    screen.orientation?.addEventListener('change', recalibrate);
    window.addEventListener('orientationchange', recalibrate);
    listening = true;
  }

  return {
    /** Listening for events AND we have at least one. */
    get active() {
      // "Producing useful signal this second" — let the HUD show GYRO
      // only when events are arriving recently.
      if (!listening || lastEvent == null) return false;
      const now = (typeof performance !== 'undefined') ? performance.now() : Date.now();
      return (now - lastEventTime) < 1000;
    },

    /** True once neutral has been captured. */
    get calibrated() { return neutral != null; },

    /**
     * Ask the user for permission if needed, then attach listeners.
     * Idempotent. Safe to call on desktop (NO-OP for permission, still
     * attaches listeners so a non-iOS browser exposing the event still
     * works).
     */
    async request() {
      if (permissionAsked) {
        attach();
        return permissionGranted;
      }
      permissionAsked = true;

      const Ctor = (typeof DeviceOrientationEvent !== 'undefined')
        ? DeviceOrientationEvent
        : null;

      if (Ctor && typeof Ctor.requestPermission === 'function') {
        try {
          const result = await Ctor.requestPermission();
          permissionGranted = (result === 'granted');
        } catch {
          permissionGranted = false;
        }
        if (permissionGranted) attach();
      } else {
        // Desktop or Android: no permission gate. Just attach.
        permissionGranted = true;
        attach();
      }
      return permissionGranted;
    },

    /**
     * Returns { pitchDelta, yawDelta } scaled to roughly [-1, 1] *
     * GYRO_CONTRIBUTION. Returns null until calibrated.
     */
    sample() {
      if (!lastEvent || !neutral) return null;
      const dBeta = lastEvent.beta - neutral.beta;
      // We use beta/gamma (front-back and left-right tilt) rather than
      // alpha, which is a compass heading and wraps at 360°.
      const dGamma = lastEvent.gamma - neutral.gamma;

      // Rotate the tilt into *screen* space. Hold the phone in
      // landscape and the gesture that pitches the nose up is a tilt
      // about the phone's long axis — that shows up in gamma, not beta.
      // Rotating the (beta, gamma) pair by the screen angle handles all
      // four orientations with one bit of trigonometry: at 0° it's the
      // identity, at 180° it flips both, and the two landscapes swap
      // the axes with opposite signs.
      const angle = screenAngleRad();
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      const pitchDeg = dBeta * cos - dGamma * sin;
      const yawDeg = dBeta * sin + dGamma * cos;

      let pitch = clamp(pitchDeg / PITCH_FULL_DEG, -1, 1);
      let yaw = clamp(yawDeg / YAW_FULL_DEG, -1, 1);

      // Sign convention: tilt phone forward (beta decreases) → pitch nose
      // down → negative pitch. beta increases when phone tilts back.
      // Default DeviceOrientationEvent: tilting top-of-phone away from
      // you gives positive beta. We want that to push the nose **up**.
      // → keep the sign as-is.

      // Scale by the global contribution so the gyro is a fine-tune.
      return {
        pitchDelta: pitch * GYRO_CONTRIBUTION,
        yawDelta: yaw * GYRO_CONTRIBUTION,
      };
    },
  };
}

function clamp(v, lo, hi) { return v < lo ? lo : (v > hi ? hi : v); }
