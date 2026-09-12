// The score.
//
// Written, not recorded: there is no audio file here, only oscillators
// and a clock. That is worth the trouble for two reasons. A recording
// of an hour of music is an hour of music to download, and a recording
// cannot follow what the player is doing — it can only be faded in and
// out of, which is why so many games sound like a radio being switched
// between stations.
//
// FIVE MOODS, ONE BAND. The title card, out in space, the open world, a
// town, and being hunted. They are not five tunes: the key never
// changes (A minor, or its relative major in a town), the instruments
// never change, and a mood is nothing but a set of fader positions and
// a tempo. Moving between them is four faders travelling over a second
// and a half, and the tempo changing at the top of the NEXT BAR so the
// change lands on a beat rather than in the middle of one.
//
// HOW IT KEEPS TIME. Not with setInterval, and not on the animation
// frame. A JavaScript timer is accurate to a frame if the machine is
// idle and to anybody's guess if it is not, and a drum machine a frame
// late is a drum machine that limps. Instead every note is scheduled
// AHEAD, against the audio clock: each update works out which
// sixteenths fall inside the next fifth of a second and books them with
// the hardware, which then plays them exactly when it was told to. A
// dropped frame cannot make the music stumble, because by the time the
// frame is dropped the notes are already sold.
//
// WHAT KEEPS IT FROM BEING ANNOYING IN ITS TURN. Marco's complaint
// about the old drone was that it never changed, and a synthesised
// score is very good at making that mistake twice. So: every note ends
// — nothing here is held down; the melodies are WRITTEN, because random
// notes are how procedural music earned its reputation; the mix sits
// under the effects rather than over them; and the mood the player
// spends an hour in is the sparsest of the five.

// A minor. Everything below is written in semitones from an A, so the
// whole score transposes by changing one number.
const TONIC_HZ = 440;
const hz = (semitones, base = TONIC_HZ) => base * 2 ** (semitones / 12);

// The four chords, as semitone offsets from A4 for the pad and from A2
// for the bass. i – VI – III – VII: the progression every hopeful piece
// of science fiction has been written over, because it never resolves
// hard enough to sound finished.
const AEOLIAN = [
  { pad: [0, 3, 7], bass: 12, arp: [0, 3, 7, 12] },      // Am
  { pad: [-4, 0, 3], bass: 8, arp: [-4, 0, 3, 8] },      // F
  { pad: [3, 7, 10], bass: 15, arp: [3, 7, 10, 15] },    // C
  { pad: [-2, 2, 5], bass: 10, arp: [-2, 2, 5, 10] },    // G
];
// A town is the same four chords starting one along, which is the
// relative major and the whole of why it sounds like somewhere to sit
// down: III – VII – i – VI.
const IONIAN = [AEOLIAN[2], AEOLIAN[3], AEOLIAN[0], AEOLIAN[1]];

// The tune. Eight bars, sixteen steps to the bar, written down:
// [bar, step, semitones from A4, length in steps]. The second half is
// mostly rests on purpose — this plays for an hour and a melody with
// nowhere to breathe is a melody you end up muting.
const MELODY = [
  [0, 0, 7, 4], [0, 4, 12, 3], [0, 8, 10, 3], [0, 12, 7, 3],
  [1, 0, 8, 6], [1, 8, 7, 4], [1, 12, 5, 3],
  [2, 0, 3, 4], [2, 4, 7, 3], [2, 8, 10, 7],
  [3, 0, 5, 4], [3, 4, 2, 3], [3, 8, -2, 7],
  [4, 0, 0, 6], [4, 8, 3, 6],
  [5, 4, 5, 4], [5, 8, 7, 7],
  [6, 0, 10, 8], [6, 8, 7, 6],
  [7, 0, 5, 8],
];

