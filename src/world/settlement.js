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
 * One modern block: flat roof, a parapet round it, and glass down two
 * faces.
 *
 * The glass is what does the work. A grid of plain boxes reads as a
 * warehouse estate; the same boxes with a dark band down each front read
 * as a city, because that is the one thing every modern building has and
 * no old one does.
 */
function block(walls, glass, { x, z, w, d, storeys }) {
  const h = storeys * STOREY;
  const body = new THREE.BoxGeometry(w, h, d);
  body.translate(x, h / 2, z);
  walls.push(body);
  // A parapet, so the roofline is a line rather than an edge.
  const parapet = new THREE.BoxGeometry(w + 1.2, 1.1, d + 1.2);
  parapet.translate(x, h + 0.55, z);
  walls.push(parapet);
  // Glazing on the two long faces, inset so it reads as windows rather
  // than as a stripe painted on.
  // Bands, floor by floor, rather than one sheet over the whole front.
  // Glazing the entire face made every building read as a black hole
  // with a concrete frame round it.
  const bands = Math.max(1, Math.round(storeys / 2));
  for (let i = 0; i < bands; i++) {
    const y = ((i + 0.62) / bands) * h;
    const bandH = Math.min(2.2, (h / bands) * 0.5);
    const gz = new THREE.BoxGeometry(w * 0.82, bandH, d + 0.5);
    gz.translate(x, y, z);
    glass.push(gz);
    const gx = new THREE.BoxGeometry(w + 0.5, bandH, d * 0.82);
    gx.translate(x, y, z);
    glass.push(gx);
  }
}

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
  // Modern Estronic wants three things a village does not: window
  // glass, paving for the shipport, and lights on its landing pads.
  const glass = [];
  const ground = [];
  const lights = [];
  /** Rectangles a walker cannot walk through. */
  const footprints = [];
  /** Where the airship can set down, if this place has anywhere. */
  const pads = [];

  const put = (opts) => {
    footprints.push(house(walls, roofs, opts));
  };

  if (place.kind === 'capital') {
    // ESTRONIC, rebuilt modern.
    //
    // It was a walled medieval town — curtain wall, gate towers, a keep
    // in the square — and Marco asked for something more modern. So: a
    // grid of streets instead of rings, flat-roofed blocks that grow
    // taller towards the middle, glass along their fronts, one tower
    // that can be seen from outside the city, and a shipport on the
    // south side with pads for the airship to set down on.
    //
    // The grid is what makes it read as modern more than the buildings
    // do. Rings and radiating lanes are how a town grows over centuries;
    // straight streets crossing at right angles are how one gets planned.
    const BLOCK = 62;          // street centre to street centre
    const STREET = 16;         // how wide a street is
    const half = 4;            // blocks either side of the middle

    // Paving. A modern city standing on a meadow reads as a model on a
    // billiard table; the ground it stands on has to be made of the same
    // stuff its streets are.
    const paving = new THREE.CylinderGeometry(place.r * 0.82, place.r * 0.86, 0.4, 40);
    paving.translate(0, 0.2, 0);
    ground.push(paving);

    // The tower in the middle: the one thing visible from outside.
    // Forty storeys. It has to be taller than everything else by a lot,
    // or it is just the tallest building rather than a landmark you can
    // steer by from outside the city.
    const towerH = STOREY * 40;
    const tower = new THREE.BoxGeometry(19, towerH, 19);
    tower.translate(0, towerH / 2, 0);
    walls.push(tower);
    const towerGlass = new THREE.BoxGeometry(19.6, towerH * 0.82, 13);
    towerGlass.translate(0, towerH * 0.5, 0);
    glass.push(towerGlass);
    const mast = new THREE.CylinderGeometry(0.7, 1.1, 26, 6);
    mast.translate(0, towerH + 13, 0);
    trim.push(mast);
    footprints.push({ x: 0, z: 0, halfX: 11, halfZ: 11 });

    // The blocks. Taller in the middle and lower towards the edge, which
    // is what a city looks like from the air.
    for (let bx = -half; bx <= half; bx++) {
      for (let bz = -half; bz <= half; bz++) {
        if (bx === 0 && bz === 0) continue;                 // the tower's square
        const cx = bx * BLOCK;
        const cz = bz * BLOCK;
        const fromMiddle = Math.hypot(bx, bz) / (half + 0.5);
        if (fromMiddle > 1.05) continue;                    // keep it round-ish
        // The south-east quarter is the shipport; leave it clear.
        if (bx >= 1 && bz >= 2) continue;
        // One in eight blocks is left open — a square, a park, a car
        // park, whatever you like. A city with a building on every
        // single block reads as a printed pattern rather than a place.
        if (rnd() < 0.13) continue;

        // Two to four buildings to a block, each its own size and set
        // back from its neighbours. All the same shape in rows was what
        // made the first attempt look like a barcode from the air.
        const inner = BLOCK - STREET;
        const across = rnd() < 0.45 ? 1 : 2;
        const along = rnd() < 0.4 ? 1 : 2;
        for (let a = 0; a < across; a++) {
          for (let bq = 0; bq < along; bq++) {
            const cellW = inner / across;
            const cellD = inner / along;
            const w = cellW - 5 - rnd() * 4;
            const d = cellD - 5 - rnd() * 4;
            if (w < 8 || d < 8) continue;
            const ox = (a - (across - 1) / 2) * cellW;
            const oz = (bq - (along - 1) / 2) * cellD;
            // Tall in the middle, low at the edges, and a few surprises
            // either way so the skyline is not a smooth dome.
            const storeys = Math.max(2, Math.round(
              (1 - fromMiddle) ** 1.6 * 20 + 2 + (rnd() < 0.12 ? 9 : 0) + rnd() * 3,
            ));
            block(walls, glass, { x: cx + ox, z: cz + oz, w, d, storeys });
            footprints.push({ x: cx + ox, z: cz + oz, halfX: w / 2, halfZ: d / 2 });
          }
        }
      }
    }

    // --- The shipport -------------------------------------------------------
    // On the south-east side, with its pads open to the sky and a
    // control tower looking over them. Marco asked for one somewhere in
    // the city; a quarter of the grid was left empty above to make room.
    const portX = BLOCK * 2.4;
    const portZ = BLOCK * 2.9;
    const apron = new THREE.BoxGeometry(BLOCK * 3.4, 0.5, BLOCK * 2.6);
    apron.translate(portX, 0.25, portZ);
    ground.push(apron);
    for (let i = 0; i < 4; i++) {
      const px = portX + ((i % 2) - 0.5) * BLOCK * 1.6;
      const pz = portZ + (Math.floor(i / 2) - 0.5) * BLOCK * 1.2;
      // A pad: a light ring on the apron, and a rim you can see from
      // the air, which is the whole point of a landing pad.
      const ring = new THREE.TorusGeometry(13, 1.1, 6, 20);
      ring.rotateX(Math.PI / 2);
      ring.translate(px, 0.7, pz);
      lights.push(ring);
      pads.push({ x: px, z: pz, r: 13 });
    }
    // The control tower: a stalk with a wide glass head on it.
    const stalkH = STOREY * 12;
    const stalk = new THREE.CylinderGeometry(3.4, 4.6, stalkH, 10);
    stalk.translate(portX - BLOCK * 1.9, stalkH / 2, portZ - BLOCK * 1.5);
    walls.push(stalk);
    const head = new THREE.CylinderGeometry(9, 7, 9, 10);
    head.translate(portX - BLOCK * 1.9, stalkH + 4.5, portZ - BLOCK * 1.5);
    glass.push(head);
    footprints.push({
      x: portX - BLOCK * 1.9, z: portZ - BLOCK * 1.5, halfX: 5, halfZ: 5,
    });
    // Two hangars along the back of the apron.
    for (let i = 0; i < 2; i++) {
      const hx = portX + (i - 0.5) * BLOCK * 1.7;
      const hz = portZ + BLOCK * 1.15;
      const hangar = new THREE.BoxGeometry(BLOCK * 1.3, 13, 26);
      hangar.translate(hx, 6.5, hz);
      walls.push(hangar);
      const roof = new THREE.CylinderGeometry(13, 13, BLOCK * 1.3, 12, 1, false, 0, Math.PI);
      roof.rotateZ(Math.PI / 2);
      roof.translate(hx, 13, hz);
      trim.push(roof);
      footprints.push({ x: hx, z: hz, halfX: BLOCK * 0.65, halfZ: 13 });
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
    [glass, new THREE.MeshStandardMaterial({
      color: place.glass ?? 0x24404e, roughness: 0.12, metalness: 0.72,
    })],
    [ground, new THREE.MeshStandardMaterial({ color: 0x6e7076, roughness: 0.98 })],
    // Emissive rather than lit: a light per landing pad would recompile
    // every shader in the game the first time one came into view.
    [lights, new THREE.MeshStandardMaterial({
      color: 0x8ff0ff, emissive: 0x2fd6ff, emissiveIntensity: 1.4, roughness: 0.5,
    })],
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
    /** Landing pads, in world metres. Empty for a village. */
    pads: pads.map((p) => ({ x: p.x + x, z: p.z + z, r: p.r })),
  };
}
