/* eslint-disable @typescript-eslint/ban-ts-ignore */

import { Operation } from './task/operation';

export const isFunction = (x: any): x is Function => typeof x === 'function';

export const isObject = (x: any): x is Record<string, any> => x !== null && Object(x) === x;

export const isPromise = <T>(x: any): x is PromiseLike<T> => {
  return isObject(x) && isFunction(x.then);
};

export function isIterator<T, R = T>(x: any): x is Iterator<Operation<T>, Promise<R>> {
  // @ts-ignore
  return 'function' === typeof x.next && 'function' === typeof x.throw;
}
