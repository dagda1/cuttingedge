import { logger } from './logger';

const printErrors = (summary: string, errors: Error[]): void => {
  logger.error(summary);
  errors.forEach((err) => {
    logger.error(err.message || err);
  });
};

export default printErrors;
