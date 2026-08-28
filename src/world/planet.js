// The world, drawn.
//
// `terrain.js` says how high the ground is anywhere. This turns that
// into something you can fly over and walk on, and it has to do it for
// a world with no edges — so it cannot build the ground once and keep
// it, the way the old town did.
//
// Instead it carries a patch of ground around with the player, in four
// rings of decreasing detail:
//
//   ring 0    64 m tiles, a vertex every 4 m   — what he walks on
//   ring 1   256 m tiles, a vertex every 16 m  — the near distance
//   ring 2  1024 m tiles, a vertex every 64 m  — the far distance
//   ring 3  4096 m tiles, a vertex every 256 m — the horizon
//
// Each ring is the same number of tiles, so each costs the same to draw
// while covering sixteen times the ground of the one inside it: the
// whole thing reaches twenty kilometres for about sixty thousand
// triangles. When the player moves far enough that a ring's centre
// shifts by one tile, only the tiles that actually changed place are
// refilled — moving one tile east rebuilds seven tiles, not forty-nine.
import * as THREE from 'three';
import { createTerrain, BIOME, GROUND_COLOR, SEA_LEVEL, fromReal } from './terrain.js';

// Tiles across each ring, odd so there is a middle one.
const RING_TILES = 7;
// Vertices along a tile's edge. 17 gives 512 triangles a tile, and at
// ring 0 that is a vertex every four metres — fine enough that a man
// 1.8 m tall walks up a slope rather than up a staircase.
const TILE_VERTS = 17;
const RING0_TILE = 64;
const RINGS = 4;
const RING_STEP = 4;         // each ring's tiles are this many times bigger

/** How far the drawn world reaches, in metres. */
export const WORLD_REACH = (RING0_TILE * RING_STEP ** (RINGS - 1) * RING_TILES) / 2;

// Ground colours blend into each other over this distance, so a desert
// does not become a forest across one triangle.
const _c = new THREE.Color();
const _c2 = new THREE.Color();
const clamp01 = (v) => (v < 0 ? 0 : v > 1 ? 1 : v);
const smooth = (a, b, v) => {
  const t = clamp01((v - a) / (b - a));
  return t * t * (3 - 2 * t);
};
const PAN_TOP = fromReal(140);
// A beach is the last few metres before the water, not everything under
// fifteen. Too generous a figure paints whole low countries sand.
const SHORE_TOP = fromReal(45);
// Steepness for colouring is always measured over this many metres,
// whatever ring is being drawn. See fillTile.
const COLOR_SLOPE_STEP = 8;

/**
 * @param {{seed?: number, detail?: number}} opts
 */
