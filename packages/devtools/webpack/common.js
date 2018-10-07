const path = require('path');
const webpack = require('webpack');
const getLocalIdent = require('./getLocalIdent');
const { CheckerPlugin } = require('awesome-typescript-loader');
const { filter } = require('lodash');
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');
const postcssOptions = require('./postcssOptions');
const fs = require('fs');
const WebpackBar = require('webpackbar');
const AssetsPlugin = require('assets-webpack-plugin');
const paths = require('../config/paths');

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

const sassOptions = {
  outputStyle: 'expanded',
  sourceMap: false,
  data: '@import "./styles/_overrides.scss";',
  includePaths: [path.join(process.cwd(), 'src')]
};

const configureCommon = options => {
  const typescriptOptions = options.typescriptOptions || {};
  const isNode = !!options.isNode;
  const isWeb = !isNode;
  const devServer = options.devServer;

  const { isStaticBuild } = options;
  const ssrBuild = !isStaticBuild;

  const { isDevelopment, isProduction, staticAssetName, isAnalyse, isDebug } = getEnvironment();

  const config = {
    mode: isDevelopment ? 'development' : 'production',
    watch: isDevelopment,
    output: {
      path: path.resolve('dist'),
      publicPath: '/'
    },
    resolve: {
      modules: [path.join(process.cwd(), 'src'), 'node_modules'],
      extensions: ['.js', '.ts', '.tsx', '.scss', '.json', '.csv']
    },
    module: {
      strictExportPresence: true,
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
          test: [
            /\.bmp$/,
            /\.gif$/,
            /\.jpe?g$/,
            /\.png$/,
            /\.woff$/,
            /\.woff2$/,
            /\.eot$/,
            /\.eot$/,
            /\.ttf$/,
            /\.svg/
          ],
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
          test: /\.(css|scss|sass)$/,
          use: devServer
            ? [
                { loader: 'style-loader' },
                {
                  loader: 'css-loader',
                  options: {
                    importLoaders: 2,
                    modules: true,
                    getLocalIdent: getLocalIdent
                  }
                },
                { loader: 'postcss-loader', options: postcssOptions },
                { loader: 'sass-loader', options: sassOptions }
              ]
            : [
                ExtractCssChunks.loader,
                {
                  loader: 'css-loader',
                  options: {
                    importLoaders: 2,
                    modules: true,
                    getLocalIdent: getLocalIdent,
                    minimize: isProduction
                  }
                },
                { loader: 'postcss-loader', options: postcssOptions },
                { loader: 'sass-loader', options: sassOptions }
              ]
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
    plugins: filter([
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': isDevelopment ? JSON.stringify('development') : JSON.stringify('production'),
        'process.env.BROWSER': false,
        __DEV__: isDevelopment
      }),
      isWeb &&
        new AssetsPlugin({
          path: paths.appBuild,
          filename: 'assets.json'
        }),
      isDevelopment &&
        new WebpackBar({
          color: isWeb ? '#f56be2' : '#c065f4',
          name: isWeb ? 'client' : 'server'
        }),
      !devServer &&
        new ExtractCssChunks({
          filename: isDevelopment ? '[name].css' : 'static/css/[name].[md5:contenthash:hex:20].css',
          chunkFilename: '[id].css',
          hot: isDevelopment
        }),
      new CheckerPlugin(),
      ...(isAnalyse ? [new BundleAnalyzerPlugin()] : [])
    ])
  };

  return config;
};

module.exports = { configureCommon, getEnvironment };
