import { build } from 'esbuild';
import { paths } from '../config/paths';
import { consolidateBuildConfigs } from './consolidateBuildConfigs';
import { nodeExternalsPlugin } from 'esbuild-node-externals';
import { assert } from 'assert-ts';
import { safePackageName } from '../rollup/helpers';
import logger from './logger';
import { CommonOptions } from 'esbuild';
import path from 'path';
import { emptyBuildDir } from './empty-build-dir';
import { copyPublicFolder } from './utils/copy-public-folder';
import { vanillaExtractPlugin } from '@vanilla-extract/esbuild-plugin';

const buildConfig = consolidateBuildConfigs();

type ModuleFormat = Required<Pick<CommonOptions, 'format'>>['format'];

const postcss = require('postcss');
const autoprefixer = require('autoprefixer');

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function processCss(css: any) {
  const result = await postcss([autoprefixer]).process(css, {
    from: undefined /* suppress source map warning */,
  });

  return result.css;
}

async function bundle({
  packageName,
  format,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  env,
}: {
  packageName: 'string';
  format: ModuleFormat;
  env: 'development' | 'production';
}): Promise<void> {
  assert(Array.isArray(buildConfig.client.entries), `build config entries needs to be a string array`);

  const pkgName = safePackageName(packageName);
  const fileName = `${pkgName}.${format === 'iife' ? 'umd' : format}.js`;
  const outfile = path.join(paths.appBuild, format === 'iife' ? 'umd' : format, fileName);

  logger.info(`writing ${path.basename(outfile)} for ${packageName}`);

  await build({
    entryPoints: buildConfig.client.entries,
    outfile,
    bundle: true,
    // minify: env === 'production',
    minify: false,
    platform: 'node',
    sourcemap: true,
    format,
    target: 'node14',
    treeShaking: true,
    allowOverwrite: false,
    tsconfig: paths.tsConfigProduction,
    jsx: 'preserve',
    logLevel: 'warning',
    color: true,
    plugins: [
      nodeExternalsPlugin({
        packagePath: paths.appPackageJson,
      }),
      vanillaExtractPlugin({
        processCss,
      }),
    ],
  }).catch((err) => {
    console.error(err);
    process.exit(1);
  });
}

const buildPackage = async () => {
  emptyBuildDir();

  copyPublicFolder();

  const { default: pkg } = await import(paths.appPackageJson);

  const packageName = pkg.name;

  const configs: { format: ModuleFormat; env: 'development' | 'production' }[] = [
    { format: 'iife', env: 'production' },
    { format: 'cjs', env: 'production' },
    { format: 'esm', env: 'production' },
  ];

  logger.info(`Generating ${packageName} bundle.`);

  for (const { format, env } of configs) {
    await bundle({ packageName, format, env });
  }
};

buildPackage();
