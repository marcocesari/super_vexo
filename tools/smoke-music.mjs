// The score, listened to.
//
// Every other suite in here checks something you could also check by
// looking. This one cannot: the question "is the music any good" has no
// test, but a surprising number of the ways music goes WRONG do, and
// they are the ways a synthesised score goes wrong in particular.
//
//   Is anything coming out at all?
//   Does it clip?
//   Does it MOVE, or is it a drone? — the original complaint, and the
//     one thing a mix of oscillators will happily go back to being.
//   Does it sit where music sits in the spectrum? A centroid up at
//     6 kHz is not urgency, it is a headache.
//   Do the moods actually differ, and is the chase not simply louder?
//
// The instrument is an AnalyserNode on the master bus, which is as
// close to a pair of ears as a test gets.
//
// Run while `npm run dev` is up.
import { launchBrowser } from './lib/browser.mjs';

const URL = process.env.SMOKE_URL ?? 'http://127.0.0.1:5173';
const errors = [];
let failed = false;
function check(label, ok, detail = '') {
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${label}${detail ? `  (${detail})` : ''}`);
  if (!ok) failed = true;
}

const browser = await launchBrowser();
const page = await browser.newPage({ viewport: { width: 900, height: 520 } });
page.on('pageerror', (e) => errors.push(`pageerror: ${e.message}`));
page.on('console', (m) => {
  if (m.type() === 'error' && !/404|ReadPixels|CONTEXT_LOST/i.test(m.text())) errors.push(m.text());
});

await page.goto(`${URL}/?land=1&skipIntro=1&peaceful=1`, { waitUntil: 'load' });
await page.waitForTimeout(1400);
await page.keyboard.press('Space');           // the gesture the audio needs
await page.waitForTimeout(1500);

// The ears. Hung on the master bus, where everything the player hears
// passes: the score, the engine and the thrust together.
await page.evaluate(() => {
  const g = window.__superVexo;
  const ctx = g.audio.context;
  const an = ctx.createAnalyser();
  an.fftSize = 2048;
  an.smoothingTimeConstant = 0;
  g.audio.master.connect(an);
  window.__ears = an;
});

/**
 * Listen for a while and report what came out.
 *
 * The loudness is taken in tenth-of-a-second windows rather than as one
 * number over the whole take, because the interesting question is not
 * how loud it is but whether it CHANGES — which is the difference
 * between music and a drone, and the whole of what was wrong before.
 */
const listen = async (ms = 2200) => page.evaluate(async (span) => {
  const an = window.__ears;
  const time = new Float32Array(an.fftSize);
  const freq = new Uint8Array(an.frequencyBinCount);
  const ctx = window.__superVexo.audio.context;
  const windows = [];
  let peak = 0;
  const spectrum = new Float64Array(an.frequencyBinCount);
  let takes = 0;
  const until = performance.now() + span;
  while (performance.now() < until) {
    await new Promise((r) => requestAnimationFrame(r));
    an.getFloatTimeDomainData(time);
    let sum = 0;
    for (let i = 0; i < time.length; i++) {
      const v = time[i];
      sum += v * v;
      if (Math.abs(v) > peak) peak = Math.abs(v);
    }
    windows.push(Math.sqrt(sum / time.length));
    an.getByteFrequencyData(freq);
    // Back to amplitude before averaging. The byte data is in decibels,
    // and a decibel scale flatters the top end: a hiss 40 dB down still
    // reads as half the height of the bass, so a centroid taken off it
    // says 6 kHz about music that plainly is not.
    for (let i = 0; i < freq.length; i++) {
      const db = an.minDecibels + (freq[i] / 255) * (an.maxDecibels - an.minDecibels);
      spectrum[i] += freq[i] === 0 ? 0 : 10 ** (db / 20);
    }
    takes++;
  }
  // Where the energy sits, in Hz: the amplitude-weighted mean bin.
  let num = 0;
  let den = 0;
  const hzPerBin = ctx.sampleRate / 2 / an.frequencyBinCount;
  for (let i = 0; i < spectrum.length; i++) {
    const v = spectrum[i] / takes;
    num += v * (i * hzPerBin);
    den += v;
  }
  windows.sort((a, b) => a - b);
  const at = (f) => windows[Math.min(windows.length - 1, Math.floor(windows.length * f))];
  const rms = windows.reduce((a, b) => a + b, 0) / windows.length;
  return {
    rms: +rms.toFixed(4),
    peak: +peak.toFixed(3),
    quiet: +at(0.1).toFixed(4),
    loud: +at(0.9).toFixed(4),
    centroid: Math.round(den ? num / den : 0),
    windows: windows.length,
  };
}, ms);

const info = async () => page.evaluate(() => window.__superVexo.audio.music);

// --- It is playing at all ---------------------------------------------------------
const first = await info();
check('there is a band, and it is playing', first?.playing === true,
  `${first?.mood} at ${first?.bpm} bpm`);

// --- Each mood, driven by putting the game in it -----------------------------------
//
// Nothing here calls setMood: the game decides the mood every frame from
// where the player is and what is after him, so the only honest way to
// hear a mood is to arrange for it.
const moods = {};

// TOWN — where the game puts you: the capital's shipport.
await page.waitForTimeout(1800);
moods.town = { ...(await listen()), info: await info() };

// GROUND — the open world, well away from anywhere.
await page.evaluate(() => {
  const g = window.__superVexo;
  const w = g.surface.world;
  let spot = null;
  for (let i = 1; i < 4000 && !spot; i++) {
    const a = i * 0.618 * Math.PI * 2;
    const r = 3000 + 20 * i;
    const x = w.spawn.x + Math.cos(a) * r;
    const z = w.spawn.z + Math.sin(a) * r;
    if (w.info.settlements.some((s) => Math.hypot(s.x - x, s.z - z) < s.radius + 900)) continue;
    if (w.terrain.heightAt(x, z) < 20) continue;
    spot = { x, z };
  }
  const y = w.groundHeightAt(spot.x, spot.z);
  g.ship.mesh.position.set(spot.x, -20000 + y + 60, spot.z);
  g.ship.velocity.set(0, 0, 0);
});
await page.waitForTimeout(2600);
moods.ground = { ...(await listen()), info: await info() };

// DANGER — something is chasing him. The camps are asked directly
// rather than arranged for: which bokoblin is looking at you and when
// is not a thing a test can stage without waiting all afternoon.
await page.evaluate(() => {
  Object.defineProperty(window.__superVexo.monsters, 'hunting', {
    get: () => true, configurable: true,
  });
});
await page.waitForTimeout(2600);
moods.danger = { ...(await listen()), info: await info() };
await page.evaluate(() => {
  Object.defineProperty(window.__superVexo.monsters, 'hunting', {
    get: () => false, configurable: true,
  });
});

// SPACE — climb out of the atmosphere. The chase music holds for five
// seconds after the last monster, so this waits for it to let go.
await page.evaluate(() => {
  const g = window.__superVexo;
  g.ship.mesh.position.set(0, 4000, 0);
  g.ship.velocity.set(0, 0, 0);
});
await page.waitForTimeout(7000);
moods.space = { ...(await listen()), info: await info() };

for (const [name, m] of Object.entries(moods)) {
  console.log(`      ${name.padEnd(7)} ${m.info.mood.padEnd(7)} ${String(m.info.bpm).padStart(3)} bpm`
    + ` · rms ${m.rms} · peak ${m.peak} · ${m.centroid} Hz`);
}

check('each place has its own music', moods.town.info.mood === 'town'
  && moods.ground.info.mood === 'ground' && moods.danger.info.mood === 'danger'
  && moods.space.info.mood === 'space',
  Object.values(moods).map((m) => m.info.mood).join(' → '));
check('and its own tempo', new Set(Object.values(moods).map((m) => m.info.bpm)).size === 4,
  Object.values(moods).map((m) => m.info.bpm).join(', '));

// --- What actually comes out of the speaker ----------------------------------------
for (const [name, m] of Object.entries(moods)) {
  check(`${name}: something is coming out`, m.rms > 0.012, `rms ${m.rms}`);
  check(`${name}: and it is not clipping`, m.peak < 0.99, `peak ${m.peak}`);
  // The original complaint, in a number. A drone's loud and quiet
  // tenths are the same; a tune's are not.
  check(`${name}: it moves rather than drones`, m.loud > m.quiet * 1.8,
    `quiet ${m.quiet} vs loud ${m.loud} — ×${(m.loud / m.quiet).toFixed(1)}`);
  // Music lives between about 1 and 3 kHz. Much above that and what you
  // have is not a tune, it is a hiss with opinions.
  check(`${name}: it sits where music sits`, m.centroid > 600 && m.centroid < 4200,
    `${m.centroid} Hz`);
}

// --- The chase is a change, not a volume knob ---------------------------------------
const others = ['town', 'ground', 'space'].map((k) => moods[k].rms);
const average = others.reduce((a, b) => a + b, 0) / others.length;
check('being chased is faster and thinner, not simply louder',
  moods.danger.rms < average * 1.5 && moods.danger.info.bpm > 120
  && moods.danger.info.faders.pad < moods.ground.info.faders.pad,
  `rms ${moods.danger.rms} against ${average.toFixed(4)} elsewhere,`
  + ` pad ${moods.danger.info.faders.pad} vs ${moods.ground.info.faders.pad}`);

// --- Turning it down ------------------------------------------------------------------
const cycle = async () => page.evaluate(() => window.__superVexo.audio.cycleMusic());
check('the score starts on', (await info()).level > 0.5);
const low = await cycle();
await page.waitForTimeout(900);
const lowHeard = await listen(1200);
check('one press turns it down', low === 'low' && lowHeard.rms < moods.space.rms,
  `${low}: rms ${lowHeard.rms} against ${moods.space.rms}`);
const off = await cycle();
await page.waitForTimeout(1200);
const offHeard = await listen(1200);
// Not silence: the ship is still flying, and its engine is not the
// score's to switch off. What is left has to be a good deal less than
// what the music was adding.
check('another turns it off', off === 'off' && (await info()).level === 0
  && offHeard.rms < moods.space.rms * 0.45,
  `${off}: rms ${offHeard.rms} against ${moods.space.rms} with the score on`);
const on = await cycle();
await page.waitForTimeout(1200);
check('and a third puts it back', on === 'on' && (await info()).level > 0.5);

// It is remembered, which matters for a setting nobody wants to set
// twice.
await cycle();
await page.reload({ waitUntil: 'load' });
await page.waitForTimeout(1300);
await page.keyboard.press('Space');
await page.waitForTimeout(900);
check('the setting survives a reload',
  (await page.evaluate(() => window.__superVexo.audio.musicChoice)) === 'low',
  await page.evaluate(() => window.__superVexo.audio.musicChoice));
await page.evaluate(() => {
  const a = window.__superVexo.audio;
  while (a.musicChoice !== 'on') a.cycleMusic();
});

// --- Ducking, called sixty times a second ----------------------------------------------
//
// The mixer calls duck() every frame whether anything has changed or
// not. Re-ramping a gain on every one of those restarts the ramp from
// wherever it has reached — the value creeps towards the target and
// never gets there. It is the kind of bug that sounds like "the music
// is a bit quiet".
const duck = await page.evaluate(async () => {
  const a = window.__superVexo.audio;
  const bus = () => a.music.bus;
  const settle = async (n) => { for (let i = 0; i < n; i++) await new Promise((r) => requestAnimationFrame(r)); };
  await settle(40);
  const before = bus();
  // Through the game-over music rather than the sprint theme: the game
  // loop sets `setSprinting` from the walker every frame, so a test that
  // asked for it would be overruled sixty times a second.
  a.playGameOver();
  await settle(70);
  const under = bus();
  a.stopGameOver();
  await settle(90);
  return { before, under, after: bus() };
});
check('the score steps back for the music Marco wrote', duck.under < duck.before * 0.4,
  `bus ${duck.before} → ${duck.under}`);
check('and comes all the way back up, not most of the way',
  Math.abs(duck.after - duck.before) < 0.05, `bus back to ${duck.after}`);

check('no console errors', errors.length === 0, errors.slice(0, 3).join(' | '));

await browser.close();
console.log(failed ? '\nSMOKE FAILED' : '\nSMOKE PASSED');
process.exit(failed ? 1 : 0);
