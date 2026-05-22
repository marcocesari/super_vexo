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
// Modelled on the Star Fox Arwing. The defining shapes: a slim angular
// white hull with a long sharp nose, near-horizontal swept wings (only a
// gentle dihedral), and a big swept VERTICAL FIN at each wingtip that
// extends both above and below the wing — that wingtip fin is the
// silhouette people recognise. Blue trim, a tinted bubble canopy, and
// glowing blue G-diffuser pods finish it.

const HULL_COLOR    = 0xeef1f5; // bright white hull + wings
const PANEL_COLOR   = 0x7c8896; // darker grey belly / mechanical panels
const COCKPIT_COLOR = 0x13386e; // deep tinted canopy glass
const STRIPE_COLOR  = 0x2f6fe0; // arwing blue trim
const ACCENT_COLOR  = 0xf5c542; // gold cannon tips
const GLOW_BLUE     = 0x49abff; // glowing blue (G-diffuser pods + rings)

// Wing planform, built for the RIGHT wing (+X outboard). The wing is two
// coplanar panels sharing an edge: a blue leading-edge wedge ('stripe')
// and the white main panel ('main'). It is a swept TRAPEZOID — wide root,
// narrower-but-still-square tip — not a sharp delta. Shape coords:
// X = outboard, Y = forward(+) / aft(-).
function makeWingPanel(part) {
  const s = new THREE.Shape();
  if (part === 'stripe') {
    s.moveTo(0.15,  0.34);   // root, leading edge
    s.lineTo(0.70,  0.13);   // tip, leading edge — modest sweep
    s.lineTo(0.70,  0.02);   // tip, inner edge of the stripe
    s.lineTo(0.15,  0.17);   // root, inner edge of the stripe
  } else {
    s.moveTo(0.15,  0.17);   // root, shared edge with the stripe
    s.lineTo(0.70,  0.02);   // tip, shared edge
    s.lineTo(0.70, -0.32);   // tip, trailing edge
    s.lineTo(0.15, -0.48);   // root, trailing edge
  }
  s.closePath();
  const g = new THREE.ExtrudeGeometry(s, { depth: 0.045, bevelEnabled: false });
  g.rotateX(Math.PI / 2);     // lie flat — shape Y → world Z (forward)
  g.translate(0, 0.0225, 0);  // centre the extruded thickness on Y = 0
  return g;
}

// The Arwing's signature wingtip fin: a swept vertical blade that
// extends both ABOVE and BELOW the wing. Side-profile pentagon
// (X = forward(+) / aft(-), Y = up) extruded thin, then turned so the
// thin axis runs along X.
function makeWingtipFinGeometry() {
  const s = new THREE.Shape();
  s.moveTo( 0.26,  0.02);    // leading point
  s.lineTo(-0.06,  0.48);    // top
  s.lineTo(-0.38,  0.12);    // upper trailing
  s.lineTo(-0.34, -0.12);    // lower trailing
  s.lineTo(-0.08, -0.32);    // bottom
  s.closePath();
  const g = new THREE.ExtrudeGeometry(s, { depth: 0.05, bevelEnabled: false });
  g.rotateY(-Math.PI / 2);   // thin extrusion now runs along X
  g.translate(0.025, 0, 0);  // centre the thickness on X = 0
  return g;
}

