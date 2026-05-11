// A point-cloud starfield. 10k+ stars at no perf cost — a single draw call
// because all points share one `THREE.Points` object.
//
// Stars are placed on the surface of a large sphere so they read as
// "infinitely far away". Since the ship can fly forever, we re-center the
// starfield on the camera each frame (see updateStarfield) — same trick a
// skybox uses.
import * as THREE from 'three';

const STAR_COUNT = 12000;
const STAR_RADIUS = 1200;

export function createStarfield() {
  const positions = new Float32Array(STAR_COUNT * 3);
  const colors = new Float32Array(STAR_COUNT * 3);

  for (let i = 0; i < STAR_COUNT; i++) {
    // Uniform point on a sphere via the standard (u, v) → unit-vector trick.
    const u = Math.random();
    const v = Math.random();
    const theta = 2 * Math.PI * u;
    const phi = Math.acos(2 * v - 1);
    const sinPhi = Math.sin(phi);
    const x = STAR_RADIUS * sinPhi * Math.cos(theta);
    const y = STAR_RADIUS * sinPhi * Math.sin(theta);
    const z = STAR_RADIUS * Math.cos(phi);
    positions[i * 3 + 0] = x;
    positions[i * 3 + 1] = y;
    positions[i * 3 + 2] = z;

    // A faint blue-white range. Real stars vary in temperature; we cheat
    // with a tiny random tint so the field doesn't look like a single grey.
    const tint = 0.85 + Math.random() * 0.15;
    const blueBoost = Math.random() * 0.1;
    colors[i * 3 + 0] = tint - blueBoost;
    colors[i * 3 + 1] = tint - blueBoost * 0.5;
    colors[i * 3 + 2] = tint;
  }

  const geom = new THREE.BufferGeometry();
  geom.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geom.setAttribute('color', new THREE.BufferAttribute(colors, 3));

  const mat = new THREE.PointsMaterial({
    size: 1.2,
    sizeAttenuation: false, // constant pixel size — stars don't grow on approach
    vertexColors: true,
    transparent: true,
    depthWrite: false,
  });

  const points = new THREE.Points(geom, mat);
  points.frustumCulled = false; // we re-center it on the camera each frame
  return points;
}

/** Keep the starfield centered on the camera so it never "runs out". */
export function updateStarfield(starfield, camera) {
  starfield.position.copy(camera.position);
}
