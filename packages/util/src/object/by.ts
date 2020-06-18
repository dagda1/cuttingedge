import { isNil } from './isNil';

export type PartialShallow<T> = { [P in keyof T]?: T[P] extends object ? object : T[P] };

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

    ret[key as keyof T] = value;
  }

  return ret;
};

export const countBy = <T>(o: T[], predicate: (o: T) => PropertyReturn): PartialShallow<T> => {
  const ret: any = {};

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

export const sortBy = <T>(o: T[], selector: (item: T) => any): T[] => {
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

export const uniqBy = <T>(o: T[], selector: (item: T) => any): T[] => {
  const ret: T[] = [];

  const set = new Set<T>();

  o.forEach((s) => {
    const value = selector(s);

    if (set.has(value) === false) {
      set.add(value);
      ret.push(s);
    }
  });

  return ret;
};

export const sortedUniqBy = <T>(o: T[], selector: (item: T) => any): T[] => {
  return uniqBy(sortBy(o, selector), selector);
};

export const groupBy = <T>(o: T[], selector: (item: T) => any): { [key: string]: T[] } => {
  return o.reduce((acc: any, item) => {
    const key = selector(item);

    return Object.assign(acc, { [key]: (acc[key] || []).concat(item) });
  }, {});
};
