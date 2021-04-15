import webpack from 'webpack';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import { paths } from '../config/paths';
import WebpackBar from 'webpackbar';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import HappyPack from 'happypack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { getEnvironment, getEnvVariables } from './getEnvironment';
import { createFileLoader } from './loaders/fileLoader';
import { createUrlLoader } from './loaders/urlLoader';
import { createJsLoader } from './loaders/jsLoader';
import { createTypescriptLoader } from './loaders/typescriptLoader';
import { createCSSLoaders } from './loaders/css';
import { createCSVLoader } from './loaders/csvLoader';
import { createSVGLoader } from './loaders/svgLoader';
import { createMDLoader } from './loaders/mdLoader';
import { DevServerConfig, ServerBuildConfig, NodeBuildConfig } from '../types/config';
import { Configuration } from 'webpack';
import ModuleScopePlugin from 'react-dev-utils/ModuleScopePlugin';
import { stats } from './loaders/stats';
import { merge } from 'webpack-merge';

import path from 'path';

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
    stats,
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
      alias: {
        'webpack/hot/poll': require.resolve('webpack/hot/poll'),
        'native-url': require.resolve('native-url'),
      },
      plugins: [new ModuleScopePlugin(paths.appSrc, [paths.appPackageJson])],
    },
    module: {
      strictExportPresence: true,
      rules: Array.prototype.filter.call(
        [
          createFileLoader({ staticAssetName, isWeb }),
          createUrlLoader({ staticAssetName, isWeb }),
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
        isDevelopment && new webpack.WatchIgnorePlugin([paths.appManifest]),
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
