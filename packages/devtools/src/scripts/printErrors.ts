import { logger } from './logger.js';

const printErrors = (summary: string, errors: Error[]): void => {
  logger.error(summary);
  errors.forEach((err) => {
    logger.error(err.message || err);
  });
};

export default printErrors;
