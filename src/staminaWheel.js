// The stamina wheel.
//
// Drawn where Tears of the Kingdom draws it: beside the man himself,
// not in the corner of the screen. That matters more than it sounds —
// the wheel is a thing you watch WHILE running, and running is the one
// time you can't afford to look anywhere but where you're going.
//
// An SVG ring rather than anything in the 3D scene: it has to stay
// crisp, face the camera, never be occluded by a wall, and cost nothing
// when it isn't on screen — which a sprite in the world manages none of.
// It hides itself when the wheel is full and nobody is spending it,
// again as TotK does, so the picture is clean while you're just walking.
const R = 22;                       // ring radius in px
const CIRCUMFERENCE = 2 * Math.PI * R;
const FADE_S = 0.6;                 // seconds it takes to fade away when full

export function createStaminaWheel() {
  const el = document.createElement('div');
  el.id = 'stamina-wheel';
  el.hidden = true;
  el.innerHTML = `
    <svg viewBox="0 0 56 56" width="56" height="56">
      <circle class="stamina-wheel__track" cx="28" cy="28" r="${R}" />
      <circle class="stamina-wheel__fill" cx="28" cy="28" r="${R}"
              stroke-dasharray="${CIRCUMFERENCE.toFixed(2)}" />
    </svg>
  `;
  document.body.appendChild(el);
  const fill = el.querySelector('.stamina-wheel__fill');

  let shown = false;
  let fade = 0;
  let lastOffset = -1;
  let lastWinded = null;

  return {
    /**
     * @param {number} level    0..1
     * @param {boolean} winded  true while he is blown from emptying it
     * @param {number} dt
     * @param {{x: number, y: number}|null} at  where he is on screen, in
     *        pixels; null when he can't be seen, which hides the wheel.
     */
    update(level, winded, dt, at) {
      // Visible while it matters: not full, or still catching his breath.
      const wanted = at != null && (level < 0.999 || winded);
      if (wanted) {
        fade = FADE_S;
      } else if (fade > 0) {
        fade -= dt;
      }
      const visible = fade > 0 && at != null;
      if (visible !== shown) {
        el.hidden = !visible;
        shown = visible;
      }
      if (!visible) return;

      el.style.transform = `translate(${Math.round(at.x)}px, ${Math.round(at.y)}px)`;
      el.style.opacity = fade < FADE_S ? (fade / FADE_S).toFixed(2) : '1';
      // Only touch the ring when the number has actually moved: this
      // runs every frame he is on foot.
      const offset = Math.round(CIRCUMFERENCE * (1 - Math.max(0, Math.min(1, level))));
      if (offset !== lastOffset) {
        fill.style.strokeDashoffset = String(offset);
        lastOffset = offset;
      }
      if (winded !== lastWinded) {
        el.classList.toggle('stamina-wheel--winded', winded);
        lastWinded = winded;
      }
    },

    hide() {
      el.hidden = true;
      shown = false;
      fade = 0;
    },
  };
}
