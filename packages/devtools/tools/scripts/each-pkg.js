"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var commander_1 = __importDefault(require("commander"));
var paths_1 = require("../config/paths");
var logger_1 = require("../scripts/logger");
var child_process_1 = require("child_process");
function getPackages(packages) {
    return packages
        .filter(function (pkgPath) { return fs_1.default.lstatSync(pkgPath).isDirectory(); })
        .map(function (pkgPath) {
        var pkg = require(path_1.default.join(pkgPath, './package.json'));
        return __assign(__assign({}, pkg), { path: pkgPath });
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
    return new Promise(function (resolve, reject) {
        logger_1.logger.info(pkg.name + " " + cmd + " " + args.join(' '));
        var child = child_process_1.spawn(cmd, args, {
            stdio: [null, 1, 2],
            cwd: pkg.path,
        });
        child.on('exit', function (code) {
            if (code === 0) {
                resolve();
            }
            else {
                reject(code);
            }
        });
    });
}
/**
 * Executes a command for each package, optionally filtered by changed
 * or new packages. Explicity providing a package name is also
 * supported in conjunction with the changed and new options.
 */
commander_1.default
    .description('Executes the specified command for each package')
    .arguments('<cmd> [args...]')
    .option('-p, --package <name>', 'target a specific package (can be combined with the above)')
    .parse(process.argv)
    .action(function (cmd, args) {
    var pkgs = getPackages(paths_1.paths.libPackages);
    pkgs
        .reduce(function (p, pkg) {
        return p
            .then(function () { return runPkgCmd(cmd, args, pkg); })
            .catch(function (e) {
            logger_1.logger.error(pkg.name + " failed with " + e);
            process.exit(1);
        });
    }, Promise.resolve())
        .catch(process.exit);
})
    .parse(process.argv);
//# sourceMappingURL=each-pkg.js.map