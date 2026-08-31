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

/** Places worth marking on the map, even before anything is built. */
export const PLACES = [
  { name: 'Estronic', kind: 'capital', at: [0.49, 0.47] },
  { name: 'West Village', kind: 'village', at: [0.23, 0.52] },
  { name: 'Bobo Village', kind: 'village', at: [0.87, 0.42] },
];

/** The Spire goes where he drew volcanoes: with the Rock People. */
export const SPIRE_AT = [0.89, 0.20];
