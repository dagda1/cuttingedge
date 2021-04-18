"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.runEslint = exports.findExecutable = void 0;
var logger_1 = require("./logger");
var fs_extra_1 = __importDefault(require("fs-extra"));
var path_1 = __importDefault(require("path"));
var paths_1 = require("../config/paths");
var child_process_1 = require("child_process");
var finders_1 = require("./utils/finders");
var copy_assets_1 = require("./copy-assets");
var isProduction = process.env.NODE_ENV === 'production';
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
    var _a, _b;
    logger_1.logger.start("Running eslint");
    var eslintPath = findExecutable(__dirname, 'eslint');
    var eslintConfig = finders_1.findFile(process.cwd(), '.eslintrc.json');
    var args = " --ext .ts,.tsx --max-warnings 0 " + paths_1.paths.appSrc + " --ignore-pattern *.test.* -c " + eslintConfig + " --fix";
    var eslint = child_process_1.exec(eslintPath + " " + args);
    (_a = eslint.stdout) === null || _a === void 0 ? void 0 : _a.on('data', function (data) { return logger_1.logger.info(data); });
    (_b = eslint.stderr) === null || _b === void 0 ? void 0 : _b.on('data', function (data) { return logger_1.logger.error(data); });
    eslint.on('close', function (code) {
        logger_1.logger.done("eslint exited with code " + code + ".");
        if (code !== 0) {
            process.exit(code);
        }
    });
}
exports.runEslint = runEslint;
function runTypeScriptBuild() {
    var _a, _b;
    if (paths_1.paths.projectReferences) {
        process.argv.push('--build');
    }
    else {
        process.argv.push('-p', isProduction ? paths_1.paths.tsConfigProduction : paths_1.paths.tsConfig);
    }
    var tscPath = findExecutable(__dirname, 'tsc');
    var tscCommand = tscPath + " " + process.argv.slice(2).join(' ');
    logger_1.logger.info("running " + path_1.default.basename(tscCommand) + ", in " + path_1.default.dirname(process.cwd()));
    logger_1.logger.start("running tsc");
    var tsc = child_process_1.exec(tscCommand);
    (_a = tsc.stdout) === null || _a === void 0 ? void 0 : _a.on('data', function (data) { return logger_1.logger.info(data); });
    (_b = tsc.stderr) === null || _b === void 0 ? void 0 : _b.on('data', function (data) { return logger_1.logger.error(data); });
    tsc.on('close', function (code) {
        logger_1.logger.done("tsc exited with code " + code);
        if (code !== 0) {
            process.exit(1);
        }
    });
}
function build() {
    try {
        runTypeScriptBuild();
        runEslint();
        copy_assets_1.copyAssets();
    }
    catch (e) {
        logger_1.logger.error(e);
        logger_1.logger.error(e.stack);
        if (e.frame) {
            logger_1.logger.error(e.frame);
        }
        process.exit(1);
    }
}
build();
//# sourceMappingURL=ts-build.js.map