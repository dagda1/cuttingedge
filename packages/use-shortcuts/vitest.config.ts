/// <reference types="vitest" />
/// <reference types="vite/client" />

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vanillaExtractPlugin(),
    react({
      babel: {
        plugins: ["@vanilla-extract/babel-plugin"],
      },
    }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: '@cutting/devtools/setuptests.js',
    css: true,
    deps: {
      fallbackCJS: true,
    },
    include: ['./src/**/*.test.ts']
  },
})