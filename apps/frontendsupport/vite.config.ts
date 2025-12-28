import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import react from '@vitejs/plugin-react-swc';
import { defineConfig, type PluginOption } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [tsconfigPaths() as PluginOption, vanillaExtractPlugin() as PluginOption, react() as PluginOption],
  build: {
    sourcemap: true,
    minify: true,
    rollupOptions: {
      output: {
        format: 'esm',
      },
    },
  },
  optimizeDeps: {
    include: ['react/jsx-runtime'],
  },
  server: {
    port: 3001,
  },
});
