import fs from 'fs-extra';

import { paths } from '../config/paths';
import logger from './logger';

export const emptyBuildDir = (): void => {
  if (process.env.WATCHING !== 'true') {
    logger.warn(`emptying dist ${paths.appBuild}`);
    fs.emptyDirSync(paths.appBuild);
  } else {
    logger.warn(`WATCHING so not deleting build directory`);
  }
};
