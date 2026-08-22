// A bokoblin.
//
// Modelled on the ones in Tears of the Kingdom, in this project's own
// idiom — primitives in a group, no model files. What makes the
// silhouette theirs: a HUNCHED posture with the head thrust forward, a
// heavy round belly on skinny legs, a pig's snout, ears out sideways
// like a bat's, and a single horn. They carry a crude club.
//
// Scale: 1.35 m at the shoulder-hunch, against Vexo's 1.8 m. Deliberately
// smaller than he is — a bokoblin is a nuisance one-on-one and a problem
// in fours, which is exactly how they are placed.
//
// MESH BUDGET. There will be a dozen of these on screen, so the parts
// that never move relative to each other are merged: the body (torso,
// head, snout, ears, horn, eyes, belt) is one mesh, and so is each limb.
// Six meshes a monster rather than thirty. The limbs swing from the
// shoulder and hip without elbows or knees, which at their size and
// distance is all that reads anyway.
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

export const BOKO_HEIGHT = 1.35;

// The colour tiers, weakest first, as in TotK: red, blue, black, silver.
// Only the skin changes; horn and club are the same on all of them.
export const TIERS = {
  red: { skin: 0xb8452c, belly: 0xd9906a, dark: 0x5c3a24, hp: 2 },
  blue: { skin: 0x3f6bb0, belly: 0x8fb4dd, dark: 0x2b3a52, hp: 3 },
  black: { skin: 0x3b3630, belly: 0x8a7f70, dark: 0x241f1c, hp: 4 },
  silver: { skin: 0xb9c0cc, belly: 0xe4e8ee, dark: 0x5a6068, hp: 6 },
};

const HORN = 0xe6dcc4;
const CLUB = 0x6b4a2f;
const LOIN = 0x5b4a35;

/** Place a geometry into the merge list. */
function put(parts, geom, x, y, z, scale = null, rot = null) {
  if (scale) geom.scale(scale[0], scale[1], scale[2]);
  if (rot) {
    if (rot[0]) geom.rotateX(rot[0]);
    if (rot[1]) geom.rotateY(rot[1]);
    if (rot[2]) geom.rotateZ(rot[2]);
  }
  geom.translate(x, y, z);
  parts.push(geom);
}

/**
 * @param {object} [opts]
 * @param {keyof TIERS} [opts.tier]
 */
