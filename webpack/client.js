const merge = require('webpack-merge');
const webpack = require('webpack');
const path = require('path');
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');
const { CheckerPlugin } = require('awesome-typescript-loader');
const { prepareUrls } = require('react-dev-utils/WebpackDevServerUtils');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const { filter } = require('lodash');
const { configureCommon, getEnvironment, getStaticCss } = require('./common');

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
  const { entryPoint, outputPath, publicDir, proxy, devServer, isStaticBuild, minify } = options;
  const { protocol, host, port } = getUrlParts();

  const common = configureCommon(options);

  const { isDevelopment, isProduction, staticAssetName } = getEnvironment();

  return merge(common, {
    name: 'client',
    target: 'web',
    entry: isDevelopment
      ? [
          'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=false&quiet=false&noInfo=false',
          entryPoint
        ]
      : [entryPoint],
    devtool: 'cheap-module-source-map',
    devServer: isDevelopment
      ? {
          inline: true,
          port,
          disableHostCheck: true,
          contentBase: publicDir || path.resolve('public'),
          hot: true,
          publicPath: '/',
          watchOptions: { ignored: /node_modules/ },
          historyApiFallback: { disableDotRule: true },
          https: protocol === 'https',
          host,
          proxy
        }
      : {},
    output: {
      path: outputPath,
      filename: 'index.js',
      chunkFilename: '[name].js'
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.scss', '.js']
    },
    module: {
      rules: filter([
        !isStaticBuild && {
          test: /\.scss$/,
          exclude: /node_modules/,
          use: ExtractCssChunks.extract({
            use: [
              {
                loader: 'css-loader',
                options: {
                  sourceMap: true,
                  modules: true,
                  importLoaders: 2,
                  localIdentName: '[name]__[local]--[hash:base64:5]'
                }
              },
              {
                loader: 'sass-loader'
              },
              {
                loader: 'postcss-loader',
                options: {
                  plugins: function() {
                    return [require('autoprefixer')];
                  }
                }
              }
            ]
          })
        },
        ...getStaticCss({ isDevelopment, isProduction, isStaticBuild, minify })
      ])
    },
    plugins: filter([
      minify &&
        new webpack.optimize.UglifyJsPlugin({
          compress: {
            warnings: false,
            // Disabled because of an issue with Uglify breaking seemingly valid code:
            // https://github.com/facebookincubator/create-react-app/issues/2376
            // Pending further investigation:
            // https://github.com/mishoo/UglifyJS2/issues/2011
            comparisons: false,
            sequences: true, // join consecutive statemets with the ‚Äúcomma operator‚Äù
            properties: true, // optimize property access: a["foo"] ‚Üí a.foo
            dead_code: true, // discard unreachable code
            drop_debugger: true, // discard ‚Äúdebugger‚Äù statements
            unsafe: false, // some unsafe optimizations (see below)
            conditionals: true, // optimize if-s and conditional expressions
            evaluate: true, // evaluate constant expressions
            booleans: true, // optimize boolean expressions
            loops: true, // optimize loops
            unused: true, // drop unused variables/functions
            hoist_funs: true, // hoist function declarations
            hoist_vars: false, // hoist variable declarations
            if_return: true, // optimize if-s followed by return/continue
            join_vars: true, // join var declarations
            cascade: true, // try to cascade `right` into `left` in sequences
            side_effects: true // drop side-effect-free statements
          },
          output: {
            comments: false,
            // Turned on because emoji and regex is not minified properly using default
            // https://github.com/facebookincubator/create-react-app/issues/2488
            ascii_only: true
          },
          sourceMap: false
        }),
      isStaticBuild && new ExtractTextPlugin('style.css'),
      !isStaticBuild &&
        new webpack.DefinePlugin({
          'process.env.NODE_ENV': isDevelopment ? JSON.stringify('development') : JSON.stringify('production'),
          'process.env.BROWSER': false,
          __DEV__: isDevelopment
        }),
      !isStaticBuild && new ExtractCssChunks(),
      !isStaticBuild &&
        new webpack.optimize.CommonsChunkPlugin({
          names: ['bootstrap'], // needed to put webpack bootstrap code before chunks
          filename: '[name].js',
          minChunks: Infinity
        }),
      isDevelopment && new webpack.HotModuleReplacementPlugin(),
      new CheckerPlugin(),
      devServer &&
        new HtmlWebpackPlugin({
          inject: true,
          template: publicDir ? path.join(publicDir, 'index.html') : 'public/index.html',
          minify: minify && {
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
        })
    ]),
    // Some libraries import Node modules but don't use them in the browser.
    // Tell Webpack to provide empty mocks for them so importing them works.
    // https://webpack.js.org/configuration/node/
    // https://github.com/webpack/node-libs-browser/tree/master/mock
    node: {
      fs: 'empty',
      net: 'empty',
      tls: 'empty'
    }
  });
};

module.exports = { configure, getUrlParts };
