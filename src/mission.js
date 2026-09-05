// The mission state machine for M4 — find broken rovers, hack to repair,
// earn credits, complete the mission, spend on upgrades.
//
// State (per rover): untouched → in-range → repairing → fixed.
// Top-level state: ACTIVE → COMPLETE (when all rovers are fixed).
//
// All mutation goes through this module so the UI / smoke can read the
// authoritative state without poking the rovers list directly.
import { shipConfig } from './shipConfig.js';

// Hack range is mutable by upgrades; the rest are mission-tuning
// constants we don't expose to the player.
export const HACK_MAX_SPEED = 8;       // units/s
export const REPAIR_DURATION_S = 2.0;  // hold time for full repair
export const COMPLETION_BONUS = 100;   // credits awarded on mission complete

export const MISSION_STATE = {
  ACTIVE: 'active',
  COMPLETE: 'complete',
};

export function createMission(roverApi) {
  const { rovers, markFixed } = roverApi;

  let credits = 0;
  let state = MISSION_STATE.ACTIVE;
  let inRange = null;       // currently in-range rover, if any
  let repairing = null;     // rover currently being repaired
  let onComplete = null;    // optional callback when state flips to COMPLETE
  let onRepaired = null;    // optional per-fix callback (rover) → effect hook

  function setOnComplete(cb) { onComplete = cb; }
  function setOnRepaired(cb) { onRepaired = cb; }

  function remaining() {
    let n = 0;
    for (const r of rovers) if (!r.fixed) n += 1;
    return n;
  }

  function totalRovers() { return rovers.length; }

  /**
   * Find the nearest unfixed rover that is within HACK_RADIUS of
   * `shipPos` AND the ship's speed is below HACK_MAX_SPEED.
   * Returns null if none qualifies.
   */
  function findInRange(shipPos, shipSpeed) {
    if (shipSpeed > HACK_MAX_SPEED) return null;
    let best = null;
    let bestDist = shipConfig.hackRadius * shipConfig.hackRadius;
    for (const r of rovers) {
      if (r.fixed) continue;
      const dx = r.position.x - shipPos.x;
      const dy = r.position.y - shipPos.y;
      const dz = r.position.z - shipPos.z;
      const d2 = dx * dx + dy * dy + dz * dz;
      if (d2 < bestDist) { bestDist = d2; best = r; }
    }
    return best;
  }

  /**
   * Per-frame update. `holdActive` = the player is holding the hack
   * key/button. Drives the repairing state.
   */
  function update({ shipPos, shipSpeed, holdActive, dt }) {
    inRange = findInRange(shipPos, shipSpeed);

    if (state !== MISSION_STATE.ACTIVE) {
      repairing = null;
      return;
    }

    if (holdActive && inRange) {
      // Same rover as last frame? Continue. Otherwise (re)start.
      if (repairing !== inRange) {
        repairing = inRange;
        repairing.repairProgress = 0;
      }
      repairing.repairProgress = Math.min(
        1,
        repairing.repairProgress + dt / REPAIR_DURATION_S,
      );
      if (repairing.repairProgress >= 1 && !repairing.fixed) {
        const justFixed = repairing;
        markFixed(justFixed);
        credits += justFixed.creditValue;
        if (onRepaired) onRepaired(justFixed);
        repairing = null;
        if (remaining() === 0) {
          state = MISSION_STATE.COMPLETE;
          credits += COMPLETION_BONUS;
          if (onComplete) onComplete();
        }
      }
    } else if (repairing) {
      // Released the hold or left range → drop progress.
      repairing.repairProgress = 0;
      repairing = null;
    }
  }

  function spendCredits(amount) {
    if (amount > credits) return false;
    credits -= amount;
    return true;
  }

  function reset() {
    credits = 0;
    state = MISSION_STATE.ACTIVE;
    inRange = null;
    repairing = null;
  }

  return {
    get state() { return state; },
    get credits() { return credits; },
    get inRange() { return inRange; },
    get repairing() { return repairing; },
    /** Put credits back after a save is loaded. */
    grantCredits(n) { credits = Math.max(0, Math.round(n)); },

    /**
     * Money earned down on the ground — a bounty on a monster, say.
     *
     * Separate from grantCredits, which SETS the total when a save is
     * loaded. Until the shops opened, the only money in the game came
     * from rovers in orbit around Mars, and the player now starts on the
     * other side of the world from them with nothing to spend.
     */
    earn(n) {
      credits += Math.max(0, Math.round(n));
      return credits;
    },
    remaining,
    totalRovers,
    update,
    spendCredits,
    setOnComplete,
    setOnRepaired,
    reset,
  };
}
