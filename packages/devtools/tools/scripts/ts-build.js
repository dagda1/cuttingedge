"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.runEslint = exports.findExecutable = void 0;
const logger_1 = require("./logger");
const fs_extra_1 = __importDefault(require("fs-extra"));
const path_1 = __importDefault(require("path"));
const paths_1 = require("../config/paths");
const child_process_1 = require("child_process");
const finders_1 = require("./utils/finders");
const copy_assets_1 = require("./copy-assets");
const isProduction = process.env.NODE_ENV === 'production';
const MaxTries = 15;
function findExecutable(current, executable, tries = 0) {
    const modulesDir = path_1.default.resolve(current, 'node_modules', '.bin', executable);
    if (tries === MaxTries) {
        throw new Error(`cannot find ${executable} in ${modulesDir}`);
    }
    if (fs_extra_1.default.existsSync(modulesDir)) {
        return modulesDir;
    }
    return findExecutable(path_1.default.resolve(current, '..'), executable, ++tries);
}
exports.findExecutable = findExecutable;
function runEslint() {
    var _a, _b;
    logger_1.logger.start(`Running eslint`);
    const eslintPath = findExecutable(__dirname, 'eslint');
    const eslintConfig = (0, finders_1.findFile)(process.cwd(), '.eslintrc.json');
    const args = ` --ext .ts,.tsx --max-warnings 0 ${paths_1.paths.appSrc} --ignore-pattern *.test.* -c ${eslintConfig} --fix`;
    const eslint = (0, child_process_1.exec)(`${eslintPath} ${args}`);
    (_a = eslint.stdout) === null || _a === void 0 ? void 0 : _a.on('data', (data) => logger_1.logger.info(data));
    (_b = eslint.stderr) === null || _b === void 0 ? void 0 : _b.on('data', (data) => logger_1.logger.error(data));
    eslint.on('close', (code) => {
        logger_1.logger.done(`eslint exited with code ${code}.`);
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
    const tscPath = findExecutable(__dirname, 'tsc');
    const tscCommand = `${tscPath} ${process.argv.slice(2).join(' ')}`;
    logger_1.logger.info(`running ${path_1.default.basename(tscCommand)}, in ${path_1.default.dirname(process.cwd())}`);
    logger_1.logger.start(`running tsc`);
    const tsc = (0, child_process_1.exec)(tscCommand);
    (_a = tsc.stdout) === null || _a === void 0 ? void 0 : _a.on('data', (data) => logger_1.logger.info(data));
    (_b = tsc.stderr) === null || _b === void 0 ? void 0 : _b.on('data', (data) => logger_1.logger.error(data));
    tsc.on('close', (code) => {
        logger_1.logger.done(`tsc exited with code ${code}`);
        if (code !== 0) {
            process.exit(1);
        }
    });
}
function build() {
    try {
        runTypeScriptBuild();
        runEslint();
        (0, copy_assets_1.copyAssets)();
    }
    catch (e) {
        if (e instanceof Error) {
            logger_1.logger.error(e);
            logger_1.logger.error(e.stack);
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        if (e === null || e === void 0 ? void 0 : e.frame) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            logger_1.logger.error(e.frame);
        }
        process.exit(1);
    }
}
build();
//# sourceMappingURL=ts-build.js.map