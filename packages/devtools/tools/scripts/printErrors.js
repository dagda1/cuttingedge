import { logger } from './logger.js';
const printErrors = (summary, errors) => {
    logger.error(summary);
    errors.forEach((err) => {
        logger.error(err.message || err);
    });
};
export default printErrors;
//# sourceMappingURL=printErrors.js.map