// Vexo's health, as hearts along the top of the screen.
//
// DOM rather than anything in the scene, for the same reasons as the
// stamina wheel: crisp at any resolution, never behind a wall, and free
// when it isn't showing. Hearts rather than a bar because you can count
// them at a glance while something is running at you.
//
// They stay on screen the whole time he is out of the ship, unlike the
// wheel — how much health you have left is not something you should have
// to provoke the game into telling you.
const FULL = '♥';

export function createHearts() {
  const el = document.createElement('div');
  el.id = 'hearts';
  el.hidden = true;
  document.body.appendChild(el);

  let shown = -1;
  let total = 0;

  return {
    /** @param {number} count how many hearts he has left, of `max` */
    set(count, max) {
      if (count === shown && max === total) return;
      shown = count;
      total = max;
      // Rebuilt rather than tweaked: five spans is nothing, and it
      // cannot drift out of step with the number the way patching can.
      el.innerHTML = '';
      for (let i = 0; i < max; i++) {
        const heart = document.createElement('span');
        heart.className = i < count ? 'heart' : 'heart heart--spent';
        heart.textContent = FULL;
        el.appendChild(heart);
      }
      el.hidden = false;
    },

    /** A short flash of red across the screen when he takes a hit. */
    flash() {
      el.classList.remove('hearts--hit');
      // Reflow, or the class goes back on before the browser has
      // noticed it came off and the animation never restarts.
      void el.offsetWidth;
      el.classList.add('hearts--hit');
    },

    hide() {
      el.hidden = true;
      shown = -1;
    },
  };
}
