"""Go and look at how the ground is made.

Marco's brief for the new world was not "copy a place" but "analyse how
mountains are made, how deserts are made, and other stuff" — and then
build a world out of what I learned. This is the looking.

It visits a list of real places and, for each one, collects three things:

  1. SATELLITE, twice: once wide (the shape of the landform — ridges,
     dune fields, river bends) and once close (its texture and colour).
  2. ELEVATION, the real heights of the ground, from public terrain
     tiles. This is the part that matters most. A picture tells you a
     mountain is pointy; the heights tell you HOW pointy, how far apart
     the ridges are, and how the roughness falls off with scale — which
     is what a generator actually needs to be given.
  3. NUMBERS from those heights: relief, slope distribution, ridge
     spacing, and the slope of the power spectrum, which is the single
     number that decides whether generated terrain reads as land or as
     noise.

Python rather than the .mjs the rest of `tools/` is written in, because
this one is arithmetic over grids of numbers and numpy does that in a
line where JavaScript takes twenty. It is a research tool: it runs when
I am studying, never as part of the game or its tests.

Data: elevation from the public Terrarium tiles (Mapzen/AWS, ODbL/CC-BY
depending on source; SRTM and friends underneath), imagery from Esri
World Imagery. Both used here for reference only.

    python3 tools/worldstudy/survey.py <outDir> [site ...]
"""
import io
import json
import math
import sys
import urllib.request
from pathlib import Path

import numpy as np
from PIL import Image

UA = {'User-Agent': 'super-vexo-worldstudy/1.0 (terrain study; contact: github.com/marcocesari)'}

# The places, one per kind of ground. Chosen so that between them they
# cover every landform the new world will need to make: mountains of
# three different origins, four kinds of desert, the shapes water
# leaves behind, and the flat places in between.
SITES = [
    # --- mountains ---------------------------------------------------
    ('dolomites',      46.510,  11.760, 'glaciated limestone: sheer walls, scree fans, treeline'),
    ('mont-blanc',     45.850,   6.870, 'high alpine: aretes, cirques, permanent ice'),
    ('appalachians',   40.550, -77.900, 'fold mountains: long parallel ridges, water gaps'),
    ('etna',           37.750,  15.000, 'volcano: cone, radial gullies, lava fields'),
    ('annapurna',      28.600,  83.900, 'the biggest relief there is'),
    ('jura',           46.700,   6.100, 'young folds, forested, regular'),
    # --- deserts -----------------------------------------------------
    ('erg-chebbi',     31.100,  -4.010, 'sand sea: dune wavelength, hard edge against stone'),
    ('sossusvlei',    -24.730,  15.350, 'star and linear dunes, white pans between'),
    ('badwater',       36.230, -116.770, 'salt playa, dead flat, against a fault scarp'),
    ('monument-valley', 36.990, -110.100, 'plateau remnants: mesas, buttes, talus skirts'),
    ('bardenas',       42.170,  -1.500, 'badlands: rills, gullies, no plants to hold it'),
    ('namib-gravel',  -23.416,  15.933, 'stone desert: flat gravel plain with koppies'),
    # --- what water leaves -------------------------------------------
    ('mississippi',    32.500, -91.100, 'meanders, oxbows, floodplain'),
    ('skaftafell',     63.980, -16.970, 'braided glacial outwash'),
    ('geiranger',      62.100,   7.100, 'fjord: drowned U-valley'),
    ('grand-canyon',   36.100, -112.100, 'incised plateau, layered cliffs'),
    # --- the flat and the green ---------------------------------------
    ('po-plain',       44.700,  11.300, 'farmland flat, field grid, drainage ditches'),
    ('serengeti',      -2.300,  34.800, 'savanna: grass with scattered trees'),
    ('finland-lakes',  61.500,  25.500, 'boreal forest and lake country, glacier-scoured'),
    ('etretat',        49.710,   0.200, 'chalk sea cliffs against the water'),
]

SAT_WIDE_Z = 12      # ~10 km across: the shape of the thing
SAT_CLOSE_Z = 16     # ~600 m across: what it is made of
# Zoom 13 is about 13 m a pixel, so three tiles is a 10 km square. Both
# ends of that matter: coarser and the slopes come out too gentle
# (average a cliff over 50 m and it stops being a cliff), finer and a
# 10 km square no longer fits, which is the scale ridges and valleys
# repeat at.
DEM_Z = 13


