const merge = require('webpack-merge');
const webpack = require('webpack');
const nodeExternals = require('../scripts/node-externals');
const path = require('path');

module.exports = {
  name: 'server',
  target: 'node',
  externals: nodeExternals,
  entry: [path.join(__dirname, '../src/server/index')],
  devtool: 'inline-source-map',
  output: {
    path: path.resolve('build'),
    publicPath: '/',
    filename: 'app.server.js',
    libraryTarget: 'commonjs2'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.scss'],
    modules: [path.join(__dirname, '../node_modules')]
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader'
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        include: [path.resolve(__dirname, '../src/shared')],
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
        loader: 'file-loader',
        options: {
          name: 'fonts/[name].[ext]'
        }
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
    })
  ]
};
