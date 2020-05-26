const formatWebpackMessages = require('react-dev-utils/formatWebpackMessages');
const printErrors = require('../printErrors');
const webpack = require('webpack');
const logger = require('../logger');

// Wrap webpack compile in a try catch.
function compile(config, cb) {
  let compiler;
  try {
    compiler = webpack(config);
  } catch (e) {
    printErrors('Failed to compile.', [e]);
    process.exit(1);
  }
  compiler.run((err, stats) => {
    cb(err, stats);
  });
}

module.exports.compile = (config, type) => {
  return new Promise((resolve, reject) => {
    logger.info(`compiling ${type}`);

    compile(config, (err, stats) => {
      if (err) {
        logger.error(err.message);
        reject(err);
        return;
      }
      const messages = formatWebpackMessages(stats.toJson({}, true));

      if (messages.errors.length) {
        return reject(new Error(messages.errors.join('\n')));
      }

      logger.done(`Compiled ${type} successfully.`);

      if (messages.warnings.length) {
        logger.warn('Compiled with warnings.');
        logger.warn(messages.warnings.join('\n\n'));
        logger.warn('Search for the keywords to learn more about each warning.');
        logger.warn('To ignore, add // eslint-disable-next-line to the line before.');
      } else {
        logger.info('Compiled successfully.');
      }

      return resolve({
        stats,
      });
    });
  });
};
