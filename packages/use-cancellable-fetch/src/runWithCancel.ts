/* eslint-disable @typescript-eslint/no-use-before-define */
import { cancelable } from './cancelable';
import { assert } from '@cutting/util';
import { isPromise, isGeneratorFunction, isObject } from './utils';

export class CancelError extends Error {}

export class CancellationToken {
  cancelled: boolean;

  throwIfCancelled(reason: string) {
    if (this.cancelled) {
      return;
    }

    this.cancelled = true;
    throw new CancelError(reason);
  }

  constructor() {
    this.cancelled = false;
  }
}

export const runWithCancel = <
  T,
  R,
  N,
  F extends (...args: any[]) => Generator<T, R, N>
>(
  gen: F,
  ...args: Parameters<F>
) => {
  const it = gen(...args);

  return cancelable((resolve, reject, onCancel) => {
    const onCancelled = (error: Error) => {
      try {
        it.throw(error);
        reject(error);
      } catch (error) {
        return reject(error);
      }
    };

    const resolved = (res?: any) => {
      try {
        const result = it.next(res);

        next(result);
      } catch (e) {
        return reject(e);
      }
    };

    onCancel(onCancelled);
    resolved();

    const next = ({ value, done }: IteratorResult<T, R>) => {
      if (done) {
        return resolve(value);
      }

      const promise = promisify(value);

      return promise.then(resolved, rejected);
    };

    const rejected = (err: any) => {
      try {
        const ret = it.throw(err);
        next(ret);
      } catch (e) {
        return reject(e);
      }
    };
  });
};

export function objectToPromise(this: any, obj: { [key: string]: any }) {
  const results = { ...obj };
  const keys = Object.keys(obj);
  const promises: Promise<any>[] = [];

  for (const key of keys) {
    const promise = promisify.call(this, obj[key]);
    if (promise && isPromise(promise)) {
      defer(promise, key);
    } else {
      results[key] = obj[key];
    }
  }

  return Promise.all(promises).then(() => results);

  function defer(promise: Promise<any>, key: string) {
    // predefine the key in the result
    results[key] = undefined;
    promises.push(
      promise.then(res => {
        results[key] = res;
      }),
    );
  }
}

export function promisify(
  this: any,
  obj: any,
  cancel?: Promise<any>,
): Promise<any> {
  assert(!!obj, 'undefined passed to promisify');

  if (isPromise(obj)) {
    return obj;
  }

  if (isGeneratorFunction(obj)) {
    return runWithCancel.call(this, obj);
  }

  if (Array.isArray(obj)) {
    return Promise.all(obj.map(o => promisify(o, cancel)));
  }

  if (isObject(obj)) {
    return objectToPromise(obj);
  }

  return obj;
}
