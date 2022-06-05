"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.installDevDependencies = exports.installDependencies = void 0;
const applicationType_1 = require("../types/applicationType");
const child_process_1 = require("child_process");
const logger_1 = require("./logger");
const dependencies = ['assert-ts', '@cutting/util'];
const devDependencies = [
    '@babel/core',
    '@cutting/devtools',
    '@cutting/eslint-config',
    '@cutting/tsconfig',
    '@cutting/useful-types',
    '@jest/globals',
    '@types/eslint',
    '@types/node',
    '@types/webpack-env',
    '@typescript-eslint/eslint-plugin',
    '@typescript-eslint/parser',
    '@vanilla-extract/babel-plugin',
    'eslint',
    'regenerator-runtime',
    'jest',
    'ts-jest',
    'typescript',
    'webpack',
];
const applicationDevDependencies = {
    [applicationType_1.ApplicationType.WebApp]: [
        '@types/react',
        '@types/react-dom',
        '@types/react-router-dom',
        '@vanilla-extract/css',
        '@vanilla-extract/sprinkles',
        'babel-loader',
        'css-loader',
        'core-js',
        'file-loader',
        'html-loader',
        'ts-loader',
        'whatwg-fetch',
    ],
    [applicationType_1.ApplicationType.package]: [],
    [applicationType_1.ApplicationType.cli]: ['nodemon', 'ts-node'],
};
const applicationDependencies = {
    [applicationType_1.ApplicationType.WebApp]: [
        'react',
        'react-dom',
        'react-router',
        'react-router-dom',
        '@cutting/hooks',
        '@cutting/component-library',
    ],
    [applicationType_1.ApplicationType.package]: [],
    [applicationType_1.ApplicationType.cli]: [],
};
function install(dependencies) {
    return new Promise((resolve) => {
        var _a, _b;
        logger_1.logger.debug(`installing in ${process.cwd()}`);
        const pnpm = (0, child_process_1.exec)(`pnpm add ${dependencies}`);
        (_a = pnpm.stdout) === null || _a === void 0 ? void 0 : _a.on('data', (data) => logger_1.logger.info(data));
        (_b = pnpm.stderr) === null || _b === void 0 ? void 0 : _b.on('data', (data) => logger_1.logger.error(data));
        pnpm.on('close', (code) => {
            if (code !== 0) {
                logger_1.logger.error(`pnpm exited with code ${code}`);
                process.exit(1);
            }
            logger_1.logger.done(`pnpm exited with code ${code}`);
            setTimeout(resolve, 500);
        });
    });
}
function installDependencies(appName, applicationType) {
    return __awaiter(this, void 0, void 0, function* () {
        const dependencyList = [...dependencies, ...applicationDependencies[applicationType]].join(' ');
        logger_1.logger.info(`installing dependencies for ${appName}`);
        yield install(`${dependencyList} -P`);
    });
}
exports.installDependencies = installDependencies;
function installDevDependencies(appName, applicationType) {
    return __awaiter(this, void 0, void 0, function* () {
        logger_1.logger.info(`installing devDependencies for ${appName}`);
        const devDependencyList = [...devDependencies, ...applicationDevDependencies[applicationType]].join(' ');
        yield install(`${devDependencyList} --save-dev`);
        logger_1.logger.info(`dependencies installed for ${appName}`);
    });
}
exports.installDevDependencies = installDevDependencies;
//# sourceMappingURL=installDependencies.js.map