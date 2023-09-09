import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import tsconfigPaths from 'vite-tsconfig-paths';

const isTest = process.env.NODE_ENV === 'test';

// https://vitejs.dev/config/
export default defineConfig({
  root: isTest ? '.' : 'demo',
  plugins: [vanillaExtractPlugin({ identifiers: 'debug' }), tsconfigPaths({ root: '../../' }), react()],
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
