// Scene + camera + lighting. Kept separate from main.js so the entry stays
// focused on the game loop and assembly.
import * as THREE from 'three';

export const FOV_DEG = 60;
export const NEAR = 0.1;
export const FAR = 5000;

export function createScene() {
  const scene = new THREE.Scene();
  // Near-black with a hint of blue. We never see "true" black in space
  // because of starlight, and pure black hides depth cues.
  scene.background = new THREE.Color(0x02030a);

  // A hemisphere light gives a soft "sky vs ground" gradient — a cool
  // blue from above, a warmer dim from below — so the ship reads as 3D
  // even when the sun is on its far side. Cheap and great for space.
  scene.add(new THREE.HemisphereLight(0x6090c0, 0x202030, 0.55));

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
