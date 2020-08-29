"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var mergeWith_1 = __importDefault(require("lodash/mergeWith"));
var escapeChars = function (s) {
    if (!s) {
        return '';
    }
    return s.replace(/\./g, ' ');
};
// load project-local settings if they exist
var localSettingsPath = path_1.default.join(process.cwd(), 'jest.config.js');
var localSettings = fs_1.default.existsSync(localSettingsPath) ? require(localSettingsPath) : {};
var jestConfig = {
    rootDir: process.cwd(),
    roots: ['<rootDir>', '<rootDir>/src'],
    coverageDirectory: '<rootDir>/.coverage',
    globals: {
        __DEV__: true,
        'ts-jest': {
            tsConfig: path_1.default.resolve(__dirname, '../../typescript/tsconfig.test.json'),
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
    ],
    setupFilesAfterEnv: [path_1.default.join(__dirname, './setupTests.js'), path_1.default.join(__dirname, './polyfills.js')],
    testMatch: [
        '<rootDir>/src/**/__tests__/**/*.ts?(x)',
        '<rootDir>/src/**/?(*.)(spec|test).ts?(x)',
        '<rootDir>/src/**/*.feature',
    ],
    testEnvironment: 'node',
    testURL: 'http://localhost',
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest',
        '^.+\\.feature$': 'gherkin-jest',
        '^.+\\.css$': path_1.default.join(__dirname, './cssTransform.js'),
        '^.+\\.csv$': path_1.default.join(__dirname, './fileTransform.js'),
        '^(?!.*\\.(js|jsx|css|json)$)': path_1.default.join(__dirname, './fileTransform.js'),
    },
    transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$'],
    moduleFileExtensions: ['web.js', 'js', 'json', 'web.jsx', 'jsx', 'ts', 'tsx', 'feature', 'csv'],
    moduleDirectories: ['node_modules', '../../node_modules'],
    modulePaths: ['<rootDir>', 'src'],
    reporters: [
        'default',
        [
            'jest-junit',
            {
                classNameTemplate: function (vars) {
                    return escapeChars(vars.classname);
                },
                titleTemplate: function (vars) {
                    return escapeChars(vars.title);
                },
                includeConsoleOutput: Boolean(true).toString(),
            },
        ],
    ],
};
module.exports = mergeWith_1.default(jestConfig, localSettings, function (objValue, srcValue) {
    return Array.isArray(objValue) ? objValue.concat(srcValue) : undefined;
});
//# sourceMappingURL=jest.config.js.map