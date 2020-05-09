'use strict';

const logger = require('./logger');

const printErrors = (summary, errors) => {
  logger.error(summary);
  errors.forEach(err => {
    logger.error(err.message || err);
  });
};

module.exports = printErrors;
