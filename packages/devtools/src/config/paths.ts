import type { ParsedCommandLine } from 'typescript';
import path from 'path';
import fs from 'fs';
import getPublicUrlOrPath from 'react-dev-utils/getPublicUrlOrPath';

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = (relativePath: string) => path.resolve(appDirectory, relativePath);

const DefaultBuildDir = 'dist';

const publicUrlOrPath = getPublicUrlOrPath(
  process.env.NODE_ENV === 'development',
  undefined,
  process.env.PUBLIC_URL as string,
);

const resolveOwn = (relativePath: string) => path.resolve(__dirname, '..', relativePath);

const nodePaths = (process.env.NODE_PATH || '')
  .split(process.platform === 'win32' ? ';' : ':')
  .filter(Boolean)
  .filter((folder) => !path.isAbsolute(folder))
  .map(resolveApp);

const tsConfigPath = resolveApp('tsconfig.json');
const testTsConfig = (() => {
  try {
    return require.resolve('@cutting/tsconfig/tsconfig.test.json');
  } catch (e) {
    return 'N/A';
  }
})();
const tsConfigProductionPath = resolveApp('tsconfig.dist.json');

type OurCompilerOptions = {
  compilerOptions: Partial<Pick<ParsedCommandLine['options'], 'outDir'> & { module?: string }>;
  references?: ParsedCommandLine['projectReferences'];
};

const tsConfig: OurCompilerOptions = fs.existsSync(tsConfigPath)
  ? (require(tsConfigPath) as OurCompilerOptions)
  : { compilerOptions: { outDir: undefined, module: undefined } };

const tsConfigProduction = fs.existsSync(tsConfigProductionPath) ? tsConfigProductionPath : tsConfigPath;

const outDir = tsConfig.compilerOptions?.outDir || DefaultBuildDir;
const isCommonJs = tsConfig.compilerOptions?.module?.toLowerCase() === 'commonjs';

const appBuild = outDir ? resolveApp(outDir) : resolveApp(DefaultBuildDir);

const DevFolder = 'demo';

const monorepoNodeModules = path.join(__dirname, '..', '..', '..', '..', 'node_modules');
const pnpmPath = path.join(monorepoNodeModules, '.pnpm');

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
  localBuildConfig: resolveApp('./build.config.js'),
  tsConfig: tsConfigPath,
  tsConfigProduction,
  testTsConfig,
  devDir: resolveApp(DevFolder),
  devDirPublic: resolveApp(`${DevFolder}/public`),
  defaultBuildConfigPath: path.join(__dirname, './build.config.js'),
  proxySetup: resolveApp('setupProxy.js'),
  tranlationsDir: resolveApp('src/translations'),
  publicUrlOrPath,
  gitDir: resolveApp('./.git'),
  eslintConfig: resolveApp('./.eslintrc.json'),
  gitIgnore: resolveApp('./.gitignore'),
  ossIndex: resolveApp('ossindex'),
  ownJestConfig: resolveApp('jest.config.js'),
  jestConfig: path.join(__dirname, '../jest/jest.config.js'),
  projectReferences: !!tsConfig.references,
  isCommonJS: isCommonJs,
  monorepoNodeModules,
  pnpmPath,
};
