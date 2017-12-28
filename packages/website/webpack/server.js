const merge = require('webpack-merge');
const webpack = require('webpack');
const path = require('path');
const { CheckerPlugin } = require('awesome-typescript-loader');

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const reStyle = /\.(css|scss)$/;
const reImage = /\.(bmp|gif|jpe?g|png|svg)$/;

const common = require('./common');
const { isDevelopment, staticAssetName } = common;

const isAnalyse = process.argv.includes('--analyse');
const isVerbose = process.argv.includes('--verbose');

module.exports = merge(common, {
  name: 'server',
  target: 'node',
  externals: {
    react: 'commonjs react',
    'react-dom/server': 'commonjs react-dom/server',
    'react-universal-component/server': 'commonjs react-universal-component/server',
    'webpack-flush-chunks': 'commonjs webpack-flush-chunks',
    history: 'commonjs ',
    'react-router-dom': 'commonjs react-router-dom'
  },
  entry: [path.join(__dirname, '../src/server/index')],
  devtool: 'cheap-module-eval-source-map',
  output: {
    filename: 'app.server.js',
    libraryTarget: 'commonjs2'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.scss', '.js', '.json'],
    modules: ['../../../node_modules/', '../src']
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
        test: /\.scss$/,
        exclude: /node_modules/,
        include: [path.resolve(__dirname, '../src')],
        use: [
          {
            loader: 'css-loader/locals',
            options: {
              modules: true,
              importLoaders: 2,
              localIdentName: '[name]__[local]--[hash:base64:5]'
            }
          },
          {
            loader: 'sass-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1
    }),
    new CheckerPlugin(),
    ...(isAnalyse ? [new BundleAnalyzerPlugin()] : [])
  ]
});
