// Simple sphere-sphere collision resolution for the ship vs asteroids.
//
// Each frame, for every asteroid:
//   - Compute the vector from the asteroid center to the ship.
//   - If its length is less than (shipRadius + asteroidRadius) we're
//     overlapping → resolve.
//
// Resolution has two parts:
//   1. **Positional**: push the ship along the contact normal by the
//      overlap distance, so geometry no longer interpenetrates.
//   2. **Velocity**: reflect the component of the ship's velocity that
//      points INTO the asteroid. Tangential motion is unchanged. We
//      multiply the reflected component by RESTITUTION (< 1) so the
//      ship doesn't gain energy from bumps — it loses a bit each hit.
import * as THREE from 'three';

export const SHIP_RADIUS = 0.7;
const RESTITUTION = 0.55;

// Scratch vectors so the per-frame check allocates nothing.
const _delta = new THREE.Vector3();
const _normal = new THREE.Vector3();

/**
 * @param {{position: THREE.Vector3, velocity: THREE.Vector3}} ship
 * @param {Array<{position: THREE.Vector3, radius: number}>} asteroids
 * @returns {number} count of contacts resolved this frame (for FX hooks)
 */
export function resolveAsteroidCollisions(ship, asteroids) {
  let hits = 0;
  for (const a of asteroids) {
    _delta.subVectors(ship.position, a.position);
    const minDist = SHIP_RADIUS + a.radius;
    const distSq = _delta.lengthSq();
    if (distSq >= minDist * minDist) continue;
    if (distSq < 1e-8) {
      // Exactly overlapping centers (degenerate) — pick an arbitrary
      // normal so we can push out.
      _normal.set(0, 1, 0);
    } else {
      const dist = Math.sqrt(distSq);
      _normal.copy(_delta).divideScalar(dist);
      // Push the ship out so it just touches the asteroid surface.
      const overlap = minDist - dist;
      ship.position.addScaledVector(_normal, overlap);
    }

    // Reflect inward velocity component.
    const vDotN = ship.velocity.dot(_normal);
    if (vDotN < 0) {
      // v' = v - (1 + e) * (v·n) * n
      ship.velocity.addScaledVector(_normal, -(1 + RESTITUTION) * vDotN);
    }
    hits += 1;
  }
  return hits;
}
