import { build, analyzeMetafile } from 'esbuild';
import { paths } from '../config/paths.js';
import { nodeExternalsPlugin } from 'esbuild-node-externals';
import { assert } from 'assert-ts';
import logger from './logger.js';
import type { CommonOptions } from 'esbuild';
import path from 'path';
import { vanillaExtractPlugin } from '@vanilla-extract/esbuild-plugin';
import { copyAssets } from './copy-assets.js';
import fs from 'fs';
import { createCommand } from 'commander';
import { readFile } from 'fs/promises';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

type ModuleFormat = Required<Pick<CommonOptions, 'format'>>['format'];

async function bundle({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  env,
  analyze,
}: {
  packageName: 'string';
  format: ModuleFormat;
  env: 'development' | 'production';
  analyze: boolean;
}): Promise<void> {
  const entryPoints = [paths.appSrc];

  assert(Array.isArray(entryPoints), `build config entries needs to be a string array`);

  const outdir = path.join(paths.appBuild, 'esm');

  const reactShimPath = path.resolve(__dirname, '..', '..', 'react-shim.js');

  if (!fs.existsSync(reactShimPath)) {
    throw new Error(`no reactShim at ${reactShimPath}`);
  }

  const result = await build({
    entryPoints,
    outdir,
    bundle: true,
    minify: true,
    platform: 'browser',
    sourcemap: true,
    format: 'esm',
    target: ['es2020', 'chrome85', 'firefox85', 'safari14', 'edge19', 'node16'],
    treeShaking: true,
    allowOverwrite: true,
    inject: [reactShimPath],
    tsconfig: paths.tsConfigProduction,
    jsx: 'automatic',
    logLevel: 'debug',
    color: true,
    mainFields: ['module', 'main'],
    splitting: true,
    metafile: analyze,
    plugins: [
      nodeExternalsPlugin({
        packagePath: paths.appPackageJson,
      }),
      vanillaExtractPlugin(),
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
  copyAssets();

  const pkg = JSON.parse(await readFile(paths.appPackageJson, 'utf-8'));

  const packageName = pkg.name;

  const configs: { format: ModuleFormat; env: 'development' | 'production' }[] = [{ format: 'esm', env: 'production' }];

  logger.info(`Generating ${packageName} bundle.`);

  for (const { format, env } of configs) {
    await bundle({ packageName, format, env, analyze });
  }
};

const program = createCommand('esbuild');

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
