/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const config = require('@cutting/devtools/tools/jest/jest.config.js');

const cwd = __dirname;
const tsConfig = path.join(cwd, 'tsconfig.json');

const jestPlayWrigthOptions = {
  launchType: 'SERVER',
  launchOptions: {
    headless: false,
  },
  connectOptions: {},
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
  globalSetup: path.join(cwd, './setup.js'),
  globalTeardown: path.join(cwd, './teardown.js'),
  testMatch: ['<rootDir>/test/**/*.ts?(x)'],
  testEnvironment: 'jest-playwright-preset',
  runner: path.join(cwd, './runner.js'),
  testRunner: 'jest-circus/runner',
  setupFilesAfterEnv: ['expect-playwright', 'jest-playwright-preset/lib/extends.js'],
  testEnvironmentOptions: {
    'jest-playwright': jestPlayWrigthOptions,
  },
  useStderr: true,
};

module.exports = jestConfig;
