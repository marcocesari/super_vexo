// Vexo himself, built out of primitives.
//
// From the concept art (`vexo_character.jpg`): a young pilot in dark
// gunmetal powered armour, lit all over by thin green circuit traces.
// Green visor across the eyes with a headset and mic boom, messy brown
// hair above it — messy, in separated clumps, not a smooth cap — heavy
// plates on shoulders, chest, thighs and shins,
// and cyan light rings in the boot soles. A sidearm holstered on his
// left thigh with his hand hanging beside it, magazine pouches on his
// right, and a lit green panel on the outside of each gauntlet.
//
// No model files — he's Three.js primitives in a Group, like everything
// else here. What keeps that from looking like a stack of bricks:
//
//   1. ROUNDED PLATES. Every piece of armour is an extruded rounded
//      rectangle with a bevelled edge, not a box. Real armour has a
//      radius on every edge, and the highlight running along that curve
//      is most of what makes a surface read as metal.
//   2. A LATHED TORSO. The chest is a turned profile — hips, waist,
//      ribs, shoulders — rather than a scaled cylinder, so the body
//      tapers instead of standing there like a bin.
//   3. CAPSULE LIMBS with ball joints at shoulder, elbow and knee, so
//      arms and legs socket into the body instead of butting against it.
//   4. A CIRCUIT TEXTURE used as an emissive map. Modelling those
//      traces as geometry would cost hundreds of slivers; painted onto
//      a canvas they cost one texture and wrap the body the way they
//      do in the art.
//
// Scale is metres, like the rest of the surface world: he stands 1.8 m
// tall with his feet at y = 0, so he can be dropped into Castel
// Maggiore at its own one-unit-per-metre scale.
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { createPistol } from './pistol.js';

export const VEXO_HEIGHT = 1.8;

const ARMOUR_DARK = 0x3f454f;   // gunmetal plate
const ARMOUR_MID = 0x59616e;    // lighter panels catching the light
const UNDERSUIT = 0x23272e;     // the black bodysuit between plates
const CIRCUIT = 0x53ff9d;       // the green glow running through it
const VISOR = 0x7dffb0;
const BOOT_GLOW = 0x49c8ff;     // cyan, the one accent that isn't green
const SKIN = 0xd8a684;
const HAIR = 0x3a2418;

/**
 * The circuit trace texture: black with glowing green lines, used as an
 * emissive map. Black stays dark, the lines light up.
 */
