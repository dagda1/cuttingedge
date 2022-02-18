#!/usr/bin/env node
'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const logger_1 = require('../scripts/logger');
const spawn = require('react-dev-utils/crossSpawn');
const script = process.argv[2];
const args = process.argv.slice(3);
let command = '';
switch (script) {
  case 'audit':
    command = '../audit-parser/index.js';
    break;
  case 'each-pkg':
  case 'devserver-start':
  case 'init':
  case 'node-build':
  case 'rollup':
  case 'scaffold':
  case 'ssr-build':
  case 'ssr-start':
  case 'static-build':
  case 'esbuild':
  case 'test':
  case 'ts-build': {
    command = `../scripts/${script}`;
    break;
  }
  default:
    logger_1.logger.info(`Unknown script ${script}.`);
    logger_1.logger.info('Perhaps you need to update cutting?');
    break;
}
const result = spawn.sync('node', [require.resolve(command)].concat(args), {
  stdio: 'inherit',
});
if (result.signal) {
  if (result.signal === 'SIGKILL') {
    logger_1.logger.info(
      'The build failed because the process exited too early. ' +
        'This probably means the system ran out of memory or someone called ' +
        '`kill -9` on the process.',
    );
  } else if (result.signal === 'SIGTERM') {
    logger_1.logger.info(
      'The build failed because the process exited too early. ' +
        'Someone might have called `kill` or `killall`, or the system could ' +
        'be shutting down.',
    );
  }
  if (process.env.NODE_ENV === 'test') {
    setTimeout(() => process.exit(1), 1000);
  } else {
    process.exit(1);
  }
}
process.exit(result.status);
//# sourceMappingURL=cutting.js.map
