// Vexo himself, built out of primitives.
//
// From the concept art (`vexo_character.jpg`): a young pilot in dark
// gunmetal powered armour, lit all over by thin green circuit traces.
// Green visor across the eyes with a headset and mic boom, messy brown
// hair above it, heavy plates on shoulders, chest, thighs and shins,
// and cyan light rings in the boot soles.
//
// Built the same way as everything else here — Three.js primitives in a
// Group, no model files. Two things do most of the work:
//
//   1. A CIRCUIT TEXTURE used as an emissive map on every armour
//      surface. Modelling those traces as geometry would cost hundreds
//      of slivers; painted onto a canvas they cost one texture, and
//      they wrap the body the same way they do in the art.
//   2. PLATES over a body. The limbs and torso are simple tapered
//      shapes, and the silhouette comes from armour laid on top —
//      pauldrons, knee caps, shin guards — which is how the reference
//      reads too.
//
// Scale is metres, like the rest of the surface world: he stands 1.8 m
// tall with his feet at y = 0.
import * as THREE from 'three';

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

/** Rounded-ish box: the workhorse shape for every plate on him. */
function plate(w, h, d, material, x = 0, y = 0, z = 0) {
  const mesh = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), material);
  mesh.position.set(x, y, z);
  return mesh;
}

/** A tapered limb segment — wider at the top, narrower at the bottom. */
function limb(topR, bottomR, length, material, segments = 8) {
  const geom = new THREE.CylinderGeometry(topR, bottomR, length, segments);
  return new THREE.Mesh(geom, material);
}

/**
 * Build Vexo.
 *
 * @returns {{ group: THREE.Group, update: (dt: number) => void,
 *            height: number }}
 */
