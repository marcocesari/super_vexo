// The player ship: an Arwing-style fighter that flies with 6DOF using
// quaternions.
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
// Local axes: +Z = forward (nose), +Y = up, +X = right. Built from stock
// primitives so it stays in the procedural-assets style the rest of the
// project uses — no external model files.
//
// Modelled on the Star Fox Arwing: a white faceted hull with bold blue
// trim, a deep-blue bubble canopy, wings raised at a strong dihedral
// with wingtip laser cannons, and glowing blue G-diffuser pods.

const HULL_COLOR    = 0xeef1f5; // bright white hull + wings
const PANEL_COLOR   = 0x7c8896; // darker grey belly / mechanical panels
const COCKPIT_COLOR = 0x13386e; // deep tinted canopy glass
const STRIPE_COLOR  = 0x2f6fe0; // arwing blue trim
const ACCENT_COLOR  = 0xf5c542; // gold cannon tips
const GLOW_BLUE     = 0x49abff; // glowing blue (G-diffuser pods + rings)

// Wing planform, built for the RIGHT wing (+X outboard). The wing is two
// coplanar panels sharing an edge: a blue leading-edge wedge ('stripe')
// and the white main panel ('main'). Shape coords: X = outboard,
// Y = forward(+) / aft(-).
function makeWingPanel(part) {
  const s = new THREE.Shape();
  if (part === 'stripe') {
    s.moveTo(0.13,  0.44);   // root, leading edge
    s.lineTo(1.20,  0.04);   // tip, leading edge — swept back
    s.lineTo(1.17, -0.12);   // tip, inner edge of the stripe
    s.lineTo(0.13,  0.22);   // root, inner edge of the stripe
  } else {
    s.moveTo(0.13,  0.22);   // root, shared edge with the stripe
    s.lineTo(1.17, -0.12);   // tip, shared edge
    s.lineTo(1.18, -0.48);   // tip, trailing edge
    s.lineTo(0.13, -0.56);   // root, trailing edge
  }
  s.closePath();
  const g = new THREE.ExtrudeGeometry(s, { depth: 0.05, bevelEnabled: false });
  g.rotateX(Math.PI / 2);    // lie flat — shape Y → world Z (forward)
  g.translate(0, 0.025, 0);  // centre the extruded thickness on Y = 0
  return g;
}

// Vertical wingtip fin that carries the laser cannon. Side-profile
// triangle (coords: X = forward(+) / aft(-), Y = up) extruded thin, then
// turned so the thin axis runs along X.
function makeWingletGeometry() {
  const s = new THREE.Shape();
  s.moveTo( 0.22,  0.00);    // leading, at wing level
  s.lineTo( 0.14,  0.36);    // top
  s.lineTo(-0.26,  0.00);    // trailing, swept back
  s.closePath();
  const g = new THREE.ExtrudeGeometry(s, { depth: 0.05, bevelEnabled: false });
  g.rotateY(-Math.PI / 2);   // thin extrusion now runs along X
  g.translate(0.025, 0, 0);  // centre the thickness on X = 0
  return g;
}

