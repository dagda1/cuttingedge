#!/usr/bin/env node
'use strict';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { spawnSync } from 'child_process';
import path from 'path';
import chalk from 'chalk';
import { assert } from 'assert-ts';
import fs from 'fs';
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const script = process.argv[2];
const args = process.argv.slice(3);
let command = '';
switch (script) {
    case 'audit':
        command = '../audit-parser/index.js';
        break;
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
        command = path.join(__dirname, `../scripts/${script}.js`);
        break;
    }
    default:
        console.info(chalk.yellow(`Unknown script ${script}.`));
        console.info(chalk.yellow('Perhaps you need to update cutting?'));
        break;
}
assert(fs.existsSync(command), `Unknown script ${command}`);
const result = spawnSync('node', ['--experimental-import-meta-resolve', path.resolve(command)].concat(args), {
    stdio: 'inherit',
});
if (result.signal) {
    if (result.signal === 'SIGKILL') {
        console.info(chalk.yellow('The build failed because the process exited too early. ' +
            'This probably means the system ran out of memory or someone called ' +
            '`kill -9` on the process.'));
    }
    else if (result.signal === 'SIGTERM') {
        console.info(chalk.yellow('The build failed because the process exited too early. ' +
            'Someone might have called `kill` or `killall`, or the system could ' +
            'be shutting down.'));
    }
    if (process.env.NODE_ENV === 'test') {
        setTimeout(() => process.exit(1), 1000);
    }
    else {
        process.exit(1);
    }
}
process.exit(result.status ?? 0);
//# sourceMappingURL=cutting.js.map