
import webpack from 'webpack';
import path from 'path';
import merge from 'webpack-merge';
import { prepareUrls } from 'react-dev-utils/WebpackDevServerUtils';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { DevServerConfig } from 'src/types/config';
import { assert } from 'console';
import { configureCommon, getEnvironment } from './common';
import errorOverlayMiddleware from 'react-dev-utils/errorOverlayMiddleware';
import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin';
import { paths } from '../config/paths';
import fs from 'fs';
import TerserPlugin from 'terser-webpack-plugin';
import safePostCssParser from 'postcss-safe-parser';
import InlineChunkHtmlPlugin from 'react-dev-utils/InlineChunkHtmlPlugin';
import WatchMissingNodeModulesPlugin from 'react-dev-utils/WatchMissingNodeModulesPlugin';
import evalSourceMapMiddleware from 'react-dev-utils/evalSourceMapMiddleware';
import redirectServedPath from 'react-dev-utils/redirectServedPathMiddleware';
import ignoredFiles from 'react-dev-utils/ignoredFiles';
import InterpolateHtmlPlugin from 'react-dev-utils/InterpolateHtmlPlugin';
import { getCommitHash } from '../scripts/git';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import ManifestPlugin from 'webpack-manifest-plugin';

const isProfilerEnabled = () => process.argv.includes('--profile');

function getUrlParts() {
  assert(!!process.env.PORT, 'no process.env.PORT set');
  const port = Number(process.env.PORT);
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

const configure = (options: DevServerConfig) => {
  const { entries, publicDir, proxy, devServer, isStaticBuild, publicPath = '/' } = { ...options };
  options.publicUrl = publicPath.length > 1 && publicPath.substr(-1) === '/' ? publicPath.slice(0, -1) : publicPath;
  const { isDevelopment, isProduction } = getEnvironment();
  const { protocol, host, port, sockPort, sockHost, sockPath } = getUrlParts({ isProduction });

  options.isNode = false;
  options.isWeb = true;

  const ssrBuild = !isStaticBuild;

  const common = configureCommon(options);

  const devServerPort = isProduction || isStaticBuild ? port : port + 1;

  const sockPort = process.env.WDS_SOCKET_PORT || devServerPort;
  const sockHost = process.env.WDS_SOCKET_HOST;
  const sockPath = process.env.WDS_SOCKET_PATH;

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
    devServer: isDevelopment ? createDevServer({ protocol, host, port, sockPort, sockHost, sockPath, proxy }) : {},
    output: {
      path: isStaticBuild ? paths.appBuild : paths.appBuildPublic,
      publicPath: isDevelopment ? `${protocol}://${host}:${port}/` : '/',
      pathinfo: isDevelopment,
      filename: isProduction ? 'static/js/[name].[chunkhash:8].js' : isDevelopment && 'static/js/bundle.js',
      chunkFilename: isProduction
        ? 'static/js/[name].[chunkhash:8].chunk.js'
        : isDevelopment && 'static/js/[name].chunk.js',
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
      isDevelopment &&
        new ReactRefreshWebpackPlugin({
          overlay: {
            sockPort: Number(sockPort),
            sockPath,
            sockHost,
            sockIntegration: 'wds',
          },
        }),
    ].filter(Boolean),
  });

  if (isProduction) {
    config.optimization = createWebpackOptimisation({ optimization: config.optimization, isDevelopment, ssrBuild });
  }

  return config;
};