export function createBokoblin({ tier = 'red' } = {}) {
  const spec = TIERS[tier] ?? TIERS.red;
  const group = new THREE.Group();

  const skinMat = new THREE.MeshStandardMaterial({
    color: spec.skin, roughness: 0.85, metalness: 0.05,
  });
  const darkMat = new THREE.MeshStandardMaterial({
    color: spec.dark, roughness: 0.9, metalness: 0.05,
  });
  const hornMat = new THREE.MeshStandardMaterial({
    color: HORN, roughness: 0.55, metalness: 0.1,
  });
  // The pale underside — belly, and the whites of the eyes.
  const bellyMat = new THREE.MeshStandardMaterial({
    color: spec.belly, roughness: 0.8, metalness: 0.04,
  });
  const clubMat = new THREE.MeshStandardMaterial({
    color: CLUB, roughness: 0.95, metalness: 0,
  });

  // --- Body: torso, head and everything welded to them -------------------------
  //
  // The proportions are the character. A bokoblin is a BIG HEAD on a
  // modest pot belly on skinny legs, hunched so the head leads — the
  // first pass had a small head on an enormous belly and read as a
  // teddy bear. Everything below is built around a spine that leans
  // forward about fifteen degrees.
  const LEAN = 0.26;
  const skinParts = [];
  const bellyParts = [];
  const darkParts = [];
  const hornParts = [];

  // Belly: a pot, wider than deep, sitting low.
  put(skinParts, new THREE.SphereGeometry(0.23, 14, 12), 0, 0.76, 0.0,
    [1.05, 0.88, 0.95]);
  // The lighter underside every bokoblin has.
  put(bellyParts, new THREE.SphereGeometry(0.16, 12, 10), 0, 0.77, 0.11,
    [1.0, 0.8, 0.6]);
  // Chest, tipped forward over it, narrower.
  put(skinParts, new THREE.SphereGeometry(0.185, 14, 12), 0, 0.98, 0.075,
    [1.1, 0.8, 0.9], [LEAN, 0, 0]);
  // Shoulders: a bar across, so the arms hang off something.
  put(skinParts, new THREE.CapsuleGeometry(0.072, 0.3, 4, 8), 0, 1.06, 0.06,
    null, [0, 0, Math.PI / 2]);

  // Head: large, and thrust FORWARD of the shoulders rather than above
  // them. That single offset is most of what makes him look like he is
  // stalking rather than standing.
  const HX = 0, HY = 1.2, HZ = 0.16;
  put(skinParts, new THREE.SphereGeometry(0.175, 14, 12), HX, HY, HZ,
    [1, 0.95, 1.12]);
  // Brow ridge, jutting over the eyes.
  put(skinParts, new THREE.SphereGeometry(0.1, 10, 8), HX, HY + 0.08, HZ + 0.055,
    [1.25, 0.42, 0.8]);
  // Snout: long, blunt, angled down. Bokoblins lead with it.
  put(skinParts, new THREE.CylinderGeometry(0.062, 0.095, 0.19, 10),
    HX, HY - 0.045, HZ + 0.13, null, [Math.PI / 2 + 0.25, 0, 0]);
  put(skinParts, new THREE.SphereGeometry(0.062, 10, 8), HX, HY - 0.085, HZ + 0.21);
  for (const side of [-1, 1]) {
    put(darkParts, new THREE.SphereGeometry(0.018, 8, 6),
      side * 0.026, HY - 0.06, HZ + 0.235);
  }
  // Tusks, up from the lower jaw and outside the snout.
  for (const side of [-1, 1]) {
    put(hornParts, new THREE.ConeGeometry(0.019, 0.075, 6),
      side * 0.055, HY - 0.09, HZ + 0.16, null, [0.35, 0, side * 0.3]);
  }
  // Ears: wide flat blades held out sideways and swept back.
  for (const side of [-1, 1]) {
    put(skinParts, new THREE.ConeGeometry(0.085, 0.2, 4),
      side * 0.21, HY + 0.06, HZ - 0.06,
      [1, 1, 0.3], [0.2, 0, side * -1.25]);
  }
  // Horn, curving up off the brow.
  put(hornParts, new THREE.ConeGeometry(0.032, 0.19, 6), HX, HY + 0.18, HZ - 0.02,
    null, [-0.4, 0, 0]);
  // Eyes: big, close-set, under the brow — a pale eyeball with a dark
  // slit, because two dots read as a toy.
  for (const side of [-1, 1]) {
    // Set FORWARD of the brow, or the brow hides them and he has no
    // face at all from the front.
    put(bellyParts, new THREE.SphereGeometry(0.036, 10, 8),
      side * 0.07, HY + 0.02, HZ + 0.135, [1, 1, 0.75]);
    put(darkParts, new THREE.SphereGeometry(0.018, 8, 6),
      side * 0.074, HY + 0.018, HZ + 0.163, [0.7, 1.25, 0.7]);
  }
  // Loincloth: a skirt hanging BELOW the belly, where it can be seen.
  put(darkParts, new THREE.CylinderGeometry(0.185, 0.225, 0.19, 12), 0, 0.55, 0.0);
  // Belt.
  put(darkParts, new THREE.TorusGeometry(0.2, 0.022, 6, 16), 0, 0.645, 0.0,
    [1.05, 1, 0.95], [Math.PI / 2, 0, 0]);

  // Four merged meshes for the whole of him above the hips: one per
  // material, because a merge can only carry one.
  const body = new THREE.Group();
  body.add(new THREE.Mesh(mergeGeometries(skinParts), skinMat));
  body.add(new THREE.Mesh(mergeGeometries(bellyParts), bellyMat));
  body.add(new THREE.Mesh(mergeGeometries(darkParts), darkMat));
  body.add(new THREE.Mesh(mergeGeometries(hornParts), hornMat));
  group.add(body);

  // --- Limbs --------------------------------------------------------------------
  // One rigid mesh each, swinging from the joint at the top. No elbows or
  // knees: at a bokoblin's size, in a fight you are looking at the club.
  const arms = [];
  for (const side of [-1, 1]) {
    const arm = new THREE.Group();
    arm.position.set(side * 0.225, 1.05, 0.05);
    // Hanging forward and a little out, off a frame that leans.
    arm.rotation.set(0.18, 0, side * 0.2);
    group.add(arm);
    const parts = [];
    put(parts, new THREE.CapsuleGeometry(0.05, 0.15, 3, 8), 0, -0.1, 0.01);
    put(parts, new THREE.CapsuleGeometry(0.042, 0.14, 3, 8), 0, -0.26, 0.045);
    put(parts, new THREE.SphereGeometry(0.052, 8, 6), 0, -0.36, 0.06);   // fist
    arm.add(new THREE.Mesh(mergeGeometries(parts), skinMat));
    arms.push({ group: arm, side });
  }

  const legs = [];
  for (const side of [-1, 1]) {
    const leg = new THREE.Group();
    leg.position.set(side * 0.115, 0.6, 0);
    group.add(leg);
    const parts = [];
    // Bow-legged: the thigh angles out and the shin comes back in, which
    // is how every one of these things stands.
    put(parts, new THREE.CapsuleGeometry(0.062, 0.15, 3, 8),
      side * 0.022, -0.11, 0, null, [0, 0, side * -0.16]);
    put(parts, new THREE.CapsuleGeometry(0.048, 0.15, 3, 8),
      side * 0.03, -0.28, 0.015, null, [0.1, 0, side * 0.12]);
    // Foot: flat, forward, and a size too big.
    put(parts, new THREE.SphereGeometry(0.072, 8, 6), side * 0.012, -0.4, 0.045,
      [0.9, 0.5, 1.4]);
    leg.add(new THREE.Mesh(mergeGeometries(parts), skinMat));
    legs.push({ group: leg, side });
  }

  // --- Club -----------------------------------------------------------------------
  // In the right hand, which is the -X one on a figure facing +Z.
  const club = new THREE.Group();
  club.position.set(0, -0.36, 0.05);
  arms[0].group.add(club);
  {
    const parts = [];
    put(parts, new THREE.CylinderGeometry(0.022, 0.028, 0.34, 8), 0, -0.1, 0);
    put(parts, new THREE.SphereGeometry(0.06, 8, 6), 0, -0.3, 0, [1, 1.3, 1]);
    // Spikes, because a bokoblin's club always has something driven
    // through it.
    for (const a of [0, 1.6, 3.1, 4.7]) {
      put(parts, new THREE.ConeGeometry(0.018, 0.06, 4),
        Math.sin(a) * 0.06, -0.3, Math.cos(a) * 0.06, null,
        [Math.cos(a) * 1.4, 0, -Math.sin(a) * 1.4]);
    }
    club.add(new THREE.Mesh(mergeGeometries(parts), clubMat));
  }

  return {
    group,
    body,
    arms,
    legs,
    club,
    tier,
    height: BOKO_HEIGHT,
    maxHp: spec.hp,
  };
}
