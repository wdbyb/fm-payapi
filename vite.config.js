import { resolve } from 'path';
import { defineConfig } from 'vite';

const outDir = resolve(__dirname, 'dist');

export default defineConfig({
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
      },
    },
  },
});
