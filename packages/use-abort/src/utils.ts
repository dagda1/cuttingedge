import { Operation } from './task/operation';
import { AbortError } from './AbortError';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isIterator<T, R = T>(x: any): x is Iterator<Operation<T>, Promise<R>> {
  return 'function' === typeof x.next && 'function' === typeof x.throw;
}

export const throwIfAborted = (signal: AbortSignal): void => {
  if (signal.aborted) {
    throw new AbortError();
  }
};
