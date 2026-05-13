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

// One Arwing wing — a long, narrow blade. The Arwing has *four* of these
// arranged in an X around the fuselage (upper-left, upper-right,
// lower-left, lower-right), all rooted at the same point on the body.
// Each one tapers to a point at the outer-trailing corner; we tint the
// last 25% gold so it reads as the iconic yellow tip without needing a
// separate cone mesh.
function makeWingGeometry(side /* +1 right, -1 left */) {
  // Top-down planform. X = outboard, Y = forward (+) / aft (-).
  const shape = new THREE.Shape();
  shape.moveTo(0,     0.20);   // root, leading edge
  shape.lineTo(1.05, -0.05);   // mid-span, leading edge — slight sweep
  shape.lineTo(1.20, -0.55);   // tip — long pointed trailing corner
  shape.lineTo(0,    -0.30);   // root, trailing edge
  shape.closePath();

  const geom = new THREE.ExtrudeGeometry(shape, {
    depth: 0.04,
    bevelEnabled: false,
  });
  // Extrude is along +Z; rotate so it's the vertical thickness.
  geom.rotateX(-Math.PI / 2);
  geom.translate(0, -0.02, 0);
  if (side === -1) geom.scale(-1, 1, 1);
  return geom;
}

// Slim cone used for the gold tip pointer at the trailing corner of
// each wing. Apex points rearward (-Z).
function makeTipConeGeometry() {
  const g = new THREE.ConeGeometry(0.045, 0.28, 10);
  g.rotateX(-Math.PI / 2);
  return g;
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

  // --- Fuselage. Two stacked boxes give a faceted "cockpit cowl" look
  // instead of one flat slab.
  const fuselage = new THREE.Mesh(
    new THREE.BoxGeometry(0.22, 0.16, 1.0),
    bodyMat,
  );
  group.add(fuselage);
  const upperHull = new THREE.Mesh(
    new THREE.BoxGeometry(0.18, 0.08, 0.75),
    bodyMat,
  );
  upperHull.position.set(0, 0.1, -0.05);
  group.add(upperHull);

  // --- Long pointed nose.
  const noseGeom = new THREE.ConeGeometry(0.1, 0.6, 12);
  noseGeom.rotateX(Math.PI / 2); // apex points +Z forward
  const nose = new THREE.Mesh(noseGeom, bodyMat);
  nose.position.z = 0.78;
  group.add(nose);

  // Small fin on top of the nose (visible on the Arwing's profile).
  const noseFin = new THREE.Mesh(
    new THREE.BoxGeometry(0.02, 0.1, 0.22),
    bodyMat,
  );
  noseFin.position.set(0, 0.13, 0.55);
  group.add(noseFin);
  const noseFinTip = new THREE.Mesh(
    new THREE.BoxGeometry(0.02, 0.06, 0.06),
    accentMat,
  );
  noseFinTip.position.set(0, 0.22, 0.55);
  group.add(noseFinTip);

  // --- Cockpit canopy sitting forward on the upper hull.
  const cockpit = new THREE.Mesh(
    new THREE.BoxGeometry(0.14, 0.08, 0.38),
    cockpitMat,
  );
  cockpit.position.set(0, 0.18, 0.18);
  group.add(cockpit);

  // --- Four wings in an X. Each wing roots at the same point on the
  // fuselage and rotates around the longitudinal axis to its position.
  // Roll angle is fairly steep (~50°) so the silhouette reads as an X
  // from front-on, like the real Arwing.
  const ROLL = Math.PI * 0.28; // ~50 degrees from horizontal
  const wingPositions = [
    { side: +1, roll: -ROLL },        // right upper
    { side: +1, roll:  ROLL },        // right lower
    { side: -1, roll:  ROLL },        // left upper
    { side: -1, roll: -ROLL },        // left lower
  ];
  for (const { side, roll } of wingPositions) {
    const w = new THREE.Mesh(makeWingGeometry(side), wingMat);
    w.position.set(0, 0, -0.05);
    w.rotation.z = roll;
    group.add(w);

    // Gold tip pointer riding on the same root + roll as the wing.
    const tip = new THREE.Mesh(makeTipConeGeometry(), accentMat);
    tip.position.set(side * (1.2 + 0.05), 0, -0.55);
    // Apply the same roll so the tip sits exactly at the wing's outer
    // trailing corner.
    tip.position.applyEuler(new THREE.Euler(0, 0, roll));
    group.add(tip);
  }

  // --- Vertical tail fin (bigger now to stand out behind the wings).
  const tail = new THREE.Mesh(
    new THREE.BoxGeometry(0.03, 0.28, 0.26),
    bodyMat,
  );
  tail.position.set(0, 0.22, -0.42);
  group.add(tail);
  const tailTip = new THREE.Mesh(
    new THREE.BoxGeometry(0.03, 0.08, 0.1),
    accentMat,
  );
  tailTip.position.set(0, 0.4, -0.34);
  group.add(tailTip);

  // --- Twin engine exhausts at the rear with a soft additive glow.
  const engineGlowMat = new THREE.MeshBasicMaterial({
    color: 0x6ec1ff,
    transparent: true,
    opacity: 0.85,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });
  for (const x of [-0.085, 0.085]) {
    const housing = new THREE.Mesh(
      new THREE.BoxGeometry(0.08, 0.08, 0.22),
      bodyMat,
    );
    housing.position.set(x, -0.04, -0.46);
    group.add(housing);
    const glowGeom = new THREE.ConeGeometry(0.05, 0.22, 12);
    glowGeom.rotateX(-Math.PI / 2); // apex points -Z (out the back)
    const glow = new THREE.Mesh(glowGeom, engineGlowMat);
    glow.position.set(x, -0.04, -0.7);
    group.add(glow);
  }

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
