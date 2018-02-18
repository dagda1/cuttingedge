const path = require('path');
const webpack = require('webpack');
const getLocalIdent = require('./getLocalIdent');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const { CheckerPlugin } = require('awesome-typescript-loader');
const { filter } = require('lodash');

const getEnvironment = () => {
  const isDevelopment = process.env.NODE_ENV !== 'production';
  const isProduction = process.env.NODE_ENV === 'production';
  const staticAssetName = isDevelopment ? '[path][name].[ext]?[hash:8]' : 'static/media/[hash:8].[ext]';
  const isAnalyse = process.argv.includes('--analyse');
  const isVerbose = process.argv.includes('--verbose');
  const isDebug = !process.argv.includes('--release');

  return {
    isDevelopment,
    staticAssetName,
    isAnalyse,
    isVerbose,
    isProduction
  };
};

const { merge } = require('lodash');

const configureCommon = options => {
  const typescriptOptions = options.typescriptOptions || {};
  const isNode = !!options.isNode;

  const { isStaticBuild } = options;
  const ssrBuild = !isStaticBuild;

  const { isDevelopment, isProduction, staticAssetName, isAnalyse, isDebug } = getEnvironment();

  return {
    output: {
      path: path.resolve('dist'),
      publicPath: '/'
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.scss', '.js']
    },
    module: {
      rules: filter([
        {
          exclude: [
            /\.html$/,
            /\.jsx?$/,
            /\.jsx?$/,
            /\.tsx?$/,
            /\.css$/,
            /\.json$/,
            /\.bmp$/,
            /\.gif$/,
            /\.jpe?g$/,
            /\.png$/,
            /\.scss$/,
            /\.woff2?$/,
            /\.eot$/,
            /\.ttf$/,
            /\.svg$/,
            /\.csv$/,
            /\.md$/
          ],
          loader: 'file-loader',
          options: { name: staticAssetName }
        },
        {
          test: /\.(eot|svg|ttf|woff|woff2|jpg)$/,
          loader: 'url-loader',
          options: { name: staticAssetName, limit: 10000 }
        },
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          loader: 'awesome-typescript-loader',
          options: merge({ useBabel: false, useCache: false }, typescriptOptions)
        },
        {
          test: /\.md$/,
          use: [
            {
              loader: 'html-loader'
            },
            {
              loader: 'markdown-loader',
              options: {}
            }
          ]
        }
      ])
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': isDevelopment ? JSON.stringify('development') : JSON.stringify('production'),
        'process.env.BROWSER': false,
        __DEV__: isDevelopment
      }),
      new CheckerPlugin(),
      ...(isAnalyse ? [new BundleAnalyzerPlugin()] : [])
    ]
  };
};

module.exports = { configureCommon, getEnvironment };
