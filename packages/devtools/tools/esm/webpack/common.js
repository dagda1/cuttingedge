import webpack from 'webpack';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import { paths } from '../config/paths.js';
import ProgressBar from 'simple-progress-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import HappyPack from 'happypack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { getEnvironment, getEnvVariables } from './getEnvironment';
import { createFileLoader } from './loaders/fileLoader';
import { createJsLoader } from './loaders/jsLoader';
import { createTypescriptLoader } from './loaders/typescriptLoader';
import { createCSSLoaders } from './loaders/css';
import { createCSVLoader } from './loaders/csvLoader';
import { createSVGLoader } from './loaders/svgLoader';
import { createMDLoader } from './loaders/mdLoader';
import ModuleScopePlugin from 'react-dev-utils/ModuleScopePlugin';
import { merge } from 'webpack-merge';
import { VanillaExtractPlugin } from '@vanilla-extract/webpack-plugin';
import path from 'path';
import { createAssetsLoader } from './loaders/assetsLoader';
import { getFileName } from './getFileName';
import EslintWebpackLoader from 'eslint-webpack-plugin';
import { assert } from 'assert-ts';
const reactRefreshRuntimeEntry = await import.meta.resolve?.('react-refresh/runtime');
const reactRefreshWebpackPluginRuntimeEntry = await import.meta.resolve?.('@pmmmwh/react-refresh-webpack-plugin');
const babelRuntimeEntryHelpers = await import.meta.resolve?.('@babel/runtime/helpers/esm/assertThisInitialized');
const babelRuntimeRegenerator = await import.meta.resolve?.('@babel/runtime/regenerator');
const reactRefreshOverlay = await import.meta.resolve?.('@pmmmwh/react-refresh-webpack-plugin/overlay');
const reactRefreshRuntimeUtils = await import.meta.resolve?.('@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js');
const miniCssHot = await import.meta.resolve?.('mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js');
const moduleScopes = [
    reactRefreshRuntimeEntry,
    reactRefreshWebpackPluginRuntimeEntry,
    babelRuntimeEntryHelpers,
    babelRuntimeRegenerator,
    reactRefreshOverlay,
    reactRefreshRuntimeUtils,
    miniCssHot,
].flatMap((entry) => (!!entry ? [entry] : []));
console.dir(moduleScopes);
for (const moduleScope of moduleScopes) {
    assert(!!moduleScope, `moduleScope is not defined`);
}
const http = (await import.meta.resolve?.('stream-http'));
const https = (await import.meta.resolve?.('https-browserify'));
const stream = (await import.meta.resolve?.('stream-browserify'));
const hotPoll = (await import.meta.resolve?.('webpack/hot/poll'));
const nativeUrl = (await import.meta.resolve?.('native-url'));
export const configureCommon = (options, overrides) => {
    const isNode = !!options.isNode;
    const isWeb = !isNode;
    const { isProduction, isDevelopment, staticAssetName, isAnalyse } = getEnvironment();
    const env = getEnvVariables({ isNode: !!options.isNode });
    const cssFile = `${getFileName({
        isProduction,
        fileType: 'css',
    })}.css`;
    const cssChunkFile = `${getFileName({
        isProduction,
        fileType: 'css',
    })}.css`;
    const config = merge(overrides, {
        mode: isDevelopment ? 'development' : 'production',
        bail: isProduction,
        devtool: 'source-map',
        context: process.cwd(),
        performance: {
            hints: false,
        },
        resolve: {
            mainFields: isNode ? ['module', 'main', 'browser'] : ['module', 'browser', 'main'],
            modules: [path.join(process.cwd(), paths.monorepoNodeModules), './node_modules', path.resolve('.')],
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
                http,
                https,
                stream,
            },
            alias: {
                'webpack/hot/poll': hotPoll,
                'native-url': nativeUrl,
            },
            plugins: [
                // Prevents users from importing files from outside of src/ (or node_modules/).
                // This often causes confusion because we only process files within src/ with babel.
                // To fix this, we prevent you from importing files out of src/ -- if you'd like to,
                // please link the files into your node_modules/ and let module-resolution kick in.
                // Make sure your source files are compiled, as they will not be processed in any way.
                new ModuleScopePlugin([
                    paths.appSrc,
                    ...moduleScopes,
                    paths.pnpmPath,
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                ]),
            ],
            symlinks: true,
        },
        module: {
            rules: Array.prototype.filter.call([
                createFileLoader({ isWeb, staticAssetName }),
                createAssetsLoader(),
                ...createTypescriptLoader({ isDevelopment, isNode, moduleFormat: isNode ? 'cjs' : 'esm' }),
                ...createJsLoader({ isDevelopment, isProduction, isNode, moduleFormat: isNode ? 'cjs' : 'esm' }),
                ...createCSSLoaders({ isDevelopment, isProduction, isNode }),
                createCSVLoader(),
                createSVGLoader(),
                createMDLoader(),
            ], (x) => !!x),
            parser: {
                javascript: {
                    strictExportPresence: true,
                },
            },
        },
        plugins: Array.prototype.filter.call([
            new webpack.DefinePlugin(env.stringified),
            new HappyPack({
                id: 'ts',
                threads: 4,
                loaders: [
                    {
                        path: 'ts-loader',
                        query: { happyPackMode: true },
                    },
                ],
            }),
            isDevelopment && new ProgressBar({ color: true, format: 'expanded' }),
            isAnalyse &&
                new BundleAnalyzerPlugin({
                    defaultSizes: 'gzip',
                }),
            new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /en/),
            new ForkTsCheckerWebpackPlugin({
                typescript: {
                    configFile: paths.tsConfigProduction,
                    build: paths.projectReferences,
                },
            }),
            new EslintWebpackLoader({
                emitError: isProduction,
                emitWarning: true,
                failOnError: isProduction,
                failOnWarning: isProduction,
                fix: isProduction,
                quiet: false,
                extensions: ['ts', 'tsx'],
                context: paths.appSrc,
            }),
            isDevelopment && new webpack.WatchIgnorePlugin({ paths: [paths.appManifest] }),
            new VanillaExtractPlugin({
                test: /\.css\.ts$/,
                outputCss: isNode === false,
            }),
            new MiniCssExtractPlugin({
                filename: cssFile,
                chunkFilename: cssChunkFile,
                ignoreOrder: true,
            }),
        ], Boolean),
    });
    return config;
};
//# sourceMappingURL=common.js.map