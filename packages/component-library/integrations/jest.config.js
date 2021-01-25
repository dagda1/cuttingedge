import path from 'path';
import config from '@cutting/devtools/tools/jest/jest.config.js';

const cwd = process.cwd();
const tsConfig = path.join(cwd, 'tsconfig.json');

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
  testEnvironment: 'jest-playwright-preset',
  testRunner: 'jest-circus/runner',
  setupFilesAfterEnv: ['expect-playwright', 'jest-playwright-preset/lib/extends.js'],
  testEnvironmentOptions: {
    'jest-playwright': {
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
    },
  },
};

export default jestConfig;
