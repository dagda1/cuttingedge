import { isProduction } from '@cutting/util';
import bundleInspector from '@cutting/vite-bundle-advisor';
import mdx from '@mdx-js/rollup';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import react from '@vitejs/plugin-react-swc';
import { createRequire } from 'module';
import svgrPlugin from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

console.log(bundleInspector);

const require = createRequire(import.meta.url);

export default defineConfig({
  plugins: [
    mdx(),
    tsconfigPaths(),
    vanillaExtractPlugin(),
    svgrPlugin({ svgrOptions: { icon: true } }),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    react() as any,
    bundleInspector(),
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
        replacement: require.resolve('@visx/axis/esm/index'),
      },
      {
        find: '@visx/shape',
        replacement: require.resolve('@visx/shape/esm/index'),
      },
      {
        find: '@visx/scale',
        replacement: require.resolve('@visx/scale/esm/index'),
      },
    ],
  },
});
