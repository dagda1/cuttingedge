"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.installDependencies = void 0;
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
    '@vanilla-extract/babel-plugin',
    'jest',
    'ts-jest',
    'typescript',
];
const applicationDevDependencies = {
    [applicationType_1.ApplicationType.WebApp]: ['@vanilla-extract/css', '@vanilla-extract/sprinkles'],
    [applicationType_1.ApplicationType.package]: [],
    [applicationType_1.ApplicationType.cli]: ['nodemon', 'ts-node'],
};
const applicationDependencies = {
    [applicationType_1.ApplicationType.WebApp]: ['react', 'react-dom', '@cutting/component-library'],
    [applicationType_1.ApplicationType.package]: [],
    [applicationType_1.ApplicationType.cli]: [],
};
function install(dependencies) {
    var _a, _b;
    const pnpm = (0, child_process_1.exec)(`pnpm install ${dependencies}`);
    (_a = pnpm.stdout) === null || _a === void 0 ? void 0 : _a.on('data', (data) => logger_1.logger.info(data));
    (_b = pnpm.stderr) === null || _b === void 0 ? void 0 : _b.on('data', (data) => logger_1.logger.error(data));
    pnpm.on('close', (code) => {
        logger_1.logger.done(`pnpm exited with code ${code}`);
        if (code !== 0) {
            process.exit(1);
        }
    });
}
function installDependencies(appName, applicationType) {
    logger_1.logger.info(`createing pacakge.json file for ${appName}`);
    const packageJson = {
        name: appName,
        version: '0.1.0',
        private: true,
    };
    fs_extra_1.default.writeFileSync('package.json', JSON.stringify(packageJson, null, 2) + os_1.default.EOL);
    logger_1.logger.info(`installing devDependencies for ${appName}`);
    const devDependencyList = [...devDependencies, ...applicationDevDependencies[applicationType]].join(' ');
    install(`${devDependencyList} --save-dev`);
    const dependencyList = applicationDependencies[applicationType];
    if (dependencyList.length > 0) {
        logger_1.logger.info(`installing dependencies for ${appName}`);
        install(`${dependencyList.join(' ')}`);
    }
    logger_1.logger.info(`dependencies installed for ${appName}`);
}
exports.installDependencies = installDependencies;
//# sourceMappingURL=installDependencies.js.map