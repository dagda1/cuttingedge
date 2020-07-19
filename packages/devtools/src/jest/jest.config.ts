import { Config } from '@jest/types';
import fs from 'fs';
import path from 'path';
import mergeWith from 'lodash/mergeWith';

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
> &
  Pick<Config.GlobalConfig, 'coverageDirectory' | 'collectCoverageFrom'>;

// load project-local settings if they exist
const localSettingsPath = path.join(process.cwd(), 'jest.config.js');
const localSettings: Config.ProjectConfig = fs.existsSync(localSettingsPath) ? require(localSettingsPath) : {};

const jestConfig: OverridableJestConfig = {
  rootDir: process.cwd(),
  coverageDirectory: '<rootDir>/.coverage',
  globals: {
    __DEV__: true,
  },
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.d.ts',
    '!src/**/*.test.*',
    '!src/test/**/*.*',
    '!src/features/**/*.*',
  ],
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect', path.join(__dirname, './setupTests.js')],
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.ts?(x)',
    '<rootDir>/src/**/?(*.)(spec|test).ts?(x)',
    '<rootDir>/src/**/*.feature',
  ],
  testEnvironment: 'node',
  testURL: 'http://localhost',
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
    '^.+\\.css$': path.join(__dirname, '../../tools/jest/cssTransform.js'),
    '^.+\\.csv$': path.join(__dirname, '../../tools/jest/fileTransform.js'),
    '^(?!.*\\.(js|jsx|css|json)$)': path.join(__dirname, '../../tools/jest/fileTransform.js'),
  } as any,
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$'],
  moduleFileExtensions: ['web.js', 'js', 'json', 'web.jsx', 'jsx', 'ts', 'tsx', 'feature', 'csv', 'svg'],
  moduleDirectories: ['node_modules', 'node_modules/@cutting/devtools/jest'],
};

module.exports = mergeWith(jestConfig, localSettings, (objValue, srcValue) =>
  Array.isArray(objValue) ? objValue.concat(srcValue) : undefined,
);
