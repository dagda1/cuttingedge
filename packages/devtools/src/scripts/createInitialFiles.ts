import fs from 'fs-extra';
import path from 'path';
import { ApplicationType } from '../types/applicationType';
import { paths } from '../config/paths';
import logger from './logger';

const args = process.argv.slice(3);

console.dir({ args });

export const createInitialFiles = (applicationType: ApplicationType): void => {
  logger.info('init files check...');

  const applicationDirectory = applicationType === ApplicationType.cli ? 'cli' : 'demo';

  if (!fs.existsSync(paths.tsConfig)) {
    fs.copyFileSync(path.join(__dirname, '../..', applicationDirectory, 'tsconfig.json'), paths.tsConfig);
    logger.info('created tsconfig.json');
  }

  if (!fs.existsSync(paths.tsConfig)) {
    fs.copyFileSync(path.join(__dirname, '../..', applicationDirectory, 'tsconfig.json'), paths.tsConfig);
    logger.info('created tsconfig.json');
  }

  if (!fs.existsSync(paths.eslintConfig)) {
    logger.info('created eslintrc.json');
    fs.copyFileSync(path.join(__dirname, '../../typescript/.eslintrc.json'), path.join(paths.eslintConfig));
  }

  if (!fs.existsSync(paths.gitIgnore)) {
    fs.copyFileSync(path.join(__dirname, '../../init/.gitignore'), paths.gitIgnore);
    logger.info('created .gitignore');
  }

  logger.info('init check finished');
};
