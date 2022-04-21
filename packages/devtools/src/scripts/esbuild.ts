import { build, analyzeMetafile } from 'esbuild';
import { paths } from '../config/paths';
import { consolidateBuildConfigs } from './consolidateBuildConfigs';
import { nodeExternalsPlugin } from 'esbuild-node-externals';
import { assert } from 'assert-ts';
import logger from './logger';
import type { CommonOptions } from 'esbuild';
import path from 'path';
// import { emptyBuildDir } from './empty-build-dir';
import { vanillaExtractPlugin } from '@vanilla-extract/esbuild-plugin';
import { copyAssets } from './copy-assets';
import fs from 'fs';
import { createCommand } from 'commander';
import { emptyBuildDir } from './empty-build-dir';

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
  format,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  env,
  analyze,
}: {
  packageName: 'string';
  format: ModuleFormat;
  env: 'development' | 'production';
  analyze: boolean;
}): Promise<void> {
  const entryPoints =
    typeof buildConfig.client.entries === 'string' ? [buildConfig.client.entries] : buildConfig.client.entries;

  assert(Array.isArray(entryPoints), `build config entries needs to be a string array`);

  const fileName = `index.js`;
  const outdir = path.join(paths.appBuild, format === 'iife' ? 'umd' : format);
  const outfile = path.join(outdir, fileName);

  const reactShimPath = path.resolve(__dirname, '..', '..', 'react-shim.js');

  if (!fs.existsSync(reactShimPath)) {
    throw new Error(`no reactShim at ${reactShimPath}`);
  }

  const result = await build({
    entryPoints,
    outfile: format !== 'esm' ? outfile : undefined,
    outdir: format === 'esm' ? outdir : undefined,
    bundle: true,
    minify: true,
    platform: 'browser',
    sourcemap: true,
    format,
    target: ['es2020', 'chrome73', 'firefox67', 'safari12', 'edge18', 'node16'],
    treeShaking: true,
    allowOverwrite: true,
    inject: [path.resolve(__dirname, '..', '..', 'react-shim.js')],
    tsconfig: paths.tsConfigProduction,
    jsx: 'transform',
    logLevel: 'debug',
    color: true,
    mainFields: ['module', 'main'],
    splitting: format === 'esm',
    metafile: analyze,
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

  if (analyze) {
    assert(!!result.metafile, `no metafile in esbuild result`);
    const text = await analyzeMetafile(result.metafile, {
      color: true,
      verbose: false,
    });

    console.log(text);
  }
}

const buildPackage = async ({ analyze = false }: { analyze: boolean }) => {
  emptyBuildDir();

  copyAssets();

  const { default: pkg } = await import(paths.appPackageJson);

  const packageName = pkg.name;

  const configs: { format: ModuleFormat; env: 'development' | 'production' }[] = [
    { format: 'iife', env: 'production' },
    { format: 'cjs', env: 'production' },
    { format: 'esm', env: 'production' },
  ];

  logger.info(`Generating ${packageName} bundle.`);

  for (const { format, env } of configs) {
    await bundle({ packageName, format, env, analyze });
  }
};

const program = createCommand('exbuild');

program
  .description('execute an esbuild build')
  .option('-a, --analyze', 'analyze the bundle', false)
  .parse(process.argv)
  .action(async function ({ analyze }) {
    try {
      await buildPackage({ analyze });

      logger.done('finished building');
    } catch (err) {
      logger.error(err);
      process.exit(1);
    }
  })
  .parse(process.argv);
