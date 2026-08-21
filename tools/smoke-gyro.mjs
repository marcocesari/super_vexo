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

// --- The gyro also drives the camera gimbal ----------------------------------
// The right stick swings the view around the ship; on a phone there may
// not be one, so a tilt has to do the same job. This checks the wiring
// in src/input/index.js: that the look axes pick the gyro up at all,
// that they take the bigger LOOK share rather than the 20% steering
// share, and that the view goes WHERE YOU TILT — right edge down swings
// the view right, top away swings it up.
// Node 22 ships its own read-only `navigator`, so define over it.
Object.defineProperty(globalThis, 'navigator', {
  value: { getGamepads: () => [], maxTouchPoints: 0 },
  configurable: true,
});
globalThis.document = { addEventListener: () => {}, removeEventListener: () => {} };
screen.orientation.angle = 0;

const { createInput } = await import('../src/input/index.js');
const { GYRO_LOOK_CONTRIBUTION } = await import('../src/input/gyro.js');
const input = createInput();
await input.enableGyro();

// Calibrate this gyro instance the same way: flat, for a second.
fire(0, 0);
const c0 = performance.now();
while (performance.now() - c0 < 1100) { /* calibration window */ }
fire(0, 0);

function lookCheck(beta, gamma, wantX, wantY, label) {
  fire(beta, gamma);
  const s = input.sample();
  const okX = Math.abs(s.lookX - wantX) < 0.02;
  const okY = Math.abs(s.lookY - wantY) < 0.02;
  if (!okX || !okY) failed = true;
  console.log(
    `${okX && okY ? 'PASS' : 'FAIL'}  ${label}: lookX=${s.lookX.toFixed(2)} ` +
    `lookY=${s.lookY.toFixed(2)}  (want ${wantX.toFixed(2)}, ${wantY.toFixed(2)})`,
  );
}

const L = GYRO_LOOK_CONTRIBUTION;
lookCheck(0, 0, 0, 0, 'level: the view sits behind the tail');
lookCheck(0, FULL, L, 0, 'tilt right: view swings right');
lookCheck(0, -FULL, -L, 0, 'tilt left: view swings left');
lookCheck(FULL, 0, 0, L, 'tilt back: view swings up');
lookCheck(-FULL, 0, 0, -L, 'tilt forward: view swings down');
// Half a tilt is half a swing — and still more than the 20% the flight
// axes get, which is the whole point of the separate share.
lookCheck(0, FULL / 2, L / 2, 0, 'half a tilt is half a swing');


if (failed) {
  console.error('\nSMOKE FAILED');
  process.exit(1);
}
console.log('\nSMOKE PASSED');
