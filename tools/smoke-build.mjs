// Build-mode smoke:
//   1. Runs `npm run build`.
//   2. Boots a tiny http server on dist/ and runs the same assertions as
//      tools/smoke.mjs against the production bundle.
//   3. Opens dist/index.html via file:// and asserts no console errors
//      (Chromium needs --allow-file-access-from-files for some checks,
//      but we just verify the bundle executes and the DOM mounts).
//
// Usage:  npm run smoke:build
import { chromium } from 'playwright';
import { spawn, execSync } from 'node:child_process';
import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { resolve, join, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { extname } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(here, '..');
const distDir = join(repoRoot, 'dist');

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
console.log(`• Serving dist on ${httpURL}`);

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
  const browser = await chromium.launch({
    args: url.startsWith('file://') ? ['--allow-file-access-from-files'] : [],
  });
  const page = await browser
    .newContext({ viewport: { width: 1280, height: 800 } })
    .then((c) => c.newPage());

  page.on('console', (msg) => {
    const t = msg.text();
    if (isNoise(t)) return;
    if (msg.type() === 'error') errors.push(t);
    if (msg.type() === 'warning') warnings.push(t);
  });
  page.on('pageerror', (err) => {
    if (!isNoise(err.message)) errors.push(`pageerror: ${err.message}`);
  });

  await page.goto(url, { waitUntil: 'load' });

  // Title card must have rendered → proves the IIFE ran *and* the DOM
  // was ready when it ran (the exact regression we just hit).
  await page.waitForSelector('#title-card', { state: 'visible', timeout: 4000 });

  if (canPressKey) {
    await page.keyboard.press('Space');
    await page.waitForSelector('#title-card', { state: 'detached', timeout: 2000 });
    await page.locator('[data-velocity]').waitFor({ timeout: 2000 });
  }

  await browser.close();
  return { errors, warnings };
}

let failed = false;

console.log('• Smoke: dist via http');
const httpResult = await smokePage(httpURL);
for (const e of httpResult.errors) console.error('  ERROR:', e);
for (const w of httpResult.warnings) console.error('  WARN:', w);
if (httpResult.errors.length || httpResult.warnings.length) failed = true;

console.log('• Smoke: dist via file://');
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
