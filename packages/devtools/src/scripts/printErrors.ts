import { logger } from './logger';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const printErrors = (summary: string, errors: Error[]) => {
  logger.error(summary);
  errors.forEach((err) => {
    logger.error(err.message || err);
  });
};

export default printErrors;
