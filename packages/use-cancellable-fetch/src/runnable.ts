/* eslint-disable @typescript-eslint/no-use-before-define */
import { isPromise, isGeneratorFunction, isObject } from './utils';
import { Fn, UnknownArgs } from './types';
import { assert } from '@cutting/util';
import { CancelToken } from './cancelToken';

export function makeRunnable<T, R, N>(
  this: any,
  {
    fn,
    controller,
  }: {
    fn: Fn;
    controller: AbortController;
  },
) {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const ctx = this;

  const token = new CancelToken(controller);

  const runnable = <Args extends any[] = UnknownArgs>(...args: Args) => {
    return new Promise((resolve, reject) => {
      const it = typeof fn === 'function' ? fn.apply(ctx, args || []) : fn;
      const next = ({ value, done }: IteratorResult<T, R>) => {
        if (done) {
          return resolve(value);
        }

        const promise = promisify(value);

        return promise.then(resolved, rejected);
      };

      token.promise.catch((reason) => {
        try {
          console.log('cancellleeedd');

          it.throw(reason);
          reject(reason);
        } catch (error) {
          return reject(error);
        }
      });

      const resolved = (res?: any) => {
        try {
          // console.log(res);
          const result = it.next(res);

          next(result);
        } catch (e) {
          return reject(e);
        }
      };

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
    });
  };

  return { runnable };
}

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
    console.log('is defer');
    results[key] = undefined;
    promises.push(
      promise.then((res) => {
        results[key] = res;
      }),
    );
  }
}

function promisify(this: any, obj: any): Promise<any> {
  assert(!!obj, 'undefined passed to promisify');

  if (isPromise(obj)) {
    // console.log('isPromise');
    return obj;
  }

  if (typeof obj === 'function' || isGeneratorFunction(obj)) {
    console.log('is generatorFunction');
    throw new Error('what do we do here');
    // return runWithCancel.call(this, {
    //   fn: obj,
    // });
  }

  if (Array.isArray(obj)) {
    console.log('is array');
    return Promise.all(obj.map((o) => promisify(o)));
  }

  if (isObject(obj)) {
    console.log('isArray');
    return objectToPromise(obj);
  }

  return obj;
}
