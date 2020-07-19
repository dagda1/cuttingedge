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
exports.configure = void 0;
var webpack_1 = __importDefault(require("webpack"));
var path_1 = __importDefault(require("path"));
var webpack_merge_1 = __importDefault(require("webpack-merge"));
var html_webpack_plugin_1 = __importDefault(require("html-webpack-plugin"));
var common_1 = require("./common");
var paths_1 = require("../config/paths");
var fs_1 = __importDefault(require("fs"));
var InlineChunkHtmlPlugin_1 = __importDefault(require("react-dev-utils/InlineChunkHtmlPlugin"));
var WatchMissingNodeModulesPlugin_1 = __importDefault(require("react-dev-utils/WatchMissingNodeModulesPlugin"));
var InterpolateHtmlPlugin_1 = __importDefault(require("react-dev-utils/InterpolateHtmlPlugin"));
var git_1 = require("../scripts/git");
var react_refresh_webpack_plugin_1 = __importDefault(require("@pmmmwh/react-refresh-webpack-plugin"));
var getUrlParts_1 = require("./getUrlParts");
var getEnvironment_1 = require("./getEnvironment");
var createDevServer_1 = require("./loaders/createDevServer");
var createWebpackOptimisation_1 = require("./optimisation/createWebpackOptimisation");
var assert_1 = require("../assert/assert");
var LoadableWebpackPlugin = require('@loadable/webpack-plugin');
var ModuleNotFoundPlugin = require('react-dev-utils/ModuleNotFoundPlugin');
var HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin');
var isProfilerEnabled = function () { return process.argv.includes('--profile'); };
exports.configure = function (options) {
    var entries = options.entries, publicDir = options.publicDir, proxy = options.proxy, devServer = options.devServer, isStaticBuild = options.isStaticBuild;
    var _a = getEnvironment_1.getEnvironment(), isDevelopment = _a.isDevelopment, isProduction = _a.isProduction;
    var ssrBuild = !isStaticBuild;
    var _b = getUrlParts_1.getUrlParts({ ssrBuild: ssrBuild, isProduction: isProduction }), protocol = _b.protocol, host = _b.host, publicPath = _b.publicPath, port = _b.port, sockPort = _b.sockPort;
    // TODO: get rid of mutation
    options.publicUrl = publicPath.length > 1 && publicPath.substr(-1) === '/' ? publicPath.slice(0, -1) : publicPath;
    options.isNode = false;
    options.isWeb = true;
    var common = common_1.configureCommon(options);
    var polyfills = ['core-js/stable', 'regenerator-runtime/runtime', 'whatwg-fetch'];
    var iter = typeof entries === 'string' || Array.isArray(entries) ? { client: entries } : entries;
    var finalEntries = Object.keys(iter).reduce(function (acc, key) {
        var entryPoints = Array.isArray(iter[key]) ? iter[key] : [iter[key]];
        acc[key] = __spreadArrays(polyfills, entryPoints);
        return acc;
    }, {});
    var commitHash = git_1.getCommitHash();
    var template = publicDir ? path_1.default.join(publicDir, 'index.html') : 'public/index.html';
    var templateExists = fs_1.default.existsSync(template);
    var config = webpack_merge_1.default(common, {
        name: 'client',
        target: 'web',
        entry: finalEntries,
        devServer: isDevelopment ? createDevServer_1.createDevServer({ protocol: protocol, host: host, sockPort: sockPort, proxy: proxy, port: port }) : {},
        output: {
            path: isStaticBuild ? paths_1.paths.appBuild : paths_1.paths.appBuildPublic,
            publicPath: publicPath,
            pathinfo: isDevelopment,
            filename: isProduction ? 'static/js/[name].[chunkhash:8].js' : 'static/js/bundle.js',
            chunkFilename: isProduction ? 'static/js/[name].[chunkhash:8].chunk.js' : 'static/js/[name].chunk.js',
            devtoolModuleFilenameTemplate: function (info) { return path_1.default.resolve(info.resourcePath).replace(/\\/g, '/'); },
        },
        plugins: [
            isDevelopment && new webpack_1.default.HotModuleReplacementPlugin(),
            ssrBuild &&
                new LoadableWebpackPlugin({
                    writeToDisk: { filename: paths_1.paths.appBuild },
                }),
            new InterpolateHtmlPlugin_1.default(html_webpack_plugin_1.default, { PUBLIC_URL: options.publicUrl }),
            (devServer || (isStaticBuild && templateExists)) &&
                new html_webpack_plugin_1.default({
                    inject: true,
                    template: template,
                    minify: isProduction && {
                        collapseWhitespace: true,
                        removeRedundantAttributes: true,
                        useShortDoctype: true,
                        removeEmptyAttributes: true,
                        removeStyleLinkTypeAttributes: true,
                        keepClosingSlash: true,
                        minifyJS: true,
                        minifyCSS: true,
                        minifyURLs: true,
                    },
                }),
            new HtmlWebpackPartialsPlugin([
                {
                    path: path_1.default.join(__dirname, './partial.html'),
                    location: 'body',
                    priority: 'low',
                    options: {
                        hash: commitHash + "-" + new Date().toISOString(),
                    },
                },
            ]),
            isProduction && ssrBuild && new InlineChunkHtmlPlugin_1.default(html_webpack_plugin_1.default, [/runtime-.+[.]js/]),
            new webpack_1.default.IgnorePlugin(/^\.\/locale$/, /moment$/),
            new ModuleNotFoundPlugin(paths_1.paths.appPath),
            isDevelopment && new WatchMissingNodeModulesPlugin_1.default(paths_1.paths.appNodeModules),
            isProfilerEnabled() && new webpack_1.default.debug.ProfilingPlugin(),
            isDevelopment &&
                new react_refresh_webpack_plugin_1.default({
                    overlay: {
                        sockIntegration: 'wds',
                        sockPort: sockPort,
                    },
                }),
        ].filter(Boolean),
    });
    if (isProduction) {
        assert_1.assert(config.optimization, 'No optimization in config');
        config.optimization = createWebpackOptimisation_1.createWebpackOptimisation({ optimization: config.optimization, isDevelopment: isDevelopment, ssrBuild: ssrBuild });
    }
    return config;
};
//# sourceMappingURL=client.js.map