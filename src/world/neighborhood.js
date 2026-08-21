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
// to the south-west. Housing is sorted into those groups by footprint
// area; the mall is recognised by the land it stands on, because its
// units are the same size as a block of flats and area alone put
// four-storey brick balconies on a supermarket.
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

// Hills. Marco wants the long residential blocks — the four-storey
// terraces, not the shopping centre — standing on their own ground.
// A building qualifies if it spans this far end to end and isn't retail.
const LONG_SPAN_M = 40;
const HILL_HEIGHT = 5;    // a small rise, not a mountain
const HILL_MARGIN = 3.5;  // flat ground around the walls before it falls away
const HILL_SKIRT = 12;    // metres of slope down to the flat — about 23°

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

/**
 * Nearest point on a line segment, on the ground plane. Written into
 * `out` to keep the walk resolver allocation-free — it runs against every
 * wall in the neighbourhood on every frame Vexo is on foot.
 */
function closestPointOnSegment(px, pz, x1, z1, x2, z2, out) {
  const dx = x2 - x1;
  const dz = z2 - z1;
  const lenSq = dx * dx + dz * dz;
  if (lenSq < 1e-9) { out[0] = x1; out[1] = z1; return out; }
  let t = ((px - x1) * dx + (pz - z1) * dz) / lenSq;
  t = t < 0 ? 0 : (t > 1 ? 1 : t);
  out[0] = x1 + dx * t;
  out[1] = z1 + dz * t;
  return out;
}

/** Shortest distance from a point to a line segment, on the ground plane. */
function distanceToSegment(px, pz, x1, z1, x2, z2) {
  const dx = x2 - x1;
  const dz = z2 - z1;
  const lenSq = dx * dx + dz * dz;
  // Degenerate segment (a repeated node) — fall back to point distance.
  if (lenSq < 1e-9) return Math.hypot(px - x1, pz - z1);
  // How far along the segment the nearest point lies, clamped to its ends.
  let t = ((px - x1) * dx + (pz - z1) * dz) / lenSq;
  t = t < 0 ? 0 : (t > 1 ? 1 : t);
  return Math.hypot(px - (x1 + t * dx), pz - (z1 + t * dz));
}

/** Longest distance between any two vertices — how "long" a block is. */
function longestSpan(pts) {
  let best = 0;
  for (let i = 0; i < pts.length; i++) {
    for (let j = i + 1; j < pts.length; j++) {
      const d = Math.hypot(pts[i][0] - pts[j][0], pts[i][1] - pts[j][1]);
      if (d > best) best = d;
    }
  }
  return best;
}

/** Distance from a point to the nearest edge of a polygon. */
function distanceToPolygon(x, z, pts) {
  let best = Infinity;
  for (let i = 0; i < pts.length - 1; i++) {
    const d = distanceToSegment(x, z, pts[i][0], pts[i][1], pts[i + 1][0], pts[i + 1][1]);
    if (d < best) best = d;
  }
  return best;
}

/**
 * Push every vertex of a ring outward from the centre by `margin`
 * metres — a cheap stand-in for a proper polygon offset.
 *
 * Pushing along each vertex's own radial direction (rather than scaling
 * the whole ring) keeps the margin roughly even on a long thin block,
 * where uniform scaling would fling the two ends far out and leave the
 * long sides barely moved.
 */
function offsetRing(pts, margin) {
  const [cx, cz] = polygonCentre(pts);
  return pts.map(([x, z]) => {
    const dx = x - cx;
    const dz = z - cz;
    const r = Math.hypot(dx, dz) || 1;
    return [x + (dx / r) * margin, z + (dz / r) * margin];
  });
}

