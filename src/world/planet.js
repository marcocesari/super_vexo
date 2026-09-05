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
//   ring 0    64 m tiles, a vertex every  4 m  — what he walks on
//   ring 1   128 m tiles, a vertex every  8 m
//   ring 2   256 m tiles, a vertex every 16 m  — the near distance
//    ...                                        each twice the last
//   ring 6  4096 m tiles, a vertex every 256 m — the horizon
//
// Each ring is the same number of tiles, so each costs the same to draw
// while covering four times the ground of the one inside it: the whole
// thing reaches twelve kilometres for about thirty thousand triangles.
// Doubling rather than quadrupling matters — see the note on hollow
// rings below, which only works if a ring's hole is big enough to be
// worth cutting. When the player moves far enough that a ring's centre
// shifts by one tile, only the tiles that actually changed place are
// refilled — moving one tile east rebuilds seven tiles, not forty-nine.
//
// The rings are HOLLOW: a ring does not draw the tiles that the finer
// ring inside it already covers. That is not an optimisation, it is the
// whole reason the ground stops flickering. Four sheets of ground lying
// on top of one another look fine on a plain and fall apart on a hill:
// a coarse sheet joins two points 16 m apart with a straight line, and
// in a hollow that line passes ABOVE the fine ground it is supposed to
// be under, so patches of the wrong surface show through and slide
// about as you fly. Marco saw exactly that and called it glitchy. With
// the middle cut out of every ring there is only ever one sheet.
import * as THREE from 'three';
import { createTerrain, BIOME, GROUND_COLOR, SEA_LEVEL, fromReal } from './terrain.js';
import { PLACES, TOWNSFOLK, CROWD_NAMES, CROWD_LINES } from './continentAlpha.js';
import { createSettlement } from './settlement.js';
import { createTownsfolk } from './townsfolk.js';

// Tiles across each ring, odd so there is a middle one.
const RING_TILES = 6;
// Vertices along a tile's edge. 17 gives 512 triangles a tile, and at
// ring 0 that is a vertex every four metres — fine enough that a man
// 1.8 m tall walks up a slope rather than up a staircase.
const TILE_VERTS = 17;
const RING0_TILE = 64;
// Nine rings reach 49 km. Seven reached 12, which was plenty when the
// ship did 30 m/s and there was nothing in particular to look at — but
// it now flies at 280 and the Spire is meant to be visible from most of
// the continent, and neither works if the world stops three miles out.
// The outer rings are the cheapest there are: same triangle count,
// sixteen times the ground, and nearly all of them outside the view.
const RINGS = 9;
// Each ring's tiles are twice the size of the one inside it. Four was
// the first choice and it is what made the hollow rings pointless: with
// tiles four times the size, the ring inside covers less than two of
// them, so almost nothing can be cut out and the sheets went on lying
// on top of one another. At two, the inner ring covers exactly three
// tiles across, and the middle nine come out.
const RING_STEP = 2;

/** How far the drawn world reaches, in metres. */
export const WORLD_REACH = (RING0_TILE * RING_STEP ** (RINGS - 1) * RING_TILES) / 2;

