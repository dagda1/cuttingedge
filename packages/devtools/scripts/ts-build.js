const fs = require('fs-extra');
const path = require('path');
const ts = require('typescript');
const paths = require('../config/paths');
const copy = require('copy');
const chalk = require('chalk');
const { exec } = require('child_process');

const MaxTries = 15;

function findExecutable(current, executable, tries = 0) {
  const modulesDir = path.resolve(current, 'node_modules', '.bin', executable);

  if (tries === MaxTries) {
    throw new Error(`cannot find ${tsc} in ${modulesDir}`);
  }

  if (fs.existsSync(modulesDir)) {
    return modulesDir;
  }

  return findExecutable(path.resolve(current, '..'), executable, tries++);
}

function runTypeScriptBuild() {
  const buildConfig = require(paths.jsBuildConfigPath).ts;
  const {
    src,
    tsconfig,
    options: { outDir, typeRoots }
  } = buildConfig;

  console.log(`Running typescript build in ${outDir}/`);

  fs.emptyDirSync(paths.appBuild);

  if (!process.argv.includes('-b') && !process.argv.includes('--build')) {
    process.argv.push('--sourceMap', process.argv.includes('--source-map'));
    process.argv.push('--noEmit', false);
  }

  process.argv.push('--pretty', true);

  const tscPath = findExecutable(__dirname, 'tsc');
  const tsc = exec(`${tscPath} ${process.argv.slice(2).join(' ')}`);

  tsc.stdout.on('data', data => console.log(chalk.red(data)));
  tsc.stderr.on('data', data => console.error(chalk.red(data)));

  tsc.on('close', code => {
    console.log(chalk.cyan(`tsc exited with code ${code}`));

    if (code !== 0) {
      process.exit(1);
    }

    runTsLint();
  });
}

function runTsLint() {
  console.log(`Running tslint`);

  const tslintPath = findExecutable(__dirname, 'tslint');
  const tslint = exec(`${tslintPath} -c ${paths.tsLintConfig} -p ${paths.tsConfig} -t stylish`);

  tslint.stdout.on('data', data => console.log(chalk.red(data)));
  tslint.stderr.on('data', data => console.error(chalk.red(data)));

  tslint.on('close', code => {
    console.log(chalk.cyan(`tslint exited with code ${code}`));

    if (code !== 0) {
      process.exit(1);
    }
  });
}
function build() {
  try {
    runTypeScriptBuild();

    const patterns = ['*.scss', '*.css', '*.png', '*.jpg', '*.md', '*.svg'].map(
      pattern => `${paths.appSrc}/**/${pattern}`
    );

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
