/* eslint-disable no-console */
const { rollup } = require('rollup');
const resolvePlugin = require('rollup-plugin-node-resolve');
const filesizePlugin = require('rollup-plugin-filesize');
const replacePlugin = require('rollup-plugin-replace');
const terserPlugin = require('rollup-plugin-terser').terser;
const commonjs = require('rollup-plugin-commonjs');
const paths = require('../config/paths');

const fs = require('fs-extra');
const path = require('path');
const ts = require('typescript');

if (!process.argv.includes('--package-name')) {
  throw new Error('no name switch');
}

const packageName = process.argv[3];

const es5Dir = path.join(process.cwd(), '.build.es5');
const es6Dir = path.join(process.cwd(), '.build.es6');

fs.removeSync(paths.appBuild);
fs.removeSync(es5Dir);
fs.removeSync(es6Dir);

function runTypeScriptBuild(outDir, target, declarations) {
  console.log(`Running typescript build (target: ${ts.ScriptTarget[target]}) in ${outDir}/`);

  const json = ts.parseConfigFileTextToJson(paths.tsConfig, ts.sys.readFile(paths.tsConfig), true);

  const { options } = ts.parseJsonConfigFileContent(json.config, ts.sys, path.dirname(paths.tsConfig));

  options.target = target;
  options.outDir = outDir;
  options.declaration = declarations;

  options.module = ts.ModuleKind.ES2015;
  options.importHelpers = true;
  options.noEmitHelpers = true;
  if (declarations) {
    options.declarationDir = paths.appBuild;
  }

  const rootFile = path.join(paths.appSrc, packageName);
  const host = ts.createCompilerHost(options, true);
  const prog = ts.createProgram([rootFile], options, host);
  const result = prog.emit();
  console.log(rootFile);
  if (result.emitSkipped) {
    const message = result.diagnostics
      .map((d) => `${ts.DiagnosticCategory[d.category]} ${d.code} (${d.file}:${d.start}): ${d.messageText}`)
      .join('\n');

    throw new Error(`Failed to compile typescript:\n\n${message}`);
  }
}

async function generateBundledModule(inputFile, outputFile, format, production) {
  console.log(`Generating ${outputFile} bundle.`);

  let plugins;
  if (production) {
    plugins = [
      resolvePlugin(),
      commonjs(),
      replacePlugin({ 'process.env.NODE_ENV': JSON.stringify('production') }),
      terserPlugin(),
      filesizePlugin()
    ];
  } else {
    plugins = [resolvePlugin(), commonjs(), filesizePlugin()];
  }

  const bundle = await rollup({
    input: inputFile,
    external: ['react', 'react-dom'],
    plugins
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
//13012126
async function build() {
  runTypeScriptBuild(es5Dir, ts.ScriptTarget.ES5, true);
  runTypeScriptBuild(es6Dir, ts.ScriptTarget.ES2015, false);

  const es5Build = path.join(es5Dir, `${packageName}.js`);
  const es6Build = path.join(es6Dir, `${packageName}.js`);

  await Promise.all([
    generateBundledModule(es5Build, path.join(paths.appBuild, `${packageName}.js`), 'cjs', false),
    generateBundledModule(es5Build, path.join(paths.appBuild, `${packageName}.min.js`), 'cjs', true),

    generateBundledModule(es5Build, path.join(paths.appBuild, `${packageName}.module.js`), 'es', false),

    generateBundledModule(es6Build, path.join(paths.appBuild, `${packageName}.es6.js`), 'es', false),

    generateBundledModule(es5Build, path.join(paths.appBuild, `${packageName}.umd.js`), 'umd', false),
    generateBundledModule(es5Build, path.join(paths.appBuild, `${packageName}.umd.min.js`), 'umd', true)
  ]);
}

build().catch((e) => {
  console.error(e);
  if (e.frame) {
    console.error(e.frame);
  }
  process.exit(1);
});
