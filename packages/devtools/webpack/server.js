const merge = require('webpack-merge');
const webpack = require('webpack');
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const getLocalIdent = require('./getLocalIdent');
const paths = require('../config/paths');
const postcssOptions = require('./postCssoptions');
const StartServerPlugin = require('start-server-webpack-plugin');
const fs = require('fs-extra');

const { configureCommon, getEnvironment, getEnvVariables } = require('./common');

const port = process.env.PORT;

getExternals = function(isDevelopment) {
  const modulesDir = path.resolve(__dirname, '../node_modules');

  if (!fs.existsSync(modulesDir)) {
    throw new Error('not found node_modules');
  }

  return [
    nodeExternals(),
    nodeExternals({
      modulesDir,
      whitelist: [
        isDevelopment ? 'webpack/hot/poll?300' : null,
        /\.(eot|woff|woff2|ttf|otf)$/,
        /\.(svg|png|jpg|jpeg|gif|ico)$/,
        /\.(mp4|mp3|ogg|swf|webp)$/,
        /\.(css|scss|sass|sss|less)$/,
        /^@c2/
      ].filter(Boolean)
    }),
    {
      './server.js': 'commonjs ./server.js'
    }
  ];
};

const configure = (options = {}) => {
  const common = configureCommon(options);

  options.isWeb = false;
  const { isDevelopment, isProduction } = getEnvironment();

  const sassOptions = {
    outputStyle: 'expanded',
    sourceMap: isDevelopment,
    data: '@import "./styles/_overrides.scss";',
    includePaths: [paths.appSrc],
    minimize: isProduction
  };

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
    devtool: !isDevelopment && 'cheap-module-source-map',
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
          test: /\.css$/,
          use: [
            {
              loader: 'css-loader',
              options: {
                exportOnlyLocals: true,
                importLoaders: 2
              }
            },
            { loader: 'postcss-loader', options: postcssOptions }
          ]
        },
        {
          test: /\.scss$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'css-loader',
              options: {
                exportOnlyLocals: true,
                importLoaders: 2,
                modules: true,
                getLocalIdent: getLocalIdent
              }
            },
            { loader: 'postcss-loader', options: postcssOptions },
            { loader: 'sass-loader', options: sassOptions }
          ]
        }
      ]
    },

    plugins: [
      isDevelopment && new webpack.HotModuleReplacementPlugin(),
      isDevelopment && new webpack.NamedModulesPlugin(),
      // Ignore assets.json to avoid infinite recompile bug
      isDevelopment && new webpack.WatchIgnorePlugin([paths.appManifest]),
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
