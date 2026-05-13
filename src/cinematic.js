// Opening cinematic: a parallel Three.js scene played before the title.
// Six beats, ~20s total, skippable. Caller observes `cinematic.active`
// to detect completion.

import * as THREE from 'three';
import { strings } from './strings.js';
import { createKingdomPlanet } from './world/kingdomPlanet.js';
import { createDraxosShip } from './world/draxosShip.js';
import { createStarfield, updateStarfield } from './world/starfield.js';

// --- Easing ----------------------------------------------------------------
// All inputs in [0, 1], outputs in [0, 1].
const smoothstep = (t) => t * t * (3 - 2 * t);
const easeInOutCubic = (t) => (t < 0.5
  ? 4 * t * t * t
  : 1 - Math.pow(-2 * t + 2, 3) / 2);

// Each beat: how long it stays on screen, and an `update(local01, scene)`
// fn that animates the 3D vignette.
const BEAT_DURATIONS = [3.5, 3.0, 4.0, 4.0, 3.5, 4.5]; // seconds, sums to 22.5

export function createCinematic({ renderer }) {
  // --- Cinematic scene ---------------------------------------------------
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x010207);

  const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 5000);
  camera.position.set(0, 8, 140);
  camera.lookAt(0, 0, 0);

  scene.add(new THREE.HemisphereLight(0x9ac0e0, 0x101020, 0.7));
  const sun = new THREE.DirectionalLight(0xfff2d8, 1.1);
  sun.position.set(50, 30, 80);
  scene.add(sun);

  const starfield = createStarfield();
  scene.add(starfield);

  const kingdom = createKingdomPlanet();
  scene.add(kingdom.mesh);

  const draxos = createDraxosShip();
  draxos.group.position.set(200, 30, 30); // off-screen at first
  draxos.group.rotation.y = -0.6;         // angled toward planet
  scene.add(draxos.group);

  // Abduction beam — a stretched cone with additive material.
  const beamMat = new THREE.MeshBasicMaterial({
    color: 0xff5040,
    transparent: true,
    opacity: 0,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    side: THREE.DoubleSide,
  });
  const beam = new THREE.Mesh(new THREE.ConeGeometry(2, 60, 16, 1, true), beamMat);
  // The cone points along -Y. Rotate it so it points from the ship
  // toward the planet (we'll compute orientation each frame).
  beam.rotation.x = Math.PI;
  scene.add(beam);

  // --- DOM overlay (text + skip hint) -------------------------------------
  const overlay = document.createElement('div');
  overlay.id = 'cinematic';
  overlay.innerHTML = `
    <div class="cinematic__skip" data-skip>${strings.intro.skip}</div>
    <div class="cinematic__text" data-text></div>
    <div class="cinematic__flash" data-flash></div>
  `;
  document.body.appendChild(overlay);
  const elText = overlay.querySelector('[data-text]');
  const elFlash = overlay.querySelector('[data-flash]');

  let beatIndex = 0;
  let beatElapsed = 0; // seconds in current beat
  let totalElapsed = 0;
  let active = true;
  let textNeedsUpdate = true;

  // ------------------ Per-beat 3D animation ------------------------------

  function updateBeat(idx, local01, dt) {
    switch (idx) {
      case 0: { // "Long ago…" — planet front and center, slow drift
        kingdom.mesh.position.set(0, 0, 0);
        kingdom.mesh.scale.setScalar(1 + 0.02 * Math.sin(totalElapsed * 0.5));
        draxos.group.position.x = 200;
        beam.material.opacity = 0;
        break;
      }
      case 1: { // "Peace" — small camera pan
        kingdom.mesh.position.set(0, 0, 0);
        camera.position.x = -10 + 20 * easeInOutCubic(local01);
        camera.lookAt(0, 0, 0);
        break;
      }
      case 2: { // "Until Lord Draxos came" — ship slides in from the right
        // Pull the camera in so Draxos reads at a recognisable size.
        const camZ = 140 + (95 - 140) * smoothstep(local01);
        camera.position.set(0, 8, camZ);
        camera.lookAt(0, 0, 0);
        const start = 140;
        const end = 38;
        draxos.group.position.x = start + (end - start) * smoothstep(local01);
        draxos.group.position.z = 30 - 10 * smoothstep(local01);
        // Rotate the ship to face the planet as it arrives.
        draxos.group.rotation.y = -0.6 - 0.4 * smoothstep(local01);
        break;
      }
      case 3: { // "He kidnapped Princess Astra" — abduction beam fires
        camera.position.set(0, 8, 95);
        draxos.group.position.x = 38;
        draxos.group.position.z = 20;
        draxos.group.rotation.y = -1.0;
        // Pulse the beam in.
        beam.material.opacity = 0.4 + 0.35 * Math.sin(totalElapsed * 12);
        // Place the beam halfway between ship and planet, oriented along it.
        const from = draxos.group.position;
        const to = kingdom.mesh.position;
        beam.position.set((from.x + to.x) / 2, (from.y + to.y) / 2, (from.z + to.z) / 2);
        beam.lookAt(to);
        beam.rotateX(Math.PI / 2); // cone's axis is +Y by default
        // Slight camera shake while the beam is firing.
        camera.position.x = Math.sin(totalElapsed * 30) * 0.4;
        camera.position.y = 8 + Math.cos(totalElapsed * 27) * 0.3;
        camera.position.z = 95;
        camera.lookAt(0, 0, 0);
        break;
      }
      case 4: { // "And vanished into deep space" — warp flash + vanish
        // Keep Draxos visible during the flash build-up — he hasn't warped yet.
        draxos.group.position.x = 38;
        draxos.group.position.z = 20;
        camera.position.set(0, 8, 95);
        camera.lookAt(0, 0, 0);
        // Whiteout in the second half.
        if (local01 < 0.5) {
          elFlash.style.opacity = String(local01 * 2 * 0.95);
          beam.material.opacity = 0.35 * (1 - local01 * 2);
        } else {
          // Both objects gone; flash fading.
          draxos.group.visible = false;
          kingdom.mesh.visible = false;
          beam.material.opacity = 0;
          elFlash.style.opacity = String(Math.max(0, 1 - (local01 - 0.5) * 2));
        }
        break;
      }
      case 5: { // "Vexo gets the Tablet. Can you save her?"
        // Calm everything; nothing to animate beyond the text.
        elFlash.style.opacity = '0';
        break;
      }
    }
  }

  function setText(content) {
    elText.innerHTML = content.split('\n').map((p) => `<p>${p}</p>`).join('');
    elText.classList.remove('cinematic__text--in');
    // Force reflow so the next class change re-triggers the fade.
    void elText.offsetWidth;
    elText.classList.add('cinematic__text--in');
  }

  function advanceBeat() {
    beatIndex += 1;
    beatElapsed = 0;
    textNeedsUpdate = true;
    if (beatIndex >= BEAT_DURATIONS.length) {
      finish();
    }
  }

  function finish() {
    if (!active) return;
    active = false;
    overlay.remove();
    scene.traverse((node) => {
      if (node.geometry) node.geometry.dispose();
      const mats = Array.isArray(node.material) ? node.material : (node.material ? [node.material] : []);
      for (const m of mats) {
        if (m.map) m.map.dispose();
        m.dispose();
      }
    });
  }

  function skip() {
    finish();
  }

  function update(dt) {
    if (!active) return;
    totalElapsed += dt;
    beatElapsed += dt;
    if (textNeedsUpdate) {
      setText(strings.intro.beats[beatIndex]);
      textNeedsUpdate = false;
    }
    const local01 = Math.min(1, beatElapsed / BEAT_DURATIONS[beatIndex]);
    updateBeat(beatIndex, local01, dt);
    kingdom.update(dt);
    draxos.halo.material.opacity = 0.7 + 0.25 * Math.sin(totalElapsed * 4);
    updateStarfield(starfield, camera);

    if (beatElapsed >= BEAT_DURATIONS[beatIndex]) {
      advanceBeat();
    }
  }

  function render() {
    if (!active) return;
    renderer.render(scene, camera);
  }

  function onResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
  }

  return {
    update,
    render,
    skip,
    onResize,
    get active() { return active; },
  };
}
