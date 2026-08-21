// Character turntable. Open the game with `?character=1` and instead of
// flying you get Vexo on a slow-rotating pedestal, lit from three sides
// so every angle is readable.
//
// It's a parallel scene sharing the renderer, exactly like the opening
// cinematic — the game loop hands it the frame and nothing else in the
// game needs to know it exists.
//
// Controls: drag (or swipe) to spin him by hand, release to resume the
// turntable. Left/right arrows nudge, up/down tilt the camera.
//
// `?model=<url>` swaps the primitive Vexo for a rigged glTF/GLB — see
// `world/characterModel.js`. The primitive build is shown immediately
// and the model takes his place when it finishes downloading, so a slow
// or missing file costs you detail, never an empty pedestal.
import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { createVexo, VEXO_HEIGHT } from './world/vexo.js';
import { loadCharacterModel } from './world/characterModel.js';

const TURNTABLE_SPEED = 0.45;   // radians per second
const RESUME_DELAY_S = 1.5;     // how long a hand-spin holds before it drifts on

export function createCharacterViewer({ renderer, modelUrl = null }) {
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x0a0e16);

  // ACES tone mapping rolls the bright end off instead of clipping it,
  // which is what stops lit metal and the glowing visor from turning
  // into flat white patches.
  const previousToneMapping = renderer.toneMapping;
  const previousExposure = renderer.toneMappingExposure;
  const previousColorSpace = renderer.outputColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.0;
  // Lighting maths only works in linear space, and the result has to be
  // written back out as sRGB or everything lands too dark. This is the
  // modern spelling of `outputEncoding = sRGBEncoding`, which three
  // removed in r152 — on r169 the old property is silently ignored, so
  // it has to be set this way. It is also the default; stated here
  // because the correctness of every colour below depends on it.
  renderer.outputColorSpace = THREE.SRGBColorSpace;

  // The only scene in the game that casts shadows. Out in the world
  // there is nothing close enough to a surface for a shadow to land on
  // and the cost isn't worth it; here he is standing on a pedestal a
  // few centimetres below his boots, and without a contact shadow he
  // reads as hovering over it. Soft (PCF) because one hard-edged
  // shadow from a studio key light looks like a mistake.
  const previousShadows = renderer.shadowMap.enabled;
  const previousShadowType = renderer.shadowMap.type;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;

  const camera = new THREE.PerspectiveCamera(38, window.innerWidth / window.innerHeight, 0.05, 100);

  // An environment for the armour to reflect. Metal has almost no
  // diffuse colour of its own — what you read as "metal" is a picture of
  // the room bent around a curved surface — so without this the plates
  // just go dark and flat no matter how they're lit. RoomEnvironment is
  // a small box of coloured panels that Three.js pre-filters into a
  // reflection probe; it costs one render at startup and nothing after.
  const pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
  scene.environmentIntensity = 0.55;
  pmrem.dispose();

  // Studio lighting: a warm key high on the front-right, a flat ambient
  // fill under it, a cool directional fill, and a hard rim from behind
  // that picks the armour's edges out of the dark background.
  //
  // Ambient fill: a cool, flat wash that lifts the shadow side off
  // black. It has no direction, which is the point — the key does all
  // the shaping and this only decides how dark the darkest side gets.
  scene.add(new THREE.AmbientLight(0xe8f0ff, 0.8));

  const key = new THREE.DirectionalLight(0xfff5ea, 2.5);
  key.position.set(5, 10, 7);
  // Only the key casts. A second shadow from the fill would cross the
  // first one and give him two feet's worth of shadow per foot.
  key.castShadow = true;
  key.shadow.mapSize.width = 2048;
  key.shadow.mapSize.height = 2048;
  key.shadow.bias = -0.0001;
  // Softens the shadow edge — but only under VSM. Three's PCF paths
  // read a fixed kernel and ignore `radius` entirely (it reaches the
  // shader through the VSM blur pass alone). Left set so switching
  // `shadowMap.type` to VSMShadowMap softens the edge without hunting
  // for the knob; the softness on screen today comes from PCFSoft's
  // own filtering and the 2048 map.
  key.shadow.radius = 4;
  // A directional light's shadow camera sits at the light's position and
  // looks at its target, so the frustum has to reach from (5, 10, 7) —
  // 13.2 m out — all the way past him. At the tuned 12 m far plane he
  // fell outside it and cast nothing at all. Tight sides still: every
  // metre of frustum spends shadow-map pixels on empty air.
  key.shadow.camera.near = 8;
  key.shadow.camera.far = 20;
  key.shadow.camera.left = -1.8;
  key.shadow.camera.right = 1.8;
  key.shadow.camera.top = 1.8;
  key.shadow.camera.bottom = -1.8;
  scene.add(key);
  const fill = new THREE.DirectionalLight(0x9cc0ff, 1.15);
  fill.position.set(3.2, 1.4, 1.6);
  scene.add(fill);
  // Rim from behind, in the suit's own green, to cut his edges out of
  // the dark background. Restrained — turned up it just paints the
  // pedestal green.
  const rim = new THREE.DirectionalLight(0x9effd0, 1.0);
  rim.position.set(0.6, 2.0, -3.6);
  scene.add(rim);

  // Pedestal: a dark disc with a glowing ring, so he's standing on
  // something rather than floating in a void.
  const pedestal = new THREE.Mesh(
    new THREE.CylinderGeometry(0.62, 0.7, 0.06, 48),
    // Dark and matte: a shiny pedestal just catches the green rim light
    // and reads as a puddle.
    new THREE.MeshStandardMaterial({ color: 0x10141c, metalness: 0.2, roughness: 0.85 }),
  );
  pedestal.position.y = -0.03;
  pedestal.receiveShadow = true;
  scene.add(pedestal);
  const ring = new THREE.Mesh(
    new THREE.TorusGeometry(0.63, 0.008, 8, 64),
    new THREE.MeshBasicMaterial({ color: 0x49c8ff }),
  );
  ring.rotation.x = Math.PI / 2;
  ring.position.y = 0.012;
  scene.add(ring);

  // The turntable itself: spinning this spins him, and the camera can
  // stay put — which keeps the lighting fixed so each angle is lit the
  // same way, the way a turntable render should be.
  const table = new THREE.Group();
  scene.add(table);

  const vexo = createVexo();
  table.add(vexo.group);
  // The primitive build is authored without shadow flags — out in the
  // world nothing casts — so opt his pieces in here, where the pedestal
  // is waiting to catch it.
  vexo.group.traverse((child) => {
    if (!child.isMesh) return;
    child.castShadow = true;
    child.receiveShadow = true;
  });

  let disposed = false;
  // Whatever is on the pedestal right now: the primitive build, or the
  // loaded model once it arrives. Everything downstream — the frame
  // loop, the smoke test, the contact sheet — talks to this.
  let figure = vexo;

  if (modelUrl) {
    loadCharacterModel(modelUrl).then((model) => {
      if (disposed) { model.dispose(); return; }
      table.remove(vexo.group);
      table.add(model.group);
      figure = model;
    }).catch((err) => {
      // A missing or broken file is not fatal — the primitive Vexo is
      // already standing there. Say so once and carry on.
      console.warn(`[character] could not load ${modelUrl}, keeping the built-in Vexo:`, err);
    });
  }

  let spin = 0;
  let tilt = 0.06;          // camera pitch, radians above the horizon
  let manualHold = 0;       // seconds left before the turntable resumes
  let dragging = false;
  let lastPointerX = 0;

  function layoutCamera() {
    // Frame the whole figure with a little headroom, from slightly above
    // waist height.
    const dist = 3.7;
    const height = VEXO_HEIGHT * 0.52;
    camera.position.set(0, height + Math.sin(tilt) * dist, Math.cos(tilt) * dist);
    camera.lookAt(0, VEXO_HEIGHT * 0.52, 0);
  }
  layoutCamera();

  // --- Hand control ---------------------------------------------------------
  function onPointerDown(e) {
    dragging = true;
    lastPointerX = e.clientX;
  }
  function onPointerMove(e) {
    if (!dragging) return;
    spin += (e.clientX - lastPointerX) * 0.012;
    lastPointerX = e.clientX;
    manualHold = RESUME_DELAY_S;
  }
  function onPointerUp() { dragging = false; }
  function onKeyDown(e) {
    if (e.code === 'ArrowLeft') { spin -= 0.2; manualHold = RESUME_DELAY_S; }
    if (e.code === 'ArrowRight') { spin += 0.2; manualHold = RESUME_DELAY_S; }
    if (e.code === 'ArrowUp') { tilt = Math.min(0.9, tilt + 0.06); layoutCamera(); }
    if (e.code === 'ArrowDown') { tilt = Math.max(-0.35, tilt - 0.06); layoutCamera(); }
  }
  window.addEventListener('pointerdown', onPointerDown);
  window.addEventListener('pointermove', onPointerMove);
  window.addEventListener('pointerup', onPointerUp);
  window.addEventListener('keydown', onKeyDown);

  // --- Caption --------------------------------------------------------------
  const label = document.createElement('div');
  label.id = 'character-label';
  label.innerHTML = `
    <div class="character-label__name">VEXO</div>
    <div class="character-label__hint">Drag to turn · ↑ ↓ to tilt</div>
  `;
  document.body.appendChild(label);

  function update(dt) {
    if (manualHold > 0) manualHold -= dt;
    else if (!dragging) spin += TURNTABLE_SPEED * dt;
    table.rotation.y = spin;
    // A loaded model drives its own bones through an AnimationMixer;
    // the primitive build breathes by hand. Same call either way.
    figure.update(dt);
  }

  function render() {
    renderer.render(scene, camera);
  }

  function onResize(width = window.innerWidth, height = window.innerHeight) {
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  }

  return {
    update,
    render,
    onResize,
    /** Put the renderer back the way the game likes it. */
    dispose() {
      disposed = true;
      renderer.toneMapping = previousToneMapping;
      renderer.toneMappingExposure = previousExposure;
      renderer.outputColorSpace = previousColorSpace;
      renderer.shadowMap.enabled = previousShadows;
      renderer.shadowMap.type = previousShadowType;
      if (figure !== vexo) figure.dispose?.();
      scene.environment?.dispose();
    },
    /** Set the turntable to an exact angle — used by the contact sheet. */
    setAngle(radians) {
      spin = radians;
      manualHold = Infinity;
      table.rotation.y = spin;
    },
    /** Whoever is on the pedestal — primitive Vexo, or the loaded model. */
    get vexo() { return figure; },
  };
}
