// Full-screen overlay screens for M4:
//   - Mission Complete: shown when all rovers are repaired. Awards a
//     bonus and offers to open Upgrades.
//   - Upgrades: a "tablet app" with 3 purchase buttons.
//
// Both screens follow the title-card pattern: a centered card with a
// semi-transparent backdrop. They don't pause the game loop — the
// player can keep flying behind them.
import { strings } from './strings.js';

/**
 * @param onClose called whenever a screen is dismissed from its own
 *   buttons, so the caller can put the Tablet back up — closing a
 *   screen should return the player where they opened it from.
 */
export function createMissionScreens({ upgrades, mission, audio, onClose }) {
  const root = document.createElement('div');
  root.id = 'mission-screens';
  root.innerHTML = `
    <div class="screen-overlay" id="screen-complete" data-screen="complete" hidden>
      <div class="screen-card">
        <h2 class="screen-card__title">${strings.hud.missionCompleteTitle}</h2>
        <p class="screen-card__body">${strings.hud.missionCompleteBody}</p>
        <div class="screen-card__row">
          <span class="screen-card__credits"><span class="screen-card__credits-label">CREDITS:</span> <span data-complete-credits>0</span></span>
        </div>
        <div class="screen-card__actions">
          <button class="screen-btn screen-btn--primary" data-action="open-upgrades">${strings.hud.missionCompleteCta}</button>
          <button class="screen-btn" data-action="close-complete">${strings.hud.missionCompleteClose}</button>
        </div>
      </div>
    </div>

    <div class="screen-overlay" id="screen-upgrades" data-screen="upgrades" hidden>
      <div class="screen-card screen-card--wide">
        <h2 class="screen-card__title">${strings.hud.upgradeButton}</h2>
        <div class="screen-card__row">
          <span class="screen-card__credits"><span class="screen-card__credits-label">CREDITS:</span> <span data-upgrades-credits>0</span></span>
        </div>
        <p class="screen-card__hint">${strings.hud.screenHint}</p>
        <ul class="upgrade-list" data-upgrade-list></ul>
        <div class="screen-card__actions">
          <button class="screen-btn" data-action="close-upgrades">${strings.hud.upgradeClose}</button>
        </div>
      </div>
    </div>
  `;
  document.body.appendChild(root);

  const elComplete = root.querySelector('#screen-complete');
  const elCompleteCredits = root.querySelector('[data-complete-credits]');
  const elUpgrades = root.querySelector('#screen-upgrades');
  const elUpgradesCredits = root.querySelector('[data-upgrades-credits]');
  const elUpgradeList = root.querySelector('[data-upgrade-list]');

  function renderUpgradeList() {
    elUpgradesCredits.textContent = String(mission.credits);
    elUpgradeList.innerHTML = '';
    for (const u of upgrades.upgrades) {
      const li = document.createElement('li');
      li.className = 'upgrade-item' + (u.bought ? ' upgrade-item--bought' : '');
      const canAfford = !u.bought && mission.credits >= u.cost;
      li.innerHTML = `
        <div class="upgrade-item__head">
          <span class="upgrade-item__name">${u.label}</span>
          <span class="upgrade-item__cost">${u.cost} c</span>
        </div>
        <p class="upgrade-item__desc">${u.description}</p>
        <button class="screen-btn screen-btn--small" data-buy="${u.id}" ${u.bought || !canAfford ? 'disabled' : ''}>
          ${u.bought ? strings.hud.upgradeBought : strings.hud.upgradeBuy}
        </button>
      `;
      elUpgradeList.appendChild(li);
    }
  }

  function show(screen) {
    if (screen === 'complete') {
      elCompleteCredits.textContent = String(mission.credits);
      elComplete.hidden = false;
    } else if (screen === 'upgrades') {
      renderUpgradeList();
      elUpgrades.hidden = false;
    }
  }
  function hide(screen) {
    if (screen === 'complete') elComplete.hidden = true;
    else if (screen === 'upgrades') elUpgrades.hidden = true;
  }
  function hideAll() { hide('complete'); hide('upgrades'); }
  function isOpen() {
    return !elComplete.hidden || !elUpgrades.hidden;
  }

  /** The card of whichever screen is currently open, or null. */
  function openCard() {
    if (!elUpgrades.hidden) return elUpgrades.querySelector('.screen-card');
    if (!elComplete.hidden) return elComplete.querySelector('.screen-card');
    return null;
  }

  /**
   * Scroll the open screen by `dy` pixels (negative = up). Used by the
   * gamepad, which has no scroll wheel and no finger; touch and the
   * mouse wheel scroll the card natively.
   */
  function scrollBy(dy) {
    const card = openCard();
    if (!card) return;
    card.scrollTop += dy;
  }

  // Wire actions.
  root.addEventListener('click', (e) => {
    const t = e.target;
    if (!(t instanceof Element)) return;

    const action = t.getAttribute('data-action');
    if (action === 'open-upgrades') {
      hide('complete');
      show('upgrades');
      return;
    }
    if (action === 'close-complete') { hide('complete'); onClose?.(); return; }
    if (action === 'close-upgrades') { hide('upgrades'); onClose?.(); return; }

    const buyId = t.getAttribute('data-buy');
    if (buyId) {
      if (upgrades.buy(buyId, mission)) {
        if (audio) audio.chirp({ fromHz: 520, toHz: 780, durationS: 0.25, peakGain: 0.18 });
        renderUpgradeList();
      }
    }
  });

  return { show, hide, hideAll, isOpen, scrollBy };
}
