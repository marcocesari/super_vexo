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

  // Dim ambient so unlit faces are not pure black.
  scene.add(new THREE.AmbientLight(0xffffff, 0.25));

  // A distant directional light stands in for the Sun. Direction matters
  // more than position for directional lights.
  const sun = new THREE.DirectionalLight(0xffffff, 1.0);
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
