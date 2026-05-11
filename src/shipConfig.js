// Tunable ship parameters. Originally hard-coded in ship.js, lifted
// here so the M4 Upgrades app can mutate them at runtime without
// reaching into other modules.
//
// All values are "per second" or "per second squared"; deltaTime is
// applied where they're used.

// Defaults are kept in a frozen object so we can restore them when the
// game resets (program.md quality bar: "Game state resettable without
// page reload"). Do not mutate DEFAULTS — copy from it into shipConfig.
export const DEFAULTS = Object.freeze({
  maxThrottleAccel: 18,
  reverseThrottleAccel: 12,
  maxSpeed: 60,
  yawRate: 1.4,
  pitchRate: 1.4,
  rollRate: 2.0,
  arcadeDampingRate: 0.6,
  hackRadius: 8,
});

export const shipConfig = { ...DEFAULTS };

/** Restore every value to the original default. Called by the game reset. */
export function resetShipConfig() {
  Object.assign(shipConfig, DEFAULTS);
}
