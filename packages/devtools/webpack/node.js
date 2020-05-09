const merge = require('webpack-merge');
const webpack = require('webpack');
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const paths = require('../config/paths');
const WriteFilePlugin = require('write-file-webpack-plugin');
const { configureCommon, getEnvironment } = require('./common');

getExternals = function() {
  const modulesDir = path.resolve(__dirname, '../../../node_modules');

  return [
    nodeExternals(),
    nodeExternals({
      modulesDir,
      whitelist: [/^@cutting/].filter(x => x),
    }),
  ];
};

const configure = (options = {}) => {
  const common = configureCommon({ ...options, isWeb: false });

  const { excludeExternals } = options;

  const { isDevelopment, isProduction } = getEnvironment();

  const entries = Array.isArray(options.entries) ? options.entries : [options.entries];

  const config = merge(common, {
    name: 'api',
    target: 'node',
    externals: excludeExternals ? getExternals(modulesDir) : undefined,
    entry: isDevelopment ? [...entries] : entries,
    devtool: !isDevelopment && 'cheap-module-source-map',
    output: {
      path: paths.appBuild,
      filename: options.filename,
      libraryTarget: 'commonjs2',
    },
    plugins: [
      new WriteFilePlugin(),
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 1,
      }),
      isProduction && new webpack.optimize.ModuleConcatenationPlugin(),
    ],
  });

  return config;
};

module.exports = { configure };
