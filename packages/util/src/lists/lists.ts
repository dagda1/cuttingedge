export const flatten = <T>(arr: ArrayLike<T | ReadonlyArray<T>>): T[] =>
  Array.isArray(arr) ? Array.from(arr).reduce<T[]>((a, b) => a.concat(b as T[]), []) : [arr as T];

export const flattenDeep = <T>(arr: ArrayLike<T | ReadonlyArray<T>>): T[] =>
  Array.isArray(arr) ? arr.reduce((a, b) => [...flattenDeep<T>(a), ...flattenDeep<T>(b)], []) : [arr as T];