function makeCircuitTexture() {
  const S = 256;
  const canvas = document.createElement('canvas');
  canvas.width = S;
  canvas.height = S;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = '#000000';
  ctx.fillRect(0, 0, S, S);

  // Traces run mostly vertically — down the chest, along the limbs —
  // with right-angle jogs, like the panels in the concept art.
  ctx.lineCap = 'square';
  ctx.strokeStyle = '#5effa6';
  for (let i = 0; i < 14; i++) {
    let x = Math.random() * S;
    let y = Math.random() * S;
    ctx.lineWidth = Math.random() < 0.3 ? 2 : 1;
    ctx.beginPath();
    ctx.moveTo(x, y);
    const legs = 2 + Math.floor(Math.random() * 4);
    for (let l = 0; l < legs; l++) {
      if (l % 2 === 0) y += (Math.random() - 0.35) * 90;
      else x += (Math.random() - 0.5) * 70;
      ctx.lineTo(x, y);
    }
    ctx.stroke();
    // A node at the end of a run — the little lit squares on the suit.
    ctx.fillStyle = '#9dffcb';
    ctx.fillRect(x - 2, y - 2, 4, 4);
    ctx.fillStyle = '#5effa6';
  }

  const tex = new THREE.CanvasTexture(canvas);
  tex.wrapS = THREE.RepeatWrapping;
  tex.wrapT = THREE.RepeatWrapping;
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

/** A rounded rectangle, as a Shape, centred on the origin. */
function roundedRect(w, h, r) {
  const shape = new THREE.Shape();
  const x = -w / 2;
  const y = -h / 2;
  const radius = Math.max(0.001, Math.min(r, w / 2 - 0.001, h / 2 - 0.001));
  shape.moveTo(x + radius, y);
  shape.lineTo(x + w - radius, y);
  shape.absarc(x + w - radius, y + radius, radius, -Math.PI / 2, 0);
  shape.lineTo(x + w, y + h - radius);
  shape.absarc(x + w - radius, y + h - radius, radius, 0, Math.PI / 2);
  shape.lineTo(x + radius, y + h);
  shape.absarc(x + radius, y + h - radius, radius, Math.PI / 2, Math.PI);
  shape.lineTo(x, y + radius);
  shape.absarc(x + radius, y + radius, radius, Math.PI, Math.PI * 1.5);
  return shape;
}

/**
 * An armour plate: a rounded rectangle extruded with a bevelled edge, so
 * every silhouette line is a curve catching light rather than a corner.
 * This replaced plain boxes everywhere on him, and it is the single
 * biggest reason he stopped looking like a toy.
 */
function plate(w, h, d, material, x = 0, y = 0, z = 0, cornerR = 0.02) {
  // The bevel adds its thickness to BOTH faces, so the extrusion depth
  // gives that back — otherwise every plate comes out fatter than asked.
  const bevel = Math.min(0.012, d * 0.35);
  const geom = new THREE.ExtrudeGeometry(roundedRect(w, h, cornerR), {
    depth: Math.max(0.001, d - bevel * 2),
    bevelEnabled: true,
    bevelThickness: bevel,
    bevelSize: bevel,
    bevelSegments: 2,
    curveSegments: 4,
  });
  geom.center();
  const mesh = new THREE.Mesh(geom, material);
  mesh.position.set(x, y, z);
  return mesh;
}

/** A limb segment: a tapered cylinder with rounded ends. */
function limb(topR, bottomR, length, material, segments = 16) {
  const group = new THREE.Group();
  group.add(new THREE.Mesh(
    new THREE.CylinderGeometry(topR, bottomR, length, segments),
    material,
  ));
  // Caps, so a limb doesn't end in a flat disc where it meets a joint.
  const top = new THREE.Mesh(new THREE.SphereGeometry(topR, segments, 8), material);
  top.position.y = length / 2;
  top.scale.y = 0.7;
  group.add(top);
  const bottom = new THREE.Mesh(new THREE.SphereGeometry(bottomR, segments, 8), material);
  bottom.position.y = -length / 2;
  bottom.scale.y = 0.7;
  group.add(bottom);
  return group;
}

/** A ball joint — shoulder, elbow, knee. */
function joint(radius, material, y = 0) {
  const mesh = new THREE.Mesh(new THREE.SphereGeometry(radius, 16, 12), material);
  mesh.position.y = y;
  return mesh;
}

/**
 * The torso, turned on a lathe from a profile: hips, waist, ribs, chest,
 * then in to the shoulders. Squashed on Z afterwards, because a chest is
 * an ellipse seen from above, not a circle.
 */
function torsoGeometry() {
  const profile = [
    [0.001, 0.00], [0.150, 0.00], [0.168, 0.04],
    [0.163, 0.12],                                // waist, pulled in
    [0.178, 0.20], [0.200, 0.30], [0.212, 0.38],  // ribs opening out
    [0.208, 0.46],                                // chest
    [0.170, 0.52], [0.090, 0.55], [0.001, 0.555], // shoulders, closing
  ].map(([r, y]) => new THREE.Vector2(r, y));
  const geom = new THREE.LatheGeometry(profile, 28);
  geom.scale(1.06, 1, 0.84);
  return geom;
}

/**
 * Build Vexo.
 *
 * @param {object} [opts]
 * @param {THREE.Texture} [opts.environment]  a pre-filtered environment
 *        for his armour to reflect. Metal has almost no diffuse colour
 *        of its own, so without one he renders as a silhouette with
 *        green lines on it — see the note on metalness below. The
 *        turntable gives the whole scene one; in the game he carries
 *        his own, so nothing else in the world changes.
 * @param {boolean} [opts.suitLight]  give him the little green point
 *        light inside the suit. On in the turntable, OFF in the game:
 *        how many lights a scene holds is baked into every shader as a
 *        #define, so a light that appears when he steps out of the ship
 *        recompiles every material in the world mid-play. Same trap
 *        `surface.js` documents for the daylight.
 * @returns {{ group: THREE.Group, update: (dt: number) => void,
 *            height: number, setGait: (mode: string, speed?: number) => void }}
 */
export function createVexo({ suitLight: wantSuitLight = true, environment = null } = {}) {
  const group = new THREE.Group();
  // Everything hangs off this rather than off `group` directly, so a
  // walk cycle can bob the whole figure a couple of centimetres without
  // touching the position the walk controller is writing into `group`.
  const body = new THREE.Group();
  group.add(body);
  const circuits = makeCircuitTexture();

  // NOTE ON METALNESS: a physically-metallic surface reflects its
  // surroundings and emits almost no diffuse light of its own, so with
  // nothing to reflect it renders nearly black — an early pass at this
  // looked like a man made of green light with a void for a body. These
  // values assume the scene has an environment map (the character
  // viewer builds one); without one, drop metalness to about 0.35.
  const armour = new THREE.MeshStandardMaterial({
    color: ARMOUR_DARK,
    metalness: 0.62,
    roughness: 0.38,
    emissive: CIRCUIT,
    emissiveMap: circuits,
    emissiveIntensity: 0.34,
  });
  const armourLight = new THREE.MeshStandardMaterial({
    color: ARMOUR_MID,
    metalness: 0.7,
    roughness: 0.3,
    emissive: CIRCUIT,
    emissiveMap: circuits,
    emissiveIntensity: 0.22,
  });
  const suit = new THREE.MeshStandardMaterial({
    color: UNDERSUIT,
    metalness: 0.25,
    roughness: 0.72,
    emissive: CIRCUIT,
    emissiveMap: circuits,
    emissiveIntensity: 0.3,
  });
  const skinMat = new THREE.MeshStandardMaterial({
    color: SKIN, metalness: 0, roughness: 0.72,
  });
  const hairMat = new THREE.MeshStandardMaterial({
    color: HAIR, metalness: 0, roughness: 0.9,
  });
  const visorMat = new THREE.MeshStandardMaterial({
    color: VISOR,
    emissive: VISOR,
    emissiveIntensity: 1.6,
    transparent: true,
    opacity: 0.58,
    metalness: 0.4,
    roughness: 0.08,
  });
  const glowMat = new THREE.MeshBasicMaterial({ color: BOOT_GLOW });
  // The lit rectangle on the outside of the forearm in the concept art —
  // a small screen set into the gauntlet. Bright enough to read as its
  // own light source without the bloom the game doesn't have.
  const panelMat = new THREE.MeshStandardMaterial({
    color: 0x0d2b1c,
    emissive: CIRCUIT,
    emissiveIntensity: 1.15,
    metalness: 0.2,
    roughness: 0.35,
  });

  // Per-material rather than `scene.environment`: this way he reflects
  // something without the town and the ship quietly changing appearance
  // around him. Set before anything is rendered, so no shader is
  // recompiled for it.
  if (environment) {
    for (const m of [armour, armourLight, suit, skinMat, hairMat, visorMat, panelMat]) {
      m.envMap = environment;
      m.envMapIntensity = 0.55;
    }
  }

  // --- Torso ----------------------------------------------------------------
  const torso = new THREE.Mesh(torsoGeometry(), suit);
  torso.position.y = 0.97;
  body.add(torso);

  // Chest armour: a shell curved around the ribs. Two flat plates stuck
  // on the front read as a bib, however they're angled — a section of a
  // sphere follows the body instead, which is what a breastplate does.
  // Sphere `phi` starts at -X and sweeps toward +Z, so a shell facing
  // FORWARD is centred on phi = pi/2 — not on pi, which is where the
  // first attempt put it (armour neatly covering his right flank and
  // nothing else).
  const breastplate = new THREE.Mesh(
    new THREE.SphereGeometry(0.19, 28, 18, Math.PI * 0.22, Math.PI * 0.56, Math.PI * 0.16, Math.PI * 0.5),
    armour,
  );
  breastplate.scale.set(1.12, 1.16, 0.92);
  breastplate.position.set(0, 1.33, 0.006);
  body.add(breastplate);
  // Sternum ridge splitting the two halves.
  const sternum = plate(0.028, 0.19, 0.03, armourLight, 0, 1.35, 0.155, 0.012);
  body.add(sternum);
  // Collar band across the top of the chest.
  const collar = new THREE.Mesh(
    new THREE.TorusGeometry(0.125, 0.026, 10, 24, Math.PI * 1.15),
    armour,
  );
  collar.rotation.set(Math.PI / 2, 0, Math.PI * 0.92);
  collar.position.set(0, 1.465, 0.01);
  collar.scale.z = 0.8;
  body.add(collar);

  // Back plate, so he isn't bare from behind.
  const backPlate = plate(0.25, 0.3, 0.05, armour, 0, 1.3, -0.11, 0.07);
  backPlate.rotation.x = -0.06;
  body.add(backPlate);

  // Belt: a proper ring, with a lit buckle.
  const belt = new THREE.Mesh(new THREE.TorusGeometry(0.153, 0.034, 12, 32), armourLight);
  belt.rotation.x = Math.PI / 2;
  belt.position.y = 0.99;
  belt.scale.set(1.06, 0.86, 1);
  body.add(belt);
  const buckle = new THREE.Mesh(new THREE.SphereGeometry(0.042, 16, 12), glowMat);
  buckle.scale.set(1.5, 1, 0.45);
  buckle.position.set(0, 0.99, 0.132);
  body.add(buckle);

  // Hips.
  const hips = new THREE.Mesh(new THREE.SphereGeometry(0.152, 20, 14), armour);
  hips.scale.set(1.04, 0.58, 0.82);
  hips.position.y = 0.905;
  body.add(hips);

  // --- Head -----------------------------------------------------------------
  const neck = limb(0.052, 0.058, 0.08, suit, 12);
  neck.position.y = 1.55;
  body.add(neck);

  const head = new THREE.Mesh(new THREE.SphereGeometry(0.105, 24, 20), skinMat);
  head.scale.set(0.95, 1.14, 1.0);
  head.position.y = 1.66;
  body.add(head);

  // Jaw and chin: a smaller sphere blended under the skull, which is
  // what gives a face a wedge shape instead of a ball.
  const jaw = new THREE.Mesh(new THREE.SphereGeometry(0.07, 20, 16), skinMat);
  jaw.scale.set(0.94, 0.82, 1.04);
  jaw.position.set(0, 1.6, 0.014);
  body.add(jaw);

  // Nose — small, but without it the profile is a balloon.
  const nose = new THREE.Mesh(new THREE.ConeGeometry(0.018, 0.042, 8), skinMat);
  nose.rotation.x = Math.PI * 0.52;
  nose.position.set(0, 1.646, 0.095);
  body.add(nose);

  // Ears, tucked under the headset.
  for (const side of [-1, 1]) {
    const ear = new THREE.Mesh(new THREE.SphereGeometry(0.022, 10, 8), skinMat);
    ear.scale.set(0.5, 1, 0.8);
    ear.position.set(side * 0.096, 1.655, 0.005);
    body.add(ear);
  }

  // Hair. Three layers, and all of it ONE mesh.
  //
  // Layers, because each does a job the others can't. BLOBS give the
  // mass. CLUMPS — flattened lozenges laid nearly tangential to the
  // skull — break the mass into strands that overlap and sweep. SPIKES
  // are three-sided pyramids at the ends of the clumps, and they are
  // what makes it frizzy: a hard triangular tip catches the light on
  // one facet and goes dark on the next, so the outline reads as hair
  // ends rather than as a surface.
  //
  // Two wrong turns before this shape, both the same mistake, and both
  // worth keeping written down. Aiming spikes straight out from the
  // middle of the skull gives a stegosaurus. Making them thin and long
  // instead gives a sea urchin. Anything that STANDS OFF a smooth ball
  // reads as a spine whatever its proportions — hair doesn't stick out
  // of a head, it lies along it and separates into points at the ends.
  // Which is why every spike below grows out of a clump, pointing the
  // way that clump already sweeps.
  //
  // One mesh, because none of it moves independently of the skull. Forty
  // pieces of hair merged into a single geometry is one draw call, where
  // the twelve smooth blobs this replaced were twelve.
  const hairParts = [];
  const _hairM = new THREE.Matrix4();
  const _hairQ = new THREE.Quaternion();
  const _hairP = new THREE.Vector3();
  const _hairS = new THREE.Vector3();
  const _hairDir = new THREE.Vector3();
  const UP_Y = new THREE.Vector3(0, 1, 0);
  const FORWARD_Z = new THREE.Vector3(0, 0, 1);

  /** Place a geometry and keep it for the merge. */
  function addHair(geom, pos, quat, scale) {
    geom.applyMatrix4(_hairM.compose(pos, quat, scale));
    hairParts.push(geom);
  }

  // --- The mass -----------------------------------------------------------
  const hairSeeds = [
    [0, 1.732, -0.012, 0.088], [-0.06, 1.722, 0.028, 0.064],
    [0.06, 1.726, 0.024, 0.066], [0, 1.71, -0.07, 0.074],
    [-0.082, 1.7, -0.024, 0.06], [0.084, 1.703, -0.02, 0.058],
    [0.026, 1.757, -0.005, 0.048], [-0.032, 1.752, -0.036, 0.046],
    [-0.056, 1.692, 0.056, 0.044], [0.058, 1.694, 0.053, 0.042],
  ];
  for (const [i, [x, y, z, r]] of hairSeeds.entries()) {
    addHair(
      new THREE.SphereGeometry(r, 10, 8),
      _hairP.set(x, y, z),
      _hairQ.setFromEuler(new THREE.Euler((i % 3) * 0.18, i * 0.7, ((i % 5) - 2) * 0.12)),
      _hairS.set(1.12, 0.72, 1.1),
    );
  }

  // --- Strands, and a triangular tip on the end of each --------------------
  // [x, y, z, size, long, dirX, dirY, dirZ]  — dir is where the clump POINTS
  const CLUMPS = [
    // Fringe: sweeping down and across the forehead, over the visor.
    [-0.05, 1.736, 0.055, 0.048, 1.5, 0.35, -0.6, 0.72],
    [-0.008, 1.744, 0.062, 0.05, 1.55, 0.3, -0.45, 0.84],
    [0.038, 1.74, 0.056, 0.046, 1.45, 0.55, -0.5, 0.67],
    [0.074, 1.728, 0.03, 0.04, 1.35, 0.85, -0.35, 0.4],
    // Crown: laid back over the top, with two standing up out of it.
    [-0.03, 1.764, 0.03, 0.048, 1.5, -0.25, 0.25, 0.94],
    [0.028, 1.768, 0.012, 0.05, 1.6, 0.42, 0.62, 0.66],
    [-0.02, 1.766, -0.03, 0.048, 1.5, -0.3, 0.6, -0.74],
    [0.042, 1.756, -0.036, 0.044, 1.45, 0.5, 0.15, -0.85],
    // Sides: lying over the ears, sweeping back.
    [-0.084, 1.72, 0.014, 0.044, 1.5, -0.5, -0.1, 0.86],
    [-0.086, 1.712, -0.038, 0.042, 1.45, -0.45, -0.05, -0.89],
    [0.086, 1.722, 0.01, 0.046, 1.5, 0.5, -0.05, 0.86],
    [0.088, 1.714, -0.036, 0.042, 1.45, 0.45, -0.1, -0.89],
    // Back: sticking out where it was slept on.
    [-0.032, 1.72, -0.078, 0.046, 1.55, -0.2, 0.05, -0.98],
    [0.03, 1.724, -0.08, 0.048, 1.6, 0.2, 0.15, -0.97],
    [0.0, 1.7, -0.082, 0.042, 1.4, 0.0, -0.35, -0.94],
  ];
  for (const [i, [x, y, z, size, long, dx, dy, dz]] of CLUMPS.entries()) {
    _hairDir.set(dx, dy, dz).normalize();
    addHair(
      new THREE.SphereGeometry(size, 10, 8),
      _hairP.set(x, y, z),
      _hairQ.setFromUnitVectors(FORWARD_Z, _hairDir),
      _hairS.set(0.62, 0.44, long),
    );

    // The tip: a three-sided pyramid carrying on where the clump ends,
    // squashed flat in the same plane so it reads as the end of a
    // strand and not as a horn stuck on it. Alternate lengths so the
    // outline is ragged rather than evenly serrated.
    // Overlapping the clump, not perched on the end of it: at the full
    // reach the tips float free and read as thorns stuck into the hair.
    const reach = size * long * 0.66;
    const len = (i % 3 === 0 ? 0.052 : (i % 3 === 1 ? 0.04 : 0.032));
    const tip = new THREE.ConeGeometry(size * 0.62, len, 3);
    tip.translate(0, len * 0.42, 0);          // grow from the base, not the middle
    addHair(
      tip,
      _hairP.set(x, y, z).addScaledVector(_hairDir, reach),
      _hairQ.setFromUnitVectors(UP_Y, _hairDir),
      _hairS.set(0.85, 1, 0.5),
    );
  }

  // --- Loose frizz ----------------------------------------------------------
  // Odd hairs that belong to no clump, so the silhouette isn't a tidy
  // row of matching points. Small, and pointing every which way.
  // [x, y, z, length, dirX, dirY, dirZ]
  const FRIZZ = [
    [-0.07, 1.75, 0.0, 0.042, -0.5, 0.75, 0.44],
    [0.012, 1.782, -0.01, 0.046, 0.15, 0.95, -0.28],
    [0.066, 1.756, 0.02, 0.038, 0.7, 0.66, 0.28],
    [-0.05, 1.73, 0.072, 0.034, -0.1, 0.3, 0.95],
    [0.05, 1.736, -0.07, 0.04, 0.35, 0.45, -0.82],
    [-0.088, 1.73, -0.01, 0.036, -0.85, 0.42, 0.3],
    [0.03, 1.706, -0.094, 0.032, 0.2, -0.1, -0.97],
    [-0.026, 1.776, 0.03, 0.04, -0.2, 0.85, 0.49],
  ];
  for (const [x, y, z, len, dx, dy, dz] of FRIZZ) {
    _hairDir.set(dx, dy, dz).normalize();
    const wisp = new THREE.ConeGeometry(0.014, len, 3);
    wisp.translate(0, len * 0.4, 0);
    addHair(
      wisp,
      _hairP.set(x, y, z),
      _hairQ.setFromUnitVectors(UP_Y, _hairDir),
      _hairS.set(0.9, 1, 0.55),
    );
  }

  // Bake the merged geometry relative to the SKULL and give the mesh a
  // position up there, rather than leaving it at the origin with
  // absolute coordinates inside it.
  //
  // This is not tidiness. The reparenting further down sorts parts onto
  // the spine and the neck BY THEIR POSITION, so a hair mesh sitting at
  // the origin was classified as belonging to the chest — and since the
  // vertices were absolute, every degree the chest twisted swung the
  // whole head of hair around the waist, seventy centimetres below it.
  // At a walk that slid it far enough across his skull to show scalp.
  // Hair has to be welded to the head, and this is what welds it.
  const HAIR_PIVOT_Y = 1.706;
  const hairGeometry = mergeGeometries(hairParts);
  hairGeometry.translate(0, -HAIR_PIVOT_Y, 0);
  const hair = new THREE.Mesh(hairGeometry, hairMat);
  hair.position.y = HAIR_PIVOT_Y;
  body.add(hair);

  // Visor: a shallow band wrapped across the eyes. Built as a section of
  // a cylinder — a torus ring kept sliding round the skull and reading
  // as a headband instead of eyewear.
  // Cylinder `theta` starts at +Z, so a band across the FACE is centred
  // on zero. Starting it at 0.72*pi wrapped it round the back of his
  // head, where it did nobody any good.
  const visor = new THREE.Mesh(
    new THREE.CylinderGeometry(0.109, 0.109, 0.04, 28, 1, true, -Math.PI * 0.28, Math.PI * 0.56),
    visorMat,
  );
  visor.position.set(0, 1.668, 0.004);
  visor.scale.set(1, 1, 0.94);
  body.add(visor);
  // The frame sits just INSIDE the lens and is a little taller, so it
  // shows as a rim above and below rather than covering the green
  // entirely — which is what it did when it was the outer layer.
  const visorFrame = new THREE.Mesh(
    new THREE.CylinderGeometry(0.104, 0.104, 0.052, 28, 1, true, -Math.PI * 0.29, Math.PI * 0.58),
    armourLight,
  );
  visorFrame.position.set(0, 1.668, 0.004);
  visorFrame.scale.set(1, 1, 0.94);
  body.add(visorFrame);
  for (const side of [-1, 1]) {
    const temple = new THREE.Mesh(new THREE.CylinderGeometry(0.005, 0.005, 0.085, 8), armourLight);
    temple.rotation.set(Math.PI / 2, 0, 0);
    temple.position.set(side * 0.098, 1.668, -0.028);
    body.add(temple);
  }

  // Headset: ear cups with a rounded rim, plus a mic boom.
  for (const side of [-1, 1]) {
    const cup = new THREE.Mesh(new THREE.SphereGeometry(0.036, 16, 12), armourLight);
    cup.scale.set(0.55, 1, 0.9);
    cup.position.set(side * 0.107, 1.658, 0);
    body.add(cup);
  }
  const boom = new THREE.Mesh(new THREE.CylinderGeometry(0.005, 0.005, 0.11, 8), armourLight);
  boom.position.set(-0.078, 1.618, 0.062);
  boom.rotation.set(-0.5, 0, 0.7);
  body.add(boom);
  const mic = new THREE.Mesh(new THREE.SphereGeometry(0.012, 10, 8), glowMat);
  mic.position.set(-0.048, 1.588, 0.097);
  body.add(mic);

  // See the note where the hands are built.
  const HAND_SCALE = 1.25;

  // Hands, kept so they can be posed. A hand at rest and a hand closed
  // round a pistol grip are different shapes, and the difference is
  // most of what tells you he is holding something.
  const hands = [];
  const handGroups = [];

  // --- Arms -----------------------------------------------------------------
  // Two groups per arm, not one: the shoulder swings the whole arm and
  // the elbow swings everything below it. A single group can only make
  // him semaphore — climbing a ladder needs the forearm to fold.
  const arms = [];
  for (const side of [-1, 1]) {
    const arm = new THREE.Group();
    arm.position.set(side * 0.215, 1.44, 0);
    body.add(arm);

    // Shoulder ball, then the pauldron over it — a dome, not a box.
    arm.add(joint(0.072, suit));
    const pauldron = new THREE.Mesh(
      new THREE.SphereGeometry(0.108, 20, 14, 0, Math.PI * 2, 0, Math.PI * 0.58),
      armour,
    );
    pauldron.scale.set(1.04, 1.05, 1.08);
    pauldron.position.y = 0.012;
    pauldron.rotation.z = side * 0.22;
    arm.add(pauldron);
    // A second, smaller lip below it: layered plates, as in the art.
    const lip = new THREE.Mesh(
      new THREE.SphereGeometry(0.088, 18, 10, 0, Math.PI * 2, Math.PI * 0.34, Math.PI * 0.2),
      armourLight,
    );
    lip.position.y = -0.032;
    lip.rotation.z = side * 0.22;
    arm.add(lip);

    const upper = limb(0.058, 0.05, 0.24, suit);
    upper.position.y = -0.17;
    arm.add(upper);
    const band = new THREE.Mesh(new THREE.TorusGeometry(0.055, 0.015, 10, 20), armourLight);
    band.rotation.x = Math.PI / 2;
    band.position.y = -0.12;
    arm.add(band);

    arm.add(joint(0.052, armour, -0.3));   // elbow

    // Below the elbow. Every Y below is the old figure plus 0.3, because
    // they used to hang off the shoulder and now they hang off here.
    const forearm = new THREE.Group();
    forearm.position.y = -0.3;
    arm.add(forearm);
    arms.push({ shoulder: arm, forearm, side });

    // Forearm and gauntlet: the heaviest armour on the arm.
    const fore = limb(0.052, 0.045, 0.22, suit);
    fore.position.y = -0.12;
    forearm.add(fore);
    const gauntlet = new THREE.Mesh(
      new THREE.CylinderGeometry(0.062, 0.05, 0.17, 16),
      armour,
    );
    gauntlet.position.y = -0.14;
    gauntlet.scale.z = 0.92;
    forearm.add(gauntlet);
    const cuff = plate(0.1, 0.055, 0.09, armourLight, 0, -0.052, 0.006, 0.026);
    forearm.add(cuff);

    // Hand. In the art the fingers are long and slim, slightly parted,
    // and curled the way a hand hangs when nobody is using it — index
    // straightest, little finger most curled, each one shorter than the
    // last. Four identical capsules in a row, which is what this was,
    // reads as a mitten.
    //
    // The whole hand hangs off a wrist group so it can be TURNED. Arms
    // at rest hang with the palms toward the thighs and the thumbs
    // forward; built flat on the forearm the palms face front, which is
    // the pose of a man about to be searched. Rotating the wrist carries
    // the curl round with it, so the fingers still close toward the
    // palm — now toward his leg, as they should.
    const hand = new THREE.Group();
    hand.position.set(0, -0.28, 0.004);
    hand.rotation.y = -side * 1.15;
    // His hands were built at about two thirds of life size: 44 mm
    // fingers on a 1.8 m man, where a real one has 80 to 100. It never
    // showed while they hung empty — and then he picked up a pistol
    // built to a real one's dimensions and could not close a fist round
    // it. A closed fist that small makes a tunnel 14 mm deep and the
    // grip is 32 mm, so no amount of moving the gun about was ever
    // going to look like a hold.
    hand.scale.setScalar(HAND_SCALE);
    forearm.add(hand);
    handGroups.push(hand);

    const palm = plate(0.056, 0.078, 0.032, suit, 0, 0.004, 0, 0.018);
    palm.rotation.x = 0.06;
    hand.add(palm);
    // Knuckles: the ridge the fingers hang off, so they don't sprout
    // straight out of a flat plate.
    const knuckles = new THREE.Mesh(new THREE.CapsuleGeometry(0.011, 0.045, 3, 8), suit);
    knuckles.rotation.z = Math.PI / 2;
    knuckles.position.set(0, -0.032, 0.003);
    hand.add(knuckles);

    // index → little: longer to shorter, straighter to more curled.
    // Two curls per finger: `open` is a hand hanging at rest, `grip` is
    // the same hand closed round a pistol. Index closes least of the
    // four, because it is not on the grip at all — it is on the trigger.
    const FINGERS = [
      { len: 0.044, r: 0.0078, open: 0.30, grip: 1.15, splay: 0.05 },
      { len: 0.047, r: 0.0080, open: 0.36, grip: 1.75, splay: 0.02 },
      { len: 0.043, r: 0.0075, open: 0.44, grip: 1.85, splay: -0.02 },
      { len: 0.035, r: 0.0068, open: 0.52, grip: 1.9, splay: -0.06 },
    ];
    // TWO BONES a finger, not one. A rigid finger cannot wrap anything:
    // the best it can do is lie tangent to the grip and stick out past
    // it, which is precisely what "the hand still isn't on it" looked
    // like. With a second joint the near bone crosses the front of the
    // grip and the far one turns back toward the palm, which is what a
    // hand closed on something actually does.
    const fingerParts = [];
    for (const [f, spec] of FINGERS.entries()) {
      const near = new THREE.Mesh(
        new THREE.CapsuleGeometry(spec.r, spec.len * 0.55, 3, 8), suit,
      );
      const far = new THREE.Mesh(
        new THREE.CapsuleGeometry(spec.r * 0.86, spec.len * 0.42, 3, 8), suit,
      );
      fingerParts.push({ near, far, spec, index: f, side });
      hand.add(near);
      hand.add(far);
    }
    // Thumb: out on the leading edge of the palm and swung across it —
    // which, once the wrist is turned, is the front of the hand.
    const thumb = new THREE.Mesh(new THREE.CapsuleGeometry(0.0092, 0.032, 3, 8), suit);
    hand.add(thumb);
    hands.push({ group: hand, fingers: fingerParts, thumb, side });

    // The lit panel on the outside of the gauntlet.
    const panel = plate(0.034, 0.052, 0.008, panelMat, side * 0.055, -0.145, 0.004, 0.008);
    panel.rotation.y = side * Math.PI / 2;
    forearm.add(panel);

    // Arms hang with a slight outward flare, as in the art.
    arm.rotation.z = side * 0.11;
    arm.rotation.x = 0.04;
  }

  // --- Legs -----------------------------------------------------------------
  // Every length below hangs off a hip at y = 0.8 and is budgeted so the
  // soles land on y = 0. Get it wrong and he stands shin-deep in the
  // floor — which is exactly what the first turntable render showed.
  // The pistol, and where it hangs when it isn't in his hand. Named
  // `holsterMount` and not `holster`: the leg loop below already has a
  // `holster`, which is the shell it sits in, and the shadowing turned
  // an assignment here into a write to that const.
  let pistol = null;
  let holsterMount = null;
  let armed = false;
  // Armed and AIMING is arm-out, level, pointed at something. Armed and
  // not aiming is the gun in his hand by his side — which is how you
  // want him standing in a menu, where an outstretched arm reads as a
  // man about to shoot the furniture.
  let aim = true;

  const legs = [];
  for (const side of [-1, 1]) {
    const leg = new THREE.Group();
    leg.position.set(side * 0.098, 0.8, 0);
    body.add(leg);

    leg.add(joint(0.082, suit));

    const thigh = limb(0.085, 0.07, 0.34, suit);
    thigh.position.y = -0.2;
    leg.add(thigh);
    // Thigh plate, curved round the front of the leg.
    const thighPlate = plate(0.125, 0.25, 0.05, armour, 0, -0.19, 0.045, 0.05);
    thighPlate.rotation.x = -0.05;
    leg.add(thighPlate);
    // Thigh kit, as in the art: a sidearm holstered on his left leg with
    // his hand hanging beside it, and magazine pouches on his right.
    // Facing +Z, his left is +X.
    if (side > 0) {
      // Holster: a shell round the barrel, strapped to the thigh.
      const holster = plate(0.052, 0.115, 0.062, armour, side * 0.086, -0.235, 0.004, 0.016);
      holster.rotation.set(0.12, side * 0.3, 0);
      leg.add(holster);
      const strap = plate(0.06, 0.022, 0.07, armourLight, side * 0.086, -0.19, 0.004, 0.008);
      strap.rotation.set(0, side * 0.3, 0);
      leg.add(strap);

      // The pistol itself, sitting in it: butt up and canted back, the
      // way it has to be to draw. Only the top half shows.
      //
      // The model is `world/pistol.js`, built to a real compact pistol's
      // proportions with its parts under their real names. It is one
      // gun: `setArmed` reparents THIS group into his hand rather than
      // building a second one, which is also how you avoid the holster
      // still looking full while he is shooting.
      const gun = createPistol({ metal: armour, polymer: suit, glow: panelMat });
      pistol = gun;
      holsterMount = leg;
      stowPistol();
      leg.add(gun.group);
    } else {
      // Magazine pouches: two slabs, as in the art.
      for (const [i, y] of [-0.185, -0.245].entries()) {
        const mag = plate(0.042, 0.052, 0.05, armourLight, side * 0.086, y, 0.004, 0.01);
        mag.rotation.y = side * 0.32;
        leg.add(mag);
        const lip = plate(0.046, 0.01, 0.054, armour, side * 0.086, y + 0.03, 0.004, 0.005);
        lip.rotation.y = side * 0.32;
        leg.add(lip);
        void i;
      }
    }

    leg.add(joint(0.068, suit, -0.4));     // knee
    const kneeCap = new THREE.Mesh(
      new THREE.SphereGeometry(0.075, 18, 12, 0, Math.PI * 2, 0, Math.PI * 0.55),
      armour,
    );
    kneeCap.rotation.x = Math.PI * 0.42;
    kneeCap.position.set(0, -0.405, 0.028);
    leg.add(kneeCap);

    // Below the knee, on its own group so it can fold. As with the
    // elbow, every Y here is the old figure plus 0.4.
    const shinGroup = new THREE.Group();
    shinGroup.position.y = -0.4;
    leg.add(shinGroup);

    // And an ankle below that, carrying the whole boot. Without one the
    // foot is a block welded to the shin: it can't meet the ground heel
    // first, can't roll flat, and can't push off — which is most of what
    // makes a walk read as walking rather than as sliding.
    const ankleGroup = new THREE.Group();
    ankleGroup.position.y = -0.3;
    shinGroup.add(ankleGroup);
    legs.push({ hip: leg, shin: shinGroup, ankle: ankleGroup, side });

    const shin = limb(0.068, 0.055, 0.32, suit);
    shin.position.y = -0.18;
    shinGroup.add(shin);
    // Shin guard: a curved shell, open at the back.
    const guard = new THREE.Mesh(
      new THREE.CylinderGeometry(0.072, 0.06, 0.27, 16, 1, true, -1.1, 2.2),
      armour,
    );
    guard.position.set(0, -0.175, 0.008);
    guard.scale.z = 1.1;
    shinGroup.add(guard);

    // Boot: a shaped shoe rather than a brick — heel, instep and a toe
    // that rounds off, with the lit sole ring between them.
    const boot = new THREE.Mesh(new THREE.SphereGeometry(0.075, 18, 14), armour);
    boot.scale.set(0.95, 0.72, 1.5);
    boot.position.set(0, -0.035, 0.03);
    ankleGroup.add(boot);
    const instep = plate(0.105, 0.07, 0.11, armour, 0, -0.012, 0.072, 0.03);
    instep.rotation.x = 0.22;
    ankleGroup.add(instep);
    const toe = new THREE.Mesh(new THREE.SphereGeometry(0.055, 16, 12), armourLight);
    toe.scale.set(1, 0.62, 1.15);
    toe.position.set(0, -0.062, 0.132);
    ankleGroup.add(toe);
    const heel = new THREE.Mesh(new THREE.SphereGeometry(0.05, 14, 10), armourLight);
    heel.scale.set(1, 0.7, 0.9);
    heel.position.set(0, -0.057, -0.045);
    ankleGroup.add(heel);
    const sole = new THREE.Mesh(new THREE.TorusGeometry(0.042, 0.011, 8, 18), glowMat);
    sole.rotation.x = Math.PI / 2;
    sole.position.set(0, -0.086, 0.025);
    ankleGroup.add(sole);
  }

  // A soft green light inside the suit, so the glow spills onto whatever
  // he's standing near instead of looking painted on. Optional — see the
  // note on the parameter.
  let suitLight = null;
  if (wantSuitLight) {
    suitLight = new THREE.PointLight(CIRCUIT, 0.45, 2.2, 2);
    suitLight.position.set(0, 1.2, 0.12);
    body.add(suitLight);
  }

  /**
   * Pose one hand between hanging open (0) and closed round a grip (1).
   *
   * From the photographs Marco took of a hand on a pistol: three fingers
   * wrap the front of the grip and close TIGHT, the index goes forward
   * onto the trigger rather than round the grip, and the thumb lies
   * along the far side of the frame pointing at the target. The web
   * between thumb and index sits high against the back of the grip,
   * which is why the gun is mounted where it is below.
   */
  function poseHand(hand, grip) {
    for (const { near, far, spec, index, side } of hand.fingers) {
      // The knuckle each finger swings from.
      const kx = (index - 1.5) * 0.0165 * side;
      const ky = -0.037;
      const kz = 0.003;
      const bendA = spec.open + (spec.grip - spec.open) * grip;
      // The second joint follows the first and then some — a closed
      // hand folds harder at the middle knuckle than at the base.
      const bendB = bendA + (0.35 + 1.15 * grip);
      const lenA = spec.len * 0.55;
      const lenB = spec.len * 0.42;

      // Near bone: hung from the knuckle, so the bend swings the far end
      // rather than sliding the whole bone through the palm.
      near.position.set(
        kx,
        ky - Math.cos(bendA) * lenA * 0.5,
        kz + Math.sin(bendA) * lenA * 0.5,
      );
      near.rotation.set(bendA, 0, spec.splay * side * (1 - grip * 0.6));

      // Far bone: hung from the end of the near one, folded further.
      const jointY = ky - Math.cos(bendA) * lenA;
      const jointZ = kz + Math.sin(bendA) * lenA;
      far.position.set(
        kx,
        jointY - Math.cos(bendB) * lenB * 0.5,
        jointZ + Math.sin(bendB) * lenB * 0.5,
      );
      far.rotation.set(bendB, 0, spec.splay * side * (1 - grip * 0.6));
    }
    const t = hand.thumb;
    const side = hand.side;
    // Rest: out to the side of the palm. Gripping: laid forward along
    // the frame, which is what stops the hand reading as a fist with a
    // gun stuck through it.
    t.position.set(
      side * (0.028 - 0.006 * grip),
      -0.016 - 0.012 * grip,
      0.014 + 0.022 * grip,
    );
    t.rotation.set(0.5 + grip * 0.85, 0, -side * (0.7 - grip * 0.45));
  }

  /**
   * Holstered: muzzle down along the thigh, butt up and canted back so
   * a hand could actually take it. The model points +Z, so "down the
   * leg" is a quarter turn about X.
   */
  function stowPistol() {
    // Muzzle down the thigh, butt up and back where a hand can reach it,
    // and tucked in against the leg rather than hovering beside it.
    pistol.group.position.set(0.078, -0.175, 0.014);
    pistol.group.rotation.set(Math.PI / 2 + 0.3, 0.34, 0.06);
  }

  /**
   * Draw the pistol, or put it away. The gun group is REPARENTED into
   * the hand on the same side as the holster — a cross-draw looks
   * ridiculous on a figure whose arms don't cross the body.
   */
  function setArmed(on, aiming = true) {
    aim = aiming;
    if (on === armed || !pistol) return;
    armed = on;
    const gunHand = hands.find((h) => h.side > 0);
    if (on) {
      // Into the HAND, not the forearm. The pistol's origin is the top
      // of its grip — the point the web of the hand closes on — so it
      // belongs at the palm, with the slide riding above the knuckles
      // and the barrel carrying on down the line of the forearm. Hung
      // off the forearm instead, as it was, the gun floats out past the
      // fist and nothing is holding it.
      // The gun goes in the HAND, and the WRIST turns to hold it.
      //
      // This is the correction Marco's photographs were about, and it is
      // not a nudge. A hand hanging by a thigh has its fingers pointing
      // DOWN THE ARM; a hand on a pistol has them wrapped ACROSS the
      // grip, perpendicular to the barrel, with the palm pressed to the
      // back of the grip and the thumb along the frame. Hung off the
      // forearm as it was, the fingers closed on the slide and the grip
      // dangled past them with nothing holding it.
      //
      // So both are set from a basis rather than by guessing at Euler
      // angles. In the raised arm the forearm's axes come out as
      // -Y forward, +Z up, +X across; from there:
      //
      //   the fingers (hand -Y) must point ACROSS      → hand +Y ↦ +X
      //   the palm (hand +Z) must face the muzzle      → hand +Z ↦ -Y
      //   which leaves                                    hand +X ↦ -Z
      //
      // and then the gun sits in that hand as a quarter turn about Z:
      // barrel along the palm's normal, grip down across the fingers.
      gunHand.group.quaternion.setFromRotationMatrix(
        _basis.makeBasis(GRIP_X, GRIP_Y, GRIP_Z),
      );
      gunHand.group.add(pistol.group);
      // The hand is scaled up; the gun is not. Undo the parent's scale
      // so the pistol stays the size of a pistol.
      pistol.group.scale.setScalar(1 / HAND_SCALE);
      // Sat so the grip runs THROUGH THE TUNNEL the curled fingers make
      // with the palm, rather than resting on top of it. In hand space
      // the grip runs along +X, so its axis stays at one (y, z) — and
      // that point has to be the middle of the curl, not the middle of
      // the palm. Measured: the knuckles are at y -0.037, the fingertips
      // come up to z 0.030, so the tunnel's centre is about (-0.030,
      // 0.018). Two centimetres higher, which is where this was, and the
      // fingers close underneath the gun and hold nothing.
      // In the hand's own (scaled) units, so the numbers are smaller
      // than the metres they end up as.
      pistol.group.position.set(-0.030, -0.024, 0.019);
      pistol.group.rotation.set(0, 0, Math.PI / 2);
      poseHand(gunHand, 1);
    } else {
      holsterMount.add(pistol.group);
      pistol.group.scale.setScalar(1);
      stowPistol();
      poseHand(gunHand, 0);
    }
  }

  // The wrist, as a basis rather than as Euler angles — see setArmed.
  const GRIP_X = new THREE.Vector3(0, 0, -1);
  const GRIP_Y = new THREE.Vector3(1, 0, 0);
  const GRIP_Z = new THREE.Vector3(0, -1, 0);
  const _basis = new THREE.Matrix4();

  /** A round went off: muzzle flash. */
  function firePistol() {
    if (pistol) pistol.fire();
  }

  // --- A spine and a neck -----------------------------------------------------
  // Up to here everything hangs off one group, which means the chest,
  // the head and the arms are welded to the hips: whatever the pelvis
  // does, they do. That is most of what makes a walk look rigid. People
  // walk with the shoulders turning against the hips, the spine leaning
  // into the direction of travel, and the head held level while all of
  // that goes on underneath it.
  //
  // So: reparent. Everything above the waist moves under `upper`, which
  // pivots at the waist, and everything above the neck moves again under
  // `headPivot`, which pivots at the neck. Done here rather than at
  // build time because the parts are placed in body coordinates all the
  // way through, and rewriting sixty positions to be relative to a joint
  // is how you end up with a jaw two centimetres from a face.
  const SPINE_Y = 1.02;
  const NECK_Y = 1.53;

  const upper = new THREE.Group();
  upper.position.y = SPINE_Y;
  const headPivot = new THREE.Group();
  headPivot.position.y = NECK_Y - SPINE_Y;

  const staysWithHips = new Set([hips, belt, buckle, ...legs.map((l) => l.hip)]);
  if (suitLight) staysWithHips.add(suitLight);
  for (const part of [...body.children]) {
    if (staysWithHips.has(part)) continue;
    part.position.y -= SPINE_Y;
    upper.add(part);
  }
  for (const part of [...upper.children]) {
    if (part.position.y + SPINE_Y >= NECK_Y) {
      part.position.y -= NECK_Y - SPINE_Y;
      headPivot.add(part);
    }
  }
  upper.add(headPivot);
  body.add(upper);

  // The torso mesh's rest height, now that it is measured from the
  // waist rather than from the floor.
  const torsoRestY = torso.position.y;
  const headRestY = headPivot.position.y;

  // --- Motion -----------------------------------------------------------------
  // Three gaits, all posed by hand from one phase angle. There is no
  // skeleton and no clips: every joint below is a group rotation, which
  // is all the figure has and all it needs.
  //
  // Sign conventions, worked out once so the poses below read clearly.
  // A limb hangs down its own -Y. Rotating a group by +x about X sends
  // that -Y toward -Z, i.e. BACKWARD. So:
  //   hip.rotation.x  < 0  → leg swings forward
  //   shin.rotation.x > 0  → knee folds (heel toward the backside), the
  //                          only direction a knee actually goes
  //   forearm.rotation.x < 0 → elbow folds (hand toward the front). The
  //                          OPPOSITE sign to the knee, because an elbow
  //                          bends the other way from a knee. It was
  //                          positive until Marco spotted the forearms
  //                          jutting out behind the elbows.
  //   shoulder.rotation.x ≈ -2.4 → hand up and forward, at a rung
  let t = 0;
  let gait = 'idle';
  let gaitSpeed = 0;
  let phase = 0;
  // 0 = walking, 1 = sprinting. Eased, so picking up the pace shades
  // between the two gaits instead of snapping between them.
  let run = 0;

  // Metres covered per full two-step cycle. Drives cadence from speed,
  // so he takes faster steps when he runs instead of sliding along at a
  // walk — the giveaway that a walk cycle is on a fixed timer.
  const ARM_REST_X = 0.04;
  // How far behind the legs the upper body runs, as a fraction of the
  // cycle. Small — 5% is about 50ms at walking pace — but it is the
  // difference between a body and a mannequin on a turntable.
  const UPPER_LAG = 0.05;
  const ELBOW_LAG = 0.04;

  function poseIdle() {
    const breath = Math.sin(t * 1.6);
    torso.position.y = torsoRestY + breath * 0.005;
    torso.scale.x = 1 + breath * 0.006;
    body.position.set(0, 0, 0);
    body.rotation.z = 0;
    // The chest lifts a little as he breathes; the head stays where it
    // is, which is what makes breathing read as breathing.
    upper.rotation.set(-breath * 0.006, 0, 0);
    headPivot.rotation.set(breath * 0.006, 0, 0);
    headPivot.position.y = headRestY;
    for (const leg of legs) {
      leg.hip.rotation.x = 0;
      leg.hip.rotation.y = leg.side * 0.07;   // toes out, standing too
      leg.hip.position.z = 0;
      leg.shin.rotation.x = 0;
      leg.ankle.rotation.x = 0;
    }
    for (const [i, arm] of arms.entries()) {
      arm.shoulder.rotation.x = ARM_REST_X + Math.sin(t * 1.6 + i) * 0.012;
      arm.shoulder.rotation.z = arm.side * 0.11;
      arm.forearm.rotation.x = 0;
    }
  }

  // --- The walk cycle ---------------------------------------------------------
  // Keyframed from how people actually walk, rather than from a sine
  // wave. Sources are in the journal; the shape that matters:
  //
  //   * The cycle is 60% STANCE (foot down) and 40% SWING. It is not
  //     symmetric, and a sine wave is, which is why sine-wave walks
  //     read as marching.
  //   * The knee flexes TWICE per cycle: ~15 degrees just after the
  //     heel lands, taking the impact, and ~60 degrees through mid-swing
  //     to get the foot past the ground. One flexion looks like a stilt.
  //   * The ankle rolls: neutral at heel strike, plantarflexed as the
  //     foot slaps flat, dorsiflexed as the body passes over it, then
  //     20 degrees of plantarflexion to push off.
  //   * The arms swing opposite the legs, and the pelvis and shoulders
  //     counter-rotate against each other.
  //
  // Percentages below are percent of the cycle from heel strike, and the
  // values are DEGREES, so they can be read against the tables.
  const HIP_CURVE = [    // + is the thigh forward (flexion)
    [0, 28], [12, 22], [30, 6], [50, -12], [62, -8], [75, 16], [88, 28], [100, 28],
  ];
  const KNEE_CURVE = [   // + is the heel drawn toward the backside
    [0, 4], [12, 16], [30, 6], [45, 14], [60, 40], [73, 60], [87, 26], [100, 4],
  ];
  const ANKLE_CURVE = [  // + is toes UP (dorsiflexion)
    [0, 0], [8, -8], [30, 5], [45, 10], [58, -20], [68, -4], [80, 2], [100, 0],
  ];

  // --- And the run ------------------------------------------------------------
  // A sprint is NOT a fast walk, which is what speeding this cycle up
  // gives you. Running is a different gait with different numbers:
  //
  //   * Stance shrinks to about 40% of the cycle and there is no double
  //     support at all — for part of every cycle BOTH feet are off the
  //     ground. A walk always has one foot down.
  //   * The knee folds two to three times as far, to about 110 degrees,
  //     bringing the heel up toward the backside so the leg can swing
  //     through without dragging.
  //   * The hip swings nearly twice as far, and the foot lands on the
  //     FOREFOOT rather than the heel, so the ankle starts the cycle
  //     plantarflexed instead of neutral.
  //
  // These are blended against the walk tables by speed, so there is no
  // switch — he shades from one gait into the other the way a person
  // does when they pick up the pace.
  const RUN_HIP_CURVE = [
    [0, 42], [10, 28], [28, 2], [42, -20], [52, -12], [68, 24], [85, 48], [100, 42],
  ];
  const RUN_KNEE_CURVE = [
    [0, 22], [12, 40], [28, 26], [42, 34], [55, 74], [70, 112], [86, 52], [100, 22],
  ];
  const RUN_ANKLE_CURVE = [
    [0, -6], [8, -14], [26, 6], [40, 14], [50, -26], [64, -10], [82, -4], [100, -6],
  ];

  // Where the blend runs from and to, in metres per second, and how far
  // a stride stretches over that range. A walking stride is about 1.5 m
  // and a sprinting one closer to 2.7 m; without that, cadence at
  // sprint speed comes out at a comical patter.
  const RUN_FROM = 2.8;
  const RUN_TO = 5.4;
  const WALK_STRIDE = 1.5;
  const RUN_STRIDE = 2.7;

  /**
   * Read a keyframe table at `t` (0..1 through the cycle). Smoothstep
   * between keys so the joins don't show as ticks in the motion.
   */
  function clamp01(v) { return v < 0 ? 0 : (v > 1 ? 1 : v); }

  /** Read the walk table and the run table and blend by `run`. */
  function mixCurve(walkTable, runTable, t) {
    const a = curveAt(walkTable, t);
    return run <= 0.001 ? a : a + (curveAt(runTable, t) - a) * run;
  }

  function curveAt(table, t) {
    const p = ((t % 1) + 1) % 1 * 100;
    for (let i = 1; i < table.length; i++) {
      const [p0, v0] = table[i - 1];
      const [p1, v1] = table[i];
      if (p <= p1) {
        const u = (p - p0) / (p1 - p0);
        return v0 + (v1 - v0) * (u * u * (3 - 2 * u));
      }
    }
    return table[table.length - 1][1];
  }

  const DEG = Math.PI / 180;

  // The leg, as lengths rather than as meshes: hip height, thigh, shin,
  // and the two corners of the sole in ankle space (heel behind, toe in
  // front). These mirror the positions the geometry above is built at —
  // if a limb length changes up there, change it here too, or he walks
  // through the pavement.
  const HIP_Y = 0.8;
  const THIGH = 0.4;
  const SHIN = 0.3;
  const SOLE_POINTS = [[-0.045, -0.107], [0.132, -0.096]];   // [z, y]

  /**
   * The lowest point of either sole for the pose the legs are currently
   * in, measured in body space. Two-link forward kinematics — cheaper
   * than asking Three.js to update world matrices mid-pose, and it
   * cannot disagree with itself between frames.
   */
  function lowestSole() {
    let lowest = Infinity;
    for (const leg of legs) {
      const a = leg.hip.rotation.x;
      const b = a + leg.shin.rotation.x;
      const c = b + leg.ankle.rotation.x;
      const ankleY = HIP_Y - THIGH * Math.cos(a) - SHIN * Math.cos(b);
      for (const [z, y] of SOLE_POINTS) {
        // Rotate the sole corner by the ankle's total angle.
        const py = ankleY + y * Math.cos(c) - z * Math.sin(c);
        if (py < lowest) lowest = py;
      }
    }
    return lowest;
  }

  function poseWalk(dt) {
    // Below a slow walk the amplitude stops shrinking, or the last step
    // before standing still turns into a shuffle.
    const speed = Math.max(gaitSpeed, 0.4);
    // How far into "running" he is, 0 at a walk and 1 at a sprint.
    // Everything below leans on this, so the three gaits are one gait
    // read at three points rather than three animations with seams.
    run += (clamp01((speed - RUN_FROM) / (RUN_TO - RUN_FROM)) - run)
      * (1 - Math.pow(2, -dt / 0.18));
    const stride = WALK_STRIDE + (RUN_STRIDE - WALK_STRIDE) * run;
    phase += (speed / stride) * Math.PI * 2 * dt;
    const cycle = phase / (Math.PI * 2);
    // Scale the whole pose with speed: a stroll is a small version of a
    // stride, and a run is a big one.
    const amp = Math.min(1.35, 0.55 + speed / 4);

    for (const [i, leg] of legs.entries()) {
      // The two legs are half a cycle apart — that is the whole of what
      // makes it a walk rather than a hop.
      const t = cycle + i * 0.5;
      const hip = mixCurve(HIP_CURVE, RUN_HIP_CURVE, t) * DEG * amp;
      const knee = mixCurve(KNEE_CURVE, RUN_KNEE_CURVE, t) * DEG * amp;
      const ankle = mixCurve(ANKLE_CURVE, RUN_ANKLE_CURVE, t) * DEG * amp;
      leg.hip.rotation.x = -hip;      // negative rotation swings it forward
      // Toes out. Nobody walks with their feet parallel: the natural
      // stance turns each foot out five to ten degrees, and feet aimed
      // dead ahead is a thing only soldiers and robots do.
      leg.hip.rotation.y = leg.side * 0.09;
      leg.shin.rotation.x = knee;
      leg.ankle.rotation.x = -ankle;  // dorsiflexion is a negative rotation
      // Pelvic rotation: the swinging hip travels forward ahead of the
      // stance hip. A couple of centimetres, but it is what stops the
      // hips reading as a fixed bar between the legs.
      leg.hip.position.z = Math.sin((t % 1) * Math.PI * 2) * 0.022 * amp;
    }

    // --- The upper body ------------------------------------------------------
    // Everything above the waist runs LATE. Real bodies are not rigid
    // assemblies moving on one clock: the hips lead, the spine follows,
    // the shoulders follow the spine and the hands trail the arms. That
    // lag is what animators call overlap, and its absence is most of
    // what reads as "rigid" — every joint arriving on the same frame is
    // the signature of a machine.
    const lagged = cycle - UPPER_LAG;

    for (const [i, arm] of arms.entries()) {
      // Opposite the leg on the same side, and about half as far: arms
      // swing roughly 20 degrees forward and 12 back.
      const tArm = lagged + i * 0.5;
      // Arms swing further and the elbows fold harder the faster he
      // goes: a walk is 0.5 of the leg swing with a loose elbow, a
      // sprint is 0.8 with the forearms pumping at about a right angle.
      const swing = mixCurve(HIP_CURVE, RUN_HIP_CURVE, tArm)
        * DEG * amp * (0.5 + run * 0.3);
      arm.shoulder.rotation.x = ARM_REST_X + swing + Math.sin(t * 0.71 + i) * 0.012;
      // The arm also swings slightly ACROSS him as it comes forward and
      // drifts out as it goes back, so the hands travel in shallow arcs
      // rather than on rails.
      arm.shoulder.rotation.z = arm.side * (0.11 - Math.max(0, -swing) * 0.28);
      // Elbows lag the shoulder again — the forearm is still folding
      // while the upper arm has started back. Negative: the hand folds
      // toward the FRONT of him. An elbow is not a knee.
      const foreSwing = mixCurve(HIP_CURVE, RUN_HIP_CURVE, tArm - ELBOW_LAG)
        * DEG * amp * 0.5;
      arm.forearm.rotation.x = -(0.22 + run * 0.85 + Math.max(0, -foreSwing) * 1.3);
    }

    // The body rides on top of all that — and its height is NOT authored.
    // Hand-animating a bob sinks his boots into the road at the bottom of
    // it: the walk controller plants his origin on the ground, so any dip
    // takes the feet with it. Instead, work out where the soles actually
    // ended up for the pose above and hang the body off the lower one.
    // The rise and fall falls out on its own — highest over the stance
    // leg, lowest at double support — and the foot that is down stays
    // exactly on the ground.
    // Running has a FLIGHT PHASE — twice a cycle both feet leave the
    // ground, which planting the lower sole on the road would forbid
    // outright. So the plant sets the floor and a bounce lifts him off
    // it, scaled by how much of a run this is. It can only ever raise
    // him, so the foot that is down still can't sink through the road.
    const drop = lowestSole();
    const flight = Math.max(0, Math.sin(phase * 2)) * 0.055 * run;
    body.position.y = -drop + flight;
    // Weight shifts sideways onto whichever foot is down. Once per
    // cycle, unlike the bob.
    body.position.x = Math.sin(phase) * 0.022 * amp;
    // Pelvic drop: the hip on the swinging side falls a few degrees,
    // because nothing is holding it up.
    body.rotation.z = -Math.sin(phase) * 0.045 * amp;

    // Shoulders counter-rotate against the pelvis, late.
    const twist = Math.sin((lagged % 1) * Math.PI * 2);
    upper.rotation.y = twist * 0.13 * amp;
    // And they roll the other way to the hips, which is what keeps the
    // head over the feet instead of swinging out past them.
    upper.rotation.z = -body.rotation.z * 0.55;
    // He leans into it, more the faster he goes.
    // He leans into it, and much further into a sprint — a runner's
    // chest is well ahead of his hips, which is most of what tells you
    // at a glance that he is running rather than walking quickly.
    upper.rotation.x = -(0.06 + run * 0.28) - (0.5 - 0.5 * Math.cos(phase * 2)) * 0.02;
    // He is still breathing while he walks. Faster than at rest, and
    // on its OWN clock — nothing about breath is locked to footfalls.
    const breath = Math.sin(t * 2.3);
    torso.position.y = torsoRestY + breath * 0.004;
    torso.scale.x = 1 + breath * 0.005;

    // The head is the last thing to move and the least. It holds its
    // line down the street while the chest turns underneath it, stays
    // level as he leans, and takes only a fraction of the bob — which
    // is why people's heads glide and their hips don't.
    //
    // The drift on the end is deliberate and is not part of the walk:
    // a slow wander on a period that shares no factor with the stride,
    // so the animation never repeats exactly. A cycle that comes back
    // to precisely the same pose every 1.6 metres is the last thing
    // that gives a walk away as a loop.
    const drift = Math.sin(t * 0.83) * 0.035 + Math.sin(t * 0.37) * 0.02;
    headPivot.rotation.y = -upper.rotation.y * 0.75 + drift;
    headPivot.rotation.x = -upper.rotation.x * 0.8 + Math.sin(t * 0.61) * 0.015;
    headPivot.rotation.z = -upper.rotation.z * 0.6;
    headPivot.position.y = headRestY + drop * 0.35;
  }

  function poseClimb(dt) {
    // A fixed cadence: the ladder controller moves him down the rungs,
    // this only decides which hand and foot are reaching.
    phase += dt * 4.2;
    for (const [i, leg] of legs.entries()) {
      const p = phase + i * Math.PI;
      leg.hip.rotation.x = -0.5 - Math.sin(p) * 0.4;
      leg.hip.rotation.y = 0;                 // square to the rungs
      leg.hip.position.z = 0;
      leg.shin.rotation.x = 0.95 + Math.sin(p) * 0.45;
      // Toes up: he is standing on rungs, not on the flat.
      leg.ankle.rotation.x = -0.25;
    }
    for (const [i, arm] of arms.entries()) {
      // Hands overhead on the rungs, alternating opposite the feet.
      // The shoulder was raised almost vertical here to compensate for
      // an elbow that folded the wrong way and shoved the forearm
      // forward-and-down. With the elbow folding properly, the arm
      // reaches up and forward and the FOREARM finishes the job.
      const p = phase + i * Math.PI + Math.PI;
      arm.shoulder.rotation.x = -2.45 + Math.sin(p) * 0.28;
      arm.shoulder.rotation.z = arm.side * 0.16;
      arm.forearm.rotation.x = -(0.5 - Math.max(0, Math.sin(p)) * 0.3);
    }
    body.position.set(0, 0, 0);
    body.rotation.z = 0;
    // Leaning into the ladder, looking up at the next rung.
    upper.rotation.set(-0.12, 0, 0);
    headPivot.rotation.set(0.2, 0, 0);
    headPivot.position.y = headRestY;
    torso.position.y = torsoRestY;
  }

  function update(dt) {
    t += dt;
    // The circuits pulse in every gait — it is the suit's own light,
    // not something he does.
    const pulse = 0.85 + 0.25 * Math.sin(t * 2.1);
    armour.emissiveIntensity = 0.34 * pulse;
    armourLight.emissiveIntensity = 0.22 * pulse;
    suit.emissiveIntensity = 0.3 * pulse;
    if (suitLight) suitLight.intensity = 0.45 * pulse;

    if (pistol) pistol.update(dt);
    if (gait === 'walk') poseWalk(dt);
    else if (gait === 'climb') poseClimb(dt);
    else poseIdle();

    // Aiming overrides whatever the gait did with that arm: pistol up,
    // pointed where he is facing, and held still while everything else
    // carries on underneath it.
    if (armed) {
      // The wrist stays where setArmed put it — the grip basis — while
      // the arm swings underneath.
      const gunArm = arms.find((a) => a.side > 0);
      gunArm.shoulder.rotation.x = aim ? -1.42 : -0.28;
      gunArm.shoulder.rotation.z = gunArm.side * (aim ? 0.06 : 0.13);
      gunArm.forearm.rotation.x = aim ? -0.16 : -0.55;
      // The other arm tucks in rather than swinging about.
      if (aim) {
        const other = arms.find((a) => a.side < 0);
        other.shoulder.rotation.x = Math.min(other.shoulder.rotation.x, -0.35);
        other.forearm.rotation.x = -0.9;
      }
    } else {
      const gunHand = hands.find((h) => h.side > 0);
      gunHand.group.rotation.set(0, -gunHand.side * 1.15, 0);
    }
  }

  return {
    group,
    update,
    height: VEXO_HEIGHT,
    setArmed,
    fire: firePistol,
    /** The sidearm, for tests and for anything that wants to inspect it. */
    get pistol() { return pistol; },
    /**
     * Where a shot comes out, in world space. Armed, that is the end of
     * the barrel; unarmed there is no muzzle, so callers get null and
     * can decide for themselves.
     */
    getMuzzle(out) {
      if (!armed || !pistol) return null;
      return pistol.getMuzzle(out);
    },

    /**
     * @param {'idle'|'walk'|'climb'} mode
     * @param {number} [speed] metres per second, for 'walk' only
     */
    setGait(mode, speed = 0) {
      if (mode !== gait) { phase = 0; if (mode !== 'walk') run = 0; }
      gait = mode;
      gaitSpeed = speed;
    },
    get gait() { return gait; },
  };
}
