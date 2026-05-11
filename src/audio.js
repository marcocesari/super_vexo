// Procedural audio with the Web Audio API. No asset files.
//
// Two voices:
//   - **Ambient hum**: two detuned sine/triangle oscillators through a
//     low-pass filter. The detuning makes a slow beat ("wow-wow-wow"),
//     which sounds way more "ship-like" than a pure tone.
//   - **Thrust**: looped white-noise buffer through a band-pass filter,
//     gain modulated by how much throttle the player is asking for.
//     Pitch rises slightly with throttle so it feels "engine spooling".
//
// Audio contexts can only START in response to a user gesture (browser
// autoplay policy). `start()` must be called from a click/keydown.
// Outside of that gesture we silently do nothing.

const HUM_BASE_HZ = 80;
const HUM_DETUNE_CENTS = 18;
const HUM_GAIN = 0.06;

const THRUST_NOISE_SECONDS = 2.5;
const THRUST_FILTER_BASE_HZ = 280;
const THRUST_FILTER_RANGE_HZ = 520;
const THRUST_MAX_GAIN = 0.18;
const THRUST_GAIN_HALFLIFE = 0.18; // smoothing on throttle changes

export function createAudio() {
  let ctx = null;
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

  function update(dt) {
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
    if (!started) return;
    try { hum.osc1.stop(); hum.osc2.stop(); } catch {}
    try { thrust.source.stop(); } catch {}
    ctx.close();
    started = false;
    ctx = null;
  }

  return {
    start,
    update,
    setThrottle,
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
