"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configs = exports.rules = void 0;
const padding_1 = require("./rules/padding");
const paddingConfigs = {
    afterAll: [
        {
            paddingType: 1,
            prevStatementType: 0,
            nextStatementType: 1,
        },
        {
            paddingType: 1,
            prevStatementType: 1,
            nextStatementType: 0,
        },
    ],
    afterEach: [
        {
            paddingType: 1,
            prevStatementType: 0,
            nextStatementType: 2,
        },
        {
            paddingType: 1,
            prevStatementType: 2,
            nextStatementType: 0,
        },
    ],
    beforeAll: [
        {
            paddingType: 1,
            prevStatementType: 0,
            nextStatementType: 3,
        },
        {
            paddingType: 1,
            prevStatementType: 3,
            nextStatementType: 0,
        },
    ],
    beforeEach: [
        {
            paddingType: 1,
            prevStatementType: 0,
            nextStatementType: 4,
        },
        {
            paddingType: 1,
            prevStatementType: 4,
            nextStatementType: 0,
        },
    ],
    describe: [
        {
            paddingType: 1,
            prevStatementType: 0,
            nextStatementType: [
                5,
                7,
                11,
            ],
        },
        {
            paddingType: 1,
            prevStatementType: [
                5,
                7,
                11,
            ],
            nextStatementType: 0,
        },
    ],
    expect: [
        {
            paddingType: 1,
            prevStatementType: 0,
            nextStatementType: 6,
        },
        {
            paddingType: 1,
            prevStatementType: 6,
            nextStatementType: 0,
        },
        {
            paddingType: 0,
            prevStatementType: 6,
            nextStatementType: 6,
        },
    ],
    test: [
        {
            paddingType: 1,
            prevStatementType: 0,
            nextStatementType: [
                10,
                9,
                8,
                12,
                13,
            ],
        },
        {
            paddingType: 1,
            prevStatementType: [
                10,
                9,
                8,
                12,
                13,
            ],
            nextStatementType: 0,
        },
    ],
};
exports.rules = {
    'padding-around-after-all-blocks': (0, padding_1.createRule)(paddingConfigs.afterAll),
    'padding-around-after-each-blocks': (0, padding_1.createRule)(paddingConfigs.afterEach),
    'padding-around-before-all-blocks': (0, padding_1.createRule)(paddingConfigs.beforeAll),
    'padding-around-before-each-blocks': (0, padding_1.createRule)(paddingConfigs.beforeEach),
    'padding-around-describe-blocks': (0, padding_1.createRule)(paddingConfigs.describe),
    'padding-around-expect-groups': (0, padding_1.createRule)(paddingConfigs.expect),
    'padding-around-test-blocks': (0, padding_1.createRule)(paddingConfigs.test),
    'padding-around-all': (0, padding_1.createRule)([].concat(...Object.keys(paddingConfigs).map((k) => paddingConfigs[k]))),
};
exports.configs = {
    recommended: {
        plugins: ['jest-formatting'],
        overrides: [
            {
                files: [
                    '**/*.test.*',
                    '**/*_test.*',
                    '**/*Test.*',
                    '**/*.spec.*',
                    '**/*_spec.*',
                    '**/*Spec.*',
                    '**/__tests__/*',
                ],
                rules: {
                    'jest-formatting/padding-around-after-all-blocks': 2,
                    'jest-formatting/padding-around-after-each-blocks': 2,
                    'jest-formatting/padding-around-before-all-blocks': 2,
                    'jest-formatting/padding-around-before-each-blocks': 2,
                    'jest-formatting/padding-around-describe-blocks': 2,
                    'jest-formatting/padding-around-test-blocks': 2,
                },
            },
        ],
    },
    strict: {
        plugins: ['jest-formatting'],
        overrides: [
            {
                files: [
                    '**/*.test.*',
                    '**/*_test.*',
                    '**/*Test.*',
                    '**/*.spec.*',
                    '**/*_spec.*',
                    '**/*Spec.*',
                    '**/__tests__/*',
                ],
                rules: {
                    'jest-formatting/padding-around-all': 2,
                },
            },
        ],
    },
};
