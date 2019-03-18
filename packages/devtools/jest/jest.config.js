const fs = require('fs');
const path = require('path');
const _ = require('lodash');

// load project-local settings if they exist
const localSettingsPath = path.join(process.cwd(), 'jest.config.js');
const localSettings = fs.existsSync(localSettingsPath) ? require(localSettingsPath) : {};

module.exports = _.mergeWith(
  {
    rootDir: process.cwd(),
    coverageDirectory: '<rootDir>/.coverage',
    globals: {
      __DEV__: true
    },
    collectCoverageFrom: [
      'src/**/*.{js,jsx,ts,tsx}',
      '!src/**/*.d.ts',
      '!src/**/*.test.*',
      '!src/test/**/*.*',
      '!src/features/**/*.*'
    ],
    setupFiles: [path.join(__dirname, './setupTests.js')],
    testMatch: [
      '<rootDir>/src/**/__tests__/**/*.ts?(x)',
      '<rootDir>/src/**/?(*.)(spec|test).ts?(x)',
      '<rootDir>/src/**/*.feature'
    ],
    testEnvironment: 'node',
    testURL: 'http://localhost',
    transform: {
      '^.+\\.(ts|tsx)$': 'ts-jest',
      '^.+\\.css$': path.join(__dirname, './cssTransform.js'),
      '^.+\\.csv$': path.join(__dirname, './fileTransform.js'),
      '^(?!.*\\.(js|jsx|css|json)$)': path.join(__dirname, './fileTransform.js')
    },
    transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$'],
    moduleNameMapper: {
      '^react-native$': 'react-native-web'
    },
    moduleFileExtensions: ['web.js', 'js', 'json', 'web.jsx', 'jsx', 'ts', 'tsx', 'feature', 'csv']
  },
  localSettings,
  (objValue, srcValue) => (_.isArray(objValue) ? objValue.concat(srcValue) : undefined)
);
