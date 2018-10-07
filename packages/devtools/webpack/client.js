const merge = require('webpack-merge');
const webpack = require('webpack');
const path = require('path');
const { CheckerPlugin } = require('awesome-typescript-loader');
const { prepareUrls } = require('react-dev-utils/WebpackDevServerUtils');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const getLocalIdent = require('./getLocalIdent');
const StatsWebpackPlugin = require('stats-webpack-plugin');
const _ = require('lodash');
const { configureCommon, getEnvironment } = require('./common');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const errorOverlayMiddleware = require('react-dev-utils/errorOverlayMiddleware');

const reStyle = /\.(css|scss)$/;
const reImage = /\.(bmp|gif|jpe?g|png|svg)$/;

function getUrlParts() {
  const port = parseInt(process.env.PORT, 10) || 3000;
  const protocol = process.env.HTTPS === 'true' ? 'https' : 'http';
  const host = process.env.HOST || '0.0.0.0';
  const urls = prepareUrls(protocol, host, port);

  return {
    port,
    protocol,
    host,
    urls
  };
}

const configure = options => {
  const { entries, publicDir, proxy, devServer } = options;
  const { protocol, host, port } = getUrlParts();

  options.isNode = false;

  const { isStaticBuild } = options;
  const ssrBuild = !isStaticBuild;

  const { isDevelopment, isProduction } = getEnvironment();

  const common = configureCommon(options);

  const entryPoints = Array.isArray(entries) ? entries : [entries];

  const config = merge(common, {
    name: 'client',
    target: 'web',
    entry: isDevelopment ? [...entryPoints] : ['babel-polyfill', ...entryPoints],
    devtool: isDevelopment && 'cheap-module-source-map',
    devServer: devServer
      ? {
          inline: true,
          port,
          headers: { 'Access-Control-Allow-Origin': '*' },
          disableHostCheck: true,
          contentBase: publicDir || path.resolve('public'),
          hot: true,
          publicPath: '/',
          watchOptions: { ignored: /node_modules/ },
          historyApiFallback: { disableDotRule: true },
          https: protocol === 'https',
          host,
          proxy,
          before(app) {
            // This lets us open files from the runtime error overlay.
            app.use(errorOverlayMiddleware());
          }
        }
      : {},
    output: {
      filename: `static/js/[name].[${isProduction ? 'chunkhash' : 'hash'}:8].js`,
      chunkFilename: `static/js/[name].[${isProduction ? 'chunkhash' : 'hash'}:8].chunk.js`,
      devtoolModuleFilenameTemplate: info => path.resolve(info.absoluteResourcePath),
      publicPath: '/'
    },
    optimization: devServer
      ? {}
      : {
          runtimeChunk: {
            name: 'bootstrap'
          },
          splitChunks: {
            chunks: 'initial', // <-- The key to this
            cacheGroups: {
              vendors: {
                test: /[\\/]node_modules[\\/]/,
                name: 'vendor'
              }
            }
          }
        },
    plugins: _.filter([
      isProduction && ssrBuild && new StatsWebpackPlugin('stats.json'),
      devServer &&
        new HtmlWebpackPlugin({
          inject: true,
          template: publicDir ? path.join(publicDir, 'index.html') : 'public/index.html',
          isProduction: isProduction && {
            removeComments: true,
            collapseWhitespace: true,
            removeRedundantAttributes: true,
            useShortDoctype: true,
            removeEmptyAttributes: true,
            removeStyleLinkTypeAttributes: true,
            keepClosingSlash: true,
            minifyJS: true,
            minifyCSS: true,
            minifyURLs: true
          }
        }),
      isDevelopment && new webpack.HotModuleReplacementPlugin()
    ]),
    node: {
      fs: 'empty',
      net: 'empty',
      tls: 'empty'
    }
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
          sourceMap: true
        })
      ]
    });
  }

  return config;
};

module.exports = { configure, getUrlParts };
