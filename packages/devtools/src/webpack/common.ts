import webpack from 'webpack';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import { paths } from '../config/paths';
import WebpackBar from 'webpackbar';
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
import { DevServerConfig, ServerBuildConfig, NodeBuildConfig } from '../types/config';
import { Configuration } from 'webpack';
import ModuleScopePlugin from 'react-dev-utils/ModuleScopePlugin';
import { merge } from 'webpack-merge';
import { VanillaExtractPlugin } from '@vanilla-extract/webpack-plugin';
import path from 'path';
import { createAssetsLoader } from './loaders/assetsLoader';
import ImageMinimizerPlugin from 'image-minimizer-webpack-plugin';

const reactRefreshRuntimeEntry = require.resolve('react-refresh/runtime');
const reactRefreshWebpackPluginRuntimeEntry = require.resolve('@pmmmwh/react-refresh-webpack-plugin');
const babelRuntimeEntryHelpers = require.resolve('@babel/runtime/helpers/esm/assertThisInitialized');
const babelRuntimeRegenerator = require.resolve('@babel/runtime/regenerator');
const reactRefreshOverlay = require.resolve('@pmmmwh/react-refresh-webpack-plugin/overlay');
const reactRefreshRuntimeUtils = require.resolve('@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js');
const miniCssHot = require.resolve('mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js');

export const configureCommon = (
  options: DevServerConfig | ServerBuildConfig | NodeBuildConfig,
  overrides: Partial<Configuration>,
): Configuration => {
  const isNode = !!options.isNode;
  const isWeb = !isNode;
  const { isProduction, isDevelopment, staticAssetName, isAnalyse } = getEnvironment();
  const env = getEnvVariables({ isNode: !!options.isNode });

  const config: Configuration = merge(overrides, {
    mode: isDevelopment ? 'development' : 'production',
    bail: isProduction,
    devtool: 'source-map',
    context: process.cwd(),
    performance: {
      hints: false,
    },
    resolve: {
      mainFields: isNode ? ['main', 'module', 'browser'] : ['module', 'browser', 'main'],
      modules: [path.join(process.cwd(), paths.resolvedNodeModules[0]), './node_modules', path.resolve('.')],
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
        new ModuleScopePlugin(paths.appSrc, [
          paths.appPackageJson,
          reactRefreshRuntimeEntry,
          reactRefreshWebpackPluginRuntimeEntry,
          babelRuntimeEntryHelpers,
          babelRuntimeRegenerator,
          reactRefreshOverlay,
          reactRefreshRuntimeUtils,
          miniCssHot,
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ]) as any,
      ],
    },
    module: {
      strictExportPresence: true,
      rules: Array.prototype.filter.call(
        [
          createFileLoader({ isWeb, staticAssetName }),
          createAssetsLoader(),
          ...createTypescriptLoader({ isDevelopment, isNode, moduleFormat: isNode ? 'cjs' : 'esm' }),
          ...createJsLoader({ isDevelopment, isProduction, isNode, moduleFormat: isNode ? 'cjs' : 'esm' }),
          createCSVLoader(),
          createSVGLoader(),
          createMDLoader(),
          ...createCSSLoaders({ isDevelopment, isProduction, isNode }),
        ],
        (x) => !!x,
      ),
    },
    plugins: Array.prototype.filter.call(
      [
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
        new webpack.DefinePlugin(env.stringified),
        isDevelopment && new WebpackBar({ basic: true }),
        isAnalyse &&
          new BundleAnalyzerPlugin({
            defaultSizes: 'gzip',
          }),
        new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /en/),
        new ForkTsCheckerWebpackPlugin({
          typescript: {
            enabled: true,
            configFile: isProduction ? paths.tsConfigProduction : paths.tsConfig,
            build: paths.projectReferences,
          },
        }),
        isDevelopment && new webpack.WatchIgnorePlugin({ paths: [paths.appManifest] }),
        new ImageMinimizerPlugin({
          minimizerOptions: {
            // Lossless optimization with custom option
            // Feel free to experiment with options for better result for you
            plugins: [
              ['gifsicle', { interlaced: true }],
              ['jpegtran', { progressive: true }],
              ['optipng', { optimizationLevel: 5 }],
              [
                'svgo',
                {
                  plugins: [
                    {
                      removeViewBox: false,
                    },
                  ],
                },
              ],
            ],
          },
        }),
        new VanillaExtractPlugin(),
        new VanillaExtractPlugin({
          test: /\.css\.ts$/,
        }),
        new MiniCssExtractPlugin({
          filename: isDevelopment ? 'static/css/[name].css' : 'static/css/[name].[chunkhash:8].css',
          chunkFilename: isDevelopment ? 'static/css/[id].css' : 'static/css/[id].[contenthash].css',
          ignoreOrder: true,
        }),
      ],
      Boolean,
    ),
  });

  return config;
};
