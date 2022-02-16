import formatWebpackMessages from 'react-dev-utils/formatWebpackMessages';
import printErrors from '../printErrors';
import type { Configuration, Stats } from 'webpack';
import webpack from 'webpack';
import { logger } from '../logger';
import type { BuildType } from '../../types/build';
import { assert } from 'assert-ts';

// Wrap webpack compile in a try catch.
function compileWebpack(config: Configuration, cb: (err?: Error, stats?: Stats) => void) {
  let compiler;
  try {
    compiler = webpack(config);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (e: any) {
    logger.warn('we did not make it');
    console.error(e);
    printErrors('Failed to compile.', [e]);
    process.exit(1);
  }
  compiler.run((err, stats) => {
    cb(err ?? undefined, stats);
  });
}

export const compile = (config: Configuration, buildType: BuildType): Promise<{ stats: Stats }> => {
  return new Promise((resolve, reject) => {
    logger.info(`compiling ${buildType}`);
    compileWebpack(config, (err, stats) => {
      if (err) {
        console.error(err);
        reject(err);
        return;
      }

      assert(typeof stats !== 'undefined', `no stats in compile`);

      const messages = formatWebpackMessages(stats.toJson({ all: false, warnings: true, errors: true }));

      if (messages.errors.length) {
        return reject(new Error(messages.errors.map((m) => m.substring(0, 100)).join('\n')));
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
