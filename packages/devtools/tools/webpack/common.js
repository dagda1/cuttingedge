"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.configureCommon = void 0;
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
var ModuleScopePlugin_1 = __importDefault(require("react-dev-utils/ModuleScopePlugin"));
var stats_1 = require("./loaders/stats");
var webpack_merge_1 = require("webpack-merge");
var path_1 = __importDefault(require("path"));
var configureCommon = function (options, overrides) {
    var isNode = !!options.isNode;
    var isWeb = !isNode;
    var _a = getEnvironment_1.getEnvironment(), isProduction = _a.isProduction, isDevelopment = _a.isDevelopment, staticAssetName = _a.staticAssetName, isAnalyse = _a.isAnalyse;
    var env = getEnvironment_1.getEnvVariables({ isNode: !!options.isNode });
    var config = webpack_merge_1.merge(overrides, {
        mode: isDevelopment ? 'development' : 'production',
        bail: isProduction,
        devtool: 'source-map',
        context: process.cwd(),
        stats: stats_1.stats,
        performance: {
            hints: false,
        },
        resolve: {
            mainFields: isNode ? ['main', 'module', 'browser'] : ['module', 'browser', 'main'],
            modules: [path_1.default.join(process.cwd(), paths_1.paths.resolvedNodeModules[0]), './node_modules', path_1.default.resolve('.')],
            extensions: [
                '.web.mjs',
                '.mjs',
                '.esm.js',
                '.cjs',
                '.web.js',
                '.js',
                '.web.ts',
                '.ts',
                '.tsx',
                '.json',
                '.jsx',
                '.csv',
            ],
            alias: {
                'webpack/hot/poll': require.resolve('webpack/hot/poll'),
                'native-url': require.resolve('native-url'),
            },
            plugins: [new ModuleScopePlugin_1.default(paths_1.paths.appSrc, [paths_1.paths.appPackageJson])],
        },
        module: {
            strictExportPresence: true,
            rules: Array.prototype.filter.call(__spreadArray(__spreadArray(__spreadArray(__spreadArray([
                fileLoader_1.createFileLoader({ staticAssetName: staticAssetName, isWeb: isWeb }),
                urlLoader_1.createUrlLoader({ staticAssetName: staticAssetName, isWeb: isWeb })
            ], __read(typescriptLoader_1.createTypescriptLoader({ isDevelopment: isDevelopment, isNode: isNode, moduleFormat: isNode ? 'cjs' : 'esm' }))), __read(jsLoader_1.createJsLoader({ isDevelopment: isDevelopment, isProduction: isProduction, isNode: isNode, moduleFormat: isNode ? 'cjs' : 'esm' }))), [
                csvLoader_1.createCSVLoader(),
                svgLoader_1.createSVGLoader(),
                mdLoader_1.createMDLoader()
            ]), __read(css_1.createCSSLoaders({ isDevelopment: isDevelopment, isProduction: isProduction, isNode: isNode }))), function (x) { return !!x; }),
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
            isDevelopment && new webpackbar_1.default({ basic: true }),
            isAnalyse &&
                new webpack_bundle_analyzer_1.BundleAnalyzerPlugin({
                    defaultSizes: 'gzip',
                }),
            new webpack_1.default.ContextReplacementPlugin(/moment[\/\\]locale$/, /en/),
            new fork_ts_checker_webpack_plugin_1.default({
                typescript: {
                    enabled: true,
                    configFile: isProduction ? paths_1.paths.tsConfigProduction : paths_1.paths.tsConfig,
                    build: paths_1.paths.projectReferences,
                },
            }),
            isDevelopment && new webpack_1.default.WatchIgnorePlugin([paths_1.paths.appManifest]),
            new mini_css_extract_plugin_1.default({
                filename: isDevelopment ? 'static/css/[name].css' : 'static/css/[name].[chunkhash:8].css',
                chunkFilename: isDevelopment ? 'static/css/[id].css' : 'static/css/[id].[contenthash].css',
                ignoreOrder: true,
            }),
        ], Boolean),
    });
    return config;
};
exports.configureCommon = configureCommon;
//# sourceMappingURL=common.js.map