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

const configure = (options) => {
  const { entries, publicDir, proxy, devServer, isStaticBuild } = options;
  const { protocol, host, port } = getUrlParts();

  options.isNode = false;
  options.isWeb = true;

  const ssrBuild = !isStaticBuild;

  const { isDevelopment, isProduction } = getEnvironment();

  const common = configureCommon(options);

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
    devServer: isDevelopment
      ? {
          disableHostCheck: true,
          clientLogLevel: 'none',
          contentBase: paths.appBuild,
          compress: true,
          watchContentBase: true,
          watchOptions: {
            ignored: ignoredFiles(paths.appSrc)
          },
          publicPath: '/',
          headers: {
            'Access-Control-Allow-Origin': '*'
          },
          historyApiFallback: {
            // Paths with dots should still use the history fallback.
            // See https://github.com/facebookincubator/create-react-app/issues/387.
            disableDotRule: true
          },
          host,
          https: protocol === 'https',
          hot: true,
          noInfo: true,
          overlay: false,
          port: devServerPort,
          quiet: true,
          // By default files from `contentBase` will not trigger a page reload.
          // Reportedly, this avoids CPU overload on some systems.
          // https://github.com/facebookincubator/create-react-app/issues/293
          watchOptions: {
            ignored: /node_modules/
          },
          before(app, server) {
            app.use(evalSourceMapMiddleware(server));
            // This lets us open files from the runtime error overlay.
            app.use(errorOverlayMiddleware());
          },
          proxy
        }
      : {},
    output: {
      path: isStaticBuild ? paths.appBuild : paths.appBuildPublic,
      publicPath: isDevelopment ? `${protocol}://${host}:${devServerPort}/` : '/',
      pathinfo: isDevelopment,
      filename: isProduction ? 'static/js/[name].[contenthash:8].js' : isDevelopment && 'static/js/bundle.js',
      chunkFilename: isProduction
        ? 'static/js/[name].[contenthash:8].chunk.js'
        : isDevelopment && 'static/js/[name].chunk.js',
      devtoolModuleFilenameTemplate: (info) => path.resolve(info.resourcePath).replace(/\\/g, '/')
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                hmr: isDevelopment
              }
            },
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
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                hmr: isDevelopment
              }
            },
            {
              loader: 'css-loader',
              options: {
                importLoaders: 2,
                modules: {
                  getLocalIdent: getLocalIdent
                }
              }
            },
            { loader: 'postcss-loader', options: postcssOptions },
            { loader: 'sass-loader', options: sassOptions }
          ]
        }
      ].filter(Boolean)
    },

    plugins: [
      isDevelopment && new webpack.HotModuleReplacementPlugin({ multistep: true }),

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
            minifyURLs: true
          }
        }),
      isProduction && new InlineChunkHtmlPlugin(HtmlWebpackPlugin, [/runtime~.+[.]js/]),
      new ModuleNotFoundPlugin(paths.appPath),
      isDevelopment && new WatchMissingNodeModulesPlugin(paths.appNodeModules),
      new MiniCssExtractPlugin({
        filename: isDevelopment ? 'static/css/[name].css' : 'static/css/[name].[contenthash].css',
        chunkFilename: isDevelopment ? 'static/css/[id].css' : 'static/css/[id].[hash].css'
      }),

      new AssetsPlugin({
        path: paths.appBuild,
        filename: 'assets.json'
      }),
      isProduction && new webpack.HashedModuleIdsPlugin(),
      isProduction && new webpack.optimize.AggressiveMergingPlugin()
    ].filter(Boolean)
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
                ecma: 8
              },
              compress: {
                ecma: 5,
                warnings: false,
                comparisons: false,
                inline: 2,
                dead_code: true
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
          new OptimizeCSSAssetsPlugin({
            cssProcessorOptions: {
              parser: safePostCssParser,
              map: isDevelopment ? { inline: false, annotation: true } : false
            }
          })
        ],
        splitChunks: ssrBuild
          ? {
              cacheGroups: {
                vendor: {
                  test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
                  name: 'vendor',
                  chunks: 'all'
                }
              }
            }
          : {
              chunks: 'all',
              name: false
            },
        runtimeChunk: isStaticBuild
      }
    };
  }

  return config;
};

module.exports = { configure, getUrlParts };
