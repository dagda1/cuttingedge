const merge = require('webpack-merge');
const webpack = require('webpack');
const path = require('path');
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');
const { CheckerPlugin } = require('awesome-typescript-loader');
const { prepareUrls } = require('react-dev-utils/WebpackDevServerUtils');

const { filter } = require('lodash');
const { configureCommon } = require('./common');

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
  const { entryPoint, outputPath, publicDir, proxy, devServer } = options;
  const { protocol, host, port } = getUrlParts();

  const common = configureCommon(options);

  const { isDevelopment, staticAssetName } = common;

  return merge(common, {
    name: 'client',
    target: 'web',
    entry: [
      'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=false&quiet=false&noInfo=false',
      entryPoint
    ],
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
      filename: 'app.client.js',
      chunkFilename: '[name].js'
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.scss', '.js']
    },
    module: {
      rules: [
        {
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
        }
      ]
    },
    plugins: filter([
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': isDevelopment ? JSON.stringify('development') : JSON.stringify('production'),
        'process.env.BROWSER': false,
        __DEV__: isDevelopment
      }),
      new ExtractCssChunks(),
      new webpack.optimize.CommonsChunkPlugin({
        names: ['bootstrap'], // needed to put webpack bootstrap code before chunks
        filename: '[name].js',
        minChunks: Infinity
      }),
      new webpack.HotModuleReplacementPlugin(),
      new CheckerPlugin(),
      devServer &&
        new HtmlWebpackPlugin({
          inject: true,
          template: publicDir ? path.join(publicDir, 'index.html') : 'public/index.html'
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

module.exports = { configure };
