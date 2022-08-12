/* eslint-disable @typescript-eslint/ban-ts-comment */
import type { OutputOptions } from 'rollup';
import { rollup } from 'rollup';
import type { ModuleFormat } from '../types/moduleFormat';
import { paths } from '../config/paths.js';
import fs from 'fs-extra';
import path from 'path';
import typescript from 'rollup-plugin-typescript2';
import { logger } from './logger.js';
import resolve from '@rollup/plugin-node-resolve';
import { assert } from 'assert-ts';
// import injectProcessEnv from 'rollup-plugin-inject-process-env';
import type { RollupBabelInputPluginOptions } from '@rollup/plugin-babel';
import { babel } from '@rollup/plugin-babel';
import json from '@rollup/plugin-json';
import sourceMaps from 'rollup-plugin-sourcemaps';
import { terser } from 'rollup-plugin-terser';
import { copyAssets } from './copy-assets.js';
import postcss from 'rollup-plugin-postcss';
import { md } from '@cutting/rollup-plugin-md';
// @ts-ignore
import svgo from 'rollup-plugin-svgo';
// @ts-ignore
import eslint from '@rbnlffl/rollup-plugin-eslint';
// @ts-ignore
import url from 'postcss-url';
// @ts-ignore
import autoprefixer from 'autoprefixer';
import commonjs from '@rollup/plugin-commonjs';
import { createBabelConfig } from './createBabelConfig.js';
import { writeToPackage } from './write-package.js';
import { csv } from '../rollup/plugins/csv.js';
import postcssImport from 'postcss-import';
import { DEFAULT_EXTENSIONS } from '@babel/core';
import { createCommand } from 'commander';
import analyzer from 'rollup-plugin-analyzer';
import { readFile } from 'fs/promises';
import ts from 'typescript';
import deepmerge from 'deepmerge';

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

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { ...babelConfig } = createBabelConfig({
    isDevelopment: false,
    isProduction: true,
    isNode: false,
    moduleFormat,
  });

  const bundle = await rollup({
    input: entryFile,
    external: (id: string) => {
      if (id === 'babel-plugin-transform-async-to-promises/helpers') {
        return false;
      }

      return !id.startsWith('.') && !path.isAbsolute(id);
    },
    treeshake: {
      propertyReadSideEffects: false,
    },
    plugins: [
      eslint({
        fix: false,
        throwOnError: true,
        throwOnWarning: true,
        extensions: ['.ts', '.tsx', '.test.ts', '.test.tsx'],
        filterInclude: 'src/**',
        filterExclude: ['**/*.scss', '**/*.css', '**/*.md', '**/*.csv', 'dist/**', '**/*.json'],
        useEslintrc: true,
      }),
      resolve({
        mainFields: ['module', 'browser', 'main'],
        extensions: ['.mjs', '.cjs', '.js', '.ts', '.tsx', '.json', '.jsx'],
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
      babel({
        babelHelpers: 'runtime',
        ...babelConfig,
        extensions: [...DEFAULT_EXTENSIONS, 'ts', 'tsx'],
        sourceType: 'module'
      } as RollupBabelInputPluginOptions),
      // injectProcessEnv({
      //   NODE_ENV: env,
      // }),
      svgo(),
      minify &&
        terser({
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

  const extension = env === 'production' ? 'min.js' : 'js';
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
