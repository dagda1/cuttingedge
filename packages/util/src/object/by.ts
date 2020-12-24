import { isNil } from './isNil';

export type PartialShallow<T> = {
  [P in keyof T]?: T[P] extends Record<string, unknown> ? Record<string, unknown> : T[P];
};

export type PropertyReturn = string | number | symbol;

export const pickBy = <T>(
  o: T,
  predicate: <K extends keyof T>(value: T[K]) => PropertyReturn | boolean,
): PartialShallow<T> => {
  if (isNil(o)) {
    return o;
  }

  const ret: PartialShallow<T> = {};

  for (const [key, value] of Object.entries(o)) {
    if (isNil(value) || !!predicate(value) === false) {
      continue;
    }

    ret[key] = value;
  }

  return ret;
};

export const countBy = <T>(o: T[], predicate: (o: T) => PropertyReturn): PartialShallow<T> => {
  const ret: PartialShallow<T> = {};

  for (const [, value] of Object.entries<T>(o)) {
    const result = predicate(value);

    if (!ret[result]) {
      ret[result] = 0;
    }

    if (Boolean(value) === false || typeof result === 'undefined' || result === null) {
      continue;
    }

    ret[result]++;
  }

  return ret;
};

export const sortBy = <T, R>(o: T[], selector: (item: T) => R): T[] => {
  if (isNil(o)) {
    return [];
  }

  const result = o.slice(0);

  result.sort((x, y) => {
    const a = selector(x);
    const b = selector(y);

    return a > b ? 1 : a < b ? -1 : 0;
  });

  return result;
};

export const uniqBy = <T, R>(list: T[], selector: (item: T) => R): T[] => {
  const ret: T[] = [];

  const set = new Set<R>();

  for (const item of list) {
    const value = selector(item);

    if (set.has(value) === false) {
      set.add(value);
      ret.push(item);
    }
  }

  return ret;
};

export const sortedUniqBy = <T, R>(o: T[], selector: (item: T) => R): T[] => {
  return uniqBy(sortBy(o, selector), selector);
};

export const groupBy = <T>(o: T[], selector: (item: T) => T): { [key: string]: T[] } => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return o.reduce((acc: any, item) => {
    const key = selector(item);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return Object.assign(acc, { [key as any]: (acc[key] || []).concat(item) });
  }, {});
};
