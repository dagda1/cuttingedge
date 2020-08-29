import { logger } from '../logger';

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export const getCommitHash = () => {
  try {
    return require('child_process').execSync('git rev-parse HEAD', { timeout: 1000 }).toString().trim();
  } catch (err) {
    logger.error(err);
    throw err;
  }
};
