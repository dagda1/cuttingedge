import copy from 'copy';

import { paths } from '../config/paths.js';
import logger from './logger.js';

export const copyAssets = (): void => {
  const patterns = ['*.scss', '*.css', '*.png', '*.jpg', '*.md', '*.svg', '*.json', '*.html', '*.csv', 'config'].map(
    (pattern) => `${paths.appSrc}/**/${pattern}`,
  );

  logger.debug(`copying assets to ${paths.appBuild}`);

  copy(patterns, paths.appBuild, (err) => {
    if (err) {
      throw err;
    }
  });
};
