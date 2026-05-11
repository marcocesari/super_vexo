import { defineConfig } from 'vite';

// Relative base so the built bundle can also be loaded from file:// or any
// path the native wrapper drops it into.
export default defineConfig({
  base: './',
  server: {
    port: 5173,
  },
});
