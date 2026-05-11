// Fast travel = the "Super Mega Tablet" wormhole shortcut from the
// narrative. Mechanically: pause input for ~1s, play a white-out warp
// flash, teleport the ship past the asteroid belt near Mars, fade
// back in.
//
// program.md M3: "Tablet 'Fast travel' button: when pressed at start,
// plays a brief warp/wormhole effect and places the ship on the far
// side of the asteroid belt near Mars."
import * as THREE from 'three';

export const WARP_DURATION_S = 1.2;
const TARGET_Z = 540; // past the belt (belt ends at ~480), short of Mars (~700)

export function createFastTravel(overlayRoot) {
  // The flash overlay. Starts transparent; we drive opacity by hand.
  const flash = document.createElement('div');
  flash.id = 'warp-flash';
  overlayRoot.appendChild(flash);

  let active = false;
  let t = 0; // seconds since warp start
  let teleportedThisRun = false;
  let onDone = null;
  let suppressInput = false;
  let savedShip = null;

  /**
   * Begin a warp. The caller passes the ship so we can pause velocity
   * during the trip and slam-cut to the target on the apex.
   */
  function begin(ship, opts = {}) {
    if (active) return false;
    active = true;
    t = 0;
    teleportedThisRun = false;
    onDone = opts.onDone ?? null;
    suppressInput = true;
    savedShip = ship;
    // Kill drift so the warp begins from a known state.
    ship.velocity.set(0, 0, 0);
    return true;
  }

  function update(dt) {
    if (!active) return;
    t += dt;
    // Three phases:
    //   0..0.4s   build-up: flash ramps to full white
    //   0.4..0.8s teleport: at midpoint, jump the ship to target
    //   0.8..1.2s fade-out: flash ramps back to clear
    const total = WARP_DURATION_S;
    const a = Math.max(0, Math.min(1, t / total));

    let opacity;
    if (a < 0.4) opacity = a / 0.4;
    else if (a < 0.6) opacity = 1;
    else opacity = 1 - (a - 0.6) / 0.4;
    flash.style.opacity = String(Math.max(0, Math.min(1, opacity)));

    // Teleport at the moment the flash is fully white — viewer can't
    // see the cut.
    if (!teleportedThisRun && a >= 0.5 && savedShip) {
      savedShip.mesh.position.set(0, 0, TARGET_Z);
      savedShip.velocity.set(0, 0, 0);
      // Reset orientation to face +Z (toward Mars) so the player
      // arrives looking at the target.
      savedShip.mesh.quaternion.identity();
      teleportedThisRun = true;
    }

    if (a >= 1) {
      active = false;
      suppressInput = false;
      flash.style.opacity = '0';
      const cb = onDone;
      onDone = null;
      savedShip = null;
      if (cb) cb();
    }
  }

  return {
    begin,
    update,
    get active() { return active; },
    /** True while the warp should ignore player input. */
    get suppressInput() { return suppressInput; },
    targetZ: TARGET_Z,
  };
}
