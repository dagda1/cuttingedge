#!/usr/bin/env node
'use strict';

const spawn = require('react-dev-utils/crossSpawn');
const script = process.argv[2];
const args = process.argv.slice(3);

switch (script) {
  case 'ts-build':
  case 'static-build':
  case 'each-pkg':
  case 'devserver-start':
  case 'ssr-start':
  case 'ssr-build':
  case 'rollup':
  case 'test': {
    const result = spawn.sync('node', [require.resolve('../scripts/' + script)].concat(args), { stdio: 'inherit' });
    if (result.signal) {
      if (result.signal === 'SIGKILL') {
        console.error(
          `The build failed because the process exited too early.
           This probably means the system ran out of memory or someone called
           'kill -9' on the process.`,
        );
      } else if (result.signal === 'SIGTERM') {
        console.error(
          `The build failed because the process exited too early.
           Someone might have called 'kill' or 'killall', or the system could
           be shutting down.`,
        );
      }
      process.exit(1);
    }
    process.exit(result.status);
    break;
  }
  default:
    console.error(`Unknown script "${script}".`);
    console.error('Perhaps you need to update cutting?');
    break;
}
