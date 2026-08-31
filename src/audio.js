// Procedural audio with the Web Audio API, plus one piece of music.
//
// Three voices:
//   - **Ambient hum**: two detuned sine/triangle oscillators through a
//     low-pass filter. The detuning makes a slow beat ("wow-wow-wow"),
//     which sounds way more "ship-like" than a pure tone.
//   - **Thrust**: looped white-noise buffer through a band-pass filter,
//     gain modulated by how much throttle the player is asking for.
//     Pitch rises slightly with throttle so it feels "engine spooling".
//   - **Sprint theme**: an actual mp3, played while Vexo is sprinting on
//     foot and faded out when he stops. The one thing here that is not
//     synthesised.
//
// The theme file is the first SIX SECONDS of the track, cut on frame
// boundaries by `tools/trim-mp3.mjs`. A sprint lasts about five seconds,
// so the rest of it was never going to be heard, and trimming it took
// the download from 333 KB to 121 KB. The whole track is kept beside it
// as `invincibility_theme.source.mp3` — nothing imports that, so Vite
// leaves it out of the build, and a different cut is one command away.
//
// The theme is a plain <audio> element rather than a buffer in the Web
// Audio graph, deliberately. Routing it through the graph would mix it
// with the master gain, which is tidier — but it needs
// createMediaElementSource, and a media element loaded from a file://
// URL counts as cross-origin, which silences that route in the native
// iOS wrapper. An element's own `volume` works everywhere.
//
// Audio contexts can only START in response to a user gesture (browser
// autoplay policy). `start()` must be called from a click/keydown.
// Outside of that gesture we silently do nothing.

import sprintThemeUrl from './assets/invincibility_theme.mp3';
// Marco's game-over music. He handed it over as `game_over.mp3`, which
// turned out to be a WAV with the wrong name on it — eight seconds of
// uncompressed audio, 1.4 MB, bigger than the whole game. The original
// is kept beside this as `game_over.source.wav`; what ships is 80 KB of
// AAC, which every browser and the iOS wrapper play.
import gameOverThemeUrl from './assets/game_over.m4a';

const HUM_BASE_HZ = 80;
const HUM_DETUNE_CENTS = 18;
const HUM_GAIN = 0.06;

const THRUST_NOISE_SECONDS = 2.5;
const THRUST_FILTER_BASE_HZ = 280;
const THRUST_FILTER_RANGE_HZ = 520;
const THRUST_MAX_GAIN = 0.18;
const THRUST_GAIN_HALFLIFE = 0.18; // smoothing on throttle changes

const THEME_GAIN = 0.45;
const THEME_FADE_S = 0.3;          // seconds to fade in and out
// The game-over sting is louder than the sprint theme and does not fade
// in: it is the last thing that happens, and it should land.
const GAME_OVER_GAIN = 0.6;

