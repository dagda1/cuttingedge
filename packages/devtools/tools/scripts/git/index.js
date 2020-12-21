'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.getCommitHash = void 0;
const logger_1 = require('../logger');
const child_process_1 = require('child_process');
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const getCommitHash = function () {
  try {
    return child_process_1.execSync('git rev-parse HEAD', { timeout: 1000 }).toString().trim();
  } catch (err) {
    logger_1.logger.error(err);
    throw err;
  }
};
exports.getCommitHash = getCommitHash;
//# sourceMappingURL=index.js.map
