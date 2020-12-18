import fs from 'fs';
import path from 'path';
import { isMonorepo } from './is-monorepo';
import { findAsync } from '../scripts/utils/finders';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getRootPackage = async (cwd: string): Promise<any> => {
  const { monorepo } = await isMonorepo();

  if (monorepo === false) {
    return cwd;
  }

  const rootDir = await findAsync(cwd, async (dir) => {
    const pkgJsonPath = path.join(dir, 'package.json');

    if (!fs.existsSync(pkgJsonPath)) {
      return false;
    }

    const pkg = await import(pkgJsonPath);

    return pkg.workspaces !== undefined;
  });

  const pkgJsonPath = path.join(rootDir, 'package.json');

  const pkg = await import(pkgJsonPath);

  return { rootDir, ...pkg };
};
