// Estronic and the two villages.
//
// Marco drew a capital in the middle of Continent Alpha and a village at
// either side of it, and there has been nothing built in this game since
// the old town was deleted. These are those three places.
//
// They are laid out rather than scattered. A village is houses gathered
// round a green with a track through it; a capital is a wall with gates
// where the roads come in, streets running from those gates to a square
// in the middle, and a keep standing in the square. That is what makes a
// place read as somewhere people live rather than as scenery: you can
// tell which way is in.
//
// Everything is merged down to three meshes a town — walls, roofs and
// trim — because forty separate houses is forty draw calls, and the
// world already spends a hundred of them on the ground.
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

/** Deterministic, so a town is the same town every time you fly to it. */
function mulberry32(a) {
  return function rnd() {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function seedFrom(name) {
  let h = 2166136261;
  for (let i = 0; i < name.length; i++) {
    h ^= name.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

const STOREY = 3.2;          // metres, floor to floor
const WALL_H = 7.5;          // the capital's curtain wall

/**
 * One building: a box with a hipped roof on it.
 *
 * Pushed into the geometry lists rather than returned as a mesh — a town
 * is one mesh per material, not one per house.
 */
function house(walls, roofs, { x, z, w, d, storeys, angle }) {
  const h = storeys * STOREY;
  const body = new THREE.BoxGeometry(w, h, d);
  body.translate(0, h / 2, 0);
  // A four-sided cone is a hipped roof, and costs eight triangles.
  const roof = new THREE.ConeGeometry(Math.hypot(w, d) * 0.54, Math.max(1.6, h * 0.34), 4);
  roof.rotateY(Math.PI / 4);
  roof.translate(0, h + Math.max(1.6, h * 0.34) / 2, 0);
  for (const g of [body, roof]) {
    g.rotateY(angle);
    g.translate(x, 0, z);
  }
  walls.push(body);
  roofs.push(roof);
  return { x, z, halfX: Math.max(w, d) * 0.5, halfZ: Math.max(w, d) * 0.5 };
}

/**
 * Build one settlement.
 *
 * @param {object} place  from continentAlpha.js: name, kind, r, colours
 * @param {number} x,z    where it stands, in world-local metres
 * @param {number} level  the height its ground was flattened to
 */
export function createSettlement(place, x, z, level) {
  const rnd = mulberry32(seedFrom(place.name));
  const walls = [];
  const roofs = [];
  const trim = [];
  /** Rectangles a walker cannot walk through. */
  const footprints = [];

  const put = (opts) => {
    footprints.push(house(walls, roofs, opts));
  };

  if (place.kind === 'capital') {
    // The wall sits well inside the levelled ground, so the town is a
    // dense place with fields around it rather than a scattering of
    // houses across half a kilometre.
    const R = place.r * 0.62;

    // The curtain wall, in segments, with a gap at each of the four
    // gates where his roads come in.
    const SEGMENTS = 64;
    for (let i = 0; i < SEGMENTS; i++) {
      const a = (i / SEGMENTS) * Math.PI * 2;
      // Four gaps, each a couple of segments wide.
      const nearGate = [0, 0.25, 0.5, 0.75].some(
        (g) => Math.abs(((i / SEGMENTS) - g + 1.5) % 1 - 0.5) < 0.022,
      );
      if (nearGate) continue;
      const seg = new THREE.BoxGeometry((Math.PI * 2 * R) / SEGMENTS + 1.2, WALL_H, 3.4);
      seg.translate(0, WALL_H / 2, 0);
      // Tangent to the circle, not pointing out of it. Rotating by the
      // bearing alone laid every segment along its own radius, and the
      // wall came out as a ring of planks lying on the grass like the
      // spokes of a wheel.
      seg.rotateY(-(a + Math.PI / 2));
      seg.translate(Math.cos(a) * R, 0, Math.sin(a) * R);
      trim.push(seg);
    }
    // Towers on the corners of the compass, beside the gates.
    for (let i = 0; i < 8; i++) {
      const a = (i / 8) * Math.PI * 2 + Math.PI / 8;
      const t = new THREE.CylinderGeometry(4.6, 5.2, WALL_H * 1.7, 8);
      t.translate(0, (WALL_H * 1.7) / 2, 0);
      t.translate(Math.cos(a) * R, 0, Math.sin(a) * R);
      trim.push(t);
      const cap = new THREE.ConeGeometry(5.6, 5, 8);
      cap.translate(Math.cos(a) * R, WALL_H * 1.7 + 2.5, Math.sin(a) * R);
      roofs.push(cap);
    }

    // The keep, in the middle of the square.
    const keepH = STOREY * 9;
    const keep = new THREE.CylinderGeometry(11, 13, keepH, 10);
    keep.translate(0, keepH / 2, 0);
    walls.push(keep);
    const keepRoof = new THREE.ConeGeometry(14, 16, 10);
    keepRoof.translate(0, keepH + 8, 0);
    roofs.push(keepRoof);
    footprints.push({ x: 0, z: 0, halfX: 13, halfZ: 13 });

    // Blocks of houses between the square and the wall, set along the
    // four streets so there are streets to walk down.
    for (let ring = 0; ring < 4; ring++) {
      const rr = 58 + ring * 76;
      const count = 10 + ring * 7;
      for (let i = 0; i < count; i++) {
        const a = (i / count) * Math.PI * 2 + ring * 0.31;
        // Keep the gate roads clear.
        if ([0, 0.25, 0.5, 0.75].some((g) => Math.abs(((a / (Math.PI * 2)) - g + 1.5) % 1 - 0.5) < 0.03)) {
          continue;
        }
        const jitter = (rnd() - 0.5) * 16;
        const w = 9 + rnd() * 8;
        const d = 9 + rnd() * 8;
        put({
          x: Math.cos(a) * (rr + jitter),
          z: Math.sin(a) * (rr + jitter),
          w,
          d,
          storeys: 2 + Math.floor(rnd() * 3),
          angle: a + Math.PI / 2 + (rnd() - 0.5) * 0.25,
        });
      }
    }
  } else {
    // A village: houses round a green, with a few out along the track.
    const count = 13 + Math.floor(rnd() * 5);
    for (let i = 0; i < count; i++) {
      const a = (i / count) * Math.PI * 2 + rnd() * 0.4;
      const rr = place.r * (0.30 + rnd() * 0.42);
      put({
        x: Math.cos(a) * rr,
        z: Math.sin(a) * rr,
        w: 7 + rnd() * 6,
        d: 7 + rnd() * 6,
        storeys: 1 + Math.floor(rnd() * 2),
        angle: a + Math.PI / 2 + (rnd() - 0.5) * 0.5,
      });
    }
    // A well, so the green has a middle.
    const well = new THREE.CylinderGeometry(2.2, 2.4, 1.6, 10);
    well.translate(0, 0.8, 0);
    trim.push(well);
    footprints.push({ x: 0, z: 0, halfX: 2.6, halfZ: 2.6 });
  }

  const group = new THREE.Group();
  const pieces = [
    [walls, new THREE.MeshStandardMaterial({ color: place.walls, roughness: 0.92 })],
    [roofs, new THREE.MeshStandardMaterial({ color: place.roofs, roughness: 0.86 })],
    [trim, new THREE.MeshStandardMaterial({ color: place.trim, roughness: 0.95 })],
  ];
  for (const [list, material] of pieces) {
    if (!list.length) continue;
    const merged = mergeGeometries(list, false);
    for (const g of list) g.dispose();
    const mesh = new THREE.Mesh(merged, material);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    group.add(mesh);
  }
  group.position.set(x, level, z);

  // Every footprint was worked out around the origin, like the geometry;
  // move them all to where the town actually stands, so the walk
  // resolver can use them without knowing any of this.
  for (const f of footprints) {
    f.x += x;
    f.z += z;
  }

  return {
    group,
    footprints,
    name: place.name,
    kind: place.kind,
    x,
    z,
    level,
    radius: place.r,
  };
}
