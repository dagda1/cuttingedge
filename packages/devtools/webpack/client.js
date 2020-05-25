const merge = require('webpack-merge');
const webpack = require('webpack');
const path = require('path');
const { prepareUrls } = require('react-dev-utils/WebpackDevServerUtils');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { configureCommon, getEnvironment } = require('./common');
const errorOverlayMiddleware = require('react-dev-utils/errorOverlayMiddleware');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const paths = require('../config/paths');
const fs = require('fs');
const TerserPlugin = require('terser-webpack-plugin');
const safePostCssParser = require('postcss-safe-parser');
const InlineChunkHtmlPlugin = require('react-dev-utils/InlineChunkHtmlPlugin');
const ModuleNotFoundPlugin = require('react-dev-utils/ModuleNotFoundPlugin');
const WatchMissingNodeModulesPlugin = require('react-dev-utils/WatchMissingNodeModulesPlugin');
const evalSourceMapMiddleware = require('react-dev-utils/evalSourceMapMiddleware');
const redirectServedPath = require('react-dev-utils/redirectServedPathMiddleware');
const ignoredFiles = require('react-dev-utils/ignoredFiles');
const LoadableWebpackPlugin = require('@loadable/webpack-plugin');
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');
const { getCommitHash } = require('../scripts/git');
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

const isProfilerEnabled = () => process.argv.includes('--profile');

function getUrlParts() {
  const port = parseInt(process.env.PORT, 10);
  const protocol = process.env.HTTPS === 'true' ? 'https' : 'http';
  const host = process.env.HOST || 'localhost';
  const urls = prepareUrls(protocol, host, port);

  return {
    port,
    protocol,
    host,
    urls,
  };
}

const configure = (options) => {
  const { entries, publicDir, proxy, devServer, isStaticBuild, publicPath = '/' } = options;
  options.publicUrl = publicPath.length > 1 && publicPath.substr(-1) === '/' ? publicPath.slice(0, -1) : publicPath;
  const { protocol, host, port } = getUrlParts();

  options.isNode = false;
  options.isWeb = true;

  const ssrBuild = !isStaticBuild;

  const { isDevelopment, isProduction } = getEnvironment();

  const common = configureCommon(options);

  const devServerPort = isProduction || isStaticBuild ? port : parseInt(port, 10) + 1;

  const sockPort = process.env.WDS_SOCKET_PORT || devServerPort;
  const sockHost = process.env.WDS_SOCKET_HOST;
  const sockPath = process.env.WDS_SOCKET_PATH;

  let finalEntries;

  const polyfills = ['core-js/stable', 'regenerator-runtime/runtime', 'whatwg-fetch'];

  const webpackHotDevClient = require.resolve('../scripts/webpackHotDevClient');

  if (isStaticBuild) {
    const entryPoints = Array.isArray(entries) ? entries : [entries];

    finalEntries = isDevelopment ? [webpackHotDevClient, ...polyfills, ...entryPoints] : [...polyfills, ...entryPoints];
  }

  if (ssrBuild) {
    const enumer = typeof entries === 'string' || Array.isArray(entries) ? { client: entries } : entries;
    finalEntries = Object.keys(enumer).reduce((acc, key) => {
      const entryPoints = Array.isArray(enumer[key]) ? enumer[key] : [enumer[key]];

      acc[key] =
        isDevelopment && options.hotReloading ? [webpackHotDevClient, ...polyfills, ...entryPoints] : [...polyfills, ...entryPoints];

      return acc;
    }, {});
  }

  const commitHash = getCommitHash();

  const template = publicDir ? path.join(publicDir, 'index.html') : 'public/index.html';

  const templateExists = fs.existsSync(template);

  const config = merge(common, {
    name: 'client',
    target: 'web',
    entry: finalEntries,
    devServer: isDevelopment
      ? {
          disableHostCheck: true,
          clientLogLevel: 'none',
          contentBase: paths.appPublic,
          compress: true,
          liveReload: false,
          headers: {
            'Access-Control-Allow-Origin': '*',
          },
          historyApiFallback: {
            disableDotRule: true,
          },
          host,
          https: protocol === 'https',
          watchContentBase: true,
          hot: true,
          noInfo: true,
          overlay: false,
          transportMode: 'ws',
          injectClient: false,
          sockHost,
          sockPath,
          sockPort,
          quiet: true,
          publicPath: paths.publicUrlOrPath.slice(0, -1),
          watchOptions: {
            ignored: ignoredFiles(paths.appSrc),
          },
          before(app, server) {
            if (fs.existsSync(paths.proxySetup)) {
              require(paths.proxySetup)(app);
            }

            app.use(evalSourceMapMiddleware(server));
            app.use(errorOverlayMiddleware());
          },
          after(app) {
            app.use(redirectServedPath(paths.publicUrlOrPath));
          },
          proxy,
        }
      : {},
    output: {
      path: isStaticBuild ? paths.appBuild : paths.appBuildPublic,
      publicPath: isDevelopment ? `${protocol}://${host}:${devServerPort}/` : '/',
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
      isProduction && ssrBuild && new InlineChunkHtmlPlugin(HtmlWebpackPlugin, [/runtime~.+[.]js/]),
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
      isDevelopment && new ManifestPlugin({ fileName: 'manifest.json' }),
      new ModuleNotFoundPlugin(paths.appPath),
      isDevelopment && new WatchMissingNodeModulesPlugin(paths.appNodeModules),
      isProfilerEnabled() && new webpack.debug.ProfilingPlugin(),
      isDevelopment &&
        new ReactRefreshWebpackPlugin({
          overlay: {
            sockPort: Number(sockPort),
          },
        }),
    ].filter(Boolean),
  });

  if (isProduction) {
    config.optimization = {
      ...config.optimization,
      ...{
        minimize: true,
        minimizer: [
          new TerserPlugin({
            terserOptions: {
              parse: {
                ecma: 8,
              },
              compress: {
                ecma: 5,
                warnings: false,
                comparisons: false,
                inline: 2,
                dead_code: true,
              },
              mangle: {
                safari10: true,
              },
              output: {
                ecma: 5,
                comments: 'all',
                ascii_only: true,
              },
            },
            parallel: true,
            cache: true,
            sourceMap: isDevelopment,
          }),
          new OptimizeCSSAssetsPlugin({
            cssProcessorOptions: {
              parser: safePostCssParser,
              map: isDevelopment ? { inline: false, annotation: true } : false,
            },
          }),
        ],
        splitChunks: {
          chunks: 'all',
        },
        runtimeChunk: isStaticBuild,
      },
    };
  }

  return config;
};

module.exports = { configure, getUrlParts };
