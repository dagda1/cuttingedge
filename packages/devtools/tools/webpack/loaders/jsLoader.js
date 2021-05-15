"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createJsLoader = void 0;
var paths_1 = require("../../config/paths");
var createBabelConfig_1 = require("../../scripts/createBabelConfig");
var getCacheIdentifier_1 = require("./getCacheIdentifier");
var createJsLoader = function (_a) {
    var isDevelopment = _a.isDevelopment, isProduction = _a.isProduction, moduleFormat = _a.moduleFormat, isNode = _a.isNode;
    return [
        {
            test: /\.(js|jsx|mjs|cjs)$/,
            include: [paths_1.paths.appSrc],
            use: [
                {
                    loader: 'babel-loader',
                    options: createBabelConfig_1.createBabelConfig({ isDevelopment: isDevelopment, isProduction: isProduction, moduleFormat: moduleFormat, isNode: isNode }),
                },
            ],
        },
        {
            test: /\.(js|mjs|cjs)$/,
            exclude: /@babel(?:\/|\\{1,2})runtime/,
            loader: require.resolve('babel-loader'),
            options: {
                babelrc: false,
                configFile: false,
                compact: false,
                presets: createBabelConfig_1.createBabelPresets({ isDevelopment: isDevelopment, isProduction: isProduction, isNode: isNode, moduleFormat: 'cjs' }),
                cacheDirectory: true,
                cacheIdentifier: getCacheIdentifier_1.getCacheIdentifier({ isDevelopment: isDevelopment, isNode: isNode, moduleFormat: moduleFormat }),
                cacheCompression: false,
                sourceMaps: true,
                inputSourceMap: true,
            },
        },
    ];
};
exports.createJsLoader = createJsLoader;
//# sourceMappingURL=jsLoader.js.map