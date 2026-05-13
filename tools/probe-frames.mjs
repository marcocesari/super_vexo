// Capture timed screenshots at absolute real-time offsets into the
// cinematic so we can see what each beat actually renders.
import { chromium } from 'playwright';
import { mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const URL = process.env.SMOKE_URL ?? 'http://localhost:5173';
const here = dirname(fileURLToPath(import.meta.url));
const outDir = resolve(here, 'screenshots');
await mkdir(outDir, { recursive: true });

const browser = await chromium.launch();
const page = await browser.newContext({ viewport: { width: 1280, height: 800 } }).then((c) => c.newPage());
await page.goto(URL, { waitUntil: 'load' });
await page.waitForSelector('#cinematic');

// BEAT_DURATIONS = [3.5, 3.0, 4.0, 4.0, 3.5, 4.5], cumulative
// boundaries at 0, 3.5, 6.5, 10.5, 14.5, 18.0, 22.5. Capture mid-beat.
const targets = [1.5, 5.0, 8.0, 12.0, 16.0, 20.0];
const t0 = Date.now();
for (let i = 0; i < targets.length; i++) {
  const sec = targets[i];
  const wait = sec * 1000 - (Date.now() - t0);
  if (wait > 0) await page.waitForTimeout(wait);
  await page.screenshot({ path: resolve(outDir, `frame-${sec.toFixed(1)}s.png`) });
}

await browser.close();
console.log('done');
