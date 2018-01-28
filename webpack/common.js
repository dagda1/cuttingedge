const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const postcssOptions = require('./postcssOptions');
const getLocalIdent = require('./getLocalIdent');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const { filter } = require('lodash');

const getEnvironment = () => {
  const isDevelopment = process.env.NODE_ENV !== 'production';
  const isProduction = process.env.NODE_ENV === 'production';
  const staticAssetName = isDevelopment ? '[path][name].[ext]?[hash:8]' : '[hash:8].[ext]';
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

  const { isDevelopment, isProduction, staticAssetName, isAnalyse, isDebug } = getEnvironment();

  return {
    output: { publicPath: '/' },
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
        { test: /\.(eot|svg|ttf|woff|woff2)$/, loader: 'url-loader', options: { name: staticAssetName, limit: 10000 } },
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          loader: 'awesome-typescript-loader',
          options: merge({ useBabel: false, useCache: false }, typescriptOptions)
        },
        !isNode && {
          test: /\.scss$/,
          exclude: /node_modules/,
          use: isDevelopment
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
                { loader: 'sass-loader' }
              ]
            : ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [
                  {
                    loader: 'css-loader',
                    query: {
                      modules: true,
                      minimize: isProduction,
                      importLoaders: 2,
                      localIdentName: '[name]__[local]',
                      getLocalIdent: getLocalIdent
                    }
                  },
                  {
                    loader: 'postcss-loader',
                    options: postcssOptions
                  },
                  'sass-loader'
                ]
              })
        }
      ])
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('development')
        }
      }),
      ...(isAnalyse ? [new BundleAnalyzerPlugin()] : [])
    ]
  };
};

module.exports = { configureCommon, getEnvironment };
