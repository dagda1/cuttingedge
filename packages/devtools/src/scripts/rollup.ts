/* eslint-disable @typescript-eslint/ban-ts-comment */
import { rollup } from 'rollup';
import type { ModuleFormat } from '../types/moduleFormat';
import { paths } from '../config/paths';
import fs from 'fs-extra';
import path from 'path';
import typescript from 'rollup-plugin-typescript2';
import { logger } from './logger';
import resolve from '@rollup/plugin-node-resolve';
import { assert } from 'assert-ts';
import injectProcessEnv from 'rollup-plugin-inject-process-env';
import babel, { RollupBabelInputPluginOptions } from '@rollup/plugin-babel';
import json from '@rollup/plugin-json';
import sourceMaps from 'rollup-plugin-sourcemaps';
import { terser } from 'rollup-plugin-terser';
import { copyAssets } from './copy-assets';
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
import { createBabelConfig } from './createBabelConfig';
import { safePackageName, writeCjsEntryFile } from '../rollup/helpers';
import { writeToPackage } from './write-package';
import { csv } from '../rollup/plugins/csv';
import postcssImport from 'postcss-import';
import { emptyBuildDir } from './empty-build-dir';
import { DEFAULT_EXTENSIONS } from '@babel/core';
import { createCommand } from 'commander';
import { visualizer } from 'rollup-plugin-visualizer';
import { sizeSnapshot } from 'rollup-plugin-size-snapshot';

export interface BundlerOptions {
  packageName: string;
  entryFile: string;
  moduleFormat: ModuleFormat;
  env: 'development' | 'production';
  vizualize: boolean;
  analyze: boolean;
}

logger.debug(`using ${path.basename(paths.tsConfigProduction)}`);

async function generateBundledModule({
  packageName,
  entryFile,
  moduleFormat,
  env,
  vizualize,
  analyze,
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
      analyze && sizeSnapshot(),
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
      commonjs({
        // use a regex to make sure to include eventual hoisted packages
        include: moduleFormat === 'umd' ? /\/node_modules\// : /\/regenerator-runtime\//,
      }),
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
        typescript: require('typescript'),
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
        exclude: /\/node_modules\/(core-js)\//,
        babelHelpers: 'runtime',
        ...babelConfig,
        extensions: [...DEFAULT_EXTENSIONS, 'ts', 'tsx'],
      } as RollupBabelInputPluginOptions),
      injectProcessEnv({
        NODE_ENV: env,
      }),
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
      vizualize &&
        moduleFormat === 'esm' &&
        visualizer({
          open: true,
          gzipSize: true,
          sourcemap: true,
          template: 'sunburst',
        }),
    ].filter(Boolean),
  });

  const pkgName = safePackageName(packageName);
  const extension = env === 'production' ? 'min.js' : 'js';
  const fileName = ['esm', 'umd'].includes(moduleFormat) ? `index.js` : `${pkgName}.cjs.${env}.${extension}`;
  const outputFileName = path.join(paths.appBuild, moduleFormat, fileName);

  logger.info(`writing ${path.basename(outputFileName)} for ${packageName}`);

  await bundle.write({
    file: outputFileName,
    format: moduleFormat,
    name: packageName,
    exports: 'named',
    sourcemap: true,
    esModule: moduleFormat !== 'umd',
    interop: 'auto',
    freeze: false,
    globals: { react: 'React' },
  });

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
  vizualize,
  analyze,
  inputFile,
}: Pick<BundlerOptions, 'vizualize' | 'analyze'> & { inputFile?: string }) {
  emptyBuildDir();

  const pkgJsonPath = path.join(process.cwd(), 'package.json');

  const { default: pkg } = await import(pkgJsonPath);

  const packageName = pkg.name;

  const entryFile = getInputFile(packageName, inputFile);

  const configs: { moduleFormat: ModuleFormat; env: 'development' | 'production' }[] = [
    { moduleFormat: 'cjs', env: 'development' },
    { moduleFormat: 'cjs', env: 'production' },
    { moduleFormat: 'esm', env: 'production' },
    { moduleFormat: 'umd', env: 'production' },
  ];

  logger.info(`Generating ${packageName} bundle.`);

  for (const { moduleFormat, env } of configs) {
    await generateBundledModule({ packageName, entryFile, moduleFormat, env, vizualize, analyze });
  }

  await writeCjsEntryFile(packageName);

  const pkgJson = { ...pkg };

  if (typeof pkgJson.exports !== 'undefined') {
    return;
  }

  const buildDir = path.basename(paths.appBuild);

  const commonjsFile = path.join(buildDir, 'cjs', 'index.js');

  const esmFile = path.join(buildDir, 'esm', `index.js`);
  pkgJson.module = esmFile;

  const umdFile = path.join(buildDir, 'umd', `index.js`);
  pkgJson.browser = umdFile;

  const dtsFile = path.join(buildDir, 'esm', `index.d.ts`);
  pkgJson.types = dtsFile;

  pkgJson.exports = {
    import: `./${esmFile}`,
    require: `./${commonjsFile}`,
    browser: `./${umdFile}`,
  };

  pkgJson.typesVersions = {
    '*': {
      '*': [`${dtsFile}`],
    },
  };

  await writeToPackage(pkgJsonPath, pkgJson);
}

const program = createCommand('rollup');

program
  .description('execute a rollup build')
  .option('-v, --vizualize', 'run the rollup-plugin-visualizer', false)
  .option('-a, --analyze', 'analyze the bundle', false)
  .option('-i, --input-file <path>', 'the entry file')
  .parse(process.argv)
  .action(async function ({ vizualize, inputFile, analyze }) {
    try {
      await build({ vizualize, inputFile, analyze });

      logger.done('finished building');
    } catch (err) {
      logger.error(err);
      process.exit(1);
    }
  })
  .parse(process.argv);
