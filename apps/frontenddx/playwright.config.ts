import type { PlaywrightTestConfig } from '@playwright/test';
import { assert } from 'assert-ts';

assert(!!process.env.VERCEL_URL, `VERCEL_URL has not been set.`);

const config: PlaywrightTestConfig = {
  testMatch: '**/*.playwright.ts',

  reporter: process.env.CI ? [['github'], ['dot']] : 'list',

  use: {
    baseURL: process.env.VERCEL_URL,
  },

  projects: [
    {
      name: 'Desktop - Chromium',
      use: {
        browserName: 'chromium',
        channel: 'chrome',
        viewport: {
          width: 1200,
          height: 1080,
        },
      },
    },
    {
      name: 'Mobile - Chromium',
      use: {
        browserName: 'chromium',
        channel: 'chrome',
        viewport: {
          width: 414,
          height: 896,
        },
      },
    },
  ],
};

console.log(`baseUrl======${config.use?.baseURL}`);

export default config;
