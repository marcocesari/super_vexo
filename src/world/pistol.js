// Vexo's sidearm.
//
// Built to the proportions of a real compact pistol, because a gun that
// is the wrong shape reads as a toy however you light it. A Ruger RXM
// (a Glock-19-pattern compact) is 181 mm long, 130 mm tall, 32 mm wide,
// with a 99 mm barrel — and at this project's one-unit-per-metre that is
// 0.181 x 0.130 x 0.032, which is what is modelled below.
//
// The parts have their real names, because that is what makes this
// readable to anyone who has ever held one, and because "the bit at the
// back that goes click" is not a variable name:
//
//   slide       the whole upper, which reciprocates when it fires
//   serrations  the grip ridges at the rear of the slide
//   ejection port  where the empty case leaves
//   barrel      inside the slide, showing at the muzzle
//   frame       the lower — trigger group, rail and grip in one
//   trigger guard, trigger
//   grip        angled back about twenty degrees off vertical
//   magazine baseplate  the floor of the grip
//   front and rear sights
//
// LOCAL AXES: +Z is the way the bullet goes, +Y is up, and the origin is
// at the top of the grip where the hand closes around it. That last bit
// matters — put the origin anywhere else and every mount point in the
// game needs a correction applied to it by hand.
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

const LENGTH = 0.181;
const WIDTH = 0.032;

