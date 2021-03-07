import { logger } from '../logger';
import { execSync } from 'child_process';
import fs from 'fs-extra';
import { paths } from '../../config/paths';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const getCommitHash = () => {
  if (!fs.existsSync(paths.gitDir) === false) {
    logger.warn(`no git found.  Creating timestamp`);
    return new Date().toISOString();
  }
  try {
    return execSync('git rev-parse HEAD', { timeout: 1000 }).toString().trim();
  } catch (err) {
    logger.error('The git is not working.  Creating a timestamp');
    console.error(err);
    return new Date().toISOString();
  }
};
