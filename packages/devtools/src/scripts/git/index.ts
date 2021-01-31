import { logger } from '../logger';
import { execSync } from 'child_process';
import { assert } from 'assert-ts';
import fs from 'fs-extra';
import { paths } from '../../config/paths';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const getCommitHash = () => {
  assert(fs.existsSync(paths.gitDir), 'You have not ran `git init`.');
  try {
    return execSync('git rev-parse HEAD', { timeout: 1000 }).toString().trim();
  } catch (err) {
    logger.error(err);
    throw err;
  }
};
