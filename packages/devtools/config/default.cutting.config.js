const path = require('path');
const paths = require('../config/paths');

const rootDir = process.cwd();

module.exports = {
  client: {
    entries: paths.appClientIndexJs,
    isStaticBuild: false,
    hotReloading: true
  },
  server: {
    entries: paths.appServerIndexJs,
    filename: 'server.js',
    bail: true,
    progress: true
  },
  ts: {
    tsconfig: path.join(rootDir, 'tsconfig.json'),
    src: ['src/**/*.ts', 'src/**/*.tsx', '!node_modules/**'],
    options: {
      verbose: true,
      outDir: paths.appBuildDirName
    }
  },
  node: {
    entries: paths.appSrc,
    filename: 'index.js'
  },
  devServer: {
    entries: path.join(rootDir, './dev'),
    devServer: true,
    isStaticBuild: true,
    publicDir: path.join(process.cwd(), 'dev/public'),
    typescriptOptions: {
      configFile: path.join(rootDir, './tsconfig.json'),
      compilerOptions: {
        rootDir: '.',
        declaration: false
      },
      transpileOnly: true,
      experimentalWatchApi: true
    }
  }
};
