import { unstable_vitePlugin as remix } from '@remix-run/dev';
import { defineConfig } from 'vite';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import tsconfigPaths from 'vite-tsconfig-paths';
import { installGlobals } from '@remix-run/node';

const isProduction = process.env.NODE_ENV === 'production';

installGlobals();

export default defineConfig({
  plugins: [
    remix({
      ignoredRouteFiles: ['**/.*', '**/*.css.ts'],
      serverBuildPath: 'build/index.mjs',
      serverModuleFormat: 'esm',
    }),
    tsconfigPaths(),
    vanillaExtractPlugin(),
  ],
  build: {
    sourcemap: 'inline',
    minify: isProduction,
    rollupOptions: {
      output: {
        format: 'esm',
      },
    },
  },
});
