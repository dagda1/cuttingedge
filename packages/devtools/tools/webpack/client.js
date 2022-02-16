"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.configure = void 0;
const webpack_1 = __importDefault(require("webpack"));
const path_1 = __importDefault(require("path"));
const webpack_merge_1 = require("webpack-merge");
const html_webpack_plugin_1 = __importDefault(require("html-webpack-plugin"));
const common_1 = require("./common");
const paths_1 = require("../config/paths");
const fs_1 = __importDefault(require("fs"));
const InterpolateHtmlPlugin_1 = __importDefault(require("react-dev-utils/InterpolateHtmlPlugin"));
const react_refresh_webpack_plugin_1 = __importDefault(require("@pmmmwh/react-refresh-webpack-plugin"));
const getUrlParts_1 = require("./getUrlParts");
const getEnvironment_1 = require("./getEnvironment");
const createDevServer_1 = require("./loaders/createDevServer");
const createWebpackOptimisation_1 = require("./optimisation/createWebpackOptimisation");
const webpack_plugin_1 = __importDefault(require("@loadable/webpack-plugin"));
const html_webpack_partials_plugin_1 = __importDefault(require("html-webpack-partials-plugin"));
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const ModuleNotFoundPlugin_1 = __importDefault(require("react-dev-utils/ModuleNotFoundPlugin"));
const getFileName_1 = require("./getFileName");
const isProfilerEnabled = () => process.argv.includes('--profile');
const configure = (options, overrides = {}) => {
    const { entries, publicDir, proxy, devServer, isStaticBuild } = options;
    const { isDevelopment, isProduction, commitHash } = (0, getEnvironment_1.getEnvironment)();
    const ssrBuild = !isStaticBuild;
    const { protocol, publicPath, port, sockPort } = (0, getUrlParts_1.getUrlParts)({ ssrBuild, isProduction });
    options.publicUrl = publicPath.length > 1 && publicPath.substr(-1) === '/' ? publicPath.slice(0, -1) : publicPath;
    options.isNode = false;
    options.isWeb = true;
    const common = (0, common_1.configureCommon)(options, overrides);
    const iter = typeof entries === 'string' || Array.isArray(entries) ? { client: entries } : entries;
    const finalEntries = Object.keys(iter).reduce((acc, key) => {
        const value = iter[key];
        const entryPoints = typeof value === 'string' ? [value] : value;
        acc[key] = [...entryPoints];
        return acc;
    }, {});
    const template = publicDir ? path_1.default.join(publicDir, 'index.html') : 'public/index.html';
    const templateExists = fs_1.default.existsSync(template);
    const jsFile = `${(0, getFileName_1.getFileName)({ isProduction, fileType: 'js' })}.js`;
    const jsChunkFile = `${(0, getFileName_1.getFileName)({ isProduction, fileType: 'js' })}.js`;
    const config = (0, webpack_merge_1.merge)(common, overrides, {
        name: 'client',
        target: 'web',
        entry: finalEntries,
        devServer: isDevelopment ? (0, createDevServer_1.createDevServer)({ protocol, sockPort, proxy, port }) : {},
        output: {
            path: isStaticBuild ? paths_1.paths.appBuild : paths_1.paths.appBuildPublic,
            publicPath,
            pathinfo: isDevelopment,
            filename: jsFile,
            hotUpdateChunkFilename: 'static/js/[id].[hash].hot-update.js',
            hotUpdateMainFilename: 'static/js/[hash].hot-update.json',
            chunkFilename: jsChunkFile,
            library: {
                name: 'LIB',
                type: 'var',
            },
            devtoolModuleFilenameTemplate: isProduction
                ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    (info) => path_1.default.relative(paths_1.paths.appSrc, info.absoluteResourcePath).replace(/\\/g, '/')
                : // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    (info) => path_1.default.resolve(info.absoluteResourcePath).replace(/\\/g, '/'),
        },
        plugins: [
            isDevelopment &&
                new react_refresh_webpack_plugin_1.default({
                    overlay: {
                        sockIntegration: 'wds',
                        sockPort,
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
                    template,
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
            new webpack_1.default.IgnorePlugin({
                resourceRegExp: /^\.\/locale$/,
                contextRegExp: /moment$/,
            }),
            new ModuleNotFoundPlugin_1.default(paths_1.paths.appPath),
            isProfilerEnabled() && new webpack_1.default.debug.ProfilingPlugin(),
        ].filter(Boolean),
        stats: {
            colors: true,
            preset: 'errors_only',
            timings: isDevelopment,
            errors: true,
        },
        infrastructureLogging: {
            level: 'verbose',
        },
    });
    config.optimization = (0, createWebpackOptimisation_1.createWebpackOptimisation)({ optimization: config.optimization, isProduction });
    return config;
};
exports.configure = configure;
//# sourceMappingURL=client.js.map