const merge = require('webpack-merge');
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { configureCommon, getEnvironment } = require('./common');
const paths = require('../config/paths');
const fs = require('fs');
const InlineChunkHtmlPlugin = require('react-dev-utils/InlineChunkHtmlPlugin');
const ModuleNotFoundPlugin = require('react-dev-utils/ModuleNotFoundPlugin');
const WatchMissingNodeModulesPlugin = require('react-dev-utils/WatchMissingNodeModulesPlugin');
const LoadableWebpackPlugin = require('@loadable/webpack-plugin');
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');
const { getCommitHash } = require('../scripts/git');
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const { getUrlParts } = require('./getUrlParts');
const { createDevServer } = require('./createDevServer');
const { createWebpackOptimisation } = require('./optimisation/createWebpackOptimisation');

const isProfilerEnabled = () => process.argv.includes('--profile');

const configure = (options) => {
  const { entries, publicDir, proxy, devServer, isStaticBuild, publicPath = '/' } = options;
  options.publicUrl = publicPath.length > 1 && publicPath.substr(-1) === '/' ? publicPath.slice(0, -1) : publicPath;
  const { isDevelopment, isProduction } = getEnvironment();
  const { protocol, host, port, sockPort } = getUrlParts({ isProduction });

  options.isNode = false;
  options.isWeb = true;

  const ssrBuild = !isStaticBuild;

  const common = configureCommon(options);

  const polyfills = ['core-js/stable', 'regenerator-runtime/runtime', 'whatwg-fetch'];

  const webpackDevClientEntry = require.resolve('../scripts/webpackHotDevClient');

  const iter = typeof entries === 'string' || Array.isArray(entries) ? { client: entries } : entries;

  const finalEntries = Object.keys(iter).reduce((acc, key) => {
    const entryPoints = Array.isArray(iter[key]) ? iter[key] : [iter[key]];

    acc[key] = isDevelopment ? [webpackDevClientEntry, ...polyfills, ...entryPoints] : [...polyfills, ...entryPoints];

    return acc;
  }, {});

  const commitHash = getCommitHash();

  const template = publicDir ? path.join(publicDir, 'index.html') : 'public/index.html';

  const templateExists = fs.existsSync(template);

  const config = merge(common, {
    name: 'client',
    target: 'web',
    entry: finalEntries,
    devServer: isDevelopment ? createDevServer({ protocol, host, port, sockPort, proxy }) : {},
    output: {
      path: isStaticBuild ? paths.appBuild : paths.appBuildPublic,
      publicPath: isDevelopment ? `${protocol}://${host}:${port}/` : '/',
      pathinfo: isDevelopment,
      filename: isProduction ? 'static/js/[name].[chunkhash:8].js' : isDevelopment && 'static/js/bundle.js',
      chunkFilename: isProduction ? 'static/js/[name].[chunkhash:8].chunk.js' : isDevelopment && 'static/js/[name].chunk.js',
      devtoolModuleFilenameTemplate: (info) => path.resolve(info.resourcePath).replace(/\\/g, '/'),
    },

    plugins: [
      isDevelopment && new webpack.HotModuleReplacementPlugin(),
      ssrBuild &&
        new LoadableWebpackPlugin({
          writeToDisk: { filename: paths.appBuild },
        }),
      new InterpolateHtmlPlugin(HtmlWebpackPlugin, { PUBLIC_URL: options.publicUrl }),

      (devServer || (isStaticBuild && templateExists)) &&
        new HtmlWebpackPlugin({
          inject: true,
          template,
          minify: isProduction && {
            collapseWhitespace: true,
            removeRedundantAttributes: true,
            useShortDoctype: true,
            removeEmptyAttributes: true,
            removeStyleLinkTypeAttributes: true,
            keepClosingSlash: true,
            minifyJS: true,
            minifyCSS: true,
            minifyURLs: true,
          },
        }),
      new HtmlWebpackPartialsPlugin([
        {
          path: path.join(__dirname, './partial.html'),
          location: 'body',
          priority: 'low',
          options: {
            hash: `${commitHash}-${new Date().toISOString()}`,
          },
        },
      ]),
      isProduction && ssrBuild && new InlineChunkHtmlPlugin(HtmlWebpackPlugin, [/runtime-.+[.]js/]),
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
      isDevelopment && new ManifestPlugin({ fileName: 'manifest.json' }),
      new ModuleNotFoundPlugin(paths.appPath),
      isDevelopment && new WatchMissingNodeModulesPlugin(paths.appNodeModules),
      isProfilerEnabled() && new webpack.debug.ProfilingPlugin(),
      isDevelopment && new ReactRefreshWebpackPlugin(),
    ].filter(Boolean),
  });

  if (isProduction) {
    config.optimization = createWebpackOptimisation({ optimization: config.optimization, isDevelopment });
  }

  return config;
};

module.exports = { configure, getUrlParts };
