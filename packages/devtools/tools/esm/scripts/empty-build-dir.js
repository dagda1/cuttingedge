import { paths } from '../config/paths.js';
import logger from './logger.js';
import fs from 'fs-extra';
export const emptyBuildDir = () => {
    if (process.env.WATCHING !== 'true') {
        logger.warn(`emptying dist ${paths.appBuild}`);
        fs.emptyDirSync(paths.appBuild);
    }
    else {
        logger.warn(`WATCHING so not deleting build directory`);
    }
};
//# sourceMappingURL=empty-build-dir.js.map