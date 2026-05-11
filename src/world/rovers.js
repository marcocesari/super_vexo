// The broken Mars rovers. Each rover is a small THREE.Group built
// from boxes + cylinders so we don't need an asset file — same
// discipline as the rest of the project: procedural where possible.
//
// Each rover holds its own state ({fixed, repairProgress, ...}). The
// gameplay code in src/mission.js owns the high-level transitions.
import * as THREE from 'three';
import { MARS_POSITION, MARS_RADIUS } from './mars.js';

// Real Mars rovers, in chronological-ish order. Educational hit for
// Marco — Sojourner (1997) is the oldest still on the surface; the
// list extends through Perseverance (2021). Ingenuity is in the
// stretch goals (it's a helicopter, deserves its own treatment).
export const ROVER_NAMES = [
  'Sojourner',
  'Spirit',
  'Opportunity',
  'Curiosity',
  'Perseverance',
  'Zhurong',
];

// Spawn rovers in a shell *outside* Mars so they're flyable-to. We
// don't drop them onto the surface because that would require a
// proper landing minigame; we treat them as orbital debris.
const SPAWN_INNER_RADIUS = MARS_RADIUS + 18; // above the surface
const SPAWN_OUTER_RADIUS = MARS_RADIUS + 60; // well within draw range
const ROVER_CREDIT_VALUE = 60;

const BODY_COLOR = 0x7a8088;        // dusty grey body
const BODY_COLOR_FIXED = 0x52e0ff;  // cool cyan once repaired
const WHEEL_COLOR = 0x202428;
const PANEL_COLOR = 0x103048;       // solar panel hint

function rand(a, b) { return a + Math.random() * (b - a); }

/**
 * Build one rover group:
 *   - body: a flat box
 *   - 4 wheels: short cylinders, rotated to roll along the body's long axis
 *   - solar panel: a thin lighter box on top
 *   - antenna: a thin tall cylinder with a small sphere on top
 */
function buildRoverMesh() {
  const group = new THREE.Group();

  const bodyMat = new THREE.MeshStandardMaterial({
    color: BODY_COLOR,
    roughness: 0.7,
    metalness: 0.3,
    emissive: 0x000000,
  });
  const body = new THREE.Mesh(new THREE.BoxGeometry(2.2, 0.7, 1.4), bodyMat);
  body.position.y = 0.45;
  group.add(body);

  const panel = new THREE.Mesh(
    new THREE.BoxGeometry(1.8, 0.1, 1.1),
    new THREE.MeshStandardMaterial({
      color: PANEL_COLOR, roughness: 0.4, metalness: 0.8, emissive: 0x051420,
    }),
  );
  panel.position.y = 0.85;
  group.add(panel);

  const wheelGeom = new THREE.CylinderGeometry(0.32, 0.32, 0.2, 12);
  wheelGeom.rotateZ(Math.PI / 2); // wheels roll around X axis
  const wheelMat = new THREE.MeshStandardMaterial({
    color: WHEEL_COLOR, roughness: 0.95, metalness: 0.1,
  });
  const wheelOffsetsX = [-0.85, 0.85];
  const wheelOffsetsZ = [-0.55, 0.55];
  for (const x of wheelOffsetsX) {
    for (const z of wheelOffsetsZ) {
      const w = new THREE.Mesh(wheelGeom, wheelMat);
      w.position.set(x, 0.1, z);
      group.add(w);
    }
  }

  const antenna = new THREE.Mesh(
    new THREE.CylinderGeometry(0.04, 0.04, 0.8, 6),
    new THREE.MeshStandardMaterial({ color: 0xaaaaaa, roughness: 0.6, metalness: 0.5 }),
  );
  antenna.position.set(0.6, 1.2, 0);
  group.add(antenna);
  const antennaBall = new THREE.Mesh(
    new THREE.SphereGeometry(0.1, 8, 6),
    new THREE.MeshStandardMaterial({ color: 0xff5555, emissive: 0x440000 }),
  );
  antennaBall.position.set(0.6, 1.65, 0);
  group.add(antennaBall);

  return { group, bodyMat };
}

/** Random point on a spherical shell around Mars. */
function spawnPosition() {
  const u = Math.random();
  const v = Math.random();
  const theta = 2 * Math.PI * u;
  const phi = Math.acos(2 * v - 1);
  const radius = rand(SPAWN_INNER_RADIUS, SPAWN_OUTER_RADIUS);
  const sinPhi = Math.sin(phi);
  return new THREE.Vector3(
    radius * sinPhi * Math.cos(theta),
    radius * sinPhi * Math.sin(theta),
    radius * Math.cos(phi),
  ).add(MARS_POSITION);
}

export function createRovers() {
  const rovers = [];
  for (const name of ROVER_NAMES) {
    const { group, bodyMat } = buildRoverMesh();
    const position = spawnPosition();
    group.position.copy(position);
    // Random orientation so they don't all face the same way.
    group.rotation.set(rand(0, Math.PI * 2), rand(0, Math.PI * 2), rand(0, Math.PI * 2));

    rovers.push({
      name,
      mesh: group,
      bodyMat,
      position,              // cached for O(n) approach checks
      fixed: false,
      repairProgress: 0,     // [0, 1]
      creditValue: ROVER_CREDIT_VALUE,
    });
  }

  function update(dt) {
    // Slow tumble for unrepaired rovers; fixed ones still tumble too
    // (they're broken-in-space, not aligned with gravity).
    for (const r of rovers) {
      r.mesh.rotation.y += 0.25 * dt;
      r.mesh.rotation.x += 0.08 * dt;
    }
  }

  /** Switch a rover's material to "fixed" appearance. */
  function markFixed(rover) {
    rover.fixed = true;
    rover.repairProgress = 1;
    rover.bodyMat.color.setHex(BODY_COLOR_FIXED);
    rover.bodyMat.emissive.setHex(0x103040);
  }

  /** Restore all rovers to the unfixed grey-body state. */
  function reset() {
    for (const r of rovers) {
      r.fixed = false;
      r.repairProgress = 0;
      r.bodyMat.color.setHex(BODY_COLOR);
      r.bodyMat.emissive.setHex(0x000000);
    }
  }

  return {
    rovers,
    update,
    markFixed,
    reset,
  };
}
