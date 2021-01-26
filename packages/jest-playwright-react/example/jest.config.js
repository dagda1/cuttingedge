import jestConfig from '../jest.config';
const tsConfig = path.join(cwd, 'tsconfig.json');

export default {
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
