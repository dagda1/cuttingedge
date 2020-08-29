export const flatten = <T>(arr: ArrayLike<T | ReadonlyArray<T>>): T[] =>
  Array.isArray(arr) ? arr.reduce((a, b) => a.concat(b), []) : [arr];

export const flattenDeep = <T>(arr: ArrayLike<T | ReadonlyArray<T>>): T[] =>
  Array.isArray(arr) ? arr.reduce((a, b) => [...flattenDeep<T>(a), ...flattenDeep<T>(b)], []) : [arr];
