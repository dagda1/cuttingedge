"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.configureCommon = void 0;
var path_1 = __importDefault(require("path"));
var webpack_1 = __importDefault(require("webpack"));
var fork_ts_checker_webpack_plugin_1 = __importDefault(require("fork-ts-checker-webpack-plugin"));
var paths_1 = require("../config/paths");
var webpackbar_1 = __importDefault(require("webpackbar"));
var webpack_bundle_analyzer_1 = require("webpack-bundle-analyzer");
var happypack_1 = __importDefault(require("happypack"));
var mini_css_extract_plugin_1 = __importDefault(require("mini-css-extract-plugin"));
var getEnvironment_1 = require("./getEnvironment");
var fileLoader_1 = require("./loaders/fileLoader");
var urlLoader_1 = require("./loaders/urlLoader");
var jsLoader_1 = require("./loaders/jsLoader");
var typescriptLoader_1 = require("./loaders/typescriptLoader");
var css_1 = require("./loaders/css");
var csvLoader_1 = require("./loaders/csvLoader");
var svgLoader_1 = require("./loaders/svgLoader");
var mdLoader_1 = require("./loaders/mdLoader");
var finders_1 = require("../scripts/utils/finders");
var repoNodeModules = finders_1.findAppNodeModules(__dirname);
exports.configureCommon = function (options) {
    var isNode = !!options.isNode;
    var isWeb = !isNode;
    var _a = getEnvironment_1.getEnvironment(), isProduction = _a.isProduction, isDevelopment = _a.isDevelopment, staticAssetName = _a.staticAssetName, isAnalyse = _a.isAnalyse;
    var env = getEnvironment_1.getEnvVariables({ isNode: !!options.isNode });
    var config = {
        mode: isDevelopment ? 'development' : 'production',
        bail: isProduction,
        devtool: 'source-map',
        context: process.cwd(),
        resolve: {
            modules: ['node_modules', repoNodeModules].concat(env.raw.nodePath || path_1.default.resolve('.')),
            extensions: ['.mjs', '.js', '.ts', '.tsx', '.json', '.jsx', '.csv'],
            alias: {
                'webpack/hot/poll': require.resolve('webpack/hot/poll'),
                'native-url': require.resolve('native-url'),
            },
        },
        resolveLoader: {
            modules: [paths_1.paths.appNodeModules, paths_1.paths.ownNodeModules, repoNodeModules].filter(Boolean),
        },
        module: {
            strictExportPresence: true,
            rules: Array.prototype.filter.call(__spreadArrays([
                fileLoader_1.createFileLoader({ staticAssetName: staticAssetName, isWeb: isWeb }),
                urlLoader_1.createUrlLoader({ staticAssetName: staticAssetName, isWeb: isWeb }),
                jsLoader_1.createJsLoader()
            ], typescriptLoader_1.createTypescriptLoader({ isDevelopment: isDevelopment, isProduction: isProduction, isWeb: isWeb }), [
                csvLoader_1.createCSVLoader(),
                svgLoader_1.createSVGLoader(),
                mdLoader_1.createMDLoader()
            ], css_1.createCSSLoaders({ isDevelopment: isDevelopment, isProduction: isProduction, isNode: isNode })), function (x) { return !!x; }),
        },
        plugins: Array.prototype.filter.call([
            new happypack_1.default({
                id: 'ts',
                threads: 4,
                loaders: [
                    {
                        path: 'ts-loader',
                        query: { happyPackMode: true },
                    },
                ],
            }),
            new webpack_1.default.DefinePlugin(env.stringified),
            isDevelopment && new webpackbar_1.default(),
            isAnalyse && new webpack_bundle_analyzer_1.BundleAnalyzerPlugin(),
            new webpack_1.default.ContextReplacementPlugin(/moment[\/\\]locale$/, /en/),
            new fork_ts_checker_webpack_plugin_1.default(),
            isDevelopment && new webpack_1.default.WatchIgnorePlugin([paths_1.paths.appManifest]),
            new mini_css_extract_plugin_1.default({
                filename: isDevelopment ? 'static/css/[name].css' : 'static/css/[name].[chunkhash:8].css',
                chunkFilename: isDevelopment ? 'static/css/[id].css' : 'static/css/[id].[contenthash].css',
                ignoreOrder: true,
            }),
        ], Boolean),
    };
    return config;
};
//# sourceMappingURL=common.js.map