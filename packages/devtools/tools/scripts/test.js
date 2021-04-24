"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable jest/no-jest-import */
var env_1 = require("../config/env");
var fs_1 = __importDefault(require("fs"));
var paths_1 = require("../config/paths");
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
var jest_1 = require("jest");
// Do this as the first thing so that any code reading it knows the right env.
process.env.BABEL_ENV = 'test';
process.env.NODE_ENV = 'test';
process.env.PUBLIC_URL = '';
process.on('unhandledRejection', function (err) {
    throw err;
});
delete require.cache[require.resolve('../config/env')];
env_1.getClientEnv();
var argv = process.argv.slice(2);
argv.push('--no-cache');
// Watch unless on CI or in coverage mode
if (!process.env.CI && argv.indexOf('--coverage') < 0) {
    argv.push('--watch');
}
var config = fs_1.default.existsSync(paths_1.paths.ownJestConfig) ? paths_1.paths.ownJestConfig : paths_1.paths.jestConfig;
argv.push('--config', config);
argv.push('--env', 'jsdom');
argv.push('--rootDir', "" + process.cwd());
argv.push('--useStderr');
if (process.env.CI) {
    argv.push('--ci');
    argv.push('--globalTeardown');
    argv.push('--coverage');
}
jest_1.run(argv);
//# sourceMappingURL=test.js.map