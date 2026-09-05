// The map: the whole world on one screen, on M or "−".
//
// Marco asked for "the full map, every single inch of the world" — which
// is why the world was given edges to have a last inch of. It is one
// continent, 130 km by 86 km, and this draws all of it: not a picture
// made once and saved, but the same terrain rules the ground itself is
// built from, run over the whole world (see world/mapImage.js).
//
// That takes a couple of seconds, which is far too long to do between
// two frames, so it is drawn a few rows at a time from the moment the
// game loads. By the time anyone presses M it has been ready for
// minutes; press it sooner and you watch the world appear.
import { strings } from './strings.js';
import { createMapDrawing } from './world/mapImage.js';
import { WORLD_HALF_X, WORLD_HALF_Z } from './world/terrain.js';

// How big the drawing is, in pixels. 133 m of ground to a pixel: fine
// enough to make out a river valley, coarse enough to finish quickly.
const MAP_W = 900;
const MAP_H = Math.round((MAP_W * WORLD_HALF_Z) / WORLD_HALF_X);
// How long a frame may spend drawing the map while the game is running.
const BUDGET_MS = 2.5;

const YOU = '#7dff9f';
const SHIP = '#8fd0ff';

// How far in the map will go. At ×8 a pixel of the drawing is eighteen
// metres of ground, which is about as far as it is worth stretching a
// picture drawn at 144 m to the pixel — past that you are looking at
// the pixels rather than at the world.
const ZOOM_MAX = 8;
// Doublings per second at full stick. A little over one, so a flick of
// the stick nudges it and a held stick crosses the whole range in about
// three seconds.
const ZOOM_RATE = 1.15;

