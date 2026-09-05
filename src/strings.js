// All player-facing text lives here so it can be edited without touching
// game code (program.md: "keep player-facing strings in a single
// src/strings.js module"). Keys are stable; values can change freely.

export const strings = {
  title: 'Super Vexo and the Mystery of the System',
  pressAnyKey: 'Press any button to start',
  // Shown instead of the above on phones and tablets, where there may
  // be no gamepad or keyboard attached at all.
  tapToStart: 'Tap to start',

  intro: {
    skip: 'Press any button to skip',
    tapToSkip: 'Tap to skip',
    beats: [
      'Long ago, in the kingdom of Astra…',
      'The kingdom lived in peace.',
      'Until Lord Draxos came.',
      'He kidnapped Princess Astra.',
      'And vanished into deep space.',
      'The Scientists handed Vexo the Super Mega Tablet.\n\nCan you save her?',
    ],
  },

  // Shown when the ship drops through Earth's atmosphere and lands on
  // the real streets of Castel Maggiore (see src/surface.js).
  surface: {
    town: 'AN UNNAMED WORLD',
    street: 'unknown ground',
    // What the banner calls the ground you have just set down on. The
    // names are the landform, because that is all anyone can tell about
    // a place from the air.
    ground: {
      plain: 'open plain',
      savanna: 'dry grassland',
      forest: 'forest',
      hills: 'hill country',
      mountain: 'bare mountain',
      snow: 'snowfield',
      dunes: 'sand sea',
      stone: 'stone desert',
      salt: 'salt pan',
      badlands: 'badlands',
      mesa: 'plateau country',
      beach: 'shoreline',
      sea: 'open water',
    },
    leaveHint: 'Descend to land · climb to leave the atmosphere',
  },

  // Getting out of the ship and walking around town (see src/onFoot.js).
  onFoot: {
    skip: 'Press any button to skip',
    climbOut: 'L / A — land and climb out',
    noRoom: 'No room to climb out here — move the ship',
    board: 'L / A — climb back in',
    down: 'Down! Hauling him back to the ship…',
    shoot: 'Space / X — shoot · they hit back',
    controls: 'W A S D / stick — walk · Shift / B — sprint',
    talk: 'E / A — talk to {name}',
  },

  // Shown when the last heart goes (see gameOver.js).
  shop: {
    credits: 'cr',
    hint: '↑ ↓ — choose · E / A — buy · B / Esc — leave',
    welcome: 'Have a look. Everything here works.',
    bought: '{name} — yours. Mind how you go.',
    tooDear: 'Not enough credits for that one.',
    alreadyHave: 'You have that already.',
    sold: 'owned',
    names: {
      apothecary: 'THE APOTHECARY',
      gunsmith: 'THE GUNSMITH',
      shipwright: 'THE SHIPWRIGHT',
    },
    keeper: {
      apothecary: 'E / A — the apothecary',
      gunsmith: 'E / A — the gunsmith',
      shipwright: 'E / A — the shipwright',
    },
    goods: {
      heart: { name: 'Vital patch', note: 'One more heart. Stacks.' },
      wind: { name: 'Lung filter', note: 'Sprint lasts about half as long again.' },
      quickdraw: { name: 'Quickdraw kit', note: 'The pistol fires half as fast again.' },
      barrel: { name: 'Long barrel', note: 'Shots carry almost half again as far.' },
      thrusters: { name: 'Tuned thrusters', note: 'The airship flies 15% faster.' },
    },
  },
  dialogue: {
    more: 'E / A — go on · walk away to leave',
  },
  map: {
    title: 'THE WORLD',
    hint: 'M / − — close · W S / left stick — zoom · right stick — scroll · C — back to you',
    scale: '{km} × {kmZ} km · {m} m per pixel',
    building: 'drawing the world… {pct}%',
  },
  gameOver: {
    title: 'GAME OVER',
    ask: 'Continue from your last save?',
    noSave: 'You have no saved game. Start again?',
    yes: 'YES — CONTINUE',
    no: 'NO — TITLE SCREEN',
    hint: '← → to choose · Enter / A to take it',
  },

  // The inventory screen (E, or + on a pad).
  inventory: {
    title: 'GEAR',
    weapons: 'Weapons',
    empty: 'Nothing yet.',
    hint: 'T / + — close · ← → or L / R — tabs · B / Esc — back',
    turnHint: 'Drag, or A / D, to turn him',
    tablet: 'Tablet',
    system: 'System',
    save: 'SAVE GAME',
    neverSaved: 'Not saved yet.',
    savedJustNow: 'Saved just now.',
    savedSecondsAgo: 'Saved a few seconds ago.',
    savedMinutesAgo: 'Saved {n} minutes ago.',
    saveFailed: "Couldn't save — this browser won't let the game store anything.",
    starterGun: 'Sidearm',
    starterGunNote: 'Equipped',
    controller: 'SET UP CONTROLLER',
    controllerNone: 'No controller connected.',
    controllerStandard: 'Controller: {id} — standard layout.',
    controllerCalibrated: 'Controller: {id} — sticks taught to the game.',
    controllerUnknown: 'Controller: {id} — an unfamiliar layout.',
  },

  // Teaching the game an unfamiliar controller (see padSetup.js).
  padSetup: {
    title: 'CONTROLLER SETUP',
    intro: 'This controller does not lay its sticks out the way the game expects, so show it where they are. Four pushes.',
    neutral: 'Hands off both sticks for a moment…',
    prompts: {
      throttle: 'Push the stick you FLY with — usually the left — FORWARD, away from you.',
      yaw: 'Now push that same stick LEFT.',
      lookX: 'Push the stick you LOOK around with — usually the right — to the RIGHT.',
      lookY: 'And push that same stick FORWARD.',
    },
    labels: {
      throttle: 'Fly forward',
      yaw: 'Turn left',
      lookX: 'Look right',
      lookY: 'Look up',
    },
    hold: 'Push it and hold it for a moment.',
    release: 'Let it come back to the middle.',
    waiting: '—',
    axis: 'axis {n} {dir}',
    done: 'That is the lot. Push both sticks about — the bars should follow.',
    saved: 'Remembered for this controller.',
    saveFailed: "Set up, but this browser won't let the game remember it.",
    skipStep: 'SKIP THIS ONE',
    cancel: 'NOT NOW',
    close: 'DONE',
    hint: 'Esc / any button — skip a step · click NOT NOW to leave the sticks alone',
    noPad: 'No controller connected. Plug one in, then press a button on it.',
  },

  hud: {
    appName: 'Tablet',
    velocity: 'VEL',
    orientation: 'ORI',
    fps: 'FPS',
    inputSource: 'IN',
    dampingOn: 'damping: ON',
    dampingOff: 'damping: OFF',
    fastTravelButton: 'FAST TRAVEL',
    fastTravelHint: 'R1 / F',
    fastTravelActive: 'warping…',

    rovers: 'ROVERS',
    credits: 'CRED',
    hackHint: 'Hold L1 / H to hack',
    upgradeButton: 'UPGRADES',
    upgradeHint: 'Y / U',
    upgradeBought: 'OWNED',
    upgradeBuy: 'BUY',
    upgradeClose: 'Close',
    // Shown at the foot of an open screen so the controls are learnable.
    screenHint: 'Stick / swipe = scroll · B / Esc = back to Tablet',

    missionCompleteTitle: 'MISSION COMPLETE',
    missionCompleteBody: 'All rovers repaired. Earth Command transfers a bonus to your account.',
    missionCompleteCta: 'Open Upgrades',
    missionCompleteClose: 'Continue Flying',

    resetHint: 'L3 / R = reset',

    tabletHint: 'T / + — GEAR · M / − — MAP',
  },
};
