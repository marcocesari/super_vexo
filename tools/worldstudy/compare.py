"""Hold the generated world up against the real one.

`survey.py` measured twenty real places. `sample-world.mjs` writes out
patches of the game's world in the same shape. This runs the identical
measurements over those patches and prints them side by side with the
Earth site each one is meant to resemble — plus a hillshade of each, so
the shape can be looked at as well as counted.

    python3 tools/worldstudy/compare.py <patchDir> [findingsDir]
"""
import json
import sys
from pathlib import Path

import numpy as np
from PIL import Image

sys.path.insert(0, str(Path(__file__).parent))
from survey import measure  # noqa: E402  (same code, deliberately)

# Which Earth site each kind of generated ground is trying to be.
LIKE = {
    'mountain': ('dolomites', 'mont-blanc'),
    'snow': ('mont-blanc', 'annapurna'),
    'hills': ('jura', 'appalachians'),
    'forest': ('jura',),
    'plain': ('po-plain',),
    'savanna': ('serengeti',),
    'dunes': ('erg-chebbi', 'sossusvlei'),
    'stone': ('namib-gravel',),
    'salt': ('badwater',),
    'badlands': ('bardenas',),
    'mesa': ('monument-valley',),
    'beach': ('etretat',),
    'sea': (),
}


def hillshade(h, mpp, azimuth=315, altitude=45):
    """The picture a surveyor draws: light from the north-west."""
    dy, dx = np.gradient(h, mpp)
    slope = np.arctan(np.hypot(dx, dy))
    aspect = np.arctan2(-dx, dy)
    az = np.radians(360 - azimuth + 90)
    alt = np.radians(altitude)
    shade = (np.sin(alt) * np.cos(slope)
             + np.cos(alt) * np.sin(slope) * np.cos(az - aspect))
    return np.clip(shade, 0, 1)


def main():
    patch_dir = Path(sys.argv[1])
    findings = Path(sys.argv[2]) if len(sys.argv) > 2 else Path('tools/worldstudy/findings')
    real = json.loads((findings / 'measurements.json').read_text())
    index = json.loads((patch_dir / 'index.json').read_text())

    print(f"{'ground':10s} {'':12s} {'relief':>7s} {'med°':>5s} {'p95°':>5s} "
          f"{'flat':>5s} {'ridge m':>8s} {'hill σ':>7s}")
    for entry in index:
        f = patch_dir / f"{entry['name']}.f32"
        if not f.exists():
            continue
        n = entry['n']
        h = np.frombuffer(f.read_bytes(), dtype=np.float32).reshape(n, n).astype(np.float64)
        # Measured in REAL metres: the world is built six times smaller
        # with the angles kept, so multiplying both the heights and the
        # distances by six compares like with like.
        shrink = entry['shrink']
        m = measure(h * shrink, entry['metresPerPixel'])
        print(f"{entry['name']:10s} {'GENERATED':12s} {m['relief']:7.0f} {m['slopeMedian']:5.1f} "
              f"{m['slopeP95']:5.1f} {m['flatFraction']:5.2f} {m['ridgeSpacingM']:8d} "
              f"{m['landformSigmaM']:7.1f}")
        for site in LIKE.get(entry['name'], ()):
            r = real.get(site)
            if not r:
                continue
            print(f"{'':10s} {site:12s} {r['relief']:7.0f} {r['slopeMedian']:5.1f} "
                  f"{r['slopeP95']:5.1f} {r['flatFraction']:5.2f} {r['ridgeSpacingM']:8d} "
                  f"{r['landformSigmaM']:7.1f}")
        img = (hillshade(h * shrink, entry['metresPerPixel']) * 255).astype(np.uint8)
        Image.fromarray(img).save(patch_dir / f"{entry['name']}-shade.png")


if __name__ == '__main__':
    main()
