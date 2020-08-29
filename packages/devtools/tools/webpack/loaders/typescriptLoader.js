"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTypescriptLoader = void 0;
var paths_1 = require("../../config/paths");
var loadableTransformer = require('loadable-ts-transformer').loadableTransformer;
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
exports.createTypescriptLoader = function (_a) {
    var isDevelopment = _a.isDevelopment, isProduction = _a.isProduction, isWeb = _a.isWeb;
    var hot = isDevelopment && isWeb;
    var options = {
        silent: isDevelopment,
        configFile: paths_1.paths.tsConfig,
        transpileOnly: isDevelopment,
        happyPackMode: isDevelopment,
        getCustomTransformers: function () { return ({ before: [loadableTransformer] }); },
        compilerOptions: {
            sourceMap: true,
        },
    };
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
                hot && {
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
                            'react-refresh/babel',
                        ],
                        sourceType: 'unambiguous',
                    },
                },
                {
                    loader: 'ts-loader',
                    options: options,
                },
            ].filter(Boolean),
        },
    ];
};
//# sourceMappingURL=typescriptLoader.js.map