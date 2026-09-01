// Continent Alpha, traced off Marco's drawing.
//
// He drew the world on a sheet of paper — kingdoms, rivers, a lake, a
// capital in the middle — photographed it and said: use this, the lines
// are the rivers, keep everything exactly like the drawing. This file is
// that drawing turned into numbers.
//
// Everything is in FRACTIONS of the sheet: u runs 0 (west) to 1 (east),
// v runs 0 (north) to 1 (south), read off a numbered grid laid over the
// photograph (tools/worldstudy/ has the rectified scan). Fractions
// rather than metres so the drawing keeps its shape whatever size the
// world is set to — it has been resized three times already.
//
// What is on the sheet, and what each thing became:
//
//   THE CAMELLOO (Camels Kindom)     north-west, scribbled "MORE SAND"
//                                    → a sand desert
//   THE VULCANS (Rock People Kindom) north-east, with a "LAVA RIVER"
//                                    → bare volcanic rock and the Spire
//   THE DWELLERS (Elfs Kindom)       south-west, drawn thick with trees
//                                    → deep forest
//   DWELLERS TERRITORY               the middle-south
//                                    → wooded hills
//   THE MAGICA REPUBLIC              south-east, behind the "INVISIBLE
//   (the Republic of Wizards)        BARRIER" → pale, strange country
//   ESTRONIC, capital of Continent   the circle dead centre
//   Alpha                            → open ground where a city can go
//   ASTRO LAKE                       north-east of the capital
//                                    → a lake
//
// The villages and the capital are marked but not built: there are no
// buildings in the game yet. They are here so the map can show them and
// so the ground under them is somewhere a town could stand.

/** Where each kingdom is, and what its ground is like. */
export const KINGDOMS = [
  {
    name: 'The Camelloo',
    of: 'Camels Kindom',
    at: [0.16, 0.16], r: 0.30,
    // Sand: he scribbled "MORE SAND" across it twice.
    uplift: 0.14, moisture: 0.02, heat: 0.94,
  },
  {
    name: 'The Camelloo',
    of: 'the deep sand',
    at: [0.06, 0.34], r: 0.20,
    uplift: 0.10, moisture: 0.04, heat: 0.92,
  },
  {
    name: 'The Vulcans',
    of: 'Rock People Kindom',
    at: [0.89, 0.20], r: 0.26,
    // Volcanoes and bare rock, and a lava river running out of them.
    uplift: 0.95, moisture: 0.30, heat: 0.80,
  },
  {
    name: 'Astro Lake',
    of: 'the lake country',
    at: [0.63, 0.20], r: 0.20,
    uplift: 0.30, moisture: 0.92, heat: 0.44,
  },
  {
    name: 'Estronic',
    of: 'capital of Continent Alpha',
    at: [0.49, 0.47], r: 0.16,
    // Open, level, mild — somewhere a capital could actually stand.
    uplift: 0.20, moisture: 0.62, heat: 0.58,
  },
  {
    name: 'Dwellers Territory',
    of: 'the wooded hills',
    at: [0.42, 0.74], r: 0.24,
    uplift: 0.52, moisture: 0.86, heat: 0.54,
  },
  {
    name: 'The Dwellers',
    of: 'Elfs Kindom',
    at: [0.14, 0.88], r: 0.32,
    // Deep forest.
    uplift: 0.30, moisture: 0.99, heat: 0.60,
  },
  {
    name: 'The Magica Republic',
    of: 'the Republic of Wizards',
    at: [0.87, 0.78], r: 0.30,
    // Strange country: cold, stony and half-bare, with odd broken ground
    // — so that crossing the invisible barrier feels like arriving
    // somewhere else. Not sand: at a moisture of 0.22 the world's own
    // rules turn it into a second desert, and there is already one of
    // those in the north-west.
    uplift: 0.58, moisture: 0.44, heat: 0.24,
  },
  {
    name: 'the west shore',
    of: 'low ground along the western sea',
    at: [-0.04, 0.60], r: 0.20,
    uplift: 0.10, moisture: 0.70, heat: 0.56,
  },
];

/**
 * The rivers, exactly where he drew them.
 *
 * Each is a run of points across the sheet. He labelled four of them;
 * the rest are the lines that wander between the kingdoms, which is
 * what he meant by "the lines are the rivers".
 */
