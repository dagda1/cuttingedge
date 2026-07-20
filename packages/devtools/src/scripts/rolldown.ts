/* eslint-disable @typescript-eslint/ban-ts-comment */
import { md } from '@cutting/rollup-plugin-md';
import { assert } from 'assert-ts';
// @ts-ignore
import autoprefixer from 'autoprefixer';
import { createCommand } from 'commander';
import deepmerge from 'deepmerge';
import { readFile } from 'fs/promises';
import fs from 'fs-extra';
import path from 'path';
import postcssImport from 'postcss-import';
// @ts-ignore
import url from 'postcss-url';
import type { OutputOptions } from 'rolldown';
import { rolldown } from 'rolldown';
import { dts } from 'rolldown-plugin-dts';
import analyzer from 'rollup-plugin-analyzer';
import postcss from 'rollup-plugin-postcss';
// @ts-ignore
import svgo from 'rollup-plugin-svgo';

import { paths } from '../config/paths.js';
import { csv } from '../rolldown/plugins/csv.js';
import type { ModuleFormat } from '../types/moduleFormat.js';
import { copyAssets } from './copy-assets.js';
import { logger } from './logger.js';
import { writeToPackage } from './write-package.js';

const safePackageName = (name: string): string =>
  name.toLowerCase().replace(/(^@.*\/)|((^[^a-zA-Z]+)|[^\w.-])|([^a-zA-Z0-9]+$)/g, '');

export interface BundlerOptions {
  packageName: string;
  entryFile: string;
  moduleFormat: ModuleFormat;
  env: 'development' | 'production';
  analyze: boolean;
  preserveModules: boolean;
}

logger.debug(`using ${path.basename(paths.tsConfigProduction)}`);

async function generateBundledModule({
  packageName,
  entryFile,
  moduleFormat,
  env,
  analyze,
  preserveModules = false,
}: BundlerOptions) {
  assert(fs.existsSync(entryFile), `Input file ${entryFile} does not exist`);

  const minify = env === 'production';

  const bundle = await rolldown({
    input: entryFile,
    external: (id: string) => {
      return !id.startsWith('.') && !path.isAbsolute(id);
    },
    resolve: {
      mainFields: ['module', 'browser', 'main'],
      extensions: ['.ts', '.tsx', '.json', '.jsx'],
    },
    treeshake: {
      propertyReadSideEffects: false,
    },
    plugins: [
      md(),
      postcss({
        extract: true,
        modules: false,
        autoModules: true,
        sourceMap: true,
        use: ['sass'],
        plugins: [
          postcssImport(),
          autoprefixer(),
          url({
            url: 'inline',
          }),
        ],
      }),
      csv(),
      dts({
        tsconfig: paths.tsConfigProduction,
      }),
      svgo(),
      analyze && analyzer({ summaryOnly: true }),
    ].filter(Boolean),
  });

  const buildOptions: OutputOptions = {
    format: moduleFormat,
    name: packageName,
    exports: 'named',
    sourcemap: true,
    minify,
    globals: { react: 'React' },
  };

  logger.info(`preserveModules is ${preserveModules}`);

  if (preserveModules) {
    const dir = `dist/${moduleFormat}`;
    logger.info(`writing to ${dir} for ${packageName}`);
    await bundle.write(
      deepmerge(buildOptions, {
        preserveModules,
        preserveModulesRoot: 'src',
        dir,
      }) as OutputOptions,
    );
  } else {
    const dir = path.join(paths.appBuild, moduleFormat);

    logger.info(`writing ${path.join(dir, 'index.js')} for ${packageName}`);

    await bundle.write(
      deepmerge(buildOptions, {
        dir,
        entryFileNames: '[name].js',
      }) as OutputOptions,
    );
  }

  copyAssets();
}

const getInputFile = (packageName: string, inputFileOverride?: string): string => {
  if (inputFileOverride) {
    assert(fs.existsSync(inputFileOverride), `no --input-file found at ${inputFileOverride}`);

    return inputFileOverride;
  }

  const candidates: string[] = [];

  [packageName, path.join(packageName, 'index'), 'index', path.join('bin', safePackageName(packageName))].forEach(
    (candidate) => {
      ['.ts', '.tsx'].forEach((fileType) => {
        candidates.push(path.join(paths.appSrc, `${candidate}${fileType}`));
      });
    },
  );

  const inputFile = candidates.find((candidate) => fs.existsSync(candidate));

  assert(!!inputFile, 'No rootFile found for rolldown');

  logger.start(`using input file ${path.basename(inputFile)} for ${packageName}`);

  return inputFile;
};

async function build({
  analyze,
  inputFile,
  preserveModules,
}: Pick<BundlerOptions, 'analyze' | 'preserveModules'> & { inputFile?: string }) {
  const pkgJsonPath = path.join(process.cwd(), 'package.json');

  const pkg = JSON.parse(await readFile(pkgJsonPath, 'utf-8'));

  const packageName = pkg.name;

  const entryFile = getInputFile(packageName, inputFile);

  const configs: { moduleFormat: ModuleFormat; env: 'development' | 'production' }[] = [
    { moduleFormat: 'esm', env: 'production' },
  ];

  logger.info(`Generating ${packageName} bundle.`);

  for (const { moduleFormat, env } of configs) {
    await generateBundledModule({ packageName, preserveModules, entryFile, moduleFormat, env, analyze });
  }

  const pkgJson = { ...pkg };

  if (typeof pkgJson.exports !== 'undefined') {
    return;
  }

  const buildDir = path.basename(paths.appBuild);

  const esmFile = path.join(buildDir, 'esm', `index.js`);
  pkgJson.module = esmFile;

  const dtsFile = path.join(buildDir, 'esm', `index.d.ts`);
  pkgJson.types = dtsFile;

  pkgJson.exports = {
    import: `./${esmFile}`,
  };

  pkgJson.typesVersions = {
    '*': {
      '*': [`${dtsFile}`],
    },
  };

  await writeToPackage(pkgJsonPath, pkgJson);
}

export const program = createCommand('rolldown');

program
  .description('execute a rolldown build')
  .option('-a, --analyze', 'analyze the bundle', false)
  .option('-i, --input-file <path>', 'the entry file')
  .option('-p, --preserve-modules', 'rolldown preserveModules', false)
  .parse(process.argv)
  .action(async function ({ inputFile, analyze, preserveModules }) {
    try {
      await build({ inputFile, analyze, preserveModules });

      logger.done('finished building');
    } catch (err) {
      logger.error(err);
      process.exit(1);
    }
  })
  .parse(process.argv);
