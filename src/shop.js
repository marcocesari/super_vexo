// A shop counter in Estronic.
//
// Opened by talking to the keeper standing at the door. A list of what
// this shop sells, what each thing costs, what it does and whether you
// already own it — and your money at the top, because the first thing
// anybody wants to know in a shop is whether they can afford anything.
//
// Driven with the same buttons as everything else on foot: up and down
// to choose, E or A to buy, B or Escape to leave.
import { strings } from './strings.js';

export function createShop({ perks, mission, audio = null, onBought = () => {} }) {
  const root = document.createElement('div');
  root.id = 'shop';
  root.className = 'screen-overlay';
  root.hidden = true;
  root.innerHTML = `
    <div class="shop__panel">
      <div class="shop__head">
        <h2 class="shop__name" data-name></h2>
        <div class="shop__purse"><span data-credits>0</span> ${strings.shop.credits}</div>
      </div>
      <ul class="shop__list" data-list></ul>
      <p class="shop__said" data-said></p>
      <p class="screen-card__hint">${strings.shop.hint}</p>
    </div>
  `;
  document.body.appendChild(root);
  const nameEl = root.querySelector('[data-name]');
  const creditsEl = root.querySelector('[data-credits]');
  const listEl = root.querySelector('[data-list]');
  const saidEl = root.querySelector('[data-said]');

  let open = false;
  let shop = null;
  let stock = [];
  let picked = 0;

  function draw() {
    creditsEl.textContent = String(mission.credits);
    listEl.innerHTML = '';
    for (const [i, good] of stock.entries()) {
      const price = perks.priceOf(good);
      const soldOut = perks.soldOut(good);
      const canAfford = mission.credits >= price;
      const li = document.createElement('li');
      li.className = 'shop__item'
        + (i === picked ? ' shop__item--on' : '')
        + (soldOut ? ' shop__item--sold' : '')
        + (!soldOut && !canAfford ? ' shop__item--dear' : '');
      li.innerHTML = `
        <span class="shop__item-name">${perks.label(good.id)}</span>
        <span class="shop__item-note">${perks.note(good.id)}</span>
        <span class="shop__item-price">${soldOut ? strings.shop.sold : `${price} ${strings.shop.credits}`}</span>
      `;
      li.addEventListener('click', () => { picked = i; draw(); buy(); });
      listEl.appendChild(li);
    }
  }

  function say(text) {
    saidEl.textContent = text;
  }

  function buy() {
    const good = stock[picked];
    if (!good) return;
    if (perks.soldOut(good)) {
      say(strings.shop.alreadyHave);
      return;
    }
    const price = perks.priceOf(good);
    if (!mission.spendCredits(price)) {
      say(strings.shop.tooDear);
      audio?.chirp({ fromHz: 320, toHz: 180, durationS: 0.14, peakGain: 0.1 });
      return;
    }
    perks.take(good.id);
    say(strings.shop.bought.replace('{name}', perks.label(good.id)));
    audio?.chirp({ fromHz: 680, toHz: 1120, durationS: 0.16, peakGain: 0.14 });
    onBought(good);
    draw();
  }

  return {
    get isOpen() { return open; },
    /** Which shop is being stood in, for tests. */
    get shop() { return shop; },

    show(which) {
      shop = which;
      stock = perks.stockOf(which);
      picked = 0;
      nameEl.textContent = strings.shop.names[which] ?? which;
      say(strings.shop.welcome);
      draw();
      open = true;
      root.hidden = false;
      return true;
    },

    close() {
      open = false;
      shop = null;
      root.hidden = true;
      return false;
    },

    /** Up and down the shelf, and a button to buy. */
    update(input, BUTTONS) {
      if (!open) return;
      const down = input.keyboard.consumeJustPressed(['ArrowDown', 'KeyS'])
        || input.gamepad.consumeJustPressed(BUTTONS.Down);
      const up = input.keyboard.consumeJustPressed(['ArrowUp', 'KeyW'])
        || input.gamepad.consumeJustPressed(BUTTONS.Up);
      if (down || up) {
        picked = (picked + (down ? 1 : -1) + stock.length) % stock.length;
        draw();
      }
      if (input.keyboard.consumeJustPressed(['KeyE', 'Enter'])
          || input.gamepad.consumeJustPressed(BUTTONS.A)) {
        buy();
      }
    },
  };
}