export function createAudio() {
  let ctx = null;
  // The sprint theme. Built on first use rather than at load: a 333 KB
  // download nobody has asked for yet is not worth blocking anything.
  let themeEl = null;
  let themeWanted = false;
  let gameOverEl = null;
  let themeLevel = 0;
  let started = false;
  let masterGain = null;
  let hum = null;
  let thrust = null;
  let lastThrottle = 0;

  /** Begin audio. Safe to call multiple times. Call from a user gesture. */
  function start() {
    if (started) return true;
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return false; // very old browser; soundless game is still playable

    ctx = new AC();
    masterGain = ctx.createGain();
    masterGain.gain.value = 1.0;
    masterGain.connect(ctx.destination);

    hum = createHum(ctx, masterGain);
    thrust = createThrust(ctx, masterGain);
    started = true;
    return true;
  }

  function setThrottle(value) {
    // value in [-1, 1]; use magnitude for thrust intensity.
    if (!started) return;
    lastThrottle = Math.min(1, Math.abs(value));
  }

  /**
   * Play the theme while this is true, fade it out when it goes false.
   * Called every frame by the game loop, so it must be cheap and must
   * not restart anything it is already doing.
   */
  function setSprinting(on) {
    themeWanted = on;
    if (!on) return;
    if (!themeEl) {
      themeEl = new Audio(sprintThemeUrl);
      themeEl.loop = true;
      themeEl.preload = 'auto';
      themeEl.volume = 0;
    }
    if (themeEl.paused) {
      // From the top every time, the way a power-up theme should be.
      // A sprint is five seconds; picking up where it left off would
      // give you a different fragment of the tune each time.
      themeEl.currentTime = 0;
      // Rejected play() is not worth a console error: it means the
      // browser has not been given a gesture yet, and the next sprint
      // will have had one.
      themeEl.play().catch(() => {});
    }
  }

  /**
   * The game-over music: once, from the top, now.
   *
   * Played when the sign comes up rather than when he starts falling —
   * Marco was specific about that, and he is right. The death animation
   * has its own beat and a tune starting under it would trample on it.
   */
  function playGameOver() {
    if (!gameOverEl) {
      gameOverEl = new Audio(gameOverThemeUrl);
      gameOverEl.preload = 'auto';
    }
    gameOverEl.loop = false;
    gameOverEl.volume = GAME_OVER_GAIN;
    gameOverEl.currentTime = 0;
    // A rejected play() means the browser has had no gesture yet, which
    // cannot happen by the time somebody has died, but it is not worth
    // a console error if it ever does.
    gameOverEl.play().catch(() => {});
  }

  /** Stop it: the player has chosen, and the run is over either way. */
  function stopGameOver() {
    if (!gameOverEl) return;
    gameOverEl.pause();
    gameOverEl.currentTime = 0;
  }

  function updateTheme(dt) {
    if (!themeEl) return;
    const target = themeWanted ? THEME_GAIN : 0;
    const step = (dt / THEME_FADE_S) * THEME_GAIN;
    themeLevel = target > themeLevel
      ? Math.min(target, themeLevel + step)
      : Math.max(target, themeLevel - step);
    themeEl.volume = themeLevel;
    // Faded right out: stop it, so it isn't decoding audio nobody hears.
    if (themeLevel === 0 && !themeEl.paused) themeEl.pause();
  }

  function update(dt) {
    updateTheme(dt);
    if (!started) return;
    // Frame-rate-independent smoothing of thrust gain toward |throttle|.
    const alpha = 1 - Math.pow(2, -dt / THRUST_GAIN_HALFLIFE);
    const currentGain = thrust.gainNode.gain.value;
    const targetGain = lastThrottle * THRUST_MAX_GAIN;
    const newGain = currentGain + (targetGain - currentGain) * alpha;
    thrust.gainNode.gain.setValueAtTime(newGain, ctx.currentTime);
    // Filter sweeps up with throttle so engine "spools".
    const filterHz = THRUST_FILTER_BASE_HZ + lastThrottle * THRUST_FILTER_RANGE_HZ;
    thrust.filter.frequency.setValueAtTime(filterHz, ctx.currentTime);
  }

  /** Stop and release. Optional — useful for tests / teardown. */
  function dispose() {
    stopGameOver();
    if (themeEl) {
      themeEl.pause();
      themeEl = null;
      themeWanted = false;
      themeLevel = 0;
    }
    if (!started) return;
    try { hum.osc1.stop(); hum.osc2.stop(); } catch {}
    try { thrust.source.stop(); } catch {}
    ctx.close();
    started = false;
    ctx = null;
  }

  /**
   * One-shot rising chirp for "rover repaired". Built on the fly each
   * call: a short oscillator that ramps frequency and decays gain.
   */
  function chirp({ fromHz = 300, toHz = 900, durationS = 0.35, peakGain = 0.18 } = {}) {
    if (!started) return;
    const t0 = ctx.currentTime;
    const osc = ctx.createOscillator();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(fromHz, t0);
    osc.frequency.exponentialRampToValueAtTime(toHz, t0 + durationS);
    const g = ctx.createGain();
    g.gain.setValueAtTime(0, t0);
    g.gain.linearRampToValueAtTime(peakGain, t0 + 0.03);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + durationS);
    osc.connect(g);
    g.connect(masterGain);
    osc.start(t0);
    osc.stop(t0 + durationS + 0.05);
  }

  /** A triumphant two-note flourish for mission complete. */
  function fanfare() {
    chirp({ fromHz: 440, toHz: 660, durationS: 0.45, peakGain: 0.2 });
    setTimeout(() => chirp({ fromHz: 660, toHz: 990, durationS: 0.6, peakGain: 0.22 }), 200);
  }

  return {
    start,
    setSprinting,
    playGameOver,
    stopGameOver,
    update,
    setThrottle,
    chirp,
    fanfare,
    dispose,
    get running() { return started; },
  };
}

function createHum(ctx, dest) {
  const osc1 = ctx.createOscillator();
  const osc2 = ctx.createOscillator();
  osc1.type = 'triangle';
  osc2.type = 'triangle';
  osc1.frequency.value = HUM_BASE_HZ;
  // Detune in cents (1 semitone = 100 cents). A small detune gives a
  // slow phasing beat — that's what makes machines sound "alive".
  osc2.detune.value = HUM_DETUNE_CENTS;
  osc2.frequency.value = HUM_BASE_HZ;

  const filter = ctx.createBiquadFilter();
  filter.type = 'lowpass';
  filter.frequency.value = 320;
  filter.Q.value = 0.7;

  const gain = ctx.createGain();
  gain.gain.value = HUM_GAIN;

  osc1.connect(filter);
  osc2.connect(filter);
  filter.connect(gain);
  gain.connect(dest);

  osc1.start();
  osc2.start();
  return { osc1, osc2, filter, gain };
}

function createThrust(ctx, dest) {
  // Generate a white-noise buffer and loop it.
  const sr = ctx.sampleRate;
  const buf = ctx.createBuffer(1, sr * THRUST_NOISE_SECONDS, sr);
  const data = buf.getChannelData(0);
  for (let i = 0; i < data.length; i++) data[i] = Math.random() * 2 - 1;

  const source = ctx.createBufferSource();
  source.buffer = buf;
  source.loop = true;

  const filter = ctx.createBiquadFilter();
  filter.type = 'bandpass';
  filter.frequency.value = THRUST_FILTER_BASE_HZ;
  filter.Q.value = 1.2;

  const gainNode = ctx.createGain();
  gainNode.gain.value = 0;

  source.connect(filter);
  filter.connect(gainNode);
  gainNode.connect(dest);

  source.start();
  return { source, filter, gainNode };
}