export const RIVERS = [
  {
    name: 'Only river to the Camelloo',
    points: [[0.03, 0.33], [0.11, 0.35], [0.19, 0.33], [0.27, 0.35],
      [0.34, 0.36], [0.40, 0.36], [0.45, 0.38]],
  },
  {
    name: 'Artifical river',
    // The straight one — he drew it with a ruler's confidence, and
    // called it artificial, so it is the one river that does not wander.
    points: [[0.00, 0.50], [0.12, 0.47], [0.24, 0.45], [0.34, 0.43], [0.42, 0.42]],
    straight: true,
  },
  {
    name: 'Lava river',
    points: [[0.79, 0.33], [0.77, 0.38], [0.76, 0.43], [0.74, 0.48]],
    lava: true,
  },
  {
    name: 'the north river',
    points: [[0.42, 0.00], [0.40, 0.08], [0.36, 0.14], [0.30, 0.19],
      [0.26, 0.25], [0.28, 0.31], [0.34, 0.34]],
  },
  {
    name: 'the river out of Astro Lake',
    points: [[0.56, 0.30], [0.54, 0.36], [0.52, 0.41], [0.50, 0.44]],
  },
  {
    name: 'the south road river',
    points: [[0.47, 0.57], [0.45, 0.64], [0.42, 0.71], [0.38, 0.78], [0.35, 0.86]],
  },
  {
    name: 'the Dwellers water',
    points: [[0.20, 0.66], [0.26, 0.70], [0.31, 0.74], [0.33, 0.80], [0.31, 0.88]],
  },
  {
    name: 'the barrier river',
    points: [[0.62, 0.55], [0.65, 0.62], [0.68, 0.68], [0.70, 0.75], [0.71, 0.83]],
    magic: true,
  },
  {
    name: 'the east river',
    points: [[0.74, 0.52], [0.79, 0.55], [0.84, 0.57], [0.90, 0.58]],
  },
];

/**
 * Astro Lake. The shape he drew is a rough oval with a bite out of its
 * south-west side, where the river runs out of it.
 */
export const LAKE = {
  name: 'Astro Lake',
  points: [[0.55, 0.06], [0.62, 0.04], [0.69, 0.08], [0.73, 0.15],
    [0.73, 0.23], [0.70, 0.29], [0.64, 0.33], [0.58, 0.32],
    [0.54, 0.27], [0.53, 0.19], [0.53, 0.12]],
};

/**
 * The heavy bands he drew across the lower half — many strokes on top of
 * one another, which on a map is how anybody draws a range of hills.
 */
export const RIDGES = [
  { points: [[0.03, 0.63], [0.12, 0.60], [0.22, 0.59], [0.31, 0.60], [0.40, 0.63]], height: 1.0 },
  { points: [[0.40, 0.63], [0.47, 0.70], [0.54, 0.78], [0.60, 0.86], [0.64, 0.95]], height: 0.9 },
];

/**
 * The places he drew, and how much ground each one stands on.
 *
 * `r` is in metres — not a fraction of the sheet like everything else
 * here, because a town is a fixed size on the ground and does not want
 * to grow when the world does.
 */
export const PLACES = [
  {
    name: 'Estronic',
    of: 'capital of Continent Alpha',
    kind: 'capital',
    at: [0.49, 0.47],
    // Three times across what it was, and nine times the ground. A
    // capital that you can see the far side of from the gate is a town.
    r: 1800,
    // Modern: pale concrete, dark glass, and steel for the masts and
    // the shipport's ironwork. The red-tiled roofs went when the town
    // did — a flat-roofed block does not have one.
    walls: 0xd9d6cf, roofs: 0x9c9890, trim: 0x7d8288, glass: 0x3f6b80,
  },
  {
    name: 'West Village',
    of: 'on the edge of the Camelloo',
    kind: 'village',
    at: [0.23, 0.52],
    r: 190,
    // Mud brick and reed, out where the sand starts.
    walls: 0xc9ab84, roofs: 0x8d7550, trim: 0x6f5c40,
  },
  {
    name: 'Bobo Village',
    of: 'of the Rock People',
    kind: 'village',
    at: [0.87, 0.42],
    r: 190,
    // Basalt and ash, in the Vulcans' country.
    walls: 0x6b6560, roofs: 0x40382f, trim: 0x2e2926,
  },
];

/**
 * Who you meet in the street, and what they tell you.
 *
 * All of it is about the world Marco drew: his kingdoms, his rivers, his
 * lake, the Spire standing over the Rock People. That is the point of
 * having anyone to talk to — a town where everybody says "hello" twice
 * is emptier than a town with nobody in it.
 */
