import { scaffold } from './createScaffold';
import logger from './logger';

(async () => {
  try {
    await scaffold();
  } catch (err) {
    logger.error(err);
    process.exit(1);
  }
})();
