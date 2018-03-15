const merge = require('webpack-merge');
const webpack = require('webpack');
const path = require('path');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
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

  console.log('----------------------------');
  console.log(`process.cwd() = ${process.cwd()}`);
  console.log(`modulesDirectory = ${modulesDirectory}`);
  console.log(`modulesDir = ${modulesDir}`);
  console.log(`fs.exists('./node_modules') = ${fs.exists('./node_modules')}`);
  console.log(`fs.existsSync(modulesDir) ${fs.existsSync(modulesDir)}`);
  console.log('----------------------------');

  const externals =
    options.externals ||
    nodeExternals({
      modulesDir,
      whitelist: [
        isDevelopment ? 'webpack/hot/poll?300' : null,
        /\.(eot|woff|woff2|ttf|otf)$/,
        /\.(svg|png|jpg|jpeg|gif|ico)$/,
        /\.(mp4|mp3|ogg|swf|webp)$/,
        /\.(css|scss|sass|sss|less)$/
      ].filter(x => x)
    });

  const config = merge(common, {
    name: 'server',
    target: 'node',
    externals,
    entry: [options.entryPoint],
    devtool: 'cheap-module-eval-source-map',
    output: {
      filename: options.filename,
      libraryTarget: 'commonjs2'
    },
    resolve: {
      modules: [path.join(process.cwd(), modulesDirectory), path.join(process.cwd(), 'src')]
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
