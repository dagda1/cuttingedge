const path = require('path');

const rootDir = process.cwd();

module.exports = {
  client: {
    entries: path.join(rootDir, 'src/client/index'),
    isStaticBuild: false
  },
  server: {
    entries: path.join(rootDir, 'src/server/index'),
    filename: 'server.js'
  },
  ts: {
    tsconfig: path.join(rootDir, 'tsconfig.json'),
    src: ['src/**/*.ts', 'src/**/*.tsx', '!node_modules/**'],
    options: {
      verbose: true,
      typeRoots: [path.join(rootDir, '../../node_modules/@types')],
      outDir: 'dist'
    }
  },
  devServer: {
    entries: path.join(rootDir, './demo'),
    devServer: true,
    isStaticBuild: true,
    publicDir: path.join(rootDir, './demo/public'),
    typescriptOptions: {
      configFileName: path.join(rootDir, './tsconfig.json'),
      rootDir: '.',
      declaration: false
    }
  }
};
