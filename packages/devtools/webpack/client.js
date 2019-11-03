/* eslint-disable @typescript-eslint/camelcase */
const merge = require('webpack-merge');
const webpack = require('webpack');
const path = require('path');
const { prepareUrls } = require('react-dev-utils/WebpackDevServerUtils');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const getLocalIdent = require('./getLocalIdent');
const { configureCommon, getEnvironment } = require('./common');
const errorOverlayMiddleware = require('react-dev-utils/errorOverlayMiddleware');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const postcssOptions = require('./postCssoptions');
const paths = require('../config/paths');
const AssetsPlugin = require('assets-webpack-plugin');
const fs = require('fs');
const TerserPlugin = require('terser-webpack-plugin');
const safePostCssParser = require('postcss-safe-parser');
const InlineChunkHtmlPlugin = require('react-dev-utils/InlineChunkHtmlPlugin');
const ModuleNotFoundPlugin = require('react-dev-utils/ModuleNotFoundPlugin');
const WatchMissingNodeModulesPlugin = require('react-dev-utils/WatchMissingNodeModulesPlugin');
const sassOptions = require('./sassOptions');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const evalSourceMapMiddleware = require('react-dev-utils/evalSourceMapMiddleware');
const ignoredFiles = require('react-dev-utils/ignoredFiles');

const { cssRegex, sassRegex, sassModuleRegex } = require('./constants');

function getUrlParts() {
  const port = parseInt(process.env.PORT, 10);
  const protocol = process.env.HTTPS === 'true' ? 'https' : 'http';
  const host = process.env.HOST || 'localhost';
  const urls = prepareUrls(protocol, host, port);

  return {
    port,
    protocol,
    host,
    urls,
  };
}

