import webpack from 'webpack';
import path from 'path';
import merge from 'webpack-merge';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { DevServerConfig } from 'src/types/config';
import { configureCommon } from './common';
import { paths } from '../config/paths';
import fs from 'fs';
import InlineChunkHtmlPlugin from 'react-dev-utils/InlineChunkHtmlPlugin';
import WatchMissingNodeModulesPlugin from 'react-dev-utils/WatchMissingNodeModulesPlugin';
import InterpolateHtmlPlugin from 'react-dev-utils/InterpolateHtmlPlugin';
import { getCommitHash } from '../scripts/git';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import ManifestPlugin from 'webpack-manifest-plugin';
import { Configuration } from 'webpack';
import { getUrlParts } from './getUrlParts';
import { getEnvironment } from './getEnvironment';
import { createDevServer } from './loaders/createDevServer';
import { createWebpackOptimisation } from './optimisation/createWebpackOptimisation';
import { assert } from '@cutting/util';
const LoadableWebpackPlugin = require('@loadable/webpack-plugin');
const ModuleNotFoundPlugin = require('react-dev-utils/ModuleNotFoundPlugin');
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin');

const isProfilerEnabled = () => process.argv.includes('--profile');

export const configure = (options: DevServerConfig): Configuration => {
  const { entries, publicDir, proxy, devServer, isStaticBuild, publicPath = '/' } = options;
  const { isDevelopment, isProduction } = getEnvironment();
  const { protocol, host, port, sockPort, sockHost, sockPath } = getUrlParts();

  // TODO: get rid of mutation
  options.publicUrl = publicPath.length > 1 && publicPath.substr(-1) === '/' ? publicPath.slice(0, -1) : publicPath;
  options.isNode = false;
  options.isWeb = true;

  const ssrBuild = !isStaticBuild;

  const common = configureCommon(options);

  const polyfills = ['core-js/stable', 'regenerator-runtime/runtime', 'whatwg-fetch'];

  const iter = typeof entries === 'string' || Array.isArray(entries) ? { client: entries } : entries;

  const finalEntries = Object.keys(iter).reduce((acc, key) => {
    const entryPoints = Array.isArray(iter[key]) ? iter[key] : [iter[key]];

    acc[key] = [...polyfills, ...entryPoints];

    return acc;
  }, {});

  const commitHash = getCommitHash();

  const template = publicDir ? path.join(publicDir, 'index.html') : 'public/index.html';

  const templateExists = fs.existsSync(template);

  const config: Configuration = merge(common, {
    name: 'client',
    target: 'web',
    entry: finalEntries,
    devServer: isDevelopment ? createDevServer({ protocol, host, sockPort, sockHost, sockPath, proxy }) : {},
    output: {
      path: isStaticBuild ? paths.appBuild : paths.appBuildPublic,
      publicPath: isDevelopment ? `${protocol}://${host}:${port}/` : '/',
      pathinfo: isDevelopment,
      filename: isProduction ? 'static/js/[name].[chunkhash:8].js' : 'static/js/bundle.js',
      chunkFilename: isProduction ? 'static/js/[name].[chunkhash:8].chunk.js' : 'static/js/[name].chunk.js',
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
    assert(config.optimization, 'No optimization in config');
    config.optimization = createWebpackOptimisation({ optimization: config.optimization!, isDevelopment, ssrBuild });
  }

  return config;
};
