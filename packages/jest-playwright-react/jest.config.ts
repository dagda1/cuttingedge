import path from 'path';
import config from '@cutting/devtools/tools/jest/jest.config.js';
import { JestPlaywrightConfig } from 'jest-playwright-preset';

const cwd = process.cwd();
const tsConfig = path.join(cwd, 'tsconfig.json');

const jestPlayWrigthOptions: JestPlaywrightConfig = {
  launchType: 'SERVER',
  launchOptions: {
    headless: false,
  },
  connectOptions: {
    chromium: {
      wsEndpoint: 'ws://chrome.proxy.com:4444',
    },
    wsEndpoint: 'ws://chrome.proxy.com:4444',
  },
  contextOptions: {
    viewport: {
      width: 800,
      height: 640,
    },
    ignoreHTTPSErrors: true,
  },
  browsers: ['chromium'],
  exitOnPageError: true,
  collectCoverage: false,
};

const jestConfig = {
  ...config,
  rootDir: cwd,
  roots: ['<rootDir>', '<rootDir>/test'],
  globals: {
    __DEV__: true,
    'ts-jest': {
      tsconfig: tsConfig,
      isolatedModules: true,
    },
  },
  globalSetup: path.join(cwd, 'setup.ts'),
  globalTeardown: path.join(cwd, 'teardown.ts'),
  testMatch: ['<rootDir>/test/**/*.ts?(x)'],
  testEnvironment: path.join(cwd, './runner/runner.ts'),
  testRunner: 'jest-circus/runner',
  setupFilesAfterEnv: ['expect-playwright', 'jest-playwright-preset/lib/extends.js'],
  testEnvironmentOptions: {
    'jest-playwright': jestPlayWrigthOptions,
  },
};

export default jestConfig;
