const path = require('path');
const webpack = require('webpack');
const paths = require('../config/paths');
const { CheckerPlugin } = require('awesome-typescript-loader');
const getClientEnvironment = require('../config/env');
const common = require('./common');

const env = getClientEnvironment('');

module.exports = {
  name: 'client',
  target: 'web',
  devtool: 'source-map',
  entry: [
    'babel-polyfill',
    require.resolve('react-error-overlay'),
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=false&quiet=false&noInfo=false',
    'react-hot-loader/patch',
    '../src/index.tsx'
  ],
  output: {
    path: paths.appBuild,
    publicPath: '/',
    filename: 'static/js/bundle.js',
    publicPath: '/static/'
  },
  resolve: common.resolve,
  module: {
    rules: common.loaders
  }
};