export function createMap({ world }) {
  const root = document.createElement('div');
  root.id = 'map-screen';
  root.hidden = true;
  root.innerHTML = `
    <div class="map-panel">
      <div class="map-head">
        <span class="map-title">${strings.map.title}</span>
        <span class="map-scale" data-scale></span>
      </div>
      <div class="map-frame">
        <canvas class="map-canvas" data-canvas></canvas>
        <p class="map-building" data-building></p>
        <div class="map-zoom">
          <button class="map-zoom__btn" data-in type="button" aria-label="zoom in">+</button>
          <div class="map-zoom__bar"><div class="map-zoom__fill" data-fill></div></div>
          <button class="map-zoom__btn" data-out type="button" aria-label="zoom out">&minus;</button>
        </div>
      </div>
      <p class="screen-card__hint">${strings.map.hint}</p>
    </div>
  `;
  document.body.appendChild(root);
  const canvas = root.querySelector('[data-canvas]');
  const buildingEl = root.querySelector('[data-building]');
  const fillEl = root.querySelector('[data-fill]');
  const scaleEl = root.querySelector('[data-scale]');
  const ctx = canvas.getContext('2d');

  const scaleText = strings.map.scale
    .replace('{km}', Math.round((WORLD_HALF_X * 2) / 1000))
    .replace('{kmZ}', Math.round((WORLD_HALF_Z * 2) / 1000))
    .replace('{m}', Math.round((WORLD_HALF_X * 2) / MAP_W));
  scaleEl.textContent = scaleText;

  // The world is drawn once into a canvas of its own at its own size,
  // and copied onto the screen whenever anything moves. Redrawing the
  // continent to move an arrow would be absurd.
  const sheet = document.createElement('canvas');
  sheet.width = MAP_W;
  sheet.height = MAP_H;
  const sheetCtx = sheet.getContext('2d');
  const image = sheetCtx.createImageData(MAP_W, MAP_H);

  const drawing = createMapDrawing({
    terrain: world.terrain,
    width: MAP_W,
    height: MAP_H,
    minX: -WORLD_HALF_X,
    maxX: WORLD_HALF_X,
    minZ: -WORLD_HALF_Z,
    maxZ: WORLD_HALF_Z,
  });

  // The + and − beside the bar, and the mouse wheel over the map. The
  // stick is what Marco asked for; these are so that nobody can be
  // holding the map open wondering whether the zoom is there at all.
  let open = false;
  let you = null;
  let ship = null;
  let dirty = true;
  // 1 is the whole continent on the screen at once, which is where it
  // starts and what the map is for. Zoomed in, the view follows the
  // player: an arrow you cannot find is worse than no arrow.
  let zoom = 1;
  // How far the view has been pushed off the player, in metres. Zoomed
  // in, the right stick scrolls the map the way it does in Tears of the
  // Kingdom — you look at where you are going, not only at where you
  // are. Zooming back out to the whole world forgets it.
  let panX = 0;
  let panZ = 0;

  /** Keep drawing the world in the background until it is finished. */
  function keepDrawing() {
    const started = performance.now();
    while (!drawing.done && performance.now() - started < BUDGET_MS) {
      drawing.drawRows(4);
    }
    image.data.set(drawing.pixels);
    sheetCtx.putImageData(image, 0, 0);
    dirty = true;
    if (!drawing.done) requestAnimationFrame(keepDrawing);
  }
  requestAnimationFrame(keepDrawing);

  /** A nudge of the zoom, for the buttons and the wheel. */
  function step(dir) {
    zoom = Math.min(ZOOM_MAX, Math.max(1, zoom * (dir > 0 ? 1.45 : 1 / 1.45)));
    if (zoom <= 1.0001) {
      panX = 0;
      panZ = 0;
    }
    dirty = true;
    repaint();
  }
  root.querySelector('[data-in]').addEventListener('click', () => step(1));
  root.querySelector('[data-out]').addEventListener('click', () => step(-1));
  root.addEventListener('wheel', (e) => {
    if (!open) return;
    e.preventDefault();
    step(e.deltaY < 0 ? 1 : -1);
  }, { passive: false });

  /** Where a point of the world lands on the canvas, in canvas pixels. */
  const _at = { x: 0, y: 0 };
  let placed = { x: 0, y: 0, w: 0, h: 0 };
  function toScreen(worldX, worldZ) {
    _at.x = placed.x + ((worldX + WORLD_HALF_X) / (WORLD_HALF_X * 2)) * placed.w;
    _at.y = placed.y + ((worldZ + WORLD_HALF_Z) / (WORLD_HALF_Z * 2)) * placed.h;
    return _at;
  }

  /** A triangle pointing the way something is facing. */
  function marker(x, z, heading, colour, size) {
    const p = toScreen(x, z);
    ctx.save();
    ctx.translate(p.x, p.y);
    // World headings are measured off +Z, which is DOWN the map, and
    // clockwise. Canvas angles start along +X and go the other way.
    ctx.rotate(-heading + Math.PI);
    ctx.beginPath();
    ctx.moveTo(0, -size);
    ctx.lineTo(size * 0.62, size * 0.75);
    ctx.lineTo(0, size * 0.35);
    ctx.lineTo(-size * 0.62, size * 0.75);
    ctx.closePath();
    ctx.fillStyle = colour;
    ctx.strokeStyle = 'rgba(4, 10, 18, 0.85)';
    ctx.lineWidth = 1.5;
    ctx.fill();
    ctx.stroke();
    ctx.restore();
  }

  function repaint() {
    const box = canvas.getBoundingClientRect();
    if (box.width < 8 || box.height < 8) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const w = Math.round(box.width * dpr);
    const h = Math.round(box.height * dpr);
    if (canvas.width !== w || canvas.height !== h) {
      canvas.width = w;
      canvas.height = h;
    }
    ctx.clearRect(0, 0, w, h);

    // Fit the world into the frame without stretching it. A continent
    // half as tall as it is wide must stay that shape whatever shape the
    // window is.
    const scale = Math.min(w / MAP_W, h / MAP_H) * zoom;
    const drawW = MAP_W * scale;
    const drawH = MAP_H * scale;
    // Zoomed in, centre on the player — and stop at the edges of the
    // world, so the continent never slides off into empty space with
    // half the frame showing nothing.
    const home = you ?? ship ?? { x: 0, z: 0 };
    const fu = (home.x + panX + WORLD_HALF_X) / (WORLD_HALF_X * 2);
    const fv = (home.z + panZ + WORLD_HALF_Z) / (WORLD_HALF_Z * 2);
    placed = {
      w: drawW,
      h: drawH,
      x: drawW <= w
        ? (w - drawW) / 2
        : Math.min(0, Math.max(w - drawW, w / 2 - fu * drawW)),
      y: drawH <= h
        ? (h - drawH) / 2
        : Math.min(0, Math.max(h - drawH, h / 2 - fv * drawH)),
    };
    // Smoothed while the whole world is in frame; sharp once it is
    // stretched past its own resolution, because a blurred pixel tells
    // you less than a square one.
    ctx.imageSmoothingEnabled = zoom < 2.5;
    ctx.drawImage(sheet, placed.x, placed.y, placed.w, placed.h);

    // The towns he drew, named. A capital gets a bigger mark than a
    // village, which is how anybody would draw it.
    for (const town of world.info.settlements ?? []) {
      const p = toScreen(town.x, town.z);
      const big = town.kind === 'capital';
      ctx.beginPath();
      ctx.arc(p.x, p.y, (big ? 5 : 3.2) * dpr, 0, Math.PI * 2);
      ctx.fillStyle = big ? '#ffe9b0' : '#efe0c4';
      ctx.strokeStyle = 'rgba(20, 14, 8, 0.85)';
      ctx.lineWidth = 1.6 * dpr;
      ctx.fill();
      ctx.stroke();
      ctx.font = `${(big ? 12 : 10) * dpr}px ui-monospace, monospace`;
      ctx.textAlign = 'center';
      ctx.lineWidth = 3 * dpr;
      ctx.strokeStyle = 'rgba(10, 16, 24, 0.9)';
      ctx.strokeText(town.name, p.x, p.y - (big ? 9 : 7) * dpr);
      ctx.fillStyle = '#fff6e2';
      ctx.fillText(town.name, p.x, p.y - (big ? 9 : 7) * dpr);
    }

    // The ship first, so that when they are in the same place the arrow
    // for the player is the one on top.
    if (ship) marker(ship.x, ship.z, ship.heading, SHIP, 9 * dpr);
    if (you) marker(you.x, you.z, you.heading, YOU, 8 * dpr);

    scaleEl.textContent = scaleText + (zoom > 1.02 ? ` · ×${zoom.toFixed(1)}` : '');
    // The bar down the side of the map, so the zoom is something you can
    // SEE happening and not only something you can feel.
    fillEl.style.height = `${(Math.log(zoom) / Math.log(ZOOM_MAX)) * 100}%`;

    buildingEl.hidden = drawing.done;
    if (!drawing.done) {
      buildingEl.textContent = strings.map.building
        .replace('{pct}', String(Math.round(drawing.progress * 100)));
    }
    dirty = false;
  }

  return {
    get isOpen() { return open; },
    /** How much of the world has been drawn, 0 to 1. For tests. */
    get progress() { return drawing.progress; },
    /** How far in the map is, 1 being the whole continent. */
    get zoom() { return zoom; },
    /** How far it has been scrolled off the player, in metres. For tests. */
    get view() { return { panX, panZ }; },

    /**
     * Where the player is and, when he is out of it, where the ship is.
     * Both in world-local metres, with the heading each is facing.
     */
    setMarkers(player, parkedShip = null) {
      you = player;
      ship = parkedShip;
      // Zoomed in, the view is hung off the player, so it has to be
      // repainted whenever he moves and not only when he is on screen.
      if (open) dirty = true;
    },

    /**
     * Zoom, from the left stick: push up to come closer, down to pull
     * back. W and S do the same on a keyboard.
     *
     * Exponential, not linear: going from ×1 to ×2 and from ×4 to ×8
     * are the same amount of zooming to look at, so they should take
     * the same time to do.
     */
    zoomBy(dir, dt) {
      if (!open || !dir) return zoom;
      const was = zoom;
      zoom = Math.min(ZOOM_MAX, Math.max(1, zoom * 2 ** (dir * ZOOM_RATE * dt)));
      // All the way back out is all the way back out: the whole world in
      // frame, centred, with no scrolling left over from last time.
      if (zoom <= 1.0001) {
        panX = 0;
        panZ = 0;
      }
      if (zoom !== was) dirty = true;
      return zoom;
    },

    /**
     * Scroll the map, from the right stick. Only worth anything zoomed
     * in — at ×1 the whole world is already on the screen and there is
     * nowhere to scroll to.
     */
    panBy(dx, dz, dt) {
      if (!open || zoom <= 1.0001 || (!dx && !dz)) return;
      // A screenful a second, whatever the zoom: at ×8 the same push of
      // the stick moves you an eighth as far across the world, which is
      // what makes scrolling a close-up map feel the same as scrolling a
      // far-off one.
      const speed = (WORLD_HALF_X * 2) / zoom;
      panX = Math.max(-WORLD_HALF_X, Math.min(WORLD_HALF_X, panX + dx * speed * dt));
      panZ = Math.max(-WORLD_HALF_Z, Math.min(WORLD_HALF_Z, panZ + dz * speed * dt));
      dirty = true;
    },

    /** Back to the player, wherever the map has been scrolled to. */
    recentre() {
      panX = 0;
      panZ = 0;
      dirty = true;
    },

    toggle() { return open ? this.close() : this.show(); },

    show() {
      open = true;
      panX = 0;
      panZ = 0;
      root.hidden = false;
      dirty = true;
      repaint();
      return true;
    },

    close() {
      open = false;
      root.hidden = true;
      return false;
    },

    /** Repaint if anything has moved. Cheap: it is one drawImage. */
    update() {
      if (!open || !dirty) return;
      repaint();
    },
  };
}
