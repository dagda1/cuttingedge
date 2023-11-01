import { defineConfig } from 'vitest/config';
import tsconfigPaths from 'vite-tsconfig-paths';
import svgrPlugin from 'vite-plugin-svgr';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import react from '@vitejs/plugin-react';
import mdx from '@mdx-js/rollup';
import { isProduction } from '@cutting/util';
import { createRequire } from 'module';
import type { PluginOption } from 'vite';

const require = createRequire(import.meta.url);

export default defineConfig({
  plugins: [
    react() as PluginOption,
    tsconfigPaths(),
    vanillaExtractPlugin({ emitCssInSsr: true }),
    svgrPlugin({ svgrOptions: { icon: true } }),
    mdx(),
  ],
  assetsInclude: ['src/assets/images/**.png', 'src/assets/images/**.jpg'],
  mode: '',
  build: {
    sourcemap: 'inline',
    minify: isProduction,
    rollupOptions: {
      output: {
        format: 'esm',
      },
    },
  },
  optimizeDeps: { include: ['react/jsx-runtime'] },
  root: '',
  resolve: {
    alias: [
      {
        find: '@visx/axis',
        replacement: require.resolve('@visx/axis/esm/index.js'),
      },
      {
        find: '@visx/shape',
        replacement: require.resolve('@visx/shape/esm/index.js'),
      },
      {
        find: '@visx/scale',
        replacement: require.resolve('@visx/scale/esm/index.js'),
      },
    ],
  },
});
