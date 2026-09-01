// The people of Estronic, and of the two villages.
//
// They walk the streets, and you can stop one and talk to it.
//
// Three draw calls for the lot of them. Each person is drawn from three
// instanced meshes — a body with its head and arms, and a leg each side
// — so the crowd costs the same whether there are six of them or sixty,
// and the legs can still swing, because an instance carries its own
// matrix and a leg is its own instance.
//
// They are not clever. Each one picks a spot on a street, walks to it,
// stands about for a moment and picks another. That is enough: what
// makes a town feel inhabited is people crossing in front of you at
// their own business, not pathfinding.
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

const HEIGHT = 1.75;
const WALK_SPEED = 1.15;          // m/s, an unhurried town pace
const STRIDE = 2.6;               // radians per metre of walking
const TALK_RANGE = 3.4;           // how close you have to be to be heard

// Clothes. Picked per person from these, so a crowd is a crowd rather
// than a squad in uniform.
const SHIRTS = [0x3c6ea5, 0x7a4b6b, 0x4d7a52, 0xa8763c, 0x53585f, 0x8c4a44];
const SKINS = [0xd8a684, 0xb07a55, 0x8a5a3c, 0xefc6a4];

function mulberry32(a) {
  return function rnd() {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** A body from the waist up, at the origin, facing +Z. */
function buildBody() {
  const parts = [];
  const torso = new THREE.BoxGeometry(0.42, 0.62, 0.26);
  torso.translate(0, 1.16, 0);
  parts.push(torso);
  const head = new THREE.SphereGeometry(0.13, 8, 6);
  head.translate(0, 1.60, 0);
  parts.push(head);
  for (const side of [-1, 1]) {
    const arm = new THREE.CapsuleGeometry(0.055, 0.42, 3, 6);
    arm.translate(side * 0.27, 1.14, 0);
    parts.push(arm);
  }
  return mergeGeometries(parts, false);
}

/** One leg, hinged at the hip so a rotation about X swings it. */
function buildLeg() {
  const leg = new THREE.CapsuleGeometry(0.075, 0.56, 3, 6);
  // Hung below the origin: the instance is placed AT the hip, so
  // rotating the instance swings the leg from the right place.
  leg.translate(0, -0.34, 0);
  return leg;
}

/**
 * @param {object[]} people  { name, lines: string[] } — who lives here
 * @param {object} opts      town centre, radius, ground level, and a way
 *                           to ask whether a spot is out on the street
 */
export function createTownsfolk({ town, count, isStreet, seed = 1 }) {
  const rnd = mulberry32(seed);
  const bodyGeom = buildBody();
  const legGeom = buildLeg();

  const skin = new THREE.MeshStandardMaterial({ roughness: 0.85 });
  const cloth = new THREE.MeshStandardMaterial({ roughness: 0.9 });
  const bodies = new THREE.InstancedMesh(bodyGeom, cloth, count);
  const legL = new THREE.InstancedMesh(legGeom, cloth, count);
  const legR = new THREE.InstancedMesh(legGeom, cloth, count);
  for (const m of [bodies, legL, legR]) {
    m.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    m.frustumCulled = false;
    m.castShadow = true;
  }
  // Per-person colour, which an instanced mesh can carry as an attribute.
  bodies.instanceColor = new THREE.InstancedBufferAttribute(new Float32Array(count * 3), 3);
  legL.instanceColor = new THREE.InstancedBufferAttribute(new Float32Array(count * 3), 3);
  legR.instanceColor = new THREE.InstancedBufferAttribute(new Float32Array(count * 3), 3);

  const group = new THREE.Group();
  group.add(bodies, legL, legR);

  const _c = new THREE.Color();
  const _m = new THREE.Matrix4();
  const _q = new THREE.Quaternion();
  const _e = new THREE.Euler();
  const _v = new THREE.Vector3();
  const _s = new THREE.Vector3(1, 1, 1);

  /** Somewhere on a street inside the town, not inside a building. */
  function pickSpot() {
    for (let i = 0; i < 40; i++) {
      const a = rnd() * Math.PI * 2;
      const r = Math.sqrt(rnd()) * town.radius * 0.62;
      const x = town.x + Math.cos(a) * r;
      const z = town.z + Math.sin(a) * r;
      if (isStreet(x, z)) return { x, z };
    }
    return { x: town.x, z: town.z };
  }

  const folk = [];
  for (let i = 0; i < count; i++) {
    const at = pickSpot();
    const shirt = SHIRTS[Math.floor(rnd() * SHIRTS.length)];
    folk.push({
      x: at.x,
      z: at.z,
      heading: rnd() * Math.PI * 2,
      to: pickSpot(),
      phase: rnd() * Math.PI * 2,
      wait: rnd() * 3,
      shirt,
      skinTone: SKINS[Math.floor(rnd() * SKINS.length)],
      talking: false,
    });
    _c.setHex(shirt);
    bodies.instanceColor.setXYZ(i, _c.r, _c.g, _c.b);
    _c.multiplyScalar(0.72);
    legL.instanceColor.setXYZ(i, _c.r, _c.g, _c.b);
    legR.instanceColor.setXYZ(i, _c.r, _c.g, _c.b);
  }

  /** Put one person's three pieces where they belong. */
  function place(i, p, groundY) {
    const swing = Math.sin(p.phase) * (p.moving ? 0.55 : 0.04);
    // A little bob, so a walk is a walk rather than a slide.
    const bob = p.moving ? Math.abs(Math.sin(p.phase)) * 0.035 : 0;

    _e.set(0, p.heading, 0);
    _q.setFromEuler(_e);
    _v.set(p.x, groundY + bob, p.z);
    _m.compose(_v, _q, _s);
    bodies.setMatrixAt(i, _m);

    for (const [mesh, sign] of [[legL, 1], [legR, -1]]) {
      _e.set(swing * sign, p.heading, 0);
      _q.setFromEuler(_e);
      _v.set(
        p.x + Math.cos(p.heading) * 0.11 * sign,
        groundY + 0.86 + bob,
        p.z - Math.sin(p.heading) * 0.11 * sign,
      );
      _m.compose(_v, _q, _s);
      mesh.setMatrixAt(i, _m);
    }
  }

  return {
    group,
    folk,
    material: { skin, cloth },

    /**
     * @param {number} dt
     * @param {(x: number, z: number) => number} groundAt
     */
    update(dt, groundAt) {
      for (let i = 0; i < folk.length; i++) {
        const p = folk[i];
        if (p.talking) {
          p.moving = false;
        } else if (p.wait > 0) {
          p.wait -= dt;
          p.moving = false;
        } else {
          const dx = p.to.x - p.x;
          const dz = p.to.z - p.z;
          const d = Math.hypot(dx, dz);
          if (d < 1.2) {
            p.to = pickSpot();
            p.wait = 0.8 + Math.random() * 3.5;
            p.moving = false;
          } else {
            p.moving = true;
            const step = Math.min(d, WALK_SPEED * dt);
            p.x += (dx / d) * step;
            p.z += (dz / d) * step;
            // Turn towards where they are going rather than snapping.
            const want = Math.atan2(dx, dz);
            let turn = want - p.heading;
            while (turn > Math.PI) turn -= Math.PI * 2;
            while (turn < -Math.PI) turn += Math.PI * 2;
            p.heading += turn * Math.min(1, dt * 5);
            p.phase += step * STRIDE;
          }
        }
        place(i, p, groundAt(p.x, p.z));
      }
      bodies.instanceMatrix.needsUpdate = true;
      legL.instanceMatrix.needsUpdate = true;
      legR.instanceMatrix.needsUpdate = true;
    },

    /** Whoever is close enough to talk to, or null. */
    nearest(x, z) {
      let best = null;
      let bestD = TALK_RANGE;
      for (const p of folk) {
        const d = Math.hypot(p.x - x, p.z - z);
        if (d < bestD) {
          bestD = d;
          best = p;
        }
      }
      return best;
    },

    /** Stop them and turn them to face whoever is talking to them. */
    startTalking(person, x, z) {
      person.talking = true;
      person.heading = Math.atan2(x - person.x, z - person.z);
    },

    stopTalking(person) {
      if (person) person.talking = false;
    },
  };
}
