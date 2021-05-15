import { Configuration } from 'webpack';
import { ServerBuildConfig } from '../types/config';
import { merge } from 'webpack-merge';
import webpack from 'webpack';
import nodeExternals, { AllowlistOption } from 'webpack-node-externals';
import { paths } from '../config/paths';
import StartServerPlugin from 'start-server-webpack-plugin';
import { configureCommon } from './common';
import { getEnvironment } from './getEnvironment';
import { isPlugin } from './guards';
import { getUrlParts } from './getUrlParts';
import type { DeepPartial } from '@cutting/util';

export const getExternals = function (isDevelopment: boolean): webpack.ExternalsFunctionElement[] {
  return [
    nodeExternals(),
    nodeExternals({
      modulesDir: paths.resolvedNodeModules[0],
      allowlist: [
        isDevelopment ? 'webpack/hot/poll?300' : null,
        /\.(eot|woff|woff2|ttf|otf)$/,
        /\.(svg|png|jpg|jpeg|gif|ico)$/,
        /\.(mp4|mp3|ogg|swf|webp)$/,
        /\.(css|scss|sass|sss|less)$/,
        /^mathjax3/,
        /^@babel/,
        /^@loadable/,
        /^@cutting/,
      ].filter(Boolean) as AllowlistOption[],
    }),
  ];
};

export const configure = (options: ServerBuildConfig, overrides: DeepPartial<Configuration> = {}): Configuration => {
  const common = configureCommon({ ...options, isNode: true, ssrBuild: true, isWeb: false }, overrides);

  const { isDevelopment, isProduction } = getEnvironment();

  const { publicPath } = getUrlParts({ ssrBuild: true, isProduction });

  const entries = Array.isArray(options.entries) ? options.entries : [options.entries];

  let nodeArgs;

  if (isDevelopment) {
    nodeArgs = ['-r', 'source-map-support/register'];

    // Passthrough --inspect and --inspect-brk flags (with optional [host:port] value) to node
    if (process.env.INSPECT_BRK) {
      nodeArgs.push(process.env.INSPECT_BRK);
    } else if (process.env.INSPECT) {
      nodeArgs.push(process.env.INSPECT);
    }
  }

  const config: Configuration = merge(common, overrides, {
    name: 'server',
    target: 'node',
    watch: isDevelopment,
    externals: getExternals(isDevelopment),
    entry: isDevelopment ? ['webpack/hot/poll?300', ...entries] : entries,
    output: {
      path: paths.appBuild,
      filename: options.filename,
      publicPath,
    },
    plugins: [
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 1,
      }),
      isDevelopment && new webpack.HotModuleReplacementPlugin(),
      isDevelopment &&
        new StartServerPlugin({
          name: 'server.js',
          nodeArgs,
        }),
    ].filter(isPlugin),
    optimization: {
      minimize: false,
      namedModules: true,
    },
  });

  return config;
};
