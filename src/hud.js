// The "Tablet" HUD: a DOM overlay framed to look like the in-game tablet
// device. This is the seed of the UI used throughout the game (pause
// menu, fast-travel, hacking mini-game — all later rendered as "apps").
//
// DOM (not canvas-drawn-into-three) keeps text crisp at any resolution and
// makes the layout easy to evolve.
import { strings } from './strings.js';

export function createHud() {
  const root = document.createElement('div');
  root.id = 'tablet';
  root.innerHTML = `
    <div class="tablet-frame">
      <div class="tablet-bezel">
        <div class="tablet-screen">
          <div class="tablet-titlebar">
            <span class="tablet-app">${strings.hud.appName}</span>
            <span class="tablet-source" data-source>KB</span>
          </div>
          <div class="tablet-row">
            <span class="tablet-label">${strings.hud.velocity}</span>
            <span class="tablet-value" data-velocity>0.0</span>
          </div>
          <div class="tablet-row">
            <span class="tablet-label">${strings.hud.orientation}</span>
            <span class="tablet-value" data-orientation>0°,0°,0°</span>
          </div>
          <div class="tablet-row">
            <span class="tablet-label">${strings.hud.fps}</span>
            <span class="tablet-value" data-fps>--</span>
          </div>
          <div class="tablet-row tablet-row--small">
            <span class="tablet-value" data-damping>${strings.hud.dampingOff}</span>
          </div>

          <!-- Mission panel: rover progress + credits -->
          <div class="tablet-mission" data-mission hidden>
            <div class="tablet-row">
              <span class="tablet-label">${strings.hud.rovers}</span>
              <span class="tablet-value" data-rovers>0/0</span>
            </div>
            <div class="tablet-row">
              <span class="tablet-label">${strings.hud.credits}</span>
              <span class="tablet-value" data-credits>0</span>
            </div>
            <!-- Hack prompt: only visible when a rover is in range -->
            <div class="tablet-hack" data-hack hidden>
              <div class="tablet-hack__name" data-hack-name>—</div>
              <div class="tablet-hack__hint">${strings.hud.hackHint}</div>
              <div class="tablet-hack__bar"><div class="tablet-hack__fill" data-hack-fill></div></div>
            </div>
          </div>

          <button class="tablet-app-btn" data-fast-travel type="button">
            <span class="tablet-app-btn__icon">⤴</span>
            <span class="tablet-app-btn__label">${strings.hud.fastTravelButton}</span>
            <span class="tablet-app-btn__key">${strings.hud.fastTravelHint}</span>
          </button>
          <button class="tablet-app-btn" data-upgrades type="button">
            <span class="tablet-app-btn__icon">⚙</span>
            <span class="tablet-app-btn__label">${strings.hud.upgradeButton}</span>
            <span class="tablet-app-btn__key">${strings.hud.upgradeHint}</span>
          </button>
          <div class="tablet-row tablet-row--hint" data-reset-hint hidden>
            ${strings.hud.resetHint}
          </div>
        </div>
      </div>
    </div>
  `;
  // Out of sight until the screen that owns it shows it. The Tablet is
  // a page of the inventory now, and the inventory takes it in a moment
  // after this — but "a moment after" is a frame or two in which it
  // would sit in the corner of the screen where it used to live, and a
  // panel that flashes up at load and vanishes reads as a fault.
  root.style.display = 'none';
  document.body.appendChild(root);

  // Small top-of-screen banner shown WHEN the tablet is hidden, so the
  // player always knows which button brings it back up. Floats above
  // the canvas in the top-right corner — out of the play area.
  const hint = document.createElement('div');
  hint.id = 'tablet-hint';
  hint.textContent = strings.hud.tabletHint;
  hint.hidden = true;
  document.body.appendChild(hint);

  const elVelocity = root.querySelector('[data-velocity]');
  const elOrientation = root.querySelector('[data-orientation]');
  const elFps = root.querySelector('[data-fps]');
  const elSource = root.querySelector('[data-source]');
  const elDamping = root.querySelector('[data-damping]');
  const elFastTravel = root.querySelector('[data-fast-travel]');
  const elUpgrades = root.querySelector('[data-upgrades]');
  const elResetHint = root.querySelector('[data-reset-hint]');
  const elMission = root.querySelector('[data-mission]');
  const elRovers = root.querySelector('[data-rovers]');
  const elCredits = root.querySelector('[data-credits]');
  const elHack = root.querySelector('[data-hack]');
  const elHackName = root.querySelector('[data-hack-name]');
  const elHackFill = root.querySelector('[data-hack-fill]');

  // FPS uses a 0.5s moving window so the number doesn't strobe.
  let fpsAccumFrames = 0;
  let fpsAccumTime = 0;
  let fpsDisplayed = 0;

  return {
    /**
     * The Tablet's screen, for whoever is showing it.
     *
     * It used to be an overlay of its own with its own button. It is a
     * page of the inventory now — Marco's words: "the tablet is the
     * inventory" — so this module still owns what is ON the screen and
     * no longer owns where the screen is.
     */
    element: root,

    update({ velocity, eulerDeg, dt, sources, dampingOn }) {
      elVelocity.textContent = velocity.toFixed(1);
      elOrientation.textContent =
        `${eulerDeg.x.toFixed(0)}°, ${eulerDeg.y.toFixed(0)}°, ${eulerDeg.z.toFixed(0)}°`;

      fpsAccumFrames += 1;
      fpsAccumTime += dt;
      if (fpsAccumTime >= 0.5) {
        fpsDisplayed = Math.round(fpsAccumFrames / fpsAccumTime);
        fpsAccumFrames = 0;
        fpsAccumTime = 0;
        elFps.textContent = String(fpsDisplayed);
      }

      elSource.textContent = sources.join('+');
      elDamping.textContent = dampingOn ? strings.hud.dampingOn : strings.hud.dampingOff;
    },

    /**
     * The Tablet is a page of the inventory now, so where it is and
     * whether it is on screen belongs to that screen, not to this one.
     * These three remain because they are what the rest of the game
     * calls when a menu opens or closes, and all they still do is the
     * little banner that names the button.
     */
    show() {
      hint.hidden = true;
    },

    hide() {
      hint.hidden = false;
    },

    /** Toggle the tablet on/off. Returns the new visibility. */
    toggle() {
      hint.hidden = !hint.hidden;
      return !hint.hidden;
    },

    /** Force the hint banner to a specific visibility. */
    setHintVisible(v) {
      hint.hidden = !v;
    },

    /** Show the Fast Travel button (after the title state). */
    showFastTravel() {
      elFastTravel.classList.add('tablet-app-btn--visible');
    },

    /** Show the Upgrades button (after the title state, alongside FT). */
    showUpgrades() {
      elUpgrades.classList.add('tablet-app-btn--visible');
    },

    /** Show the small "R = reset" hint at the bottom of the Tablet. */
    showResetHint() {
      elResetHint.hidden = false;
    },

    /** Show / hide the mission panel as a whole. */
    setMissionVisible(visible) {
      elMission.hidden = !visible;
    },

    /** Update mission readout: rover count + credits. */
    updateMission({ remaining, total, credits }) {
      elRovers.textContent = `${total - remaining}/${total}`;
      elCredits.textContent = String(credits);
    },

    /**
     * Drive the hack prompt:
     *   - `name`: the rover name to display (or null to hide)
     *   - `progress`: 0..1
     */
    updateHack({ name, progress }) {
      if (!name) {
        elHack.hidden = true;
        return;
      }
      elHack.hidden = false;
      elHackName.textContent = name;
      elHackFill.style.width = `${Math.max(0, Math.min(1, progress)) * 100}%`;
    },

    onUpgradesClick(handler) {
      elUpgrades.addEventListener('click', handler);
    },

    /** Visual feedback while a warp is in progress. */
    setFastTravelActive(active) {
      elFastTravel.classList.toggle('tablet-app-btn--active', active);
      const label = elFastTravel.querySelector('.tablet-app-btn__label');
      label.textContent = active ? strings.hud.fastTravelActive : strings.hud.fastTravelButton;
      elFastTravel.disabled = active;
    },

    /** Listener for HUD button clicks. */
    onFastTravel(handler) {
      elFastTravel.addEventListener('click', handler);
    },
  };
}