export const TOWNSFOLK = {
  Estronic: [
    { name: 'Ferra', lines: [
      'Estronic sits in the middle of Continent Alpha, and every road you can see runs out to somewhere worth going.',
      'The shipport is on the south side. Set down on a lit ring and nobody will complain.',
    ] },
    { name: 'Oben', lines: [
      'Fly north-east far enough and the ground goes white. That is the Spire, over in the Vulcans.',
      'The Rock People live under it. They say the mountain is quiet. They say that every year.',
    ] },
    { name: 'Sil', lines: [
      'Astro Lake is a morning north of here. Big water, cold, and no bottom that anyone has found.',
    ] },
    { name: 'Marn', lines: [
      'West of us the green runs out and the Camelloo begins. Sand as far as you can fly.',
      'There is one river into the Camelloo. One. Do not go out there expecting a second.',
    ] },
    { name: 'Yeska', lines: [
      'South and west is the Dwellers\u2019 forest. Elves. Polite, and they would rather you did not.',
    ] },
    { name: 'Colm', lines: [
      'Do not cross the invisible barrier in the south-east without being asked. The Magica Republic keeps to itself.',
    ] },
    { name: 'Vess', lines: [
      'The tower in the middle? You can see it from outside the city. That is what it is for.',
    ] },
    { name: 'Tarro', lines: [
      'Monsters camp out in the wild country. Fires at night. Give them a wide berth or bring the gun.',
    ] },
    { name: 'Enna', lines: [
      'Two villages worth the trip: West Village out towards the sand, Bobo under the mountain.',
    ] },
    { name: 'Rulf', lines: [
      'Nine kingdoms\u2019 worth of road meets in this city, and every one of them is somebody else\u2019s edge of the world.',
    ] },
    { name: 'Miot', lines: [
      'Rivers run out of here in every direction. Follow one and you will get somewhere eventually.',
    ] },
    { name: 'Sabb', lines: [
      'I have never left the walls. There are no walls any more, and I have still never left.',
    ] },
    { name: 'Della', lines: [
      'Weather comes off Astro Lake. When the north goes grey, get indoors.',
    ] },
    { name: 'Poy', lines: [
      'Watch where you set that ship down. The pads are lit for a reason.',
    ] },
    { name: 'Ivo', lines: [
      'Everything north-east of here is uphill. Everything. I have walked it.',
    ] },
    { name: 'Wren', lines: [
      'You are the one with the spacecraft, then. We do not get many.',
    ] },
  ],
  'West Village': [
    { name: 'Idra', lines: [
      'We are the last green thing before the sand. Fill your water here.',
    ] },
    { name: 'Bo', lines: [
      'The artificial river runs past us. Somebody dug it, long ago. Nobody remembers who.',
    ] },
    { name: 'Halle', lines: [
      'Camels come through in the season, out of the Camelloo. Big feet, worse tempers.',
    ] },
  ],
  'Bobo Village': [
    { name: 'Grud', lines: [
      'You are standing on the Vulcans. Under us it is warm all the way down.',
    ] },
    { name: 'Ashet', lines: [
      'The Spire has a hole in the top and snow round it. Both true at once. That is the mountain for you.',
    ] },
    { name: 'Perrin', lines: [
      'A lava river ran through here once. You are walking on it.',
    ] },
  ],
};

/**
 * The rest of the crowd.
 *
 * Kakariko Village in Tears of the Kingdom is not big, and it is full:
 * you cannot cross it without passing four or five people, and they all
 * have something to say. Marco asked for that, in a city nine times the
 * size — so as well as the named residents above there are a couple of
 * hundred other people about, drawn from these names and these remarks.
 *
 * They are short on purpose. A passer-by says one thing.
 */
export const CROWD_NAMES = [
  'Anse', 'Bett', 'Calla', 'Dov', 'Emm', 'Faro', 'Gale', 'Hesk', 'Ivet',
  'Jarn', 'Kesta', 'Lom', 'Mira', 'Noll', 'Orin', 'Pell', 'Quill', 'Rue',
  'Semm', 'Tavi', 'Ubba', 'Vell', 'Wick', 'Xan', 'Ysolde', 'Zeb', 'Arno',
  'Bru', 'Cassi', 'Dell', 'Efa', 'Fitz', 'Gerd', 'Halm', 'Iska', 'Jory',
  'Kip', 'Lenn', 'Morra', 'Nen', 'Obb', 'Pim', 'Ras', 'Sena', 'Toft',
  'Ulla', 'Vero', 'Wenn', 'Yara', 'Zorn',
];

export const CROWD_LINES = [
  'Mind the ships. They come in over the south side all day.',
  'You are not from the city. Nobody from here looks up that much.',
  'Market is better in the morning. Everything worth having has gone by noon.',
  'That tower? Climb it if they let you. They will not let you.',
  'Rain off the lake by evening, I should think.',
  'Careful past the barrier. The wizards do not send anybody back.',
  'The Camelloo road is dry the whole way. Take more water than you think.',
  'My cousin walked to Bobo Village. Took her nine days and she has not stopped talking about it.',
  'The rivers all start somewhere up in the Vulcans. All of them.',
  'Do not camp in the open country. There are things out there with clubs.',
  'Every street in this city ends at a gate. That was on purpose, they say.',
  'You get used to the noise from the shipport. Mostly.',
  'The Dwellers keep to their forest and we keep to our streets.',
  'Estronic was three streets and a well, once. My grandfather says.',
  'There is nothing north of the lake but weather.',
  'If you are flying west, go over the sand, not round it. Round it takes a week.',
  'Nobody has ever counted the buildings. People have tried.',
  'Good day for it, whatever you are doing.',
  'Astro Lake freezes at the edges some winters. Never the middle.',
  'They light the landing rings at dusk. Prettiest thing in the city.',
];

/** The Spire goes where he drew volcanoes: with the Rock People. */
export const SPIRE_AT = [0.89, 0.20];
