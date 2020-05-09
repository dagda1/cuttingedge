'use strict';
const fs = require('fs-extra');
const path = require('path');
const paths = require('../config/paths');
const copy = require('copy');
const { exec } = require('child_process');
const { findFile } = require('../config/utils');
const logger = require('./logger');
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
  logger.start(`Running eslint`);
  const eslintPath = findExecutable(__dirname, 'eslint');

  const eslintConfig = findFile(process.cwd(), '.eslintrc.json');

  const args = ` --ext .ts,.tsx --max-warnings 0 ${paths.appSrc} -c ${eslintConfig} --fix`;

  const eslint = exec(`${eslintPath} ${args}`);

  eslint.stdout.on('data', (data) => logger.info(data));
  eslint.stderr.on('error', (data) => logger.error(data));

  eslint.on('close', (code) => {
    logger.done(`eslint exited with code ${code}`);

    if (code !== 0) {
      process.exit(1);
    }
  });
}

function runTypeScriptBuild() {
  const buildConfig = require(paths.jsBuildConfigPath).ts;
  const {
    options: {},
  } = buildConfig;

  fs.emptyDirSync(paths.appBuild);

  process.argv.push('--pretty', true);

  process.argv.push('-p', paths.tsConfig);

  const tscPath = findExecutable(__dirname, 'tsc');

  const tscCommand = `${tscPath} ${process.argv.slice(2).join(' ')}`;

  logger.start('running tsc');

  const tsc = exec(tscCommand);

  tsc.stdout.on('data', (data) => logger.info(data));
  tsc.stderr.on('data', (data) => logger.error(data));

  tsc.on('close', (code) => {
    logger.done(`tsc exited with code ${code}`);

    if (code !== 0) {
      process.exit(1);
    }

    runEslint();
  });
}

function build() {
  try {
    runTypeScriptBuild();

    const patterns = ['*.scss', '*.css', '*.png', '*.jpg', '*.md', '*.svg', '*.json'].map((pattern) => `${paths.appSrc}/**/${pattern}`);

    copy(patterns, paths.appBuild, (err) => {
      if (err) {
        throw err;
      }
    });
  } catch (e) {
    logger.error(e);
    logger.error(e.stack);

    if (e.frame) {
      logger.error(e.frame);
    }

    process.exit(1);
  }
}

build();
