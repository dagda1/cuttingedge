/* eslint-disable no-console */
const { rollup } = require('rollup');
const resolvePlugin = require('rollup-plugin-node-resolve');
const filesizePlugin = require('rollup-plugin-filesize');
const replacePlugin = require('rollup-plugin-replace');
const terserPlugin = require('rollup-plugin-terser').terser;
const paths = require('../config/paths');
const fs = require('fs-extra');
const path = require('path');
const typescript = require('@rollup/plugin-typescript');
const logger = require('../scripts/logger');

if (!process.argv.includes('--package-name')) {
  throw new Error('no --package-name switch');
}

const packageName = process.argv[3];

fs.removeSync(paths.appBuild);

async function generateBundledModule(inputFile, outputFile, format) {
  if (!fs.existsSync(inputFile)) {
    throw new Error(`Input file ${inputFile} does not exist`);
  }

  logger.info(`Generating ${outputFile} bundle.`);

  const bundle = await rollup({
    input: inputFile,
    // TODO: configure externals etc.
    external: (id) => {
      logger.info(id);
      return !id.startsWith('.') && !path.isAbsolute(id);
    },
    plugins: [
      resolvePlugin({
        mainFields: ['module', 'main', 'browser'],
      }),
      typescript({
        tsconfig: paths.tsConfig,
        tsconfigOverride: {
          compilerOptions: {
            target: 'es5',
          },
        },
      }),
      replacePlugin({ 'process.env.NODE_ENV': JSON.stringify('production') }),
      replacePlugin({ 'process.env.NODE_ENV': JSON.stringify('production') }),
      terserPlugin({
        sourcemap: true,
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
  if (e.frame) {
    logger.error(e.frame);
  }
  process.exit(1);
});