// What each mood sounds like. `bpm` and seven faders — and that really
// is the whole of the difference between the title card and being
// chased across a field.
const MOODS = {
  title: {
    bpm: 74, scale: AEOLIAN,
    pad: 0.95, bass: 0.45, arp: 0.22, lead: 0.8,
    kick: 0, snare: 0, hat: 0,
  },
  space: {
    bpm: 82, scale: AEOLIAN,
    pad: 0.85, bass: 0.6, arp: 0.7, lead: 0.45,
    kick: 0.35, snare: 0.18, hat: 0.22,
  },
  // The one that plays for an hour, and therefore the quiet one.
  ground: {
    bpm: 96, scale: AEOLIAN,
    pad: 0.55, bass: 0.5, arp: 0.34, lead: 0.2,
    kick: 0.4, snare: 0.22, hat: 0.28,
  },
  town: {
    bpm: 92, scale: IONIAN,
    pad: 0.7, bass: 0.55, arp: 0.5, lead: 0.48,
    kick: 0.34, snare: 0.3, hat: 0.32,
  },
  // Being hunted: the pad drops away, which is most of the effect. It
  // is not louder than the others — a chase that is also a volume jump
  // is one nobody enjoys twice.
  danger: {
    bpm: 138, scale: AEOLIAN,
    // Measured, not guessed. The first chase mix came out half again as
    // loud as everything else, which is a volume jump wearing urgency
    // as a hat: the tempo and the missing pad are what make it a chase,
    // and the faders are set so it sits at the same loudness as the
    // field you were walking across a second earlier.
    pad: 0.14, bass: 0.66, arp: 0.6, lead: 0.14,
    kick: 0.48, snare: 0.36, hat: 0.26,
  },
  silent: {
    bpm: 92, scale: AEOLIAN,
    pad: 0, bass: 0, arp: 0, lead: 0,
    kick: 0, snare: 0, hat: 0,
  },
};

const VOICES = ['pad', 'bass', 'arp', 'lead', 'kick', 'snare', 'hat'];

/** How far ahead notes are booked with the hardware, in seconds. */
const LOOKAHEAD = 0.2;
/** How long the faders take to travel between two moods. */
const FADE_S = 1.5;
/** How far the score steps back for the sprint theme or Marco's music. */
const DUCK = 0.16;
const DUCK_S = 0.4;

