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
          <button class="tablet-app-btn" data-fast-travel type="button">
            <span class="tablet-app-btn__icon">⤴</span>
            <span class="tablet-app-btn__label">${strings.hud.fastTravelButton}</span>
            <span class="tablet-app-btn__key">${strings.hud.fastTravelHint}</span>
          </button>
        </div>
      </div>
    </div>
  `;
  document.body.appendChild(root);

  const elVelocity = root.querySelector('[data-velocity]');
  const elOrientation = root.querySelector('[data-orientation]');
  const elFps = root.querySelector('[data-fps]');
  const elSource = root.querySelector('[data-source]');
  const elDamping = root.querySelector('[data-damping]');
  const elFastTravel = root.querySelector('[data-fast-travel]');

  // FPS uses a 0.5s moving window so the number doesn't strobe.
  let fpsAccumFrames = 0;
  let fpsAccumTime = 0;
  let fpsDisplayed = 0;

  return {
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

    /** Show the Fast Travel button (after the title state). */
    showFastTravel() {
      elFastTravel.classList.add('tablet-app-btn--visible');
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
