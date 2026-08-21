// The boarding ladder.
//
// Built in METRES, not in ship units. Everything else that belongs to
// the ship is a child of `ship.mesh` and inherits its scale — which is
// 4x while the ship is on the surface (see `surface.js`) — but the
// ladder exists only when the ship is parked and standing still, and it
// has to agree with a 1.8 m Vexo rung for rung. Living in world space
// keeps that arithmetic in the same units as the man climbing it.
//
// It deploys rather than appearing: the rails grow downward and each
// rung drops into place as the rails pass it, which reads as machinery
// unfolding instead of a prop being switched on.
import * as THREE from 'three';

// Matches the ship's palette so it looks like part of the same craft.
const RAIL_COLOR = 0x7c8896;   // the ship's darker mechanical panels
const RUNG_COLOR = 0xeef1f5;   // hull white
const GLOW_COLOR = 0x49abff;   // the engine/G-diffuser blue

const RAIL_GAP = 0.46;         // metres between the two rails
const RUNG_SPACING = 0.32;
const MAX_HEIGHT = 4.0;        // tallest ladder we ever build
const MAX_RUNGS = Math.ceil(MAX_HEIGHT / RUNG_SPACING);

/**
 * A ladder hanging from y = 0 downward in its own local space, so the
 * group can be parked at the ship's sill and pointed at the ground.
 *
 * Local axes: the rails run down -Y, the rungs along X, and the climber
 * stands on the +Z side (facing -Z, into the ladder).
 */
export function createLadder() {
  const group = new THREE.Group();
  group.visible = false;

  const railMat = new THREE.MeshStandardMaterial({
    color: RAIL_COLOR, metalness: 0.75, roughness: 0.42,
  });
  const rungMat = new THREE.MeshStandardMaterial({
    color: RUNG_COLOR, metalness: 0.5, roughness: 0.5,
  });
  // Emissive rather than a light: a light would change the scene's light
  // count and recompile every shader in the game the first time the
  // ladder came out. Same trap `surface.js` documents for the daylight.
  const glowMat = new THREE.MeshStandardMaterial({
    color: GLOW_COLOR, emissive: GLOW_COLOR, emissiveIntensity: 1.4, roughness: 0.5,
  });

  // Rails. Each is a unit-tall cylinder whose top sits at y = 0, so
  // scaling it on Y grows it downward from the sill and nowhere else.
  const rails = [];
  for (const side of [-1, 1]) {
    const geom = new THREE.CylinderGeometry(0.035, 0.035, 1, 10);
    geom.translate(0, -0.5, 0);
    const rail = new THREE.Mesh(geom, railMat);
    rail.position.x = side * RAIL_GAP / 2;
    group.add(rail);
    rails.push(rail);
  }

  // Rungs, all of them built once and revealed as the rails reach them.
  const rungs = [];
  for (let i = 0; i < MAX_RUNGS; i++) {
    const rung = new THREE.Mesh(
      new THREE.CylinderGeometry(0.022, 0.022, RAIL_GAP, 8),
      rungMat,
    );
    rung.rotation.z = Math.PI / 2;      // lie across the rails
    rung.position.y = -RUNG_SPACING * (i + 1);
    rung.visible = false;
    group.add(rung);
    rungs.push(rung);
  }

  // A lit pad at the foot of the ladder: it marks where to stand to get
  // back in, which is the one thing the player has to find again after
  // wandering off down the street.
  const pad = new THREE.Mesh(
    new THREE.TorusGeometry(0.5, 0.035, 8, 28),
    glowMat,
  );
  pad.rotation.x = Math.PI / 2;
  group.add(pad);

  let height = MAX_HEIGHT;
  let extension = 0;

  /** How far down the ladder currently reaches, in metres. */
  function reach() { return height * extension; }

  function apply() {
    const len = reach();
    for (const rail of rails) rail.scale.y = Math.max(len, 0.001);
    for (const [i, rung] of rungs.entries()) {
      rung.visible = -rung.position.y <= len - 0.04;
    }
    // The pad lands on the ground only once the ladder is all the way
    // down; before that it rides the bottom of the rails.
    pad.position.y = -len;
    pad.visible = extension > 0.02;
    group.visible = extension > 0.001;
  }

  apply();

  return {
    group,
    /** Metres from the sill to the ground. */
    setHeight(metres) {
      height = Math.min(Math.max(metres, 0.4), MAX_HEIGHT);
      apply();
    },
    /** 0 = stowed, 1 = fully deployed. */
    setExtension(t) {
      extension = t < 0 ? 0 : (t > 1 ? 1 : t);
      apply();
    },
    get height() { return height; },
    get extension() { return extension; },
    /** Metres between rungs — the climb animation steps in these. */
    rungSpacing: RUNG_SPACING,
  };
}
