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
  | 'roots'
  | 'modulePaths'
> &
  Pick<Config.GlobalConfig, 'coverageDirectory' | 'collectCoverageFrom' | 'coveragePathIgnorePatterns' | 'reporters'>;

const escapeChars = (s: string) => {
  if (!s) {
    return '';
  }

  return s.replace(/\./g, ' ');
};

// load project-local settings if they exist
const localSettingsPath = path.join(process.cwd(), 'jest.config.js');
const localSettings: Config.ProjectConfig = fs.existsSync(localSettingsPath) ? require(localSettingsPath) : {};

const jestConfig: OverridableJestConfig = {
  rootDir: process.cwd(),
  roots: ['<rootDir>', '<rootDir>/src'],
  coverageDirectory: '<rootDir>/.coverage',
  globals: {
    __DEV__: true,
    'ts-jest': {
      tsConfig: path.resolve(__dirname, '../../typescript/tsconfig.test.json'),
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
  ],
  setupFilesAfterEnv: [path.join(__dirname, './setupTests.js'), path.join(__dirname, './polyfills.js')],
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.ts?(x)',
    '<rootDir>/src/**/?(*.)(spec|test).ts?(x)',
    '<rootDir>/src/**/*.feature',
  ],
  testEnvironment: 'node',
  testURL: 'http://localhost',
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
    '^.+\\.feature$': 'gherkin-jest',
    '^.+\\.css$': path.join(__dirname, './cssTransform.js'),
    '^.+\\.csv$': path.join(__dirname, './fileTransform.js'),
    '^(?!.*\\.(js|jsx|css|json)$)': path.join(__dirname, './fileTransform.js'),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } as any,
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$'],
  moduleFileExtensions: ['web.js', 'js', 'json', 'web.jsx', 'jsx', 'ts', 'tsx', 'feature', 'csv'],
  moduleDirectories: ['node_modules', '../../node_modules'],
  modulePaths: ['<rootDir>', 'src'],
  reporters: [
    'default',
    [
      'jest-junit',
      {
        classNameTemplate: (vars: { classname: string }) => {
          return escapeChars(vars.classname);
        },
        titleTemplate: (vars: { title: string }) => {
          return escapeChars(vars.title);
        },
        includeConsoleOutput: Boolean(true).toString(),
      },
    ],
  ],
};

module.exports = mergeWith(jestConfig, localSettings, (objValue, srcValue) =>
  Array.isArray(objValue) ? objValue.concat(srcValue) : undefined,
);
