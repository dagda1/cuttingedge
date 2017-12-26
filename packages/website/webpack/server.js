const merge = require('webpack-merge');
const webpack = require('webpack');
const path = require('path');
const { CheckerPlugin } = require('awesome-typescript-loader');

const reStyle = /\.(css|scss)$/;
const reImage = /\.(bmp|gif|jpe?g|png|svg)$/;

module.exports = {
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
    libraryTarget: 'commonjs2',
    path: path.join(__dirname, '../public/assets'),
    publicPath: '/'
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
          name: '[path][name].[ext]?[hash:8]'
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
