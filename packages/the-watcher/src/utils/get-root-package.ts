import path from 'path';
import fs from 'fs';
import { logger } from '@cutting/devtools/tools/scripts/logger';

const MaxTries = 10;

export const isMonorepo = async (cwd: string): Promise<boolean> => {
  const pkgPath = path.join(cwd, 'package.json');

  logger.debug(`checking in ${pkgPath}`);

  if (!fs.existsSync(pkgPath)) {
    return false;
  }

  logger.debug(`found ${pkgPath}`);

  const pkg = await import(pkgPath);

  return 'workspaces' in pkg;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function* findIO(cwd: string = process.cwd(), predicate: (dir: string) => Promise<boolean>, tries = 0): any {
  if (tries === MaxTries) {
    throw new Error(`cannot find in ${cwd}`);
  }

  if (yield predicate(cwd)) {
    logger.done(`root is ${cwd}`);
    return cwd;
  }

  return yield findIO(path.resolve(cwd, '..'), predicate, ++tries);
}
