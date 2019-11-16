/* eslint-disable no-console */
'use strict';

// Do this as the first thing so that any code reading it knows the right env.
process.env.BABEL_ENV = 'test';
process.env.NODE_ENV = 'test';
process.env.PUBLIC_URL = '';

process.on('unhandledRejection', (err) => {
  throw err;
});

delete require.cache[require.resolve('../config/env')];

// Ensure environment variables are read.
require('../config/env').getClientEnv();

const jest = require('jest');
const argv = process.argv.slice(2);

argv.push('--no-cache');

// Watch unless on CI or in coverage mode
if (!process.env.CI) {
  argv.push('--watchAll');
}

const config = require('../jest/jest.config.js');

argv.push('--config', JSON.stringify(config));
argv.push('--env', 'jsdom');
argv.push('--rootDir', `${process.cwd()}`);

if (process.env.CI) {
  argv.push('--ci');
  argv.push('--testResultsProcessor');
  argv.push('--globalTeardown');
  argv.push('--coverage');
}

try {
  console.dir(jest.run(argv));
} catch (e) {
  console.dir(e);
}
