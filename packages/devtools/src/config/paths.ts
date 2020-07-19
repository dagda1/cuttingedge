import path from 'path';
import fs from 'fs';

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = (relativePath: string) => path.resolve(appDirectory, relativePath);

const DefaultBuildDir = 'dist';

const getPublicUrlOrPath = require('react-dev-utils/getPublicUrlOrPath');

const publicUrlOrPath = getPublicUrlOrPath(
  process.env.NODE_ENV === 'development',
  require(resolveApp('package.json')).homepage,
  process.env.PUBLIC_URL,
);

const resolveOwn = (relativePath: string) => path.resolve(__dirname, '..', relativePath);

const requireRelative = (relativePath: string) => path.resolve(__dirname, relativePath);

const nodePaths = (process.env.NODE_PATH || '')
  .split(process.platform === 'win32' ? ';' : ':')
  .filter(Boolean)
  .filter((folder) => !path.isAbsolute(folder))
  .map(resolveApp);

const resolvedNodeModules = ['../node_modules', './node_modules']
  .filter((m) => fs.existsSync(m))
  .map((m) => path.join(process.cwd(), m));

const libPackages = [
  'packages/devtools',
  'packages/eslint-config',
  'packages/useful-types',
  'packages/util',
  'packages/hooks',
  'packages/use-abort',
  'packages/component-library',
  'packages/connected-components',
  'packages/use-shortcuts',
  'packages/react-typed-mousetrap',
  'packages/graphql-swagger',
].map((dep) => path.resolve(process.cwd(), dep));

const webAppPackages = ['packages/website'].map((dep) => path.resolve(process.cwd(), dep));

const tsConfigPath = resolveApp('tsconfig.json');

const tsConfig = fs.existsSync(tsConfigPath)
  ? (require(tsConfigPath) as { compilerOptions: { outDir?: string } })
  : { compilerOptions: { outDir: undefined } };

const outDir = tsConfig.compilerOptions?.outDir || DefaultBuildDir;

const appBuild = outDir ? resolveApp(outDir) : resolveApp(DefaultBuildDir);

export const paths = {
  dotenv: resolveApp('.env'),
  appPath: resolveApp('.'),
  appBuild,
  appBuildPublic: path.join(appBuild, 'public'),
  appManifest: path.join(appBuild, 'loadable-stats.json'),
  appPublic: resolveApp('public'),
  appNodeModules: resolveApp('node_modules'),
  appSrc: resolveApp('src'),
  appPackageJson: resolveApp('package.json'),
  appServerIndexJs: resolveApp('src'),
  appClientIndexJs: resolveApp('src/client'),
  appSrcIndexJs: './src',
  ownPath: resolveOwn('.'),
  appHtml: resolveApp('public/index.html'),
  nodePaths: nodePaths,
  ownNodeModules: resolveOwn('node_modules'),
  jsBuildConfigPath: requireRelative('./build.config.js'),
  localBuildConfig: resolveApp('./build.config.js'),
  resolvedNodeModules,
  tsConfig: tsConfigPath,
  devDir: resolveApp('demo'),
  devDirPublic: resolveApp('demo/public'),
  libPackages,
  webAppPackages,
  allPackages: [...libPackages, ...webAppPackages],
  defaultBuildConfigPath: path.join(__dirname, './build.config.js'),
  proxySetup: resolveApp('setupProxy.js'),
  tranlationsDir: resolveApp('src/translations'),
  publicUrlOrPath,
  eslintConfig: resolveApp('./.eslintrc.json'),
  ossIndex: resolveApp('ossindex'),
  jestConfig: path.join(__dirname, '../jest/jest.config.js'),
};
