"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createJsLoader = void 0;
const paths_1 = require("../../config/paths");
const createBabelConfig_1 = require("../../scripts/createBabelConfig");
const getCacheIdentifier_1 = require("./getCacheIdentifier");
const path_1 = __importDefault(require("path"));
const testFiles = path_1.default.join(paths_1.paths.appSrc, '**/*.test.*');
const createJsLoader = ({ isDevelopment, isProduction, moduleFormat, isNode, }) => [
    {
        test: /\.(js|jsx|mjs|cjs)$/,
        include: [paths_1.paths.appSrc],
        exclude: [testFiles],
        use: [
            {
                loader: 'babel-loader',
                options: (0, createBabelConfig_1.createBabelConfig)({ isDevelopment, isProduction, moduleFormat, isNode }),
            },
        ],
    },
    {
        test: /\.(js|mjs|cjs)$/,
        exclude: [/@babel(?:\/|\\{1,2})runtime/, testFiles],
        loader: require.resolve('babel-loader'),
        options: {
            babelrc: false,
            configFile: false,
            compact: false,
            presets: (0, createBabelConfig_1.createBabelPresets)({ isDevelopment, isProduction, isNode, moduleFormat }),
            cacheDirectory: true,
            cacheIdentifier: (0, getCacheIdentifier_1.getCacheIdentifier)({ isDevelopment, isNode, moduleFormat }),
            cacheCompression: false,
            sourceMaps: true,
            inputSourceMap: true,
        },
    },
];
exports.createJsLoader = createJsLoader;
//# sourceMappingURL=jsLoader.js.map