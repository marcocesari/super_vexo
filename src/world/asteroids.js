// Asteroid field. 250 rocks in a single `InstancedMesh` — one draw
// call, one geometry, one material. The GPU loves this.
//
// Each instance gets a unique position, rotation, and scale via a
// per-instance 4x4 matrix. We also store {position, radius} in a plain
// JS array so the collision code can do fast sphere-sphere checks
// without touching the GPU at all.
import * as THREE from 'three';

export const ASTEROID_COUNT = 250;

// The belt fills a box along the ship's forward axis. Asteroids start
// well clear of the player's spawn so they don't ambush the first
// frame, and end before Mars so the planet stays visible behind them.
const VOLUME = {
  zNear: 80,
  zFar: 480,
  xHalf: 70,
  yHalf: 45,
};
const MIN_RADIUS = 1.2;
const MAX_RADIUS = 4.5;
// How much each instance rotates per second (different for each).
const MAX_SPIN_RATE = 0.4; // rad/s

function rand(a, b) { return a + Math.random() * (b - a); }
function randSign() { return Math.random() < 0.5 ? -1 : 1; }

export function createAsteroids() {
  // A low-poly icosahedron looks "rocky" — flat shading shows the
  // facets clearly. detail=0 keeps it cheap.
  const geom = new THREE.IcosahedronGeometry(1, 0);
  const mat = new THREE.MeshStandardMaterial({
    color: 0x8a7565,
    roughness: 0.95,
    metalness: 0.05,
    flatShading: true,
  });
  const mesh = new THREE.InstancedMesh(geom, mat, ASTEROID_COUNT);
  mesh.frustumCulled = false; // many instances span the volume; let it draw

  // Per-instance data: world-space center + collision radius + spin.
  const instances = [];
  const _matrix = new THREE.Matrix4();
  const _quat = new THREE.Quaternion();
  const _scaleV = new THREE.Vector3();
  const _pos = new THREE.Vector3();

  for (let i = 0; i < ASTEROID_COUNT; i++) {
    const radius = rand(MIN_RADIUS, MAX_RADIUS);
    _pos.set(
      rand(-VOLUME.xHalf, VOLUME.xHalf),
      rand(-VOLUME.yHalf, VOLUME.yHalf),
      rand(VOLUME.zNear, VOLUME.zFar),
    );
    _scaleV.setScalar(radius);
    _quat.setFromEuler(new THREE.Euler(
      rand(0, Math.PI * 2),
      rand(0, Math.PI * 2),
      rand(0, Math.PI * 2),
    ));
    _matrix.compose(_pos, _quat, _scaleV);
    mesh.setMatrixAt(i, _matrix);

    instances.push({
      position: _pos.clone(),
      // Icosahedron with radius 1 has circumradius 1; our scale = radius
      // so the bounding sphere radius is also the scale value. Add a
      // small fudge so collisions feel solid rather than scratchy.
      radius: radius * 1.05,
      spinAxis: new THREE.Vector3(rand(-1, 1), rand(-1, 1), rand(-1, 1)).normalize(),
      spinRate: rand(0.05, MAX_SPIN_RATE) * randSign(),
      // Cache the base rotation so we can update without re-computing
      // it from scratch every frame.
      rotation: _quat.clone(),
    });
  }
  mesh.instanceMatrix.needsUpdate = true;

  function update(dt) {
    const dq = new THREE.Quaternion();
    for (let i = 0; i < ASTEROID_COUNT; i++) {
      const inst = instances[i];
      dq.setFromAxisAngle(inst.spinAxis, inst.spinRate * dt);
      inst.rotation.premultiply(dq);
      _scaleV.setScalar(inst.radius / 1.05);
      _matrix.compose(inst.position, inst.rotation, _scaleV);
      mesh.setMatrixAt(i, _matrix);
    }
    mesh.instanceMatrix.needsUpdate = true;
  }

  return {
    mesh,
    instances,            // {position, radius, ...} — read-only for collision
    update,
    volume: { ...VOLUME },
  };
}
