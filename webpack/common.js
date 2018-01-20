const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const postcssOptions = require('./postcssOptions');
const getLocalIdent = require('./getLocalIdent');

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
    isDevelopment,
    isProduction
  };
};

const getStaticCss = options => {
  if (!options.isStaticBuild) {
    return [false];
  }

  return [
    {
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
          {
            loader: require.resolve('css-loader'),
            options: {
              importLoaders: 1,
              minimize: options.isProduction
            }
          },
          {
            loader: require.resolve('postcss-loader'),
            options: postcssOptions
          }
        ]
      })
    },
    {
      test: /\.scss$/,
      exclude: /node_modules/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
          {
            loader: 'css-loader',
            query: {
              modules: true,
              sourceMap: true,
              minimize: options.isProduction,
              importLoaders: 2,
              localIdentName: '[name]__[local]',
              getLocalIdent: getLocalIdent
            }
          },
          {
            loader: require.resolve('postcss-loader'),
            options: postcssOptions
          },
          'sass-loader'
        ]
      })
    }
  ];
};

const { merge } = require('lodash');

const configureCommon = options => {
  const typescriptOptions = options.typescriptOptions || {};

  const { isDevelopment, isProduction, staticAssetName, isAnalyse, isDevelopment, isDebug } = getEnvironment();

  return {
    output: { publicPath: '/' },
    module: {
      rules: [
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
          loader: 'awesome-typescript-loader',
          options: merge({ useBabel: false, useCache: false }, typescriptOptions)
        }
      ]
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('development')
        }
      }),
      ...(isAnalyse ? [new BundleAnalyzerPlugin()] : []),
      new FriendlyErrorsPlugin({
        verbose: dotenv.raw.VERBOSE,
        target,
        onSuccessMessage: `Your application is running at http://${dotenv.raw.HOST}:${dotenv.raw.PORT}`
      }),
      isDevelopment &&
        new FriendlyErrorsPlugin({
          verbose: dotenv.raw.VERBOSE,
          target,
          onSuccessMessage: `Your application is running at http://${dotenv.raw.HOST}:${dotenv.raw.PORT}`
        })
    ]
  };
};

module.exports = { configureCommon, getEnvironment, getStaticCss };
