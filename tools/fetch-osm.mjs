// Turn a real place into game geometry.
//
// Pulls building footprints, roads, paths and green space from
// OpenStreetMap (Overpass API) around a lat/lon and writes a compact
// JSON the game can extrude into a low-poly neighbourhood:
// `src/world/places/<slug>.json`.
//
// Coordinates are converted from lat/lon to LOCAL METRES on a flat
// tangent plane centred on the address — x east, z south (three.js
// convention: -z is north/"forward"). Over a few hundred metres the
// curvature error is millimetres, so a plane is exact enough and much
// easier to reason about than spherical coordinates.
//
// Data © OpenStreetMap contributors, ODbL 1.0 — https://osm.org/copyright
//
// Usage:
//   node tools/fetch-osm.mjs --lat 44.5691968 --lon 11.3524384 \
//     --radius 250 --slug castel-maggiore --name "Via Giuseppe Impastato"
import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname } from 'node:path';

const args = Object.fromEntries(
  process.argv.slice(2).join(' ').split('--').filter(Boolean)
    .map((s) => s.trim().split(/\s+(.+)/).slice(0, 2)),
);

const LAT = parseFloat(args.lat);
const LON = parseFloat(args.lon);
const RADIUS = parseInt(args.radius ?? '250', 10);
const SLUG = args.slug ?? 'place';
const NAME = args.name ?? SLUG;
if (!Number.isFinite(LAT) || !Number.isFinite(LON)) {
  console.error('need --lat and --lon');
  process.exit(1);
}

// Metres per degree at this latitude. Latitude is ~constant; longitude
// shrinks by cos(lat) as you move away from the equator.
const M_PER_DEG_LAT = 111132.92 - 559.82 * Math.cos(2 * LAT * Math.PI / 180);
const M_PER_DEG_LON = 111412.84 * Math.cos(LAT * Math.PI / 180);

/** lat/lon → local metres, rounded to 10cm (plenty for a low-poly model). */
function toLocal(lat, lon) {
  return [
    Math.round((lon - LON) * M_PER_DEG_LON * 10) / 10,   // x: east
    Math.round((LAT - lat) * M_PER_DEG_LAT * 10) / 10,   // z: south
  ];
}

const query = `[out:json][timeout:90];
(
  way["building"](around:${RADIUS},${LAT},${LON});
  way["highway"](around:${RADIUS},${LAT},${LON});
  way["landuse"](around:${RADIUS},${LAT},${LON});
  way["leisure"](around:${RADIUS},${LAT},${LON});
  way["natural"](around:${RADIUS},${LAT},${LON});
  node["natural"="tree"](around:${RADIUS},${LAT},${LON});
);
out body geom;`;

console.log(`Querying Overpass for ${RADIUS}m around ${LAT}, ${LON} …`);
const res = await fetch('https://overpass-api.de/api/interpreter', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    // Overpass rejects the bare Node fetch UA with a 406.
    'User-Agent': 'super-vexo-game/0.1 (https://github.com/marcocesari)',
  },
  body: new URLSearchParams({ data: query }),
});
if (!res.ok) {
  console.error(`Overpass returned ${res.status}`);
  process.exit(1);
}
const osm = await res.json();

// Roads get a width so we can draw them as ribbons. OSM rarely tags
// width on a residential street, so these are sane defaults by class.
const ROAD_WIDTH = {
  residential: 6, unclassified: 6, service: 4, living_street: 5,
  tertiary: 7, secondary: 8, primary: 9,
  footway: 1.8, path: 1.8, cycleway: 2.2, track: 3, steps: 1.5,
};

const buildings = [];
const roads = [];
const areas = [];
const trees = [];

for (const el of osm.elements) {
  const t = el.tags ?? {};
  if (el.type === 'node' && t.natural === 'tree') {
    trees.push({ p: toLocal(el.lat, el.lon) });
    continue;
  }
  if (el.type !== 'way' || !el.geometry) continue;
  const pts = el.geometry.map((g) => toLocal(g.lat, g.lon));

  if (t.building) {
    // Height: prefer an explicit tag, then levels × 3m, else 2 storeys —
    // which is what almost everything on this street is.
    const levels = parseFloat(t['building:levels']);
    const height = parseFloat(t.height);
    buildings.push({
      pts,
      h: Number.isFinite(height) ? height
        : Number.isFinite(levels) ? levels * 3
        : 6.5,
      kind: t.building === 'yes' ? 'house' : t.building,
      ...(t['addr:housenumber'] ? { addr: t['addr:housenumber'] } : {}),
      ...(t.name ? { name: t.name } : {}),
    });
  } else if (t.highway) {
    roads.push({
      pts,
      w: parseFloat(t.width) || ROAD_WIDTH[t.highway] || 4,
      kind: t.highway,
      ...(t.name ? { name: t.name } : {}),
    });
  } else if (t.landuse || t.leisure || t.natural) {
    const kind = t.leisure ?? t.natural ?? t.landuse;
    areas.push({ pts, kind, ...(t.name ? { name: t.name } : {}) });
  }
}

const out = {
  slug: SLUG,
  name: NAME,
  origin: { lat: LAT, lon: LON },
  radiusM: RADIUS,
  attribution: 'Data © OpenStreetMap contributors, ODbL 1.0 (osm.org/copyright)',
  generated: new Date().toISOString().slice(0, 10),
  buildings, roads, areas, trees,
};

const path = `src/world/places/${SLUG}.json`;
mkdirSync(dirname(path), { recursive: true });
writeFileSync(path, JSON.stringify(out));
console.log(
  `Wrote ${path}: ${buildings.length} buildings, ${roads.length} roads, ` +
  `${areas.length} areas, ${trees.length} trees ` +
  `(${(JSON.stringify(out).length / 1024).toFixed(1)} kB)`,
);
