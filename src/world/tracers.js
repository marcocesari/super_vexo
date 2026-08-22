// Bullet tracers: a short bright line where a shot went, fading out.
//
// One pooled set of line segments rather than a mesh per shot. A pistol
// at three rounds a second would otherwise build and throw away geometry
// for as long as the player keeps firing, and the garbage collector
// would come for it at exactly the wrong moment.
import * as THREE from 'three';

const POOL = 12;
const LIFE = 0.09;      // seconds — a flick, not a laser beam
const LENGTH = 14;      // how much of the shot is drawn

export function createTracers(scene) {
  const group = new THREE.Group();
  scene.add(group);

  const free = [];
  const live = [];
  for (let i = 0; i < POOL; i++) {
    const geom = new THREE.BufferGeometry();
    geom.setAttribute('position', new THREE.BufferAttribute(new Float32Array(6), 3));
    const line = new THREE.Line(geom, new THREE.LineBasicMaterial({
      color: 0x9fd8ff, transparent: true, opacity: 1,
    }));
    line.visible = false;
    line.frustumCulled = false;
    group.add(line);
    free.push(line);
  }

  return {
    group,
    /** @param {THREE.Vector3} from @param {THREE.Vector3} direction */
    fire(from, direction, color = 0x9fd8ff) {
      const line = free.pop() ?? live.shift();
      if (!line) return;
      const p = line.geometry.attributes.position;
      p.setXYZ(0, from.x, from.y, from.z);
      p.setXYZ(1,
        from.x + direction.x * LENGTH,
        from.y + direction.y * LENGTH,
        from.z + direction.z * LENGTH);
      p.needsUpdate = true;
      line.material.color.setHex(color);
      line.material.opacity = 1;
      line.visible = true;
      line.userData.life = LIFE;
      live.push(line);
    },

    update(dt) {
      for (let i = live.length - 1; i >= 0; i--) {
        const line = live[i];
        line.userData.life -= dt;
        if (line.userData.life <= 0) {
          line.visible = false;
          live.splice(i, 1);
          free.push(line);
        } else {
          line.material.opacity = line.userData.life / LIFE;
        }
      }
    },
  };
}
