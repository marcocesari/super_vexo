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
// Laid out the way Tears of the Kingdom lays its pause menu out: a row
// of tabs, and the LAST one on the right is System, whose first entry is
// Save. That is where a TotK player's thumb goes — hold R to the end of
// the row and the cog is waiting — so that is where the save button
// belongs here too.
//
// And driven the way TotK drives it. The left stick (or the D-pad, or
// the arrow keys) is a cursor with two rows to be in: the tabs, where
// left and right change the category, and the list below them, where
// up and down pick a thing. Down off the tabs drops into the list; up
// off the top of the list climbs back to the tabs. L and R change the
// category from anywhere. A takes the thing under the cursor. The stick
// is NOT for turning Vexo — that is its click, L3, which sets him
// spinning until B holds him.
//
// Weapons, Items, the Tablet and System; the row is built from a list so
// the tabs TotK has and this game doesn't yet (armour, key items) can be
// dropped in beside them.
//
// Items is everything he has collected. Nothing in this game is picked
// up off the ground — what he collects, he buys: perks from the shops
// in Estronic and upgrades from the Tablet — so the page is read from
// those two ledgers, live, each time it is drawn. That way a thing
// bought a moment ago is on the list without anybody having to remember
// to put it there.
import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { createVexo, VEXO_HEIGHT } from './world/vexo.js';
import { strings } from './strings.js';

const TURN_RATE = 2.2;          // radians per second on the stick or keys
const DRAG_SCALE = 0.011;       // radians per pixel dragged
// How fast he goes round once set spinning. Slower than the stick:
// this is for looking, not for getting to the other side.
const SPIN_RATE = 0.9;

// Only the buttons this screen uses, rather than importing the whole
// pad map for them.
const BUTTONS_A = 0;
const BUTTONS_X = 2;
const BUTTONS_L1 = 4;
const BUTTONS_R1 = 5;
const BUTTONS_UP = 12;
const BUTTONS_DOWN = 13;
const BUTTONS_LEFT = 14;
const BUTTONS_RIGHT = 15;

// The left stick read as a D-pad. A push past the first counts as one
// press; it has to come back inside the second before it can count
// again, so a stick wobbling around the line does not stutter through
// the list. Held over, it repeats, as TotK's does.
const STICK_PRESS = 0.55;
const STICK_RELEASE = 0.3;
const REPEAT_AFTER_S = 0.4;
const REPEAT_EVERY_S = 0.13;

