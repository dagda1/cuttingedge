const merge = require('webpack-merge');
const webpack = require('webpack');
const path = require('path');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const nodeExternals = require('webpack-node-externals');
const getLocalIdent = require('./getLocalIdent');

const reStyle = /\.(css|scss)$/;
const reImage = /\.(bmp|gif|jpe?g|png|svg)$/;

const { configureCommon, getEnvironment } = require('./common');

const configure = (options = {}) => {
  options.isNode = true;

  const common = configureCommon(options);

  const { isDevelopment, isAnalyse, isVerbose, isDebug } = getEnvironment();

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
      filename: options.filename,
      libraryTarget: 'commonjs2'
    },
    resolve: {
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
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 1
      })
    ]
  });

  return config;
};

module.exports = { configure };
