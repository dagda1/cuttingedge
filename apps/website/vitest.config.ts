import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vitest/config';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vanillaExtractPlugin(), react()],
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
