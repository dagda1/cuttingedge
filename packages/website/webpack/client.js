const merge = require('webpack-merge');
const webpack = require('webpack');
const path = require('path');
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');
const { CheckerPlugin } = require('awesome-typescript-loader');

const reStyle = /\.(css|scss)$/;
const reImage = /\.(bmp|gif|jpe?g|png|svg)$/;

const isDevelopment = require('../src/constants').isDevelopment;
const staticAssetName = isDevelopment ? '[path][name].[ext]?[hash:8]' : '[hash:8].[ext]';

module.exports = {
  name: 'client',
  target: 'web',
  entry: [
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=false&quiet=false&noInfo=false',
    path.join(__dirname, '../src/client/index')
  ],
  devtool: 'source-map',
  output: {
    filename: 'app.client.js',
    chunkFilename: '[name].js',
    path: path.join(__dirname, '../public/assets'),
    publicPath: '/'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.scss', '.js']
  },
  module: {
    rules: [
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
          /\.md$/
        ],
        loader: require.resolve('file-loader'),
        options: {
          name: staticAssetName
        }
      },
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
        options: {
          sourceMap: true,
          useBabel: false,
          useCache: false
        },
        exclude: /node_modules/
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'url-loader',
        options: {
          name: staticAssetName,
          limit: 10000
        }
      },
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
    new ExtractCssChunks(),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['bootstrap'], // needed to put webpack bootstrap code before chunks
      filename: '[name].js',
      minChunks: Infinity
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      }
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
};
