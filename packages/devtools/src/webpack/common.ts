import path from 'path';
import webpack from 'webpack';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import { paths } from '../config/paths';
import WebpackBar from 'webpackbar';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import resolve from 'resolve';
import HappyPack from 'happypack';
import typescriptFormatter from 'react-dev-utils/typescriptFormatter';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { getEnvironment, getEnvVariables } from './getEnvironment';
import { findAppNodeModules } from '../util/findNodeModules';
import { createFileLoader } from './loaders/fileLoader';
import { createUrlLoader } from './loaders/urlLoader';
import { createJsLoader } from './loaders/jsLoader';
import { createTypescriptLoader } from './loaders/typescriptLoader';
import { createCSSLoaders } from './loaders/css';
import { createCSVLoader } from './loaders/csvLoader';
import { createSVGLoader } from './loaders/svgLoader';
import { createMDLoader } from './loaders/mdLoader';
import { DevServerConfig, ServerBuildConfig } from 'src/types/config';

const repoNodeModules = findAppNodeModules(__dirname);

export const configureCommon = (options: DevServerConfig | ServerBuildConfig) => {
  const isNode = !!options.isNode;
  const isWeb = !isNode;
  const { isProduction, isDevelopment, staticAssetName, isAnalyse } = getEnvironment();
  const env = getEnvVariables({ isNode: !!options.isNode });

  const config = {
    mode: isDevelopment ? 'development' : 'production',
    bail: isProduction,
    devtool: isDevelopment ? 'cheap-module-source-map' : undefined,
    context: process.cwd(),
    resolve: {
      modules: ['node_modules', repoNodeModules].concat(env.raw.nodePath || path.resolve('.')),
      alias: {
        'webpack/hot/poll': require.resolve('webpack/hot/poll'),
        'native-url': require.resolve('native-url'),
      },
    },
    resolveLoader: {
      modules: [paths.appNodeModules, paths.ownNodeModules, repoNodeModules].filter(Boolean),
    },
    module: {
      strictExportPresence: true,
      rules: Array.prototype.filter.call(
        [
          createFileLoader({ staticAssetName, isWeb }),
          createUrlLoader({ staticAssetName, isWeb }),
          createJsLoader(),
          createTypescriptLoader({ isDevelopment, isProduction, isWeb }),
          createCSVLoader(),
          createSVGLoader(),
          createMDLoader(),
          ...createCSSLoaders({ isDevelopment, isNode }),
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
        isDevelopment &&
          new WebpackBar({
            color: isWeb ? '#f56be2' : '#c065f4',
            name: isWeb ? 'client' : 'server',
          }),
        isAnalyse && new BundleAnalyzerPlugin(),
        new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /en/),
        new ForkTsCheckerWebpackPlugin({
          typescript: resolve.sync('typescript', {
            basedir: repoNodeModules,
          }),
          async: true,
          useTypescriptIncrementalApi: true,
          checkSyntacticErrors: true,
          tsconfig: paths.tsConfig,
          reportFiles: [
            'src/**/*.{ts,tsx}',
            '!**/__tests__/**',
            '!**/?(*.)(spec|test).*',
            '!**/src/setupProxy.*',
            '!**/src/setupTests.*',
          ],
          silent: true,
          formatter: isProduction ? typescriptFormatter : undefined,
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
  };

  return config;
};
