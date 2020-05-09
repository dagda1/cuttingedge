'use strict';

const logger = require('../logger');

const getCommitHash = () => {
  try {
    return require('child_process')
      .execSync('git rev-parse HEAD', { timeout: 1000 })
      .toString()
      .trim();
  } catch (err) {
    logger.error(err);
    throw err;
  }
};

module.exports = {
  getCommitHash,
};
