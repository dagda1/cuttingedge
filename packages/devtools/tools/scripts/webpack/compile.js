'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.compile = void 0;
var formatWebpackMessages_1 = __importDefault(require('react-dev-utils/formatWebpackMessages'));
var printErrors_1 = __importDefault(require('../printErrors'));
var webpack_1 = __importDefault(require('webpack'));
var logger_1 = require('../logger');
var assert_ts_1 = require('assert-ts');
// Wrap webpack compile in a try catch.
function compileWebpack(config, cb) {
  var compiler;
  try {
    compiler = (0, webpack_1.default)(config);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (e) {
    logger_1.logger.warn('we did not make it');
    console.error(e);
    (0, printErrors_1.default)('Failed to compile.', [e]);
    process.exit(1);
  }
  compiler.run(function (err, stats) {
    cb(err, stats);
  });
}
var compile = function (config, buildType) {
  return new Promise(function (resolve, reject) {
    logger_1.logger.info('compiling ' + buildType);
    compileWebpack(config, function (err, stats) {
      if (err) {
        console.error(err);
        reject(err);
        return;
      }
      (0, assert_ts_1.assert)(typeof stats !== 'undefined', 'no stats in compile');
      var messages = (0, formatWebpackMessages_1.default)(stats.toJson({ all: false, warnings: true, errors: true }));
      if (messages.errors.length) {
        return reject(new Error(messages.errors.join('\n')));
      }
      logger_1.logger.done('Compiled ' + buildType + ' successfully.');
      if (messages.warnings.length) {
        logger_1.logger.warn('Compiled with warnings.');
        logger_1.logger.warn(messages.warnings.join('\n\n'));
        logger_1.logger.warn('Search for the keywords to learn more about each warning.');
        logger_1.logger.warn('To ignore, add // eslint-disable-next-line to the line before.');
      } else {
        logger_1.logger.info('Compiled successfully.');
      }
      return resolve({
        stats: stats,
      });
    });
  });
};
exports.compile = compile;
//# sourceMappingURL=compile.js.map
