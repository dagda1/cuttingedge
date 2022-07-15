import { merge } from 'webpack-merge';
import type { Configuration } from 'webpack';
import webpack from 'webpack';
import type { NodeBuildConfig } from '../types/config';
import nodeExternals from 'webpack-node-externals';
import { paths } from '../config/paths.js';
import WriteFilePlugin from 'write-file-webpack-plugin';
import { configureCommon } from './common.js';
import { getEnvironment } from './getEnvironment.js';
import { isPlugin } from './guards.js';
import type { DeepPartial } from '../types/deepPartial';

const getExternals = () => {
  return [
    nodeExternals(),
    nodeExternals({
      allowlist: [/^@cutting/].filter((x) => x),
    }),
  ];
};

export const configure = (options: NodeBuildConfig, overrides: DeepPartial<Configuration> = {}): Configuration => {
  const common = configureCommon({ ...options, isWeb: false }, overrides);

  const { isProduction } = getEnvironment();

  const entries = Array.isArray(options.entries) ? options.entries : [options.entries];

  const config: Configuration = merge(common, {
    name: 'api',
    target: 'node',
    externals: getExternals(),
    entry: entries,
    output: {
      path: paths.appBuild,
      filename: 'index.cjs',
    },
    plugins: [
      new WriteFilePlugin(),
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 1,
      }),
      options.hasShebang && new webpack.BannerPlugin({ banner: '#!/usr/bin/env node', raw: true }),
    ].filter(isPlugin),
    optimization: {
      concatenateModules: isProduction,
    },
  });

  return config;
};
