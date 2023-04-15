import type { Entries } from '../types/entries.js';
import type { DeepPartial } from '../types/DeepPartial.js';
import { isNil } from './isNil.js';

export type PropertyReturn = string | number | symbol;

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const keyBy = <T, K extends keyof T & string>(array: T[], key: K) =>
  (array || []).reduce((r, x) => ({ ...r, [(key ? x[key as K] : (x as keyof T)) as K]: x }), {});

export const pickBy = <T extends Record<keyof T & string, unknown>>(
  o: T,
  predicate: (value: T[keyof T]) => PropertyReturn | boolean,
): DeepPartial<T> | undefined | null => {
  if (isNil(o)) {
    return o;
  }

  const ret: DeepPartial<T> = {};

  for (const [key, value] of Object.entries(o) as Entries<T>) {
    if (isNil(value) || !!predicate(value) === false) {
      continue;
    }

    ret[key] = value;
  }

  return ret;
};

export const countBy = <T>(
  o: T[],
  predicate: (o: T[keyof T]) => keyof T & string,
): DeepPartial<Record<keyof T, number>> => {
  const ret: DeepPartial<Record<keyof T, number>> = {};

  for (const [, value] of Object.entries<T>(o) as Entries<T>) {
    const result = predicate(value);

    if (!ret[result]) {
      ret[result] = 0;
    }

    if (Boolean(value) === false || typeof result === 'undefined' || result === null) {
      continue;
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (ret as any)[result]++;
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
