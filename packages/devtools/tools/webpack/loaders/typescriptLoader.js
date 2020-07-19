"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTypescriptLoader = void 0;
var paths_1 = require("../../config/paths");
var loadableTransformer = require('loadable-ts-transformer').loadableTransformer;
exports.createTypescriptLoader = function (_a) {
    var isDevelopment = _a.isDevelopment, isProduction = _a.isProduction, isWeb = _a.isWeb;
    return [
        {
            test: /\.tsx$/,
            enforce: 'pre',
            use: [
                {
                    loader: 'eslint-loader',
                    options: {
                        fix: isProduction,
                        emitWarning: isDevelopment,
                        failOnWarning: isProduction,
                        configFile: paths_1.paths.eslintConfig,
                    },
                },
            ],
        },
        {
            test: /\.tsx?$/,
            use: [
                isDevelopment &&
                    isWeb && {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: [
                            '@babel/plugin-syntax-dynamic-import',
                            [
                                '@babel/plugin-transform-runtime',
                                {
                                    regenerator: true,
                                },
                            ],
                            isDevelopment && 'react-refresh/babel',
                        ],
                    },
                },
                {
                    loader: 'ts-loader',
                    options: {
                        configFile: paths_1.paths.tsConfig,
                        transpileOnly: isDevelopment,
                        happyPackMode: isDevelopment,
                        getCustomTransformers: function () { return ({ before: [loadableTransformer] }); },
                    },
                },
            ].filter(Boolean),
        },
    ];
};
//# sourceMappingURL=typescriptLoader.js.map