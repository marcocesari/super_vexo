// Capture one PNG per cinematic beat. Run while `npm run dev` is up.
import { chromium } from 'playwright';
import { mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const URL = process.env.SMOKE_URL ?? 'http://127.0.0.1:5173';
const here = dirname(fileURLToPath(import.meta.url));
const outDir = resolve(here, 'screenshots');
await mkdir(outDir, { recursive: true });

const browser = await chromium.launch();
const page = await browser.newContext({ viewport: { width: 1280, height: 800 } }).then((c) => c.newPage());
await page.goto(URL, { waitUntil: 'load' });
await page.waitForSelector('#cinematic');

// Wait halfway into each beat so we capture the text + 3D state mid-beat.
const beatDurations = [3.5, 3.0, 4.0, 4.0, 3.5, 4.5];
let elapsed = 0;
for (let i = 0; i < beatDurations.length; i++) {
  const target = elapsed + beatDurations[i] * 0.6;
  const wait = Math.max(0, target - elapsed) * 1000;
  await page.waitForTimeout(wait);
  await page.screenshot({ path: resolve(outDir, `intro-${i + 1}.png`) });
  elapsed = target;
}

await browser.close();
console.log(`wrote ${beatDurations.length} intro screenshots`);
