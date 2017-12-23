const merge = require('webpack-merge');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const path = require('path');

module.exports = {
  name: 'server',
  target: 'node',
  externals: [
    nodeExternals({
      modulesDir: '../../../node_modules',
      whitelist: ['.bin', 'react-universal-component', 'require-universal-module', 'webpack-flush-chunks', 'react-dom']
    })
  ],
  entry: [path.join(__dirname, '../src/server/index')],
  devtool: 'inline-source-map',
  output: {
    path: path.resolve('build'),
    publicPath: '/',
    filename: 'app.server.js',
    libraryTarget: 'commonjs2'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    modules: [path.join(__dirname, '../../../node_modules')]
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
        exclude: /node_modules/
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
      /*       {
        test: /\.scss$/,
        exclude: /node_modules/,
        include: [path.resolve(__dirname, '../src/client', '../src/shared')],
        use: [
          {
            loader: 'isomorphic-style-loader',
            options: {
              modules: true,
              sourceMap: true,
              importLoaders: 2,
              localIdentName: '[name]__[local]--[hash:base64:5]'
            }
          },
          {
            loader: 'sass-loader'
          }
        ]
      }, */
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'url-loader'
      },
      {
        exclude: [/\.tsx?$/, /\.scss$/, /\.json$/, /\.txt$/, /\.md$/],
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]?[hash:8]'
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
