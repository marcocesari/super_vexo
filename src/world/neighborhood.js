// A real place, rebuilt as low-poly geometry.
//
// Reads one of the JSON files in `places/` — building footprints,
// roads, paths and green space, all in metres on a flat plane centred
// on a street address — and extrudes it into something you can fly
// through. One game unit is one metre, so the model is life-size: the
// ship (about 2.6 m nose to tail) really is small enough to slip
// between the balconies.
//
// Footprints and street layout: © OpenStreetMap contributors, ODbL.
// Heights, colours and materials: eyeballed from Street View, because
// OSM has no height tags at all here. What Street View shows on Via
// Giuseppe Impastato is two kinds of building:
//   - four-storey red-brick condos on the north side, grey balcony
//     slabs on every floor, round brick stair towers, flat roofs;
//   - two-storey brick townhouses opposite, shallow tiled roofs with
//     deep eaves, garden walls and hedges;
// plus the big flat retail sheds of Centro Commerciale Le Piazze off
// to the south-west. The height rule below sorts them by footprint
// area, which separates those three groups cleanly.
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import place from './places/castel-maggiore.json';

// Footprint area (m²) → storeys. Anything bigger than a house but
// smaller than a supermarket is one of the condo blocks.
const STOREY_M = 3.2;
function heightFor(areaM2) {
  if (areaM2 > 2500) return 9;              // retail shed, one tall floor
  if (areaM2 > 700) return 4 * STOREY_M;    // condo block
  if (areaM2 > 400) return 3 * STOREY_M;    // small block of flats
  return 2 * STOREY_M + 1.2;                // townhouse + roof pitch
}

// Brick, in the range Street View shows: orange-red through to the
// darker red-brown of the stair towers. One is picked per building so
// the row reads as separate houses, not one long wall.
const BRICK = [0xa9563c, 0x9c4f38, 0xb3653f, 0x8f4632, 0xa2604a, 0xbd7a54];
const ROOF = [0x8c4130, 0x7d3a2b, 0x99503a];
const RETAIL_WALL = 0xbfb6a8;
const RETAIL_ROOF = 0x7d8085;

const COLORS = {
  ground: 0x6f8f4e,      // dry summer grass — the Emilian plain in July
  grass: 0x7ba055,
  park: 0x5e8a41,
  playground: 0xa88a5c,
  retailLot: 0x9a9a97,
  asphalt: 0x40434a,
  paving: 0x9a6b52,      // the brick-paved footpaths and parking bays
  trunk: 0x6b4a32,
  leaf: [0x4f7a37, 0x5c8a3f, 0x446b30, 0x669650],
};

