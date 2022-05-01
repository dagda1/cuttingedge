"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCSSLoaders = void 0;
const mini_css_extract_plugin_1 = __importDefault(require("mini-css-extract-plugin"));
// import { createPostCssOptions } from '../createPostCssoptions';
const constants_1 = require("../constants");
const paths_1 = require("../../config/paths");
const createCSSLoaders = ({ isNode, }) => {
    return isNode
        ? [
            {
                test: /\.vanilla\.css$/i,
                use: ['css-loader'],
            },
            {
                test: constants_1.cssRegex,
                sideEffects: true,
                exclude: /\.vanilla\.css$/i,
                use: [
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            // sourceMap: isDevelopment,
                            modules: false,
                            url: false,
                            // esModule: true,
                        },
                    },
                ],
            },
        ]
        : [
            {
                test: /\.vanilla\.css$/i,
                sideEffects: true,
                use: [
                    {
                        loader: mini_css_extract_plugin_1.default.loader,
                        options: {
                            publicPath: paths_1.paths.publicUrlOrPath,
                        },
                    },
                    {
                        loader: require.resolve('css-loader'),
                        options: {
                            importLoaders: 1,
                            modules: false,
                            url: false,
                            // url: [Function: url],
                            // import: [Function: import]
                        },
                    },
                ],
            },
            {
                test: constants_1.cssRegex,
                sideEffects: true,
                exclude: /\.vanilla\.css$/i,
                use: [
                    {
                        loader: mini_css_extract_plugin_1.default.loader,
                        options: {
                            publicPath: paths_1.paths.publicUrlOrPath,
                            // esModule: true,
                        },
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            // sourceMap: isDevelopment,
                            modules: false,
                            url: false,
                            // esModule: true,
                        },
                    },
                    // TODO: reinstate postcss
                    // { loader: 'postcss-loader', options: createPostCssOptions({ isProduction }) },
                ],
            },
        ];
};
exports.createCSSLoaders = createCSSLoaders;
//# sourceMappingURL=css.js.map