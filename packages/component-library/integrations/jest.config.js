import path from 'path';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

const cwd = path.join(process.cwd(), 'integrations');
const tsConfig = path.join(cwd, 'tsconfig.json');

export default {
  rootDir: cwd,
  globals: {
    __DEV__: true,
    'ts-jest': {
      tsconfig: tsConfig,
      isolatedModules: true,
    },
  },
  globalSetup: path.join(cwd, 'setup.ts'),
  globalTeardown: path.join(cwd, 'teardown.ts'),
  transform: {
    '.(ts|tsx|js)$': require.resolve('ts-jest/dist'),
    '.(js|jsx)$': require.resolve('babel-jest'), // jest's default
  },
};
