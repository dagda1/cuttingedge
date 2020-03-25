/* eslint-disable no-console */
const { rollup } = require('rollup');
const resolvePlugin = require('rollup-plugin-node-resolve');
const filesizePlugin = require('rollup-plugin-filesize');
const replacePlugin = require('rollup-plugin-replace');
const terserPlugin = require('rollup-plugin-terser').terser;
const paths = require('../config/paths');
const fs = require('fs-extra');
const path = require('path');
const typescript = require('rollup-plugin-typescript2');

if (!process.argv.includes('--package-name')) {
  throw new Error('no --package-name switch');
}

const packageName = process.argv[3];

fs.removeSync(paths.appBuild);

async function generateBundledModule(inputFile, outputFile, format) {
  if (!fs.existsSync(inputFile)) {
    throw new Error(`Input file ${inputFile} does not exist`);
  }

  console.log(`Generating ${outputFile} bundle.`);

  const bundle = await rollup({
    input: inputFile,
    // TODO: configure externals etc.
    external: id => {
      console.log(id);
      return !id.startsWith('.') && !path.isAbsolute(id);
    },
    plugins: [
      resolvePlugin({
        mainFields: ['module', 'main', 'browser']
      }),
      typescript({
        typescript: require('typescript'),
        cacheRoot: `./.rts2_cache_${format}`,
        tsconfig: paths.tsConfig,
        tsconfigDefaults: {
          compilerOptions: {
            sourceMap: true,
            declaration: true,
            jsx: 'react'
          }
        },
        tsconfigOverride: {
          compilerOptions: {
            target: 'es5'
          }
        }
      }),
      replacePlugin({ 'process.env.NODE_ENV': JSON.stringify('production') }),
      replacePlugin({ 'process.env.NODE_ENV': JSON.stringify('production') }),
      terserPlugin({
        sourcemap: true,
        output: { comments: true },
        compress: {
          keep_infinity: true,
          pure_getters: true,
          passes: 10
        },
        ecma: 5,
        warnings: true
      }),
      filesizePlugin()
    ]
  });

  await bundle.write({
    file: outputFile,
    format,
    banner: '/** @cutting - (c) Paul Cowan 2015 - 2019 - MIT Licensed */',
    exports: 'named',
    name: format === 'umd' ? '@cutting' : undefined
  });

  console.log(`Generation of ${outputFile} bundle finished.`);
}

async function build() {
  let candidates = [];

  [packageName, path.join(packageName, 'index'), 'index'].forEach(candidate => {
    ['.ts', '.tsx'].forEach(fileType => {
      candidates.push(path.join(paths.appSrc, `${candidate}${fileType}`));
    });
  });

  let rootFile = candidates.find(candidate => fs.existsSync(candidate));

  console.log(rootFile);

  await Promise.all([generateBundledModule(rootFile, path.join(paths.appBuild, `${packageName}.js`), 'cjs')]);
}

build().catch(e => {
  console.error(e);
  if (e.frame) {
    console.error(e.frame);
  }
  process.exit(1);
});