export function createShip() {
  const group = new THREE.Group();

  // DoubleSide on every hull material: the left wing is built by
  // x-mirroring the right wing's group (scale.x = -1), which inverts
  // face winding — DoubleSide keeps it lit correctly either way.
  const hullMat = new THREE.MeshStandardMaterial({
    color: HULL_COLOR, roughness: 0.42, metalness: 0.45,
    emissive: 0x0c1016, side: THREE.DoubleSide,
  });
  const panelMat = new THREE.MeshStandardMaterial({
    color: PANEL_COLOR, roughness: 0.6, metalness: 0.5,
    emissive: 0x05080c, side: THREE.DoubleSide,
  });
  const cockpitMat = new THREE.MeshStandardMaterial({
    color: COCKPIT_COLOR, roughness: 0.08, metalness: 0.6,
    emissive: 0x0a1c3a, side: THREE.DoubleSide,
  });
  const stripeMat = new THREE.MeshStandardMaterial({
    color: STRIPE_COLOR, roughness: 0.35, metalness: 0.45,
    emissive: 0x0a1c4a, side: THREE.DoubleSide,
  });
  const accentMat = new THREE.MeshStandardMaterial({
    color: ACCENT_COLOR, roughness: 0.3, metalness: 0.55,
    emissive: 0x2a1d00, side: THREE.DoubleSide,
  });
  // Self-lit blue for the G-diffuser pods and exhaust rings.
  const gdiffMat = new THREE.MeshStandardMaterial({
    color: GLOW_BLUE, roughness: 0.3, metalness: 0.2,
    emissive: GLOW_BLUE, emissiveIntensity: 1.4, side: THREE.DoubleSide,
  });

  // --- Fuselage: a faceted hexagonal hull, flattened so it reads wider
  // than tall — the sleek Arwing profile.
  const bodyGeom = new THREE.CylinderGeometry(0.17, 0.17, 1.0, 6);
  bodyGeom.rotateX(Math.PI / 2);            // hex axis now along Z
  const body = new THREE.Mesh(bodyGeom, hullMat);
  body.scale.set(1.3, 0.74, 1);             // flatten: wide + low
  body.position.z = -0.05;
  group.add(body);

  // --- Sharp faceted nose cone, same flattened cross-section.
  const noseGeom = new THREE.ConeGeometry(0.17, 0.7, 6);
  noseGeom.rotateX(Math.PI / 2);            // apex points +Z (forward)
  const nose = new THREE.Mesh(noseGeom, hullMat);
  nose.scale.set(1.3, 0.74, 1);
  nose.position.z = 0.80;                   // base meets the body front
  group.add(nose);

  // Belly panel — a darker slab under the hull for contrast.
  const belly = new THREE.Mesh(
    new THREE.BoxGeometry(0.34, 0.08, 0.86), panelMat,
  );
  belly.position.set(0, -0.13, -0.04);
  group.add(belly);

  // --- Bubble canopy: a tinted-glass teardrop on the forward hull.
  const canopy = new THREE.Mesh(
    new THREE.SphereGeometry(0.16, 18, 12), cockpitMat,
  );
  canopy.scale.set(0.9, 0.66, 1.6);
  canopy.position.set(0, 0.13, 0.16);
  group.add(canopy);

  // Small swept dorsal fin behind the canopy. Side-profile triangle
  // (X = forward/aft, Y = up) extruded thin along X.
  const dorsalShape = new THREE.Shape();
  dorsalShape.moveTo( 0.00, 0.00);
  dorsalShape.lineTo(-0.03, 0.24);
  dorsalShape.lineTo(-0.30, 0.00);
  dorsalShape.closePath();
  const dorsalGeom = new THREE.ExtrudeGeometry(dorsalShape, {
    depth: 0.035, bevelEnabled: false,
  });
  dorsalGeom.rotateY(-Math.PI / 2);
  dorsalGeom.translate(0.0175, 0.12, -0.16);
  group.add(new THREE.Mesh(dorsalGeom, hullMat));

  // --- Wings: one per side, each its own group so the panels, wingtip
  // fin, laser cannon and G-diffuser all share the wing's upward
  // dihedral. The left wing is an X-mirror of the right.
  for (const side of [+1, -1]) {
    const wing = new THREE.Group();

    wing.add(new THREE.Mesh(makeWingPanel('main'),   hullMat));
    wing.add(new THREE.Mesh(makeWingPanel('stripe'), stripeMat));

    // Vertical wingtip fin.
    const winglet = new THREE.Mesh(makeWingletGeometry(), panelMat);
    winglet.position.set(1.16, -0.01, -0.12);
    wing.add(winglet);

    // Laser cannon: a slim barrel on the wingtip, gold-tipped, aimed
    // forward past the wing's leading edge.
    const barrelGeom = new THREE.CylinderGeometry(0.03, 0.045, 0.62, 10);
    barrelGeom.rotateX(Math.PI / 2);          // lie along Z
    const barrel = new THREE.Mesh(barrelGeom, panelMat);
    barrel.position.set(1.16, 0.01, 0.30);
    wing.add(barrel);
    const barrelTip = new THREE.Mesh(
      new THREE.CylinderGeometry(0.032, 0.022, 0.16, 10), accentMat,
    );
    barrelTip.rotation.x = Math.PI / 2;
    barrelTip.position.set(1.16, 0.01, 0.64);
    wing.add(barrelTip);

    // Glowing blue G-diffuser pod at the wing root.
    const gdiff = new THREE.Mesh(
      new THREE.BoxGeometry(0.15, 0.12, 0.4), gdiffMat,
    );
    gdiff.position.set(0.22, -0.02, -0.3);
    wing.add(gdiff);

    // Mount the wing and give it a strong upward dihedral.
    wing.position.set(side * 0.13, 0.04, -0.08);
    if (side === -1) wing.scale.x = -1;
    wing.rotation.z = side * 0.4;             // ~23° up
    group.add(wing);
  }

  // --- Twin engine nacelles + additive thrust flames at the rear.
  const engineGlowMat = new THREE.MeshBasicMaterial({
    color: 0x8fd0ff, transparent: true, opacity: 0.85,
    blending: THREE.AdditiveBlending, depthWrite: false,
  });
  const glows = [];
  for (const x of [-0.12, 0.12]) {
    const nacelleGeom = new THREE.CylinderGeometry(0.105, 0.085, 0.34, 8);
    nacelleGeom.rotateX(Math.PI / 2);
    const nacelle = new THREE.Mesh(nacelleGeom, panelMat);
    nacelle.position.set(x, -0.02, -0.62);
    group.add(nacelle);

    // Glowing exhaust ring inside the nacelle mouth.
    const ringGeom = new THREE.CylinderGeometry(0.072, 0.072, 0.06, 8);
    ringGeom.rotateX(Math.PI / 2);
    const ring = new THREE.Mesh(ringGeom, gdiffMat);
    ring.position.set(x, -0.02, -0.77);
    group.add(ring);

    // The flame cone itself — driven by updateFlame().
    const glowGeom = new THREE.ConeGeometry(0.07, 0.36, 14);
    glowGeom.rotateX(-Math.PI / 2);           // apex points -Z (aft)
    const glow = new THREE.Mesh(glowGeom, engineGlowMat);
    glow.position.set(x, -0.02, -0.98);
    glow.visible = false;                     // unlit until thrust starts
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
    // True while the stick isn't pushed forward — main.js uses it to
    // keep velocity zeroed after collision resolution.
    braking: true,
  };
}

// Reusable scratch vectors so the per-frame update allocates nothing.
const _localAxis = new THREE.Vector3();
const _deltaQ = new THREE.Quaternion();
const _forward = new THREE.Vector3();

// Minimum forward throttle that counts as "stick pushed forward". Below
// it the ship brakes and the flames go out — keeps stick drift from
// nudging the ship or leaving the engines lit.
const FORWARD_THRESHOLD = 0.25;

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

  // The ship only flies when the stick is pushed CLEARLY forward. A
  // throttle below this counts as "not forward" — that covers a centred
  // stick, a pulled-back stick, and small analog drift that would
  // otherwise creep the ship along and keep the flames lit.
  const thrusting = input.throttle >= FORWARD_THRESHOLD;

  // --- Engine flame: builds up while thrusting, dies out otherwise.
  updateFlame(ship, thrusting ? input.throttle : 0, dt);

  // --- Translation: throttle pushes along the ship's local forward (+Z).
  // Not pushed forward → stop dead this frame. `braking` tells main.js to
  // re-zero velocity after collision resolution so nothing creeps back.
  if (!thrusting) {
    ship.velocity.set(0, 0, 0);
    ship.braking = true;
    return;
  }
  ship.braking = false;

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