// A swept fin from a side-profile triangle (X = forward/aft, Y = up),
// extruded thin along X. Used for the central dorsal tail fin.
function makeSweptFinGeometry(len, height) {
  const s = new THREE.Shape();
  s.moveTo( 0.00, 0.00);
  s.lineTo(-0.06, height);
  s.lineTo(-len,  0.00);
  s.closePath();
  const g = new THREE.ExtrudeGeometry(s, { depth: 0.035, bevelEnabled: false });
  g.rotateY(-Math.PI / 2);
  g.translate(0.0175, 0, 0);
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

  // --- Fuselage: a slim faceted hexagonal hull, flattened so it reads
  // wider than tall, tapering slightly toward the engine.
  const bodyGeom = new THREE.CylinderGeometry(0.22, 0.18, 1.05, 6);
  bodyGeom.rotateX(Math.PI / 2);            // hex axis now along Z
  const body = new THREE.Mesh(bodyGeom, hullMat);
  body.scale.set(1.3, 0.7, 1);              // flatten: wide + low
  body.position.z = -0.05;
  group.add(body);

  // --- Long, sharp faceted nose cone — the slim Arwing snout.
  const noseGeom = new THREE.ConeGeometry(0.22, 0.92, 6);
  noseGeom.rotateX(Math.PI / 2);            // apex points +Z (forward)
  const nose = new THREE.Mesh(noseGeom, hullMat);
  nose.scale.set(1.3, 0.7, 1);
  nose.position.z = 0.935;                  // base meets the body front
  group.add(nose);

  // Belly panel — a darker slab under the hull for contrast.
  const belly = new THREE.Mesh(
    new THREE.BoxGeometry(0.42, 0.09, 0.92), panelMat,
  );
  belly.position.set(0, -0.16, -0.05);
  group.add(belly);

  // --- Bubble canopy: a low tinted-glass teardrop on the forward hull.
  const canopy = new THREE.Mesh(
    new THREE.SphereGeometry(0.19, 18, 12), cockpitMat,
  );
  canopy.scale.set(0.86, 0.6, 1.7);
  canopy.position.set(0, 0.13, 0.22);
  group.add(canopy);

  // --- Central dorsal tail fin near the rear of the hull.
  const tailFin = new THREE.Mesh(makeSweptFinGeometry(0.46, 0.36), hullMat);
  tailFin.position.set(0, 0.12, -0.2);
  group.add(tailFin);
  const tailFinTip = new THREE.Mesh(
    new THREE.BoxGeometry(0.04, 0.08, 0.13), accentMat,
  );
  tailFinTip.position.set(0, 0.47, -0.29);
  group.add(tailFinTip);

  // --- Wings: one per side, each its own group so the panel, wingtip
  // fin, laser cannon and G-diffuser all share the wing's gentle
  // dihedral. The left wing is an X-mirror of the right.
  for (const side of [+1, -1]) {
    const wing = new THREE.Group();

    wing.add(new THREE.Mesh(makeWingPanel('main'),   hullMat));
    wing.add(new THREE.Mesh(makeWingPanel('stripe'), stripeMat));

    // Big swept wingtip fin — extends above and below the wing.
    const fin = new THREE.Mesh(makeWingtipFinGeometry(), hullMat);
    fin.position.set(0.69, 0, -0.08);
    wing.add(fin);
    // Blue accent strip up the fin's leading edge.
    const finStripe = new THREE.Mesh(
      new THREE.BoxGeometry(0.06, 0.5, 0.05), stripeMat,
    );
    finStripe.position.set(0.69, 0.08, 0.12);
    finStripe.rotation.x = -0.5;
    wing.add(finStripe);

    // Laser cannon: a slim barrel on the wingtip, gold-tipped, aimed
    // forward past the wing's leading edge.
    const barrelGeom = new THREE.CylinderGeometry(0.028, 0.04, 0.56, 10);
    barrelGeom.rotateX(Math.PI / 2);          // lie along Z
    const barrel = new THREE.Mesh(barrelGeom, panelMat);
    barrel.position.set(0.69, 0.0, 0.3);
    wing.add(barrel);
    const barrelTip = new THREE.Mesh(
      new THREE.CylinderGeometry(0.03, 0.02, 0.15, 10), accentMat,
    );
    barrelTip.rotation.x = Math.PI / 2;
    barrelTip.position.set(0.69, 0.0, 0.62);
    wing.add(barrelTip);

    // Glowing blue G-diffuser pod at the wing root.
    const gdiff = new THREE.Mesh(
      new THREE.BoxGeometry(0.16, 0.13, 0.4), gdiffMat,
    );
    gdiff.position.set(0.28, -0.02, -0.28);
    wing.add(gdiff);

    // Mount the wing nearly horizontal — only a gentle upward dihedral.
    wing.position.set(side * 0.16, 0.0, -0.05);
    if (side === -1) wing.scale.x = -1;
    wing.rotation.z = side * 0.14;             // ~8° up
    group.add(wing);
  }

  // --- Twin engine nacelles + additive thrust flames at the rear.
  const engineGlowMat = new THREE.MeshBasicMaterial({
    color: 0x8fd0ff, transparent: true, opacity: 0.85,
    blending: THREE.AdditiveBlending, depthWrite: false,
  });
  const glows = [];
  for (const x of [-0.12, 0.12]) {
    const nacelleGeom = new THREE.CylinderGeometry(0.12, 0.095, 0.36, 8);
    nacelleGeom.rotateX(Math.PI / 2);
    const nacelle = new THREE.Mesh(nacelleGeom, panelMat);
    nacelle.position.set(x, -0.03, -0.66);
    group.add(nacelle);

    // Glowing exhaust ring inside the nacelle mouth.
    const ringGeom = new THREE.CylinderGeometry(0.082, 0.082, 0.07, 8);
    ringGeom.rotateX(Math.PI / 2);
    const ring = new THREE.Mesh(ringGeom, gdiffMat);
    ring.position.set(x, -0.03, -0.82);
    group.add(ring);

    // The flame cone itself — driven by updateFlame().
    const glowGeom = new THREE.ConeGeometry(0.08, 0.38, 14);
    glowGeom.rotateX(-Math.PI / 2);           // apex points -Z (aft)
    const glow = new THREE.Mesh(glowGeom, engineGlowMat);
    glow.position.set(x, -0.03, -1.04);
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
