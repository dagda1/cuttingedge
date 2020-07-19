import logger from './logger';
import fs from 'fs-extra';
import path from 'path';
import { paths } from '../config/paths';
import copy from 'copy';
import { exec } from 'child_process';
import { findFile } from './utils/finders';

const MaxTries = 15;

export function findExecutable(current: string, executable: string, tries = 0): any {
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

  const eslint = exec(`${eslintPath} ${args}`) as any;

  eslint.stdout.on('data', (data: string) => logger.info(data));
  eslint.stderr.on('data', (data: string) => logger.error(data));

  eslint.on('close', (code: any) => {
    logger.done(`eslint exited with code ${code}.`);

    if (code !== 0) {
      process.exit(code);
    }
  });
}

function runTypeScriptBuild() {
  fs.emptyDirSync(paths.appBuild);

  process.argv.push('--pretty', true.toString().toLocaleLowerCase());

  process.argv.push('-p', paths.tsConfig);

  const tscPath = findExecutable(__dirname, 'tsc');

  const tscCommand = `${tscPath} ${process.argv.slice(2).join(' ')}`;

  logger.start(`running tsc`);

  const tsc = exec(tscCommand) as any;

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

    const patterns = ['*.scss', '*.css', '*.png', '*.jpg', '*.md', '*.svg', '*.json', '*.html', 'config.js'].map(
      (pattern) => `${paths.appSrc}/**/${pattern}`,
    );

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
