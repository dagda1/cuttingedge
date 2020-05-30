/* eslint-disable @typescript-eslint/ban-ts-ignore */

export const isFunction = (x: any): x is Function => typeof x === 'function';

export const isObject = (x: any): x is Record<string, any> => x !== null && Object(x) === x;

export const isPromise = <T>(x: any): x is PromiseLike<T> => {
  return isObject(x) && isFunction(x.then);
};

export function isIterator<T>(x: any): x is Iterator<T> {
  // @ts-ignore
  return isObject(x) && !isFunction(x[Symbol.iterator]) && isFunction(x['next']);
}
