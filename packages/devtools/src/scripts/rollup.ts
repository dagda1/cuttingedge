/* eslint-disable no-console */
const { rollup } = require('rollup');
import filesizePlugin from 'rollup-plugin-filesize';
import replacePlugin from 'rollup-plugin-replace';
import terserPlugin from 'rollup-plugin-terser';
import { paths } from '../config/paths';
import fs from 'fs-extra';
import path from 'path';
import typescript from 'rollup-plugin-typescript2';
import logger from '../scripts/logger';
import resolve from '@rollup/plugin-node-resolve';
import sourceMaps from 'rollup-plugin-sourcemaps';

if (!process.argv.includes('--package-name')) {
  throw new Error('no --package-name switch');
}

const packageName = process.argv[3];

fs.removeSync(paths.appBuild);

async function generateBundledModule(inputFile: string, outputFile: string, format) {
  if (!fs.existsSync(inputFile)) {
    throw new Error(`Input file ${inputFile} does not exist`);
  }

  logger.info(`Generating ${outputFile} bundle.`);

  const bundle = await rollup({
    input: inputFile,
    external: (id: string) => {
      return !id.startsWith('.') && !path.isAbsolute(id);
    },
    plugins: [
      resolve({
        mainFields: ['module', 'main', 'browser'],
        // defaults + .jsx
        extensions: ['.mjs', '.js', '.jsx', '.json', '.node'],
      }),
      typescript({
        typescript: require('typescript'),
        cacheRoot: `./.rts2_cache_${format}`,
        tsconfig: paths.tsConfig,
        abortOnError: true,
        tsconfigDefaults: {
          compilerOptions: {
            sourceMap: true,
            declaration: true,
            jsx: 'react',
          },
          exclude: [
            '**/*.test.ts',
            '**/*.test.tsx',
            // TS defaults below
            'node_modules',
            paths.appBuild,
          ],
        },
        tsconfigOverride: {
          compilerOptions: {
            sourceMap: true,
            target: 'es5',
          },
        },
      }),
      replacePlugin({ 'process.env.NODE_ENV': JSON.stringify('production') }),
      replacePlugin({ 'process.env.NODE_ENV': JSON.stringify('production') }),
      sourceMaps(),
      terserPlugin({
        output: { comments: true },
        compress: {
          keep_infinity: true,
          pure_getters: true,
          passes: 10,
        },
        ecma: 5,
        warnings: true,
      }),
      filesizePlugin(),
    ],
  });

  await bundle.write({
    file: outputFile,
    format,
    banner: '/** @cutting - (c) Paul Cowan 2015 - 2019 - MIT Licensed */',
    exports: 'named',
    name: format === 'umd' ? '@cutting' : undefined,
  });

  logger.info(`Generation of ${outputFile} bundle finished.`);
}

async function build() {
  const candidates = [];

  [packageName, path.join(packageName, 'index'), 'index'].forEach((candidate) => {
    ['.ts', '.tsx'].forEach((fileType) => {
      candidates.push(path.join(paths.appSrc, `${candidate}${fileType}`));
    });
  });

  const rootFile = candidates.find((candidate) => fs.existsSync(candidate));

  logger.info(rootFile);

  await Promise.all([generateBundledModule(rootFile, path.join(paths.appBuild, `${packageName}.js`), 'cjs')]);
}

build().catch((e) => {
  logger.error(e);
  process.exit(1);
});
