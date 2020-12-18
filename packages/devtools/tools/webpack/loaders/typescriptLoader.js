"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTypescriptLoader = void 0;
var paths_1 = require("../../config/paths");
var createBabelConfig_1 = require("../../scripts/createBabelConfig");
exports.createTypescriptLoader = function (_a) {
    var isDevelopment = _a.isDevelopment, isNode = _a.isNode, moduleFormat = _a.moduleFormat;
    var isProduction = !isDevelopment;
    var options = {
        silent: isDevelopment,
        configFile: paths_1.paths.tsConfig,
        transpileOnly: isDevelopment,
        happyPackMode: isDevelopment,
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
                {
                    loader: 'babel-loader',
                    options: createBabelConfig_1.createBabelConfig({ isDevelopment: isDevelopment, isProduction: isProduction, isNode: isNode, moduleFormat: moduleFormat }),
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