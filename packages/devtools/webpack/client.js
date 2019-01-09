const merge = require('webpack-merge');
const webpack = require('webpack');
const path = require('path');
const { prepareUrls } = require('react-dev-utils/WebpackDevServerUtils');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const getLocalIdent = require('./getLocalIdent');
const _ = require('lodash');
const { configureCommon, getEnvironment, getEnvVariables } = require('./common');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const errorOverlayMiddleware = require('react-dev-utils/errorOverlayMiddleware');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');
const postcssOptions = require('./postCssoptions');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { filter } = require('lodash');
const paths = require('../config/paths');
const AssetsPlugin = require('assets-webpack-plugin');
const fs = require('fs');

function getUrlParts() {
  const port = parseInt(process.env.PORT, 10);
  const protocol = process.env.HTTPS === 'true' ? 'https' : 'http';
  const host = process.env.HOST || 'localhost';
  const urls = prepareUrls(protocol, host, port);

  return {
    port,
    protocol,
    host,
    urls
  };
}

const configure = options => {
  const { entries, publicDir, proxy, devServer, isStaticBuild } = options;
  const { protocol, host, port } = getUrlParts();

  options.isNode = false;
  options.isWeb = true;

  const ssrBuild = !isStaticBuild;

  const { isDevelopment, isProduction } = getEnvironment();

  const sassOptions = {
    outputStyle: 'expanded',
    sourceMap: isDevelopment,
    data: '@import "./styles/_overrides.scss";',
    includePaths: [paths.appSrc],
    minimize: isProduction
  };

  const common = configureCommon(options);

  const env = getEnvVariables(options);

  const devServerPort = isProduction || isStaticBuild ? port : parseInt(port, 10) + 1;

  let finalEntries;

  if (isStaticBuild) {
    const entryPoints = Array.isArray(entries) ? entries : [entries];

    finalEntries = isDevelopment
      ? [require.resolve('react-dev-utils/webpackHotDevClient'), 'babel-polyfill', ...entryPoints]
      : ['babel-polyfill', ...entryPoints];
  }

  if (ssrBuild) {
    finalEntries = Object.keys(entries).reduce((acc, key) => {
      const entry = entries[key];

      acc[key] =
        isDevelopment && options.hotReloading
          ? [require.resolve('razzle-dev-utils/webpackHotDevClient'), 'babel-polyfill', entry]
          : ['babel-polyfill', entry];

      return acc;
    }, {});
  }

  const template = publicDir ? path.join(publicDir, 'index.html') : 'public/index.html';

  const templateExists = fs.existsSync(template);

  const config = merge(common, {
    name: 'client',
    target: 'web',
    entry: finalEntries,
    devtool: isDevelopment ? 'cheap-module-source-map' : undefined,
    devServer: isDevelopment
      ? {
          before(app) {
            // This lets us open files from the runtime error overlay.
            app.use(errorOverlayMiddleware());
          },
          contentBase: paths.appBuild,
          inline: true,
          clientLogLevel: 'none',
          compress: true,
          disableHostCheck: true,
          headers: { 'Access-Control-Allow-Origin': '*' },
          historyApiFallback: { disableDotRule: true },
          host,
          hot: false,
          hotOnly: true,
          https: protocol === 'https',
          noInfo: true,
          port: devServerPort,
          quiet: true,
          overlay: false,
          watchOptions: { ignored: /node_modules/ },
          proxy
        }
      : {},
    output: {
      path: isStaticBuild ? paths.appBuild : paths.appBuildPublic,
      publicPath: isDevelopment ? `${protocol}://${host}:${devServerPort}/` : '/',
      pathinfo: true,
      libraryTarget: 'var',
      filename: isDevelopment ? 'static/js/[name].js' : 'static/js/[name].[chunkhash:8].js',
      chunkFilename: isDevelopment ? 'static/js/[name].chunk.js' : 'static/js/[name].[chunkhash:8].chunk.js',
      devtoolModuleFilenameTemplate: info => path.resolve(info.resourcePath).replace(/\\/g, '/'),
      hotUpdateChunkFilename: 'hot/hot-update.js',
      hotUpdateMainFilename: 'hot/hot-update.json'
    },
    module: {
      rules: filter([
        {
          test: /\.css$/,
          use: devServer
            ? [
                { loader: 'style-loader' },
                {
                  loader: 'css-loader'
                },
                { loader: 'postcss-loader', options: postcssOptions }
              ]
            : [
                isStaticBuild ? MiniCssExtractPlugin.loader : ExtractCssChunks.loader,
                {
                  loader: 'css-loader',
                  options: {
                    importLoaders: 1
                  }
                },
                { loader: 'postcss-loader', options: postcssOptions }
              ]
        },
        {
          test: /\.scss$/,
          use: devServer
            ? [
                { loader: 'style-loader' },
                {
                  loader: 'css-loader',
                  options: {
                    importLoaders: 2,
                    modules: true,
                    getLocalIdent: getLocalIdent
                  }
                },
                { loader: 'postcss-loader', options: postcssOptions },
                { loader: 'sass-loader', options: sassOptions }
              ]
            : [
                isStaticBuild ? MiniCssExtractPlugin.loader : ExtractCssChunks.loader,
                {
                  loader: 'css-loader',
                  options: {
                    importLoaders: 2,
                    modules: true,
                    getLocalIdent: getLocalIdent,
                    minimize: isProduction
                  }
                },
                { loader: 'postcss-loader', options: postcssOptions },
                { loader: 'sass-loader', options: sassOptions }
              ]
        }
      ])
    },

    plugins: _.filter([
      isProduction && new webpack.optimize.ModuleConcatenationPlugin(),
      isProduction && new webpack.optimize.OccurrenceOrderPlugin(),
      isDevelopment && new webpack.HotModuleReplacementPlugin(),
      isDevelopment && new webpack.NamedModulesPlugin(),

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
            minifyJS: isProduction,
            minifyCSS: isProduction,
            minifyURLs: isProduction
          }
        }),
      isStaticBuild &&
        new MiniCssExtractPlugin({
          filename: isDevelopment ? 'static/css/[name].css' : 'static/css/[name].[contenthash].css',
          chunkFilename: isDevelopment ? 'static/css/[id].css' : 'static/css/[id].[hash].css'
        }),
      ssrBuild &&
        new ExtractCssChunks({
          filename: isDevelopment ? 'static/css/[name].css' : 'static/css/[name].[contenthash].css',
          chunkFilename: isDevelopment ? 'static/css/[id].css' : 'static/css/[id].[hash].css',
          hot: isDevelopment
        }),

      new AssetsPlugin({
        path: paths.appBuild,
        filename: 'assets.json'
      }),
      isProduction && new webpack.HashedModuleIdsPlugin()
    ])
  });

  if (isProduction) {
    config.optimization = _.merge({}, config.optimization, {
      minimize: true,
      minimizer: [
        new UglifyJsPlugin({
          uglifyOptions: {
            parse: {
              ecma: 8
            },
            compress: {
              ecma: 5,
              warnings: false,
              comparisons: false
            },
            mangle: {
              safari10: true
            },
            output: {
              ecma: 5,
              comments: false,
              ascii_only: true
            }
          },
          parallel: true,
          cache: true,
          sourceMap: false
        }),
        new OptimizeCSSAssetsPlugin({})
      ]
    });
  }

  return config;
};

module.exports = { configure, getUrlParts };
