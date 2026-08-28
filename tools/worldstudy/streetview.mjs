// The yellow man, driven from a script.
//
// Marco's brief for the new world was not "copy a place" but "go and
// look at how ground is actually made" — how a mountain range is shaped,
// how a desert is shaped — and build from what I learn. This is the
// looking: it drops Street View at a list of coordinates, points the
// camera at a few headings, and saves the pictures. Where there is no
// coverage, `aerial.mjs` looks at the same spot from above instead,
// which is what he asked for.
//
//   node tools/worldstudy/streetview.mjs places.json out/
//
// `places.json` is [{ id, lat, lon, headings: [deg, ...], pitch }].
// Anything Google will not show is reported rather than silently
// skipped: a landform I never saw is one I must not pretend to know.
import { chromium } from 'playwright';
import { readFileSync, mkdirSync } from 'node:fs';

const [listPath, outDir] = process.argv.slice(2);
if (!listPath || !outDir) {
  console.error('usage: streetview.mjs <places.json> <outDir>');
  process.exit(2);
}
const places = JSON.parse(readFileSync(listPath, 'utf8'));
mkdirSync(outDir, { recursive: true });

const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1100, height: 620 }, locale: 'en-US' });
// Google's consent wall answers itself with these. Without them every
// request lands on a questionnaire instead of a map.
await ctx.addCookies([
  { name: 'SOCS', value: 'CAESHAgBEhJnd3NfMjAyMzA4MTAtMF9SQzIaAmVuIAEaBgiA_LyaBg', domain: '.google.com', path: '/' },
  { name: 'CONSENT', value: 'YES+cb.20210328-17-p0.en+FX+000', domain: '.google.com', path: '/' },
]);
const page = await ctx.newPage();

const report = [];
for (const p of places) {
  const pitch = p.pitch ?? 90;
  const headings = p.headings ?? [0];
  let covered = null;
  for (const [i, h] of headings.entries()) {
    // The old `cbll` form, on purpose: the modern /@lat,lon,3a/ URL only
    // works if a panorama stands on that exact spot, and a coordinate
    // picked off a map never does. `cbll` SNAPS to the nearest one,
    // which is what dropping the little yellow man does.
    const url = `https://www.google.com/maps?q=&layer=c&cbll=${p.lat},${p.lon}`
      + `&cbp=12,${h},0,0,${(pitch - 90).toFixed(1)}&hl=en`;
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 });
    await page.waitForTimeout(p.settleMs ?? 8000);
    if (covered === null) {
      covered = !(await page.getByText('No Street View imagery available here').count());
    }
    if (!covered) break;
    // The chrome — search box, compass, the little map — is not what I
    // am here to look at.
    await page.addStyleTag({ content: `
      #omnibox-container, #watermark, .app-viewcard-strip, #vasquette,
      #minimap, .scene-footer-container, #titlecard, #runway-expand-button,
      .widget-image-header, #assistive-chips, .scene-footer { display: none !important; }
    ` }).catch(() => {});
    await page.waitForTimeout(400);
    await page.screenshot({ path: `${outDir}/${p.id}-${i}-h${h}.png` });
  }
  report.push({ id: p.id, covered, what: p.what ?? '' });
  console.log(`${covered ? 'saw  ' : 'BLIND'}  ${p.id}  ${p.what ?? ''}`);
}
await browser.close();
console.log(JSON.stringify(report));
