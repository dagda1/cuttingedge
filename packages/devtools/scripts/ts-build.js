/* eslint-disable no-console */
const fs = require('fs-extra');
const path = require('path');
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

function runEslint() {
  console.log(`Running eslint`);
  const eslintPath = findExecutable(__dirname, 'eslint');

  const eslintConfig = findFile(process.cwd(), '.eslintrc.json');
  console.log(chalk.yellow(`using config ${eslintConfig}`));

  const args = ` --ext .ts,.tsx ${paths.appSrc} --ignore-pattern *.test.* -c ${eslintConfig} --fix`;

  console.log(`running eslint in ${chalk.yellow(eslintPath)} with ${chalk.yellow(args)}`);

  const eslint = exec(`${eslintPath} ${args}`);

  eslint.stdout.on('data', (data) => console.log(chalk.red(data)));
  eslint.stderr.on('data', (data) => console.error(chalk.red(data)));

  eslint.on('close', (code) => {
    console.log(chalk.cyan(`eslint exited with code ${code}`));

    if (code !== 0) {
      process.exit(1);
    }
  });
}

function runTypeScriptBuild() {
  const buildConfig = require(paths.jsBuildConfigPath).ts;
  const {
    options: {}
  } = buildConfig;

  fs.emptyDirSync(paths.appBuild);

  process.argv.push('--pretty', true);

  process.argv.push('-p', paths.tsConfig);

  const tscPath = findExecutable(__dirname, 'tsc');

  const tscCommand = `${tscPath} ${process.argv.slice(2).join(' ')}`;

  console.log(`cwd = ${chalk.red(process.cwd())}`);
  console.log(chalk.cyan(`running tsc in ${chalk.yellow(tscPath)} with ${tscCommand}`));

  const tsc = exec(tscCommand);

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

function build() {
  try {
    runTypeScriptBuild();

    const patterns = ['*.scss', '*.css', '*.png', '*.jpg', '*.md', '*.svg'].map(
      (pattern) => `${paths.appSrc}/**/${pattern}`
    );

    copy(patterns, paths.appBuild, (err) => {
      if (err) {
        throw err;
      }
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