export function createVexo() {
  const group = new THREE.Group();
  const circuits = makeCircuitTexture();

  // Armour: dark, fairly metallic, with the circuit map glowing on top.
  // NOTE ON METALNESS: a physically-metallic surface reflects its
  // surroundings and emits almost no diffuse light of its own, so with
  // no environment map in the scene it renders nearly black — the first
  // pass at this looked like a man made of green light with a void for
  // a body. Keeping metalness modest lets the key light describe the
  // plates, which is what makes him read as armoured rather than lit.
  const armour = new THREE.MeshStandardMaterial({
    color: ARMOUR_DARK,
    metalness: 0.35,
    roughness: 0.5,
    emissive: CIRCUIT,
    emissiveMap: circuits,
    emissiveIntensity: 0.38,
  });
  const armourLight = new THREE.MeshStandardMaterial({
    color: ARMOUR_MID,
    metalness: 0.42,
    roughness: 0.42,
    emissive: CIRCUIT,
    emissiveMap: circuits,
    emissiveIntensity: 0.26,
  });
  const suit = new THREE.MeshStandardMaterial({
    color: UNDERSUIT,
    metalness: 0.2,
    roughness: 0.8,
    emissive: CIRCUIT,
    emissiveMap: circuits,
    emissiveIntensity: 0.3,
  });
  const skinMat = new THREE.MeshStandardMaterial({
    color: SKIN, metalness: 0, roughness: 0.85,
  });
  const hairMat = new THREE.MeshStandardMaterial({
    color: HAIR, metalness: 0, roughness: 0.95, flatShading: true,
  });
  const visorMat = new THREE.MeshStandardMaterial({
    color: VISOR,
    emissive: VISOR,
    emissiveIntensity: 1.4,
    transparent: true,
    opacity: 0.72,
    metalness: 0.2,
    roughness: 0.15,
  });
  const glowMat = new THREE.MeshBasicMaterial({ color: BOOT_GLOW });

  // --- Torso ----------------------------------------------------------------
  // Chest tapers from broad shoulders down to the belt.
  const chest = new THREE.Mesh(
    new THREE.CylinderGeometry(0.215, 0.17, 0.42, 10),
    armour,
  );
  // Wider than deep, like a person — but not by as much as the first
  // pass, which made him vanish in profile.
  chest.scale.set(1.16, 1, 0.86);
  chest.position.y = 1.28;
  group.add(chest);

  // Chest plates: two slabs angled off the sternum.
  for (const side of [-1, 1]) {
    const pec = plate(0.16, 0.19, 0.1, armourLight, side * 0.09, 1.35, 0.11);
    pec.rotation.z = side * -0.12;
    group.add(pec);
  }
  // Abdomen: the segmented under-suit showing between plates.
  const abs = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.15, 0.2, 10), suit);
  abs.scale.set(1.08, 1, 0.82);
  abs.position.y = 1.02;
  group.add(abs);

  // Belt with a lit buckle.
  const belt = new THREE.Mesh(new THREE.CylinderGeometry(0.19, 0.19, 0.09, 12), armourLight);
  belt.scale.set(1.08, 1, 0.86);
  belt.position.y = 0.94;
  group.add(belt);
  const buckle = new THREE.Mesh(new THREE.SphereGeometry(0.045, 10, 8), glowMat);
  buckle.scale.set(1.5, 1, 0.5);
  buckle.position.set(0, 0.94, 0.155);
  group.add(buckle);

  // Hips, under the belt.
  const hips = new THREE.Mesh(new THREE.CylinderGeometry(0.185, 0.17, 0.16, 10), armour);
  hips.scale.set(1.08, 1, 0.88);
  hips.position.y = 0.83;
  group.add(hips);

  // --- Head -----------------------------------------------------------------
  const neck = limb(0.055, 0.06, 0.09, suit);
  neck.position.y = 1.53;
  group.add(neck);

  const head = new THREE.Mesh(new THREE.SphereGeometry(0.105, 16, 14), skinMat);
  head.scale.set(0.98, 1.12, 1.0);
  head.position.y = 1.65;
  group.add(head);

  // Jaw/chin, so the profile isn't a ball.
  const jaw = plate(0.13, 0.07, 0.12, skinMat, 0, 1.585, 0.015);
  group.add(jaw);

  // Hair: a scatter of flattened blobs, messy like the reference.
  const hairSeeds = [
    [0, 1.74, -0.01, 0.105], [-0.06, 1.735, 0.03, 0.075],
    [0.06, 1.74, 0.02, 0.08], [0, 1.72, -0.08, 0.085],
    [-0.08, 1.71, -0.03, 0.07], [0.085, 1.715, -0.02, 0.07],
    [0.02, 1.775, 0.0, 0.06], [-0.03, 1.77, -0.04, 0.055],
  ];
  for (const [x, y, z, r] of hairSeeds) {
    const tuft = new THREE.Mesh(new THREE.IcosahedronGeometry(r, 0), hairMat);
    tuft.position.set(x, y, z);
    tuft.scale.set(1.1, 0.85, 1.1);
    tuft.rotation.set(Math.random(), Math.random(), Math.random());
    group.add(tuft);
  }

  // Visor: a wraparound bar across the eyes.
  const visor = new THREE.Mesh(new THREE.CylinderGeometry(0.108, 0.108, 0.045, 16, 1, true, -0.9, 1.8), visorMat);
  visor.position.set(0, 1.675, 0);
  visor.scale.set(1, 1, 1.02);
  group.add(visor);

  // Headset: ear cups plus a mic boom curving to the mouth.
  for (const side of [-1, 1]) {
    const cup = new THREE.Mesh(new THREE.CylinderGeometry(0.038, 0.038, 0.03, 10), armourLight);
    cup.rotation.z = Math.PI / 2;
    cup.position.set(side * 0.105, 1.66, 0);
    group.add(cup);
  }
  const boom = new THREE.Mesh(new THREE.CylinderGeometry(0.006, 0.006, 0.11, 6), armourLight);
  boom.position.set(-0.075, 1.615, 0.06);
  boom.rotation.set(-0.5, 0, 0.7);
  group.add(boom);
  const mic = new THREE.Mesh(new THREE.SphereGeometry(0.012, 8, 6), glowMat);
  mic.position.set(-0.045, 1.585, 0.095);
  group.add(mic);

  // --- Arms -----------------------------------------------------------------
  const arms = [];
  for (const side of [-1, 1]) {
    const arm = new THREE.Group();
    arm.position.set(side * 0.245, 1.44, 0);
    group.add(arm);
    arms.push(arm);

    // Pauldron: the big rounded shoulder plate.
    const pauldron = new THREE.Mesh(new THREE.SphereGeometry(0.115, 12, 10, 0, Math.PI * 2, 0, Math.PI * 0.62), armour);
    pauldron.scale.set(1, 0.95, 1.05);
    pauldron.position.y = 0.02;
    pauldron.rotation.z = side * 0.25;
    arm.add(pauldron);

    const upper = limb(0.062, 0.052, 0.28, suit);
    upper.position.y = -0.16;
    arm.add(upper);
    // Bicep band.
    const band = new THREE.Mesh(new THREE.CylinderGeometry(0.068, 0.062, 0.07, 10), armourLight);
    band.position.y = -0.1;
    arm.add(band);

    const elbow = new THREE.Mesh(new THREE.SphereGeometry(0.055, 10, 8), armour);
    elbow.position.y = -0.3;
    arm.add(elbow);

    // Forearm: the heaviest armour on the arm, a gauntlet.
    const fore = limb(0.058, 0.05, 0.26, armour);
    fore.position.y = -0.44;
    arm.add(fore);
    const gauntlet = plate(0.115, 0.16, 0.115, armourLight, 0, -0.46, 0);
    gauntlet.rotation.y = side * 0.2;
    arm.add(gauntlet);

    // Hand: palm plus a hint of fingers, hanging relaxed.
    const hand = plate(0.075, 0.11, 0.05, suit, 0, -0.62, 0.005);
    arm.add(hand);
    for (let f = 0; f < 3; f++) {
      const finger = plate(0.018, 0.06, 0.03, suit, (f - 1) * 0.024, -0.69, 0.012);
      finger.rotation.x = 0.25;
      arm.add(finger);
    }

    // Arms hang with a slight outward flare, as in the art.
    arm.rotation.z = side * 0.13;
    arm.rotation.x = 0.04;
  }

  // --- Legs -----------------------------------------------------------------
  for (const side of [-1, 1]) {
    const leg = new THREE.Group();
    leg.position.set(side * 0.105, 0.8, 0);
    group.add(leg);

    // The chain below hangs from the hip at y = 0.8, and every length
    // here is budgeted so the soles land on y = 0. Get this wrong and he
    // stands shin-deep in the floor, which is exactly what the first
    // turntable showed.
    const thigh = limb(0.093, 0.075, 0.36, suit);
    thigh.position.y = -0.20;
    leg.add(thigh);

    // Thigh plate: the big slab down the front of the leg.
    const thighPlate = plate(0.14, 0.27, 0.115, armour, 0, -0.19, 0.05);
    thighPlate.rotation.x = -0.06;
    leg.add(thighPlate);
    // A holster/pouch on the outside of each thigh.
    const pouch = plate(0.055, 0.13, 0.075, armourLight, side * 0.095, -0.21, 0);
    leg.add(pouch);

    const knee = new THREE.Mesh(new THREE.SphereGeometry(0.072, 10, 8), armour);
    knee.scale.set(1, 1, 1.15);
    knee.position.y = -0.40;
    leg.add(knee);
    const kneeCap = plate(0.1, 0.11, 0.065, armourLight, 0, -0.41, 0.055);
    leg.add(kneeCap);

    const shin = limb(0.072, 0.06, 0.34, suit);
    shin.position.y = -0.58;
    leg.add(shin);
    // Shin guard.
    const guard = plate(0.115, 0.28, 0.095, armour, 0, -0.57, 0.045);
    leg.add(guard);

    // Boot: a chunky wedge with a lit sole ring. Bottom face at y = 0.
    const boot = plate(0.135, 0.11, 0.26, armour, 0, -0.745, 0.045);
    leg.add(boot);
    const toe = plate(0.12, 0.08, 0.1, armourLight, 0, -0.755, 0.165);
    leg.add(toe);
    const sole = new THREE.Mesh(new THREE.TorusGeometry(0.045, 0.012, 6, 14), glowMat);
    sole.rotation.x = Math.PI / 2;
    sole.position.set(0, -0.786, 0.02);
    leg.add(sole);
  }

  // A soft green light inside the suit, so the glow spills onto whatever
  // he's standing near instead of looking painted on.
  const suitLight = new THREE.PointLight(CIRCUIT, 0.45, 2.2, 2);
  suitLight.position.set(0, 1.2, 0.12);
  group.add(suitLight);

  let t = 0;
  function update(dt) {
    t += dt;
    // Breathing, and a slow pulse through the circuits — enough motion
    // that he doesn't look like a statue.
    const breath = Math.sin(t * 1.6);
    chest.position.y = 1.28 + breath * 0.006;
    const pulse = 0.85 + 0.25 * Math.sin(t * 2.1);
    armour.emissiveIntensity = 0.38 * pulse;
    armourLight.emissiveIntensity = 0.26 * pulse;
    suit.emissiveIntensity = 0.3 * pulse;
    suitLight.intensity = 0.45 * pulse;
    for (const [i, arm] of arms.entries()) {
      arm.rotation.x = 0.04 + Math.sin(t * 1.6 + i) * 0.012;
    }
  }

  return { group, update, height: VEXO_HEIGHT };
}
