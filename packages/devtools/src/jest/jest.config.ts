import { Config } from '@jest/types';
import path from 'path';
import { paths } from '../config/paths';
import fs from 'fs-extra';
import logger from '../scripts/logger';

export type OverridableJestConfig = Pick<
  Config.ProjectConfig,
  | 'rootDir'
  | 'globals'
  | 'setupFilesAfterEnv'
  | 'testMatch'
  | 'testEnvironment'
  | 'testURL'
  | 'transform'
  | 'transformIgnorePatterns'
  | 'moduleFileExtensions'
  | 'moduleDirectories'
  | 'roots'
  | 'modulePaths'
  | 'resetMocks'
> &
  Pick<Config.GlobalConfig, 'coverageDirectory' | 'collectCoverageFrom' | 'coveragePathIgnorePatterns' | 'reporters'>;

const setupTestsFileName = 'setupTests.ts';

const setupTestsCandidates = [path.resolve('.', setupTestsFileName), path.resolve('src', 'tests', setupTestsFileName)];

const localSetupTestsFile = setupTestsCandidates.find(fs.existsSync);

if (localSetupTestsFile) {
  logger.debug(`found local setup file ${localSetupTestsFile}`);
}

const jestConfig: OverridableJestConfig = {
  rootDir: process.cwd(),
  roots: ['<rootDir>', '<rootDir>/src'],
  coverageDirectory: '<rootDir>/.coverage',
  globals: {
    __DEV__: true,
    'ts-jest': {
      tsconfig: paths.testTsConfig,
      isolatedModules: true,
    },
  },
  coveragePathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/src/tests/', '<rootDir>/src/types/'],
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.d.ts',
    '!src/**/*.test.*',
    '!src/test/**/*.*',
    '!src/features/**/*.*',
    '!src/index.ts',
    '!src/**/constants.*',
  ],
  setupFilesAfterEnv: [
    path.join(__dirname, './polyfills'),
    '@testing-library/jest-dom/extend-expect',
    path.join(__dirname, './setupTests'),
    localSetupTestsFile as string,
  ].filter(Boolean),
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.ts?(x)',
    '<rootDir>/src/**/?(*.)(spec|test).ts?(x)',
    '<rootDir>/src/**/*.feature',
  ],
  testEnvironment: 'jsdom',
  testURL: 'http://localhost',
  transform: {
    '.(ts|tsx|js)$': require.resolve('ts-jest/dist'),
    '.(js|jsx|cjs|mjs)$': require.resolve('babel-jest'), // jest's default
    '^.+\\.css$': path.join(__dirname, './cssTransform.js'),
    '^.+\\.csv$': path.join(__dirname, './fileTransform.js'),
    '^(?!.*\\.(js|jsx|css|json)$)': path.join(__dirname, './fileTransform.js'),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } as any,
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'csv', 'node'],
  moduleDirectories: ['node_modules', '../../node_modules'],
  modulePaths: ['<rootDir>', 'src'],
  resetMocks: true,

  reporters: ['default'],
};

module.exports = jestConfig;
