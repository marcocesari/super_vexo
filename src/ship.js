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

// One big unified blue triangular wing per side. Replaces the 4-wing
// X with two large delta panels — each one is a single triangle that
// extends outward from the fuselage, sweeping back to a sharp point.
function makeUnifiedWingGeometry(side /* +1 right, -1 left */) {
  // Top-down planform: X = outboard, Y = forward (+) / aft (-).
  const shape = new THREE.Shape();
  shape.moveTo(0,     0.40);   // root, leading edge near cockpit
  shape.lineTo(1.20, -0.15);   // outer tip, swept back — sharp point
  shape.lineTo(1.05, -0.45);   // tip, trailing edge
  shape.lineTo(0,    -0.45);   // root, trailing edge
  shape.closePath();
  const geom = new THREE.ExtrudeGeometry(shape, {
    depth: 0.07, bevelEnabled: false,
  });
  geom.rotateX(-Math.PI / 2);
  geom.translate(0, -0.035, 0);
  if (side === -1) geom.scale(-1, 1, 1);
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
    color: WING_COLOR, roughness: 0.4, metalness: 0.35, emissive: 0x0b1c44,
  });
  const accentMat = new THREE.MeshStandardMaterial({
    color: ACCENT_COLOR, roughness: 0.3, metalness: 0.5, emissive: 0x2a1d00,
  });

  // --- Fuselage: two stacked boxes for a faceted hull (back to the
  // pre-cone design the user asked for: "make it as before").
  const fuselage = new THREE.Mesh(
    new THREE.BoxGeometry(0.22, 0.16, 1.0), bodyMat,
  );
  group.add(fuselage);
  const upperHull = new THREE.Mesh(
    new THREE.BoxGeometry(0.18, 0.08, 0.75), bodyMat,
  );
  upperHull.position.set(0, 0.1, -0.05);
  group.add(upperHull);

  // --- Long pointed nose cone.
  const noseGeom = new THREE.ConeGeometry(0.1, 0.6, 12);
  noseGeom.rotateX(Math.PI / 2);
  const nose = new THREE.Mesh(noseGeom, bodyMat);
  nose.position.z = 0.78;
  group.add(nose);

  // Small fin on top of the nose.
  const noseFin = new THREE.Mesh(
    new THREE.BoxGeometry(0.02, 0.1, 0.22), bodyMat,
  );
  noseFin.position.set(0, 0.13, 0.55);
  group.add(noseFin);
  const noseFinTip = new THREE.Mesh(
    new THREE.BoxGeometry(0.02, 0.06, 0.06), accentMat,
  );
  noseFinTip.position.set(0, 0.22, 0.55);
  group.add(noseFinTip);

  // --- Cockpit canopy on top of the forward hull.
  const cockpit = new THREE.Mesh(
    new THREE.BoxGeometry(0.14, 0.08, 0.38), cockpitMat,
  );
  cockpit.position.set(0, 0.18, 0.18);
  group.add(cockpit);

  // --- Two big unified blue triangular wings — ONE per side, no X.
  // Slight upward dihedral so they don't look perfectly flat.
  for (const side of [+1, -1]) {
    const wing = new THREE.Mesh(makeUnifiedWingGeometry(side), wingMat);
    wing.position.set(0, 0, -0.15);
    wing.rotation.z = side * 0.06;          // gentle upward dihedral
    group.add(wing);

    // Gold spike at each wing's outer-trailing tip.
    const tipGeom = new THREE.ConeGeometry(0.06, 0.30, 10);
    tipGeom.rotateX(-Math.PI / 2);          // apex points -Z (rearward)
    const tip = new THREE.Mesh(tipGeom, accentMat);
    tip.position.set(side * 1.10, side * 0.06 * 1.10, -0.60);
    group.add(tip);
  }

  // --- Tall vertical tail fin.
  const tailShape = new THREE.Shape();
  tailShape.moveTo(0,    0.0);
  tailShape.lineTo(0,    0.45);
  tailShape.lineTo(-0.18, 0.45);
  tailShape.lineTo(-0.32, 0.0);
  tailShape.closePath();
  const tailGeom = new THREE.ExtrudeGeometry(tailShape, {
    depth: 0.04, bevelEnabled: false,
  });
  tailGeom.rotateY(-Math.PI / 2);
  tailGeom.translate(0, 0.08, -0.20);
  const tail = new THREE.Mesh(tailGeom, bodyMat);
  group.add(tail);
  const tailTip = new THREE.Mesh(
    new THREE.BoxGeometry(0.04, 0.08, 0.12), accentMat,
  );
  tailTip.position.set(0, 0.49, -0.17);
  group.add(tailTip);

  // --- Twin engine exhausts at the rear with a soft additive glow.
  const engineGlowMat = new THREE.MeshBasicMaterial({
    color: 0x6ec1ff, transparent: true, opacity: 0.85,
    blending: THREE.AdditiveBlending, depthWrite: false,
  });
  const glows = [];
  for (const x of [-0.085, 0.085]) {
    const housing = new THREE.Mesh(
      new THREE.BoxGeometry(0.08, 0.08, 0.22), bodyMat,
    );
    housing.position.set(x, -0.04, -0.46);
    group.add(housing);
    const glowGeom = new THREE.ConeGeometry(0.05, 0.22, 12);
    glowGeom.rotateX(-Math.PI / 2);
    const glow = new THREE.Mesh(glowGeom, engineGlowMat);
    glow.position.set(x, -0.04, -0.7);
    glow.visible = false;        // unlit until thrust starts
    glows.push(glow);
    group.add(glow);
  }

  return {
    mesh: group,
    velocity: new THREE.Vector3(),
    arcadeDamping: false,
    // Engine flame: meshes + shared material so updateShip can drive
    // them, and `flame` — the eased 0..1 intensity (0 = no flame).
    glows,
    glowMat: engineGlowMat,
    flame: 0,
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

  // --- Engine flame: builds up while thrusting, dies out when braking.
  updateFlame(ship, input.throttle, dt);

  // --- Translation: throttle pushes along the ship's local forward (+Z).
  // The joystick must be pushed forward to fly. The moment it isn't
  // (centered or pulled back) the ship stops dead — no coasting.
  if (input.throttle <= 0) {
    ship.velocity.set(0, 0, 0);
    return;
  }

  _forward.set(0, 0, 1).applyQuaternion(ship.mesh.quaternion);

  const accel = input.throttle * shipConfig.maxThrottleAccel;
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

// Drive the twin engine flames. `ship.flame` eases toward the throttle:
// it ramps UP fast when thrusting and dies DOWN fast when braking, like
// real exhaust catching and going out. The eased level then sets the
// cones' length (scale) and brightness (opacity), with a small flicker
// so a lit flame never looks frozen.
function updateFlame(ship, throttle, dt) {
  const target = throttle > 0 ? throttle : 0;
  // Exponential approach — quicker to ignite than to extinguish.
  const rate = target > ship.flame ? 18 : 11;
  ship.flame += (target - ship.flame) * Math.min(1, rate * dt);
  if (ship.flame < 0.002) ship.flame = 0;

  const lit = ship.flame > 0;
  // Flicker only while actually burning.
  const flicker = lit ? 0.85 + 0.15 * Math.sin(performance.now() * 0.05) : 1;
  ship.glowMat.opacity = 0.85 * ship.flame * flicker;
  for (const glow of ship.glows) {
    glow.visible = lit;
    // Stretch the cone back as thrust climbs; flicker its length too.
    glow.scale.set(ship.flame, ship.flame, (0.4 + ship.flame) * flicker);
  }
}

// Multiply `q` on the right by a rotation of `angle` around the local
// `axis` — i.e. apply the rotation in the object's local frame.
function applyLocalRotation(q, axis, angle) {
  if (angle === 0) return;
  _deltaQ.setFromAxisAngle(axis, angle);
  q.multiply(_deltaQ);
}
