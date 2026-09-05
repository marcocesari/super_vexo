// What the shops in Estronic sell, and what owning it does.
//
// Kept in one place, apart from the shop screen and apart from the code
// that feels the effect, because a thing you can buy is three separate
// facts — what it costs, what it says on the shelf, and what it changes —
// and they have a way of drifting apart when they live in three files.
//
// Everything here is bought with credits, which come from the rovers out
// at Mars and, since the shops opened, from a bounty on the monsters
// camped about the continent. Fighting pays for the gear that makes
// fighting easier, which is the loop this was missing.
import { strings } from './strings.js';

/**
 * The stock. `max` is how many of a thing one person may own — most
 * things are once only, but hearts are worth stacking.
 */
export const GOODS = [
  {
    id: 'heart',
    shop: 'apothecary',
    price: 120,
    max: 3,
    // Each one costs more than the last: the fifth heart is worth more
    // than the sixth, and a shop that never gets dearer is a shop you
    // empty in one visit.
    scale: 1.6,
  },
  { id: 'wind', shop: 'apothecary', price: 90, max: 1 },
  { id: 'quickdraw', shop: 'gunsmith', price: 150, max: 1 },
  { id: 'barrel', shop: 'gunsmith', price: 130, max: 1 },
  { id: 'thrusters', shop: 'shipwright', price: 200, max: 1 },
];

export const SHOPS = ['apothecary', 'gunsmith', 'shipwright'];

export function createPerks() {
  /** How many of each thing is owned. */
  const owned = Object.fromEntries(GOODS.map((g) => [g.id, 0]));

  const has = (id) => owned[id] > 0;

  return {
    get owned() { return { ...owned }; },

    /** What the next one of these costs, with what is already owned. */
    priceOf(good) {
      return Math.round(good.price * (good.scale ?? 1) ** owned[good.id]);
    },

    soldOut(good) {
      return owned[good.id] >= good.max;
    },

    /** Everything one shop sells, in the order it is shelved. */
    stockOf(shop) {
      return GOODS.filter((g) => g.shop === shop);
    },

    /** Bought. The caller has already taken the money. */
    take(id) {
      owned[id] = (owned[id] ?? 0) + 1;
    },

    /** For the save file. */
    snapshot() { return { ...owned }; },
    restore(saved) {
      for (const g of GOODS) owned[g.id] = Math.min(g.max, Math.max(0, saved?.[g.id] ?? 0));
    },
    reset() {
      for (const g of GOODS) owned[g.id] = 0;
    },

    // --- What owning it actually does ------------------------------------------
    // Read by the code that cares, every time it matters, so a purchase
    // takes effect the instant it is made rather than at the next
    // landing.
    /** Hearts he can carry. */
    get maxHearts() { return 5 + owned.heart; },
    /** How fast the stamina wheel empties while sprinting. */
    get staminaDrain() { return has('wind') ? 1 / 1.4 : 1; },
    /** Seconds between shots, as a multiplier. */
    get shotInterval() { return has('quickdraw') ? 0.65 : 1; },
    /** How far a shot reaches, as a multiplier. */
    get shotRange() { return has('barrel') ? 1.45 : 1; },
    /** The airship's speed over the world, as a multiplier. */
    get shipSpeed() { return has('thrusters') ? 1.15 : 1; },

    /** The name and the description, from strings.js. */
    label(id) { return strings.shop.goods[id]?.name ?? id; },
    note(id) { return strings.shop.goods[id]?.note ?? ''; },
  };
}