export function createPistol({ metal, polymer, glow }) {
  const group = new THREE.Group();

  const steel = [];      // slide, barrel, sights
  const black = [];      // frame, grip, trigger
  const lit = [];        // the parts of it that are not from this century

  const box = (w, h, d, x, y, z) => {
    const g = new THREE.BoxGeometry(w, h, d);
    g.translate(x, y, z);
    return g;
  };

  // --- Slide ---------------------------------------------------------------
  // Sits above the frame, running from the back of the gun to the muzzle.
  steel.push(box(WIDTH, 0.027, LENGTH * 0.92, 0, 0.021, 0.012));
  // Rounded top, so it isn't a brick with a sight on it.
  {
    const top = new THREE.CylinderGeometry(WIDTH * 0.5, WIDTH * 0.5, LENGTH * 0.92, 10, 1, false, 0, Math.PI);
    top.rotateZ(Math.PI / 2);
    top.rotateY(Math.PI / 2);
    top.translate(0, 0.034, 0.012);
    steel.push(top);
  }
  // Serrations: five ridges at the rear, the thing your thumb finds when
  // you rack it.
  for (let i = 0; i < 5; i++) {
    steel.push(box(WIDTH + 0.002, 0.02, 0.004, 0, 0.022, -0.052 - i * 0.008));
  }
  // Ejection port, on the right, cut as a dark inset rather than a hole.
  black.push(box(0.003, 0.016, 0.042, WIDTH * 0.5, 0.026, 0.03));
  // Barrel, showing at the muzzle.
  {
    const barrel = new THREE.CylinderGeometry(0.0085, 0.0085, 0.02, 10);
    barrel.rotateX(Math.PI / 2);
    barrel.translate(0, 0.022, LENGTH * 0.47);
    steel.push(barrel);
  }

  // --- Sights ---------------------------------------------------------------
  // Front post at the muzzle, rear notch at the back: two blocks with a
  // gap between them. The sight radius is what you line up.
  steel.push(box(0.005, 0.008, 0.005, 0, 0.05, LENGTH * 0.42));
  steel.push(box(0.008, 0.008, 0.006, -0.009, 0.05, -0.07));
  steel.push(box(0.008, 0.008, 0.006, 0.009, 0.05, -0.07));
  // Tritium-green dots, front and rear, which on this gun are lit.
  lit.push(box(0.0035, 0.0035, 0.0035, 0, 0.052, LENGTH * 0.42 + 0.002));

  // --- Frame ----------------------------------------------------------------
  // The lower: dust cover forward, trigger group in the middle, grip down.
  black.push(box(WIDTH - 0.004, 0.016, LENGTH * 0.55, 0, 0.0, 0.038));
  // Accessory rail underneath the dust cover.
  black.push(box(0.014, 0.005, 0.05, 0, -0.009, 0.05));
  // Trigger guard: two uprights and a bar, rather than a torus, because a
  // real guard is squared off at the front where your finger rests.
  black.push(box(0.012, 0.03, 0.006, 0, -0.02, 0.028));
  black.push(box(0.012, 0.006, 0.045, 0, -0.033, 0.006));
  black.push(box(0.012, 0.022, 0.006, 0, -0.024, -0.014));
  // Trigger itself, inside it.
  black.push(box(0.007, 0.018, 0.005, 0, -0.017, 0.004));

  // --- Grip -----------------------------------------------------------------
  // Angled back about twenty degrees, which is what makes a pistol point
  // naturally when you raise it.
  {
    const grip = new THREE.BoxGeometry(WIDTH - 0.005, 0.095, 0.032);
    grip.translate(0, -0.055, -0.03);
    grip.rotateX(-0.34);
    grip.translate(0, 0.0, -0.006);
    black.push(grip);
    // Baseplate: the floor of the magazine, sticking out slightly.
    const base = new THREE.BoxGeometry(WIDTH - 0.002, 0.008, 0.036);
    base.translate(0, -0.104, -0.062);
    base.rotateX(-0.1);
    black.push(base);
    // The cell in the magazine well: this is a spacecraft's sidearm and
    // something has to be powering the green everywhere else on him.
    const cell = new THREE.BoxGeometry(0.006, 0.05, 0.005);
    cell.translate(WIDTH * 0.48 - 0.004, -0.055, -0.03);
    cell.rotateX(-0.34);
    lit.push(cell);
  }
  // A lit strip down the slide, matching the traces in his suit.
  lit.push(box(0.0035, 0.004, 0.075, WIDTH * 0.5, 0.016, 0.01));
  lit.push(box(0.0035, 0.004, 0.075, -WIDTH * 0.5, 0.016, 0.01));

  group.add(new THREE.Mesh(mergeGeometries(steel), metal));
  group.add(new THREE.Mesh(mergeGeometries(black), polymer));
  group.add(new THREE.Mesh(mergeGeometries(lit), glow));

  // --- Muzzle flash ----------------------------------------------------------
  // Hidden until it fires, then a cone at the muzzle for a couple of
  // frames. A light would be truer and would recompile every shader in
  // the game the first time he pulled the trigger.
  const flashMat = new THREE.MeshBasicMaterial({
    color: 0xfff0b0, transparent: true, opacity: 0.75, depthWrite: false,
  });
  const flash = new THREE.Mesh(new THREE.ConeGeometry(0.022, 0.062, 6), flashMat);
  flash.rotation.x = Math.PI / 2;
  flash.position.set(0, 0.022, LENGTH * 0.52);
  flash.visible = false;
  group.add(flash);

  let flashLeft = 0;
  // Where the bullet leaves, in the gun's own space: the end of the
  // barrel, on its centreline.
  const MUZZLE = new THREE.Vector3(0, 0.022, LENGTH * 0.5);

  return {
    group,
    /**
     * The muzzle in WORLD space. Whatever draws the shot should start
     * here — the alternative is picking a point on the character and
     * hoping, which is how you end up with tracers coming out of his
     * chest.
     */
    getMuzzle(out) {
      group.updateWorldMatrix(true, false);
      return out.copy(MUZZLE).applyMatrix4(group.matrixWorld);
    },
    /** Which way the barrel is pointing, in world space. */
    getAim(out) {
      group.updateWorldMatrix(true, false);
      const e = group.matrixWorld.elements;
      return out.set(e[8], e[9], e[10]).normalize();
    },
    /** Called when a shot goes off. */
    fire() {
      flashLeft = 0.055;
      flash.visible = true;
      flash.rotation.z = Math.random() * Math.PI;   // never the same twice
      flash.scale.setScalar(0.85 + Math.random() * 0.4);
    },
    update(dt) {
      if (flashLeft <= 0) return;
      flashLeft -= dt;
      if (flashLeft <= 0) {
        flash.visible = false;
      } else {
        flashMat.opacity = Math.min(1, flashLeft / 0.03);
      }
    },
    length: LENGTH,
  };
}
