import webpack from 'webpack';
import path from 'path';
import { merge } from 'webpack-merge';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { DevServerConfig } from '../types/config';
import { configureCommon } from './common';
import { paths } from '../config/paths';
import fs from 'fs';
import InterpolateHtmlPlugin from 'react-dev-utils/InterpolateHtmlPlugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import { getUrlParts } from './getUrlParts';
import { getEnvironment } from './getEnvironment';
import { createDevServer } from './loaders/createDevServer';
import { createWebpackOptimisation } from './optimisation/createWebpackOptimisation';
import LoadableWebpackPlugin from '@loadable/webpack-plugin';
import HtmlWebpackPartialsPlugin from 'html-webpack-partials-plugin';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import ModuleNotFoundPlugin from 'react-dev-utils/ModuleNotFoundPlugin';
import type { DeepPartial } from '@cutting/util';
import { Configuration } from 'webpack';
import { getFileName } from './getFileName';

const isProfilerEnabled = () => process.argv.includes('--profile');

export const configure = (options: DevServerConfig, overrides: DeepPartial<Configuration> = {}): Configuration => {
  const { entries, publicDir, proxy, devServer, isStaticBuild } = options;
  const { isDevelopment, isProduction, commitHash } = getEnvironment();
  const ssrBuild = !isStaticBuild;
  const { protocol, publicPath, port, sockPort } = getUrlParts({ ssrBuild, isProduction });

  options.publicUrl = publicPath.length > 1 && publicPath.substr(-1) === '/' ? publicPath.slice(0, -1) : publicPath;
  options.isNode = false;
  options.isWeb = true;

  const common = configureCommon(options, overrides);

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

  const jsFile = `${getFileName({ isProduction, fileType: 'js' })}.js`;
  const jsChunkFile = `${getFileName({ isProduction, fileType: 'js' })}.js`;

  const config: Configuration = merge(common, overrides, {
    name: 'client',
    target: 'web',
    entry: finalEntries,
    devServer: isDevelopment ? createDevServer({ protocol, sockPort, proxy, port }) : {},
    output: {
      path: isStaticBuild ? paths.appBuild : paths.appBuildPublic,
      publicPath,
      pathinfo: isDevelopment,
      filename: jsFile,
      hotUpdateChunkFilename: 'static/js/[id].[hash].hot-update.js',
      hotUpdateMainFilename: 'static/js/[hash].hot-update.json',
      chunkFilename: jsChunkFile,
      library: {
        name: 'LIB',
        type: 'var',
      },
      devtoolModuleFilenameTemplate: isProduction
        ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (info: any) => path.relative(paths.appSrc, info.absoluteResourcePath).replace(/\\/g, '/')
        : // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (info: any) => path.resolve(info.absoluteResourcePath).replace(/\\/g, '/'),
    },
    plugins: [
      isDevelopment &&
        new ReactRefreshWebpackPlugin({
          overlay: {
            sockIntegration: 'wds',
            sockPort,
          },
        }),
      isDevelopment && isStaticBuild && new webpack.HotModuleReplacementPlugin(),
      ssrBuild &&
        new LoadableWebpackPlugin({
          writeToDisk: { filename: paths.appBuild },
        }),
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      isStaticBuild && new InterpolateHtmlPlugin(HtmlWebpackPlugin as any, { PUBLIC_URL: options.publicUrl }),

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
      // TODO: should not need this anymore?
      new webpack.IgnorePlugin({
        resourceRegExp: /^\.\/locale$/,
        contextRegExp: /moment$/,
      }),
      new ModuleNotFoundPlugin(paths.appPath),
      isProfilerEnabled() && new webpack.debug.ProfilingPlugin(),
    ].filter(Boolean),
    stats: {
      colors: true,
      preset: 'errors_only',
      timings: isDevelopment,
      errors: true,
    },
    infrastructureLogging: {
      level: 'verbose',
    },
  });

  config.optimization = createWebpackOptimisation({ optimization: config.optimization, isProduction });

  return config;
};
