import { getClientEnv } from '../config/env';
import fs from 'fs';
import { paths } from '../config/paths.js';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { run } from 'jest';
// Do this as the first thing so that any code reading it knows the right env.
process.env.BABEL_ENV = 'test';
process.env.NODE_ENV = 'test';
process.env.PUBLIC_URL = '';
process.on('unhandledRejection', (err) => {
    throw err;
});
getClientEnv();
const argv = process.argv.slice(2);
argv.push('--no-cache');
// Watch unless on CI or in coverage mode
if (!process.env.CI && argv.indexOf('--coverage') < 0) {
    argv.push('--watchAll');
}
const config = fs.existsSync(paths.ownJestConfig) ? paths.ownJestConfig : paths.jestConfig;
argv.push('--config', config);
argv.push('--env', 'jsdom');
argv.push('--rootDir', `${process.cwd()}`);
if (process.env.CI) {
    argv.push('--ci');
    argv.push('--globalTeardown');
    argv.push('--coverage');
}
run(argv);
//# sourceMappingURL=test.js.map