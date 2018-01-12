import * as merge from 'webpack-merge';
import * as webpack from 'webpack';
import * as path from 'path';
import * as ExtractCssChunks from 'extract-css-chunks-webpack-plugin';
import { CheckerPlugin } from 'awesome-typescript-loader';

const { defaultsDeep } = require('lodash');
const common = require('./common');

const { isDevelopment, staticAssetName, isDebug } = common;

const reStyle = /\.(css|scss)$/;
const reImage = /\.(bmp|gif|jpe?g|png|svg)$/;

export interface WebpackOptions {
  entryPoint: string;
  publicDir: string;
}

const defaultOptions = {};

const configure = (overrides: WebpackOptions) => {
  const options = defaultsDeep(overrides, defaultOptions);

  return merge(common, {
    name: 'client',
    target: 'web',
    entry: [
      'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=false&quiet=false&noInfo=false',
      options.entryPoint
    ],
    devtool: 'cheap-module-eval-source-map',
    output: {
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
    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': isDebug ? JSON.stringify('development') : JSON.stringify('production'),
        'process.env.BROWSER': false,
        __DEV__: isDebug
      }),
      new ExtractCssChunks(),
      new webpack.optimize.CommonsChunkPlugin({
        names: ['bootstrap'], // needed to put webpack bootstrap code before chunks
        filename: '[name].js',
        minChunks: Infinity
      }),
      new webpack.HotModuleReplacementPlugin(),
      new CheckerPlugin()
    ],
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
