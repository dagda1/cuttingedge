const path = require('path');
const webpack = require('webpack');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const paths = require('../config/paths');
const WebpackBar = require('webpackbar');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const resolve = require('resolve');
const HappyPack = require('happypack');
const typescriptFormatter = require('react-dev-utils/typescriptFormatter');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { getEnvironment, getEnvVariables } = require('./getEnvironment');
const { findAppNodeModules } = require('../util/findNodeModules');
const { createFileLoader } = require('./loaders/fileLoader');
const { createUrlLoader } = require('./loaders/urlLoader');
const { createJsLoader } = require('./loaders/jsLoader');
const { createTypescriptLoader } = require('./loaders/typescriptLoader');
const { createCSSLoaders } = require('./loaders/css');
const { createCSVLoader } = require('./loaders/csvLoader');
const { createSVGLoader } = require('./loaders/svgLoader');
const { createMDLoader } = require('./loaders/mdLoader');
const repoNodeModules = findAppNodeModules(__dirname);

const configureCommon = (options) => {
  const isNode = !!options.isNode;
  const isWeb = !isNode;
  const { isProduction, isDevelopment, staticAssetName, isAnalyse } = getEnvironment();
  const env = getEnvVariables(options);

  const config = {
    mode: isDevelopment ? 'development' : 'production',
    bail: isProduction,
    devtool: isDevelopment ? 'cheap-module-source-map' : undefined,
    context: process.cwd(),
    resolve: {
      modules: ['node_modules', repoNodeModules].concat(env.raw.nodePath || path.resolve('.')),
      extensions: ['.mjs', '.js', '.ts', '.tsx', '.json', '.jsx', '.csv'],
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
          createTypescriptLoader({ isDevelopment, isProduction }),
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
          reportFiles: ['src/**/*.{ts,tsx}', '!**/__tests__/**', '!**/?(*.)(spec|test).*', '!**/src/setupProxy.*', '!**/src/setupTests.*'],
          watch: paths.appSrc,
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
module.exports = { configureCommon, getEnvironment, getEnvVariables };
