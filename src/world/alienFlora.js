// What grows on the planets of Nova Astra.
//
// The same scatter as the home world (flora.js) — patches worked out
// from their coordinates, one instanced draw per species — with
// different things in it. Each planet's profile (novaAstra.js) names
// which of these stands in for each of the home world's species: a
// "conifer" on the ice world is a crystal spire, a "broadleaf" in the
// jungle is a giant mushroom. The slots, the spacing and the fade are
// shared; only the shapes and colours change.
//
// Built the way the home world's trees are: a handful of low-poly
// primitives, each painted one flat colour in its vertices, merged into
// one geometry. Every triangle here is drawn hundreds of times.
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

function paint(geom, hex) {
  const g = geom.index ? geom.toNonIndexed() : geom;
  const c = new THREE.Color(hex);
  const n = g.attributes.position.count;
  const arr = new Float32Array(n * 3);
  for (let k = 0; k < n; k++) { arr[k * 3] = c.r; arr[k * 3 + 1] = c.g; arr[k * 3 + 2] = c.b; }
  g.setAttribute('color', new THREE.BufferAttribute(arr, 3));
  g.deleteAttribute('uv');
  return g;
}

function at(geom, x, y, z, rx = 0, rz = 0, ry = 0) {
  if (rx) geom.rotateX(rx);
  if (rz) geom.rotateZ(rz);
  if (ry) geom.rotateY(ry);
  geom.translate(x, y, z);
  return geom;
}

function merge(parts) {
  const g = mergeGeometries(parts.map((p) => (p.index ? p.toNonIndexed() : p)), false);
  g.computeVertexNormals();
  return g;
}

// --- Pyrox, the lava world --------------------------------------------------------

/** A shard of black volcanic glass, three blades leaning out of the ash. */
export function buildObsidian() {
  const parts = [];
  for (let k = 0; k < 3; k++) {
    const blade = new THREE.ConeGeometry(0.28 - k * 0.05, 1.6 - k * 0.35, 4, 1);
    const a = k * 2.1;
    parts.push(paint(at(blade, Math.cos(a) * 0.18, (1.6 - k * 0.35) / 2, Math.sin(a) * 0.18,
      Math.sin(a) * 0.35, Math.cos(a) * 0.35), k === 0 ? 0x17141a : 0x231d26));
  }
  return merge(parts);
}

/** A tree burned to a black spike, two stubs of branch left on it. */
export function buildCharred() {
  const trunk = paint(at(new THREE.CylinderGeometry(0.08, 0.26, 4.2, 5, 1, true), 0, 2.1, 0), 0x1d1816);
  const b1 = paint(at(new THREE.CylinderGeometry(0.04, 0.08, 1.3, 4, 1, true), 0.35, 2.9, 0, 0, -0.9), 0x221b18);
  const b2 = paint(at(new THREE.CylinderGeometry(0.03, 0.07, 1.0, 4, 1, true), -0.3, 2.3, 0.1, 0.3, 0.8), 0x221b18);
  // Embers still glowing where a branch broke off.
  const ember = paint(at(new THREE.IcosahedronGeometry(0.1, 0), 0.62, 3.25, 0), 0xff6a1a);
  return merge([trunk, b1, b2, ember]);
}

/** A basalt boulder: dark, and the per-instance tint keeps it dark. */
export function buildBasalt() {
  const g = new THREE.DodecahedronGeometry(1, 0);
  g.scale(1, 0.7, 0.9);
  return paint(at(g, 0, 0.45, 0), 0xffffff);
}

// --- Glacius, the ice world -------------------------------------------------------

/** A crystal spire: a tall hexagonal prism with a point, and two small ones at its foot. */
export function buildCrystalSpire() {
  const main = paint(at(new THREE.CylinderGeometry(0.42, 0.55, 4.2, 6, 1), 0, 2.1, 0), 0x9fe6ff);
  const tip = paint(at(new THREE.ConeGeometry(0.42, 1.4, 6), 0, 4.9, 0), 0xd8f6ff);
  const s1 = paint(at(new THREE.CylinderGeometry(0.2, 0.26, 1.6, 6, 1), 0.7, 0.7, 0.1, 0, -0.35), 0x7fd2f2);
  const s1t = paint(at(new THREE.ConeGeometry(0.2, 0.6, 6), 0.98, 1.6, 0.1, 0, -0.35), 0xc4efff);
  const s2 = paint(at(new THREE.CylinderGeometry(0.16, 0.22, 1.2, 6, 1), -0.55, 0.55, -0.3, 0.3, 0.4), 0x8fdcf8);
  return merge([main, tip, s1, s1t, s2]);
}

