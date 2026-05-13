// All player-facing text lives here so it can be edited without touching
// game code (program.md: "keep player-facing strings in a single
// src/strings.js module"). Keys are stable; values can change freely.

export const strings = {
  title: 'Super Vexo and the Mystery of the System',
  pressAnyKey: 'Press any key to start',

  intro: {
    skip: 'Press any key to skip',
    beats: [
      'Long ago, in the kingdom of Astra…',
      'The kingdom lived in peace.',
      'Until Lord Draxos came.',
      'He kidnapped Princess Astra.',
      'And vanished into deep space.',
      'The Scientists handed Vexo the Super Mega Tablet.\n\nCan you save her?',
    ],
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
    fastTravelHint: 'F',
    fastTravelActive: 'warping…',

    rovers: 'ROVERS',
    credits: 'CRED',
    hackHint: 'Hold H to hack',
    upgradeButton: 'UPGRADES',
    upgradeHint: 'U',
    upgradeBought: 'OWNED',
    upgradeBuy: 'BUY',

    missionCompleteTitle: 'MISSION COMPLETE',
    missionCompleteBody: 'All rovers repaired. Earth Command transfers a bonus to your account.',
    missionCompleteCta: 'Open Upgrades',
    missionCompleteClose: 'Continue Flying',

    resetHint: 'R = reset',
  },
};