const configure = (options) => {
  const { entries, publicDir, proxy, devServer, isStaticBuild } = options;
  const { protocol, host, port } = getUrlParts();

  options.isNode = false;
  options.isWeb = true;

  const ssrBuild = !isStaticBuild;

  const { isDevelopment, isProduction } = getEnvironment();

  const common = configureCommon(options);

  const devServerPort =
    isProduction || isStaticBuild ? port : parseInt(port, 10) + 1;

  let finalEntries;

  const polyfills = ['core-js/stable', 'regenerator-runtime/runtime'];

  if (isStaticBuild) {
    const entryPoints = Array.isArray(entries) ? entries : [entries];

    finalEntries = isDevelopment
      ? [
          `webpack-dev-server/client?${protocol}://${host}:${port}`,
          'webpack/hot/dev-server',
          require.resolve('react-dev-utils/webpackHotDevClient'),
          ...polyfills,
          ...entryPoints,
        ]
      : ['babel-polyfill', ...entryPoints];
  }

  if (ssrBuild) {
    finalEntries = Object.keys(entries).reduce((acc, key) => {
      const entry = entries[key];

      acc[key] =
        isDevelopment && options.hotReloading
          ? [
              require.resolve('razzle-dev-utils/webpackHotDevClient'),
              ...polyfills,
              entry,
            ]
          : [...polyfills, entry];

      return acc;
    }, {});
  }

  const template = publicDir
    ? path.join(publicDir, 'index.html')
    : 'public/index.html';

  const templateExists = fs.existsSync(template);

  const config = merge(common, {
    name: 'client',
    target: 'web',
    entry: finalEntries,
    devServer: isDevelopment
      ? {
          disableHostCheck: true,
          clientLogLevel: 'info',
          contentBase: paths.appBuild,
          compress: true,
          liveReload: false,
          headers: {
            'Access-Control-Allow-Origin': '*',
          },
          historyApiFallback: {
            disableDotRule: true,
          },
          host,
          https: protocol === 'https',
          hotOnly: true,
          hot: true,
          noInfo: true,
          overlay: false,
          port: devServerPort,
          quiet: true,
          watchOptions: {
            ignored: ignoredFiles(paths.appSrc),
          },
          before(app, server) {
            app.use(evalSourceMapMiddleware(server));
            app.use(errorOverlayMiddleware());
          },
          proxy,
        }
      : {},
    output: {
      path: isStaticBuild ? paths.appBuild : paths.appBuildPublic,
      publicPath: isDevelopment
        ? `${protocol}://${host}:${devServerPort}/`
        : '/',
      pathinfo: isDevelopment,
      filename: isProduction
        ? 'static/js/[name].[contenthash:8].js'
        : isDevelopment && 'static/js/bundle.js',
      chunkFilename: isProduction
        ? 'static/js/[name].[contenthash:8].chunk.js'
        : isDevelopment && 'static/js/[name].chunk.js',
      devtoolModuleFilenameTemplate: (info) =>
        path.resolve(info.resourcePath).replace(/\\/g, '/'),
    },
    module: {
      rules: [
        {
          test: cssRegex,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                hmr: isDevelopment,
              },
            },
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
              },
            },
            { loader: 'postcss-loader', options: postcssOptions },
          ],
          sideEffects: true,
        },
        {
          test: sassRegex,
          exclude: sassModuleRegex,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                hmr: isDevelopment,
              },
            },
            {
              loader: 'css-loader',
              options: {
                importLoaders: 2,
                sourceMap: isDevelopment,
              },
            },
            { loader: 'postcss-loader', options: postcssOptions },
            { loader: 'sass-loader' },
          ],
          sideEffects: true,
        },
        {
          test: sassModuleRegex,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                hmr: isDevelopment,
              },
            },
            {
              loader: 'css-loader',
              options: {
                importLoaders: 2,
                sourceMap: isDevelopment,
                modules: {
                  getLocalIdent: getLocalIdent,
                },
              },
            },
            { loader: 'postcss-loader', options: postcssOptions },
            { loader: 'sass-loader', options: sassOptions },
          ],
          sideEffects: true,
        },
      ].filter(Boolean),
    },

    plugins: [
      isDevelopment && new webpack.HotModuleReplacementPlugin(),

      (devServer || (isStaticBuild && templateExists)) &&
        new HtmlWebpackPlugin({
          inject: true,
          template,
          minify: isProduction && {
            removeComments: true,
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
      isProduction &&
        new InlineChunkHtmlPlugin(HtmlWebpackPlugin, [/runtime~.+[.]js/]),
      new ModuleNotFoundPlugin(paths.appPath),
      isDevelopment && new WatchMissingNodeModulesPlugin(paths.appNodeModules),
      new MiniCssExtractPlugin({
        filename: isDevelopment
          ? 'static/css/[name].css'
          : 'static/css/[name].[contenthash].css',
        chunkFilename: isDevelopment
          ? 'static/css/[id].css'
          : 'static/css/[id].[hash].css',
      }),

      new AssetsPlugin({
        path: paths.appBuild,
        filename: 'assets.json',
      }),
      isProduction && new webpack.HashedModuleIdsPlugin(),
      isProduction && new webpack.optimize.AggressiveMergingPlugin(),
    ].filter(Boolean),
  });

  if (isProduction) {
    config.optimization = {
      ...config.optimization,
      ...{
        minimize: true,
        minimizer: [
          new TerserPlugin({
            terserOptions: {
              parse: {
                ecma: 8,
              },
              compress: {
                ecma: 5,
                warnings: false,
                comparisons: false,
                inline: 2,
                dead_code: true,
              },
              mangle: {
                safari10: true,
              },
              output: {
                ecma: 5,
                comments: false,
                ascii_only: true,
              },
            },
            parallel: true,
            cache: true,
            sourceMap: false,
          }),
          new OptimizeCSSAssetsPlugin({
            cssProcessorOptions: {
              parser: safePostCssParser,
              map: isDevelopment ? { inline: false, annotation: true } : false,
            },
          }),
        ],
        splitChunks: ssrBuild
          ? {
              cacheGroups: {
                vendor: {
                  test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
                  name: 'vendor',
                  chunks: 'all',
                },
              },
            }
          : {
              chunks: 'all',
              name: false,
            },
        runtimeChunk: isStaticBuild,
      },
    };
  }

  return config;
};

module.exports = { configure, getUrlParts };
