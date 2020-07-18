"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var env_1 = require("../config/env");
var paths_1 = require("src/config/paths");
// Do this as the first thing so that any code reading it knows the right env.
process.env.BABEL_ENV = 'test';
process.env.NODE_ENV = 'test';
process.env.PUBLIC_URL = '';
process.on('unhandledRejection', function (err) {
    throw err;
});
delete require.cache[require.resolve('../config/env')];
// Ensure environment variables are read.
env_1.getClientEnv();
// eslint-disable-next-line jest/no-jest-import
var jest = require('jest');
var argv = process.argv.slice(2);
argv.push('--no-cache');
// Watch unless on CI or in coverage mode
if (!process.env.CI && argv.indexOf('--coverage') < 0) {
    argv.push('--watch');
}
argv.push('--config', paths_1.paths.jestConfig);
argv.push('--env', 'jest-environment-jsdom-sixteen');
argv.push('--rootDir', "" + process.cwd());
if (process.env.CI) {
    argv.push('--ci');
    argv.push('--globalTeardown');
    argv.push('--coverage');
}
jest.run(argv);
//# sourceMappingURL=test.js.map