"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.installDependencies = void 0;
const applicationType_1 = require("../types/applicationType");
const child_process_1 = require("child_process");
const logger_1 = require("./logger");
const dependencies = ['assert-ts'];
const devDependencies = [
    '@babel/core',
    '@cutting/devtools',
    '@cutting/eslint-config',
    '@cutting/tsconfig',
    '@cutting/useful-types',
    '@cutting/util',
    '@jest/globals',
    '@types/eslint',
    '@types/node',
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
        '@cutting/util',
        '@cutting/hooks',
        '@cutting/component-library',
    ],
    [applicationType_1.ApplicationType.package]: [],
    [applicationType_1.ApplicationType.cli]: [],
};
function install(dependencies) {
    var _a, _b;
    const pnpm = (0, child_process_1.exec)(`pnpm add ${dependencies}`);
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
    logger_1.logger.info(`creating package.json file for ${appName}`);
    logger_1.logger.info(`installing devDependencies for ${appName}`);
    const devDependencyList = [...devDependencies, ...applicationDevDependencies[applicationType]].join(' ');
    install(`${devDependencyList} --save-dev`);
    const dependencyList = [...dependencies, ...applicationDependencies[applicationType]].toString();
    logger_1.logger.info(`installing dependencies for ${appName}`);
    logger_1.logger.debug(dependencyList);
    install(`${dependencyList} -P`);
    logger_1.logger.info(`dependencies installed for ${appName}`);
}
exports.installDependencies = installDependencies;
//# sourceMappingURL=installDependencies.js.map