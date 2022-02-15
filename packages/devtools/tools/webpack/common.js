"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.configureCommon = void 0;
const webpack_1 = __importDefault(require("webpack"));
const fork_ts_checker_webpack_plugin_1 = __importDefault(require("fork-ts-checker-webpack-plugin"));
const paths_1 = require("../config/paths");
const simple_progress_webpack_plugin_1 = __importDefault(require("simple-progress-webpack-plugin"));
const webpack_bundle_analyzer_1 = require("webpack-bundle-analyzer");
const happypack_1 = __importDefault(require("happypack"));
const mini_css_extract_plugin_1 = __importDefault(require("mini-css-extract-plugin"));
const getEnvironment_1 = require("./getEnvironment");
const fileLoader_1 = require("./loaders/fileLoader");
const jsLoader_1 = require("./loaders/jsLoader");
const typescriptLoader_1 = require("./loaders/typescriptLoader");
const css_1 = require("./loaders/css");
const csvLoader_1 = require("./loaders/csvLoader");
const svgLoader_1 = require("./loaders/svgLoader");
const mdLoader_1 = require("./loaders/mdLoader");
const ModuleScopePlugin_1 = __importDefault(require("react-dev-utils/ModuleScopePlugin"));
const webpack_merge_1 = require("webpack-merge");
const webpack_plugin_1 = require("@vanilla-extract/webpack-plugin");
const path_1 = __importDefault(require("path"));
const assetsLoader_1 = require("./loaders/assetsLoader");
const getFileName_1 = require("./getFileName");
const eslint_webpack_plugin_1 = __importDefault(require("eslint-webpack-plugin"));
const reactRefreshRuntimeEntry = require.resolve('react-refresh/runtime');
const reactRefreshWebpackPluginRuntimeEntry = require.resolve('@pmmmwh/react-refresh-webpack-plugin');
const babelRuntimeEntryHelpers = require.resolve('@babel/runtime/helpers/esm/assertThisInitialized');
const babelRuntimeRegenerator = require.resolve('@babel/runtime/regenerator');
const reactRefreshOverlay = require.resolve('@pmmmwh/react-refresh-webpack-plugin/overlay');
const reactRefreshRuntimeUtils = require.resolve('@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js');
const miniCssHot = require.resolve('mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js');
const configureCommon = (options, overrides) => {
    const isNode = !!options.isNode;
    const isWeb = !isNode;
    const { isProduction, isDevelopment, staticAssetName, isAnalyse } = (0, getEnvironment_1.getEnvironment)();
    const env = (0, getEnvironment_1.getEnvVariables)({ isNode: !!options.isNode });
    const cssFile = `${(0, getFileName_1.getFileName)({
        isProduction,
        fileType: 'css',
    })}.css`;
    const cssChunkFile = `${(0, getFileName_1.getFileName)({
        isProduction,
        fileType: 'css',
    })}.css`;
    const config = (0, webpack_merge_1.merge)(overrides, {
        mode: isDevelopment ? 'development' : 'production',
        bail: isProduction,
        devtool: 'source-map',
        context: process.cwd(),
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
            fallback: {
                http: require.resolve('stream-http'),
                https: require.resolve('https-browserify'),
                stream: require.resolve('stream-browserify'),
            },
            alias: {
                'webpack/hot/poll': require.resolve('webpack/hot/poll'),
                'native-url': require.resolve('native-url'),
            },
            plugins: [
                // Prevents users from importing files from outside of src/ (or node_modules/).
                // This often causes confusion because we only process files within src/ with babel.
                // To fix this, we prevent you from importing files out of src/ -- if you'd like to,
                // please link the files into your node_modules/ and let module-resolution kick in.
                // Make sure your source files are compiled, as they will not be processed in any way.
                new ModuleScopePlugin_1.default(paths_1.paths.appSrc, [
                    paths_1.paths.appPackageJson,
                    reactRefreshRuntimeEntry,
                    reactRefreshWebpackPluginRuntimeEntry,
                    babelRuntimeEntryHelpers,
                    babelRuntimeRegenerator,
                    reactRefreshOverlay,
                    reactRefreshRuntimeUtils,
                    miniCssHot,
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                ]),
            ],
        },
        module: {
            strictExportPresence: true,
            rules: Array.prototype.filter.call([
                (0, fileLoader_1.createFileLoader)({ isWeb, staticAssetName }),
                (0, assetsLoader_1.createAssetsLoader)(),
                ...(0, typescriptLoader_1.createTypescriptLoader)({ isDevelopment, isNode, moduleFormat: isNode ? 'cjs' : 'esm' }),
                ...(0, jsLoader_1.createJsLoader)({ isDevelopment, isProduction, isNode, moduleFormat: isNode ? 'cjs' : 'esm' }),
                (0, csvLoader_1.createCSVLoader)(),
                (0, svgLoader_1.createSVGLoader)(),
                (0, mdLoader_1.createMDLoader)(),
                ...(0, css_1.createCSSLoaders)({ isDevelopment, isProduction, isNode }),
            ], (x) => !!x),
        },
        plugins: Array.prototype.filter.call([
            new webpack_1.default.DefinePlugin(env.stringified),
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
            isDevelopment && new simple_progress_webpack_plugin_1.default({ color: true, format: 'expanded' }),
            isAnalyse &&
                new webpack_bundle_analyzer_1.BundleAnalyzerPlugin({
                    defaultSizes: 'gzip',
                }),
            new webpack_1.default.ContextReplacementPlugin(/moment[\/\\]locale$/, /en/),
            new fork_ts_checker_webpack_plugin_1.default({
                typescript: {
                    configFile: isProduction ? paths_1.paths.tsConfigProduction : paths_1.paths.tsConfig,
                    build: paths_1.paths.projectReferences,
                },
            }),
            new eslint_webpack_plugin_1.default({
                emitError: isProduction,
                emitWarning: true,
                failOnError: isProduction,
                failOnWarning: isProduction,
                fix: isProduction,
                quiet: false,
                extensions: ['ts', 'tsx'],
                context: paths_1.paths.appSrc,
            }),
            isDevelopment && new webpack_1.default.WatchIgnorePlugin({ paths: [paths_1.paths.appManifest] }),
            new mini_css_extract_plugin_1.default({
                filename: cssFile,
                chunkFilename: cssChunkFile,
                ignoreOrder: true,
            }),
            new webpack_plugin_1.VanillaExtractPlugin({
                test: /\.css\.(js|jsx|ts|tsx)$/,
                outputCss: true,
            }),
        ], Boolean),
    });
    return config;
};
exports.configureCommon = configureCommon;
//# sourceMappingURL=common.js.map