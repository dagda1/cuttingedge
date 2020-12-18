import copy from 'copy';
import { paths } from '../config/paths';

export const copyAssets = (): void => {
  const patterns = ['*.scss', '*.css', '*.png', '*.jpg', '*.md', '*.svg', '*.json', '*.html', '*.csv', 'config.js'].map(
    (pattern) => `${paths.appSrc}/**/${pattern}`,
  );

  copy(patterns, paths.appBuild, (err) => {
    if (err) {
      throw err;
    }
  });
};
