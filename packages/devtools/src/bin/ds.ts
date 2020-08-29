#!/usr/bin/env node
'use strict';

import { logger } from '../scripts/logger';
const spawn = require('react-dev-utils/crossSpawn');

const script = process.argv[2];
const args = process.argv.slice(3);

let command = '';

switch (script) {
  case 'audit':
    command = '../audit-parser/index.js';
    break;
  case 'rollup':
    command = '../rollup/rollup.js';
    break;
  case 'devserver-start':
  case 'each-pkg':
  case 'test':
  case 'ts-build':
  case 'static-build':
  case 'node-build':
  case 'ssr-build':
  case 'ssr-start': {
    command = `../scripts/${script}`;
    break;
  }
  default:
    logger.info(`Unknown script ${script}.`);
    logger.info('Perhaps you need to update ds?');
    break;
}

const result = spawn.sync('node', [require.resolve(command)].concat(args), {
  stdio: 'inherit',
});

if (result.signal) {
  if (result.signal === 'SIGKILL') {
    logger.info(
      'The build failed because the process exited too early. ' +
        'This probably means the system ran out of memory or someone called ' +
        '`kill -9` on the process.',
    );
  } else if (result.signal === 'SIGTERM') {
    logger.info(
      'The build failed because the process exited too early. ' +
        'Someone might have called `kill` or `killall`, or the system could ' +
        'be shutting down.',
    );
  }
  process.exit(1);
}
process.exit(result.status);
