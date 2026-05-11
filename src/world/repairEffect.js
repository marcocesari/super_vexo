// A small "rover fixed!" burst — a Points cloud of sparkles that
// expands and fades, plus a rising chirp through the audio module.
//
// One pool of N particles is reused for every repair; cheap.
import * as THREE from 'three';

const PARTICLE_COUNT = 32;
const LIFETIME_S = 0.9;
const MAX_SPEED = 6;
const PARTICLE_SIZE = 0.18;

export function createRepairEffect() {
  const positions = new Float32Array(PARTICLE_COUNT * 3);
  const velocities = new Float32Array(PARTICLE_COUNT * 3);
  const geom = new THREE.BufferGeometry();
  geom.setAttribute('position', new THREE.BufferAttribute(positions, 3));

  const mat = new THREE.PointsMaterial({
    color: 0x9adfff,
    size: PARTICLE_SIZE,
    sizeAttenuation: true,
    transparent: true,
    opacity: 0,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  });
  const points = new THREE.Points(geom, mat);
  points.visible = false;

  let elapsed = LIFETIME_S; // start "done"

  /** Trigger the burst at a world-space position. */
  function fire(worldPos) {
    elapsed = 0;
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      positions[i * 3 + 0] = worldPos.x;
      positions[i * 3 + 1] = worldPos.y;
      positions[i * 3 + 2] = worldPos.z;
      // Direction: random unit vector × random speed.
      const u = Math.random();
      const v = Math.random();
      const theta = 2 * Math.PI * u;
      const phi = Math.acos(2 * v - 1);
      const sinPhi = Math.sin(phi);
      const speed = (0.4 + Math.random() * 0.6) * MAX_SPEED;
      velocities[i * 3 + 0] = speed * sinPhi * Math.cos(theta);
      velocities[i * 3 + 1] = speed * sinPhi * Math.sin(theta);
      velocities[i * 3 + 2] = speed * Math.cos(phi);
    }
    geom.attributes.position.needsUpdate = true;
    points.visible = true;
  }

  function update(dt) {
    if (elapsed >= LIFETIME_S) {
      points.visible = false;
      return;
    }
    elapsed += dt;
    const a = Math.min(1, elapsed / LIFETIME_S);
    // Particles slow down as they expand (cheap drag).
    const drag = Math.pow(0.05, dt); // strong drag → particles settle
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      positions[i * 3 + 0] += velocities[i * 3 + 0] * dt;
      positions[i * 3 + 1] += velocities[i * 3 + 1] * dt;
      positions[i * 3 + 2] += velocities[i * 3 + 2] * dt;
      velocities[i * 3 + 0] *= drag;
      velocities[i * 3 + 1] *= drag;
      velocities[i * 3 + 2] *= drag;
    }
    geom.attributes.position.needsUpdate = true;
    // Fade out from 1 → 0.
    mat.opacity = 1 - a;
  }

  return { points, fire, update };
}
