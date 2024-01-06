import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

const isTest = process.env.NODE_ENV === 'test';

// https://vitejs.dev/config/
export default defineConfig({
  root: isTest ? '.' : 'demo',
  plugins: [vanillaExtractPlugin(), react()],
  // resolve: {
  //   alias: [
  //     {
  //       find: 'luxon',
  //       replacement: require.resolve('@visx/axis/esm/index'),
  //     },
  //   ],
  // },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: '@cutting/devtools/setuptests',
    css: true,
    deps: {
      fallbackCJS: true,
    },
  },
});
