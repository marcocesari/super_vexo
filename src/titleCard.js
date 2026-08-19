// Title card shown on load. "Press any key to start" gates the game loop
// so the player has agency on first frame.
import { strings } from './strings.js';
import { isTouchDevice } from './input/touch.js';

export function createTitleCard() {
  const root = document.createElement('div');
  root.id = 'title-card';
  root.innerHTML = `
    <div class="title-card__inner">
      <h1 class="title-card__title">${strings.title}</h1>
      <p class="title-card__prompt">${isTouchDevice ? strings.tapToStart : strings.pressAnyKey}</p>
    </div>
  `;
  document.body.appendChild(root);

  return {
    /** Instant hide (no fade) — used while the cinematic plays. */
    hide() {
      root.style.opacity = '0';
    },
    show() {
      root.style.opacity = '';
    },
    /** Hide with a quick fade. */
    dismiss() {
      root.classList.add('title-card--hidden');
      // Remove after the fade so it doesn't intercept events.
      setTimeout(() => root.remove(), 500);
    },
  };
}