/** A cluster of violet crystals fanning out of one root. */
export function buildCrystalCluster() {
  const parts = [];
  const shards = [[0, 0, 2.6], [0.55, 0.5, 1.9], [-0.6, 0.45, 2.1], [0.2, -0.65, 1.6], [-0.3, -0.4, 1.4]];
  for (const [ax, az, h] of shards) {
    const lean = Math.hypot(ax, az);
    const prism = new THREE.CylinderGeometry(0.18, 0.28, h, 5, 1);
    prism.translate(0, h / 2, 0);
    // Lean away from the root.
    prism.rotateZ(-ax * 0.5);
    prism.rotateX(az * 0.5);
    prism.translate(ax * 0.3, 0, az * 0.3);
    parts.push(paint(prism, lean > 0.1 ? 0xb3a3ff : 0xd4c8ff));
  }
  return merge(parts);
}

/** An ice boulder: pale, faceted. */
export function buildIceBoulder() {
  const g = new THREE.IcosahedronGeometry(1, 0);
  g.scale(1, 0.75, 0.95);
  return paint(at(g, 0, 0.5, 0), 0xffffff);
}

// --- Sahrun, the desert world -----------------------------------------------------

/** A column cactus with two arms. */
export function buildCactus() {
  const green = 0x4c7a3c;
  const trunk = paint(at(new THREE.CylinderGeometry(0.32, 0.36, 3.6, 8, 1), 0, 1.8, 0), green);
  const top = paint(at(new THREE.SphereGeometry(0.32, 8, 4, 0, Math.PI * 2, 0, Math.PI / 2), 0, 3.6, 0), 0x5a8a47);
  const armA1 = paint(at(new THREE.CylinderGeometry(0.2, 0.2, 0.8, 7, 1), 0.6, 1.6, 0, 0, Math.PI / 2), green);
  const armA2 = paint(at(new THREE.CylinderGeometry(0.2, 0.2, 1.3, 7, 1), 1.0, 2.2, 0), green);
  const armB1 = paint(at(new THREE.CylinderGeometry(0.18, 0.18, 0.6, 7, 1), -0.5, 2.2, 0, 0, Math.PI / 2), green);
  const armB2 = paint(at(new THREE.CylinderGeometry(0.18, 0.18, 0.9, 7, 1), -0.8, 2.6, 0), green);
  // A pink flower on top, because the desert should have something in it.
  const flower = paint(at(new THREE.IcosahedronGeometry(0.14, 0), 0, 3.95, 0), 0xf06aa0);
  return merge([trunk, top, armA1, armA2, armB1, armB2, flower]);
}

/** A palm for the oases: curved trunk and a burst of drooping fronds. */
export function buildPalm() {
  const parts = [];
  // The trunk bends: three segments, each leaning a little more.
  let x = 0;
  let y = 0;
  for (let k = 0; k < 3; k++) {
    const seg = new THREE.CylinderGeometry(0.16 - k * 0.02, 0.2 - k * 0.02, 1.7, 6, 1, true);
    seg.rotateZ(-0.12 * (k + 1));
    seg.translate(x + 0.1 * (k + 1), y + 0.85, 0);
    parts.push(paint(seg, 0x8a6a42));
    x += 0.2 * (k + 1);
    y += 1.65;
  }
  for (let f = 0; f < 7; f++) {
    const a = (f / 7) * Math.PI * 2;
    const frond = new THREE.ConeGeometry(0.28, 2.6, 3, 1);
    frond.rotateZ(Math.PI / 2 + 0.55);       // out and drooping
    frond.translate(1.15, -0.3, 0);
    frond.rotateY(a);
    frond.translate(x, y, 0);
    parts.push(paint(frond, f % 2 ? 0x4f7d2f : 0x5d8c36));
  }
  return merge(parts);
}

/** Sandstone: warm, layered, flat-ish. */
export function buildSandstone() {
  const g = new THREE.CylinderGeometry(0.9, 1.05, 0.9, 7, 1);
  g.scale(1, 0.8, 0.85);
  return paint(at(g, 0, 0.36, 0), 0xffffff);
}

