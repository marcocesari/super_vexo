// The people of Estronic, and of the two villages.
//
// They walk the streets, and you can stop one and talk to it.
//
// They are dressed the way Vexo is — plated suit, shoulder pads, a lit
// visor across the eyes, boots — because they live in his world and a
// crowd in T-shirts made him look like a visitor from another game. What
// changes from person to person is the colour of the suit: everyone gets
// their own, so a street reads as a crowd rather than a squad.
//
// Nine draw calls for the lot of them, however many there are. Each
// person is nine instanced meshes sharing five matrices — the body
// (suit, plates, glow, skin and hair all ride the same one), an arm each
// side and a leg each side — so the crowd costs the same whether there
// are six of them or three hundred, and the arms and legs can still
// swing, because an instance carries its own matrix.
//
// They are not clever. Each one picks a spot on a street, walks to it,
// stands about for a moment and picks another. That is enough: what
// makes a town feel inhabited is people crossing in front of you at
// their own business, not pathfinding.
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

const HEIGHT = 1.8;               // as tall as Vexo, who lives here too
const HIP = 0.9;                  // where the legs hinge, and how long they are
const WALK_SPEED = 1.25;          // m/s, an unhurried town pace
const SWING = 0.42;               // radians, how far a leg goes each way
// Radians of leg swing per metre walked. This is not a taste knob: a
// straight leg of length HIP swinging SWING each way covers
// 2·HIP·sin(SWING) per step and takes half a cycle to do it, so anything
// else and they skate along the street with their feet turning over too
// slowly. That was most of what looked wrong about the old walk.
const STRIDE = Math.PI / (2 * HIP * Math.sin(SWING));
const TALK_RANGE = 3.4;           // how close you have to be to be heard
// How far away a person is still worth drawing, and how many may be
// drawn at once. Estronic holds three hundred people and a person is
// eighteen hundred triangles, which is half a million triangles of
// crowd if everybody is drawn — and three hundred asks of the ground
// height every frame, which costs more than the drawing does. Only the
// ones near enough to make out get either. They all keep walking.
const DRAW_RANGE = 190;
const DRAW_MOST = 110;

// Suits. One each, so a crowd is a crowd rather than a squad in uniform.
//
// None of them near a skin tone. The first set had a tan and a light
// brown in it, and a person wearing either looked like a person wearing
// nothing at all.
const SUITS = [
  0x27557f, 0x5d2f66, 0x1f6b4c, 0x8a5a12, 0x3c4250, 0x8e2f2a,
  0x16656d, 0x7a2050, 0x4a6b1c, 0x9a4a10, 0x2c3b74, 0x6d6320,
];
// The armour over it is standard issue and the same on everybody: it is
// the suit underneath that is theirs. That is also why they read as
// Vexo's people — his plate is this colour too.
const ARMOUR = 0x4d545f;
const SKINS = [0xd8a684, 0xb07a55, 0x8a5a3c, 0xefc6a4];
const HAIRS = [0x3a2418, 0x1d1712, 0x5a4126, 0x7b6a53, 0x2a2a2e];
const GLOW = 0x53ff9d;            // the same green that runs through Vexo

