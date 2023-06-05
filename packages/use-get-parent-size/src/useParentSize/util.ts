export const isNil = <T>(val: T | null | undefined): val is null | undefined =>
  typeof val === 'undefined' || val === null;

export const identity = <T>(o: T): T => o;
