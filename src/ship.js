// The player ship: a cone mesh that flies with 6DOF using quaternions.
//
// Why quaternions? Euler angles (pitch/yaw/roll as three numbers) suffer
// from "gimbal lock" — at certain orientations two of the three axes
// collapse onto the same direction and you lose a degree of freedom.
// Quaternions are a 4-number representation of rotation that never has
// this problem, so they are the standard for flight / space sims.
import * as THREE from 'three';

// --- Tunables ---------------------------------------------------------------
// All speeds are in "units per second" or "radians per second" — never per
// frame. Multiply by deltaTime when applying, so a 30fps machine and a
// 144fps machine feel identical.
export const MAX_THROTTLE_ACCEL = 18; // units/s^2 forward thrust when W held
export const REVERSE_THROTTLE_ACCEL = 12; // units/s^2 when S held
export const MAX_SPEED = 60; // units/s
export const YAW_RATE = 1.4; // rad/s
export const PITCH_RATE = 1.4; // rad/s
export const ROLL_RATE = 2.0; // rad/s
// Arcade damping: when on, velocity decays toward zero so the ship "stops"
// on its own. When off (default), space-inertia rules apply.
export const ARCADE_DAMPING_RATE = 0.6; // fraction of velocity lost per second

export function createShip() {
  // Cone pointing along +Z (its "nose"). Three.js cones point along +Y by
  // default, so we rotate the geometry once.
  const geom = new THREE.ConeGeometry(0.4, 1.6, 16);
  geom.rotateX(Math.PI / 2);

  const mat = new THREE.MeshStandardMaterial({
    color: 0x9ad7ff,
    roughness: 0.35,
    metalness: 0.3,
    emissive: 0x102030,
  });

  const mesh = new THREE.Mesh(geom, mat);
  mesh.position.set(0, 0, 0);

  return {
    mesh,
    // Linear velocity in world space.
    velocity: new THREE.Vector3(),
    arcadeDamping: false,
  };
}

// Reusable scratch vectors so the per-frame update allocates nothing.
const _localAxis = new THREE.Vector3();
const _deltaQ = new THREE.Quaternion();
const _forward = new THREE.Vector3();

/**
 * Apply one frame's input to the ship.
 *
 * @param {ReturnType<typeof createShip>} ship
 * @param {{throttle:number, yaw:number, pitch:number, roll:number}} input
 *        Each axis is in [-1, 1]. Throttle: +1 = W (forward), -1 = S (back).
 * @param {number} dt   delta time in seconds
 */
export function updateShip(ship, input, dt) {
  // --- Rotation: build a tiny local-axis rotation per axis, multiply in.
  // We apply rotations in the ship's *local* frame, which is what makes
  // controls feel natural: pitch is always relative to the nose, no matter
  // how the ship is oriented in the world.
  applyLocalRotation(ship.mesh.quaternion, _localAxis.set(1, 0, 0), input.pitch * PITCH_RATE * dt);
  applyLocalRotation(ship.mesh.quaternion, _localAxis.set(0, 1, 0), input.yaw * YAW_RATE * dt);
  applyLocalRotation(ship.mesh.quaternion, _localAxis.set(0, 0, 1), input.roll * ROLL_RATE * dt);
  ship.mesh.quaternion.normalize();

  // --- Translation: throttle pushes along the ship's local forward (+Z).
  _forward.set(0, 0, 1).applyQuaternion(ship.mesh.quaternion);

  const accel = input.throttle >= 0
    ? input.throttle * MAX_THROTTLE_ACCEL
    : input.throttle * REVERSE_THROTTLE_ACCEL;
  // velocity += forward * accel * dt
  ship.velocity.addScaledVector(_forward, accel * dt);

  if (ship.arcadeDamping) {
    // Frame-rate-independent exponential decay: v *= exp(-rate * dt)
    const decay = Math.exp(-ARCADE_DAMPING_RATE * dt);
    ship.velocity.multiplyScalar(decay);
  }

  // Cap speed.
  if (ship.velocity.lengthSq() > MAX_SPEED * MAX_SPEED) {
    ship.velocity.setLength(MAX_SPEED);
  }

  // position += velocity * dt
  ship.mesh.position.addScaledVector(ship.velocity, dt);
}

// Multiply `q` on the right by a rotation of `angle` around the local
// `axis` — i.e. apply the rotation in the object's local frame.
function applyLocalRotation(q, axis, angle) {
  if (angle === 0) return;
  _deltaQ.setFromAxisAngle(axis, angle);
  q.multiply(_deltaQ);
}
