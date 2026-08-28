// Saving and loading.
//
// Two slots, exactly as the answer to "should the game ever save by
// itself" implies: a MANUAL one, written when the player presses Save in
// the inventory's System tab, and an AUTO one, written when the game
// reaches a moment worth coming back from — the ship touching down, Vexo
// climbing back in, a camp cleared. Game Over offers whichever is newer,
// so a player who saves religiously never loses more than they chose to,
// and a player who never touches the button still has somewhere to go.
//
// localStorage, because it is the only storage a page has that survives
// a reload without asking anyone's permission. It can throw — private
// windows, a browser with site data switched off, an iOS wrapper with an
// unusual configuration — so every touch of it is wrapped. A game that
// cannot save is a shame; a game that white-screens because it cannot
// save is a bug.
import { SURFACE_ORIGIN } from './surface.js';

const KEY = 'super-vexo/save';
// 4: the town went and a whole world took its place, so every save
// written before it describes ground that no longer exists.
const VERSION = 4;

function read() {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return { manual: null, auto: null };
    const parsed = JSON.parse(raw);
    // A save from an older shape is not worth guessing at: it would
    // restore a world that no longer exists.
    if (parsed.v !== VERSION) return { manual: null, auto: null };
    return { manual: parsed.manual ?? null, auto: parsed.auto ?? null };
  } catch {
    return { manual: null, auto: null };
  }
}

function write(slots) {
  try {
    localStorage.setItem(KEY, JSON.stringify({ v: VERSION, ...slots }));
    return true;
  } catch {
    return false;
  }
}

/**
 * @param {object} deps  everything with state worth keeping. Each is
 *        asked for a plain object and handed one back later; nothing in
 *        here knows what a rover or an upgrade actually is.
 */
export function createSaves({ ship, surface, onFoot, monsters, mission, upgrades, rovers }) {
  /** Everything worth remembering, as JSON. */
  function snapshot(kind) {
    return {
      kind,
      at: Date.now(),
      // Where he is. If he is out on foot, the ship is where he left it
      // and that is where he comes back to — a save is a place you
      // return to standing up, not mid-stride.
      ship: {
        p: ship.mesh.position.toArray(),
        q: ship.mesh.quaternion.toArray(),
        scale: ship.mesh.scale.x,
      },
      inTown: surface.active,
      // No hearts: a save is loaded with him back in the ship, and
      // climbing down the ladder gives him a fresh five. Storing the
      // three he happened to have left would only be a number nothing
      // ever reads.
      // The camps: which squares of the world have been cleared, and how
      // battered the rest are. See monsters.snapshot() for why they are
      // keyed by square rather than by position in a list.
      camps: monsters.snapshot(),
      credits: mission.credits,
      upgrades: upgrades.upgrades.filter((u) => u.bought).map((u) => u.id),
      rovers: rovers.rovers.map((r) => r.fixed),
    };
  }

  return {
    /** True if there is anything to come back to. */
    get has() {
      const { manual, auto } = read();
      return Boolean(manual || auto);
    },

    /** The newer of the two slots, or null. */
    get latest() {
      const { manual, auto } = read();
      if (!manual) return auto;
      if (!auto) return manual;
      return auto.at > manual.at ? auto : manual;
    },

    /** Player pressed Save. @returns {boolean} whether it stuck. */
    saveManual() {
      const slots = read();
      slots.manual = snapshot('manual');
      return write(slots);
    },

    /**
     * The game reached somewhere worth coming back from. Quiet: no
     * message, and a failure is not worth interrupting play for.
     */
    saveAuto(reason) {
      const slots = read();
      slots.auto = { ...snapshot('auto'), reason };
      return write(slots);
    },

    /**
     * Put a saved game back. Everything lands in the ship: restoring
     * somebody mid-climb, or halfway through being hit, is a great deal
     * of state for no gain.
     */
    restore(data) {
      if (!data) return false;
      onFoot.reset();
      surface.reset(ship);

      if (data.inTown) surface.enter(ship);
      ship.mesh.position.fromArray(data.ship.p);
      ship.mesh.quaternion.fromArray(data.ship.q);
      ship.mesh.scale.setScalar(data.ship.scale ?? 1);
      ship.velocity.set(0, 0, 0);

      // Pitch the camps around where the ship has just been put down,
      // then put back whatever was done to them.
      monsters.reset();
      monsters.focus(ship.mesh.position.x - SURFACE_ORIGIN.x,
        ship.mesh.position.z - SURFACE_ORIGIN.z);
      monsters.restore(data.camps);

      rovers.reset();
      for (const [i, fixed] of (data.rovers ?? []).entries()) {
        if (fixed && rovers.rovers[i]) rovers.markFixed(rovers.rovers[i]);
      }

      mission.reset();
      mission.grantCredits(data.credits ?? 0);
      upgrades.reset();
      for (const id of data.upgrades ?? []) upgrades.buyFree(id);
      return true;
    },

    /** For a fresh start, and for tests that must not inherit a save. */
    clear() {
      try {
        localStorage.removeItem(KEY);
        return true;
      } catch {
        return false;
      }
    },
  };
}
