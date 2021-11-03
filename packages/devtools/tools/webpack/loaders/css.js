"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCSSLoaders = exports.cssLoaders = void 0;
var mini_css_extract_plugin_1 = __importDefault(require("mini-css-extract-plugin"));
// import { createPostCssOptions } from '../createPostCssoptions';
var constants_1 = require("../constants");
var cssLoaders = function (isDevelopment, isProduction, isNode, _a) {
    var importLoaders = _a.importLoaders;
    return [
        !isNode && {
            loader: mini_css_extract_plugin_1.default.loader,
            options: {},
        },
        {
            loader: 'css-loader',
            options: {
                importLoaders: importLoaders,
                sourceMap: false,
                modules: false,
            },
        },
        // TODO: reinstate postcss
        // { loader: 'postcss-loader', options: createPostCssOptions({ isProduction }) },
    ].filter(Boolean);
};
exports.cssLoaders = cssLoaders;
var createCSSLoaders = function (_a) {
    var isDevelopment = _a.isDevelopment, isProduction = _a.isProduction, isNode = _a.isNode;
    return [
        {
            test: /\.vanilla\.css$/i,
            use: [
                mini_css_extract_plugin_1.default.loader,
                {
                    loader: require.resolve('css-loader'),
                    options: {
                        url: false,
                    },
                },
            ],
        },
        {
            test: constants_1.cssRegex,
            exclude: /\.vanilla\.css$/i,
            sideEffects: true,
            use: (0, exports.cssLoaders)(isDevelopment, isProduction, isNode, { modules: false, importLoaders: 1 }).filter(Boolean),
        },
    ];
};
exports.createCSSLoaders = createCSSLoaders;
//# sourceMappingURL=css.js.map