// Ground colours blend into each other over this distance, so a desert
// does not become a forest across one triangle.
const _c = new THREE.Color();
const _c2 = new THREE.Color();
// Filled in per vertex rather than allocated: a tile has 289 of them and
// this runs while somebody is flying.
const _sample = { height: 0, slopeDeg: 0, region: null };
// How long a frame may spend building new ground. Three milliseconds of
// a sixteen millisecond frame is enough to keep up with the ship and
// small enough that nobody can see it go.
const BUILD_BUDGET_MS = 3;
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
      holeKey: null,
      tiles: [],
      spare: [],
      group: new THREE.Group(),
    };
    // Rings further out are drawn first, so the near ground paints over
    // the coarse ground it overlaps rather than fighting it.
    ring.group.renderOrder = RINGS - r;
    // A few more tiles than the ring needs. The extras are what let a
    // new tile be built before the one it replaces is taken away.
    for (let n = 0; n < RING_TILES * RING_TILES + 12; n++) {
      const geom = new THREE.PlaneGeometry(tileSize, tileSize, TILE_VERTS - 1, TILE_VERTS - 1);
      geom.rotateX(-Math.PI / 2);
      geom.setAttribute('color', new THREE.BufferAttribute(
        new Float32Array(TILE_VERTS * TILE_VERTS * 3), 3,
      ));
      const mesh = new THREE.Mesh(geom, groundMat);
      // Named so tests can tell a piece of ground from the sea, which is
      // also a big flat plane in this group.
      mesh.name = `ground-r${r}`;
      mesh.receiveShadow = true;
      mesh.frustumCulled = true;
      mesh.matrixAutoUpdate = false;
      ring.tiles.push({ mesh, i: NaN, j: NaN });
      ring.group.add(mesh);
    }
    rings.push(ring);
    group.add(ring.group);
  }

  // Every ring covers the same ground as the ones inside it, so four
  // sheets of ground lie on top of one another and the finest must
  // always win. How far a ring can be wrong is set by how far apart its
  // vertices are — a ring with a vertex every 256 m cuts corners off
  // hills by tens of metres, not by a quarter of one — so each is sunk
  // in proportion to its own spacing. A flat 0.25 m was nowhere near
  // enough: the coarse ground poked up through the fine ground in
  // patches that flickered as you flew.
  // The rings no longer lie on top of one another, so this is only about
  // the seam where two of them meet: the coarse side is sunk a little so
  // that where they disagree, the finer ground is the one you see.
  for (let r = 1; r < RINGS; r++) {
    rings[r].group.position.y = -0.05 * rings[r].step;
  }

  // --- The towns he drew ---------------------------------------------------------
  // Built once at load: three of them, two and a half thousand triangles
  // between them, which is less than one tile of ground. They are hidden
  // until you are near enough to see them, so they cost nothing to have.
  const settlements = PLACES.map((place) => {
    const town = terrain.towns.find((t) => t.name === place.name);
    const s = createSettlement(place, town.x, town.z, town.level);
    s.group.visible = false;
    group.add(s.group);

    // And the people who live there. They are given a name and something
    // to say apiece from his own map — see TOWNSFOLK.
    const who = TOWNSFOLK[place.name] ?? [];
    if (who.length) {
      // How many people are about.
      //
      // Kakariko Village in Tears of the Kingdom is small and full: you
      // cannot cross it without passing four or five people. Marco asked
      // for that here, in a city nine times the size — so the count goes
      // with the ground rather than being a fixed handful, and they are
      // gathered towards the middle where the streets are, not spread
      // evenly over three square kilometres.
      const crowd = place.kind === 'capital'
        ? Math.round(place.r / 6)
        : who.length;
      // Where they gather. The middle of a city is busy; so is its
      // shipport, which is also where anybody arriving actually sets
      // down — and with everybody drawn to the middle, that was the one
      // place in Estronic with nobody in it.
      // The spreads are tight on purpose. How many people you can see is
      // the count divided by the square of how far they are scattered,
      // so widening a gathering from 240 m to 400 m does not thin it by
      // a half but by nearly three quarters.
      const anchors = place.kind === 'capital'
        ? [
          { x: s.x, z: s.z, spread: 240, share: 0.40 },
          ...s.pads.map((pad) => ({ x: pad.x, z: pad.z, spread: 120, share: 0.06 })),
          { x: s.x, z: s.z, spread: place.r * 0.62, share: 0.36 },
        ]
        : [];
      s.people = createTownsfolk({
        town: s,
        anchors,
        // The capital's streets are paved, and the paving stands 0.4 m
        // proud of the ground it was laid on.
        lift: place.kind === 'capital' ? 0.4 : 0,
        count: Math.max(who.length, crowd),
        seed: 7 + place.name.length * 31,
        // Somewhere out on the street: inside the town, and not inside
        // anything that has been built on it.
        isStreet: (x, z) => !s.footprints.some(
          (f) => Math.abs(x - f.x) < f.halfX + 1.4 && Math.abs(z - f.z) < f.halfZ + 1.4,
        ),
      });
      // The shopkeepers first: they stand at their own doors and do not
      // wander, because a shop with nobody in it is a wall.
      for (const [i, shop] of (s.shops ?? []).entries()) {
        const keeper = s.people.folk[i];
        if (!keeper) break;
        keeper.x = shop.x;
        keeper.z = shop.z;
        keeper.to = { x: shop.x, z: shop.z };
        keeper.heading = Math.atan2(s.x - shop.x, s.z - shop.z);
        keeper.stays = true;
        keeper.shop = shop.kind;
      }

      // The named residents next — the ones with something worth
      // hearing — and then everybody else, who each have a name and one
      // remark, because a passer-by says one thing.
      for (const [i, person] of s.people.folk.entries()) {
        if (person.shop) {
          person.name = person.shop;
          person.lines = [];
        } else if (i < who.length) {
          person.name = who[i].name;
          person.lines = who[i].lines;
        } else {
          const n = i - who.length;
          person.name = CROWD_NAMES[n % CROWD_NAMES.length];
          person.lines = [CROWD_LINES[(n * 7 + i) % CROWD_LINES.length]];
        }
        person.said = 0;
        person.town = place.name;
      }
      // Added to the WORLD, not to the town. The town's group is moved
      // to where the town stands, and the people work in world
      // coordinates already — parenting them to it put everybody a
      // kilometre east and a hundred metres up, which is why the first
      // person anyone talked to was invisible.
      s.people.group.visible = false;
      group.add(s.people.group);
    }
    return s;
  });
  // How far off a town can be seen. Beyond this it is hidden, which also
  // keeps forty-odd footprints out of the walk resolver's way.
  const TOWN_SIGHT = 4200;

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

  // Heights for one tile, with a two-vertex border all round, so a
  // vertex on the tile's edge can still look at its neighbours. Scratch
  // space, filled and re-filled: this runs while somebody is flying.
  const BORDER = 2;
  const GRID = TILE_VERTS + BORDER * 2;
  const _grid = new Float64Array(GRID * GRID);

  /**
   * Fill one tile with the ground at (i, j) of its ring.
   *
   * The heights are sampled ONCE onto a grid and everything else is read
   * back off it. The first version asked the terrain five separate
   * questions per vertex — a height, and four more for the normal — and
   * building a tile cost five times what it needed to. At speed the
   * queue could not keep up and new ground arrived late.
   */
  function fillTile(ring, tile, i, j) {
    const originX = i * ring.tileSize;
    const originZ = j * ring.tileSize;
    const pos = tile.mesh.geometry.attributes.position;
    const col = tile.mesh.geometry.attributes.color;
    const nrm = tile.mesh.geometry.attributes.normal;
    const arr = pos.array;
    const carr = col.array;
    const narr = nrm.array;
    const step = ring.step;
    const x0 = originX - ring.tileSize / 2;
    const z0 = originZ - ring.tileSize / 2;

    for (let b = 0; b < GRID; b++) {
      const z = z0 + (b - BORDER) * step;
      for (let a = 0; a < GRID; a++) {
        _grid[b * GRID + a] = terrain.heightAt(x0 + (a - BORDER) * step, z);
      }
    }

    // How many grid cells apart to look when asking which way the ground
    // faces. Rings 0 and 1 both come out at eight metres, so the seam
    // between them — the one boundary anyone is close enough to notice —
    // is shaded identically on both sides.
    const span = Math.max(1, Math.min(BORDER, Math.round(COLOR_SLOPE_STEP / step)));
    const run = 2 * span * step;

    for (let b = 0; b < TILE_VERTS; b++) {
      for (let a = 0; a < TILE_VERTS; a++) {
        const v = b * TILE_VERTS + a;
        const k = v * 3;
        const ga = a + BORDER;
        const gb = b + BORDER;
        const x = x0 + a * step;
        const z = z0 + b * step;
        const height = _grid[gb * GRID + ga];
        arr[k] = x - originX;
        arr[k + 1] = height;
        arr[k + 2] = z - originZ;

        // The way the ground FACES, taken from the terrain rather than
        // from the triangles.
        //
        // This used to be `computeVertexNormals()`, which works a
        // vertex's normal out from the triangles around it — and a tile
        // knows nothing about its neighbours, so every vertex on a
        // tile's edge got a normal from only half of them. The result
        // was a hard line of wrong lighting along every seam in the
        // world, and because tiles are recycled as you move, those lines
        // slid about while you flew. The terrain gives the same answer
        // on both sides of any seam.
        const nx = (_grid[gb * GRID + ga + span] - _grid[gb * GRID + ga - span]) / run;
        const nz = (_grid[(gb + span) * GRID + ga] - _grid[(gb - span) * GRID + ga]) / run;
        const nlen = Math.hypot(nx, 1, nz);
        narr[k] = -nx / nlen;
        narr[k + 1] = 1 / nlen;
        narr[k + 2] = -nz / nlen;

        // Steepness falls out of the normal rather than costing another
        // four height lookups. It matters that it is measured the same
        // way on both sides of a seam: steepness decides how much rock
        // shows through the soil, so a ring that reads a hillside as
        // gentler paints it a different colour.
        _sample.height = height;
        _sample.slopeDeg = (Math.atan(Math.hypot(nx, nz)) * 180) / Math.PI;
        _sample.region = terrain.regionAt(x, z);
        colorAt(x, z, _sample, _c);
        carr[k] = _c.r;
        carr[k + 1] = _c.g;
        carr[k + 2] = _c.b;
      }
    }
    pos.needsUpdate = true;
    col.needsUpdate = true;
    nrm.needsUpdate = true;
    tile.mesh.geometry.computeBoundingSphere();
    tile.mesh.position.set(originX, 0, originZ);
    tile.mesh.visible = true;
    tile.mesh.updateMatrix();
    tile.i = i;
    tile.j = j;
  }

  /** The nearest ODD number of tiles. See setFocus for why odd. */
  function oddSnap(v, tile) {
    return Math.round((v / tile - 1) / 2) * 2 + 1;
  }

  let built = 0;
  // How long the last frame spent building ground, and how much is still
  // owed. Reported rather than inferred from frame times, which on a
  // machine drawing in software tell you nothing about this.
  let buildMs = 0;
  // Tiles waiting to be filled, nearest first.
  const queue = [];

  /**
   * Move the world under the player.
   *
   * Only tiles that changed place are refilled. Walking east across one
   * tile boundary costs seven tiles of work in ring 0 and nothing at
   * all in the rings outside it, which only shift once every few
   * hundred metres.
   */
  function setFocus(x, z) {
    // The rectangle the ring inside this one covers, so this one can
    // leave a hole exactly there. It has to be the inner ring's REAL
    // rectangle, not one worked out from the player's position: each
    // ring snaps to its own grid, so the two are rarely centred on the
    // same spot, and a hole cut around the wrong centre leaves a gap
    // down one side of the world.
    let inner = null;
    for (const ring of rings) {
      // Snapped to an ODD number of its own tiles, which sounds
      // arbitrary and is the whole trick.
      //
      // There are six tiles across a ring, an even number, so the tiles
      // straddle its centre: their edges land on the centre and their
      // middles land half a tile either side. A ring's tiles are twice
      // the size of the ring inside it, so for the hole cut in this ring
      // to line up exactly with what that inner ring covers, the inner
      // ring's centre has to fall on one of THIS ring's tile middles —
      // and that happens exactly when both are snapped to an odd
      // multiple of their own tile. Snap to any multiple and it lines up
      // half the time: measured, between 9% and 34% of the ground came
      // out drawn twice depending on where you were standing. Snapped
      // this way it is none of it, anywhere.
      const ci = oddSnap(x, ring.tileSize);
      const cj = oddSnap(z, ring.tileSize);
      const hole = inner;
      inner = {
        x: ci * ring.tileSize,
        z: cj * ring.tileSize,
        half: (RING_TILES * ring.tileSize) / 2,
      };
      // Recompute when the ring itself has moved OR when the hole in the
      // middle of it has. The hole belongs to the ring inside, which
      // moves twice as often — and skipping the check when only the hole
      // had moved was what kept the rings overlapping: ring 1 went on
      // drawing tiles that ring 0 had just moved over, so the coarse
      // ground and the fine ground lay on top of one another again.
      const holeKey = hole ? `${hole.x},${hole.z}` : '';
      if (ci === ring.centre.i && cj === ring.centre.j && holeKey === ring.holeKey) continue;
      ring.centre.i = ci;
      ring.centre.j = cj;
      ring.holeKey = holeKey;
      const half = (RING_TILES - 1) / 2;
      // Which squares of ground does this ring need now?
      const need = new Set();
      for (let dj = -half; dj <= half; dj++) {
        for (let di = -half; di <= half; di++) {
          // Skip the ones the finer ring already draws — but only if
          // this tile is COMPLETELY inside it. A tile that straddles the
          // boundary is still needed, or there would be a hole in the
          // world.
          if (hole) {
            const tx = (ci + di) * ring.tileSize;
            const tz = (cj + dj) * ring.tileSize;
            const r = ring.tileSize / 2;
            if (Math.abs(tx - hole.x) + r <= hole.half
                && Math.abs(tz - hole.z) + r <= hole.half) continue;
          }
          need.add(`${ci + di},${cj + dj}`);
        }
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
      // The work is not done here. Filling every new tile the moment it
      // is wanted is what made the world judder: crossing one boundary
      // at speed cost a 200 ms frame, and the ground appeared to jump.
      // The jobs go on a queue and get done a few milliseconds at a
      // time. Nearest first, because that is what anyone is looking at.
      // Put the unwanted ones away NOW rather than when the queue next
      // runs dry. While you are flying, the queue never runs dry — a new
      // row of tiles is wanted every few frames — so "later" meant
      // "never", and tiles nobody wanted carried on drawing a coarse
      // copy of ground the finer ring was already drawing. Every one of
      // them is either inside the hole in the middle of this ring or off
      // its outer edge, and in both cases the ring next door has it
      // covered.
      for (const t of spare) {
        t.mesh.visible = false;
        t.i = NaN;
        t.j = NaN;
      }
      ring.spare = spare;
      // Throw away this ring's outstanding jobs before queueing the new
      // ones. Without this the same square gets queued again on every
      // frame it is still missing, and at speed the queue fills with
      // duplicates — which is not merely wasted work: each duplicate
      // builds ANOTHER tile on ground that already has one, so the ring
      // ends up drawing its whole pool of tiles, on top of each other,
      // which is precisely the overlap all of this is meant to prevent.
      for (let n = queue.length - 1; n >= 0; n--) {
        if (queue[n].ring === ring) queue.splice(n, 1);
      }
      for (const key of need) {
        if (keeping.has(key)) continue;
        const [i, j] = key.split(',').map(Number);
        queue.push({
          ring, i, j,
          d2: (i * ring.tileSize - x) ** 2 + (j * ring.tileSize - z) ** 2,
        });
      }
    }
    queue.sort((a, b) => a.d2 - b.d2);
    sea.position.x = x;
    sea.position.z = z;
    for (const s of settlements) {
      s.group.visible = Math.hypot(s.x - x, s.z - z) < TOWN_SIGHT + s.radius;
      // The people are only worth drawing from close up: they are 1.75 m
      // tall and there are eight of them.
      if (s.people) {
        s.people.group.visible = Math.hypot(s.x - x, s.z - z) < s.radius + 700;
      }
    }
    work(BUILD_BUDGET_MS);
  }

  /**
   * Build queued ground for a few milliseconds, then stop.
   *
   * A tile being replaced is left standing until its replacement is
   * ready, which is why each ring keeps a handful of spare tiles: a hole
   * in the ground is worse to look at than a tile of slightly stale
   * ground at the edge of a ring, and this way there is neither.
   */
  function work(budgetMs) {
    const started = performance.now();
    while (queue.length && performance.now() - started < budgetMs) {
      const job = queue.shift();
      const tile = job.ring.spare.pop();
      if (tile) {
        fillTile(job.ring, tile, job.i, job.j);
        built++;
      }
    }
    buildMs = performance.now() - started;
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
    if (s.height <= SEA_LEVEL + 1.5 || s.slopeDeg >= 12) return false;
    return !insideBuilding(x, z, radius);
  }

  /** Is this point inside one of the buildings? */
  function insideBuilding(x, z, pad = 0) {
    for (const s of settlements) {
      if (Math.hypot(s.x - x, s.z - z) > s.radius * 1.4) continue;
      for (const f of s.footprints) {
        if (Math.abs(x - f.x) < f.halfX + pad && Math.abs(z - f.z) < f.halfZ + pad) return f;
      }
    }
    return null;
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
    out[0] = x;
    out[1] = z;

    // Walls first: a house is solid whatever the ground under it does.
    // Pushed out of the nearest side, which is what lets somebody slide
    // along a wall rather than sticking to it.
    const wall = insideBuilding(x, z, radius ?? 0.4);
    if (wall) {
      const pad = (radius ?? 0.4);
      const dx = x - wall.x;
      const dz = z - wall.z;
      const outX = wall.halfX + pad - Math.abs(dx);
      const outZ = wall.halfZ + pad - Math.abs(dz);
      if (outX < outZ) out[0] = wall.x + Math.sign(dx || 1) * (wall.halfX + pad);
      else out[1] = wall.z + Math.sign(dz || 1) * (wall.halfZ + pad);
      return out;
    }

    const s = terrain.sampleAt(x, z, 2);
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

  /**
   * Somewhere to begin: mild, level, low-lying country.
   *
   * The search starts a good way out from the middle of the world, and
   * that is deliberate — the middle is the Spire, and the first version
   * of this happily landed the ship on its snowfield 1155 m up, because
   * the rim of a crater is flat and the rule only asked for flat.
   */
  function findLandingSite() {
    const AWAY_FROM_SPIRE = 14000;
    for (let i = 1; i < 9000; i++) {
      const r = AWAY_FROM_SPIRE + 90 * Math.sqrt(i);
      const x = Math.cos(i * 0.7) * r;
      const z = Math.sin(i * 0.7) * r;
      const s = terrain.sampleAt(x, z, 6);
      // Low ground, gently sloping, and somewhere a person would want
      // to stand: not a snowfield, not a salt pan, not the sea.
      if (s.height < 20 || s.height > 320 || s.slopeDeg > 5) continue;
      if (s.biome === BIOME.SEA || s.biome === BIOME.SALT || s.biome === BIOME.SNOW) continue;
      return { x, z, height: s.height, biome: s.biome };
    }
    return { x: AWAY_FROM_SPIRE, z: 0, height: terrain.heightAt(AWAY_FROM_SPIRE, 0),
      biome: terrain.biomeAt(AWAY_FROM_SPIRE, 0) };
  }

  /**
   * Where the game puts you the first time you come down.
   *
   * At the capital's shipport, which is what a shipport is for. It used
   * to be a flat spot the world picked out on its own, and that spot was
   * sixteen kilometres from Estronic — so unless you happened to fly to
   * the middle of the map you never saw the city, never met anybody in
   * it, and would reasonably report that there were no people in this
   * game at all.
   */
  function startingPoint() {
    const capital = settlements.find((s) => s.kind === 'capital' && s.pads.length);
    if (capital) {
      const pad = capital.pads[0];
      return { x: pad.x, z: pad.z, height: capital.level, biome: 'the shipport' };
    }
    return findLandingSite();
  }

  const start = startingPoint();

  return {
    group,
    terrain,
    setFocus,
    /** Build everything outstanding now — for landing and for tests. */
    flush() { work(Infinity); },
    /**
     * The towns' people walk about while you are near enough to see it.
     * Nothing else in the ground animates.
     */
    update(dt) {
      for (const s of settlements) {
        if (!s.people || !s.people.group.visible) continue;
        s.people.update(dt, groundHeightAt);
      }
    },

    /**
     * Whoever is standing close enough to talk to, or null.
     *
     * Only in a town that is on screen: a person you cannot see is not
     * somebody you can strike up a conversation with.
     */
    nearestPerson(x, z) {
      for (const s of settlements) {
        if (!s.people || !s.people.group.visible) continue;
        if (Math.hypot(s.x - x, s.z - z) > s.radius * 1.6) continue;
        const who = s.people.nearest(x, z);
        if (who) return { person: who, people: s.people };
      }
      return null;
    },
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
      /** The towns, for the map and for tests. */
      settlements,
      /** What building the ground cost last frame, and what is left. */
      get build() { return { ms: +buildMs.toFixed(2), queued: queue.length }; },
      reach: WORLD_REACH,
    },
  };
}
