"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTypescriptLoader = void 0;
const paths_1 = require("../../config/paths");
const createBabelConfig_1 = require("../../scripts/createBabelConfig");
const createTypescriptLoader = ({ isDevelopment, isNode, moduleFormat, }) => {
    const isProduction = !isDevelopment;
    const options = {
        silent: isDevelopment,
        configFile: paths_1.paths.tsConfigProduction,
        transpileOnly: isDevelopment,
        happyPackMode: isDevelopment,
        projectReferences: paths_1.paths.projectReferences,
        compilerOptions: {},
        logLevel: 'INFO',
    };
    return [
        {
            test: /\.tsx?$/,
            exclude: [/\/node_modules\//],
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