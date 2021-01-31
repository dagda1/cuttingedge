import { logger } from '../logger';
import { execSync } from 'child_process';
import fs from 'fs-extra';
import { paths } from '../../config/paths';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const getCommitHash = () => {
  if (fs.existsSync(paths.gitDir) === false) {
    logger.error('You have not ran `git init`.');
    process.exit(1);
  }

  try {
    return execSync('git rev-parse HEAD', { timeout: 1000 }).toString().trim();
  } catch (err) {
    logger.error('You must have at least 1 git commit');
    process.exit(1);
  }
};
