// Twin-stick mapping + camera gimbal — a plain Node test, no browser.
//
// Checks the contract the player feels:
//   LEFT stick flies the ship (throttle + yaw), and never moves the camera.
//   RIGHT stick swings the camera around the ship, and never turns the ship.
//   The ship stays dead-centre in frame at every look angle.
import * as THREE from 'three';

// --- Fake gamepad -----------------------------------------------------------
const axes = [0, 0, 0, 0];
const buttons = Array.from({ length: 16 }, () => ({ pressed: false }));
// Node 22 defines `navigator` as a getter-only global, so patch the
// method onto the existing object rather than replacing it.
Object.defineProperty(globalThis.navigator, 'getGamepads', {
  configurable: true,
  value: () => [{ connected: true, mapping: 'standard', axes, buttons }],
});

const { createGamepad, BUTTONS } = await import('../src/input/gamepad.js');
const { createChaseCamera, LOOK_YAW_MAX, LOOK_PITCH_MAX } = await import('../src/chaseCamera.js');

let failed = false;
function check(ok, label, detail = '') {
  if (!ok) failed = true;
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${label}${detail ? '  ' + detail : ''}`);
}
const near = (a, b, eps = 1e-3) => Math.abs(a - b) < eps;

// --- Stick mapping ----------------------------------------------------------
const pad = createGamepad();
const set = (lx, ly, rx, ry) => { axes[0] = lx; axes[1] = ly; axes[2] = rx; axes[3] = ry; return pad.sample(); };

let s = set(0, -1, 0, 0);
check(s.throttle > 0.9 && s.lookX === 0 && s.lookY === 0, 'LY up = forward thrust, camera untouched');

s = set(-1, 0, 0, 0);
check(s.yaw > 0.9 && s.lookX === 0, 'LX left = yaw nose left, camera untouched');

s = set(0, 0, 1, 0);
check(s.lookX > 0.9 && s.yaw === 0 && s.roll === 0, 'RX right = look right, ship untouched');

s = set(0, 0, 0, -1);
check(s.lookY > 0.9 && s.pitch === 0, 'RY up = look up, ship untouched');

s = set(0.1, 0.1, 0.1, 0.1);
check(s.throttle === 0 && s.yaw === 0 && s.lookX === 0 && s.lookY === 0, 'deadzone still swallows drift');

// Pitch / roll moved to the D-pad when the right stick became the camera.
buttons[BUTTONS.Up].pressed = true;
s = set(0, 0, 0, 0);
check(s.pitch === 1, 'D-pad Up = nose up');
buttons[BUTTONS.Up].pressed = false;
buttons[BUTTONS.Left].pressed = true;
s = set(0, 0, 0, 0);
check(s.roll === 1, 'D-pad Left = roll left');
buttons[BUTTONS.Left].pressed = false;

// --- Camera gimbal ----------------------------------------------------------
const camera = new THREE.PerspectiveCamera(60, 16 / 9, 0.1, 5000);
const ship = { mesh: new THREE.Object3D() };
ship.mesh.position.set(12, -3, 40);
// Fly it at an angle so "behind the ship" isn't accidentally an axis.
ship.mesh.quaternion.setFromEuler(new THREE.Euler(0.3, 0.9, -0.4, 'YXZ'));

const chase = createChaseCamera(camera);
// Run enough frames for the springs to settle on whatever we're holding.
const settle = (look) => { for (let i = 0; i < 400; i++) chase.update(ship, look, 1 / 60); };

/** Where the ship lands in normalized device coords: (0,0) is dead centre. */
function shipOnScreen() {
  camera.updateMatrixWorld(true);
  camera.updateProjectionMatrix();
  return ship.mesh.position.clone().project(camera);
}

const LOOKS = [
  ['centred', { x: 0, y: 0 }],
  ['full right (nose-on)', { x: 1, y: 0 }],
  ['full left (nose-on)', { x: -1, y: 0 }],
  ['quarter right (side view)', { x: 0.5, y: 0 }],
  ['full up', { x: 0, y: 1 }],
  ['full down', { x: 0, y: -1 }],
  ['diagonal', { x: 0.7, y: -0.6 }],
];
for (const [label, look] of LOOKS) {
  settle(look);
  const ndc = shipOnScreen();
  check(
    near(ndc.x, 0, 1e-6) && near(ndc.y, 0, 1e-6) && ndc.z > 0 && ndc.z < 1,
    `ship stays centred: ${label}`,
    `ndc=(${ndc.x.toFixed(6)}, ${ndc.y.toFixed(6)}) depth=${ndc.z.toFixed(3)}`,
  );
}

// Sweeping the look stick from one side to the other must circle the
// ship completely — every angle visible — without it ever leaving the
// centre of the frame mid-sweep.
{
  let worst = 0;
  const seen = new Set();
  for (let i = 0; i <= 240; i++) {
    const x = -1 + (2 * i) / 240;
    chase.update(ship, { x, y: 0 }, 1 / 60);
    const ndc = shipOnScreen();
    worst = Math.max(worst, Math.abs(ndc.x), Math.abs(ndc.y));
    // Which 45° sector of the orbit are we in?
    seen.add(Math.floor((THREE.MathUtils.radToDeg(chase.orbit.yaw) + 180) / 45));
  }
  check(worst < 1e-6 && seen.size >= 8, 'sweeping the look stick circles the ship, always centred',
    `sectors=${seen.size}/8 worst offset=${worst.toExponential(1)}`);
}

// And a 360° turn OF THE SHIP — the thing that used to fling it off to
// one side, because the old camera aimed at a point past the nose and
// smoothed that aim point on its own clock.
{
  let worst = 0;
  const spin = new THREE.Quaternion();
  const axis = new THREE.Vector3(0, 1, 0);
  for (let i = 0; i < 180; i++) {
    // 2° of yaw per frame → a full turn in three seconds.
    spin.setFromAxisAngle(axis, THREE.MathUtils.degToRad(2));
    ship.mesh.quaternion.multiply(spin);
    ship.mesh.position.z += 0.3;        // flying while turning
    chase.update(ship, { x: 0, y: 0 }, 1 / 60);
    const ndc = shipOnScreen();
    worst = Math.max(worst, Math.abs(ndc.x), Math.abs(ndc.y));
  }
  check(worst < 1e-6, 'ship stays centred through a full 360° turn',
    `worst offset=${worst.toExponential(1)}`);
}

// Distance to the ship must not change as the view swings around it.
const dist = (look) => { settle(look); return camera.position.distanceTo(ship.mesh.position); };
const d0 = dist({ x: 0, y: 0 });
check(near(dist({ x: 1, y: 0 }), d0, 1e-6) && near(dist({ x: 0, y: 1 }), d0, 1e-6),
  'orbit keeps a constant distance', `d=${d0.toFixed(3)}`);

// Angles: full deflection reaches the configured limits, release returns home.
settle({ x: 1, y: 0 });
check(near(chase.orbit.yaw, LOOK_YAW_MAX, 1e-3), 'full right = max yaw',
  `${THREE.MathUtils.radToDeg(chase.orbit.yaw).toFixed(1)}°`);
settle({ x: 0, y: 1 });
check(near(chase.orbit.pitch, -LOOK_PITCH_MAX, 1e-3), 'full up = max pitch (camera drops below)',
  `${THREE.MathUtils.radToDeg(chase.orbit.pitch).toFixed(1)}°`);

// Letting go must drift back behind the tail on its own — no re-centre button.
settle({ x: 1, y: 1 });
const behind = new THREE.Vector3(0, 1.4, -5.5).applyQuaternion(ship.mesh.quaternion).add(ship.mesh.position);
for (let i = 0; i < 120; i++) chase.update(ship, { x: 0, y: 0 }, 1 / 60); // two seconds of hands-off
check(camera.position.distanceTo(behind) < 0.01, 'releasing the look stick returns the view behind the tail',
  `off by ${camera.position.distanceTo(behind).toFixed(4)}`);

// A look does not move the ship: the camera reads it, the ship never sees it.
const before = ship.mesh.quaternion.clone();
settle({ x: -1, y: 0.5 });
check(before.equals(ship.mesh.quaternion), 'looking around never rotates the ship');

if (failed) {
  console.error('\nSMOKE FAILED');
  process.exit(1);
}
console.log('\nAll camera/stick checks passed.');
