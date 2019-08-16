const merge = require('webpack-merge');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const paths = require('../config/paths');
const StartServerPlugin = require('start-server-webpack-plugin');
const postcssOptions = require('./postCssoptions');
const getLocalIdent = require('./getLocalIdent');
const sassOptions = require('./sassOptions');
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');

const { cssRegex, sassRegex, sassModuleRegex } = require('./constants');

const { configureCommon, getEnvironment, getEnvVariables } = require('./common');

const port = process.env.PORT;

getExternals = function(isDevelopment) {
  return [
    nodeExternals({
      whitelist: [
        isDevelopment ? 'webpack/hot/poll?300' : null,
        /\.(eot|woff|woff2|ttf|otf)$/,
        /\.(svg|png|jpg|jpeg|gif|ico)$/,
        /\.(mp4|mp3|ogg|swf|webp)$/,
        /\.(css|scss|sass|sss|less)$/,
        /^@babel/,
        /^@cutting/,
        /^@c2/
      ].filter((x) => x)
    })
  ];
};

const configure = (options = {}) => {
  const common = configureCommon(options);

  options.isWeb = false;
  const { isDevelopment, isProduction } = getEnvironment();

  const env = getEnvVariables(options);

  const devServerPort = isProduction ? port : parseInt(port, 10) + 1;

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

  const config = merge(common, {
    name: 'server',
    target: 'node',
    watch: isDevelopment,
    externals: getExternals(isDevelopment),
    watch: isDevelopment,
    entry: isDevelopment ? ['razzle-dev-utils/prettyNodeErrors', 'webpack/hot/poll?300', ...entries] : entries,
    node: {
      __console: false,
      __dirname: false,
      __filename: false
    },
    output: {
      path: paths.appBuild,
      filename: options.filename,
      publicPath: isDevelopment ? `http://${env.raw.HOST}:${devServerPort}/` : '/',
      libraryTarget: 'commonjs2'
    },
    module: {
      rules: [
        {
          test: cssRegex,
          use: [
            {
              loader: ExtractCssChunks.loader,
              options: {
                hmr: isDevelopment
              }
            },
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1
              }
            },
            { loader: 'postcss-loader', options: postcssOptions }
          ]
        },
        {
          test: sassRegex,
          exclude: sassModuleRegex,
          use: [
            {
              loader: ExtractCssChunks.loader,
              options: {
                hmr: isDevelopment
              }
            },
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1
              }
            },
            { loader: 'postcss-loader', options: postcssOptions },
            { loader: 'sass-loader', options: sassOptions }
          ]
        },
        {
          test: sassModuleRegex,
          use: [
            {
              loader: ExtractCssChunks.loader,
              options: {
                hmr: isDevelopment
              }
            },
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                modules: {
                  getLocalIdent: getLocalIdent
                }
              }
            },
            { loader: 'postcss-loader', options: postcssOptions },
            { loader: 'sass-loader', options: sassOptions }
          ]
        }
      ]
    },

    plugins: [
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 1
      }),
      isDevelopment && new webpack.HotModuleReplacementPlugin(),
      isDevelopment && new webpack.NamedModulesPlugin(),
      new ExtractCssChunks({
        filename: isDevelopment ? 'static/css/[name].css' : 'static/css/[name].[contenthash].css',
        chunkFilename: isDevelopment ? 'static/css/[id].css' : 'static/css/[id].[hash].css'
      }),
      isDevelopment &&
        new StartServerPlugin({
          name: 'server.js',
          nodeArgs
        })
    ].filter(Boolean)
  });

  return config;
};

module.exports = { configure, getExternals };
