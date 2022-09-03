import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import svgrPlugin from 'vite-plugin-svgr';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import ssr from 'vite-plugin-ssr/plugin'

export default defineConfig({
  plugins: [      
    react(),
    tsconfigPaths(),
    vanillaExtractPlugin(),
    svgrPlugin({ svgrOptions: { icon: true } }),
    ssr()
  ],
  build: {
    minify: false
  }
});