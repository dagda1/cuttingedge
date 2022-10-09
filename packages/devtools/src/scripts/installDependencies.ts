import { ApplicationType } from '../types/applicationType.js';
import { exec } from 'child_process';
import { logger } from './logger.js';

const dependencies = ['assert-ts', '@cutting/util'];

const devDependencies = [
  '@cutting/devtools',
  '@cutting/eslint-config',
  '@cutting/tsconfig',
  '@cutting/useful-types',
  'vitest',
  '@types/eslint',
  '@types/node',
  '@typescript-eslint/eslint-plugin',
  '@typescript-eslint/parser',
  'eslint',
  'typescript',
  'webpack',
];

const applicationDevDependencies: Record<ApplicationType, string[]> = {
  [ApplicationType.WebApp]: [
    '@types/react',
    '@types/react-dom',
    '@types/react-router-dom',
    '@vanilla-extract/css',
    '@vanilla-extract/sprinkles',
    'core-js',
    'whatwg-fetch',
  ],
  [ApplicationType.package]: [],
  [ApplicationType.cli]: ['nodemon', 'ts-node'],
};

const applicationDependencies: Record<ApplicationType, string[]> = {
  [ApplicationType.WebApp]: [
    'react',
    'react-dom',
    'react-router',
    'react-router-dom',
    '@cutting/hooks',
    '@cutting/component-library',
  ],
  [ApplicationType.package]: [],
  [ApplicationType.cli]: [],
};

function install(dependencies: string) {
  return new Promise<void>((resolve) => {
    logger.debug(`installing in ${process.cwd()}`);
    const pnpm = exec(`pnpm add ${dependencies}`);

    pnpm.stdout?.on('data', (data) => logger.info(data));
    pnpm.stderr?.on('data', (data) => logger.error(data));

    pnpm.on('close', (code) => {
      if (code !== 0) {
        logger.error(`pnpm exited with code ${code}`);
        process.exit(1);
      }

      logger.done(`pnpm exited with code ${code}`);

      setTimeout(resolve, 500);
    });
  });
}

export async function installDependencies(appName: string, applicationType: ApplicationType): Promise<void> {
  const dependencyList = [...dependencies, ...applicationDependencies[applicationType]].join(' ');

  logger.info(`installing dependencies for ${appName}`);

  await install(`${dependencyList} -P`);
}

export async function installDevDependencies(appName: string, applicationType: ApplicationType): Promise<void> {
  logger.info(`installing devDependencies for ${appName}`);

  const devDependencyList = [...devDependencies, ...applicationDevDependencies[applicationType]].join(' ');

  await install(`${devDependencyList} --save-dev`);

  logger.info(`dependencies installed for ${appName}`);
}
