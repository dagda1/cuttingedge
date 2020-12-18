import { logger } from '../logger';
import { execSync } from 'child_process';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const getCommitHash = () => {
  try {
    return execSync('git rev-parse HEAD', { timeout: 1000 }).toString().trim();
  } catch (err) {
    logger.error(err);
    throw err;
  }
};
