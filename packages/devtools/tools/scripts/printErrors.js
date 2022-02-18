'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const logger_1 = require('./logger');
const printErrors = (summary, errors) => {
  logger_1.logger.error(summary);
  errors.forEach((err) => {
    logger_1.logger.error(err.message || err);
  });
};
exports.default = printErrors;
//# sourceMappingURL=printErrors.js.map
