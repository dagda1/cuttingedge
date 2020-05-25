/* eslint-disable @typescript-eslint/explicit-function-return-type */
'use strict';

const path = require('path');
const fs = require('fs');
const url = require('url');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath);

const envPublicUrl = process.env.PUBLIC_URL;

function ensureSlash(path, needsSlash) {
  const hasSlash = path.endsWith('/');
  if (hasSlash && !needsSlash) {
    return path.substr(path, path.length - 1);
  } else if (!hasSlash && needsSlash) {
    return `${path}/`;
  } else {
    return path;
  }
}

const getPublicUrlOrPath = require('react-dev-utils/getPublicUrlOrPath');

const publicUrlOrPath = getPublicUrlOrPath(
  process.env.NODE_ENV === 'development',
  require(resolveApp('package.json')).homepage,
  process.env.PUBLIC_URL,
);

const resolveOwn = (relativePath) => path.resolve(__dirname, '..', relativePath);

const requireRelative = (relativePath) => path.resolve(__dirname, relativePath);

const nodePaths = (process.env.NODE_PATH || '')
  .split(process.platform === 'win32' ? ';' : ':')
  .filter(Boolean)
  .filter((folder) => !path.isAbsolute(folder))
  .map(resolveApp);

const resolvedNodeModules = ['../node_modules', './node_modules'].filter((m) => fs.existsSync(m)).map((m) => path.join(process.cwd(), m));

const libPackages = [
  'packages/eslint-config',
  'packages/devtools',
  'packages/useful-types',
  'packages/util',
  'packages/hooks',
  'packages/use-abort',
  'packages/component-library',
  'packages/connected-components',
  'packages/use-shortcuts',
  'packages/react-typed-mousetrap',
].map((dep) => path.resolve(process.cwd(), dep));

const webAppPackages = ['packages/website'].map((dep) => path.resolve(process.cwd(), dep));

const appBuildDirName = 'dist';

module.exports = {
  dotenv: resolveApp('.env'),
  appPath: resolveApp('.'),
  appBuild: resolveApp(`${appBuildDirName}`),
  appBuildPublic: resolveApp(`${appBuildDirName}/public`),
  appManifest: resolveApp(`${appBuildDirName}/loadable-stats.json`),
  appPublic: resolveApp('public'),
  appNodeModules: resolveApp('node_modules'),
  appSrc: resolveApp('src'),
  appPackageJson: resolveApp('package.json'),
  appServerIndexJs: resolveApp('src'),
  appClientIndexJs: resolveApp('src/client'),
  appSrcIndexJs: './src',
  testsSetup: resolveApp('src/setupTests.js'),
  appHtml: resolveApp('public/index.html'),
  appFavIco: resolveApp('public/favicon.ico'),
  nodePaths: nodePaths,
  ownPath: resolveOwn('.'),
  ownNodeModules: resolveOwn('node_modules'),
  jsBuildConfigPath: requireRelative('./build.config.js'),
  localBuildConfig: resolveApp('./build.config.js'),
  resolvedNodeModules,
  tsConfig: resolveApp('tsconfig.json'),
  devDir: resolveApp('demo'),
  devDirPublic: resolveApp('demo/public'),
  esLintConfig: resolveApp('.eslintrc.json'),
  libPackages,
  webAppPackages,
  allPackages: [...libPackages, ...webAppPackages],
  defaultBuildConfigPath: path.join(__dirname, './build.config.js'),
  publicUrlOrPath,
};