/** A low tumble of dry thorn. */
export function buildThornbush() {
  const a = new THREE.IcosahedronGeometry(0.55, 0);
  a.scale(1.25, 0.6, 1.1);
  return merge([paint(at(a, 0, 0.32, 0), 0x8a7048)]);
}

// --- Verdania, the jungle world ---------------------------------------------------

/** A giant mushroom: a pale stalk and a wide magenta cap with glowing spots. */
export function buildMushroom() {
  const stalk = paint(at(new THREE.CylinderGeometry(0.32, 0.5, 4.2, 7, 1, true), 0, 2.1, 0), 0xe6dcc6);
  const capGeom = new THREE.SphereGeometry(2.3, 10, 5, 0, Math.PI * 2, 0, Math.PI / 2);
  capGeom.scale(1, 0.55, 1);
  const cap = paint(at(capGeom, 0, 4.05, 0), 0xc04ad0);
  const under = paint(at(new THREE.CircleGeometry(2.25, 10), 0, 4.06, 0, Math.PI / 2), 0x7a2a8a);
  const spots = [];
  for (let k = 0; k < 6; k++) {
    const a = (k / 6) * Math.PI * 2 + 0.3;
    const r = k % 2 ? 1.35 : 0.8;
    spots.push(paint(at(new THREE.IcosahedronGeometry(0.2, 0),
      Math.cos(a) * r, 4.05 + Math.sqrt(Math.max(0, 1 - (r / 2.3) ** 2)) * 1.25, Math.sin(a) * r), 0xfff0a8));
  }
  return merge([stalk, cap, under, ...spots]);
}

/** A fern-tree: a thin dark trunk and tiers of teal fronds. */
export function buildFernTree() {
  const parts = [paint(at(new THREE.CylinderGeometry(0.14, 0.22, 5, 5, 1, true), 0, 2.5, 0), 0x2c2440)];
  for (let tier = 0; tier < 3; tier++) {
    const y = 2.6 + tier * 1.1;
    const n = 6 - tier;
    for (let f = 0; f < n; f++) {
      const a = (f / n) * Math.PI * 2 + tier * 0.5;
      const frond = new THREE.ConeGeometry(0.22, 2.2 - tier * 0.5, 3, 1);
      frond.rotateZ(Math.PI / 2 + 0.35);
      frond.translate((2.2 - tier * 0.5) / 2, 0, 0);
      frond.rotateY(a);
      frond.translate(0, y, 0);
      parts.push(paint(frond, tier === 2 ? 0x5ef0d0 : 0x2fc4a8));
    }
  }
  return merge(parts);
}

/** An umbrella tree: a tall bent stem and one flat violet canopy. */
export function buildUmbrellaTree() {
  const stem = paint(at(new THREE.CylinderGeometry(0.16, 0.28, 3.6, 5, 1, true), 0, 1.8, 0, 0, 0.08), 0x3a2e52);
  const canopy = new THREE.CylinderGeometry(2.6, 2.2, 0.35, 9, 1);
  return merge([stem, paint(at(canopy, -0.15, 3.7, 0), 0x7a4ad6)]);
}

/** A glowing bulb plant: three cyan globes on curling stems. */
export function buildBulbPlant() {
  const parts = [];
  for (let k = 0; k < 3; k++) {
    const a = k * 2.1;
    const h = 0.8 + k * 0.3;
    parts.push(paint(at(new THREE.CylinderGeometry(0.03, 0.05, h, 4, 1, true),
      Math.cos(a) * 0.15, h / 2, Math.sin(a) * 0.15, Math.sin(a) * 0.25, Math.cos(a) * 0.25), 0x2a6a5a));
    parts.push(paint(at(new THREE.IcosahedronGeometry(0.17, 0),
      Math.cos(a) * 0.3, h, Math.sin(a) * 0.3), 0x7af6ff));
  }
  return merge(parts);
}

/** A mossy boulder: the tint is the moss. */
export function buildMossRock() {
  const g = new THREE.IcosahedronGeometry(1, 0);
  g.scale(1.05, 0.7, 0.95);
  return paint(at(g, 0, 0.48, 0), 0xffffff);
}
