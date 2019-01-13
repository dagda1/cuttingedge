const path = require('path');
const webpack = require('webpack');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const paths = require('../config/paths');
const WebpackBar = require('webpackbar');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const { filter } = require('lodash');

const getEnvironment = () => {
  const isDevelopment = process.env.NODE_ENV !== 'production';
  const isProduction = process.env.NODE_ENV === 'production';
  const staticAssetName = isDevelopment ? '[path][name].[ext]?[hash:8]' : 'static/media/[hash:8].[ext]';
  const isAnalyse = process.argv.includes('--analyze') || process.argv.includes('--analyse');
  const isVerbose = process.argv.includes('--verbose');

  return {
    isDevelopment,
    staticAssetName,
    isAnalyse,
    isVerbose,
    isProduction
  };
};

const getEnvVariables = (options) => {
  const { isDevelopment } = getEnvironment();
  delete require.cache[require.resolve('../config/env')];

  return require('../config/env').getClientEnv(
    options.isNode ? 'node' : 'web',
    {},
    {
      'process.env.NODE_ENV': isDevelopment ? JSON.stringify('development') : JSON.stringify('production'),
      __DEV__: isDevelopment,
      __BROWSER__: !options.isNode
    }
  );
};

const HappyPack = require('happypack');

const configureCommon = (options) => {
  const isNode = !!options.isNode;
  const isWeb = !isNode;
  const { isStaticBuild } = options;
  const ssrBuild = !isStaticBuild;
  const { isDevelopment, staticAssetName, isAnalyse } = getEnvironment();
  const env = getEnvVariables(options);

  const config = {
    mode: isDevelopment ? 'development' : 'production',
    context: process.cwd(),
    output: {
      path: paths.appBuild,
      publicPath: '/'
    },
    resolve: {
      modules: [path.join(process.cwd(), 'src'), 'node_modules'],
      extensions: ['.js', '.json', '.ts', '.tsx', '.scss', '.csv'],
      alias: isDevelopment
        ? {
            'webpack/hot/poll': require.resolve('webpack/hot/poll')
          }
        : {}
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
          test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/, /\.woff$/, /\.woff2$/, /\.eot$/, /\.eot$/, /\.ttf$/],
          loader: 'url-loader',
          options: { name: staticAssetName, limit: 10000 }
        },
        {
          test: /\.tsx$/,
          enforce: 'pre',
          use: [
            {
              loader: 'tslint-loader',
              options: {
                configFile: paths.tsLintConfig,
                tsConfig: paths.tsConfig,
                emitError: true,
                failOnHint: true,
                fix: false
              }
            }
          ]
        },
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          loader: 'ts-loader',
          options: {
            configFile: paths.tsConfig,
            transpileOnly: isDevelopment,
            experimentalWatchApi: isDevelopment,
            compilerOptions: {
              sourceMap: isDevelopment
            }
          }
        },
        {
          test: /\.csv$/,
          loader: 'csv-loader',
          options: {
            header: true,
            skipEmptyLines: true
          }
        },
        {
          test: /\.svg/,
          use: {
            loader: 'svg-url-loader',
            options: {}
          }
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
      new HappyPack({
        id: 'ts',
        threads: 4,
        loaders: [
          {
            path: 'ts-loader',
            query: { happyPackMode: true }
          }
        ]
      }),
      new webpack.DefinePlugin(env.stringified),
      isDevelopment &&
        new WebpackBar({
          color: isWeb ? '#f56be2' : '#c065f4',
          name: isWeb ? 'client' : 'server'
        }),
      isAnalyse && new BundleAnalyzerPlugin(),
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
      new ForkTsCheckerWebpackPlugin(),
      isDevelopment && new webpack.WatchIgnorePlugin([paths.appManifest])
    ])
  };
  /*   config.optimization = config.optimization || {};
  config.optimization.noEmitOnErrors = isProduction;
  if (isDevelopment) {
    // As suggested by Microsoft's Outlook team, these optimizations
    // crank up Webpack x TypeScript perf.
    // @see https://medium.com/@kenneth_chau/speeding-up-webpack-typescript-incremental-builds-by-7x-3912ba4c1d15
    config.output.pathinfo = false;
    config.optimization = {
      ...config.optimization,
      ...{
        removeAvailableModules: false,
        removeEmptyChunks: false,
        splitChunks: false
      }
    };
  } */
  return config;
};
module.exports = { configureCommon, getEnvironment, getEnvVariables };
