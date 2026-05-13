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

export function createShip() {
  const group = new THREE.Group();

  const bodyMat = new THREE.MeshStandardMaterial({
    color: BODY_COLOR, roughness: 0.4, metalness: 0.35, emissive: 0x0a1018,
  });
  const cockpitMat = new THREE.MeshStandardMaterial({
    color: COCKPIT_COLOR, roughness: 0.12, metalness: 0.8, emissive: 0x101a28,
  });
  const wingMat = new THREE.MeshStandardMaterial({
    color: WING_COLOR, roughness: 0.4, metalness: 0.35, emissive: 0x0b1c44,
  });
  const accentMat = new THREE.MeshStandardMaterial({
    color: ACCENT_COLOR, roughness: 0.3, metalness: 0.5, emissive: 0x2a1d00,
  });

  // ============================================================
  // STEP 1 — "Imagine a big cone, with little cones on the sides"
  // ============================================================

  // --- Big white cone as the body. Apex points forward → sharp nose.
  const bodyGeom = new THREE.ConeGeometry(0.18, 1.5, 16);
  bodyGeom.rotateX(Math.PI / 2);            // apex now along +Z (forward)
  const body = new THREE.Mesh(bodyGeom, bodyMat);
  body.position.z = 0.25;                   // shift forward so the nose sits at +1.0
  group.add(body);

  // --- Four little blue cones on the sides as wings. Two per side,
  //     one canted slightly up and one slightly down. Apex points
  //     OUTWARD (away from the body) — they're spikes, not flat panels.
  const WING_LIFT = Math.PI * 0.10;         // ~18° up/down off horizontal
  const wingPositions = [
    { side: +1, tilt: +WING_LIFT },         // upper right
    { side: +1, tilt: -WING_LIFT },         // lower right
    { side: -1, tilt: +WING_LIFT },         // upper left
    { side: -1, tilt: -WING_LIFT },         // lower left
  ];
  for (const { side, tilt } of wingPositions) {
    const wingGeom = new THREE.ConeGeometry(0.12, 1.0, 14);
    // Cone apex points +Y by default. Rotate so it points +X (outboard).
    wingGeom.rotateZ(-Math.PI / 2);
    const wing = new THREE.Mesh(wingGeom, wingMat);
    // Anchor at the body and offset outboard by half the cone length so
    // the wing's BASE meets the fuselage and the APEX (= the spike tip)
    // is the outer end.
    wing.position.set(side * 0.55, 0, -0.10);
    if (side === -1) wing.rotation.z = Math.PI;   // mirror cone to point -X
    wing.rotation.x = tilt;                       // up/down cant
    group.add(wing);

    // Gold spike tip at the apex of each blue wing-cone.
    const tipGeom = new THREE.ConeGeometry(0.05, 0.28, 10);
    tipGeom.rotateZ(-Math.PI / 2);                // apex along +X
    const tip = new THREE.Mesh(tipGeom, accentMat);
    tip.position.set(side * (1.10), 0, -0.10);    // just past the wing apex
    if (side === -1) tip.rotation.z = Math.PI;
    tip.rotation.x = tilt;
    group.add(tip);
  }

  // ============================================================
  // STEP 2 — "Make it like in the video"
  // ============================================================

  // --- Two little cones on the sides of the body itself — sit next
  // to the cockpit as side-pod accents (separate from the four wing
  // spikes above). Apex points outward.
  for (const side of [+1, -1]) {
    const podGeom = new THREE.ConeGeometry(0.06, 0.32, 10);
    podGeom.rotateZ(-Math.PI / 2);              // apex points +X
    const pod = new THREE.Mesh(podGeom, wingMat);
    pod.position.set(side * 0.28, 0.02, 0.10);  // hugged against body, near cockpit
    if (side === -1) pod.rotation.z = Math.PI;  // mirror to point -X
    group.add(pod);
  }

  // --- Cabin / cockpit canopy with a clear window-frame pattern.
  //     A dark cylinder (the glass), with thin white longitudinal bars
  //     wrapped around it dividing it into visible windows.
  const canopyGeom = new THREE.CylinderGeometry(0.115, 0.135, 0.38, 8);
  canopyGeom.rotateX(Math.PI / 2);                // axis along +Z
  const canopy = new THREE.Mesh(canopyGeom, cockpitMat);
  canopy.position.set(0, 0.06, 0.22);
  group.add(canopy);
  // Window-frame bars — 4 around the canopy at top, bottom, left, right.
  for (const a of [0, Math.PI / 2, Math.PI, -Math.PI / 2]) {
    const bar = new THREE.Mesh(
      new THREE.BoxGeometry(0.018, 0.018, 0.40),
      bodyMat,
    );
    const r = 0.125;
    bar.position.set(
      Math.cos(a) * r,
      0.06 + Math.sin(a) * r,
      0.22,
    );
    group.add(bar);
  }
  // Two short circumferential bars at the front + back of the canopy,
  // selling the "frame around the windows" look.
  for (const z of [0.40, 0.05]) {
    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(0.125, 0.018, 6, 14),
      bodyMat,
    );
    ring.position.set(0, 0.06, z);
    group.add(ring);
  }

  // --- Tall vertical tail fin above the back of the body.
  const tailShape = new THREE.Shape();
  tailShape.moveTo(0,    0.0);
  tailShape.lineTo(0,    0.42);
  tailShape.lineTo(-0.18, 0.42);
  tailShape.lineTo(-0.32, 0.0);
  tailShape.closePath();
  const tailGeom = new THREE.ExtrudeGeometry(tailShape, {
    depth: 0.04, bevelEnabled: false,
  });
  tailGeom.rotateY(-Math.PI / 2);
  tailGeom.translate(0, 0.06, -0.25);
  const tail = new THREE.Mesh(tailGeom, bodyMat);
  group.add(tail);
  const tailTip = new THREE.Mesh(
    new THREE.BoxGeometry(0.04, 0.08, 0.12),
    accentMat,
  );
  tailTip.position.set(0, 0.46, -0.22);
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
      new THREE.CylinderGeometry(0.05, 0.05, 0.18, 10),
      bodyMat,
    );
    housing.rotation.x = Math.PI / 2;
    housing.position.set(x, -0.03, -0.55);
    group.add(housing);
    const glowGeom = new THREE.ConeGeometry(0.045, 0.2, 12);
    glowGeom.rotateX(-Math.PI / 2);                 // apex points -Z
    const glow = new THREE.Mesh(glowGeom, engineGlowMat);
    glow.position.set(x, -0.03, -0.75);
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
