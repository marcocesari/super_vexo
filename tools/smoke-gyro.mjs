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

// --- The gyro turns the camera, as a rate --------------------------------------
// Gyro aiming is displacement, not posture: the camera moves while the
// phone moves and stays where it was left when the phone stops. That is
// how every game with good motion control does it, and it is why this
// no longer feeds the absolute tilt into the look axes.
Object.defineProperty(globalThis, 'navigator', {
  value: { getGamepads: () => [], maxTouchPoints: 0 },
  configurable: true,
});
globalThis.document = { addEventListener: () => {}, removeEventListener: () => {} };
screen.orientation.angle = 0;

const { createInput } = await import('../src/input/index.js');
const { GYRO_LOOK_SENSITIVITY } = await import('../src/input/gyro.js');
const input = createInput();
await input.enableGyro();

fire(0, 0);
const c0 = performance.now();
while (performance.now() - c0 < 1100) { /* calibration window (steering only) */ }
fire(0, 0);
input.sample();                       // drain whatever the wind-up produced

const RAD = Math.PI / 180;
function turnCheck(beta, gamma, wantX, wantY, label) {
  fire(beta, gamma);
  const s = input.sample();
  const okX = Math.abs(s.lookTurnX - wantX) < 0.002;
  const okY = Math.abs(s.lookTurnY - wantY) < 0.002;
  if (!okX || !okY) failed = true;
  console.log(
    `${okX && okY ? 'PASS' : 'FAIL'}  ${label}: turnX=${s.lookTurnX.toFixed(3)} ` +
    `turnY=${s.lookTurnY.toFixed(3)}  (want ${wantX.toFixed(3)}, ${wantY.toFixed(3)})`,
  );
}

const K = GYRO_LOOK_SENSITIVITY;
// Turning the phone 10 degrees turns the camera 10 degrees (at 1:1).
turnCheck(0, 10, 10 * RAD * K, 0, 'turn right 10 degrees: camera turns 10 right');
// HOLDING it there does nothing more. This is the whole point: with the
// old absolute mapping the camera stayed swung only while the phone was
// held over, and sprang back the moment it came level.
turnCheck(0, 10, 0, 0, 'holding the phone still: camera holds its aim');
turnCheck(0, 10, 0, 0, 'still holding: still nothing');
// Turning back is a turn of its own, the way a mouse pulled back is.
turnCheck(0, 0, -10 * RAD * K, 0, 'turn back to level: camera turns back');
turnCheck(20, 0, 0, 20 * RAD * K, 'tilt up 20 degrees: camera turns up 20');
// Reading it consumes it — a turn is never counted twice.
const drained = input.sample();
const ok = drained.lookTurnX === 0 && drained.lookTurnY === 0;
if (!ok) failed = true;
console.log(`${ok ? 'PASS' : 'FAIL'}  a turn is counted once: ${drained.lookTurnX}, ${drained.lookTurnY}`);

// Steering is still a TILT — leaning the phone into a turn is an
// absolute gesture, and that half has not changed.
function steerCheck(beta, gamma, wantYaw, label) {
  fire(beta, gamma);
  const s = input.sample();
  const okY = Math.abs(s.yaw - wantYaw) < 0.02;
  if (!okY) failed = true;
  console.log(`${okY ? 'PASS' : 'FAIL'}  ${label}: yaw=${s.yaw.toFixed(2)} (want ${wantYaw.toFixed(2)})`);
}
const S = GYRO_CONTRIBUTION;
steerCheck(0, FULL, -S, 'tilt right: nose goes right');
steerCheck(0, -FULL, S, 'tilt left: nose goes left');

if (failed) {
  console.error('\nSMOKE FAILED');
  process.exit(1);
}
console.log('\nSMOKE PASSED');
