/* eslint-disable @typescript-eslint/explicit-function-return-type */
const path = require('path');
const webpack = require('webpack');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const paths = require('../config/paths');
const WebpackBar = require('webpackbar');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const resolve = require('resolve');
const fs = require('fs-extra');
const HappyPack = require('happypack');
const typescriptFormatter = require('react-dev-utils/typescriptFormatter');
const { loadableTransformer } = require('loadable-ts-transformer');
const { cssLoaders } = require('./loaders/css');
const { cssRegex, sassRegex, sassModuleRegex } = require('./constants');
const getLocalIdent = require('./getLocalIdent');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const getEnvironment = () => {
  const isDevelopment = process.env.NODE_ENV !== 'production';
  const isProduction = process.env.NODE_ENV === 'production';
  const staticAssetName = isDevelopment ? '[path][name].[ext]?[hash:8]' : 'static/media/[hash:8].[ext]';
  const isAnalyse = process.argv.includes('--analyze') || process.argv.includes('--analyse');
  const isVerbose = process.argv.includes('--verbose');

  return {
    isDevelopment,
    staticAssetName,
    isAnalyse,
    isVerbose,
    isProduction,
  };
};

const getEnvVariables = (options) => {
  const { isDevelopment } = getEnvironment();
  delete require.cache[require.resolve('../config/env')];

  const { getClientEnv } = require('../config/env');

  return getClientEnv(
    options.isNode ? 'node' : 'web',
    {},
    {
      'process.env.NODE_ENV': isDevelopment ? JSON.stringify('development') : JSON.stringify('production'),
      __DEV__: isDevelopment,
      __BROWSER__: !options.isNode,
    },
  );
};

const MaxTries = 15;
const ModulesDirName = 'node_modules';

function findAppNodeModules(current, packageName = 'typescript', tries = 0) {
  const modulesDir = path.resolve(current, ModulesDirName, packageName);

  if (tries === MaxTries) {
    throw new Error(`cannot find ${packageName} in ${modulesDir}`);
  }

  if (fs.existsSync(modulesDir)) {
    return path.join(current, ModulesDirName);
  }

  return findAppNodeModules(path.resolve(current, '..'), packageName, ++tries);
}

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
    output: {
      path: paths.appBuild,
      publicPath: '/',
    },
    resolve: {
      symlinks: false,
      modules: ['node_modules', repoNodeModules].concat(env.raw.nodePath || path.resolve('.')),
      extensions: ['.web.mjs', '.mjs', '.web.js', '.js', '.web.ts', '.ts', '.web.tsx', '.tsx', '.json', '.web.jsx', '.jsx', '.csv'],
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
          {
            exclude: [
              /\.html$/,
              /\.jsx?$/,
              /\.jsx?$/,
              /\.tsx?$/,
              /\.css$/,
              /\.json$/,
              /\.bmp$/,
              /\.gif$/,
              /\.jpe?g$/,
              /\.png$/,
              /\.scss$/,
              /\.woff2?$/,
              /\.eot$/,
              /\.ttf$/,
              /\.svg$/,
              /\.csv$/,
              /\.md$/,
            ],
            loader: 'file-loader',
            options: { name: staticAssetName, emitFile: isWeb },
          },
          {
            test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/, /\.woff$/, /\.woff2$/, /\.eot$/, /\.eot$/, /\.ttf$/],
            loader: 'url-loader',
            options: { name: staticAssetName, limit: 10000, emitFile: isWeb },
          },
          {
            test: /\.(js|jsx|mjs)$/,
            exclude: /\/node_modules\/core-js\//,
            use: [
              {
                loader: 'babel-loader',
                options: {
                  presets: ['@babel/preset-env'],
                  cacheDirectory: true,
                },
              },
            ],
          },
          {
            test: /\.tsx$/,
            enforce: 'pre',
            use: [
              {
                loader: 'eslint-loader',
                options: {
                  fix: isProduction,
                  emitWarning: isDevelopment,
                  failOnWarning: isProduction,
                  configFile: paths.esLintConfig,
                },
              },
            ],
          },
          {
            test: /\.tsx?$/,
            exclude: /node_modules/,
            loader: 'ts-loader',
            options: {
              configFile: paths.tsConfig,
              transpileOnly: isDevelopment,
              experimentalWatchApi: isDevelopment,
              compilerOptions: {
                sourceMap: isDevelopment,
              },
              getCustomTransformers: () => ({ before: [loadableTransformer] }),
            },
          },
          {
            test: /\.csv$/,
            loader: 'csv-loader',
            options: {
              header: true,
              skipEmptyLines: true,
            },
          },
          {
            test: /\.svg/,
            use: {
              loader: 'svg-url-loader',
              options: {},
            },
          },
          {
            test: /\.md$/,
            use: [
              {
                loader: 'html-loader',
              },
              {
                loader: 'markdown-loader',
                options: {},
              },
            ],
          },
          {
            test: cssRegex,
            use: cssLoaders(isDevelopment, isNode).filter(Boolean),
          },
          {
            test: sassRegex,
            exclude: sassModuleRegex,
            use: [...cssLoaders(isDevelopment, isNode), { loader: 'sass-loader' }].filter(Boolean),
          },
          {
            test: sassModuleRegex,
            use: [...cssLoaders(isDevelopment, isNode, getLocalIdent), { loader: 'sass-loader' }].filter(Boolean),
          },
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
