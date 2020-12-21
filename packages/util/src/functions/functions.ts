import { isDate } from '../date/date';
import { isNil } from '../object/isNil';

// eslint-disable-next-line @typescript-eslint/no-empty-function
export const noop = (): void => {};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Fn = (...args: any) => any;

export const isPromise = <T>(obj: unknown): obj is Promise<T> => {
  return (
    typeof !isNil(obj) && typeof obj === 'object' && obj !== null && 'then' in obj && 'function' === typeof obj['then']
  );
};

export const isAsyncFunction = <F extends Fn>(f: F): boolean => {
  if (typeof f !== 'function') {
    return false;
  }

  const s = f.toString().trim();

  // not a great way to determine but there does not appear to be any
  // other way by conventional means
  return !!(s.match(/^async /) || s.match(/return __awaiter/));
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isFunction = (x: any): x is Fn => {
  if (isDate(x)) {
    return false;
  }

  return typeof x === 'function';
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isObject = (x: any): x is Record<string, unknown> => x !== null && Object(x) === x;
