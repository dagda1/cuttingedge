import path from 'path';
import fs from 'fs';

const MaxTries = 10;

export const isMonorepo = async (cwd: string): Promise<boolean> => {
  const pkgPath = path.join(cwd, 'package.json');

  if (!fs.existsSync(pkgPath)) {
    return false;
  }

  const pkg = await import(pkgPath);

  return 'workspaces' in pkg;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function findIO(p: string, predicate: (dir: string) => Promise<boolean>, tries = 0): Promise<string> {
  if (tries === MaxTries) {
    throw new Error(`cannot find in ${p}`);
  }

  if (await predicate(p)) {
    return p;
  }

  return await findIO(path.resolve(p, '..'), predicate, ++tries);
}
