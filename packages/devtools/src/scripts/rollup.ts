/* eslint-disable @typescript-eslint/ban-ts-comment */
import { md } from '@cutting/rollup-plugin-md';
// @ts-ignore
import eslint from '@rbnlffl/rollup-plugin-eslint';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
// @ts-ignore
import terser from '@rollup/plugin-terser';
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
import type { OutputOptions } from 'rollup';
import { rollup } from 'rollup';
import analyzer from 'rollup-plugin-analyzer';
import postcss from 'rollup-plugin-postcss';
import sourceMaps from 'rollup-plugin-sourcemaps';
// @ts-ignore
import svgo from 'rollup-plugin-svgo';
import typescript from 'rollup-plugin-typescript2';
import ts from 'typescript';

import { paths } from '../config/paths.js';
import { csv } from '../rollup/plugins/csv.js';
import type { ModuleFormat } from '../types/moduleFormat.js';
import { copyAssets } from './copy-assets.js';
import { logger } from './logger.js';
import { writeToPackage } from './write-package.js';

// TODO: remove this shit
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

  const bundle = await rollup({
    input: entryFile,
    external: (id: string) => {
      return !id.startsWith('.') && !path.isAbsolute(id);
    },
    treeshake: {
      propertyReadSideEffects: false,
    },
    plugins: [
      eslint({
        throwOnError: true,
        throwOnWarning: true,
        filterInclude: 'src/**',
        filterExclude: ['**/*.scss', '**/*.css', '**/*.md', '**/*.csv', 'dist/**', '**/*.json'],
      }),
      resolve({
        mainFields: ['module', 'browser', 'main'],
        extensions: ['.ts', '.tsx', '.json', '.jsx'],
      }),
      commonjs(),
      json(),
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
      typescript({
        typescript: ts,
        tsconfig: paths.tsConfigProduction,
        abortOnError: true,
        tsconfigDefaults: {
          compilerOptions: {
            sourceMap: true,
            declaration: true,
            target: 'esnext',
            jsx: 'react-jsx',
          },
          useTsconfigDeclarationDir: true,
        },
        tsconfigOverride: {
          compilerOptions: {
            sourceMap: true,
            target: 'esnext',
          },
        },
      }),
      svgo(),
      minify &&
        terser({
          // @ts-ignore
          output: { comments: false },
          compress: {
            keep_infinity: true,
            pure_getters: true,
            passes: 10,
          },
          ecma: 5,
          toplevel: moduleFormat === 'cjs',
        }),
      sourceMaps(),
      analyze && analyzer({ summaryOnly: true }),
    ].filter(Boolean),
  });

  const extension = env === 'production' ? 'min' : 'js';
  const fileName = `index.${extension}`;
  const outputFileName = path.join(paths.appBuild, moduleFormat, fileName);

  logger.info(`writing ${path.basename(outputFileName)} for ${packageName}`);
  const buildOptions: OutputOptions = {
    format: moduleFormat,
    name: packageName,
    exports: 'named',
    sourcemap: true,
    esModule: true,
    interop: 'auto',
    freeze: false,
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
    const fileName = `index.js`;
    const outputFileName = path.join(paths.appBuild, moduleFormat, fileName);

    logger.info(`writing ${path.basename(outputFileName)} for ${packageName}`);

    await bundle.write(
      deepmerge(buildOptions, {
        file: outputFileName,
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

  assert(!!inputFile, 'No rootFile found for rollup');

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

  const esmFile = path.join(buildDir, 'esm', `index.min.js`);
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

export const program = createCommand('rollup');

program
  .description('execute a rollup build')
  .option('-a, --analyze', 'analyze the bundle', false)
  .option('-i, --input-file <path>', 'the entry file')
  .option('-p, --preserve-modules', 'rollup preserveModules', false)
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
