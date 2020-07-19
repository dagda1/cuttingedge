"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.runEslint = exports.findExecutable = void 0;
var logger_1 = __importDefault(require("./logger"));
var fs_extra_1 = __importDefault(require("fs-extra"));
var path_1 = __importDefault(require("path"));
var paths_1 = require("../config/paths");
var copy_1 = __importDefault(require("copy"));
var child_process_1 = require("child_process");
var finders_1 = require("./utils/finders");
var MaxTries = 15;
function findExecutable(current, executable, tries) {
    if (tries === void 0) { tries = 0; }
    var modulesDir = path_1.default.resolve(current, 'node_modules', '.bin', executable);
    if (tries === MaxTries) {
        throw new Error("cannot find " + executable + " in " + modulesDir);
    }
    if (fs_extra_1.default.existsSync(modulesDir)) {
        return modulesDir;
    }
    return findExecutable(path_1.default.resolve(current, '..'), executable, ++tries);
}
exports.findExecutable = findExecutable;
function runEslint() {
    logger_1.default.start("Running eslint");
    var eslintPath = findExecutable(__dirname, 'eslint');
    var eslintConfig = finders_1.findFile(process.cwd(), '.eslintrc.json');
    var args = " --ext .ts,.tsx --max-warnings 0 " + paths_1.paths.appSrc + " --ignore-pattern *.test.* -c " + eslintConfig + " --fix";
    var eslint = child_process_1.exec(eslintPath + " " + args);
    eslint.stdout.on('data', function (data) { return logger_1.default.info(data); });
    eslint.stderr.on('data', function (data) { return logger_1.default.error(data); });
    eslint.on('close', function (code) {
        logger_1.default.done("eslint exited with code " + code + ".");
        if (code !== 0) {
            process.exit(code);
        }
    });
}
exports.runEslint = runEslint;
function runTypeScriptBuild() {
    fs_extra_1.default.emptyDirSync(paths_1.paths.appBuild);
    process.argv.push('--pretty', true.toString().toLocaleLowerCase());
    process.argv.push('-p', paths_1.paths.tsConfig);
    var tscPath = findExecutable(__dirname, 'tsc');
    var tscCommand = tscPath + " " + process.argv.slice(2).join(' ');
    logger_1.default.start("running tsc");
    var tsc = child_process_1.exec(tscCommand);
    tsc.stdout.on('data', function (data) { return logger_1.default.info(data); });
    tsc.stderr.on('data', function (data) { return logger_1.default.error(data); });
    tsc.on('close', function (code) {
        logger_1.default.done("tsc exited with code " + code);
        if (code !== 0) {
            process.exit(1);
        }
        runEslint();
    });
}
function build() {
    try {
        runTypeScriptBuild();
        var patterns = ['*.scss', '*.css', '*.png', '*.jpg', '*.md', '*.svg', '*.json', '*.html', 'config.js'].map(function (pattern) { return paths_1.paths.appSrc + "/**/" + pattern; });
        copy_1.default(patterns, paths_1.paths.appBuild, function (err) {
            if (err) {
                throw err;
            }
        });
    }
    catch (e) {
        logger_1.default.error(e);
        logger_1.default.error(e.stack);
        if (e.frame) {
            logger_1.default.error(e.frame);
        }
        process.exit(1);
    }
}
build();
//# sourceMappingURL=ts-build.js.map