export function createMusic(ctx, dest) {
  // --- The desk -----------------------------------------------------------------
  const bus = ctx.createGain();
  bus.gain.value = 0;
  // Everything comes off the top. A synthesised mix is all edge — square
  // waves and noise bursts — and without this the score measures its
  // energy up at 5 kHz, where the ear hears "sharp" rather than "music".
  const shelf = ctx.createBiquadFilter();
  shelf.type = 'highshelf';
  shelf.frequency.value = 5200;
  shelf.gain.value = -7;
  bus.connect(shelf);
  shelf.connect(dest);

  // One delay, for the arpeggio and the lead. It is what makes a few
  // oscillators sound like somewhere rather than like a few
  // oscillators.
  const delay = ctx.createDelay(1.5);
  delay.delayTime.value = 0.36;
  const feedback = ctx.createGain();
  feedback.gain.value = 0.34;
  const echo = ctx.createGain();
  echo.gain.value = 0.5;
  delay.connect(feedback);
  feedback.connect(delay);
  delay.connect(echo);
  echo.connect(bus);
  const send = ctx.createGain();
  send.gain.value = 1;
  send.connect(delay);

  // A fader per voice, which is the only thing a mood actually changes.
  const fader = {};
  for (const v of VOICES) {
    const g = ctx.createGain();
    g.gain.value = 0;
    g.connect(bus);
    fader[v] = g;
  }
  fader.arp.connect(send);
  fader.lead.connect(send);

  // One second of noise, borrowed by every drum. Making a fresh buffer
  // per hit would be an allocation on the beat.
  const noise = ctx.createBuffer(1, ctx.sampleRate, ctx.sampleRate);
  const nd = noise.getChannelData(0);
  for (let i = 0; i < nd.length; i++) nd[i] = Math.random() * 2 - 1;

  // --- State --------------------------------------------------------------------
  let mood = 'title';
  let level = 0.9;
  let ducked = false;
  let playing = false;
  let bpm = MOODS.title.bpm;
  let pendingBpm = null;
  let scale = MOODS.title.scale;
  let pendingScale = null;
  let step = 0;               // sixteenths since the music started
  let nextStepAt = 0;         // when that step is due, on the audio clock
  let scheduled = 0;          // how many notes have been booked, for tests

  const stepSeconds = () => 60 / bpm / 4;

  function applyBusGain(at = ctx.currentTime, ramp = DUCK_S) {
    const target = level * (ducked ? DUCK : 1);
    bus.gain.cancelScheduledValues(at);
    bus.gain.setValueAtTime(bus.gain.value, at);
    bus.gain.linearRampToValueAtTime(target, at + ramp);
  }

  // --- Instruments ----------------------------------------------------------------
  //
  // Every one of these builds its nodes, plays, and stops. Nothing is
  // held: a note that never ends is the drone this score was written to
  // replace.

  /** A plain tone with an attack and a decay, into one of the faders. */
  function tone(voice, freq, at, dur, {
    type = 'sine', gain = 0.2, attack = 0.01, detune = 0, cutoff = 0,
  } = {}) {
    const osc = ctx.createOscillator();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, at);
    if (detune) osc.detune.setValueAtTime(detune, at);
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, at);
    g.gain.linearRampToValueAtTime(gain, at + attack);
    // Exponential, because that is how anything that was struck or
    // plucked actually dies away.
    g.gain.exponentialRampToValueAtTime(0.0001, at + dur);
    let tail = g;
    if (cutoff) {
      const lp = ctx.createBiquadFilter();
      lp.type = 'lowpass';
      lp.frequency.setValueAtTime(cutoff, at);
      g.connect(lp);
      tail = lp;
    }
    osc.connect(g);
    tail.connect(fader[voice]);
    osc.start(at);
    osc.stop(at + dur + 0.05);
    scheduled++;
  }

  /** A noise burst: the drums that are not the kick. */
  function hit(voice, at, dur, { highpass = 1200, gain = 0.3, Q = 0.7 } = {}) {
    const src = ctx.createBufferSource();
    src.buffer = noise;
    // A different slice of the second each time, so the snare is not the
    // same 120 ms of noise over and over.
    src.playbackRate.value = 0.8 + Math.random() * 0.4;
    const hp = ctx.createBiquadFilter();
    hp.type = 'highpass';
    hp.frequency.value = highpass;
    hp.Q.value = Q;
    const g = ctx.createGain();
    g.gain.setValueAtTime(gain, at);
    g.gain.exponentialRampToValueAtTime(0.0001, at + dur);
    src.connect(hp);
    hp.connect(g);
    g.connect(fader[voice]);
    src.start(at, Math.random() * 0.5, dur + 0.02);
    scheduled++;
  }

  /** The kick: a sine falling off a cliff. */
  function kick(at) {
    const osc = ctx.createOscillator();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(128, at);
    osc.frequency.exponentialRampToValueAtTime(44, at + 0.11);
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.9, at);
    g.gain.exponentialRampToValueAtTime(0.0001, at + 0.19);
    osc.connect(g);
    g.connect(fader.kick);
    osc.start(at);
    osc.stop(at + 0.24);
    scheduled++;
  }

  // --- The arrangement --------------------------------------------------------------

  /**
   * Book everything that happens on one sixteenth.
   *
   * `i` counts sixteenths from the beginning and never resets, so the
   * bar, the beat and the position in the eight-bar tune all come out
   * of it with a remainder.
   */
  function scheduleStep(i, at) {
    const beat = i % 16;              // where in the bar
    const bar = Math.floor(i / 16) % 8;
    const chord = scale[bar % 4];
    const secs = stepSeconds();
    const fast = bpm > 120;

    // The pad: the chord, once a bar, lasting the bar. Two oscillators
    // a few cents apart per note — the beating between them is the
    // whole sound, and it is the one thing worth keeping from the drone
    // this replaced.
    if (beat === 0 && fader.pad.gain.value > 0.02) {
      for (const n of chord.pad) {
        const f = hz(n);
        tone('pad', f, at, secs * 16.5, {
          type: 'sawtooth', gain: 0.06, attack: 0.35, cutoff: 900,
        });
        tone('pad', f, at, secs * 16.5, {
          type: 'sawtooth', gain: 0.06, attack: 0.45, detune: 11, cutoff: 760,
        });
      }
    }

    // The bass: on the beat, and on every eighth once the tempo is up.
    // That single change is most of what makes the chase feel like one.
    const bassStep = fast ? beat % 2 === 0 : beat % 4 === 0;
    if (bassStep && fader.bass.gain.value > 0.02) {
      tone('bass', hz(chord.bass, TONIC_HZ / 4), at, fast ? secs * 1.6 : secs * 3.2, {
        type: 'square', gain: 0.28, attack: 0.006, cutoff: 320,
      });
    }

    // The arpeggio: sixteenths through the chord, up and down, with the
    // delay behind it. Up-and-down rather than round and round, because
    // a cycle whose length divides the bar sounds like a machine.
    if (fader.arp.gain.value > 0.02) {
      const seq = chord.arp;
      const span = seq.length * 2 - 2;
      const k = i % span;
      const n = seq[k < seq.length ? k : span - k];
      tone('arp', hz(n + 12), at, secs * 1.8, {
        type: 'triangle', gain: 0.1, attack: 0.004, cutoff: 3200,
      });
    }

    // The tune, over eight bars.
    if (fader.lead.gain.value > 0.02) {
      for (const [b, s, n, len] of MELODY) {
        if (b !== bar || s !== beat) continue;
        tone('lead', hz(n), at, secs * len * 0.95, {
          type: 'triangle', gain: 0.14, attack: 0.02, cutoff: 2600,
        });
      }
    }

    // Drums. The hats are EIGHTHS, not sixteenths, and that is not a
    // stylistic choice: at 138 bpm a sixteenth-note hat is a hiss eleven
    // times a second, which measured as more energy at 6 kHz than the
    // music had anywhere else.
    if (beat % 8 === 0 && fader.kick.gain.value > 0.02) kick(at);
    if (fast && beat === 12 && fader.kick.gain.value > 0.02) kick(at);
    if (beat % 16 === 4 || beat % 16 === 12) {
      if (fader.snare.gain.value > 0.02) {
        hit('snare', at, 0.13, { highpass: 1500, gain: 0.4 });
      }
    }
    if (beat % 2 === 0 && fader.hat.gain.value > 0.02) {
      hit('hat', at, beat % 4 === 0 ? 0.045 : 0.03, {
        highpass: 6200, gain: beat % 4 === 0 ? 0.16 : 0.1,
      });
    }
  }

  // --- The clock ---------------------------------------------------------------------

  function play() {
    if (playing) return;
    playing = true;
    step = 0;
    nextStepAt = ctx.currentTime + 0.08;
    setMood(mood);
    applyBusGain(ctx.currentTime, 0.6);
  }

  /**
   * Called every frame. Books whatever falls inside the next fifth of a
   * second and returns — the work per frame is a handful of nodes, and
   * the music is already sold well past the next hitch.
   */
  function update() {
    if (!playing) return;
    const now = ctx.currentTime;
    // Coming back from a suspended context (a backgrounded tab), the
    // clock has run on without us. Catching up by playing every missed
    // sixteenth would be a burst of noise, so we simply start again from
    // here, on a bar line.
    if (nextStepAt < now - 1) {
      nextStepAt = now + 0.05;
      step = Math.ceil(step / 16) * 16;
    }
    while (nextStepAt < now + LOOKAHEAD) {
      scheduleStep(step, nextStepAt);
      nextStepAt += stepSeconds();
      step++;
      // The top of a bar is where a tempo or a key may change. Anywhere
      // else and the change lands in the middle of a beat, which is
      // heard as a stumble rather than as a new mood.
      if (step % 16 === 0) {
        if (pendingBpm !== null) { bpm = pendingBpm; pendingBpm = null; }
        if (pendingScale) { scale = pendingScale; pendingScale = null; }
      }
    }
  }

  /**
   * Move the faders. The tempo waits for the next bar; the faders do
   * not, because a fader is a continuous thing and nobody hears where
   * it started.
   */
  let applied = false;
  function setMood(name) {
    if (!MOODS[name]) return;
    // Called every frame by the game, which does not know whether
    // anything has changed. Re-ramping the faders on every one of them
    // would restart the travel from wherever it had reached, and a
    // fader that is always a second and a half from its target never
    // arrives — the same trap `duck()` fell into.
    if (name === mood && applied) return;
    applied = true;
    mood = name;
    const mix = MOODS[name];
    const at = ctx.currentTime;
    for (const v of VOICES) {
      const g = fader[v].gain;
      g.cancelScheduledValues(at);
      g.setValueAtTime(g.value, at);
      g.linearRampToValueAtTime(mix[v], at + FADE_S);
    }
    if (mix.bpm !== bpm) pendingBpm = mix.bpm;
    if (mix.scale !== scale) pendingScale = mix.scale;
    // The delay is a dotted eighth of whatever tempo is coming, which is
    // why it always sounds like part of the music rather than like an
    // effect left switched on.
    delay.delayTime.linearRampToValueAtTime((60 / mix.bpm) * 0.75, at + FADE_S);
  }

  return {
    play,
    update,
    setMood,

    /** How loud the score is: the player's on / low / off. */
    setLevel(v) {
      level = Math.max(0, Math.min(1, v));
      applyBusGain();
    },

    /**
     * Step back for Marco's music and the sprint theme.
     *
     * Called every frame by the mixer, so it must do nothing at all when
     * nothing has changed: re-ramping a gain every frame restarts the
     * ramp from wherever it has reached, and a value that is always
     * 400 ms from its target never arrives.
     */
    duck(on) {
      const want = !!on;
      if (want === ducked) return;
      ducked = want;
      applyBusGain();
    },

    /** What the band is doing. For the tests, and for the HUD if ever. */
    get info() {
      const faders = {};
      for (const v of VOICES) faders[v] = +fader[v].gain.value.toFixed(3);
      return {
        mood, bpm, level, ducked, playing, scheduled,
        step,
        bar: Math.floor(step / 16) % 8,
        bus: +bus.gain.value.toFixed(3),
        faders,
      };
    },
  };
}
