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
import * as THREE from 'three';
import { createVexo, VEXO_HEIGHT } from './world/vexo.js';

const TURNTABLE_SPEED = 0.45;   // radians per second
const RESUME_DELAY_S = 1.5;     // how long a hand-spin holds before it drifts on

export function createCharacterViewer({ renderer }) {
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x0a0e16);

  const camera = new THREE.PerspectiveCamera(38, window.innerWidth / window.innerHeight, 0.05, 100);

  // Studio lighting: a warm key from the front-left, a cool fill from
  // the right, and a hard rim from behind that picks the armour's edges
  // out of the dark background.
  scene.add(new THREE.HemisphereLight(0x6f8dab, 0x0e1218, 0.85));
  const key = new THREE.DirectionalLight(0xfff2e2, 3.1);
  key.position.set(-2.5, 3.2, 3.4);
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
    vexo.update(dt);
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
    /** Set the turntable to an exact angle — used by the contact sheet. */
    setAngle(radians) {
      spin = radians;
      manualHold = Infinity;
      table.rotation.y = spin;
    },
    vexo,
  };
}
