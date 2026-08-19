// Gyro axis mapping — a plain Node test, no browser needed.
//
// DeviceOrientationEvent's `beta` and `gamma` are measured against the
// *device*, so when the phone is turned to landscape they swap roles:
// the gesture that pitches the ship's nose up shows up in gamma, not
// beta. src/input/gyro.js rotates the pair by the screen angle to undo
// that. This checks all four orientations.
const listeners = {};
globalThis.window = {
  addEventListener: (type, fn) => { (listeners[type] ||= []).push(fn); },
  removeEventListener: () => {},
};
globalThis.screen = { orientation: { angle: 0, addEventListener: () => {} } };
globalThis.DeviceOrientationEvent = undefined;

const { createGyro, GYRO_CONTRIBUTION } = await import('../src/input/gyro.js');

const gyro = createGyro();
await gyro.request();

const fire = (beta, gamma) =>
  listeners.deviceorientation.forEach((fn) => fn({ alpha: 0, beta, gamma }));

// Neutral pose = flat. Calibration averages samples over the first second.
fire(0, 0);
const t0 = performance.now();
while (performance.now() - t0 < 1100) { /* wait out the calibration window */ }
fire(0, 0);

// 35 degrees of tilt is full deflection (PITCH_FULL_DEG / YAW_FULL_DEG).
const FULL = 35;
const unscale = (v) => +(v / GYRO_CONTRIBUTION).toFixed(3);
let failed = false;

function check(angle, beta, gamma, wantPitch, wantYaw, label) {
  screen.orientation.angle = angle;
  fire(beta, gamma);
  const s = gyro.sample();
  const pitch = unscale(s.pitchDelta);
  const yaw = unscale(s.yawDelta);
  const ok = Math.abs(pitch - wantPitch) < 0.02 && Math.abs(yaw - wantYaw) < 0.02;
  if (!ok) failed = true;
  console.log(
    `${ok ? 'PASS' : 'FAIL'}  ${angle}° ${label}: pitch=${pitch} yaw=${yaw}` +
    `  (want ${wantPitch}, ${wantYaw})`,
  );
}

check(0, FULL, 0, 1, 0, 'portrait: tilt back is pure pitch');
check(0, 0, FULL, 0, 1, 'portrait: tilt right is pure yaw');
check(90, 0, FULL, -1, 0, 'landscape: tilt right is pure pitch');
check(90, FULL, 0, 0, 1, 'landscape: tilt back is pure yaw');
check(270, 0, FULL, 1, 0, 'landscape (other way): pitch flips sign');
check(270, FULL, 0, 0, -1, 'landscape (other way): yaw flips sign');
check(180, FULL, 0, -1, 0, 'upside-down portrait: pitch inverted');

if (failed) {
  console.error('\nSMOKE FAILED');
  process.exit(1);
}
console.log('\nSMOKE PASSED');
