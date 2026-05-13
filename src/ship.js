// The player ship: a cone mesh that flies with 6DOF using quaternions.
//
// Why quaternions? Euler angles (pitch/yaw/roll as three numbers) suffer
// from "gimbal lock" — at certain orientations two of the three axes
// collapse onto the same direction and you lose a degree of freedom.
// Quaternions are a 4-number representation of rotation that never has
// this problem, so they are the standard for flight / space sims.
import * as THREE from 'three';
import { shipConfig } from './shipConfig.js';

// Tunables live in `shipConfig` so the Upgrades app can mutate them.
// Read them through `shipConfig.xyz` here — do NOT cache locally or
// upgrades won't apply.

// --- Arwing-style procedural mesh ------------------------------------------
//
// Returned as a Three.js Group acting as `ship.mesh`. Object3D semantics
// (position, quaternion, visible) are unchanged so updateShip() and the
// chase camera don't care it's now a group.
//
// Local axes (matches the prior cone): +Z = forward (nose), +Y = up.
// Built from a handful of stock primitives so it stays in the
// procedural-assets style the rest of the project uses — no external
// model files.

const BODY_COLOR    = 0xd8dde3; // light grey-white fuselage
const COCKPIT_COLOR = 0x1a2a3a; // tinted canopy
const WING_COLOR    = 0x3a78d8; // arwing blue
const ACCENT_COLOR  = 0xf5c542; // gold-yellow tips

function makeWingGeometry(side /* +1 right, -1 left */) {
  // Top-down planform of one wing. X is outboard, Y is forward (+) / aft (-).
  // The shape sweeps the leading edge back as it goes outboard, like the
  // Arwing's silhouette in profile.
  const shape = new THREE.Shape();
  shape.moveTo(0,    0.25);    // root, leading edge (near nose-side of wing)
  shape.lineTo(0.95, -0.05);   // tip, leading edge — swept back & out
  shape.lineTo(0.90, -0.40);   // tip, trailing edge
  shape.lineTo(0,   -0.35);    // root, trailing edge
  shape.closePath();

  const geom = new THREE.ExtrudeGeometry(shape, {
    depth: 0.04,
    bevelEnabled: false,
  });
  // ExtrudeGeometry takes a 2D shape in XY and extrudes along +Z. We want a
  // wing that's flat in the XZ plane with a small vertical thickness — so
  // rotate it so the extruded axis becomes +Y.
  geom.rotateX(-Math.PI / 2);
  geom.translate(0, -0.02, 0);    // center the slim thickness on y=0
  if (side === -1) geom.scale(-1, 1, 1); // mirror for left wing
  return geom;
}

export function createShip() {
  const group = new THREE.Group();

  const bodyMat = new THREE.MeshStandardMaterial({
    color: BODY_COLOR, roughness: 0.4, metalness: 0.35, emissive: 0x0a1018,
  });
  const cockpitMat = new THREE.MeshStandardMaterial({
    color: COCKPIT_COLOR, roughness: 0.15, metalness: 0.7, emissive: 0x101a28,
  });
  const wingMat = new THREE.MeshStandardMaterial({
    color: WING_COLOR, roughness: 0.45, metalness: 0.3,
    emissive: 0x0b1c44, side: THREE.DoubleSide,
  });
  const accentMat = new THREE.MeshStandardMaterial({
    color: ACCENT_COLOR, roughness: 0.3, metalness: 0.5, emissive: 0x2a1d00,
  });

  // Fuselage: slim elongated box.
  const fuselage = new THREE.Mesh(
    new THREE.BoxGeometry(0.22, 0.18, 1.0),
    bodyMat,
  );
  group.add(fuselage);

  // Nose: cone tapering to the front.
  const noseGeom = new THREE.ConeGeometry(0.11, 0.45, 12);
  noseGeom.rotateX(Math.PI / 2); // apex now points +Z (forward)
  const nose = new THREE.Mesh(noseGeom, bodyMat);
  nose.position.z = 0.7;
  group.add(nose);

  // Cockpit canopy sitting on top of the forward fuselage.
  const cockpit = new THREE.Mesh(
    new THREE.BoxGeometry(0.14, 0.1, 0.34),
    cockpitMat,
  );
  cockpit.position.set(0, 0.13, 0.18);
  group.add(cockpit);

  // Wings — slightly canted up at the tips for an X-shape silhouette.
  const wingR = new THREE.Mesh(makeWingGeometry(+1), wingMat);
  wingR.position.set(0.08, 0, -0.05);
  wingR.rotation.z = -0.12;
  group.add(wingR);
  const wingL = new THREE.Mesh(makeWingGeometry(-1), wingMat);
  wingL.position.set(-0.08, 0, -0.05);
  wingL.rotation.z = 0.12;
  group.add(wingL);

  // Wing-tip cones: gold pointers at the trailing-outer corners.
  function makeTipCone() {
    const g = new THREE.ConeGeometry(0.06, 0.22, 10);
    g.rotateX(-Math.PI / 2); // apex points -Z (rearward)
    return g;
  }
  const tipR = new THREE.Mesh(makeTipCone(), accentMat);
  // tip Z roughly matches the wing trailing edge + dihedral lift.
  tipR.position.set(0.95 + 0.08, 0.11, -0.5);
  group.add(tipR);
  const tipL = new THREE.Mesh(makeTipCone(), accentMat);
  tipL.position.set(-0.95 - 0.08, 0.11, -0.5);
  group.add(tipL);

  // Tail fin: small vertical blade on top-rear.
  const tail = new THREE.Mesh(
    new THREE.BoxGeometry(0.03, 0.22, 0.22),
    bodyMat,
  );
  tail.position.set(0, 0.2, -0.4);
  group.add(tail);
  // Yellow accent at the fin's tip.
  const tailTip = new THREE.Mesh(
    new THREE.BoxGeometry(0.03, 0.06, 0.08),
    accentMat,
  );
  tailTip.position.set(0, 0.34, -0.32);
  group.add(tailTip);

  return {
    mesh: group,
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
  applyLocalRotation(ship.mesh.quaternion, _localAxis.set(1, 0, 0), input.pitch * shipConfig.pitchRate * dt);
  applyLocalRotation(ship.mesh.quaternion, _localAxis.set(0, 1, 0), input.yaw * shipConfig.yawRate * dt);
  applyLocalRotation(ship.mesh.quaternion, _localAxis.set(0, 0, 1), input.roll * shipConfig.rollRate * dt);
  ship.mesh.quaternion.normalize();

  // --- Translation: throttle pushes along the ship's local forward (+Z).
  _forward.set(0, 0, 1).applyQuaternion(ship.mesh.quaternion);

  const accel = input.throttle >= 0
    ? input.throttle * shipConfig.maxThrottleAccel
    : input.throttle * shipConfig.reverseThrottleAccel;
  // velocity += forward * accel * dt
  ship.velocity.addScaledVector(_forward, accel * dt);

  if (ship.arcadeDamping) {
    // Frame-rate-independent exponential decay: v *= exp(-rate * dt)
    const decay = Math.exp(-shipConfig.arcadeDampingRate * dt);
    ship.velocity.multiplyScalar(decay);
  }

  // Cap speed.
  if (ship.velocity.lengthSq() > shipConfig.maxSpeed * shipConfig.maxSpeed) {
    ship.velocity.setLength(shipConfig.maxSpeed);
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
