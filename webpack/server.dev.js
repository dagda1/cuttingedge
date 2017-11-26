const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const paths = require('../config/paths');
const env = getClientEnvironment('');
const entry = '../server/server';

const res = p => path.resolve(__dirname, p);

module.exports = {
  name: 'server',
  target: 'node',
  devtool: 'source-map',
  entry: [entry],
  output: {
    path: paths.serverBuild,
    filename: '[name].js',
    libraryTarget: 'commonjs2'
  },
  resolve: common.resolve,
  module: {
    rules: common.loaders
  }
};
