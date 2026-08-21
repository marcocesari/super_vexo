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
    town: 'CASTEL MAGGIORE · BOLOGNA',
    street: 'Via Giuseppe Impastato',
    leaveHint: 'Descend to land · climb to leave the atmosphere',
  },

  // Getting out of the ship and walking around town (see src/onFoot.js).
  onFoot: {
    skip: 'Press any button to skip',
    climbOut: 'L / A — land and climb out',
    noRoom: 'No room to climb out here — move the ship',
    board: 'L / A — climb back in',
    controls: 'W A S D / stick — walk · Shift / R1 — run',
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

    resetHint: 'Start / R = reset',

    tabletHint: '− / T = Tablet',
  },
};
