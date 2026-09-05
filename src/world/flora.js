// Things that grow on the ground.
//
// Until now nothing did. The world had biomes called forest and savanna
// and dry grassland, and every one of them was a differently coloured
// floor — which is fine from a ship at two hundred metres and obviously
// wrong the moment you climb down a ladder and stand on it.
//
// Three layers, each scattered the same way:
//
//   trees   300 m out, one candidate every 14 m
//   rocks   200 m out, one candidate every 12 m
//   grass    42 m out, one candidate every  2 m
//
// HOW THE SCATTER WORKS. There is no list of trees anywhere: a world
// 130 km across would need millions of them. Instead the ground is cut
// into patches, and a patch's contents are worked out from its
// coordinates whenever it comes into range — the same seed gives the
// same trees, so a wood you walk away from and come back to is the same
// wood. What is actually stored is only what is in sight: a few hundred
// instances, packed into the slots of an InstancedMesh, freed again as
// the patch behind you drops out of range.
//
// WHAT IT COSTS. The expensive question in this world is not "how many
// triangles" but "how high is the ground here" — the same lesson the
// crowd in `townsfolk.js` taught. So the climate is asked once per
// PATCH, not once per plant: biomes are kilometres across and a 70 m
// patch is comfortably inside one. Only the height is asked per plant,
// because that is the one thing that changes from one metre to the next.
//
// Nothing here animates. Grass that leans in the wind wants either a
// custom shader or a matrix rewritten per instance per frame, and this
// is already the most-drawn thing in the game — see BACKLOG.md.
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { BIOME } from './terrain.js';

/** Above this much clear air under you, nothing on the ground is worth
 *  drawing: it is a texture from up there, and building it while you
 *  fly over at 280 m/s is work nobody sees. */
export const FLORA_CEILING = 320;

// How long a frame may spend growing things. Half what the ground gets:
// ground you can fall through, and a tree that arrives a frame late is
// a tree that arrives a frame late.
export const BUILD_BUDGET_MS = 1.5;

// --- Small helpers --------------------------------------------------------------

function hash2(i, j, seed) {
  let h = Math.imul(i | 0, 0x27d4eb2d) ^ Math.imul(j | 0, 0x165667b1) ^ (seed | 0);
  h = Math.imul(h ^ (h >>> 15), 0x85ebca6b);
  h = Math.imul(h ^ (h >>> 13), 0xc2b2ae35);
  return ((h ^ (h >>> 16)) >>> 0) / 4294967296;
}

/**
 * A stream of numbers from one cell's hash, so a plant's size, lean and
 * species are all decided without another hash each.
 */
