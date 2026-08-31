// Build-mode smoke:
//   1. Runs `npm run build`.
//   2. Boots a tiny http server on docs/ and runs the same assertions as
//      tools/smoke.mjs against the production bundle.
//   3. Opens docs/index.html via file:// and asserts no console errors
//      (Chromium needs --allow-file-access-from-files for some checks,
//      but we just verify the bundle executes and the DOM mounts).
//
// Usage:  npm run smoke:build
import { launchBrowser } from './lib/browser.mjs';
import { spawn, execSync } from 'node:child_process';
import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { resolve, join, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { extname } from 'node:path';
import { withSkipIntro } from './smokeUrl.mjs';

const here = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(here, '..');
// The build goes to `docs/`, because that is what GitHub Pages serves
// (see vite.config.js). This pointed at `dist/` — a directory left over
// from months ago — so the test that is supposed to check the bundle we
// ship has been loading a bundle from May and passing on it.
const distDir = join(repoRoot, 'docs');

console.log('• Building…');
execSync('npm run build', { cwd: repoRoot, stdio: 'inherit' });

// --- Tiny static server -----------------------------------------------------
const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.json': 'application/json',
  '.ico': 'image/x-icon',
  '.mp3': 'audio/mpeg',
};
const server = createServer(async (req, res) => {
  try {
    const url = new URL(req.url, 'http://localhost');
    let pathname = decodeURIComponent(url.pathname);
    if (pathname === '/') pathname = '/index.html';
    const filePath = join(distDir, pathname);
    if (!filePath.startsWith(distDir)) {
      res.writeHead(403).end('forbidden');
      return;
    }
    const body = await readFile(filePath);
    res.writeHead(200, { 'Content-Type': MIME[extname(filePath)] ?? 'application/octet-stream' });
    res.end(body);
  } catch {
    res.writeHead(404).end('not found');
  }
});
await new Promise((r) => server.listen(0, '127.0.0.1', r));
const port = server.address().port;
const httpURL = `http://127.0.0.1:${port}`;
console.log(`• Serving docs on ${httpURL}`);

// --- Filters (same allowlist as the dev smoke) -----------------------------
const NOISE = [
  /GPU stall due to ReadPixels/i,
  /CONTEXT_LOST_WEBGL/i,
  /loseContext/i,
  // Chromium emits this informational message for every file:// page.
  // It's about the unique-origin policy, not an error from our code.
  /'file:' URLs are treated as unique security origins/i,
  /Unsafe attempt to load URL.*from frame with URL/i,
];
const isNoise = (t) => NOISE.some((re) => re.test(t));

async function smokePage(url, { canPressKey } = { canPressKey: true }) {
  const errors = [];
  const warnings = [];
  const browser = await launchBrowser({
    args: url.startsWith('file://') ? ['--allow-file-access-from-files'] : [],
  });
  const page = await browser
    .newContext({ viewport: { width: 1280, height: 800 } })
    .then((c) => c.newPage());

  page.on('console', (msg) => {
    const t = msg.text();
    if (isNoise(t)) return;
    // "Failed to load resource" on its own is unchaseable — say WHICH.
    const where = msg.location?.()?.url;
    const detail = /failed to load resource/i.test(t) && where ? `${t} — ${where}` : t;
    if (msg.type() === 'error') errors.push(detail);
    if (msg.type() === 'warning') warnings.push(detail);
  });
  page.on('pageerror', (err) => {
    if (!isNoise(err.message)) errors.push(`pageerror: ${err.message}`);
  });

  await page.goto(withSkipIntro(url), { waitUntil: 'load' });

  // Title card must have rendered → proves the IIFE ran *and* the DOM
  // was ready when it ran (the exact regression we just hit).
  await page.waitForSelector('#title-card', { state: 'visible', timeout: 4000 });

  if (canPressKey) {
    await page.keyboard.press('Space');
    await page.waitForSelector('#title-card', { state: 'detached', timeout: 2000 });
    // The Tablet is a page of the inventory now, so getting to it means
    // opening the inventory (T) and walking along the tabs. Waiting for
    // the readout to be VISIBLE is the point: it proves the built bundle
    // put the Tablet where it belongs and is still driving it.
    await page.keyboard.press('KeyT');
    for (let i = 0; i < 4; i++) {
      if (await page.locator('[data-velocity]').isVisible()) break;
      await page.keyboard.press('ArrowRight');
      await page.waitForTimeout(200);
    }
    await page.locator('[data-velocity]').waitFor({ state: 'visible', timeout: 3000 });
  }

  await browser.close();
  return { errors, warnings };
}

let failed = false;

console.log('• Smoke: the built game over http');
const httpResult = await smokePage(httpURL);
for (const e of httpResult.errors) console.error('  ERROR:', e);
for (const w of httpResult.warnings) console.error('  WARN:', w);
if (httpResult.errors.length || httpResult.warnings.length) failed = true;

console.log('• Smoke: the built game over file://');
const fileURL = pathToFileURL(join(distDir, 'index.html')).toString();
const fileResult = await smokePage(fileURL);
for (const e of fileResult.errors) console.error('  ERROR:', e);
for (const w of fileResult.warnings) console.error('  WARN:', w);
if (fileResult.errors.length || fileResult.warnings.length) failed = true;

server.close();

if (failed) {
  console.error('FAIL: build smoke detected console errors/warnings');
  process.exit(1);
}
console.log('PASS: build loads cleanly from http AND file://');