/** Smooth 0→1 ramp, so a hillside rounds off at top and bottom. */
function smoothstep01(t) {
  const c = t < 0 ? 0 : (t > 1 ? 1 : t);
  return c * c * (3 - 2 * c);
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
 * Chop a polyline into pieces no longer than `step`, so a ribbon laid
 * along it can follow a slope instead of bridging straight over it.
 */
function resamplePolyline(pts, step) {
  const out = [pts[0]];
  for (let i = 0; i < pts.length - 1; i++) {
    const [x1, z1] = pts[i];
    const [x2, z2] = pts[i + 1];
    const len = Math.hypot(x2 - x1, z2 - z1);
    const pieces = Math.max(1, Math.ceil(len / step));
    for (let k = 1; k <= pieces; k++) {
      const t = k / pieces;
      out.push([x1 + (x2 - x1) * t, z1 + (z2 - z1) * t]);
    }
  }
  return out;
}

/**
 * A ribbon along a polyline — how every road, path and parking bay is
 * drawn. Each segment becomes two triangles, stretched half a width past
 * both ends so the overlaps fill in the corners at junctions (cheaper
 * than mitring, and invisible from the air).
 *
 * `heightAt` lets the ribbon drape over the terrain. It has to: the
 * service roads and parking aisles here run right up against the long
 * blocks, so a hill under one of those blocks always has a road on it.
 * A flat ribbon would be swallowed; this one climbs.
 */
function ribbonGeometry(rawPts, width, yOffset, heightAt) {
  const pos = [];
  const half = width / 2;
  // Short enough that a ribbon tracks a hillside closely; long enough
  // that flat ground doesn't cost thousands of triangles.
  const pts = resamplePolyline(rawPts, 4);
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
      const [cx, cz] = corners[ci];
      pos.push(cx, heightAt(cx, cz) + yOffset, cz);
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

/**
 * Material for a surface lying flat on the ground.
 *
 * Two things every one of these needs:
 *
 *  - **A polygon offset.** Roads, car parks, lawns and the ground plane
 *    are all coplanar to within a few centimetres, which is far below
 *    what the depth buffer can resolve at this distance. `polygonOffset`
 *    biases each layer in the rasteriser itself — the standard fix for
 *    decals — so the order is decided, not fought over. Higher `layer`
 *    wins.
 *
 *  - **Lambert shading, not standard.** These surfaces cover most of
 *    the screen when you fly low, and they're matte, flat and untextured
 *    (bar the ground). Full PBR shading per pixel buys nothing here and
 *    costs the most where there's the most to fill.
 */
function flatMaterial(params, layer) {
  return new THREE.MeshLambertMaterial({
    ...params,
    polygonOffset: true,
    polygonOffsetFactor: -layer,
    polygonOffsetUnits: -layer * 2,
  });
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
    flatMaterial({ color: COLORS.ground, map: makeGroundTexture() }, 0),
  );
  ground.rotation.x = -Math.PI / 2;
  ground.name = 'ground';
  group.add(ground);

  // Every road segment, flattened once: hills use it to work out how
  // much room they have, trees use it to stay out of the carriageway.
  const roadSegments = [];
  for (const r of place.roads) {
    for (let i = 0; i < r.pts.length - 1; i++) {
      roadSegments.push({
        x1: r.pts[i][0], z1: r.pts[i][1],
        x2: r.pts[i + 1][0], z2: r.pts[i + 1][1],
        // Keep a tree's trunk this far from the centreline of any road:
        // half its width (the kerb) plus room for the canopy.
        clear: r.w / 2 + 2.8,
      });
    }
  }

  // --- Hills ----------------------------------------------------------------
  // The long blocks sit on their own rise. Each hill is a flat top a
  // little wider than the building, falling away through a skirt of
  // sloped ground to meet the flat land around it.
  //
  // The hills are NOT trimmed to avoid roads, because they can't be:
  // measured against the real data, six of the seven long blocks have a
  // service road or footpath within a metre of the wall. Roads drape
  // over the terrain instead (see `ribbonGeometry`), so the access road
  // climbs the hill the way it would in life.
  const hills = [];

  /**
   * Height of the ground at a point, in metres. Zero everywhere except
   * on a hill. Trees, the home marker and the ship's floor all read the
   * terrain through this, so they agree with what's drawn.
   */
  function groundHeightAt(x, z) {
    let h = 0;
    for (const hill of hills) {
      const inside = pointInPolygon(x, z, hill.pts);
      const d = inside ? 0 : distanceToPolygon(x, z, hill.pts);
      if (d >= hill.margin + hill.skirt) continue;
      const t = d <= hill.margin ? 1 : 1 - (d - hill.margin) / hill.skirt;
      const height = hill.height * smoothstep01(t);
      if (height > h) h = height;
    }
    return h;
  }

  /**
   * Build one hill's mesh: a flat cap over the footprint, then a few
   * concentric rings stepping down to ground level. The ring heights
   * follow the same smoothstep as `groundHeightAt`, so what you see and
   * what the ship lands on are the same shape.
   */
  function hillGeometries(hill) {
    const geoms = [];
    const RINGS = 3;
    const top = offsetRing(hill.pts, hill.margin);

    // `toNonIndexed` because the skirt bands below are built by hand
    // without an index, and mergeGeometries refuses a mix of the two.
    const cap = new THREE.ShapeGeometry(footprintShape(top)).toNonIndexed();
    cap.rotateX(-Math.PI / 2);
    cap.translate(0, hill.height, 0);
    geoms.push(cap);

    let inner = top;
    let innerY = hill.height;
    for (let r = 1; r <= RINGS; r++) {
      const frac = r / RINGS;
      const outer = offsetRing(hill.pts, hill.margin + hill.skirt * frac);
      const outerY = hill.height * smoothstep01(1 - frac);
      // Skirt band: two triangles per edge, from the inner ring down to
      // the outer one.
      const pos = [];
      for (let i = 0; i < inner.length - 1; i++) {
        const a = inner[i]; const b = inner[i + 1];
        const c = outer[i + 1]; const d = outer[i];
        pos.push(a[0], innerY, a[1], d[0], outerY, d[1], c[0], outerY, c[1]);
        pos.push(a[0], innerY, a[1], c[0], outerY, c[1], b[0], innerY, b[1]);
      }
      const band = new THREE.BufferGeometry();
      band.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
      band.computeVertexNormals();
      band.setAttribute('uv', new THREE.Float32BufferAttribute(new Float32Array((pos.length / 3) * 2), 2));
      geoms.push(band);
      inner = outer;
      innerY = outerY;
    }
    return geoms;
  }

  // Everything standing inside a retail landuse polygon is part of a
  // shopping centre — here, Centro Commerciale Le Piazze. Judging by
  // footprint size alone got this wrong: the mall is a row of units of
  // 800–2300 m² each, the same size as a block of flats, so they all
  // came out as four-storey red-brick condos. The land they sit on is
  // what actually distinguishes them.
  const retailAreas = place.areas.filter(
    (a) => a.kind === 'retail' || a.kind === 'commercial' || a.kind === 'industrial',
  );

  // Pass one: decide which blocks get a hill, and how big it can be.
  // This has to happen before anything is built, because the hill sets
  // the height every wall, roof and tree above it starts from.
  for (const b of place.buildings) {
    if (b.pts.length < 4) continue;
    const area = polygonArea(b.pts);
    const [bcx, bcz] = polygonCentre(b.pts);
    const retail = area > 2500
      || retailAreas.some((a) => pointInPolygon(bcx, bcz, a.pts));
    if (retail || longestSpan(b.pts) < LONG_SPAN_M) continue;
    hills.push({ pts: b.pts, height: HILL_HEIGHT, margin: HILL_MARGIN, skirt: HILL_SKIRT });
  }

  const hillGeoms = [];
  for (const hill of hills) hillGeoms.push(...hillGeometries(hill));
  if (hillGeoms.length) {
    const hillMesh = new THREE.Mesh(
      mergeGeometries(hillGeoms),
      // Layer 1: above the ground plane it rises out of, below the
      // lawns, roads and paths that lie on top of it.
      flatMaterial({ color: COLORS.grass }, 1),
    );
    hillMesh.name = 'hills';
    group.add(hillMesh);
  }

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
    const mesh = new THREE.Mesh(mergeGeometries(geoms), flatMaterial({ color }, 2));
    mesh.name = 'areas';
    group.add(mesh);
  }

  // --- Roads and footpaths --------------------------------------------------
  const asphalt = [];
  const paved = [];
  for (const r of place.roads) {
    const softSurface = r.kind === 'footway' || r.kind === 'path'
      || r.kind === 'pedestrian' || r.kind === 'cycleway';
    const y = softSurface ? 0.06 : 0.05;
    const geom = ribbonGeometry(r.pts, r.w, y, groundHeightAt);
    if (geom) (softSurface ? paved : asphalt).push(geom);
  }
  if (asphalt.length) {
    const mesh = new THREE.Mesh(mergeGeometries(asphalt), flatMaterial({ color: COLORS.asphalt }, 3));
    mesh.name = 'roads';
    group.add(mesh);
  }
  if (paved.length) {
    const mesh = new THREE.Mesh(mergeGeometries(paved), flatMaterial({ color: COLORS.paving }, 4));
    mesh.name = 'paths';
    group.add(mesh);
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
    const [bcx, bcz] = polygonCentre(b.pts);
    const retail = area > 2500
      || retailAreas.some((a) => pointInPolygon(bcx, bcz, a.pts));
    const height = b.h && b.h !== 6.5
      ? b.h
      : (retail ? 8.5 : heightFor(area));
    const shape = footprintShape(b.pts);
    // Where this building's ground floor is. Zero for everything on the
    // flat; the top of its own hill for the long blocks.
    const base = groundHeightAt(bcx, bcz);

    const walls = new THREE.ExtrudeGeometry(shape, { depth: height, bevelEnabled: false });
    walls.rotateX(-Math.PI / 2);
    // Sink the walls a little into the hill so no gap can show at the
    // join if the cap and the footprint disagree by a few centimetres.
    if (base > 0) walls.translate(0, base - 0.4, 0);
    const wallColor = retail
      ? RETAIL_WALL
      : BRICK[Math.floor(rnd() * BRICK.length)];
    wallGeoms.push(paint(walls, wallColor));

    // Roof: the same footprint again as a flat cap, a few centimetres
    // above the extrusion's own top face so the two can't z-fight.
    const roof = new THREE.ShapeGeometry(shape);
    roof.rotateX(-Math.PI / 2);
    roof.translate(0, base + height + 0.06, 0);
    roofGeoms.push(paint(roof, retail
      ? RETAIL_ROOF
      : ROOF[Math.floor(rnd() * ROOF.length)]));

    footprints.push(b.pts);

    // Home is the building the address point sits in (or nearest to it).
    const d = Math.hypot(bcx, bcz);
    if (home == null || d < home.d) {
      home = { d, x: bcx, z: bcz, base };
      homeArea = area;
      homeTop = height;
    }
  }
  const wallMat = new THREE.MeshLambertMaterial({
    map: makeWallTexture(),
    vertexColors: true,
  });
  group.add(new THREE.Mesh(mergeGeometries(wallGeoms), wallMat));
  group.add(new THREE.Mesh(
    mergeGeometries(roofGeoms),
    new THREE.MeshLambertMaterial({ vertexColors: true }),
  ));

  // --- Trees ----------------------------------------------------------------
  // OSM has almost no tree nodes here, but the street is lined with
  // them, so they're scattered along the verges instead: spaced out
  // beside a road, set back from the kerb, and thrown away wherever
  // they'd land on tarmac or in somebody's living room.
  //
  // Offsetting from one road isn't enough on its own — junctions,
  // driveways and the footpaths running behind the verge mean a tree
  // placed a polite distance from ITS road can still land squarely on
  // another. So every candidate is checked against every road in the
  // place, and against every building wall.
  const wallSegments = [];
  for (const f of footprints) {
    for (let i = 0; i < f.length - 1; i++) {
      wallSegments.push({
        x1: f[i][0], z1: f[i][1], x2: f[i + 1][0], z2: f[i + 1][1], clear: 2.2,
      });
    }
  }

  function clearOf(segments, x, z) {
    for (const s of segments) {
      if (distanceToSegment(x, z, s.x1, s.z1, s.x2, s.z2) < s.clear) return false;
    }
    return true;
  }

  const trunks = [];
  const leaves = [];
  // Kept for the smoke test, which checks that none of them ended up
  // standing in the road.
  const treePositions = [];
  for (const r of place.roads) {
    if (r.kind === 'service' || r.kind === 'pedestrian') continue;
    // Well back from the kerb, on the grass — where they actually are.
    const verge = r.w / 2 + 6.5;
    for (let i = 0; i < r.pts.length - 1; i++) {
      const [x1, z1] = r.pts[i];
      const [x2, z2] = r.pts[i + 1];
      const len = Math.hypot(x2 - x1, z2 - z1);
      const ux = (x2 - x1) / len;
      const uz = (z2 - z1) / len;
      for (let t = 8; t < len - 6; t += 17) {
        if (rnd() < 0.4) continue;               // gaps, not an avenue
        const side = rnd() < 0.5 ? 1 : -1;
        const x = x1 + ux * t - uz * verge * side;
        const z = z1 + uz * t + ux * verge * side;
        if (footprints.some((f) => pointInPolygon(x, z, f))) continue;
        if (!clearOf(roadSegments, x, z)) continue;
        if (!clearOf(wallSegments, x, z)) continue;
        const { trunk, leaf } = treeGeometries(x, z, 0.75 + rnd() * 0.7, rnd);
        // Stand it on the ground, which is no longer always y = 0.
        const base = groundHeightAt(x, z);
        if (base > 0) {
          trunk.translate(0, base - 0.3, 0);   // dig the roots in slightly
          leaf.translate(0, base - 0.3, 0);
        }
        trunks.push(trunk);
        leaves.push(leaf);
        treePositions.push([x, z]);
      }
    }
  }
  if (trunks.length) {
    group.add(new THREE.Mesh(
      mergeGeometries(trunks),
      new THREE.MeshLambertMaterial({ vertexColors: true }),
    ));
    group.add(new THREE.Mesh(
      mergeGeometries(leaves),
      new THREE.MeshLambertMaterial({ vertexColors: true, flatShading: true }),
    ));
  }

  // --- Home marker ----------------------------------------------------------
  // A ring on the ground and a soft beam over the roof, so you can find
  // your own building from the air without hunting.
  const marker = new THREE.Group();
  marker.position.set(home.x, home.base, home.z);
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
  beam.position.y = homeTop + 35;  // marker group already sits on the hill
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
  const spawn = new THREE.Vector3(
    home.x + 95,
    45 + groundHeightAt(home.x + 95, home.z + 18),
    home.z + 18,
  );

  // --- Walking collision ------------------------------------------------------
  // Vexo on foot is a circle on the ground plane. Buildings are the same
  // polygons that were extruded into walls, so what he can see he can
  // walk into; tree trunks are circles.
  //
  // Brute force over every wall, with a bounding-box reject first: ~30
  // buildings and a few hundred trees is nothing per frame, and a grid
  // would be one more thing to keep in step with the geometry.
  const TRUNK_RADIUS = 0.42;
  const footprintBounds = footprints.map((pts) => {
    let minX = Infinity; let minZ = Infinity; let maxX = -Infinity; let maxZ = -Infinity;
    for (const [x, z] of pts) {
      if (x < minX) minX = x;
      if (x > maxX) maxX = x;
      if (z < minZ) minZ = z;
      if (z > maxZ) maxZ = z;
    }
    return [minX, minZ, maxX, maxZ];
  });

  const _near = [0, 0];

  /**
   * Slide a walker of the given radius out of anything solid.
   *
   * @param {number} x  town-local metres
   * @param {number} z
   * @param {number} radius
   * @param {number[]} out  `[x, z]`, written in place
   * @returns {number[]} out
   */
  function resolveWalk(x, z, radius, out) {
    let px = x;
    let pz = z;

    for (let b = 0; b < footprints.length; b++) {
      const [minX, minZ, maxX, maxZ] = footprintBounds[b];
      if (px < minX - radius || px > maxX + radius
          || pz < minZ - radius || pz > maxZ + radius) continue;

      const pts = footprints[b];
      const inside = pointInPolygon(px, pz, pts);
      // Nearest point on the outline, whichever side of it we are on.
      let bestX = 0; let bestZ = 0; let bestSq = Infinity;
      for (let i = 0, j = pts.length - 1; i < pts.length; j = i++) {
        closestPointOnSegment(px, pz, pts[j][0], pts[j][1], pts[i][0], pts[i][1], _near);
        const d = (px - _near[0]) ** 2 + (pz - _near[1]) ** 2;
        if (d < bestSq) { bestSq = d; bestX = _near[0]; bestZ = _near[1]; }
      }
      const dist = Math.sqrt(bestSq);
      if (!inside && dist >= radius) continue;

      // Outside: push along the outward direction we already have.
      // Inside (he clipped a corner, or the ship parked him in a wall):
      // that direction points inward, so flip it and put him out through
      // the nearest wall.
      let nx = px - bestX;
      let nz = pz - bestZ;
      if (dist < 1e-6) { nx = 1; nz = 0; } else { nx /= dist; nz /= dist; }
      if (inside) { nx = -nx; nz = -nz; }
      px = bestX + nx * radius;
      pz = bestZ + nz * radius;
    }

    for (const [tx, tz] of treePositions) {
      const dx = px - tx;
      const dz = pz - tz;
      const minDist = radius + TRUNK_RADIUS;
      const distSq = dx * dx + dz * dz;
      if (distSq >= minDist * minDist) continue;
      const dist = Math.sqrt(distSq);
      if (dist < 1e-6) { px = tx + minDist; continue; }
      px = tx + (dx / dist) * minDist;
      pz = tz + (dz / dist) * minDist;
    }

    out[0] = px;
    out[1] = pz;
    return out;
  }

  /**
   * True when a circle of `radius` at this point touches nothing solid —
   * used to decide whether there is room to set the ship down and climb
   * out, rather than parking it inside somebody's kitchen.
   */
  function isClear(x, z, radius) {
    for (let b = 0; b < footprints.length; b++) {
      const [minX, minZ, maxX, maxZ] = footprintBounds[b];
      if (x < minX - radius || x > maxX + radius
          || z < minZ - radius || z > maxZ + radius) continue;
      const pts = footprints[b];
      if (pointInPolygon(x, z, pts)) return false;
      for (let i = 0, j = pts.length - 1; i < pts.length; j = i++) {
        if (distanceToSegment(x, z, pts[j][0], pts[j][1], pts[i][0], pts[i][1]) < radius) {
          return false;
        }
      }
    }
    for (const [tx, tz] of treePositions) {
      if (Math.hypot(x - tx, z - tz) < radius + TRUNK_RADIUS) return false;
    }
    return true;
  }

  function update(dt) {
    pip.rotation.y += dt * 1.1;
    pip.position.y = homeTop + 14 + Math.sin(performance.now() * 0.0016) * 1.4;
  }

  return {
    group,
    update,
    trees: treePositions,
    /** Ground height in metres at a point — 0 on the flat, up on a hill. */
    groundHeightAt,
    /** Slide a walker out of walls and tree trunks. See above. */
    resolveWalk,
    /** Is there room here to set down and get out? */
    isClear,
    home: new THREE.Vector3(home.x, home.base + homeTop, home.z),
    spawn,
    heading: -Math.PI / 2, // facing west
    info: {
      name: place.name,
      town: 'Castel Maggiore',
      buildings: place.buildings.length,
      // The long blocks that stand on their own rise (the mall doesn't).
      hills: hills.length,
      homeStoreyHeight: homeTop,
      homeGround: home.base,
      attribution: place.attribution,
    },
  };
}
