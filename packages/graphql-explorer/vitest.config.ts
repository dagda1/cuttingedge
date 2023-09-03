import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

// https://vitejs.dev/config/
export default defineConfig({
  root: process.env.NODE_ENV === 'test' ? '.' : 'demo',
  plugins: [vanillaExtractPlugin(), react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: '@cutting/devtools/setuptests.js',
    css: true,
    deps: {
      fallbackCJS: true,
    },
  },
});
