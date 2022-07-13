import { scaffold } from './createScaffold';
import logger from './logger.js';
(async () => {
    try {
        await scaffold();
    }
    catch (err) {
        logger.error(err);
        process.exit(1);
    }
})();
//# sourceMappingURL=init.js.map