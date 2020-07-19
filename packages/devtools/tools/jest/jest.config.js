"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var mergeWith_1 = __importDefault(require("lodash/mergeWith"));
// load project-local settings if they exist
var localSettingsPath = path_1.default.join(process.cwd(), 'jest.config.js');
var localSettings = fs_1.default.existsSync(localSettingsPath) ? require(localSettingsPath) : {};
var jestConfig = {
    rootDir: process.cwd(),
    coverageDirectory: '<rootDir>/.coverage',
    globals: {
        __DEV__: true,
    },
    collectCoverageFrom: [
        'src/**/*.{js,jsx,ts,tsx}',
        '!src/**/*.d.ts',
        '!src/**/*.test.*',
        '!src/test/**/*.*',
        '!src/features/**/*.*',
    ],
    setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect', path_1.default.join(__dirname, './setupTests.js')],
    testMatch: [
        '<rootDir>/src/**/__tests__/**/*.ts?(x)',
        '<rootDir>/src/**/?(*.)(spec|test).ts?(x)',
        '<rootDir>/src/**/*.feature',
    ],
    testEnvironment: 'node',
    testURL: 'http://localhost',
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest',
        '^.+\\.css$': path_1.default.join(__dirname, '../../tools/jest/cssTransform.js'),
        '^.+\\.csv$': path_1.default.join(__dirname, '../../tools/jest/fileTransform.js'),
        '^(?!.*\\.(js|jsx|css|json)$)': path_1.default.join(__dirname, '../../tools/jest/fileTransform.js'),
    },
    transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$'],
    moduleFileExtensions: ['web.js', 'js', 'json', 'web.jsx', 'jsx', 'ts', 'tsx', 'feature', 'csv', 'svg'],
    moduleDirectories: ['node_modules', 'node_modules/@cutting/devtools/jest'],
};
module.exports = mergeWith_1.default(jestConfig, localSettings, function (objValue, srcValue) {
    return Array.isArray(objValue) ? objValue.concat(srcValue) : undefined;
});
//# sourceMappingURL=jest.config.js.map