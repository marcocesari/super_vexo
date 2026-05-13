import { defineConfig } from 'vite';

// Why this config:
// - `base: './'`  → built asset URLs are relative, so the bundle loads
//   correctly whether it's served from `/`, `/subdir/`, or `file://`.
// - IIFE output  → the production bundle is a classic script, not a
//   module. Modules from `file://` are blocked by browsers' CORS rules;
//   classic scripts run fine. The native iOS wrapper will load the
//   bundled HTML from `file://`, so this matters.
// - stripCrossorigin → Vite emits `crossorigin` on its preload <link>
//   and on the script tag by default; with file://, no origin matches
//   and the browser refuses to use the resource. Strip it.

// Vite tags the entry script `type="module"` and adds `crossorigin` by
// default. Both block file:// loads. The bundle is IIFE (a classic
// script), so we strip both attrs.
//
// `type="module"` scripts are *deferred* by default; classic scripts
// are not. Without `defer`, the script in <head> runs before
// `<div id="app">` exists and `appendChild` throws. Add `defer` so
// the classic script executes after the HTML is parsed — the same
// timing the module build had.
function makeFileUrlSafe() {
  return {
    name: 'file-url-safe',
    apply: 'build',
    transformIndexHtml(html) {
      return html
        .replace(/\s+crossorigin(="[^"]*")?/g, '')
        .replace(/<script\s+type="module"\s+src=/g, '<script defer src=')
        // Defence in depth: if Vite ever emits a script tag without
        // `type="module"` but with `src=`, still mark it deferred.
        .replace(/<script\s+src=/g, '<script defer src=');
    },
  };
}

export default defineConfig({
  base: './',
  plugins: [makeFileUrlSafe()],
  server: {
    port: 5173,
    // Vite's default `localhost` binds to ::1 only on macOS, so
    // `127.0.0.1:5173` fails. Bind to IPv4 explicitly.
    host: '127.0.0.1',
  },
  build: {
    target: 'es2020',
    modulePreload: { polyfill: false },
    rollupOptions: {
      output: {
        format: 'iife',
        // IIFE requires a single chunk; inline any dynamic imports.
        inlineDynamicImports: true,
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash][extname]',
      },
    },
  },
});