def tile_xy(lat, lon, z):
    n = 2 ** z
    x = (lon + 180) / 360 * n
    lat_r = math.radians(lat)
    y = (1 - math.log(math.tan(lat_r) + 1 / math.cos(lat_r)) / math.pi) / 2 * n
    return int(x), int(y)


def metres_per_pixel(lat, z):
    """Ground distance one pixel covers, at this latitude and zoom."""
    return 156543.03392 * math.cos(math.radians(lat)) / (2 ** z)


def fetch(url, tries=3):
    for attempt in range(tries):
        try:
            return urllib.request.urlopen(urllib.request.Request(url, headers=UA), timeout=40).read()
        except Exception:
            if attempt == tries - 1:
                raise
    return None


def mosaic(url_for, lat, lon, z, span):
    """A span x span block of tiles, stitched, centred on lat/lon."""
    x0, y0 = tile_xy(lat, lon, z)
    out = Image.new('RGB', (256 * span, 256 * span))
    half = span // 2
    for dx in range(span):
        for dy in range(span):
            raw = fetch(url_for(z, x0 - half + dx, y0 - half + dy))
            out.paste(Image.open(io.BytesIO(raw)).convert('RGB'), (dx * 256, dy * 256))
    return out


def esri(z, x, y):
    return f'https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'


def terrarium(z, x, y):
    return f'https://s3.amazonaws.com/elevation-tiles-prod/terrarium/{z}/{x}/{y}.png'


def heights(lat, lon, z=DEM_Z, span=3):
    """Real ground heights in metres, as a grid."""
    im = np.asarray(mosaic(terrarium, lat, lon, z, span)).astype(np.float64)
    return im[:, :, 0] * 256 + im[:, :, 1] + im[:, :, 2] / 256 - 32768


def highpass(h, sigma_px):
    """Take the regional slope out and leave the landform behind.

    Without this, every measurement below is dominated by the fact that
    one corner of the tile is a kilometre higher than the other, and the
    answer to "how far apart are the ridges" comes back as "about the
    width of the tile" — which is true of the trend and useless about
    the mountains.
    """
    k = int(sigma_px * 3) | 1
    x = np.arange(k) - k // 2
    g = np.exp(-(x ** 2) / (2 * sigma_px ** 2))
    g /= g.sum()
    pad = k // 2
    sm = np.pad(h, pad, mode='reflect')
    sm = np.apply_along_axis(lambda r: np.convolve(r, g, mode='valid'), 1, sm)
    sm = np.apply_along_axis(lambda c: np.convolve(c, g, mode='valid'), 0, sm)
    return h - sm


