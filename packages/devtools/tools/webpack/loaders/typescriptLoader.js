"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTypescriptLoader = void 0;
var paths_1 = require("../../config/paths");
var createBabelConfig_1 = require("../../scripts/createBabelConfig");
var createTypescriptLoader = function (_a) {
    var isDevelopment = _a.isDevelopment, isNode = _a.isNode, moduleFormat = _a.moduleFormat;
    var isProduction = !isDevelopment;
    var options = {
        silent: isDevelopment,
        configFile: isProduction ? paths_1.paths.tsConfigProduction : paths_1.paths.tsConfig,
        transpileOnly: isDevelopment,
        happyPackMode: isDevelopment,
        projectReferences: paths_1.paths.projectReferences,
        compilerOptions: {},
        logLevel: 'WARN',
    };
    return [
        {
            test: /\.tsx?$/,
            exclude: /\/node_modules\//,
            use: [
                {
                    loader: 'babel-loader',
                    options: (0, createBabelConfig_1.createBabelConfig)({ isDevelopment: isDevelopment, isProduction: isProduction, isNode: isNode, moduleFormat: moduleFormat }),
                },
                {
                    loader: 'ts-loader',
                    options: options,
                },
            ].filter(Boolean),
        },
    ];
};
exports.createTypescriptLoader = createTypescriptLoader;
//# sourceMappingURL=typescriptLoader.js.map