export function createInventory({
  renderer, input, saves = null, tablet = null, onSetUpController = null,
  music = null, collected = null,
}) {
  // --- The panel ---------------------------------------------------------------
  const root = document.createElement('div');
  root.id = 'inventory';
  root.className = 'screen-overlay';
  root.hidden = true;
  root.innerHTML = `
    <div class="inventory__panel">
      <div class="inventory__list">
        <h2 class="screen-card__title">${strings.inventory.title}</h2>
        <div class="inventory__tabs" data-tabs></div>
        <ul class="inventory__items" data-items></ul>
        <div class="inventory__tablet" data-tablet hidden></div>
        <div class="inventory__system" data-system hidden>
          <button class="inventory__save" data-save>${strings.inventory.save}</button>
          <p class="inventory__saved" data-saved></p>
          <button class="inventory__controller" data-music></button>
          <p class="inventory__saved">${strings.inventory.musicNote}</p>
          <button class="inventory__controller" data-controller>${strings.inventory.controller}</button>
          <p class="inventory__saved" data-pad></p>
        </div>
        <p class="screen-card__hint">${strings.inventory.hint}</p>
      </div>
      <div class="inventory__figure">
        <p class="inventory__figure-hint">${strings.inventory.turnHint}</p>
      </div>
    </div>
  `;
  document.body.appendChild(root);
  const itemsEl = root.querySelector('[data-items]');
  const tabsEl = root.querySelector('[data-tabs]');
  const systemEl = root.querySelector('[data-system]');
  const tabletEl = root.querySelector('[data-tablet]');
  const saveBtn = root.querySelector('[data-save]');
  const savedEl = root.querySelector('[data-saved]');
  const musicBtn = root.querySelector('[data-music]');
  const controllerBtn = root.querySelector('[data-controller]');
  const padEl = root.querySelector('[data-pad]');
  const figureEl = root.querySelector('.inventory__figure');

  // The row. System is last on purpose — see the note at the top.
  // The Tablet is a page of this screen now rather than an overlay with
  // its own button — "the tablet is the inventory". Its contents still
  // belong to hud.js; this only decides where they are shown.
  const TABS = [
    { id: 'weapons', label: strings.inventory.weapons },
    ...(collected ? [{ id: 'items', label: strings.inventory.items }] : []),
    ...(tablet ? [{ id: 'tablet', label: strings.inventory.tablet }] : []),
    { id: 'system', label: strings.inventory.system },
  ];
  if (tablet) {
    tabletEl.appendChild(tablet);
    tablet.style.display = '';
  }
  let tab = 0;

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
  // Set going by clicking the left stick, stopped by B. He does NOT
  // turn on his own: a figure that drifts round unasked is a figure you
  // are forever waiting to come back to the side you were looking at.
  let spinning = false;
  let dragging = false;
  let lastX = 0;

  // --- Turning him ------------------------------------------------------------
  function onDown(e) {
    if (!open) return;
    dragging = true;
    spinning = false;
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

  function drawTabs() {
    tabsEl.innerHTML = '';
    for (const [i, t] of TABS.entries()) {
      const el = document.createElement('span');
      el.className = i === tab ? 'inventory__tab inventory__tab--on' : 'inventory__tab';
      el.textContent = t.label;
      el.addEventListener('click', () => { tab = i; focus = 'tabs'; cursor = 0; drawTabs(); draw(); });
      tabsEl.appendChild(el);
    }
  }

  /** Move along the row, TotK's L and R. */
  function step(by) {
    tab = (tab + by + TABS.length) % TABS.length;
    cursor = 0;
    drawTabs();
    draw();
    // A page with nothing to pick from (the Tablet, an empty list) has
    // nowhere below the tabs to be.
    if (!rows().length) focus = 'tabs';
    drawFocus();
  }

  // --- The cursor ---------------------------------------------------------------
  /** Which row of the screen the cursor is in. */
  let focus = 'tabs';
  /** Which entry of the list, when it is in the list. */
  let cursor = 0;
  let stickHeld = null;     // the direction the stick is being held in
  let stickHeldFor = 0;
  let stickRepeatAt = 0;

  /** What there is to pick from on this page, top to bottom. */
  function rows() {
    const page = TABS[tab].id;
    if (page === 'system') return [saveBtn, musicBtn, controllerBtn];
    if (page === 'tablet') return [];
    return [...itemsEl.querySelectorAll('.inventory__item:not(.inventory__item--empty)')];
  }

  function drawFocus() {
    tabsEl.classList.toggle('inventory__tabs--focus', focus === 'tabs');
    const list = rows();
    for (const [i, el] of list.entries()) {
      const on = focus === 'list' && i === cursor;
      el.classList.toggle('is-picked', on);
      if (on) el.scrollIntoView?.({ block: 'nearest' });
    }
  }

  /** One press of the cursor: 'up', 'down', 'left' or 'right'. */
  function move(dir) {
    const list = rows();
    if (focus === 'tabs') {
      if (dir === 'left') return step(-1);
      if (dir === 'right') return step(1);
      if (dir === 'down' && list.length) { focus = 'list'; cursor = 0; }
    } else {
      if (dir === 'up') {
        if (cursor > 0) cursor -= 1;
        else focus = 'tabs';
      }
      if (dir === 'down') cursor = Math.min(cursor + 1, list.length - 1);
      // Left and right do nothing down here, as in TotK's grid: the
      // categories are reached by going up to them, or with L and R.
    }
    drawFocus();
  }

  /** A: take what is under the cursor. On the tabs it drops into the list. */
  function activate() {
    if (focus === 'tabs') return move('down');
    rows()[cursor]?.click();
  }

  /**
   * The stick as presses. Returns a direction on the frame it crosses
   * the line, then again every so often for as long as it is held.
   */
  function stickPress(dt) {
    const s = input.gamepad.stick;
    if (!s) { stickHeld = null; return null; }
    const mag = Math.max(Math.abs(s.x), Math.abs(s.y));
    if (stickHeld) {
      if (mag < STICK_RELEASE) { stickHeld = null; return null; }
      stickHeldFor += dt;
      if (stickHeldFor >= stickRepeatAt) {
        stickRepeatAt += REPEAT_EVERY_S;
        return stickHeld;
      }
      return null;
    }
    if (mag < STICK_PRESS) return null;
    // +x is LEFT and +y is UP, the way the flight axes are signed.
    stickHeld = Math.abs(s.x) > Math.abs(s.y)
      ? (s.x > 0 ? 'left' : 'right')
      : (s.y > 0 ? 'up' : 'down');
    stickHeldFor = 0;
    stickRepeatAt = REPEAT_AFTER_S;
    return stickHeld;
  }

  /** Every way of pressing a direction this frame, or null. */
  function readDirection(dt) {
    const kb = input.keyboard;
    const pad = input.gamepad;
    let dir = null;
    if (kb.consumeJustPressed(['ArrowUp']) || pad.consumeJustPressed(BUTTONS_UP)) dir = 'up';
    if (kb.consumeJustPressed(['ArrowDown']) || pad.consumeJustPressed(BUTTONS_DOWN)) dir = 'down';
    if (kb.consumeJustPressed(['ArrowLeft']) || pad.consumeJustPressed(BUTTONS_LEFT)) dir = 'left';
    if (kb.consumeJustPressed(['ArrowRight']) || pad.consumeJustPressed(BUTTONS_RIGHT)) dir = 'right';
    return dir ?? stickPress(dt);
  }

  function draw() {
    const page = TABS[tab].id;
    itemsEl.hidden = page !== 'weapons' && page !== 'items';
    systemEl.hidden = page !== 'system';
    tabletEl.hidden = page !== 'tablet';
    if (page === 'system') {
      savedEl.textContent = savedNote();
      padEl.textContent = padNote();
      musicBtn.textContent = musicLabel();
      drawFocus();
      return;
    }
    if (page === 'tablet') return;
    if (page === 'items') drawList(collected(), strings.inventory.nothingCollected, true);
    else drawList(items, strings.inventory.empty, false);
    drawFocus();
  }

  /**
   * Fill the list. Weapons and Items are the same kind of page — a name
   * and a line about it — so they share one, with `loot` marking the
   * things he has collected: those may stack ("×2"), and their notes are
   * sentences rather than the one-word tag a weapon carries.
   */
  function drawList(list, emptyText, loot) {
    itemsEl.innerHTML = '';
    for (const item of list) {
      const li = document.createElement('li');
      li.className = 'inventory__item'
        + (item.held ? ' inventory__item--held' : '')
        + (loot ? ' inventory__item--loot' : '');
      const count = (item.count ?? 1) > 1
        ? `<span class="inventory__item-count">${strings.inventory.count.replace('{n}', String(item.count))}</span>`
        : '';
      li.innerHTML = `
        <span class="inventory__item-name">${item.name}${count}</span>
        <span class="inventory__item-note">${item.note}</span>
      `;
      itemsEl.appendChild(li);
    }
    if (!list.length) {
      const li = document.createElement('li');
      li.className = 'inventory__item inventory__item--empty';
      li.textContent = emptyText;
      itemsEl.appendChild(li);
    }
  }

  /** "Saved a moment ago", or what there is to say about it. */
  function savedNote() {
    const latest = saves?.latest;
    if (!latest) return strings.inventory.neverSaved;
    const ago = Math.max(0, Date.now() - latest.at);
    if (ago < 8000) return strings.inventory.savedJustNow;
    const mins = Math.round(ago / 60000);
    return mins < 1
      ? strings.inventory.savedSecondsAgo
      : strings.inventory.savedMinutesAgo.replace('{n}', String(mins));
  }

  /**
   * What controller the game is reading, and whether it thinks it knows
   * where the sticks are. Worth saying out loud on the same page as the
   * setup button: a player who is here because a stick does nothing
   * wants to know the game can see the pad at all.
   */
  function padNote() {
    const pad = input.gamepad;
    if (!pad.padId) return strings.inventory.controllerNone;
    const line = pad.isCalibrated
      ? strings.inventory.controllerCalibrated
      : (pad.isStandard ? strings.inventory.controllerStandard : strings.inventory.controllerUnknown);
    return line.replace('{id}', pad.padId);
  }

  /** MUSIC: ON / LOW / OFF, as the score is currently set. */
  function musicLabel() {
    const choice = music?.choice() ?? 'on';
    const named = {
      on: strings.inventory.musicOn,
      low: strings.inventory.musicLow,
      off: strings.inventory.musicOff,
    }[choice] ?? choice.toUpperCase();
    return strings.inventory.music.replace('{state}', named);
  }

  /** Step the score on to its next setting and say so on the button. */
  function stepMusic() {
    music?.cycle();
    musicBtn.textContent = musicLabel();
  }

  musicBtn.addEventListener('click', stepMusic);
  controllerBtn.addEventListener('click', () => { onSetUpController?.(); });

  saveBtn.addEventListener('click', () => {
    const ok = saves?.saveManual();
    savedEl.textContent = ok ? strings.inventory.savedJustNow : strings.inventory.saveFailed;
  });

  return {
    get isOpen() { return open; },

    /** @param {{name: string, note: string, held?: boolean}[]} list */
    setItems(list) {
      items = list.map((i) => ({ held: false, ...i }));
      draw();
    },

    /** Which tab is showing, for tests. */
    get tab() { return TABS[tab].id; },
    /** Where the cursor is — 'tabs' or 'list' — and which entry, for tests. */
    get focus() { return focus; },
    get cursor() { return cursor; },

    toggle() { return open ? this.close() : this.show(); },

    show() {
      open = true;
      root.hidden = false;
      spinning = false;
      focus = 'tabs';
      cursor = 0;
      stickHeld = null;
      // Facing the player, and staying there until told otherwise.
      spin = 0;
      // Holding the gun, but NOT aiming it: the point of the screen is
      // to see what he has, and a man with his arm out straight in a
      // menu looks like he is about to shoot the furniture.
      vexo.setArmed(true, false);
      drawTabs();
      draw();
      vexo.setGait('idle');
      return true;
    },

    close() {
      open = false;
      root.hidden = true;
      dragging = false;
      spinning = false;
      vexo.setArmed(false);
      return false;
    },

    /** Whether he is going round on his own just now. */
    get spinning() { return spinning; },
    /** Set him turning — the left stick's click. */
    startSpin() { if (open) spinning = true; },
    /** And hold him where he is — B. */
    stopSpin() { spinning = false; },

    /** The cursor, the shoulder buttons, and turning him. */
    update(dt) {
      if (!open) return;
      // Along the tabs from anywhere: the shoulder buttons, as in TotK.
      if (input.gamepad.consumeJustPressed(BUTTONS_R1)) step(1);
      if (input.gamepad.consumeJustPressed(BUTTONS_L1)) step(-1);
      // The cursor: stick, D-pad or arrows.
      const dir = readDirection(dt);
      if (dir) move(dir);
      // A, or Enter / E, takes what the cursor is on — Save, if that is
      // where it stands. X is still the music from anywhere on the
      // System page, being the other thing on it anybody reaches for.
      if (input.gamepad.consumeJustPressed(BUTTONS_A)
          || input.keyboard.consumeJustPressed(['Enter', 'KeyE'])) {
        activate();
      }
      if (TABS[tab].id === 'system'
          && input.gamepad.consumeJustPressed(BUTTONS_X)) {
        stepMusic();
      }

      // A pad only becomes visible to the browser once a button on it
      // is pressed, which may well happen while this page is open — so
      // the line about it is re-read rather than drawn once.
      if (TABS[tab].id === 'system') {
        const note = padNote();
        if (note !== padEl.textContent) padEl.textContent = note;
      }

      // Turning him by hand — A / D, for anyone without a pad — takes
      // over from the spin, so a nudge to look at one side does not
      // have to be fought for.
      const turn = (input.keyboard.isDown('KeyA') ? 1 : 0)
        - (input.keyboard.isDown('KeyD') ? 1 : 0);
      if (turn) {
        spinning = false;
        spin += turn * TURN_RATE * dt;
      } else if (spinning) {
        spin += SPIN_RATE * dt;
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
