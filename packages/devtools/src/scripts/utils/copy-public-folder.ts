import fs from 'fs-extra';
import { paths } from '../../config/paths.js';
import copy from 'copy';
import { logger } from '../logger.js';

export const copyPublicFolder = (): void => {
  if (!fs.existsSync(paths.appPublic)) {
    return;
  }

  if (!fs.existsSync(paths.appBuildPublic)) {
    fs.mkdirSync(paths.appBuildPublic, { recursive: true });
  }

  logger.debug(`copying from ${paths.appPublic} to ${paths.appBuildPublic}`);

  const patterns = [
    '*.css',
    '*.js',
    '*.pdf',
    '*.docx',
    '*.png',
    '*.jpg',
    '*.md',
    '*.svg',
    '*.json',
    '*.html',
    '*.csv',
    'config.js',
    '*.ico',
    '*.properties',
  ].map((pattern) => `${paths.appPublic}/**/${pattern}`);

  logger.debug(`copying assets to ${paths.appBuildPublic}`);

  copy(patterns, paths.appBuildPublic, (err) => {
    if (err) {
      throw err;
    }
  });
};
