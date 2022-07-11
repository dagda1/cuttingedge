import path from 'path';
import { paths } from '../config/paths.js';
import fs from 'fs-extra';
import logger from '../scripts/logger.js';
const setupTestsFileName = 'setupTests.ts';
const setupTestsCandidates = [path.resolve('.', setupTestsFileName), path.resolve('src', 'tests', setupTestsFileName)];
const localSetupTestsFile = setupTestsCandidates.find(fs.existsSync);
if (localSetupTestsFile) {
    logger.debug(`found local setup file ${localSetupTestsFile}`);
}
const esModules = ['uuid'].join('|');
const jestConfig = {
    rootDir: process.cwd(),
    roots: ['<rootDir>', '<rootDir>/src'],
    coverageDirectory: '<rootDir>/.coverage',
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    globals: {
        __DEV__: true,
        'ts-jest': {
            tsconfig: paths.testTsConfig,
            useESM: true,
            isolatedModules: true,
            babelConfig: {
                presets: [
                    '@babel/preset-react',
                    ['@babel/preset-env', { targets: { node: 16 }, useBuiltIns: 'entry', corejs: 3 }],
                ],
                plugins: ['@vanilla-extract/babel-plugin'],
            },
        },
    },
    extensionsToTreatAsEsm: ['.ts', '.tsx'],
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
        path.join(__dirname, './polyfills'),
        '@testing-library/jest-dom/extend-expect',
        path.join(__dirname, './setupTests'),
        localSetupTestsFile,
    ].filter(Boolean),
    testMatch: [
        '<rootDir>/src/**/__tests__/**/*.ts?(x)',
        '<rootDir>/src/**/?(*.)(spec|test).ts?(x)',
        '<rootDir>/src/**/*.feature',
    ],
    testEnvironment: 'jsdom',
    transform: {
        '.(ts|tsx|js)$': require.resolve('ts-jest/dist'),
        '.(js|jsx|cjs|mjs)$': require.resolve('babel-jest'),
        '^.+\\.css$': path.join(__dirname, './cssTransform'),
        '^.+\\.csv$': path.join(__dirname, './fileTransform'),
        '^(?!.*\\.(js|jsx|css|json)$)': path.join(__dirname, './fileTransform'),
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    },
    transformIgnorePatterns: [`/node_modules/(?!${esModules})`],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'csv', 'node'],
    moduleDirectories: ['node_modules', '../../node_modules'],
    modulePaths: ['<rootDir>', 'src'],
    resetMocks: true,
    reporters: ['default'],
    silent: false,
    verbose: true,
    noStackTrace: false,
    moduleNameMapper: {
        '^(\\.{1,2}/.*)\\.js$': '$1',
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    },
};
module.exports = jestConfig;
//# sourceMappingURL=jest.config.js.map