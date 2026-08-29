// Game over and saving.
//
// The two halves of "what happens when the hearts run out": Vexo falls
// over, a sign asks whether to continue, and there is something to
// continue FROM. That last part is the one that fails quietly — a save
// that never gets written looks exactly like a save that does, right up
// until the moment the player needs it.
//
// So this checks the storage itself rather than the button that claims
// to have written it: the autosaves the game makes on its own, and the
// manual one behind the SAVE button in the inventory's System tab, which
// is where Tears of the Kingdom keeps its own.
//
// Run while `npm run dev` is up.
import { launchBrowser } from './lib/browser.mjs';

const URL = process.env.SMOKE_URL ?? 'http://127.0.0.1:5173';
const NOISE = [/GPU stall due to ReadPixels/i, /CONTEXT_LOST_WEBGL/i, /loseContext/i];
const isNoise = (t) => NOISE.some((re) => re.test(t));

const errors = [];
const warnings = [];
let failed = false;
function check(label, ok, detail = '') {
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${label}${detail ? `  (${detail})` : ''}`);
  if (!ok) failed = true;
}

const browser = await launchBrowser();
const page = await browser.newPage({ viewport: { width: 900, height: 640 } });
page.on('console', (m) => {
  const t = m.text();
  if (isNoise(t)) return;
  if (m.type() === 'error') errors.push(t);
  if (m.type() === 'warning') warnings.push(t);
});
page.on('pageerror', (e) => errors.push(`pageerror: ${e.message}`));

/** What is actually in localStorage, not what the game says it put there. */
const stored = () => page.evaluate(() => {
  try {
    const raw = localStorage.getItem('super-vexo/save');
    if (!raw) return null;
    const p = JSON.parse(raw);
    return {
      v: p.v,
      manual: p.manual ? { kind: p.manual.kind, inTown: p.manual.inTown } : null,
      auto: p.auto ? { kind: p.auto.kind, reason: p.auto.reason, inTown: p.auto.inTown } : null,
    };
  } catch { return null; }
});

async function waitForState(want, timeoutMs = 14000) {
  const started = Date.now();
  while (Date.now() - started < timeoutMs) {
    if (await page.evaluate(() => window.__superVexo.onFoot.state) === want) return true;
    await page.waitForTimeout(80);
  }
  return false;
}

await page.goto(`${URL}/?land=1&skipIntro=1`, { waitUntil: 'load' });
await page.waitForTimeout(200);
// A save left over from a previous run would make every check below
// pass for the wrong reason.
await page.evaluate(() => localStorage.removeItem('super-vexo/save'));
await page.reload({ waitUntil: 'load' });
await page.waitForTimeout(800);
await page.keyboard.press('Space');
await page.waitForTimeout(600);

check('nothing is saved to begin with', (await stored()) === null);

// --- Autosave: landing ---------------------------------------------------------
await page.keyboard.press('KeyL');
check('he gets out of the ship', await waitForState('walk'));
await page.waitForTimeout(300);

let save = await stored();
check('landing writes an autosave',
  save?.auto != null && save.auto.reason === 'landed',
  save?.auto ? `reason "${save.auto.reason}"` : 'nothing stored');
check('and it knows he is down in the town', save?.auto?.inTown === true);
check('the manual slot is still empty', save?.manual == null);

// --- The System tab and its SAVE button -----------------------------------------
await page.keyboard.press('KeyE');
await page.waitForTimeout(400);
check('the inventory opens on his weapons',
  await page.evaluate(() => window.__superVexo.inventory.tab) === 'weapons');

const tabs = await page.evaluate(() =>
  [...document.querySelectorAll('.inventory__tab')].map((t) => t.textContent.trim()));
// TotK's System tab is the last one on the right, and that is the whole
// point of where the save button lives.
check('System is the tab at the far right',
  tabs.length >= 2 && /system/i.test(tabs[tabs.length - 1]), tabs.join(' | '));

await page.keyboard.press('ArrowRight');
await page.waitForTimeout(300);
check('the right arrow (pad R) walks along to it',
  await page.evaluate(() => window.__superVexo.inventory.tab) === 'system');

const sysVisible = await page.evaluate(() => {
  const sys = document.querySelector('.inventory__system');
  const btn = document.querySelector('.inventory__save');
  return {
    shown: sys && !sys.hidden && getComputedStyle(sys).display !== 'none',
    label: btn?.textContent.trim(),
    note: document.querySelector('.inventory__saved')?.textContent.trim(),
  };
});
check('the save button is there', sysVisible.shown && /save/i.test(sysVisible.label ?? ''),
  `${sysVisible.label} — "${sysVisible.note}"`);

await page.click('.inventory__save');
await page.waitForTimeout(300);
save = await stored();
check('pressing it saves the game', save?.manual != null,
  save?.manual ? `kind "${save.manual.kind}", in town` : 'nothing stored');
check('and it says so on screen',
  /saved/i.test(await page.evaluate(() =>
    document.querySelector('.inventory__saved')?.textContent ?? '')));

await page.keyboard.press('ArrowLeft');
await page.waitForTimeout(250);
check('and the arrow walks back to his weapons',
  await page.evaluate(() => window.__superVexo.inventory.tab) === 'weapons');
await page.keyboard.press('Escape');
await page.waitForTimeout(300);

// --- Dying ----------------------------------------------------------------------
// Taking the hearts off him directly rather than waiting for a bokoblin
// to do it: what is being tested is what happens AFTER the last heart,
// and a fight makes that arrive at an unpredictable moment.
// One big hit rather than five small ones: a hit starts a mercy window,
// so five in a row in the same frame would be four hits at a man who
// cannot be hurt yet — and a loop waiting for the hearts to fall never
// ends.
await page.evaluate(() => {
  const f = window.__superVexo.onFoot;
  const p = f.position;
  f.takeHit(f.maxHearts, p.x + 2, p.z);
});
await page.waitForTimeout(150);
const dying = await page.evaluate(() => ({
  gait: window.__superVexo.onFoot.vexo.gait,
  down: window.__superVexo.onFoot.down,
  sign: !document.getElementById('game-over').hidden,
}));
check('losing the last heart plays a death, not a sign', dying.gait === 'dying' && !dying.sign,
  `gait ${dying.gait}, sign ${dying.sign ? 'up already' : 'waiting'}`);

// He should be visibly on his way down: the fall rotates his body and
// drops it, so his head ends up lower than his hips.
await page.waitForTimeout(900);
const falling = await page.evaluate(() => {
  const v = window.__superVexo.onFoot.vexo;
  v.group.updateWorldMatrix(true, true);
  const V = v.group.position.constructor;
  const head = new V();
  let found = null;
  v.group.traverse((o) => {
    if (o.isMesh && o.geometry.type === 'SphereGeometry'
        && o.material.color?.getHexString?.() === 'd8a684' && !found) found = o;
  });
  if (!found) return null;
  found.getWorldPosition(head);
  return { headY: +head.y.toFixed(2), footY: +v.group.position.y.toFixed(2) };
});
check('he goes down as he falls', falling != null && falling.headY - falling.footY < 1.4,
  falling ? `head ${falling.headY}m, feet ${falling.footY}m` : 'head not found');

// The sign waits for him to finish — DYING_TIME is 2.4s.
const signUp = await (async () => {
  const started = Date.now();
  while (Date.now() - started < 6000) {
    if (await page.evaluate(() => window.__superVexo.gameOver.isOpen)) return true;
    await page.waitForTimeout(100);
  }
  return false;
})();
check('then GAME OVER comes up', signUp);

const sign = await page.evaluate(() => ({
  title: document.querySelector('.game-over__sign')?.textContent.trim(),
  ask: document.querySelector('.game-over__ask')?.textContent.trim(),
  buttons: [...document.querySelectorAll('.game-over__btn')].map((b) => b.textContent.trim()),
}));
check('it says GAME OVER', /game over/i.test(sign.title ?? ''), sign.title);
check('and asks about the last save', /continue/i.test(sign.ask ?? ''), sign.ask);
check('with a yes and a no', sign.buttons.length === 2
  && /yes/i.test(sign.buttons[0]) && /no/i.test(sign.buttons[1]), sign.buttons.join(' / '));

// Nothing else may open over the top of it.
await page.keyboard.press('KeyE');
await page.waitForTimeout(250);
check('the inventory cannot be opened over it',
  !(await page.evaluate(() => window.__superVexo.inventory.isOpen)));

// --- Yes: back to the last save --------------------------------------------------
await page.keyboard.press('Enter');
await page.waitForTimeout(700);
const continued = await page.evaluate(() => {
  const g = window.__superVexo;
  return {
    open: g.gameOver.isOpen,
    state: g.state,
    inTown: g.surface.active,
    hearts: g.onFoot.hearts,
    down: g.onFoot.down,
    onFootState: g.onFoot.state,
  };
});
check('YES puts the sign away', !continued.open);
check('and drops him back into the game flying', continued.state === 'fly',
  `state ${continued.state}`);
check('in the town he saved in', continued.inTown);
check('with his hearts back', continued.hearts === 5 && !continued.down,
  `${continued.hearts} hearts`);
check('and back in the ship', continued.onFootState === 'off', continued.onFootState);

// The save must survive being loaded: a player who dies twice needs it
// the second time too.
check('the save is still there afterwards', (await stored())?.manual != null);

// --- No: back to the title --------------------------------------------------------
await page.evaluate(() => window.__superVexo.gameOver.show(true));
await page.waitForTimeout(200);
await page.keyboard.press('ArrowRight');   // move the choice to NO
await page.waitForTimeout(150);
await page.keyboard.press('Enter');
await page.waitForTimeout(700);
const quit = await page.evaluate(() => ({
  open: window.__superVexo.gameOver.isOpen,
  state: window.__superVexo.state,
  card: !document.getElementById('title-card').hidden,
}));
check('NO goes back to the title screen', !quit.open && quit.state === 'title',
  `state ${quit.state}`);
check('and the title card is showing', quit.card);

// --- With nothing saved -----------------------------------------------------------
const noSave = await page.evaluate(async () => {
  localStorage.removeItem('super-vexo/save');
  const g = window.__superVexo;
  g.gameOver.show(g.saves.has);
  await new Promise((r) => requestAnimationFrame(r));
  const yes = document.querySelector('[data-yes]');
  const out = {
    ask: document.querySelector('.game-over__ask').textContent.trim(),
    yesDisabled: yes.disabled,
    noChosen: document.querySelector('[data-no]').classList.contains('game-over__btn--on'),
  };
  g.gameOver.hide();
  return out;
});
check('with nothing saved it does not offer to continue',
  noSave.yesDisabled && noSave.noChosen && /no saved game/i.test(noSave.ask),
  noSave.ask);

check('no console errors', errors.length === 0, errors.slice(0, 3).join(' | '));
check('no console warnings', warnings.length === 0, warnings.slice(0, 3).join(' | '));

await browser.close();
if (failed) {
  console.error('\nSMOKE FAILED');
  process.exit(1);
}
console.log('\nSMOKE PASSED');
