import { logger } from './logger';
import fs from 'fs-extra';
import path from 'path';
import { paths } from '../config/paths';
import { exec } from 'child_process';
import { findFile } from './utils/finders';
import { copyAssets } from './copy-assets';

const isProduction = process.env.NODE_ENV === 'production';

const MaxTries = 15;

export function findExecutable(current: string, executable: string, tries = 0): string {
  const modulesDir = path.resolve(current, 'node_modules', '.bin', executable);

  if (tries === MaxTries) {
    throw new Error(`cannot find ${executable} in ${modulesDir}`);
  }

  if (fs.existsSync(modulesDir)) {
    return modulesDir;
  }

  return findExecutable(path.resolve(current, '..'), executable, ++tries);
}

export function runEslint(): void {
  logger.start(`Running eslint`);
  const eslintPath = findExecutable(__dirname, 'eslint');

  const eslintConfig = findFile(process.cwd(), '.eslintrc.json');

  const args = ` --ext .ts,.tsx --max-warnings 0 ${paths.appSrc} --ignore-pattern *.test.* -c ${eslintConfig} --fix`;

  const eslint = exec(`${eslintPath} ${args}`);

  eslint.stdout?.on('data', (data: string) => logger.info(data));
  eslint.stderr?.on('data', (data: string) => logger.error(data));

  eslint.on('close', (code) => {
    logger.done(`eslint exited with code ${code}.`);

    if (code !== 0) {
      process.exit(code as number);
    }
  });
}

function runTypeScriptBuild() {
  if (paths.projectReferences) {
    process.argv.push('--build');
  } else {
    process.argv.push('-p', isProduction ? paths.tsConfigProduction : paths.tsConfig);
  }

  const tscPath = findExecutable(__dirname, 'tsc');

  const tscCommand = `${tscPath} ${process.argv.slice(2).join(' ')}`;

  logger.info(`running ${path.basename(tscCommand)}, in ${path.dirname(process.cwd())}`);

  logger.start(`running tsc`);

  const tsc = exec(tscCommand);

  tsc.stdout?.on('data', (data) => logger.info(data));
  tsc.stderr?.on('data', (data) => logger.error(data));

  tsc.on('close', (code) => {
    logger.done(`tsc exited with code ${code}`);

    if (code !== 0) {
      process.exit(1);
    }
  });
}

function build() {
  try {
    runTypeScriptBuild();
    runEslint();

    copyAssets();
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
