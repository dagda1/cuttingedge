import fs from 'fs';
import path from 'path';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type FN = (...args: any[]) => any;

const pipe =
  (...fns: FN[]) =>
  <A>(x: A) =>
    fns.reduce((v, f) => f(v), x);

function flattenArray<A>(input: A[]) {
  return input.reduce((acc, item) => [...acc, ...(Array.isArray(item) ? item : [item])], [] as A[]);
}

const map =
  (fn: FN) =>
  <A>(input: A[]) =>
    input.map(fn);

function walkDir(fullPath: string) {
  return fs.statSync(fullPath).isFile() ? fullPath : getAllFilesRecursively(fullPath);
}

const pathJoinPrefix = (prefix: string) => (extraPath: string) => path.join(prefix, extraPath);

export function getAllFilesRecursively(folder: string): string[] {
  return pipe(fs.readdirSync, map(pipe(pathJoinPrefix(folder), walkDir)), flattenArray)(folder) as unknown as string[];
}
