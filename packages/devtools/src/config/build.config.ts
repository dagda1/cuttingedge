import { BuildConfig } from '../types/config';
import { paths } from './paths';

const isProduction = process.env.NODE_ENV === 'production';

export const config: BuildConfig = {
  client: {
    entries: paths.appSrc,
    hotReloading: true,
    isNode: false,
  },
  server: {
    entries: paths.appServerIndexJs,
    filename: 'server.js',
    bail: true,
    ssrBuild: true,
    isNode: true,
  },
  ts: {
    tsconfig: isProduction ? paths.tsConfigProduction : paths.tsConfig,
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
    isNode: true,
    modulesDir: './node_modules',
  },
  devServer: {
    entries: paths.appSrc,
    devServer: true,
    isStaticBuild: true,
    publicDir: paths.appPublic,
  },
};
