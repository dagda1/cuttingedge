const fs = require('fs-extra');
const path = require('path');
const ts = require('typescript');
const paths = require('../config/paths');
const copy = require('copy');
const chalk = require('chalk');
const { exec } = require('child_process');
const { findFile } = require('../config/utils');
const MaxTries = 15;

function findExecutable(current, executable, tries = 0) {
  const modulesDir = path.resolve(current, 'node_modules', '.bin', executable);

  if (tries === MaxTries) {
    throw new Error(`cannot find ${executable} in ${modulesDir}`);
  }

  if (fs.existsSync(modulesDir)) {
    return modulesDir;
  }

  return findExecutable(path.resolve(current, '..'), executable, ++tries);
}

function runTypeScriptBuild() {
  const buildConfig = require(paths.jsBuildConfigPath).ts;
  const {
    options: {}
  } = buildConfig;

  fs.emptyDirSync(paths.appBuild);

  if (!process.argv.includes('-b') && !process.argv.includes('--build')) {
    process.argv.push('--sourceMap', process.argv.includes('--source-map'));
    process.argv.push('--noEmit', false);
  }

  process.argv.push('--pretty', true);

  const tscPath = findExecutable(__dirname, 'tsc');

  console.log(`running tsc in ${chalk.yellow(tscPath)} with ${chalk.yellow(process.argv.slice(2).join(' '))}`);

  const tsc = exec(`${tscPath} ${process.argv.slice(2).join(' ')}`);

  tsc.stdout.on('data', (data) => console.log(chalk.red(data)));
  tsc.stderr.on('data', (data) => console.error(chalk.red(data)));

  tsc.on('close', (code) => {
    console.log(chalk.cyan(`tsc exited with code ${code}`));

    if (code !== 0) {
      process.exit(1);
    }

    runEslint();
  });
}

function runEslint() {
  console.log(`Running eslint`);
  const eslintPath = findExecutable(__dirname, 'eslint');

  console.log(`running eslint in ${chalk.yellow(eslintPath)} with ${chalk.yellow(process.argv.slice(2).join(' '))}`);

  const eslintConfig = findFile(process.cwd(), 'eslintrc.json');
  console.log(chalk.yellow(`using config ${eslintConfig}`));

  const eslint = exec(`${eslintPath} ${paths.appSrc} --ext .ts,.tsx -c ${eslintConfig} --fix`);

  eslint.stdout.on('data', (data) => console.log(chalk.red(data)));
  eslint.stderr.on('data', (data) => console.error(chalk.red(data)));

  eslint.on('close', (code) => {
    console.log(chalk.cyan(`eslint exited with code ${code}`));

    if (code !== 0) {
      process.exit(1);
    }
  });
}
function build() {
  try {
    runTypeScriptBuild();

    const patterns = ['*.scss', '*.css', '*.png', '*.jpg', '*.md', '*.svg'].map(
      (pattern) => `${paths.appSrc}/**/${pattern}`
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
