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
// script), so we strip both attrs to get a plain `<script src=...>`.
function makeFileUrlSafe() {
  return {
    name: 'file-url-safe',
    apply: 'build',
    transformIndexHtml(html) {
      return html
        .replace(/\s+crossorigin(="[^"]*")?/g, '')
        .replace(/\s+type="module"/g, '');
    },
  };
}

export default defineConfig({
  base: './',
  plugins: [makeFileUrlSafe()],
  server: {
    port: 5173,
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
