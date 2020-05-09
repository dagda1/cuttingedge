/* eslint-disable @typescript-eslint/no-use-before-define */
import { cancelable } from './cancellable';
import { assert } from '@cutting/util';
import { isPromise, isGeneratorFunction, isObject } from './utils';
import { Fn } from './types';

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

export function runWithCancel<T, R, N>(
  this: any,
  {
    fn,
    cancel,
  }: {
    fn: Fn;
    cancel: Promise<any>;
  },
) {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const ctx = this;

  return cancelable((resolve, reject, onCancel) => {
    const it = typeof fn === 'function' ? fn.apply(ctx, []) : fn;

    const next = ({ value, done }: IteratorResult<T, R>) => {
      if (done) {
        return resolve(value);
      }

      const promise = promisify(value, cancel);

      return promise.then(resolved, rejected);
    };

    const onCancelled = (error: Error) => {
      try {
        console.log('cancellleeedd');

        it.throw(error);
        reject(error);
      } catch (error) {
        return reject(error);
      }
    };

    const resolved = (res?: any) => {
      try {
        // console.log(res);
        const result = it.next(res);

        next(result);
      } catch (e) {
        return reject(e);
      }
    };

    onCancel(onCancelled);
    resolved();

    const rejected = (err: any) => {
      console.log('should be rejected');
      try {
        const ret = it.throw(err);
        next(ret);
      } catch (e) {
        return reject(e);
      }
    };
  }, cancel);
}

export function objectToPromise(this: any, obj: { [key: string]: any }, cancel: Promise<any>) {
  const results = { ...obj };
  const keys = Object.keys(obj);
  const promises: Promise<any>[] = [];

  for (const key of keys) {
    const promise = promisify.call(this, obj[key], cancel);
    if (promise && isPromise(promise)) {
      defer(promise, key);
    } else {
      results[key] = obj[key];
    }
  }

  return Promise.all(promises).then(() => results);

  function defer(promise: Promise<any>, key: string) {
    console.log('is defer');
    results[key] = undefined;
    promises.push(
      promise.then((res) => {
        results[key] = res;
      }),
    );
  }
}

function promisify(this: any, obj: any, cancel: Promise<any>): Promise<any> {
  assert(!!obj, 'undefined passed to promisify');

  if (isPromise(obj)) {
    // console.log('isPromise');
    return obj;
  }

  if (typeof obj === 'function' || isGeneratorFunction(obj)) {
    console.log('is generatorFunction');
    return runWithCancel.call(this, {
      fn: obj,
      cancel,
    });
  }

  if (Array.isArray(obj)) {
    console.log('is array');
    return Promise.all(obj.map((o) => promisify(o, cancel)));
  }

  if (isObject(obj)) {
    console.log('isArray');
    return objectToPromise(obj, cancel);
  }

  return obj;
}