// Deterministic noise, so the town looks the same every time you land.
function mulberry32(seed) {
  let a = seed >>> 0;
  return function random() {
    a |= 0; a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** Shoelace area of a closed ring of [x, z] points. */
function polygonArea(pts) {
  let a = 0;
  for (let i = 0; i < pts.length - 1; i++) {
    a += pts[i][0] * pts[i + 1][1] - pts[i + 1][0] * pts[i][1];
  }
  return Math.abs(a) / 2;
}

function polygonCentre(pts) {
  let x = 0; let z = 0;
  for (const p of pts) { x += p[0]; z += p[1]; }
  return [x / pts.length, z / pts.length];
}

/** Ray-casting point-in-polygon, used to keep trees out of houses. */
function pointInPolygon(x, z, pts) {
  let inside = false;
  for (let i = 0, j = pts.length - 1; i < pts.length; j = i++) {
    const [xi, zi] = pts[i];
    const [xj, zj] = pts[j];
    const crosses = (zi > z) !== (zj > z)
      && x < ((xj - xi) * (z - zi)) / (zj - zi) + xi;
    if (crosses) inside = !inside;
  }
  return inside;
}

/**
 * A footprint as a Three.js Shape. The JSON stores [x east, z south];
 * the shape is built in XY and later laid flat by rotating -90° about
 * X, which maps shape-Y onto world -Z — hence the negated z here, so
 * the town doesn't come out mirrored.
 */
function footprintShape(pts) {
  const shape = new THREE.Shape();
  shape.moveTo(pts[0][0], -pts[0][1]);
  for (let i = 1; i < pts.length; i++) shape.lineTo(pts[i][0], -pts[i][1]);
  shape.closePath();
  return shape;
}

/** Paint every vertex of `geom` one colour so merged meshes can vary. */
function paint(geom, hex) {
  const c = new THREE.Color(hex);
  const n = geom.attributes.position.count;
  const colors = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) {
    colors[i * 3] = c.r;
    colors[i * 3 + 1] = c.g;
    colors[i * 3 + 2] = c.b;
  }
  geom.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
  return geom;
}

/**
 * A flat ribbon along a polyline — how every road, path and parking bay
 * is drawn. Each segment becomes two triangles, stretched half a width
 * past both ends so the overlaps fill in the corners at junctions
 * (cheaper than mitring, and invisible from the air).
 */
function ribbonGeometry(pts, width, y) {
  const pos = [];
  const half = width / 2;
  for (let i = 0; i < pts.length - 1; i++) {
    const [x1, z1] = pts[i];
    const [x2, z2] = pts[i + 1];
    const dx = x2 - x1;
    const dz = z2 - z1;
    const len = Math.hypot(dx, dz);
    if (len < 0.01) continue;
    const ux = dx / len;
    const uz = dz / len;
    // Extend past both ends, then offset perpendicular.
    const ax = x1 - ux * half; const az = z1 - uz * half;
    const bx = x2 + ux * half; const bz = z2 + uz * half;
    const px = -uz * half; const pz = ux * half;
    const corners = [
      [ax + px, az + pz], [bx + px, bz + pz],
      [bx - px, bz - pz], [ax - px, az - pz],
    ];
    for (const ci of [0, 1, 2, 0, 2, 3]) {
      pos.push(corners[ci][0], y, corners[ci][1]);
    }
  }
  if (pos.length === 0) return null;
  const geom = new THREE.BufferGeometry();
  geom.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  geom.computeVertexNormals();
  // Merging demands identical attribute sets, and the shapes we merge
  // alongside carry UVs — so every ribbon gets a (unused) UV too.
  geom.setAttribute('uv', new THREE.Float32BufferAttribute(new Float32Array((pos.length / 3) * 2), 2));
  return geom;
}

/** A filled polygon lying flat on the ground (parks, lawns, car parks). */
function areaGeometry(pts, y) {
  const geom = new THREE.ShapeGeometry(footprintShape(pts));
  geom.rotateX(-Math.PI / 2);
  geom.translate(0, y, 0);
  return geom;
}

/**
 * Wall texture: one 4 m × 3.2 m tile of brick with a window and the
 * balcony slab under it. The extruded side walls get their UVs from
 * world position (metres), so setting `repeat` to 1/tile-size lines the
 * tile up with real storeys no matter how big the building is.
 */
function makeWallTexture() {
  const W = 128; const H = 102;
  const canvas = document.createElement('canvas');
  canvas.width = W; canvas.height = H;
  const ctx = canvas.getContext('2d');

  // Brick base, white so the per-building vertex colour shows through.
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, W, H);
  // Courses: faint darker lines every few pixels read as brickwork
  // from a distance and cost nothing.
  ctx.strokeStyle = 'rgba(0, 0, 0, 0.10)';
  ctx.lineWidth = 1;
  for (let y = 6; y < H; y += 7) {
    ctx.beginPath();
    ctx.moveTo(0, y + 0.5);
    ctx.lineTo(W, y + 0.5);
    ctx.stroke();
  }

  // Window: dark glass with a pale frame.
  ctx.fillStyle = 'rgba(240, 244, 248, 0.85)';
  ctx.fillRect(26, 20, 76, 46);
  ctx.fillStyle = 'rgba(28, 42, 58, 0.92)';
  ctx.fillRect(30, 24, 68, 38);
  ctx.fillStyle = 'rgba(255, 255, 255, 0.18)';
  ctx.fillRect(30, 24, 68, 12); // sky reflection across the top pane

  // Balcony slab + railing under each window — the thing that makes
  // these blocks recognisable from the street.
  ctx.fillStyle = 'rgba(226, 228, 226, 0.95)';
  ctx.fillRect(12, 70, 104, 9);
  ctx.fillStyle = 'rgba(150, 158, 162, 0.75)';
  ctx.fillRect(12, 79, 104, 3);

  const tex = new THREE.CanvasTexture(canvas);
  tex.wrapS = THREE.RepeatWrapping;
  tex.wrapT = THREE.RepeatWrapping;
  tex.colorSpace = THREE.SRGBColorSpace;
  // UVs arrive in metres, so one tile = 4 m across, one storey tall.
  tex.repeat.set(1 / 4, 1 / STOREY_M);
  tex.anisotropy = 4;
  return tex;
}

