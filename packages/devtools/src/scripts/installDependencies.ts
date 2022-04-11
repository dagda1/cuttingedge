import path from 'path';
import fs from 'fs-extra';
import os from 'os';
import { ApplicationType } from '../types/applicationType';
import { exec } from 'child_process';
import { logger } from './logger';

const devDependencies = [
  '@cutting/devtools',
  '@cutting/eslint-config',
  '@cutting/tsconfig',
  '@cutting/useful-types',
  '@cutting/util',
  '@jest/globals',
  '@types/eslint',
  '@typescript-eslint/eslint-plugin',
  'jest',
  'ts-jest',
  'typescript',
];

const applicationDevDependencies: Record<ApplicationType, string[]> = {
  [ApplicationType.WebApp]: [],
  [ApplicationType.package]: [],
  [ApplicationType.cli]: ['nodemon', 'ts-node'],
};

export function installDependencies(projectName: string, applicationType: ApplicationType): void {
  const root = path.resolve(projectName);
  const appName = path.basename(root);

  fs.ensureDirSync(projectName);

  logger.info(`createing pacakge.json file for ${projectName}`);

  const packageJson = {
    name: appName,
    version: '0.1.0',
    private: true,
  };

  fs.writeFileSync(path.join(root, 'package.json'), JSON.stringify(packageJson, null, 2) + os.EOL);

  const originalDirectory = process.cwd();

  process.chdir(root);

  const dependencyList = [...devDependencies, ...applicationDevDependencies[applicationType]].join(' ');

  logger.info(`installing dependencies for ${projectName}`);

  const pnpm = exec(`pnpm install ${dependencyList} --save-dev`);

  pnpm.stdout?.on('data', (data) => logger.info(data));
  pnpm.stderr?.on('data', (data) => logger.error(data));

  pnpm.on('close', (code) => {
    logger.done(`pnpm exited with code ${code}`);

    if (code !== 0) {
      process.exit(1);
    }
  });

  logger.info(`dependencies installed for ${projectName}`);

  process.chdir(originalDirectory);
}
