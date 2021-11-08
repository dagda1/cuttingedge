"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
var paths_1 = require("../config/paths");
var fs_extra_1 = __importDefault(require("fs-extra"));
var logger_1 = __importDefault(require("../scripts/logger"));
var setupTestsFileName = 'setupTests.ts';
var setupTestsCandidates = [path_1.default.resolve('.', setupTestsFileName), path_1.default.resolve('src', 'tests', setupTestsFileName)];
var localSetupTestsFile = setupTestsCandidates.find(fs_extra_1.default.existsSync);
if (localSetupTestsFile) {
    logger_1.default.debug("found local setup file " + localSetupTestsFile);
}
var jestConfig = {
    rootDir: process.cwd(),
    roots: ['<rootDir>', '<rootDir>/src'],
    coverageDirectory: '<rootDir>/.coverage',
    globals: {
        __DEV__: true,
        'ts-jest': {
            tsconfig: paths_1.paths.testTsConfig,
            isolatedModules: true,
        },
    },
    coveragePathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/src/tests/', '<rootDir>/src/types/'],
    collectCoverageFrom: [
        'src/**/*.{js,jsx,ts,tsx}',
        '!src/**/*.d.ts',
        '!src/**/*.test.*',
        '!src/test/**/*.*',
        '!src/features/**/*.*',
        '!src/index.ts',
        '!src/**/constants.*',
    ],
    setupFilesAfterEnv: [
        path_1.default.join(__dirname, './polyfills'),
        '@testing-library/jest-dom/extend-expect',
        path_1.default.join(__dirname, './setupTests'),
        localSetupTestsFile,
    ].filter(Boolean),
    testMatch: [
        '<rootDir>/src/**/__tests__/**/*.ts?(x)',
        '<rootDir>/src/**/?(*.)(spec|test).ts?(x)',
        '<rootDir>/src/**/*.feature',
    ],
    testEnvironment: 'jsdom',
    testURL: 'http://localhost',
    transform: {
        '.(ts|tsx|js)$': require.resolve('ts-jest/dist'),
        '.(js|jsx|cjs|mjs)$': require.resolve('babel-jest'),
        '^.+\\.css$': path_1.default.join(__dirname, './cssTransform.js'),
        '^.+\\.csv$': path_1.default.join(__dirname, './fileTransform.js'),
        '^(?!.*\\.(js|jsx|css|json)$)': path_1.default.join(__dirname, './fileTransform.js'),
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    },
    transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'csv', 'node'],
    moduleDirectories: ['node_modules', '../../node_modules'],
    modulePaths: ['<rootDir>', 'src'],
    resetMocks: true,
    reporters: ['default'],
};
module.exports = jestConfig;
//# sourceMappingURL=jest.config.js.map