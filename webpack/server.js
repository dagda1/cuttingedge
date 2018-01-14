const merge = require('webpack-merge');
const webpack = require('webpack');
const path = require('path');
const { CheckerPlugin } = require('awesome-typescript-loader');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const nodeExternals = require('webpack-node-externals');

const reStyle = /\.(css|scss)$/;
const reImage = /\.(bmp|gif|jpe?g|png|svg)$/;

const common = require('./common');
const { isDevelopment, staticAssetName, isAnalyse, isVerbose, isDebug } = common;

const configure = (options = {}) => {
  return merge(common, {
    name: 'server',
    target: 'node',
    externals: [
      nodeExternals({
        modulesDir: path.join(process.cwd(), '../../node_modules')
      })
    ],
    entry: [options.entryPoint],
    devtool: 'cheap-module-eval-source-map',
    output: {
      filename: 'server.js',
      libraryTarget: 'commonjs2',
      path: options.outputPath
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.scss', '.js', '.json'],
      modules: [path.join(process.cwd(), '../../node_modules'), path.join(process.cwd(), 'src')]
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
          loader: 'file-loader',
          options: {
            name: staticAssetName
          }
        },
        {
          test: /\.scss$/,
          exclude: /node_modules/,
          include: [path.resolve(path.join(process.cwd(), 'src'))],
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
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': isDebug ? '"development"' : '"production"',
        'process.env.BROWSER': false,
        __DEV__: isDebug
      }),
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 1
      }),
      new CheckerPlugin()
    ]
  });
};

module.exports = { configure };
