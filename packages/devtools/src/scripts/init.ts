import { createInitialFiles } from './createInitialFiles';
import logger from './logger';

(async () => {
  try {
    await createInitialFiles();
  } catch (err) {
    logger.error(err);
    process.exit(1);
  }
})();
