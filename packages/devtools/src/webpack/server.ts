/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Configuration } from 'webpack';
import { ServerBuildConfig } from 'src/types/config';
const merge = require('webpack-merge');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const paths = require('../config/paths');
const StartServerPlugin = require('start-server-webpack-plugin');
const path = require('path');

const { configureCommon, getEnvironment, getEnvVariables } = require('./common');

const port = process.env.PORT;

const getExternals = function (isDevelopment: boolean) {
  return [
    nodeExternals({
      whitelist: [
        isDevelopment ? 'webpack/hot/poll?300' : null,
        /\.(eot|woff|woff2|ttf|otf)$/,
        /\.(svg|png|jpg|jpeg|gif|ico)$/,
        /\.(mp4|mp3|ogg|swf|webp)$/,
        /\.(css|scss|sass|sss|less)$/,
        /^@babel/,
        /^@loadable\/component$/,
        /^loadable-ts-transformer$/,
        /^@cutting/,
      ].filter((x) => x),
    }),
  ];
};

const configure = (options: ServerBuildConfig): Configuration => {
  const common = configureCommon({ ...options, isNode: true, ssrBuild: true });

  const { isDevelopment, isProduction } = getEnvironment();

  const env = getEnvVariables(options);

  const devServerPort = isProduction ? port : Number(port) + 1;

  const entries = Array.isArray(options.entries) ? options.entries : [options.entries];

  let nodeArgs;

  if (isDevelopment) {
    nodeArgs = ['-r', 'source-map-support/register'];

    // Passthrough --inspect and --inspect-brk flags (with optional [host:port] value) to node
    if (process.env.INSPECT_BRK) {
      nodeArgs.push(process.env.INSPECT_BRK);
    } else if (process.env.INSPECT) {
      nodeArgs.push(process.env.INSPECT);
    }
  }

  const config: Configuration = merge(common, {
    name: 'server',
    target: 'node',
    watch: isDevelopment,
    externals: getExternals(isDevelopment),
    entry: isDevelopment
      ? [path.join(__dirname, '../scripts/prettyNodeErrors'), 'webpack/hot/poll?300', ...entries]
      : entries,
    node: {
      __console: false,
      __dirname: false,
      __filename: false,
    },
    output: {
      path: paths.appBuild,
      filename: options.filename,
      publicPath: isDevelopment ? `http://${env.raw.HOST}:${devServerPort}/` : '/',
      libraryTarget: 'commonjs2',
    },

    plugins: [
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 1,
      }),
      isDevelopment && new webpack.HotModuleReplacementPlugin(),
      isDevelopment && new webpack.NamedModulesPlugin(),
      isDevelopment &&
        new StartServerPlugin({
          name: 'server.js',
          nodeArgs,
        }),
    ].filter(Boolean),
  });

  return config;
};

module.exports = { configure, getExternals };
