// The inventory.
//
// Opened with E, or "+" on a pad. Two halves: what he is carrying down
// the left, and Vexo himself on the right, turnable so you can look at
// the kit on him from any side.
//
// The figure is a REAL Vexo in a real scene, rendered through the game's
// own renderer into a scissored corner of the canvas — the same trick
// the turntable (`?character=1`) uses, for the same reason: he is a
// three-dimensional character and a flat picture of him would go stale
// the first time anything about him changed. He is a separate instance
// from the one walking about in the town, so opening the inventory can
// never disturb what the game is doing.
//
// Only weapons for now. The panel is built as a list so that armour,
// upgrades and whatever else follows can be tabs beside it later.
import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { createVexo, VEXO_HEIGHT } from './world/vexo.js';
import { strings } from './strings.js';

const TURN_RATE = 2.2;          // radians per second on the stick or keys
const DRAG_SCALE = 0.011;       // radians per pixel dragged
const SPIN_IDLE = 0.25;         // he turns slowly on his own until touched

export function createInventory({ renderer, input }) {
  // --- The panel ---------------------------------------------------------------
  const root = document.createElement('div');
  root.id = 'inventory';
  root.className = 'screen-overlay';
  root.hidden = true;
  root.innerHTML = `
    <div class="inventory__panel">
      <div class="inventory__list">
        <h2 class="screen-card__title">${strings.inventory.title}</h2>
        <div class="inventory__tabs">
          <span class="inventory__tab inventory__tab--on">${strings.inventory.weapons}</span>
        </div>
        <ul class="inventory__items" data-items></ul>
        <p class="screen-card__hint">${strings.inventory.hint}</p>
      </div>
      <div class="inventory__figure">
        <p class="inventory__figure-hint">${strings.inventory.turnHint}</p>
      </div>
    </div>
  `;
  document.body.appendChild(root);
  const itemsEl = root.querySelector('[data-items]');
  const figureEl = root.querySelector('.inventory__figure');

  // --- The figure ----------------------------------------------------------------
  const scene = new THREE.Scene();
  scene.background = null;
  const camera = new THREE.PerspectiveCamera(32, 1, 0.05, 40);

  // Something for his armour to reflect, as in the turntable: 0.62 metal
  // with nothing to reflect renders as a silhouette.
  const pmrem = new THREE.PMREMGenerator(renderer);
  const environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
  pmrem.dispose();

  scene.add(new THREE.HemisphereLight(0x7f9ec0, 0x121820, 0.9));
  const key = new THREE.DirectionalLight(0xfff3e4, 2.2);
  key.position.set(-2, 3, 3.2);
  scene.add(key);
  const rim = new THREE.DirectionalLight(0x9effd0, 1.1);
  rim.position.set(1.4, 2, -3);
  scene.add(rim);

  const turntable = new THREE.Group();
  scene.add(turntable);
  const vexo = createVexo({ suitLight: false, environment });
  turntable.add(vexo.group);
  // Carrying what he carries: the inventory should show the gun in his
  // hand, not on his hip, since that is the thing being looked at.
  vexo.setArmed(false);

  // Framed in `render`, where the shape of the box is known: a tall
  // narrow panel and a short wide one need him at different distances,
  // and hard-coding one of them crops his boots off in the other.
  const FIT_HEIGHT = VEXO_HEIGHT * 1.22;   // him, with a little air
  function frame(aspect) {
    const vFov = (camera.fov * Math.PI) / 180;
    const byHeight = (FIT_HEIGHT / 2) / Math.tan(vFov / 2);
    const byWidth = (VEXO_HEIGHT * 0.42) / (Math.tan(vFov / 2) * aspect);
    const dist = Math.max(byHeight, byWidth);
    camera.position.set(0, VEXO_HEIGHT * 0.52, dist);
    camera.lookAt(0, VEXO_HEIGHT * 0.5, 0);
  }
  frame(0.75);

  const _wasClear = new THREE.Color();

  let open = false;
  let spin = 0;
  let idleSpin = true;
  let dragging = false;
  let lastX = 0;

  // --- Turning him ------------------------------------------------------------
  function onDown(e) {
    if (!open) return;
    dragging = true;
    idleSpin = false;
    lastX = e.clientX;
  }
  function onMove(e) {
    if (!dragging) return;
    spin += (e.clientX - lastX) * DRAG_SCALE;
    lastX = e.clientX;
  }
  function onUp() { dragging = false; }
  figureEl.addEventListener('pointerdown', onDown);
  window.addEventListener('pointermove', onMove);
  window.addEventListener('pointerup', onUp);

  // --- The list -----------------------------------------------------------------
  /** @type {{name: string, note: string, held: boolean}[]} */
  let items = [];

  function draw() {
    itemsEl.innerHTML = '';
    for (const item of items) {
      const li = document.createElement('li');
      li.className = item.held ? 'inventory__item inventory__item--held' : 'inventory__item';
      li.innerHTML = `
        <span class="inventory__item-name">${item.name}</span>
        <span class="inventory__item-note">${item.note}</span>
      `;
      itemsEl.appendChild(li);
    }
    if (!items.length) {
      const li = document.createElement('li');
      li.className = 'inventory__item inventory__item--empty';
      li.textContent = strings.inventory.empty;
      itemsEl.appendChild(li);
    }
  }

  return {
    get isOpen() { return open; },

    /** @param {{name: string, note: string, held?: boolean}[]} list */
    setItems(list) {
      items = list.map((i) => ({ held: false, ...i }));
      draw();
    },

    toggle() { return open ? this.close() : this.show(); },

    show() {
      open = true;
      root.hidden = false;
      idleSpin = true;
      // Facing the player, then drifting round on his own until somebody
      // takes hold of him.
      spin = 0;
      // Holding the gun, but NOT aiming it: the point of the screen is
      // to see what he has, and a man with his arm out straight in a
      // menu looks like he is about to shoot the furniture.
      vexo.setArmed(true, false);
      vexo.setGait('idle');
      return true;
    },

    close() {
      open = false;
      root.hidden = true;
      dragging = false;
      vexo.setArmed(false);
      return false;
    },

    /** Turned by the stick and the keys as well as by dragging. */
    update(dt, axes) {
      if (!open) return;
      const stick = (axes?.stickYaw ?? axes?.yaw ?? 0);
      const keys = (input.keyboard.isDown('KeyA') ? 1 : 0)
        - (input.keyboard.isDown('KeyD') ? 1 : 0);
      const turn = stick || keys;
      if (turn) {
        idleSpin = false;
        spin += turn * TURN_RATE * dt;
      } else if (idleSpin && !dragging) {
        spin += SPIN_IDLE * dt;
      }
      turntable.rotation.y = spin;
      vexo.update(dt);
    },

    /**
     * Draw him into the right-hand side of the canvas.
     *
     * Scissored rather than a second canvas: a WebGL context is an
     * expensive thing to own, and the game already has one. The viewport
     * is taken from where the panel's right half actually is, so the
     * figure lines up with the box drawn for him however the window is
     * shaped.
     */
    render() {
      if (!open) return;
      const box = figureEl.getBoundingClientRect();
      if (box.width < 8 || box.height < 8) return;
      const dpr = renderer.getPixelRatio();
      const size = renderer.getSize(new THREE.Vector2());
      const x = box.left * dpr;
      // WebGL counts from the bottom of the canvas, the DOM from the top.
      const y = size.height * dpr - (box.bottom * dpr);
      const w = box.width * dpr;
      const h = box.height * dpr;

      camera.aspect = box.width / box.height;
      camera.updateProjectionMatrix();
      frame(camera.aspect);

      const hadScissor = renderer.getScissorTest();
      renderer.setScissorTest(true);
      renderer.setViewport(x / dpr, y / dpr, w / dpr, h / dpr);
      renderer.setScissor(x / dpr, y / dpr, w / dpr, h / dpr);
      const hadAutoClear = renderer.autoClear;
      renderer.autoClear = false;
      // Paint this rectangle's backdrop HERE rather than in CSS: the
      // canvas sits under the whole document, so a background on the
      // DOM box would cover the figure instead of sitting behind him.
      renderer.getClearColor(_wasClear);
      const wasAlpha = renderer.getClearAlpha();
      renderer.setClearColor(0x0a1622, 1);
      renderer.clear(true, true, false);
      renderer.setClearColor(_wasClear, wasAlpha);
      renderer.render(scene, camera);
      renderer.autoClear = hadAutoClear;
      renderer.setScissorTest(hadScissor);
      // Hand the full canvas back, or the next game frame draws into the
      // corner this one used.
      renderer.setViewport(0, 0, size.width, size.height);
      renderer.setScissor(0, 0, size.width, size.height);
    },

    /** For tests. */
    vexo,
  };
}
