// Loading Vexo from a model file instead of building him from primitives.
//
// `vexo.js` assembles him out of Three.js shapes, which is what ships
// today and what the turntable falls back to. This module is the other
// road: hand it a rigged glTF/GLB and it returns the same little
// `{ group, update, height }` interface, so the character viewer can
// swap one for the other without knowing which it got.
//
// Three things happen to a model on the way in, and all three matter:
//
//   1. SHADOWS. Every mesh casts and receives. The character viewer is
//      the only scene in the game that turns shadow mapping on — a
//      figure on a lit pedestal with no contact shadow floats.
//   2. MATERIALS. Exported materials are frequently shipped at the
//      glTF defaults (fully rough, or fully metal by accident). Skin
//      and cloth want roughness around 0.6 with almost no metalness;
//      that single nudge is most of the difference between "plastic
//      toy" and "person".
//   3. SCALE. Models arrive in whatever units the artist worked in.
//      The surface world is metres, and every camera and light here is
//      framed for a 1.8 m figure with his feet at y = 0, so the model
//      is scaled and dropped onto the floor rather than trusted.
//
// Animation runs through an AnimationMixer: the clips baked into the
// file drive the bones every frame, replacing the hand-written breathing
// in the primitive build.
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { VEXO_HEIGHT } from './vexo.js';

// The clip played on arrival, if the file has one. Anything else in the
// file is loaded and left ready for `play()`.
const DEFAULT_CLIP = 'Idle';

/** Skin and fabric: mostly diffuse, with a soft specular sheen. */
const SKIN_ROUGHNESS = 0.6;
const SKIN_METALNESS = 0.1;

const loader = new GLTFLoader();

/**
 * Load a rigged character and return the same shape `createVexo()` does,
 * plus animation controls.
 *
 * @param {string} url            path to a .glb/.gltf, served as a static asset
 * @param {object} [opts]
 * @param {number} [opts.height]  metres, tip to toe; the model is scaled to it
 * @param {string} [opts.clip]    clip to play on arrival
 * @returns {Promise<{group: THREE.Group, update: (dt: number) => void,
 *                    height: number, clips: string[],
 *                    play: (name: string, fade?: number) => boolean,
 *                    dispose: () => void}>}
 */
export function loadCharacterModel(url, { height = VEXO_HEIGHT, clip = DEFAULT_CLIP } = {}) {
  return new Promise((resolve, reject) => {
    loader.load(url, (gltf) => resolve(prepare(gltf, height, clip)), undefined, reject);
  });
}

function prepare(gltf, targetHeight, firstClip) {
  const character = gltf.scene;

  character.traverse((child) => {
    if (!child.isMesh) return;
    child.castShadow = true;
    child.receiveShadow = true;
    // Materials can be shared between meshes and can come as an array
    // on a multi-material mesh; touching each one twice is harmless,
    // missing the array members is not.
    for (const material of toArray(child.material)) {
      if (!material) continue;
      // Only the PBR materials (Standard/Physical) have these; a model
      // exported with unlit or basic materials has neither, and writing
      // the properties anyway would silently do nothing.
      if ('roughness' in material) material.roughness = SKIN_ROUGHNESS;
      if ('metalness' in material) material.metalness = SKIN_METALNESS;
    }
  });

  // --- Stand him at the right size, on the floor ------------------------------
  // A skinned mesh is measured in its bind pose, which is close enough:
  // the point is to reject a model authored in centimetres, not to
  // measure a pose to the millimetre.
  const group = new THREE.Group();
  character.updateWorldMatrix(true, true);
  const bounds = new THREE.Box3().setFromObject(character);
  const size = bounds.getSize(new THREE.Vector3());
  if (size.y > 1e-4) {
    const scale = targetHeight / size.y;
    character.scale.multiplyScalar(scale);
    bounds.min.multiplyScalar(scale);
    bounds.max.multiplyScalar(scale);
  }
  // Feet on y = 0, centred over the turntable's axis so he doesn't
  // swing around it like a fairground ride.
  character.position.x -= (bounds.min.x + bounds.max.x) / 2;
  character.position.z -= (bounds.min.z + bounds.max.z) / 2;
  character.position.y -= bounds.min.y;
  group.add(character);

  // --- Animation --------------------------------------------------------------
  const mixer = new THREE.AnimationMixer(character);
  const actions = new Map();
  for (const clip of gltf.animations) actions.set(clip.name, mixer.clipAction(clip));

  let current = null;
  /** Cross-fade to a clip. Returns false if the file doesn't have it. */
  function play(name, fade = 0.25) {
    const next = actions.get(name);
    if (!next || next === current) return Boolean(next);
    next.reset().play();
    if (current) {
      current.crossFadeTo(next, fade, false);
    } else if (fade > 0) {
      next.fadeIn(fade);
    }
    current = next;
    return true;
  }

  // Prefer the named idle; if the file uses some other convention, the
  // first clip beats standing frozen.
  if (!play(firstClip, 0) && gltf.animations.length) play(gltf.animations[0].name, 0);

  return {
    group,
    height: targetHeight,
    clips: [...actions.keys()],
    play,
    update(dt) { mixer.update(dt); },
    dispose() {
      mixer.stopAllAction();
      mixer.uncacheRoot(character);
      disposeTree(character);
    },
  };
}

function toArray(material) {
  if (!material) return [];
  return Array.isArray(material) ? material : [material];
}

/** Free the GPU memory a swapped-out model was holding. */
function disposeTree(root) {
  const materials = new Set();
  root.traverse((child) => {
    if (!child.isMesh) return;
    child.geometry?.dispose();
    for (const material of toArray(child.material)) materials.add(material);
  });
  for (const material of materials) {
    // Textures are shared between materials too, hence the set above
    // and the value walk here rather than a fixed list of map names.
    for (const value of Object.values(material)) {
      if (value && value.isTexture) value.dispose();
    }
    material.dispose();
  }
}
