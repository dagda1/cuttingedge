const merge = require('webpack-merge');
const webpack = require('webpack');
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const fs = require('fs');
const paths = require('../config/paths');
const WriteFilePlugin = require('write-file-webpack-plugin');
const { configureCommon, getEnvironment } = require('./common');

getExternals = function(isDevelopment) {
  const modulesDir = path.resolve(__dirname, '../../../node_modules');

  return [
    nodeExternals(),
    nodeExternals({
      modulesDir,
      whitelist: [/^@c2/].filter(x => x)
    })
  ];
};

const configure = (options = {}) => {
  options.isWeb = false;

  const common = configureCommon(options);

  const { isDevelopment, isAnalyse, isVerbose, isDebug, devServer, isStaticBuild, isProduction } = getEnvironment();

  const entries = Array.isArray(options.entries) ? options.entries : [options.entries];

  const config = merge(common, {
    name: 'api',
    target: 'node',
    externals: getExternals(),
    entry: isDevelopment ? [...entries] : entries,
    devtool: !isDevelopment && 'cheap-module-source-map',
    output: {
      path: paths.appBuild,
      filename: '[name].js',
      libraryTarget: 'commonjs2'
    },
    plugins: [
      new WriteFilePlugin(),
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 1
      }),
      isProduction && new webpack.optimize.ModuleConcatenationPlugin()
    ]
  });

  return config;
};

module.exports = { configure };
