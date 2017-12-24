const merge = require('webpack-merge');
const webpack = require('webpack');
const nodeExternals = require('../scripts/node-externals');
const path = require('path');
const { CheckerPlugin } = require('awesome-typescript-loader');
const { TsConfigPathsPlugin } = require('awesome-typescript-loader');

const reStyle = /\.(css|scss)$/;
const reImage = /\.(bmp|gif|jpe?g|png|svg)$/;

module.exports = {
  name: 'server',
  target: 'node',
  externals: {
    react: true,
    'react-dom': true,
    'react-dom/server': true,
    'react-universal-component/server': true,
    'webpack-flush-chunks': true
  },
  entry: [path.join(__dirname, '../src/server/index')],
  devtool: 'cheap-module-eval-source-map',
  output: {
    filename: 'app.server.js',
    libraryTarget: 'commonjs2',
    path: path.join(__dirname, '../public/assets'),
    publicPath: '/'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    modules: ['../../../node_modules/', '../src']
  },
  module: {
    rules: [
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
        exclude: [/\.tsx?$/, /\.scss$/, /\.json$/, /\.txt$/, /\.md$/],
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]?[hash:8]'
        }
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        include: [path.resolve(__dirname, '../src')],
        use: [
          {
            loader: 'css-loader/locals',
            options: {
              modules: true,
              localIdentName: '[name]__[local]--[hash:base64:5]'
            }
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'url-loader'
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      }
    }),
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1
    }),
    new CheckerPlugin()
  ]
};
