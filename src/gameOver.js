// GAME OVER.
//
// Shown once Vexo has finished falling over, not the instant the last
// heart goes — the animation is the point, and a sign that lands on top
// of it steals it.
//
// Two answers: continue from the last save, or back to the title. The
// second is not a punishment, it is where you go to start again on your
// own terms, and the save is left alone either way.
import { strings } from './strings.js';

export function createGameOver({ onContinue, onTitle }) {
  const root = document.createElement('div');
  root.id = 'game-over';
  root.hidden = true;
  root.innerHTML = `
    <div class="game-over__sign">${strings.gameOver.title}</div>
    <p class="game-over__ask" data-ask>${strings.gameOver.ask}</p>
    <div class="game-over__buttons">
      <button class="game-over__btn" data-yes>${strings.gameOver.yes}</button>
      <button class="game-over__btn" data-no>${strings.gameOver.no}</button>
    </div>
    <p class="game-over__hint">${strings.gameOver.hint}</p>
  `;
  document.body.appendChild(root);

  const askEl = root.querySelector('[data-ask]');
  const yesEl = root.querySelector('[data-yes]');
  const noEl = root.querySelector('[data-no]');

  let open = false;
  let choice = 0;          // 0 = yes, 1 = no
  let canContinue = true;

  function paint() {
    yesEl.classList.toggle('game-over__btn--on', choice === 0);
    noEl.classList.toggle('game-over__btn--on', choice === 1);
    yesEl.disabled = !canContinue;
  }

  function pick() {
    const wasYes = choice === 0 && canContinue;
    hide();
    if (wasYes) onContinue();
    else onTitle();
  }

  function hide() {
    open = false;
    root.hidden = true;
  }

  yesEl.addEventListener('click', () => { choice = 0; paint(); pick(); });
  noEl.addEventListener('click', () => { choice = 1; paint(); pick(); });

  return {
    get isOpen() { return open; },

    /**
     * @param {boolean} hasSave  with nothing saved there is nothing to
     *        continue from, so the offer changes rather than lying.
     */
    show(hasSave) {
      open = true;
      canContinue = hasSave;
      // Starting on "no" when "yes" would do nothing is the difference
      // between a menu and a trap.
      choice = hasSave ? 0 : 1;
      askEl.textContent = hasSave ? strings.gameOver.ask : strings.gameOver.noSave;
      root.hidden = false;
      paint();
    },

    /** Left/right to choose, A or Enter to take it. */
    update(input, BUTTONS) {
      if (!open) return;
      const left = input.keyboard.consumeJustPressed(['ArrowLeft', 'KeyA'])
        || input.gamepad.consumeJustPressed(BUTTONS.Left);
      const right = input.keyboard.consumeJustPressed(['ArrowRight', 'KeyD'])
        || input.gamepad.consumeJustPressed(BUTTONS.Right);
      if (left || right) {
        choice = choice === 0 ? 1 : 0;
        paint();
      }
      if (input.keyboard.consumeJustPressed(['Enter', 'Space'])
          || input.gamepad.consumeJustPressed(BUTTONS.A)) {
        pick();
      }
    },

    hide,
  };
}
