import { getClientEnv } from '../config/env';

// Do this as the first thing so that any code reading it knows the right env.
process.env.BABEL_ENV = 'test';
process.env.NODE_ENV = 'test';
process.env.PUBLIC_URL = '';

process.on('unhandledRejection', (err) => {
  throw err;
});

delete require.cache[require.resolve('../config/env')];

// Ensure environment variables are read.
getClientEnv();

// eslint-disable-next-line jest/no-jest-import
const jest = require('jest');
const argv = process.argv.slice(2);

argv.push('--no-cache');

// Watch unless on CI or in coverage mode
if (!process.env.CI && argv.indexOf('--coverage') < 0) {
  argv.push('--watch');
}

argv.push('--config', paths.jestConfig);
argv.push('--env', 'jest-environment-jsdom-sixteen');
argv.push('--rootDir', `${process.cwd()}`);

if (process.env.CI) {
  argv.push('--ci');

  argv.push('--globalTeardown');
  argv.push('--coverage');
}

jest.run(argv);
