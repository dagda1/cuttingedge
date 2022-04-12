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
  '@vanilla-extract/babel-plugin',
  'jest',
  'ts-jest',
  'typescript',
];

const applicationDevDependencies: Record<ApplicationType, string[]> = {
  [ApplicationType.WebApp]: ['@vanilla-extract/css', '@vanilla-extract/sprinkles'],
  [ApplicationType.package]: [],
  [ApplicationType.cli]: ['nodemon', 'ts-node'],
};

const applicationDependencies: Record<ApplicationType, string[]> = {
  [ApplicationType.WebApp]: ['react', 'react-dom', '@cutting/util', '@cutting/hooks', '@cutting/component-library'],
  [ApplicationType.package]: [],
  [ApplicationType.cli]: [],
};

function install(dependencies: string) {
  const pnpm = exec(`pnpm install ${dependencies}`);

  pnpm.stdout?.on('data', (data) => logger.info(data));
  pnpm.stderr?.on('data', (data) => logger.error(data));

  pnpm.on('close', (code) => {
    logger.done(`pnpm exited with code ${code}`);

    if (code !== 0) {
      process.exit(1);
    }
  });
}

export function installDependencies(appName: string, applicationType: ApplicationType): void {
  logger.info(`createing pacakge.json file for ${appName}`);

  const packageJson = {
    name: appName,
    version: '0.1.0',
    private: true,
  };

  fs.writeFileSync('package.json', JSON.stringify(packageJson, null, 2) + os.EOL);

  logger.info(`installing devDependencies for ${appName}`);

  const devDependencyList = [...devDependencies, ...applicationDevDependencies[applicationType]].join(' ');

  install(`${devDependencyList} --save-dev`);

  const dependencyList = applicationDependencies[applicationType];

  if (dependencyList.length > 0) {
    logger.info(`installing dependencies for ${appName}`);

    install(`${dependencyList.join(' ')}`);
  }

  logger.info(`dependencies installed for ${appName}`);
}
