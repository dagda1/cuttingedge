// eslint-disable-next-line @typescript-eslint/no-empty-function
export const noop = () => {};
export type Fn = (...args: any) => any;

export const thenable = <T>(obj: any): obj is Promise<T> => {
  return 'function' === typeof obj.then;
};

export const isAsyncFunction = <F extends Fn>(f: F) => {
  if (typeof f !== 'function') {
    return false;
  }

  const s = f.toString().trim();

  // not a great way to determine but there does not appear to be any
  // other way by conventional means
  return !!(s.match(/^async /) || s.match(/return __awaiter/));
};
