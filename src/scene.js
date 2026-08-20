// Scene + camera + lighting. Kept separate from main.js so the entry stays
// focused on the game loop and assembly.
import * as THREE from 'three';

export const FOV_DEG = 60;
// The near plane is what sets depth-buffer precision: what matters is
// the RATIO far/near, and 0.1 gave 50,000:1, which left almost no
// precision out where the ground is. Flat surfaces two centimetres
// apart — a car park over grass, a road over a car park — then fought
// for pixels and shimmered as the ship moved. At 0.5 the ratio is
// 10,000:1. Nothing is ever drawn closer than that anyway: the ship is
// 2.6m long and the camera rides 5.5m behind it.
export const NEAR = 0.5;
export const FAR = 5000;

// Where space's fog sits: beyond anything the game can draw, so it
// never tints a star or a planet. See createScene() for why it's there.
export const SPACE_FOG_NEAR = 1e6;
export const SPACE_FOG_FAR = 2e6;

export function createScene() {
  const scene = new THREE.Scene();
  // Near-black with a hint of blue. We never see "true" black in space
  // because of starlight, and pure black hides depth cues.
  scene.background = new THREE.Color(0x02030a);

  // A hemisphere light gives a soft "sky vs ground" gradient — a cool
  // blue from above, a warmer dim from below — so the ship reads as 3D
  // even when the sun is on its far side. Cheap and great for space.
  scene.add(new THREE.HemisphereLight(0x6090c0, 0x202030, 0.55));

  // Fog exists from the very first frame, pushed so far away it can
  // have no visible effect out here. This is not decoration: whether a
  // scene has fog is a #define inside every shader, so ADDING fog later
  // forces Three.js to recompile every material in the scene at once —
  // measured at a 2.5 second freeze the first time the ship landed on
  // Earth. Landing now only changes the fog's colour and distances,
  // which are plain uniforms and cost nothing.
  scene.fog = new THREE.Fog(0x02030a, SPACE_FOG_NEAR, SPACE_FOG_FAR);

  // A distant directional light stands in for the Sun. Direction matters
  // more than position for directional lights.
  const sun = new THREE.DirectionalLight(0xffffff, 1.1);
  sun.position.set(40, 30, 20);
  scene.add(sun);

  return scene;
}

export function createCamera() {
  const camera = new THREE.PerspectiveCamera(
    FOV_DEG,
    window.innerWidth / window.innerHeight,
    NEAR,
    FAR,
  );
  return camera;
}
