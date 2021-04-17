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
exports.configure = void 0;
var webpack_1 = __importDefault(require("webpack"));
var path_1 = __importDefault(require("path"));
var webpack_merge_1 = require("webpack-merge");
var html_webpack_plugin_1 = __importDefault(require("html-webpack-plugin"));
var common_1 = require("./common");
var paths_1 = require("../config/paths");
var fs_1 = __importDefault(require("fs"));
var WatchMissingNodeModulesPlugin_1 = __importDefault(require("react-dev-utils/WatchMissingNodeModulesPlugin"));
var InterpolateHtmlPlugin_1 = __importDefault(require("react-dev-utils/InterpolateHtmlPlugin"));
var react_refresh_webpack_plugin_1 = __importDefault(require("@pmmmwh/react-refresh-webpack-plugin"));
var getUrlParts_1 = require("./getUrlParts");
var getEnvironment_1 = require("./getEnvironment");
var createDevServer_1 = require("./loaders/createDevServer");
var createWebpackOptimisation_1 = require("./optimisation/createWebpackOptimisation");
var webpack_plugin_1 = __importDefault(require("@loadable/webpack-plugin"));
var html_webpack_partials_plugin_1 = __importDefault(require("html-webpack-partials-plugin"));
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
var ModuleNotFoundPlugin_1 = __importDefault(require("react-dev-utils/ModuleNotFoundPlugin"));
var isProfilerEnabled = function () { return process.argv.includes('--profile'); };
var configure = function (options, overrides) {
    if (overrides === void 0) { overrides = {}; }
    var entries = options.entries, publicDir = options.publicDir, proxy = options.proxy, devServer = options.devServer, isStaticBuild = options.isStaticBuild;
    var _a = getEnvironment_1.getEnvironment(), isDevelopment = _a.isDevelopment, isProduction = _a.isProduction, commitHash = _a.commitHash;
    var ssrBuild = !isStaticBuild;
    var _b = getUrlParts_1.getUrlParts({ ssrBuild: ssrBuild, isProduction: isProduction }), protocol = _b.protocol, host = _b.host, publicPath = _b.publicPath, port = _b.port, sockPort = _b.sockPort;
    options.publicUrl = publicPath.length > 1 && publicPath.substr(-1) === '/' ? publicPath.slice(0, -1) : publicPath;
    options.isNode = false;
    options.isWeb = true;
    var common = common_1.configureCommon(options, overrides);
    var polyfills = ['core-js/stable', 'regenerator-runtime/runtime', 'whatwg-fetch'];
    var iter = typeof entries === 'string' || Array.isArray(entries) ? { client: entries } : entries;
    var finalEntries = Object.keys(iter).reduce(function (acc, key) {
        var value = iter[key];
        var entryPoints = typeof value === 'string' ? [value] : value;
        acc[key] = __spreadArray(__spreadArray([], __read(polyfills)), __read(entryPoints));
        return acc;
    }, {});
    var template = publicDir ? path_1.default.join(publicDir, 'index.html') : 'public/index.html';
    var templateExists = fs_1.default.existsSync(template);
    var config = webpack_merge_1.merge(common, overrides, {
        name: 'client',
        target: 'web',
        entry: finalEntries,
        devServer: isDevelopment ? createDevServer_1.createDevServer({ protocol: protocol, host: host, sockPort: sockPort, proxy: proxy, port: port }) : {},
        output: {
            path: isStaticBuild ? paths_1.paths.appBuild : paths_1.paths.appBuildPublic,
            publicPath: publicPath,
            pathinfo: isDevelopment,
            filename: isProduction ? 'static/js/[name].[contenthash:8].js' : 'static/js/bundle.js',
            chunkFilename: isProduction ? 'static/js/[name].[contenthash:8].chunk.js' : 'static/js/[name].chunk.js',
            devtoolModuleFilenameTemplate: isProduction
                ? function (info) { return path_1.default.relative(paths_1.paths.appSrc, info.absoluteResourcePath).replace(/\\/g, '/'); }
                : function (info) { return path_1.default.resolve(info.absoluteResourcePath).replace(/\\/g, '/'); },
        },
        node: {
            fs: 'empty',
            path: 'empty',
            net: 'empty',
            tls: 'empty',
        },
        plugins: [
            // TODO: will not need this in webpack 5
            isProduction && new webpack_1.default.HashedModuleIdsPlugin(),
            isDevelopment &&
                new react_refresh_webpack_plugin_1.default({
                    overlay: {
                        sockIntegration: 'wds',
                        sockPort: sockPort,
                    },
                }),
            isDevelopment && isStaticBuild && new webpack_1.default.HotModuleReplacementPlugin(),
            ssrBuild &&
                new webpack_plugin_1.default({
                    writeToDisk: { filename: paths_1.paths.appBuild },
                }),
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            isStaticBuild && new InterpolateHtmlPlugin_1.default(html_webpack_plugin_1.default, { PUBLIC_URL: options.publicUrl }),
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
            new html_webpack_partials_plugin_1.default([
                {
                    path: path_1.default.join(__dirname, './partial.html'),
                    location: 'body',
                    priority: 'low',
                    options: {
                        hash: commitHash,
                    },
                },
            ]),
            // TODO: should not need this anymore?
            new webpack_1.default.IgnorePlugin(/^\.\/locale$/, /moment$/),
            new ModuleNotFoundPlugin_1.default(paths_1.paths.appPath),
            isDevelopment && new WatchMissingNodeModulesPlugin_1.default(paths_1.paths.appNodeModules),
            isProfilerEnabled() && new webpack_1.default.debug.ProfilingPlugin(),
        ].filter(Boolean),
    });
    if (isProduction) {
        config.optimization = createWebpackOptimisation_1.createWebpackOptimisation({ optimization: config.optimization, isDevelopment: isDevelopment, ssrBuild: ssrBuild });
    }
    return config;
};
exports.configure = configure;
//# sourceMappingURL=client.js.map