function mulberry32(a) {
  return function rnd() {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/**
 * A slab: a plain box, for the small flat plates. A crowd is a hundred
 * people and every triangle is paid for a hundred times, so only the
 * pieces whose ROUNDED EDGE you can actually see get one.
 */
function slab(w, h, d) {
  return new THREE.BoxGeometry(w, h, d);
}

/**
 * Merge a set of pieces into one geometry.
 *
 * Everything goes non-indexed first: some primitives come out indexed
 * and some do not, and mergeGeometries refuses a mixture — quietly, by
 * returning null, which turns up later as an instanced mesh with no
 * geometry at all.
 */
function merge(parts) {
  return mergeGeometries(parts.map((g) => (g.index ? g.toNonIndexed() : g)), false);
}

/** Move a piece into place. */
function at(geom, x, y, z, rx = 0, ry = 0, rz = 0) {
  if (rx) geom.rotateX(rx);
  if (ry) geom.rotateY(ry);
  if (rz) geom.rotateZ(rz);
  geom.translate(x, y, z);
  return geom;
}

// Everything below is built in HIP SPACE: y = 0 at the hips, so the
// soles come out at -HIP and the top of the head at HEIGHT - HIP. The
// body instance is placed at the hip, which is the point that bobs.

/** Suit: the turned torso, the pelvis and the belt. */
function buildSuit() {
  // A lathed profile rather than a scaled cylinder, so the body tapers
  // at the waist and swells at the ribs instead of standing there like
  // a bin. It costs no more than a cylinder would.
  const profile = [
    [0.145, 0.02], [0.128, 0.12], [0.132, 0.23],
    [0.155, 0.35], [0.163, 0.46], [0.148, 0.55], [0.095, 0.60],
  ].map(([r, y]) => new THREE.Vector2(r, y));
  const torso = new THREE.LatheGeometry(profile, 10);
  torso.scale(1, 1, 0.78);        // a chest is deeper than it is wide

  const pelvis = new THREE.SphereGeometry(0.152, 10, 5);
  pelvis.scale(1.04, 0.58, 0.82);
  const belt = new THREE.TorusGeometry(0.152, 0.026, 6, 12);
  const neck = new THREE.CylinderGeometry(0.05, 0.056, 0.09, 6, 1, true);
  return merge([
    torso,
    at(pelvis, 0, 0.01, 0),
    at(belt, 0, 0.08, 0, Math.PI / 2),
    at(neck, 0, 0.63, 0),
  ]);
}

/** The plates over it, in a lighter shade of the same suit. */
function buildPlates() {
  const chest = slab(0.24, 0.28, 0.06);
  const parts = [
    at(chest, 0, 0.42, 0.105, -0.06),
    at(slab(0.026, 0.18, 0.03), 0, 0.44, 0.145),            // sternum ridge
    at(slab(0.22, 0.26, 0.05), 0, 0.40, -0.10, 0.05),       // back plate
  ];
  for (const side of [-1, 1]) {
    // Pauldrons. A squashed sphere, not an extruded rounded rectangle:
    // it is the ROUND shoulder that makes a suit read as armour, and a
    // sphere at eight segments buys it for a fifth of the triangles.
    const pad = new THREE.SphereGeometry(0.105, 8, 5);
    pad.scale(1, 0.78, 0.92);
    parts.push(at(pad, side * 0.195, 0.545, 0));
    parts.push(at(slab(0.10, 0.16, 0.05), side * 0.10, -0.16, 0.07));   // thigh plate
    parts.push(at(slab(0.09, 0.20, 0.05), side * 0.085, -0.61, 0.055));  // shin plate
  }
  return merge(parts);
}

/** Head and jaw. */
function buildSkin() {
  const head = new THREE.SphereGeometry(0.104, 10, 7);
  head.scale(0.95, 1.14, 1);
  const jaw = new THREE.SphereGeometry(0.07, 8, 5);
  jaw.scale(0.94, 0.82, 1.04);
  const nose = new THREE.ConeGeometry(0.018, 0.042, 5);
  return merge([
    at(head, 0, 0.77, 0),
    at(jaw, 0, 0.71, 0.014),
    at(nose, 0, 0.756, 0.095, Math.PI * 0.52),
  ]);
}

/** A few clumps over the crown — enough to read as hair in silhouette. */
function buildHair() {
  const parts = [];
  const clumps = [
    [0, 0.862, -0.01, 0.100], [-0.05, 0.842, 0.05, 0.074],
    [0.052, 0.845, 0.045, 0.072], [-0.01, 0.828, -0.075, 0.080],
  ];
  for (const [x, y, z, r] of clumps) {
    const blob = new THREE.SphereGeometry(r, 6, 4);
    blob.scale(1.1, 0.66, 1.05);
    parts.push(at(blob, x, y, z));
  }
  return merge(parts);
}

/** The lit parts: the visor across the eyes and the belt buckle. */
function buildGlow() {
  // A band wrapped round the front of the head, not a flat card — a
  // visor that curves is the one piece that says "this is Vexo's world"
  // from thirty metres away, and open-ended it costs sixteen triangles.
  const visor = new THREE.CylinderGeometry(0.107, 0.107, 0.05, 8, 1, true, -0.95, 1.9);
  const buckle = new THREE.SphereGeometry(0.03, 6, 4);
  buckle.scale(1.5, 1, 0.45);
  return merge([
    at(visor, 0, 0.775, 0),
    at(buckle, 0, 0.08, 0.132),
  ]);
}

/** One arm, hung from a shoulder ball at the origin. */
function buildArm() {
  // The ball at the pivot is not decoration: without it the arm ends in
  // a flat capsule cap under the pauldron and there is daylight between
  // the two, so the arms look pinned on rather than socketed in.
  const ball = new THREE.SphereGeometry(0.062, 6, 4);
  const upper = new THREE.CapsuleGeometry(0.052, 0.22, 2, 6);
  const elbow = new THREE.SphereGeometry(0.05, 6, 4);
  const fore = new THREE.CapsuleGeometry(0.046, 0.20, 2, 6);
  return merge([
    ball,
    at(upper, 0, -0.15, 0),
    at(elbow, 0, -0.29, 0),
    at(fore, 0, -0.40, 0),
    at(slab(0.10, 0.11, 0.08), 0, -0.52, 0.01),   // gauntlet
  ]);
}

/** One leg with a boot, hung from a hip at the origin. */
function buildLeg() {
  const thigh = new THREE.CapsuleGeometry(0.082, 0.30, 2, 6);
  const knee = new THREE.SphereGeometry(0.076, 6, 4);
  const shin = new THREE.CapsuleGeometry(0.068, 0.28, 2, 6);
  return merge([
    at(thigh, 0, -0.21, 0),
    at(knee, 0, -0.42, 0),
    at(shin, 0, -0.62, 0),
    at(slab(0.11, 0.10, 0.24), 0, -0.845, 0.035),  // boot
  ]);
}

/**
 * @param {object[]} people  { name, lines: string[] } — who lives here
 * @param {object} opts      town centre, radius, ground level, and a way
 *                           to ask whether a spot is out on the street
 */
/**
 * @param {object[]} [anchors]  places people gather, each { x, z, spread,
 *        share }. Without them everybody heads for the middle, and in a
 *        city 3.6 km across that means the rest of it is deserted.
 */
export function createTownsfolk({
  town, count, isStreet, seed = 1, anchors = [], lift = 0,
}) {
  const rnd = mulberry32(seed);

  // One material per look. The colour comes from the instance, except
  // the visor, which is the same green on everybody.
  const cloth = new THREE.MeshStandardMaterial({ roughness: 0.78, metalness: 0.15 });
  const armourMat = new THREE.MeshStandardMaterial({
    color: ARMOUR, roughness: 0.45, metalness: 0.55,
  });
  const skinMat = new THREE.MeshStandardMaterial({ roughness: 0.85 });
  const hairMat = new THREE.MeshStandardMaterial({ roughness: 0.95 });
  const glowMat = new THREE.MeshStandardMaterial({
    color: GLOW, emissive: GLOW, emissiveIntensity: 1.1, roughness: 0.4,
  });

  // The five pieces that move independently. Suit, plates, skin, hair
  // and glow all ride the body's matrix, so they are computed once.
  const kit = [
    { key: 'suit', geom: buildSuit(), mat: cloth, tint: 1 },
    { key: 'plates', geom: buildPlates(), mat: armourMat, tint: -1 },
    { key: 'skin', geom: buildSkin(), mat: skinMat, tint: 0 },
    { key: 'hair', geom: buildHair(), mat: hairMat, tint: 0 },
    { key: 'glow', geom: buildGlow(), mat: glowMat, tint: -1 },
    { key: 'armL', geom: buildArm(), mat: cloth, tint: 0.82 },
    { key: 'armR', geom: buildArm(), mat: cloth, tint: 0.82 },
    { key: 'legL', geom: buildLeg(), mat: cloth, tint: 0.7 },
    { key: 'legR', geom: buildLeg(), mat: cloth, tint: 0.7 },
  ];
  const slots = Math.min(count, DRAW_MOST);
  const mesh = {};
  // Everybody's colours, by person rather than by slot: which slot a
  // person is drawn in changes as people come and go from view.
  const colours = {};
  const group = new THREE.Group();
  for (const piece of kit) {
    const m = new THREE.InstancedMesh(piece.geom, piece.mat, slots);
    m.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    m.frustumCulled = false;
    m.castShadow = true;
    m.count = 0;
    if (piece.tint >= 0) {
      m.instanceColor = new THREE.InstancedBufferAttribute(new Float32Array(slots * 3), 3);
      m.instanceColor.setUsage(THREE.DynamicDrawUsage);
      colours[piece.key] = new Float32Array(count * 3);
    }
    mesh[piece.key] = m;
    group.add(m);
  }
  const tinted = kit.filter((piece) => piece.tint >= 0).map((piece) => piece.key);
  // Who is being drawn in each slot, so the colours are only rewritten
  // when somebody new takes one over.
  const slotOwner = new Int32Array(slots).fill(-1);

  const _c = new THREE.Color();
  const _m = new THREE.Matrix4();
  const _q = new THREE.Quaternion();
  // YXZ, not the default XYZ. With XYZ the heading is applied INSIDE the
  // swing, so a leg swings about the world's X axis whatever way its
  // owner is facing: walk east and your legs splay out sideways instead
  // of stepping. This one letter is most of the rest of what looked
  // wrong about the walk.
  const _e = new THREE.Euler(0, 0, 0, 'YXZ');
  const _v = new THREE.Vector3();
  const _s = new THREE.Vector3(1, 1, 1);

  /**
   * Somewhere on a street, near where this person spends their time.
   *
   * Everybody used to head for the middle of the town, which looked
   * right standing in the square and was wrong everywhere else: Marco
   * landed at the shipport — which is where anybody lands — and there
   * was not one person within a hundred and fifty metres of him. People
   * belong where people have reason to be, and a city has more than one
   * such place.
   */
  function pickSpot(home) {
    const spread = home ? home.spread : town.radius * 0.7;
    const cx = home ? home.x : town.x;
    const cz = home ? home.z : town.z;
    for (let i = 0; i < 40; i++) {
      const a = rnd() * Math.PI * 2;
      const r = Math.sqrt(rnd()) * spread;
      const x = cx + Math.cos(a) * r;
      const z = cz + Math.sin(a) * r;
      if (isStreet(x, z)) return { x, z };
    }
    // Nowhere on a street after forty tries: stand just off the middle
    // rather than in it. The middle of a capital is the foot of its
    // tower, and somebody who could not find a street ended up inside it.
    for (let i = 0; i < 24; i++) {
      const a = (i / 24) * Math.PI * 2;
      const x = town.x + Math.cos(a) * town.radius * 0.12;
      const z = town.z + Math.sin(a) * town.radius * 0.12;
      if (isStreet(x, z)) return { x, z };
    }
    return { x: town.x + town.radius * 0.2, z: town.z };
  }

  /**
   * Somewhere to walk to that can be walked to in a straight line.
   *
   * They have no route-finding and do not need any — but a straight line
   * from here to a spot on the far side of a block goes through the
   * block, and somebody was always caught standing in a wall. Sampling
   * the way there and rejecting anything that crosses a building keeps
   * them on the streets, which is where the streets came from.
   */
  function pickWalk(fromX, fromZ, home) {
    for (let attempt = 0; attempt < 8; attempt++) {
      const spot = pickSpot(home);
      // Every five metres, however long the walk. Capping the number of
      // samples at fourteen meant a two-hundred-metre walk was checked
      // every fourteen metres, and a building fifteen metres wide fits
      // between two of those: people kept turning up inside them.
      const steps = Math.max(2, Math.min(90,
        Math.ceil(Math.hypot(spot.x - fromX, spot.z - fromZ) / 5)));
      let clear = true;
      for (let k = 1; k <= steps && clear; k++) {
        const t = k / steps;
        clear = isStreet(fromX + (spot.x - fromX) * t, fromZ + (spot.z - fromZ) * t);
      }
      if (clear) return spot;
    }
    // Nowhere reachable: stay put rather than walk through a wall.
    return { x: fromX, z: fromZ };
  }

  // Who gathers where. The shares are cumulative, so a roll of the dice
  // lands each person in one of them.
  const places = anchors.length ? anchors : [{
    x: town.x, z: town.z, spread: town.radius * 0.7, share: 1,
  }];
  let running = 0;
  const ladder = places.map((p) => {
    running += p.share;
    return { ...p, upTo: running };
  });

  const folk = [];
  for (let i = 0; i < count; i++) {
    const roll = rnd() * running;
    const home = ladder.find((p) => roll <= p.upTo) ?? ladder[ladder.length - 1];
    const at2 = pickSpot(home);
    const suit = SUITS[Math.floor(rnd() * SUITS.length)];
    const skinTone = SKINS[Math.floor(rnd() * SKINS.length)];
    const hair = HAIRS[Math.floor(rnd() * HAIRS.length)];
    folk.push({
      x: at2.x,
      z: at2.z,
      heading: rnd() * Math.PI * 2,
      to: { x: at2.x, z: at2.z },
      phase: rnd() * Math.PI * 2,
      wait: rnd() * 2.2,
      home,
      suit,
      // Kept under the old name as well, because a person's clothes are
      // still their clothes and other code asks for them by it.
      shirt: suit,
      skinTone,
      hair,
      talking: false,
    });
    for (const piece of kit) {
      if (piece.tint < 0) continue;
      if (piece.key === 'skin') _c.setHex(skinTone);
      else if (piece.key === 'hair') _c.setHex(hair);
      else _c.setHex(suit).multiplyScalar(piece.tint);
      // A tint above one brightens without washing out to white.
      colours[piece.key][i * 3] = Math.min(1, _c.r);
      colours[piece.key][i * 3 + 1] = Math.min(1, _c.g);
      colours[piece.key][i * 3 + 2] = Math.min(1, _c.b);
    }
  }

  /** Put one person's nine pieces into drawing slot `i`. */
  function place(i, p, groundY) {
    const swing = Math.sin(p.phase) * (p.moving ? SWING : 0.03);
    // A straight leg is shortest when it hangs and shorter still when it
    // is swung, so the hips DROP as the legs spread. That keeps both
    // feet on the ground through the step, and the rise and fall it
    // gives the body is the bob you see in a real walk — twice a stride,
    // not once.
    const hipY = groundY + HIP - HIP * (1 - Math.cos(swing));
    const h = p.heading;
    const right = Math.cos(h);
    const back = -Math.sin(h);

    // The body, and the four pieces that ride with it. Leaning very
    // slightly into the walk is the difference between walking and being
    // dragged along.
    _e.set(p.moving ? 0.05 : 0, h, 0);
    _q.setFromEuler(_e);
    _v.set(p.x, hipY, p.z);
    _m.compose(_v, _q, _s);
    for (const key of ['suit', 'plates', 'skin', 'hair', 'glow']) mesh[key].setMatrixAt(i, _m);

    // Arms swing against the legs, and less far, the way they do.
    for (const [key, sign] of [['armL', -1], ['armR', 1]]) {
      _e.set(swing * sign * 0.7, h, 0);
      _q.setFromEuler(_e);
      _v.set(p.x + right * 0.195 * sign, hipY + 0.55, p.z + back * 0.195 * sign);
      _m.compose(_v, _q, _s);
      mesh[key].setMatrixAt(i, _m);
    }

    for (const [key, sign] of [['legL', 1], ['legR', -1]]) {
      _e.set(swing * sign, h, 0);
      _q.setFromEuler(_e);
      _v.set(p.x + right * 0.085 * sign, hipY, p.z + back * 0.085 * sign);
      _m.compose(_v, _q, _s);
      mesh[key].setMatrixAt(i, _m);
    }
  }

  return {
    group,
    folk,
    mesh,
    material: { skin: skinMat, cloth, armour: armourMat, hair: hairMat, glow: glowMat },

    /**
     * @param {number} dt
     * @param {(x: number, z: number) => number} groundAt
     */
    update(dt, groundAt, viewX = town.x, viewZ = town.z) {
      // Everybody walks, whether or not they are being drawn: a street
      // you have not looked at yet should not be full of people standing
      // exactly where you left them.
      const near = [];
      for (let i = 0; i < folk.length; i++) {
        const p = folk[i];
        if (p.talking || p.stays) {
          // Shopkeepers stay at their own doors.
          p.moving = false;
        } else if (p.wait > 0) {
          p.wait -= dt;
          p.moving = false;
        } else {
          const dx = p.to.x - p.x;
          const dz = p.to.z - p.z;
          const d = Math.hypot(dx, dz);
          if (d < 1.2) {
            p.to = pickWalk(p.x, p.z, p.home);
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
        const d2 = (p.x - viewX) ** 2 + (p.z - viewZ) ** 2;
        if (d2 < DRAW_RANGE * DRAW_RANGE) near.push({ i, d2 });
      }
      // More in sight than there are slots: the nearest get them, since
      // the ones you lose are the ones furthest off.
      if (near.length > slots) {
        near.sort((a, b) => a.d2 - b.d2);
        near.length = slots;
      }

      for (let slot = 0; slot < near.length; slot++) {
        const i = near[slot].i;
        const p = folk[i];
        // `lift` is how far the town's paving stands above the ground it
        // was laid on. Without it everybody walks about shin-deep in
        // their own streets.
        place(slot, p, groundAt(p.x, p.z) + lift);
        if (slotOwner[slot] !== i) {
          slotOwner[slot] = i;
          for (const key of tinted) {
            const dst = mesh[key].instanceColor;
            dst.array[slot * 3] = colours[key][i * 3];
            dst.array[slot * 3 + 1] = colours[key][i * 3 + 1];
            dst.array[slot * 3 + 2] = colours[key][i * 3 + 2];
            dst.needsUpdate = true;
          }
        }
      }
      for (const piece of kit) {
        mesh[piece.key].count = near.length;
        mesh[piece.key].instanceMatrix.needsUpdate = true;
      }
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

export { HEIGHT as TOWNSFOLK_HEIGHT };