function cellRandom(i, j, seed) {
  let a = (Math.imul(i | 0, 0x27d4eb2d) ^ Math.imul(j | 0, 0x9e3779b1) ^ (seed | 0)) | 0;
  return function rnd() {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const smoothstep = (t) => t * t * (3 - 2 * t);

/**
 * Smooth noise on a grid, for clumping.
 *
 * Woods have edges and clearings; a wood scattered on a flat
 * probability comes out as an even stipple of trees, which is what a
 * plantation looks like and not what a forest does.
 */
function clumpAt(x, z, cell, seed) {
  const fx = x / cell;
  const fz = z / cell;
  const i = Math.floor(fx);
  const j = Math.floor(fz);
  const tx = smoothstep(fx - i);
  const tz = smoothstep(fz - j);
  const a = hash2(i, j, seed);
  const b = hash2(i + 1, j, seed);
  const c = hash2(i, j + 1, seed);
  const d = hash2(i + 1, j + 1, seed);
  return (a + (b - a) * tx) + ((c + (d - c) * tx) - (a + (b - a) * tx)) * tz;
}

/** Everything non-indexed first: mergeGeometries refuses a mixture. */
function merge(parts) {
  return mergeGeometries(parts.map((g) => (g.index ? g.toNonIndexed() : g)), false);
}

/** Give a piece one flat colour, so a whole plant can be one mesh. */
function paint(geom, hex) {
  const c = new THREE.Color(hex);
  const n = geom.attributes.position.count;
  const arr = new Float32Array(n * 3);
  for (let k = 0; k < n; k++) { arr[k * 3] = c.r; arr[k * 3 + 1] = c.g; arr[k * 3 + 2] = c.b; }
  geom.setAttribute('color', new THREE.BufferAttribute(arr, 3));
  // uv sets differ between primitives and merging is fussy about it;
  // nothing here is textured, so they go.
  geom.deleteAttribute('uv');
  return geom;
}

function at(geom, x, y, z, rx = 0, rz = 0) {
  if (rx) geom.rotateX(rx);
  if (rz) geom.rotateZ(rz);
  geom.translate(x, y, z);
  return geom;
}

// --- What grows ------------------------------------------------------------------
//
// Every species is one merged geometry with its colours in its
// vertices, so a species is a single instanced draw. Trunks are
// open-ended cylinders with five sides: nobody sees the top of a trunk
// or the underside of a canopy, and at six hundred trees every triangle
// is paid for six hundred times.

/** A spruce: a stack of skirts, dark, for cold and high ground. */
function buildConifer() {
  const trunk = paint(at(new THREE.CylinderGeometry(0.15, 0.24, 3.4, 5, 1, true), 0, 1.7, 0), 0x4a3a2a);
  const skirts = [
    [1.85, 2.9, 2.6],
    [1.45, 2.6, 4.2],
    [0.95, 2.2, 5.5],
  ].map(([r, h, y], k) => paint(
    at(new THREE.ConeGeometry(r, h, 7, 1, true), 0, y, 0),
    k === 0 ? 0x2c4429 : (k === 1 ? 0x314b2c : 0x365230),
  ));
  return merge([trunk, ...skirts]);
}

/** A round-headed tree for warm wet country. */
function buildBroadleaf() {
  const trunk = paint(at(new THREE.CylinderGeometry(0.2, 0.3, 2.8, 5, 1, true), 0, 1.4, 0), 0x584330);
  const canopy = new THREE.IcosahedronGeometry(2.15, 0);
  canopy.scale(1, 0.82, 1);
  const crown = paint(at(canopy, 0, 4.1, 0), 0x3f5a2c);
  return merge([trunk, crown]);
}

/** An acacia: bare trunk, flat crown, for dry grassland. */
function buildAcacia() {
  const trunk = paint(at(new THREE.CylinderGeometry(0.14, 0.26, 3.0, 5, 1, true), 0, 1.5, 0), 0x6b5637);
  const crown = new THREE.IcosahedronGeometry(2.7, 0);
  crown.scale(1, 0.3, 1);
  return merge([trunk, paint(at(crown, 0, 3.5, 0), 0x5d6b38)]);
}

/** A dead bush, for the stone deserts and the badlands. */
function buildScrub() {
  const a = new THREE.IcosahedronGeometry(0.62, 0);
  a.scale(1.2, 0.75, 1.1);
  return merge([paint(at(a, 0, 0.42, 0), 0x6d6444)]);
}

/** A boulder. Squashed and turned per instance, so twenty triangles
 *  make a hundred different rocks. */
function buildRock() {
  const g = new THREE.IcosahedronGeometry(1, 0);
  g.scale(1, 0.72, 0.92);
  return paint(at(g, 0, 0.5, 0), 0x77736a);
}

/**
 * A tuft of grass: five narrow strips, leaning different ways.
 *
 * Strips rather than the usual crossed billboards because those need a
 * cut-out texture and alpha testing, and this needs to be drawn a
 * thousand times. Seen from anywhere but directly above, five leaning
 * blades read as a tuft.
 */
function buildGrass() {
  const parts = [];
  for (let k = 0; k < 5; k++) {
    const a = (k / 5) * Math.PI * 2 + 0.4;
    // Ankle height. Two goes at this were both wrong in the same
    // direction: at a third of a metre, three metres apart, it read as
    // specks of dirt; at half a metre it read as knee-high shards
    // standing about in a bare field. Grass is SMALL and there is a
    // LOT of it — so the blades came down and the scatter came in.
    const h = 0.24 + (k % 3) * 0.06;
    const blade = new THREE.PlaneGeometry(0.07, h, 1, 1);
    at(blade, 0, h / 2, 0, 0, (k % 2 ? 1 : -1) * (0.22 + k * 0.05));
    blade.rotateY(a);
    blade.translate(Math.cos(a) * 0.045, 0, Math.sin(a) * 0.045);
    parts.push(paint(blade, 0xffffff));   // tinted per instance
  }
  return merge(parts);
}

// --- The layers -------------------------------------------------------------------
//
// `cell` is how far apart candidates are considered — NOT how far apart
// plants end up, since most candidates are refused and the ones that
// survive are jittered within their cell. `patch` is a multiple of it,
// so a patch is always a whole number of cells.

// Trees reach furthest, and that is not a luxury: the edge of the
// scatter is a visible line of trees with bare ground behind it, and the
// further out it is the less it looks like the world ending. Beyond
// three hundred metres a tree is four pixels tall and the ground colour
// is doing the work anyway.
const TREE = {
  key: 'tree', patch: 70, cell: 14, radius: 300, slots: 900, tint: 0.14,
};
const ROCK = {
  key: 'rock', patch: 60, cell: 12, radius: 200, slots: 420, tint: 0.18,
};
const GRASS = {
  key: 'grass', patch: 12, cell: 2, radius: 42, slots: 1700, tint: 0,
};

/**
 * How likely a tree is here, and which tree it would be.
 *
 * The rules are the obvious ones and they are worth stating plainly:
 * nothing grows in the sea, on a snowfield, on a salt pan or on a dune;
 * nothing grows on rock too steep to hold soil; forests are thick,
 * grassland is scattered, desert is nearly bare. What stops it looking
 * mechanical is the clump noise, which gives every wood a shape.
 */
function treeAt(biome, region, slopeDeg, clump) {
  if (slopeDeg > 33) return null;
  switch (biome) {
    case BIOME.FOREST:
      return { p: 0.16 + 0.72 * clump, kind: region.heat < 0.42 ? 'conifer' : 'broadleaf' };
    case BIOME.HILLS:
      return { p: 0.42 * clump, kind: region.heat < 0.5 ? 'conifer' : 'broadleaf' };
    case BIOME.PLAIN:
      // Farmland with hedges and copses: mostly open, with woods in it.
      return { p: 0.30 * Math.max(0, clump - 0.45) * 2, kind: 'broadleaf' };
    case BIOME.SAVANNA:
      return { p: 0.06 + 0.16 * clump, kind: 'acacia' };
    case BIOME.STONE_DESERT:
      return { p: 0.10 * clump, kind: 'scrub' };
    case BIOME.BADLANDS:
    case BIOME.MESA:
      return { p: 0.05 * clump, kind: 'scrub' };
    case BIOME.BEACH:
      return { p: 0.03 * clump, kind: 'scrub' };
    case BIOME.MOUNTAIN:
      // The last stragglers below the treeline, and none above it.
      return { p: 0.05 * clump, kind: 'conifer' };
    default:
      return null;
  }
}

/** How likely a boulder is. Bare, broken country is full of them. */
function rockAt(biome, slopeDeg, clump) {
  switch (biome) {
    case BIOME.MOUNTAIN: return 0.20 + 0.30 * clump;
    case BIOME.BADLANDS: return 0.14 + 0.22 * clump;
    case BIOME.MESA: return 0.10 + 0.20 * clump;
    case BIOME.STONE_DESERT: return 0.08 + 0.16 * clump;
    case BIOME.HILLS: return 0.05 + 0.10 * clump;
    case BIOME.SNOW: return slopeDeg > 18 ? 0.06 * clump : 0.01;
    case BIOME.FOREST: case BIOME.PLAIN: case BIOME.SAVANNA: return 0.03 * clump;
    case BIOME.BEACH: return 0.02 * clump;
    default: return 0;
  }
}

/** How thick the grass is, and what colour. */
function grassAt(biome, clump) {
  switch (biome) {
    // Each a shade or two lighter than the ground it grows out of.
    // Painted the same colour as the ground — which is what a real
    // meadow is — it reads as noise on the floor rather than as grass.
    case BIOME.PLAIN: return { p: 0.45 + 0.45 * clump, color: 0x7b8c4a };
    case BIOME.HILLS: return { p: 0.35 + 0.40 * clump, color: 0x738644 };
    case BIOME.FOREST: return { p: 0.25 + 0.35 * clump, color: 0x5f7a39 };
    case BIOME.SAVANNA: return { p: 0.30 + 0.35 * clump, color: 0xbdaa6d };
    case BIOME.STONE_DESERT: return { p: 0.06 * clump, color: 0xa39c68 };
    case BIOME.BEACH: return { p: 0.05 * clump, color: 0xb0b477 };
    default: return null;
  }
}

/**
 * @param {{terrain: object, blocked?: (x: number, z: number) => boolean,
 *          seed?: number}} opts
 *   `blocked` keeps things from growing where the game has already put
 *   something — inside a town, mostly, where a tree through a roof
 *   would be nobody's idea of scenery.
 */
export function createFlora({ terrain, blocked = null, seed = 20260905 }) {
  const group = new THREE.Group();
  group.name = 'flora';

  const foliageMat = new THREE.MeshStandardMaterial({
    vertexColors: true, roughness: 0.94, metalness: 0,
  });
  const rockMat = new THREE.MeshStandardMaterial({
    vertexColors: true, roughness: 0.98, metalness: 0, flatShading: true,
  });
  const grassMat = new THREE.MeshStandardMaterial({
    vertexColors: true, roughness: 1, metalness: 0, side: THREE.DoubleSide,
  });

  // One instanced mesh per species. `count` is moved as slots fill, so
  // the draw call only ever covers the slots in use.
  const SPECIES = {
    // `solid` is how wide a thing is at knee height, as a fraction of
    // its scale — near enough the trunk's own radius, so a walker stops
    // against the wood rather than against a circle drawn round the
    // whole canopy.
    conifer: { geom: buildConifer(), mat: foliageMat, layer: TREE, solid: 0.32 },
    broadleaf: { geom: buildBroadleaf(), mat: foliageMat, layer: TREE, solid: 0.38 },
    acacia: { geom: buildAcacia(), mat: foliageMat, layer: TREE, solid: 0.3 },
    scrub: { geom: buildScrub(), mat: foliageMat, layer: TREE, solid: 0 },
    rock: { geom: buildRock(), mat: rockMat, layer: ROCK, solid: 0.75 },
    grass: { geom: buildGrass(), mat: grassMat, layer: GRASS, solid: 0 },
  };

  const meshes = {};
  for (const [name, s] of Object.entries(SPECIES)) {
    const m = new THREE.InstancedMesh(s.geom, s.mat, s.layer.slots);
    m.name = `flora-${name}`;
    m.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    // The instances are scattered over hundreds of metres around an
    // origin that never moves, so the mesh's own bounding sphere says
    // nothing useful about where they are.
    m.frustumCulled = false;
    m.count = 0;
    // Every species is tinted per instance: a wood in which every tree
    // is the same green reads as one object repeated, which is what it
    // is and what it must not look like.
    m.instanceColor = new THREE.InstancedBufferAttribute(new Float32Array(s.layer.slots * 3), 3);
    m.instanceColor.setUsage(THREE.DynamicDrawUsage);
    meshes[name] = m;
    group.add(m);
  }

  // Free slots per species, and the high-water mark each mesh draws to.
  const free = {};
  for (const [name, s] of Object.entries(SPECIES)) {
    free[name] = [];
    for (let i = s.layer.slots - 1; i >= 0; i--) free[name].push(i);
  }

  /** @type {Map<string, {key: string, layer: object, i: number, j: number,
   *   used: {species: string, slot: number}[], solids: {x: number, z: number, r: number}[]}>} */
  const patches = new Map();
  const queue = [];
  let focusX = NaN;
  let focusZ = NaN;
  let visible = true;
  let buildMs = 0;

  const _m = new THREE.Matrix4();
  const _q = new THREE.Quaternion();
  // YXZ so the yaw is applied OUTSIDE the lean: with the default order a
  // leaning tree turned to face another way leans a different way, and a
  // hillside of them fans out like a hand of cards.
  const _e = new THREE.Euler(0, 0, 0, 'YXZ');
  const _v = new THREE.Vector3();
  const _scale = new THREE.Vector3();
  const _c = new THREE.Color();
  const _hidden = new THREE.Matrix4().makeScale(0, 0, 0);

  function place(species, x, y, z, yaw, lean, tint) {
    const slot = free[species].pop();
    if (slot === undefined) return -1;
    const mesh = meshes[species];
    _e.set(lean * 0.55, yaw, lean);
    _q.setFromEuler(_e);
    _v.set(x, y, z);
    _m.compose(_v, _q, _scale);
    mesh.setMatrixAt(slot, _m);
    if (mesh.instanceColor && tint !== undefined) {
      _c.setHex(tint);
      mesh.setColorAt(slot, _c);
      mesh.instanceColor.needsUpdate = true;
    }
    if (slot >= mesh.count) mesh.count = slot + 1;
    mesh.instanceMatrix.needsUpdate = true;
    return slot;
  }

  /**
   * Work out what stands in one patch and put it in the world.
   *
   * The climate is asked once, at the middle: biomes are kilometres
   * across, and asking per plant was three questions per candidate for
   * an answer that does not change inside seventy metres.
   */
  function fillPatch(patch) {
    const { layer, i, j } = patch;
    const cx = (i + 0.5) * layer.patch;
    const cz = (j + 0.5) * layer.patch;
    const centre = terrain.sampleAt(cx, cz, 8);
    if (centre.biome === BIOME.SEA) return;
    const per = layer.patch / layer.cell;

    for (let cj = 0; cj < per; cj++) {
      for (let ci = 0; ci < per; ci++) {
        const gi = i * per + ci;
        const gj = j * per + cj;
        const rnd = cellRandom(gi, gj, seed + layer.cell);
        // Jittered inside its cell, so nothing lines up in rows.
        const x = (gi + 0.15 + rnd() * 0.7) * layer.cell;
        const z = (gj + 0.15 + rnd() * 0.7) * layer.cell;
        const clump = clumpAt(x, z, layer === GRASS ? 60 : 190, seed + 11);

        let species = null;
        let p = 0;
        let tint;
        if (layer === TREE) {
          const t = treeAt(centre.biome, centre.region, centre.slopeDeg, clump);
          if (!t) continue;
          species = t.kind;
          p = t.p;
        } else if (layer === ROCK) {
          species = 'rock';
          p = rockAt(centre.biome, centre.slopeDeg, clump);
        } else {
          const g = grassAt(centre.biome, clump);
          if (!g) continue;
          species = 'grass';
          p = g.p;
          tint = g.color;
        }
        if (p <= 0 || rnd() > p) continue;
        if (blocked && blocked(x, z)) continue;

        const y = terrain.heightAt(x, z);
        if (y <= 0.4) continue;   // the sea, and the last metre of beach

        const scale = 0.7 + rnd() * 0.7;
        let slot = -1;
        if (species === 'grass') {
          _scale.set(scale, 0.65 + rnd() * 0.6, scale);
          slot = place('grass', x, y, z, rnd() * Math.PI * 2, 0, shade(tint, rnd(), 0.12));
        } else if (species === 'rock') {
          _scale.set(
            scale * (0.7 + rnd() * 0.8), scale * (0.5 + rnd() * 0.6), scale * (0.8 + rnd() * 0.6),
          );
          // Rocks sit IN the ground, not on it: a boulder resting
          // exactly on the surface looks dropped there.
          slot = place('rock', x, y - _scale.y * 0.28, z, rnd() * Math.PI * 2,
            (rnd() - 0.5) * 0.5, shade(0x77736a, rnd()));
        } else {
          // Every tree is its own height and leans its own way — a wood
          // of identical trees is a wallpaper.
          const s = species === 'scrub' ? 0.8 + rnd() * 0.9 : 0.75 + rnd() * 0.75;
          _scale.set(s * (0.9 + rnd() * 0.2), s, s * (0.9 + rnd() * 0.2));
          slot = place(species, x, y - 0.15, z, rnd() * Math.PI * 2,
            (rnd() - 0.5) * 0.12, shade(0xffffff, rnd(), layer.tint));
        }
        if (slot < 0) continue;   // out of slots: the rest of this patch waits
        patch.used.push({ species, slot });
        const solid = SPECIES[species].solid;
        if (solid > 0) patch.solids.push({ x, z, r: solid * _scale.x });
      }
    }
  }

  /** A shade either side of a colour, for variety without a palette. */
  function shade(hex, t, amount = 0.16) {
    _c.setHex(hex);
    const k = 1 + (t - 0.5) * 2 * amount;
    return _c.setRGB(
      Math.min(1, _c.r * k), Math.min(1, _c.g * k), Math.min(1, _c.b * k),
    ).getHex();
  }

  function dropPatch(patch) {
    for (const u of patch.used) {
      meshes[u.species].setMatrixAt(u.slot, _hidden);
      meshes[u.species].instanceMatrix.needsUpdate = true;
      free[u.species].push(u.slot);
    }
    patches.delete(patch.key);
  }

  /**
   * Which patches should be standing, given where the player is.
   *
   * Patches that are still wanted are left exactly as they are — this
   * is the whole reason for the scheme. Walking east builds a column of
   * new patches and drops the column behind you; it does not rebuild
   * the wood you are standing in.
   */
  function setFocus(x, z, aboveGround = 0) {
    const wasVisible = visible;
    visible = aboveGround < FLORA_CEILING;
    group.visible = visible;
    if (!visible) {
      // Everything is dropped on the way up rather than kept: it is a
      // few hundred slots, and coming back down somewhere else would
      // otherwise leave a wood from the last continent standing.
      if (wasVisible) {
        for (const patch of [...patches.values()]) dropPatch(patch);
        queue.length = 0;
      }
      return;
    }
    focusX = x;
    focusZ = z;

    const wanted = new Set();
    for (const layer of [TREE, ROCK, GRASS]) {
      const reach = Math.ceil((layer.radius + layer.patch) / layer.patch);
      const ci = Math.floor(x / layer.patch);
      const cj = Math.floor(z / layer.patch);
      for (let dj = -reach; dj <= reach; dj++) {
        for (let di = -reach; di <= reach; di++) {
          const i = ci + di;
          const j = cj + dj;
          // Round, not square: the corners of a square are half again
          // as far away as its sides, and that is where the cost is.
          const px = (i + 0.5) * layer.patch - x;
          const pz = (j + 0.5) * layer.patch - z;
          if (Math.hypot(px, pz) > layer.radius + layer.patch) continue;
          const key = `${layer.key}:${i},${j}`;
          wanted.add(key);
          if (patches.has(key)) continue;
          queue.push({ key, layer, i, j, d2: px * px + pz * pz });
        }
      }
    }
    for (const patch of [...patches.values()]) {
      if (!wanted.has(patch.key)) dropPatch(patch);
    }
    // Anything queued that is no longer wanted (the player turned round
    // before it was built) goes now, or the queue grows for ever.
    for (let n = queue.length - 1; n >= 0; n--) {
      if (!wanted.has(queue[n].key) || patches.has(queue[n].key)) queue.splice(n, 1);
    }
    queue.sort((a, b) => a.d2 - b.d2);
  }

  /** Build what is queued for a few milliseconds, nearest first. */
  function work(budgetMs) {
    const started = performance.now();
    while (queue.length && performance.now() - started < budgetMs) {
      const job = queue.shift();
      if (patches.has(job.key)) continue;
      const patch = { key: job.key, layer: job.layer, i: job.i, j: job.j, used: [], solids: [] };
      patches.set(job.key, patch);
      fillPatch(patch);
    }
    buildMs = performance.now() - started;
  }

  /**
   * The nearest trunk or boulder a walker is inside, or null.
   *
   * Only the patches around the point are looked at, so this is a
   * couple of dozen distance checks however much is standing. Grass and
   * scrub are not solid: being brought to a stop by a tuft of grass is
   * worse than walking through one.
   */
  function solidNear(x, z, radius = 0.4) {
    let best = null;
    let bestOverlap = 0;
    for (const layer of [TREE, ROCK]) {
      const ci = Math.floor(x / layer.patch);
      const cj = Math.floor(z / layer.patch);
      for (let dj = -1; dj <= 1; dj++) {
        for (let di = -1; di <= 1; di++) {
          const patch = patches.get(`${layer.key}:${ci + di},${cj + dj}`);
          if (!patch) continue;
          for (const s of patch.solids) {
            const d = Math.hypot(s.x - x, s.z - z);
            const overlap = s.r + radius - d;
            if (overlap > bestOverlap) { bestOverlap = overlap; best = s; }
          }
        }
      }
    }
    return best;
  }

  return {
    group,

    setFocus,
    work,
    /** Build everything outstanding now — for landing and for tests. */
    flush() { work(Infinity); },

    solidNear,

    /** What is standing, for the HUD and for tests. */
    info: {
      get counts() {
        const out = {};
        for (const name of Object.keys(SPECIES)) out[name] = meshes[name].count;
        return out;
      },
      get live() {
        let n = 0;
        for (const p of patches.values()) n += p.used.length;
        return n;
      },
      get patches() { return patches.size; },
      get build() { return { ms: +buildMs.toFixed(2), queued: queue.length }; },
      get visible() { return visible; },
      /** For tests: the trunk or boulder at a point, if there is one. */
      solidNear: (x, z, r = 0.4) => solidNear(x, z, r),
      get focus() { return { x: focusX, z: focusZ }; },
      triangles() {
        let n = 0;
        for (const [name, s] of Object.entries(SPECIES)) {
          const per = s.geom.attributes.position.count / 3;
          n += per * meshes[name].count;
        }
        return n;
      },
    },
  };
}
