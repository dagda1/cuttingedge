/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Configuration } from 'webpack';
import type { ServerBuildConfig } from '../types/config';
import { merge } from 'webpack-merge';
import webpack from 'webpack';
import nodeExternals from 'webpack-node-externals';
import { paths } from '../config/paths.js';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import StartServerPlugin from 'razzle-start-server-webpack-plugin';
import { configureCommon } from './common.js';
import { getEnvironment } from './getEnvironment.js';
import { isPlugin } from './guards.js';
import { getUrlParts } from './getUrlParts.js';
import type { DeepPartial } from '../types/deepPartial.js';

const getExternals = function () {
  return [
    nodeExternals({
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      importType: 'module' as any,
      allowlist: [
        /\.(eot|woff|woff2|ttf|otf)$/,
        /\.(svg|png|jpg|jpeg|gif|ico)$/,
        /\.(mp4|mp3|ogg|swf|webp)$/,
        /\.(css|scss|sass|sss|less)$/,
        /\.css.ts$/,
        /^mathjax-full/,
        /^@babel/,
        /^@cutting/,
        /^@vanilla-extract/,
        /^@capsizecss/,
        /^react-router-dom/,
      ],
      modulesDir: paths.ownNodeModules,
      additionalModuleDirs: [paths.monorepoNodeModules],
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
    externals: getExternals(),
    entry: entries,
    stats: 'verbose',
    experiments: {
      outputModule: true,
      topLevelAwait: true,
    },
    output: {
      path: paths.appBuild,
      filename: options.filename,
      publicPath,
      module: true,
      libraryTarget: 'module',
      library: {
        type: 'module',
      },
      chunkLoading: 'import',
      chunkFormat: 'module',
      environment: {
        const: true,
        destructuring: true,
        forOf: true,
        module: true,
        templateLiteral: true,
        arrowFunction: true,
      },
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
    },
  });

  return config;
};
