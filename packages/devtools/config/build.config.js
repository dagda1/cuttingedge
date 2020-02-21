const path = require('path');
const paths = require('./paths');

const rootDir = process.cwd();

module.exports = {
  client: {
    entries: paths.appClientIndexJs,
    hotReloading: true
  },
  server: {
    entries: paths.appServerIndexJs,
    filename: 'server.js',
    progress: true
  },
  ts: {
    tsconfig: paths.tsConfig,
    src: ['src/**/*.ts', 'src/**/*.tsx'],
    options: {
      verbose: true,
      typeRoots: [path.join(rootDir, '../node_modules/@types')],
      outDir: 'dist'
    }
  },
  node: {
    entries: paths.appSrc,
    filename: 'index.js'
  },
  devServer: {
    entries: paths.appSrc,
    devServer: true,
    isStaticBuild: true,
    publicDir: paths.appPublic,
    typescriptOptions: {}
  }
};