/** Ground texture: soft mottling so a 1.4 km lawn isn't one flat colour. */
function makeGroundTexture() {
  const S = 512;
  const canvas = document.createElement('canvas');
  canvas.width = S; canvas.height = S;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, S, S);
  const rnd = mulberry32(99);
  for (let i = 0; i < 900; i++) {
    const x = rnd() * S;
    const y = rnd() * S;
    const r = 8 + rnd() * 46;
    const dark = rnd() < 0.5;
    const g = ctx.createRadialGradient(x, y, 0, x, y, r);
    const a = 0.05 + rnd() * 0.1;
    g.addColorStop(0, dark ? `rgba(60, 80, 40, ${a})` : `rgba(220, 215, 170, ${a})`);
    g.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
  }
  const tex = new THREE.CanvasTexture(canvas);
  tex.wrapS = THREE.RepeatWrapping;
  tex.wrapT = THREE.RepeatWrapping;
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.repeat.set(24, 24);
  return tex;
}

/**
 * One tree: a trunk under a couple of lumpy spheres. The street is
 * lined with young broadleaf saplings, not conifers, so the canopy is
 * two overlapping low-poly balls rather than the usual game cone.
 */
function treeGeometries(x, z, scale, rnd) {
  const h = 5.5 * scale;
  const trunk = new THREE.CylinderGeometry(0.16 * scale, 0.24 * scale, h * 0.55, 5);
  trunk.translate(x, h * 0.275, z);

  const lower = new THREE.IcosahedronGeometry(1.55 * scale, 0);
  lower.scale(1, 0.85, 1);
  lower.translate(x, h * 0.62, z);
  const upper = new THREE.IcosahedronGeometry(1.15 * scale, 0);
  upper.scale(1, 0.9, 1);
  upper.translate(x + (rnd() - 0.5) * scale, h * 0.9, z + (rnd() - 0.5) * scale);
  const leaf = mergeGeometries([lower, upper]);
  const shade = COLORS.leaf[Math.floor(rnd() * COLORS.leaf.length)];
  return { trunk: paint(trunk, COLORS.trunk), leaf: paint(leaf, shade) };
}

/**
 * Build the whole neighbourhood.
 *
 * @returns {{
 *   group: THREE.Group, update: (dt: number) => void,
 *   home: THREE.Vector3, spawn: THREE.Vector3, heading: number,
 *   info: { name: string, town: string, buildings: number },
 * }}
 */
