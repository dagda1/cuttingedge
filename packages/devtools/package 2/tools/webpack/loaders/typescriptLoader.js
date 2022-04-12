"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTypescriptLoader = void 0;
const paths_1 = require("../../config/paths");
const createBabelConfig_1 = require("../../scripts/createBabelConfig");
const createTypescriptLoader = ({ isDevelopment, isNode, moduleFormat, }) => {
    const isProduction = !isDevelopment;
    const options = {
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
                    options: (0, createBabelConfig_1.createBabelConfig)({ isDevelopment, isProduction, isNode, moduleFormat }),
                },
                {
                    loader: 'ts-loader',
                    options,
                },
            ].filter(Boolean),
        },
    ];
};
exports.createTypescriptLoader = createTypescriptLoader;
//# sourceMappingURL=typescriptLoader.js.map