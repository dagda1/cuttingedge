import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vitest/config';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import tsconfigPaths from 'vite-tsconfig-paths';

const isTest = process.env.NODE_ENV === 'test';

// https://vitejs.dev/config/
export default defineConfig({
  root: isTest ? '.' : 'demo',
  plugins: [vanillaExtractPlugin(), tsconfigPaths({ root: '../../' }), react()],
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
