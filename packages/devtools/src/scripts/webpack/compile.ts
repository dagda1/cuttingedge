import formatWebpackMessages from 'react-dev-utils/formatWebpackMessages';
import printErrors from '../printErrors';
import webpack, { Configuration, Stats } from 'webpack';
import { logger } from '../logger';
import { BuildType } from '../../types/build';

// Wrap webpack compile in a try catch.
function compileWebpack(config: Configuration, cb: (err: Error, stats: Stats) => void) {
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

export const compile = (config: Configuration, buildType: BuildType): Promise<{ stats: Stats }> => {
  return new Promise((resolve, reject) => {
    logger.info(`compiling ${buildType}`);
    compileWebpack(config, (err, stats) => {
      if (err) {
        logger.error(err.message);
        reject(err);
        return;
      }
      const messages = formatWebpackMessages(stats.toJson({}, true));

      if (messages.errors.length) {
        return reject(new Error(messages.errors.join('\n')));
      }

      logger.done(`Compiled ${buildType} successfully.`);

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
