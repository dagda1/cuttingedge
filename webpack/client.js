const merge = require('webpack-merge');
const webpack = require('webpack');
const path = require('path');
const { CheckerPlugin } = require('awesome-typescript-loader');
const { prepareUrls } = require('react-dev-utils/WebpackDevServerUtils');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const postcssOptions = require('./postcssOptions');
const getLocalIdent = require('./getLocalIdent');
const StatsWebpackPlugin = require('stats-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const { filter } = require('lodash');
const { configureCommon, getEnvironment } = require('./common');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const reStyle = /\.(css|scss)$/;
const reImage = /\.(bmp|gif|jpe?g|png|svg)$/;

function getUrlParts() {
  const port = parseInt(process.env.PORT, 10) || 3000;
  const protocol = process.env.HTTPS === 'true' ? 'https' : 'http';
  const host = process.env.HOST || '0.0.0.0';
  const urls = prepareUrls(protocol, host, port);

  return {
    port,
    protocol,
    host,
    urls
  };
}

const configure = options => {
  const { entries, publicDir, proxy, devServer } = options;
  const { protocol, host, port } = getUrlParts();

  options.isNode = false;

  const { isStaticBuild } = options;
  const ssrBuild = !isStaticBuild;

  const { isDevelopment, isProduction } = getEnvironment();

  const common = configureCommon(options);

  const entryPoints = Array.isArray(entries) ? entries : [entries];

  const config = merge(common, {
    name: 'client',
    target: 'web',
    entry: isDevelopment ? ['webpack-hot-middleware/client', ...entryPoints] : entryPoints,
    devtool: isDevelopment && 'cheap-module-source-map',
    devServer: devServer
      ? {
          inline: true,
          port,
          headers: { 'Access-Control-Allow-Origin': '*' },
          disableHostCheck: true,
          contentBase: publicDir || path.resolve('public'),
          hot: true,
          publicPath: '/',
          watchOptions: { ignored: /node_modules/ },
          historyApiFallback: { disableDotRule: true },
          https: protocol === 'https',
          host,
          proxy
        }
      : {},
    output: {
      filename: `static/js/[name].[${isProduction ? 'chunkhash' : 'hash'}:8].js`,
      chunkFilename: `static/js/[name].[${isProduction ? 'chunkhash' : 'hash'}:8].chunk.js`,
      devtoolModuleFilenameTemplate: info => path.resolve(info.absoluteResourcePath),
      publicPath: '/'
    },
    module: {
      rules: [
        {
          test: /\.(css|scss|sass)$/,
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
      ]
    },
    plugins: filter([
      isDevelopment && new webpack.HotModuleReplacementPlugin({ multiStep: true }),
      ssrBuild && isProduction && new ExtractTextPlugin('static/css/[name].[md5:contenthash:hex:20].css'),
      isProduction && ssrBuild && new StatsWebpackPlugin('stats.json'),
      devServer &&
        new HtmlWebpackPlugin({
          inject: true,
          template: publicDir ? path.join(publicDir, 'index.html') : 'public/index.html',
          isProduction: isProduction && {
            removeComments: true,
            collapseWhitespace: true,
            removeRedundantAttributes: true,
            useShortDoctype: true,
            removeEmptyAttributes: true,
            removeStyleLinkTypeAttributes: true,
            keepClosingSlash: true,
            minifyJS: true,
            minifyCSS: true,
            minifyURLs: true
          }
        })
    ]),
    node: {
      fs: 'empty',
      net: 'empty',
      tls: 'empty'
    }
  });

  if (isProduction) {
    config.optimization = {
      minimize: true,
      minimizer: [
        new UglifyJsPlugin({
          uglifyOptions: {
            parse: {
              // we want uglify-js to parse ecma 8 code. However, we don't want it
              // to apply any minfication steps that turns valid ecma 5 code
              // into invalid ecma 5 code. This is why the 'compress' and 'output'
              // sections only apply transformations that are ecma 5 safe
              // https://github.com/facebook/create-react-app/pull/4234
              ecma: 8
            },
            compress: {
              ecma: 5,
              warnings: false,
              // Disabled because of an issue with Uglify breaking seemingly valid code:
              // https://github.com/facebook/create-react-app/issues/2376
              // Pending further investigation:
              // https://github.com/mishoo/UglifyJS2/issues/2011
              comparisons: false
            },
            mangle: {
              safari10: true
            },
            output: {
              ecma: 5,
              comments: false,
              // Turned on because emoji and regex is not minified properly using default
              // https://github.com/facebook/create-react-app/issues/2488
              ascii_only: true
            }
          },
          parallel: true,
          cache: true,
          sourceMap: true
        })
      ]
      // @todo automatic vendor bundle
      // Automatically split vendor and commons
      // https://twitter.com/wSokra/status/969633336732905474
      // splitChunks: {
      //   chunks: 'all',
      //   minSize: 30000,
      //   minChunks: 1,
      //   maxAsyncRequests: 5,
      //   maxInitialRequests: 3,
      //   name: true,
      //   cacheGroups: {
      //     commons: {
      //       test: /[\\/]node_modules[\\/]/,
      //       name: 'vendor',
      //       chunks: 'all',
      //     },
      //     main: {
      //       chunks: 'all',
      //       minChunks: 2,
      //       reuseExistingChunk: true,
      //       enforce: true,
      //     },
      //   },
      // },
      // Keep the runtime chunk seperated to enable long term caching
      // https://twitter.com/wSokra/status/969679223278505985
      // runtimeChunk: true,
    };
  }

  return config;
};

module.exports = { configure, getUrlParts };
