"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const commander_1 = require("commander");
const paths_1 = require("../config/paths");
const logger_1 = require("../scripts/logger");
const child_process_1 = require("child_process");
function getPackages(packages) {
    return packages
        .filter((pkgPath) => fs_1.default.lstatSync(pkgPath).isDirectory())
        .map((pkgPath) => {
        const pkg = require(path_1.default.join(pkgPath, './package.json'));
        return Object.assign(Object.assign({}, pkg), { path: pkgPath });
    });
}
/**
 * Runs a command for a given package
 *
 * @param {String} cmd - the command to run
 * @param {Array} args - command arguments
 * @param {String} pkg.name - package name
 * @param {String} pkg.path - package directory path
 * @returns {Promise} resolves or rejects when the process exits
 */
function runPkgCmd(cmd, args, pkg) {
    return new Promise((resolve, reject) => {
        logger_1.logger.info(`${pkg.name} ${cmd} ${args.join(' ')}`);
        const child = (0, child_process_1.spawn)(cmd, args, {
            stdio: [null, 1, 2],
            cwd: pkg.path,
        });
        child.on('exit', (code) => {
            if (code === 0) {
                resolve();
            }
            else {
                reject(code);
            }
        });
    });
}
const program = (0, commander_1.createCommand)('each-pkg');
/**
 * Executes a command for each package, optionally filtered by changed
 * or new packages. Explicity providing a package name is also
 * supported in conjunction with the changed and new options.
 */
program
    .description('Executes the specified command for each package')
    .arguments('<cmd> [args...]')
    .option('-p, --package <name>', 'target a specific package (can be combined with the above)')
    .parse(process.argv)
    .action(function (cmd, args) {
    const pkgs = getPackages(paths_1.paths.libPackages);
    pkgs
        .reduce((p, pkg) => p
        .then(() => runPkgCmd(cmd, args, pkg))
        .catch((e) => {
        logger_1.logger.error(`${pkg.name} failed with ${e}`);
        process.exit(1);
    }), Promise.resolve())
        .catch(process.exit);
})
    .parse(process.argv);
//# sourceMappingURL=each-pkg.js.map