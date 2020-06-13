import { BuildConfig } from 'src/types/config';
import { paths } from './paths';

export const config: BuildConfig = {
  client: {
    entries: paths.appClientIndexJs,
    hotReloading: true,
    publicPath: '/',
  },
  server: {
    entries: paths.appServerIndexJs,
    filename: 'server.js',
    bail: true,
    progress: true,
  },
  ts: {
    tsconfig: paths.tsConfig,
    src: ['src/**/*.ts', 'src/**/*.tsx'],
    options: {
      verbose: true,
      outDir: 'dist',
    },
  },
  node: {
    entries: paths.appSrc,
    filename: 'index.js',
    externals: [],
  },
  devServer: {
    entries: paths.appSrc,
    devServer: true,
    isStaticBuild: true,
    publicDir: paths.appPublic,
    publicPath: '/',
    typescriptOptions: {},
  },
};
