import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import svgrPlugin from 'vite-plugin-svgr';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import react from '@vitejs/plugin-react';
import mdx from '@mdx-js/rollup';

export default defineConfig({
  plugins: [react(), tsconfigPaths(), vanillaExtractPlugin(), svgrPlugin({ svgrOptions: { icon: true } }), mdx()],
  assetsInclude: ['src/assets/images/**.png', 'src/assets/images/**.jpg'],
  build: {
    sourcemap: 'inline',
    minify: false,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    rollupOptions: {
      output: {
        format: 'esm',
      },
    },
  },
  optimizeDeps: { include: ['react/jsx-runtime'] },
  root: '',
});
