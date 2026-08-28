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
  },

  // Shown when the last heart goes (see gameOver.js).
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
    hint: 'E / + — close · ← → or L / R — tabs · B / Esc — back',
    turnHint: 'Drag, or A / D, to turn him',
    system: 'System',
    save: 'SAVE GAME',
    neverSaved: 'Not saved yet.',
    savedJustNow: 'Saved just now.',
    savedSecondsAgo: 'Saved a few seconds ago.',
    savedMinutesAgo: 'Saved {n} minutes ago.',
    saveFailed: "Couldn't save — this browser won't let the game store anything.",
    starterGun: 'Sidearm',
    starterGunNote: 'Equipped',
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

    tabletHint: '− / T = Tablet',
  },
};
