"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCSSLoaders = exports.cssLoaders = void 0;
const mini_css_extract_plugin_1 = __importDefault(require("mini-css-extract-plugin"));
// import { createPostCssOptions } from '../createPostCssoptions';
const constants_1 = require("../constants");
const cssLoaders = (isDevelopment, isProduction, isNode, { importLoaders }) => [
    !isNode && {
        loader: mini_css_extract_plugin_1.default.loader,
        options: {
            esModule: false,
        },
    },
    {
        loader: 'css-loader',
        options: {
            importLoaders,
            sourceMap: false,
            modules: false,
            esModule: false,
        },
    },
    // TODO: reinstate postcss
    // { loader: 'postcss-loader', options: createPostCssOptions({ isProduction }) },
].filter(Boolean);
exports.cssLoaders = cssLoaders;
const createCSSLoaders = ({ isDevelopment, isProduction, isNode, }) => [
    {
        test: /\.vanilla\.css$/i,
        sideEffects: true,
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
        sideEffects: true,
        exclude: /\.vanilla\.css$/i,
        use: (0, exports.cssLoaders)(isDevelopment, isProduction, isNode, { modules: false, importLoaders: 1 }).filter(Boolean),
    },
];
exports.createCSSLoaders = createCSSLoaders;
//# sourceMappingURL=css.js.map