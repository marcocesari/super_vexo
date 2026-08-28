// The Upgrades app: three things the player can spend credits on.
// Each upgrade has a name, cost, description, an `apply()` that mutates
// `shipConfig`, and a `bought` flag. Picks persist for the session
// (no localStorage at M4 minimum — that's in BACKLOG).
import { shipConfig } from './shipConfig.js';

export function createUpgrades() {
  const upgrades = [
    {
      id: 'throttle',
      label: 'Boost Throttle',
      description: 'Push the engines harder. +40% forward acceleration, +25% top speed.',
      cost: 100,
      bought: false,
      apply() {
        shipConfig.maxThrottleAccel *= 1.4;
        shipConfig.maxSpeed *= 1.25;
      },
    },
    {
      id: 'agility',
      label: 'Sharper Turning',
      description: 'Twitch-faster yaw and pitch. +35% on both rates.',
      cost: 90,
      bought: false,
      apply() {
        shipConfig.yawRate *= 1.35;
        shipConfig.pitchRate *= 1.35;
      },
    },
    {
      id: 'hackRange',
      label: 'Long-Range Hack',
      description: 'The Tablet locks on from further out. Hack radius +50%.',
      cost: 80,
      bought: false,
      apply() {
        shipConfig.hackRadius *= 1.5;
      },
    },
  ];

  /**
   * @returns {boolean} true if purchase succeeded.
   * The caller is responsible for deducting credits (we pass through to
   * the mission so the source-of-truth stays in one place).
   */
  function buy(id, mission) {
    const u = upgrades.find((x) => x.id === id);
    if (!u || u.bought) return false;
    if (!mission.spendCredits(u.cost)) return false;
    u.apply();
    u.bought = true;
    return true;
  }

  /**
   * Apply an upgrade without paying for it — for restoring a save,
   * where the credits were spent in the session that saved it.
   */
  function buyFree(id) {
    const u = upgrades.find((x) => x.id === id);
    if (!u || u.bought) return false;
    u.apply();
    u.bought = true;
    return true;
  }

  function reset() {
    for (const u of upgrades) u.bought = false;
  }

  return { upgrades, buy, buyFree, reset };
}
