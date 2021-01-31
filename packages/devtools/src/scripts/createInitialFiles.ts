import fs from 'fs-extra';
import path from 'path';
import { paths } from '../config/paths';
import logger from './logger';

export const createInitialFiles = (): void => {
  logger.info('init files check...');

  if (!fs.existsSync(paths.tsConfig)) {
    fs.copyFileSync(path.join(__dirname, '../../typescript/tsconfig.json'), paths.tsConfig);
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
