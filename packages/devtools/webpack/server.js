const merge = require('webpack-merge');
const webpack = require('webpack');
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const getLocalIdent = require('./getLocalIdent');
const fs = require('fs');

const reStyle = /\.(css|scss)$/;
const reImage = /\.(bmp|gif|jpe?g|png|svg)$/;

const { configureCommon, getEnvironment } = require('./common');

const configure = (options = {}) => {
  options.isNode = true;

  const common = configureCommon(options);

  const { isDevelopment, isAnalyse, isVerbose, isDebug } = getEnvironment();

  const modulesDirectory = fs.existsSync('../../node_modules') ? '../../node_modules' : './node_modules';
  const modulesDir = path.join(process.cwd(), modulesDirectory);

  const externals =
    options.externals ||
    nodeExternals({
      modulesDir,
      whitelist: [
        isDevelopment ? 'webpack/hot/poll?300' : null,
        /\.(eot|woff|woff2|ttf|otf)$/,
        /\.(svg|png|jpg|jpeg|gif|ico)$/,
        /\.(mp4|mp3|ogg|swf|webp)$/,
        /\.(css|scss|sass|sss|less)$/,
        /^@cutting/,
        /^@ds/,
        /^@c2/
      ].filter(x => x)
    });

  const entries = Array.isArray(options.entries) ? options.entries : [options.entries];

  const config = merge(common, {
    name: 'server',
    target: 'node',
    externals,
    entry: isDevelopment ? [...entries] : entries,
    devtool: !isDevelopment && 'cheap-module-source-map',
    output: {
      filename: options.filename,
      libraryTarget: 'commonjs2'
    },
    module: {
      strictExportPresence: true
    },
    plugins: [
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 1
      })
    ]
  });

  return config;
};

module.exports = { configure };
