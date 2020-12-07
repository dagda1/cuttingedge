import { Options } from 'webpack';

export const stats: Options.Stats = {
  assets: false,
  children: false,
  chunks: false,
  hash: false,
  modules: false,
  publicPath: false,
  timings: false,
  version: false,
  warnings: true,
  colors: true,
  entrypoints: false,
};