export function createPlanet({ seed = 20260827 } = {}) {
  const terrain = createTerrain({ seed });
  const group = new THREE.Group();

  // One material for all the ground: the colour is in the vertices, so
  // every tile of every ring shares it and the whole world draws with
  // one program.
  const groundMat = new THREE.MeshStandardMaterial({
    vertexColors: true,
    roughness: 0.96,
    metalness: 0,
    flatShading: false,
  });

  const rings = [];
  for (let r = 0; r < RINGS; r++) {
    const tileSize = RING0_TILE * RING_STEP ** r;
    const ring = {
      tileSize,
      step: tileSize / (TILE_VERTS - 1),
      // Which tile the middle of this ring sits on. Nothing yet.
      centre: { i: NaN, j: NaN },
      tiles: [],
      group: new THREE.Group(),
    };
    // Rings further out are drawn first, so the near ground paints over
    // the coarse ground it overlaps rather than fighting it.
    ring.group.renderOrder = RINGS - r;
    for (let n = 0; n < RING_TILES * RING_TILES; n++) {
      const geom = new THREE.PlaneGeometry(tileSize, tileSize, TILE_VERTS - 1, TILE_VERTS - 1);
      geom.rotateX(-Math.PI / 2);
      geom.setAttribute('color', new THREE.BufferAttribute(
        new Float32Array(TILE_VERTS * TILE_VERTS * 3), 3,
      ));
      const mesh = new THREE.Mesh(geom, groundMat);
      mesh.receiveShadow = true;
      mesh.frustumCulled = true;
      mesh.matrixAutoUpdate = false;
      ring.tiles.push({ mesh, i: NaN, j: NaN });
      ring.group.add(mesh);
    }
    rings.push(ring);
    group.add(ring.group);
  }

  // The inner rings sit on top of the coarse ones, and where they meet,
  // the two disagree by a metre or so. Sinking each ring slightly as it
  // gets coarser hides the seam: the fine ground always wins.
  for (let r = 1; r < RINGS; r++) rings[r].group.position.y = -0.25 * r;

  // --- The sea -----------------------------------------------------------------
  // One plane, kept under the player. Sea level is zero everywhere, so
  // this needs no shape of its own.
  const sea = new THREE.Mesh(
    new THREE.PlaneGeometry(WORLD_REACH * 2.4, WORLD_REACH * 2.4, 1, 1),
    new THREE.MeshStandardMaterial({
      color: GROUND_COLOR[BIOME.SEA],
      roughness: 0.22,
      metalness: 0.1,
      transparent: true,
      opacity: 0.88,
    }),
  );
  sea.rotation.x = -Math.PI / 2;
  sea.position.y = SEA_LEVEL;
  sea.renderOrder = RINGS + 1;
  group.add(sea);

  // --- Painting the ground -------------------------------------------------------
  /**
   * What colour the ground is at a point.
   *
   * Biome first, then two things that are true whatever the biome:
   * steep ground shows the rock underneath because soil will not stay
   * on it, and low ground near the water is paler and sandier. Both are
   * plainly visible in the satellite pictures of all twenty places.
   */
  function colorAt(x, z, sample, out) {
    const { height, slopeDeg, region } = sample;
    const dryness = 1 - region.moisture;
    const { sandy, plateau } = terrain.styleAt(region);

    // Mixed from the fields, not looked up from the label. Classifying
    // the ground and painting each class its own colour puts a hard
    // edge wherever the classifier changes its mind, and the first
    // version of this came out in blotches — a desert one triangle and
    // a meadow the next. Climate is a gradient, so the colour is too.
    out.setHex(GROUND_COLOR[BIOME.FOREST]);
    out.lerp(_c2.setHex(GROUND_COLOR[BIOME.PLAIN]), smooth(0.28, 0.44, dryness));
    out.lerp(_c2.setHex(GROUND_COLOR[BIOME.SAVANNA]), smooth(0.42, 0.58, dryness));
    out.lerp(_c2.setHex(GROUND_COLOR[BIOME.STONE_DESERT]), smooth(0.55, 0.68, dryness));
    out.lerp(_c2.setHex(GROUND_COLOR[BIOME.MESA]), plateau * 0.85);
    out.lerp(_c2.setHex(GROUND_COLOR[BIOME.DUNES]), sandy);

    // Rock through the soil on anything steep — soil will not stay on
    // it. 24° is where a hillside starts to show through and by 46° it
    // is bare, which is what the satellite pictures of every one of the
    // twenty places show.
    const bare = clamp01((slopeDeg - 24) / 22);
    if (bare > 0) out.lerp(_c2.setHex(0x6d675c), bare * 0.85);

    // Snow, above a line that falls as the world gets colder — and not
    // on ground too steep to hold it, which is why the Matterhorn is
    // black on its faces and white on its shoulders.
    const snowline = terrain.snowlineAt(x, z);
    const cold = clamp01((height - snowline * 0.86) / (snowline * 0.3));
    if (cold > 0) out.lerp(_c2.setHex(GROUND_COLOR[BIOME.SNOW]), cold * clamp01(1 - slopeDeg / 52));

    // A salt pan is what is left behind when the water goes: whatever
    // was dissolved in it, lying dead flat and very pale.
    if (dryness > 0.5 && height < PAN_TOP && slopeDeg < 4) {
      out.lerp(_c2.setHex(GROUND_COLOR[BIOME.SALT]),
        smooth(PAN_TOP, PAN_TOP * 0.4, height) * 0.9);
    }

    // The tideline: sand for the last few metres before the water.
    if (height < SHORE_TOP && height > SEA_LEVEL) {
      const shore = 1 - clamp01(height / SHORE_TOP);
      out.lerp(_c2.setHex(GROUND_COLOR[BIOME.BEACH]), shore * shore * 0.8);
    }
    // And under it, dark.
    if (height <= SEA_LEVEL) {
      out.lerp(_c2.setHex(0x0d2130), clamp01(-height / fromReal(500)));
    }
    return out;
  }

  /** Fill one tile with the ground at (i, j) of its ring. */
  function fillTile(ring, tile, i, j) {
    const originX = i * ring.tileSize;
    const originZ = j * ring.tileSize;
    const pos = tile.mesh.geometry.attributes.position;
    const col = tile.mesh.geometry.attributes.color;
    const arr = pos.array;
    const carr = col.array;
    // The plane's own vertices run -size/2..+size/2; the mesh is then
    // placed at the tile's centre.
    for (let v = 0, k = 0; v < TILE_VERTS * TILE_VERTS; v++, k += 3) {
      const x = originX + arr[k];
      const z = originZ + arr[k + 2];
      // Slope is measured at the spacing this ring is actually drawn
      // at, so a coarse ring does not report cliffs it cannot show.
      const s = terrain.sampleAt(x, z, Math.max(2, ring.step * 0.5));
      arr[k + 1] = s.height;
      // The colour is worked out at a FIXED spacing, never the ring's.
      // Steepness decides how much rock shows through, and a coarse
      // ring reads the same hillside as gentler than a fine one does —
      // so the same ground came out two different colours either side
      // of a ring boundary, and every seam in the world was visible as
      // a staircase of pale steps.
      s.slopeDeg = COLOR_SLOPE_STEP === ring.step
        ? s.slopeDeg
        : terrain.sampleAt(x, z, COLOR_SLOPE_STEP).slopeDeg;
      colorAt(x, z, s, _c);
      carr[k] = _c.r;
      carr[k + 1] = _c.g;
      carr[k + 2] = _c.b;
    }
    pos.needsUpdate = true;
    col.needsUpdate = true;
    tile.mesh.geometry.computeVertexNormals();
    tile.mesh.geometry.computeBoundingSphere();
    tile.mesh.position.set(originX, 0, originZ);
    tile.mesh.updateMatrix();
    tile.i = i;
    tile.j = j;
  }

  let built = 0;

  /**
   * Move the world under the player.
   *
   * Only tiles that changed place are refilled. Walking east across one
   * tile boundary costs seven tiles of work in ring 0 and nothing at
   * all in the rings outside it, which only shift once every few
   * hundred metres.
   */
  function setFocus(x, z) {
    for (const ring of rings) {
      const ci = Math.round(x / ring.tileSize);
      const cj = Math.round(z / ring.tileSize);
      if (ci === ring.centre.i && cj === ring.centre.j) continue;
      ring.centre.i = ci;
      ring.centre.j = cj;
      const half = (RING_TILES - 1) / 2;
      // Which squares of ground does this ring need now?
      const need = new Set();
      for (let dj = -half; dj <= half; dj++) {
        for (let di = -half; di <= half; di++) need.add(`${ci + di},${cj + dj}`);
      }
      // Any tile already standing on a square we still want stays put;
      // everything else is free to be moved. Keeping the kept ones in a
      // Set rather than keying tiles by position matters: a fresh ring's
      // tiles all read "NaN,NaN", and a Map collapsed all forty-nine of
      // them into one entry — so the first frame drew a single tile per
      // ring and the world looked like three islands in an empty sea.
      const keeping = new Set();
      const spare = [];
      for (const t of ring.tiles) {
        const key = `${t.i},${t.j}`;
        if (need.has(key) && !keeping.has(key)) keeping.add(key);
        else spare.push(t);
      }
      for (const key of need) {
        if (keeping.has(key)) continue;
        const tile = spare.pop();
        if (!tile) break;
        const [i, j] = key.split(',').map(Number);
        fillTile(ring, tile, i, j);
        built++;
      }
    }
    sea.position.x = x;
    sea.position.z = z;
  }

  // --- What the rest of the game asks the ground ---------------------------------
  /** Ground height in metres at a point. */
  function groundHeightAt(x, z) {
    return terrain.heightAt(x, z);
  }

  /**
   * Is there room to set a spacecraft down here?
   *
   * Flat enough to stand on and above the water. There is nothing solid
   * in the world yet to be inside of, so this is only about the ground.
   */
  function isClear(x, z, radius = 3) {
    const s = terrain.sampleAt(x, z, Math.max(2, radius));
    return s.height > SEA_LEVEL + 1.5 && s.slopeDeg < 12;
  }

  /**
   * Keep a walker out of what he cannot walk on.
   *
   * Slope, not walls: this world has no buildings in it yet. Anything
   * steeper than a man can climb pushes him back downhill, which is
   * also what stops him strolling up a dune's slipface.
   */
  const WALKABLE = 38;
  const _grad = [0, 0];
  function resolveWalk(x, z, radius, out = []) {
    const s = terrain.sampleAt(x, z, 2);
    out[0] = x;
    out[1] = z;
    if (s.slopeDeg <= WALKABLE) return out;
    // Too steep: slide him back DOWN the hill rather than stopping him
    // dead. Standing still against a wall of rock reads as a bug; being
    // shed off it reads as scree, which is what it is.
    const up = 4;
    const gx = terrain.heightAt(x + up, z) - terrain.heightAt(x - up, z);
    const gz = terrain.heightAt(x, z + up) - terrain.heightAt(x, z - up);
    const len = Math.hypot(gx, gz);
    if (len < 1e-5) return out;
    _grad[0] = gx / len;
    _grad[1] = gz / len;
    const push = Math.max(0.35, radius ?? 0.5);
    out[0] = x - _grad[0] * push;
    out[1] = z - _grad[1] * push;
    return out;
  }

  /** Somewhere to begin: flat, dry, near the water, with a view. */
  function findLandingSite() {
    for (let i = 1; i < 6000; i++) {
      const r = 140 * Math.sqrt(i);
      const x = Math.cos(i * 0.7) * r;
      const z = Math.sin(i * 0.7) * r;
      const s = terrain.sampleAt(x, z, 6);
      if (s.height < 12 || s.slopeDeg > 5) continue;
      if (s.biome === BIOME.SEA || s.biome === BIOME.SALT) continue;
      return { x, z, height: s.height, biome: s.biome };
    }
    return { x: 0, z: 0, height: terrain.heightAt(0, 0), biome: terrain.biomeAt(0, 0) };
  }

  const start = findLandingSite();

  return {
    group,
    terrain,
    setFocus,
    /** Nothing animates in the ground itself — yet. */
    update() {},
    groundHeightAt,
    resolveWalk,
    isClear,
    findLandingSite,
    /** Where the game puts you the first time. */
    spawn: new THREE.Vector3(start.x, start.height, start.z),
    heading: -Math.PI / 2,
    info: {
      name: 'an unnamed world',
      biomeAt: (x, z) => terrain.biomeAt(x, z),
      get tilesBuilt() { return built; },
      reach: WORLD_REACH,
    },
  };
}
