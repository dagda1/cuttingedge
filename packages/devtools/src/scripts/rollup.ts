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

import { createBabelConfig } from './createBabelConfig';
import { safePackageName, writeCjsEntryFile } from '../rollup/helpers';
import { writeToPackage } from './write-package';
import { csv } from '../rollup/plugins/csv';

fs.emptyDirSync(paths.appBuild);

export interface BundlerOptions {
  packageName: string;
  inputFile: string;
  moduleFormat: ModuleFormat;
  env: 'development' | 'production';
}

async function generateBundledModule({ packageName, inputFile, moduleFormat, env }: BundlerOptions) {
  assert(fs.existsSync(inputFile), `Input file ${inputFile} does not exist`);

  logger.info(`Generating ${packageName} bundle.`);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { ...babelConfig } = createBabelConfig({
    isDevelopment: false,
    isProduction: true,
    isNode: false,
    moduleFormat,
  });

  const minify = moduleFormat === 'cjs' && env === 'production';

  const bundle = await rollup({
    input: inputFile,
    external: (id: string) => {
      if (id === 'babel-plugin-transform-async-to-promises/helpers') {
        return false;
      }

      return !id.startsWith('.') && !path.isAbsolute(id);
    },
    treeshake: {
      moduleSideEffects: false,
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
      json(),
      md(),
      postcss({
        extract: true,
        modules: false,
        autoModules: true,
        sourceMap: true,
        use: ['sass'],
        plugins: [
          url({
            url: 'inline',
          }),
        ],
      }),
      csv(),
      typescript({
        typescript: require('typescript'),
        tsconfig: paths.tsConfig,
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
      } as RollupBabelInputPluginOptions),
      injectProcessEnv({
        NODE_ENV: env,
      }),
      svgo(),
      sourceMaps(),
      minify &&
        terser({
          compress: {
            keep_infinity: true,
            pure_getters: true,
            passes: 10,
          },
          ecma: 2016,
          toplevel: moduleFormat === 'cjs',
          format: {
            comments: 'all',
          },
        }),
    ].filter(Boolean),
  });

  const pkgName = safePackageName(packageName);
  const extension = env === 'production' ? 'min.js' : 'js';
  const fileName = moduleFormat === 'esm' ? `${pkgName}.esm.js` : `${pkgName}.cjs.${env}.${extension}`;
  const outputFileName = path.join(paths.appBuild, fileName);

  logger.debug(`writing output file ${outputFileName}`);

  logger.debug(minify === true ? 'creating a minified build' : 'creating a non minified build');

  await bundle.write({
    file: outputFileName,
    format: moduleFormat,
    name: packageName,
    exports: 'named',
    sourcemap: true,
    esModule: true,
    interop: 'auto',
    freeze: false,
  });

  copyAssets();

  logger.info('copying assets');
}

async function build() {
  fs.emptyDirSync(paths.appBuild);

  const candidates: string[] = [];

  const pkgJsonPath = path.join(process.cwd(), 'package.json');

  const { default: pkg } = await import(pkgJsonPath);

  const packageName = pkg.name;

  [packageName, path.join(packageName, 'index'), 'index', path.join('bin', safePackageName(packageName))].forEach(
    (candidate) => {
      ['.ts', '.tsx'].forEach((fileType) => {
        candidates.push(path.join(paths.appSrc, `${candidate}${fileType}`));
      });
    },
  );

  const configs: { moduleFormat: ModuleFormat; env: 'development' | 'production' }[] = [
    { moduleFormat: 'cjs', env: 'development' },
    { moduleFormat: 'cjs', env: 'production' },
    { moduleFormat: 'esm', env: 'production' },
  ];

  const inputFile = candidates.find((candidate) => fs.existsSync(candidate));

  assert(!!inputFile, 'No rootFile found for rollup');

  logger.start(`using input file ${inputFile}`);

  for (const { moduleFormat, env } of configs) {
    await generateBundledModule({ packageName, inputFile, moduleFormat, env });
  }

  await writeCjsEntryFile(packageName);

  logger.info('updating package.json file');

  const pkgJson = { ...pkg };

  const pkgName = safePackageName(packageName);

  pkgJson.main = path.join('dist', 'index.js');
  const moduleFile = path.join('dist', `${pkgName}.esm.js`);
  pkgJson.module = moduleFile;
  pkgJson.browser = moduleFile;
  pkgJson.type = 'module';

  await writeToPackage(pkgJsonPath, pkgJson);
}

(async () => {
  try {
    await build();
    logger.done('finished building');
  } catch (err) {
    logger.error(err);
    process.exit(1);
  }
})();
