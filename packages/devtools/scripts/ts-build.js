const fs = require('fs-extra');
const path = require('path');
const ts = require('typescript');
const exec = require('child_process').execSync;
const paths = require('../config/paths');
const copy = require('copy');

function runTypeScriptBuild() {
  const c2Config = require(paths.defaultC2ConfigPath).ts;

  const {
    src,
    tsconfig,
    options: { outDir, typeRoots }
  } = c2Config;

  console.log(`Running typescript build in ${outDir}/`);

  fs.emptyDirSync(paths.appBuild);

  const json = ts.parseConfigFileTextToJson(tsconfig, ts.sys.readFile(tsconfig), true);

  const { options } = ts.parseJsonConfigFileContent(json.config, ts.sys, path.dirname(tsconfig));

  options.configFilePath = path.join(process.cwd(), 'tsconfig.json');

  options.outDir = outDir;
  options.src = src;

  let rootFile = path.join(process.cwd(), 'src/index.tsx');

  if (!fs.existsSync(rootFile)) {
    rootFile = path.join(process.cwd(), 'src/index.ts');
  }

  const host = ts.createCompilerHost(options, true);
  const prog = ts.createProgram([rootFile], options, host);
  const result = prog.emit();

  if (result.emitSkipped) {
    const message = result.diagnostics
      .map(d => `${ts.DiagnosticCategory[d.category]} ${d.code} (${d.file}:${d.start}): ${d.messageText}`)
      .join('\n');

    throw new Error(`Failed to compile typescript:\n\n${message}`);
  }
}

function build() {
  try {
    runTypeScriptBuild();

    const patterns = ['*.scss', '*.css', '*.png', '*.jpg', '*.md'].map(pattern => `${paths.appSrc}/**/${pattern}`);

    copy(patterns, paths.appBuild, (err, files) => {
      if (err) throw err;
    });
  } catch (e) {
    console.error(e);
    console.log(e.stack);
    if (e.frame) {
      console.error(e.frame);
    }
    process.exit(1);
  }
}

build();
