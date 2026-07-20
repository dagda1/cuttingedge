import fs from 'fs';
import { readFile } from 'fs/promises';
import path from 'path';

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = (relativePath: string) => path.resolve(appDirectory, relativePath);

const DefaultBuildDir = 'dist';

const tsConfigPath = resolveApp('tsconfig.json');

const tsConfigProductionPath = resolveApp('tsconfig.dist.json');

type OurCompilerOptions = {
  compilerOptions: { outDir?: string; module?: string };
  references?: { path: string }[];
};

const tsConfig: OurCompilerOptions = fs.existsSync(tsConfigPath)
  ? JSON.parse(await readFile(tsConfigPath, 'utf8'))
  : await { compilerOptions: { outDir: undefined, module: undefined } };

const tsConfigProduction = fs.existsSync(tsConfigProductionPath) ? tsConfigProductionPath : tsConfigPath;

const outDir = tsConfig.compilerOptions?.outDir || DefaultBuildDir;

const appBuild = outDir ? resolveApp(outDir) : resolveApp(DefaultBuildDir);

export const paths = {
  appPath: resolveApp('.'),
  appBuild,
  appSrc: resolveApp('src'),
  appPackageJson: resolveApp('package.json'),
  tsConfig: tsConfigPath,
  tsConfigProduction,
  eslintConfig: resolveApp('./.eslintrc.json'),
  projectReferences: !!tsConfig.references,
};