export function createNeighborhood() {
  const group = new THREE.Group();
  const rnd = mulberry32(28); // the house number, why not

  // --- Ground ---------------------------------------------------------------
  const groundSize = place.radiusM * 5;
  const ground = new THREE.Mesh(
    new THREE.PlaneGeometry(groundSize, groundSize),
    new THREE.MeshStandardMaterial({
      color: COLORS.ground,
      map: makeGroundTexture(),
      roughness: 1,
      metalness: 0,
    }),
  );
  ground.rotation.x = -Math.PI / 2;
  group.add(ground);

  // --- Green space, car parks, playgrounds ----------------------------------
  const areaBuckets = new Map();
  for (const a of place.areas) {
    if (a.pts.length < 4) continue;
    const color = a.kind === 'park' ? COLORS.park
      : a.kind === 'playground' ? COLORS.playground
      : a.kind === 'retail' || a.kind === 'construction' ? COLORS.retailLot
      : a.kind === 'grass' ? COLORS.grass
      : null;
    if (color == null) continue; // landuse=residential is just "the town"
    if (!areaBuckets.has(color)) areaBuckets.set(color, []);
    // Stagger heights by a few millimetres so overlapping polygons
    // (a lawn inside a park inside a housing estate) don't z-fight.
    areaBuckets.get(color).push(areaGeometry(a.pts, 0.02 + areaBuckets.get(color).length * 0.001));
  }
  for (const [color, geoms] of areaBuckets) {
    const mesh = new THREE.Mesh(
      mergeGeometries(geoms),
      new THREE.MeshStandardMaterial({ color, roughness: 1, metalness: 0 }),
    );
    group.add(mesh);
  }

  // --- Roads and footpaths --------------------------------------------------
  const asphalt = [];
  const paved = [];
  for (const r of place.roads) {
    const softSurface = r.kind === 'footway' || r.kind === 'path'
      || r.kind === 'pedestrian' || r.kind === 'cycleway';
    const y = softSurface ? 0.06 : 0.05;
    const geom = ribbonGeometry(r.pts, r.w, y);
    if (geom) (softSurface ? paved : asphalt).push(geom);
  }
  if (asphalt.length) {
    group.add(new THREE.Mesh(
      mergeGeometries(asphalt),
      new THREE.MeshStandardMaterial({ color: COLORS.asphalt, roughness: 0.95, metalness: 0 }),
    ));
  }
  if (paved.length) {
    group.add(new THREE.Mesh(
      mergeGeometries(paved),
      new THREE.MeshStandardMaterial({ color: COLORS.paving, roughness: 0.95, metalness: 0 }),
    ));
  }

  // --- Buildings ------------------------------------------------------------
  const wallGeoms = [];
  const roofGeoms = [];
  const footprints = [];
  let home = null;
  let homeArea = 0;
  let homeTop = 0;

  for (const b of place.buildings) {
    if (b.pts.length < 4) continue;
    const area = polygonArea(b.pts);
    const height = b.h && b.h !== 6.5 ? b.h : heightFor(area);
    const retail = area > 2500;
    const shape = footprintShape(b.pts);

    const walls = new THREE.ExtrudeGeometry(shape, { depth: height, bevelEnabled: false });
    walls.rotateX(-Math.PI / 2);
    const wallColor = retail
      ? RETAIL_WALL
      : BRICK[Math.floor(rnd() * BRICK.length)];
    wallGeoms.push(paint(walls, wallColor));

    // Roof: the same footprint again as a flat cap, a few centimetres
    // above the extrusion's own top face so the two can't z-fight.
    const roof = new THREE.ShapeGeometry(shape);
    roof.rotateX(-Math.PI / 2);
    roof.translate(0, height + 0.06, 0);
    roofGeoms.push(paint(roof, retail
      ? RETAIL_ROOF
      : ROOF[Math.floor(rnd() * ROOF.length)]));

    footprints.push(b.pts);

    // Home is the building the address point sits in (or nearest to it).
    const [cx, cz] = polygonCentre(b.pts);
    const d = Math.hypot(cx, cz);
    if (home == null || d < home.d) {
      home = { d, x: cx, z: cz };
      homeArea = area;
      homeTop = height;
    }
  }
  const wallMat = new THREE.MeshStandardMaterial({
    map: makeWallTexture(),
    vertexColors: true,
    roughness: 0.92,
    metalness: 0,
  });
  group.add(new THREE.Mesh(mergeGeometries(wallGeoms), wallMat));
  group.add(new THREE.Mesh(
    mergeGeometries(roofGeoms),
    new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.95, metalness: 0 }),
  ));

  // --- Trees ----------------------------------------------------------------
  // OSM has no tree nodes here, but the street is lined with them, so
  // they're scattered along the verges instead: every ~13 m beside a
  // road, skipped wherever a building already stands.
  const trunks = [];
  const leaves = [];
  for (const r of place.roads) {
    if (r.kind === 'service' || r.kind === 'pedestrian') continue;
    const verge = r.w / 2 + 2.6;
    for (let i = 0; i < r.pts.length - 1; i++) {
      const [x1, z1] = r.pts[i];
      const [x2, z2] = r.pts[i + 1];
      const len = Math.hypot(x2 - x1, z2 - z1);
      const ux = (x2 - x1) / len;
      const uz = (z2 - z1) / len;
      for (let t = 6; t < len - 4; t += 13) {
        if (rnd() < 0.35) continue;              // gaps, not an avenue
        const side = rnd() < 0.5 ? 1 : -1;
        const x = x1 + ux * t - uz * verge * side;
        const z = z1 + uz * t + ux * verge * side;
        if (footprints.some((f) => pointInPolygon(x, z, f))) continue;
        const { trunk, leaf } = treeGeometries(x, z, 0.75 + rnd() * 0.7, rnd);
        trunks.push(trunk);
        leaves.push(leaf);
      }
    }
  }
  if (trunks.length) {
    group.add(new THREE.Mesh(
      mergeGeometries(trunks),
      new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 1, metalness: 0 }),
    ));
    group.add(new THREE.Mesh(
      mergeGeometries(leaves),
      new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 1, metalness: 0, flatShading: true }),
    ));
  }

  // --- Home marker ----------------------------------------------------------
  // A ring on the ground and a soft beam over the roof, so you can find
  // your own building from the air without hunting.
  const marker = new THREE.Group();
  marker.position.set(home.x, 0, home.z);
  const ringR = Math.sqrt(homeArea) * 0.75;
  const ring = new THREE.Mesh(
    new THREE.RingGeometry(ringR, ringR + 1.6, 48),
    new THREE.MeshBasicMaterial({
      color: 0x49abff, transparent: true, opacity: 0.5,
      side: THREE.DoubleSide, depthWrite: false,
    }),
  );
  ring.rotation.x = -Math.PI / 2;
  ring.position.y = 0.3;
  marker.add(ring);

  const beam = new THREE.Mesh(
    new THREE.CylinderGeometry(2.2, 3.4, 70, 12, 1, true),
    new THREE.MeshBasicMaterial({
      color: 0x7fd2ff, transparent: true, opacity: 0.13,
      side: THREE.DoubleSide, depthWrite: false, blending: THREE.AdditiveBlending,
    }),
  );
  beam.position.y = homeTop + 35;
  marker.add(beam);

  const pip = new THREE.Mesh(
    new THREE.OctahedronGeometry(2.4),
    new THREE.MeshBasicMaterial({ color: 0x9fe0ff, transparent: true, opacity: 0.85 }),
  );
  pip.position.y = homeTop + 14;
  marker.add(pip);
  group.add(marker);

  // Spawn: hovering over the street a little east of home, nose pointed
  // west down Via Giuseppe Impastato so the block is dead ahead.
  const spawn = new THREE.Vector3(home.x + 95, 45, home.z + 18);

  function update(dt) {
    pip.rotation.y += dt * 1.1;
    pip.position.y = homeTop + 14 + Math.sin(performance.now() * 0.0016) * 1.4;
  }

  return {
    group,
    update,
    home: new THREE.Vector3(home.x, homeTop, home.z),
    spawn,
    heading: -Math.PI / 2, // facing west
    info: {
      name: place.name,
      town: 'Castel Maggiore',
      buildings: place.buildings.length,
      attribution: place.attribution,
    },
  };
}
