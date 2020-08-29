import { rollup } from 'rollup';
import { paths } from '../config/paths';
import fs from 'fs-extra';
import path from 'path';
import typescript from 'rollup-plugin-typescript2';
import { logger } from '../scripts/logger';
import resolve from '@rollup/plugin-node-resolve';
import { assert } from '../assert/assert';
import injectProcessEnv from 'rollup-plugin-inject-process-env';
import { safePackageName } from './helpers';
import babel from '@rollup/plugin-babel';
import json from '@rollup/plugin-json';
import sourceMaps from 'rollup-plugin-sourcemaps';
import { terser } from 'rollup-plugin-terser';
import dashdash, { Option } from 'dashdash';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { eslint } from 'rollup-plugin-eslint';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import analyze from 'rollup-plugin-analyzer';

const isProduction = process.env.NODE_ENV === 'production';

const options: Option[] = [
  {
    name: 'package-name',
    type: 'string',
  },
  {
    name: 'minify',
    type: 'bool',
  },
];

if (!process.argv.includes('--package-name')) {
  throw new Error('no --package-name switch');
}

const parser = dashdash.createParser({ options });

const opts = parser.parse(process.argv);

const { package_name: packageName } = opts;

const minify = !!opts?.minify;

export interface BundlerOptions {
  packageName: string;
  inputFile: string;
}

async function generateBundledModule(packageName: string, inputFile: string) {
  assert(fs.existsSync(inputFile), `Input file ${inputFile} does not exist`);

  logger.info(`Generating ${packageName} bundle.`);

  const bundle = await rollup({
    input: inputFile,
    external: (id: string) => {
      return !id.startsWith('.') && !path.isAbsolute(id);
    },
    treeshake: {
      // removes property getters and setters on objects
      // does not remove them on classes
      propertyReadSideEffects: false,
    },
    plugins: [
      resolve({
        mainFields: ['module', 'main', 'browser'],
        extensions: ['.mjs', 'cjs', '.js', '.ts', '.tsx', '.json', '.jsx'],
      }),
      json(),
      eslint({
        fix: isProduction,
        throwOnError: isProduction,
        throwOnWarning: false,
      }),
      typescript({
        typescript: require('typescript'),
        tsconfig: paths.tsConfig,
        abortOnError: true,
        tsconfigDefaults: {
          compilerOptions: {
            sourceMap: true,
            declaration: true,
            target: 'esnext',
            jsx: 'react',
          },
          useTsconfigDeclarationDir: true,
          exclude: ['**/*.spec.ts', '**/*.test.ts', '**/*.spec.tsx', '**/*.test.tsx', , 'node_modules', paths.appBuild],
        },
        tsconfigOverride: {
          compilerOptions: {
            sourceMap: true,
            target: 'esnext',
          },
        },
      }),
      babel({
        exclude: /node_modules/,
        presets: [['@babel/preset-env', { loose: true }], '@babel/preset-react'],
        plugins: [
          'babel-plugin-annotate-pure-calls',
          ['babel-plugin-transform-rename-import', [{ original: 'lodash', replacement: 'lodash-es' }]],
          'babel-plugin-dev-expression',
          [
            'babel-plugin-transform-async-to-promises',
            {
              inlineHelpers: true,
              externalHelpers: true,
            },
          ],
          '@babel/plugin-proposal-class-properties',
          '@babel/plugin-proposal-optional-chaining',
          '@babel/plugin-proposal-nullish-coalescing-operator',
          '@babel/plugin-transform-regenerator',
          'babel-plugin-macros',
        ],
      }),
      injectProcessEnv({
        NODE_ENV: 'production',
      }),
      sourceMaps(),
      minify === true &&
        terser({
          compress: {
            keep_infinity: true,
            pure_getters: true,
            passes: 10,
          },
          ecma: 2016,
          toplevel: false,
          format: {
            comments: 'all',
          },
        }),
      analyze(),
    ],
  });

  const fileName = `${safePackageName(packageName)}.esm.js`;
  const outputFileName = path.join(paths.appBuild, fileName);

  logger.info(`writing output file ${outputFileName}`);

  console.error(typeof minify);

  logger.info(minify === true ? 'creating a minified build' : 'creating a non minified build');

  await bundle.write({
    dir: paths.appBuild,
    format: 'es',
    name: packageName,
    exports: 'named',
    sourcemap: true,
    esModule: true,
  });

  logger.done('finished building');
}

async function build() {
  const candidates: string[] = [];

  [packageName, path.join(packageName, 'index'), 'index'].forEach((candidate) => {
    ['.ts', '.tsx'].forEach((fileType) => {
      candidates.push(path.join(paths.appSrc, `${candidate}${fileType}`));
    });
  });

  const rootFile = candidates.find((candidate) => fs.existsSync(candidate));

  assert(rootFile, 'No rootFile found for rollup');

  logger.start(`using input file ${rootFile}`);

  await Promise.all([generateBundledModule(packageName, rootFile)]);
}

build().catch((e) => {
  logger.error(e);
  process.exit(1);
});
