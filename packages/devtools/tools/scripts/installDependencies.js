"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.installDependencies = void 0;
const path_1 = __importDefault(require("path"));
const fs_extra_1 = __importDefault(require("fs-extra"));
const os_1 = __importDefault(require("os"));
const applicationType_1 = require("../types/applicationType");
const child_process_1 = require("child_process");
const logger_1 = require("./logger");
const devDependencies = [
    '@cutting/devtools',
    '@cutting/eslint-config',
    '@cutting/tsconfig',
    '@cutting/useful-types',
    '@cutting/util',
    '@jest/globals',
    '@types/eslint',
    '@typescript-eslint/eslint-plugin',
    'jest',
    'ts-jest',
    'typescript',
];
const applicationDevDependencies = {
    [applicationType_1.ApplicationType.WebApp]: [],
    [applicationType_1.ApplicationType.package]: [],
    [applicationType_1.ApplicationType.cli]: ['nodemon', 'ts-node'],
};
function installDependencies(projectName, applicationType) {
    var _a, _b;
    const root = path_1.default.resolve(projectName);
    const appName = path_1.default.basename(root);
    fs_extra_1.default.ensureDirSync(projectName);
    logger_1.logger.info(`createing pacakge.json file for ${projectName}`);
    const packageJson = {
        name: appName,
        version: '0.1.0',
        private: true,
    };
    fs_extra_1.default.writeFileSync(path_1.default.join(root, 'package.json'), JSON.stringify(packageJson, null, 2) + os_1.default.EOL);
    const originalDirectory = process.cwd();
    process.chdir(root);
    const dependencyList = [...devDependencies, ...applicationDevDependencies[applicationType]].join(' ');
    logger_1.logger.info(`installing dependencies for ${projectName}`);
    const pnpm = (0, child_process_1.exec)(`pnpm install ${dependencyList} --save-dev`);
    (_a = pnpm.stdout) === null || _a === void 0 ? void 0 : _a.on('data', (data) => logger_1.logger.info(data));
    (_b = pnpm.stderr) === null || _b === void 0 ? void 0 : _b.on('data', (data) => logger_1.logger.error(data));
    pnpm.on('close', (code) => {
        logger_1.logger.done(`pnpm exited with code ${code}`);
        if (code !== 0) {
            process.exit(1);
        }
    });
    logger_1.logger.info(`dependencies installed for ${projectName}`);
    process.chdir(originalDirectory);
}
exports.installDependencies = installDependencies;
//# sourceMappingURL=installDependencies.js.map