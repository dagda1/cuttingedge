/* eslint-disable @typescript-eslint/no-var-requires */
const jestConfig = require('../jest.config.js');
const path = require('path');

const cwd = process.cwd();

const tsConfig = path.join(cwd, 'tsconfig.json');

module.exports = {
  ...jestConfig,
  rootDir: cwd,
  roots: ['<rootDir>', '<rootDir>/test'],
  globals: {
    __DEV__: true,
    'ts-jest': {
      tsconfig: tsConfig,
      isolatedModules: true,
    },
  },
};
