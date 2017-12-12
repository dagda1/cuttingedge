const merge = require('webpack-merge');
const webpack = require('webpack');
const common = require('./common');
const join = require('path').resolve;
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');

module.exports = merge(common, {
  name: 'client',
  target: 'web',
  entry: [
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=false&quiet=false&noInfo=false',
    join(__dirname, '../src/client/index')
  ],
  devtool: 'inline-source-map',
  output: {
    filename: 'app.client.js',
    chunkFilename: '[name].js'
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
                localIdentName: '[name]__[local]--[hash:base64:5]'
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: function() {
                  return [require('autoprefixer')];
                }
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
                sourceComments: true
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
    new webpack.HotModuleReplacementPlugin()
  ]
});
