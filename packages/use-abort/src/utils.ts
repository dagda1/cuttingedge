import { Operation } from './task/operation';
import { AbortError } from './AbortError';
import { Fn } from './types';

export const isFunction = (x: any): x is Fn => typeof x === 'function';

export const isObject = (x: any): x is Record<string, any> => x !== null && Object(x) === x;

export const isPromise = <T>(x: any): x is PromiseLike<T> => {
  return isObject(x) && isFunction(x.then);
};

export function isIterator<T, R = T>(x: any): x is Iterator<Operation<T>, Promise<R>> {
  return 'function' === typeof x.next && 'function' === typeof x.throw;
}

export const throwIfAborted = (signal: AbortSignal) => {
  if (signal.aborted) {
    throw new AbortError();
  }
};
