import logger from './logger';
const fs = require('fs-extra');
const path = require('path');
const paths = require('../config/paths');
const copy = require('copy');
const { exec } = require('child_process');
const { findFile } = require('../config/utils');
const MaxTries = 15;

export function findExecutable(current: any, executable: any, tries = 0): any {
  const modulesDir = path.resolve(current, 'node_modules', '.bin', executable);

  if (tries === MaxTries) {
    throw new Error(`cannot find ${executable} in ${modulesDir}`);
  }

  if (fs.existsSync(modulesDir)) {
    return modulesDir;
  }

  return findExecutable(path.resolve(current, '..'), executable, ++tries);
}

export function runEslint() {
  logger.start(`Running eslint`);
  const eslintPath = findExecutable(__dirname, 'eslint');

  const eslintConfig = findFile(process.cwd(), '.eslintrc.json');

  const args = ` --ext .ts,.tsx --max-warnings 0 ${paths.appSrc} --ignore-pattern *.test.* -c ${eslintConfig} --fix`;

  const eslint = exec(`${eslintPath} ${args}`);

  eslint.stdout.on('data', (data) => logger.info(data));
  eslint.stderr.on('data', (data) => logger.error(data));

  eslint.on('close', (code: any) => {
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

  process.argv.push('--pretty', true.toString().toLocaleLowerCase());

  process.argv.push('-p', paths.tsConfig);

  const tscPath = findExecutable(__dirname, 'tsc');

  const tscCommand = `${tscPath} ${process.argv.slice(2).join(' ')}`;

  logger.start(`running tsc`);

  const tsc = exec(tscCommand);

  tsc.stdout.on('data', (data: any) => logger.info(data));
  tsc.stderr.on('data', (data: any) => logger.error(data));

  tsc.on('close', (code: any) => {
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

    const patterns = ['*.scss', '*.css', '*.png', '*.jpg', '*.md', '*.svg', '*.json'].map(
      (pattern) => `${paths.appSrc}/**/${pattern}`,
    );

    copy(patterns, paths.appBuild, (err: Error) => {
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
