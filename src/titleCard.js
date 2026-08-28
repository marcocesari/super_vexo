// Title card shown on load. "Press any key to start" gates the game loop
// so the player has agency on first frame.
import { strings } from './strings.js';
import { isTouchDevice } from './input/touch.js';

export function createTitleCard() {
  const root = document.createElement('div');
  root.id = 'title-card';
  // `__BUILD_ID__` is replaced by Vite at build time with the moment the
  // bundle was built (see vite.config.js); in `npm run dev` it isn't
  // defined at all, hence the guard. Shown small under the prompt so a
  // phone can always be checked against what was last deployed.
  const build = typeof __BUILD_ID__ === 'string' ? __BUILD_ID__ : 'dev';
  root.innerHTML = `
    <div class="title-card__inner">
      <h1 class="title-card__title">${strings.title}</h1>
      <p class="title-card__prompt">${isTouchDevice ? strings.tapToStart : strings.pressAnyKey}</p>
      <p class="title-card__build">build ${build}</p>
    </div>
  `;
  document.body.appendChild(root);

  // The removal that `dismiss` schedules, so `show` can call it off.
  let removal = null;

  return {
    /** Instant hide (no fade) — used while the cinematic plays. */
    hide() {
      root.style.opacity = '0';
    },
    /**
     * Put it back up. Not only for the first frame any more: choosing
     * NO at Game Over comes back here, and `dismiss` takes the card out
     * of the document altogether — so a card that only reset its opacity
     * would leave the player looking at an empty title screen.
     */
    show() {
      if (removal) { clearTimeout(removal); removal = null; }
      root.classList.remove('title-card--hidden');
      root.style.opacity = '';
      if (!root.isConnected) document.body.appendChild(root);
    },
    /** Hide with a quick fade. */
    dismiss() {
      root.classList.add('title-card--hidden');
      // Remove after the fade so it doesn't intercept events.
      removal = setTimeout(() => { root.remove(); removal = null; }, 500);
    },
  };
}