def ridge_spacing(h, mpp):
    """How far apart the ridges are, in metres.

    Found by autocorrelation along both axes: shift the terrain against
    itself and the first distance at which it stops resembling itself,
    then starts to again, is one ridge to the next. It is the number
    that decides whether a generated range reads as mountains or as
    lumps — get it wrong and you have made either a golf course or a
    single enormous hill.
    """
    out = []
    h = highpass(h, h.shape[0] / 12)
    for axis in (0, 1):
        prof = h - h.mean()
        n = prof.shape[axis]
        # Average the autocorrelation over every row (or column).
        lines = prof if axis == 1 else prof.T
        acc = np.zeros(n // 2)
        for line in lines:
            line = line - line.mean()
            denom = np.dot(line, line)
            if denom <= 0:
                continue
            for lag in range(1, n // 2):
                acc[lag] += np.dot(line[:-lag], line[lag:]) / denom
        acc /= max(1, len(lines))
        # First minimum, then the first maximum after it: half a
        # wavelength, then the full one.
        first_min = None
        for lag in range(2, len(acc) - 1):
            if acc[lag] < acc[lag - 1] and acc[lag] <= acc[lag + 1]:
                first_min = lag
                break
        if first_min:
            out.append(first_min * 2 * mpp)
    return float(np.median(out)) if out else None


def spectrum_slope(h):
    """β in 1/f^β — how roughness falls off as you zoom out.

    Real land is not white noise and not a smooth hill: its power
    spectrum follows a straight line on a log-log plot, and the slope of
    that line is what makes terrain look like terrain. Measured here so
    the generator can be built to the same number instead of to taste.
    """
    # Least-squares plane removed first: a tilted sheet of glass has a
    # spectrum too, and it is not the mountain's.
    ny, nx = h.shape
    yy, xx = np.mgrid[0:ny, 0:nx]
    A = np.column_stack([xx.ravel(), yy.ravel(), np.ones(nx * ny)])
    coef, *_ = np.linalg.lstsq(A, h.ravel(), rcond=None)
    g = h - (A @ coef).reshape(ny, nx)
    g = g * np.outer(np.hanning(ny), np.hanning(nx))
    p = np.abs(np.fft.fftshift(np.fft.fft2(g))) ** 2
    cy, cx = np.array(p.shape) // 2
    yy, xx = np.indices(p.shape)
    r = np.hypot(yy - cy, xx - cx).astype(int)
    nbins = min(cy, cx)
    radial = np.array([p[r == k].mean() for k in range(1, nbins)])
    k = np.arange(1, nbins)
    lo, hi = 2, nbins // 2
    coeffs = np.polyfit(np.log(k[lo:hi]), np.log(radial[lo:hi]), 1)
    return float(-coeffs[0])


def measure(h, mpp):
    dy, dx = np.gradient(h, mpp)
    slope = np.degrees(np.arctan(np.hypot(dx, dy)))
    return {
        'metresPerPixel': round(mpp, 1),
        'kmAcross': round(h.shape[0] * mpp / 1000, 1),
        'lowest': round(float(h.min()), 1),
        'highest': round(float(h.max()), 1),
        'relief': round(float(h.max() - h.min()), 1),
        'slopeMean': round(float(slope.mean()), 1),
        'slopeMedian': round(float(np.median(slope)), 1),
        'slopeP95': round(float(np.percentile(slope, 95)), 1),
        'slopeMax': round(float(slope.max()), 1),
        'flatFraction': round(float((slope < 2).mean()), 3),
        'steepFraction': round(float((slope > 30).mean()), 3),
        'ridgeSpacingM': None if ridge_spacing(h, mpp) is None else round(ridge_spacing(h, mpp)),
        # How much of the height is in the landform rather than in the
        # regional tilt: the standard deviation of the high-passed
        # ground, which is roughly how tall one hill is.
        'landformSigmaM': round(float(highpass(h, h.shape[0] / 12).std()), 1),
        'spectrumBeta': round(spectrum_slope(h), 2),
        # Where the ground sits between its lowest and highest point.
        # Mountains carry most of their area low (valleys) with a few
        # high peaks; a plateau carries most of it high.
        'hypsometry': [round(float(np.percentile(h, q)), 1) for q in (5, 25, 50, 75, 95)],
    }


def main():
    out = Path(sys.argv[1] if len(sys.argv) > 1 else 'worldstudy')
    wanted = set(sys.argv[2:])
    (out / 'sat').mkdir(parents=True, exist_ok=True)
    results = {}
    resultsPath = out / 'measurements.json'
    if resultsPath.exists():
        results = json.loads(resultsPath.read_text())
    for name, lat, lon, what in SITES:
        if wanted and name not in wanted:
            continue
        try:
            mosaic(esri, lat, lon, SAT_WIDE_Z, 3).save(out / 'sat' / f'{name}-wide.jpg', quality=86)
            mosaic(esri, lat, lon, SAT_CLOSE_Z, 3).save(out / 'sat' / f'{name}-close.jpg', quality=86)
            h = heights(lat, lon)
            m = measure(h, metres_per_pixel(lat, DEM_Z))
            m['what'] = what
            m['at'] = [lat, lon]
            results[name] = m
            print(f'{name:17s} relief {m["relief"]:7.0f}m  slope med {m["slopeMedian"]:4.1f}° '
                  f'p95 {m["slopeP95"]:4.1f}°  ridges {m["ridgeSpacingM"]}m  beta {m["spectrumBeta"]}')
        except Exception as e:
            print(f'{name:17s} FAILED  {type(e).__name__}: {e}')
        resultsPath.write_text(json.dumps(results, indent=1))
    print(f'\n{len(results)} sites measured -> {resultsPath}')


if __name__ == '__main__':
    main()
