// What the monsters leave behind, and how many of each he is carrying.
//
// TotK's monsters drop parts — horns, fangs, guts — that go straight
// into the pouch when Link walks over them, and the Items page counts
// them up. This is that pouch. It is a ledger and nothing else: what
// falls out of a bokoblin is decided in `monsters.js`, what the parts
// are called lives in `strings.js`, and what they are FOR is a question
// for a later session (a shop that buys them, or a recipe that wants
// them). Kept apart from `perks.js` on purpose: a perk is a thing bought
// once that changes him, a material is a thing picked up in dozens
// that changes nothing.
import { strings } from './strings.js';

/** Every kind of part a monster can drop. */
export const KINDS = ['horn', 'eyeball'];

export function createMaterials() {
  /** How many of each kind he has. */
  const owned = Object.fromEntries(KINDS.map((k) => [k, 0]));

  return {
    get owned() { return { ...owned }; },

    /** Picked one up. Returns how many of that kind he has now. */
    take(kind) {
      if (!(kind in owned)) return 0;
      owned[kind] += 1;
      return owned[kind];
    },

    /** The name and the line about it, from strings.js. */
    label(kind) { return strings.materials[kind]?.name ?? kind; },
    note(kind) { return strings.materials[kind]?.note ?? ''; },

    /** For the save file. */
    snapshot() { return { ...owned }; },
    restore(saved) {
      for (const k of KINDS) owned[k] = Math.max(0, Math.floor(saved?.[k] ?? 0));
    },
    reset() {
      for (const k of KINDS) owned[k] = 0;
    },
  };
}
