import webpack from 'webpack';
import path from 'path';
import { merge } from 'webpack-merge';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { DevServerConfig } from '../types/config';
import { configureCommon } from './common';
import { paths } from '../config/paths';
import fs from 'fs';
import InlineChunkHtmlPlugin from 'react-dev-utils/InlineChunkHtmlPlugin';
import WatchMissingNodeModulesPlugin from 'react-dev-utils/WatchMissingNodeModulesPlugin';
import InterpolateHtmlPlugin from 'react-dev-utils/InterpolateHtmlPlugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import { Configuration } from 'webpack';
import { getUrlParts } from './getUrlParts';
import { getEnvironment } from './getEnvironment';
import { createDevServer } from './loaders/createDevServer';
import { createWebpackOptimisation } from './optimisation/createWebpackOptimisation';
import LoadableWebpackPlugin from '@loadable/webpack-plugin';
import HtmlWebpackPartialsPlugin from 'html-webpack-partials-plugin';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import ModuleNotFoundPlugin from 'react-dev-utils/ModuleNotFoundPlugin';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { DuplicatesPlugin } from 'inspectpack/plugin';

const isProfilerEnabled = () => process.argv.includes('--profile');

export const configure = (options: DevServerConfig): Configuration => {
  const { entries, publicDir, proxy, devServer, isStaticBuild } = options;
  const { isDevelopment, isProduction, commitHash } = getEnvironment();
  const ssrBuild = !isStaticBuild;
  const { protocol, host, publicPath, port, sockPort } = getUrlParts({ ssrBuild, isProduction });

  options.publicUrl = publicPath.length > 1 && publicPath.substr(-1) === '/' ? publicPath.slice(0, -1) : publicPath;
  options.isNode = false;
  options.isWeb = true;

  const common = configureCommon(options);

  const polyfills = ['core-js/stable', 'regenerator-runtime/runtime', 'whatwg-fetch'];

  const iter = typeof entries === 'string' || Array.isArray(entries) ? { client: entries } : entries;

  const finalEntries = Object.keys(iter).reduce((acc, key) => {
    const value = iter[key];
    const entryPoints: string[] = typeof value === 'string' ? [value] : value;

    acc[key] = [...polyfills, ...entryPoints];

    return acc;
  }, {} as Record<string, string | string[]>);

  const template = publicDir ? path.join(publicDir, 'index.html') : 'public/index.html';

  const templateExists = fs.existsSync(template);

  const config: Configuration = merge(common, {
    name: 'client',
    target: 'web',
    entry: finalEntries,
    devServer: isDevelopment ? createDevServer({ protocol, host, sockPort, proxy, port }) : {},
    output: {
      path: isStaticBuild ? paths.appBuild : paths.appBuildPublic,
      publicPath,
      pathinfo: isDevelopment,
      filename: isProduction ? 'static/js/[name].[contenthash:8].js' : isDevelopment && 'static/js/bundle.js',
      library: 'LIB',
      libraryTarget: 'var',
      chunkFilename: isProduction
        ? 'static/js/[name].[contenthash:8].chunk.js'
        : isDevelopment && 'static/js/[name].chunk.js',

      devtoolModuleFilenameTemplate: isProduction
        ? (info) => path.relative(paths.appSrc, info.absoluteResourcePath).replace(/\\/g, '/')
        : isDevelopment && ((info) => path.resolve(info.absoluteResourcePath).replace(/\\/g, '/')),
    },

    node: {
      fs: 'empty',
      path: 'empty',
      net: 'empty',
      tls: 'empty',
    },

    plugins: [
      new DuplicatesPlugin({
        verbose: true,
      }),
      new webpack.HashedModuleIdsPlugin(),
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
            hash: commitHash,
          },
        },
      ]),
      isProduction && ssrBuild && new InlineChunkHtmlPlugin(HtmlWebpackPlugin, [/runtime-.+[.]js/]),
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
      new ModuleNotFoundPlugin(paths.appPath),
      isDevelopment && new WatchMissingNodeModulesPlugin(paths.appNodeModules),
      isProfilerEnabled() && new webpack.debug.ProfilingPlugin(),
      isDevelopment &&
        new ReactRefreshWebpackPlugin({
          overlay: {
            sockIntegration: 'wds',
            sockPort,
          },
        }),
    ].filter(Boolean),
  });

  if (isProduction) {
    config.optimization = createWebpackOptimisation({ optimization: config.optimization, isDevelopment, ssrBuild });
  }

  return config;
};
