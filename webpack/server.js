const merge = require('webpack-merge');
const webpack = require('webpack');
const path = require('path');
const { CheckerPlugin } = require('awesome-typescript-loader');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const nodeExternals = require('webpack-node-externals');
const getLocalIdent = require('./getLocalIdent');

const reStyle = /\.(css|scss)$/;
const reImage = /\.(bmp|gif|jpe?g|png|svg)$/;

const { configureCommon, getEnvironment } = require('./common');

const configure = (options = {}) => {
  options.isNode = true;

  const common = configureCommon(options);

  const { isDevelopment, staticAssetName, isAnalyse, isVerbose, isDebug } = getEnvironment();

  const config = merge(common, {
    name: 'server',
    target: 'node',
    externals: [
      nodeExternals({
        modulesDir: path.join(process.cwd(), '../../node_modules'),
        whitelist: [
          isDevelopment ? 'webpack/hot/poll?300' : null,
          /\.(eot|woff|woff2|ttf|otf)$/,
          /\.(svg|png|jpg|jpeg|gif|ico)$/,
          /\.(mp4|mp3|ogg|swf|webp)$/,
          /\.(css|scss|sass|sss|less)$/
        ].filter(x => x)
      })
    ],
    entry: [options.entryPoint],
    devtool: 'cheap-module-eval-source-map',
    output: {
      filename: 'server.js',
      libraryTarget: 'commonjs2',
      path: options.outputPath
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.scss', '.js', '.json'],
      modules: [path.join(process.cwd(), '../../node_modules'), path.join(process.cwd(), 'src')]
    },
    module: {
      rules: [
        {
          test: /\.(css|scss|sass)$/,
          use: [
            {
              loader: 'css-loader/locals',
              options: {
                modules: true,
                importLoaders: 2,
                getLocalIdent
              }
            },
            {
              loader: 'sass-loader'
            }
          ]
        }
      ]
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': isDebug ? '"development"' : '"production"',
        'process.env.BROWSER': false,
        __DEV__: isDebug
      }),
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 1
      }),
      new CheckerPlugin()
    ]
  });

  return config;
};

module.exports = { configure };
