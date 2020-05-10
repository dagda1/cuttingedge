/* eslint-disable @typescript-eslint/no-use-before-define */
import { isPromise, isGeneratorFunction, isObject } from './utils';
import { Fn, UnknownArgs } from './types';
import { assert } from '@cutting/util';
import { CancelToken } from './cancelToken';

export function makeRunnable<T, R, N = R>(
  this: any,
  {
    fn,
    controller,
  }: {
    fn: Fn | GeneratorFunction;
    controller: AbortController;
  },
) {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const ctx = this;

  const token = new CancelToken(controller);

  return <Args extends any[] = UnknownArgs>(...args: Args) => {
    return new Promise<R>((resolve, reject) => {
      const it = typeof fn === 'function' ? fn.apply(ctx, args || []) : fn;
      const next = ({ value, done }: IteratorResult<R, R>) => {
        if (done) {
          return resolve(value);
        }

        const promise = promisify(value, controller);

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
}

export function objectToPromise(this: any, obj: { [key: string]: any }, controller: AbortController) {
  const results = { ...obj };
  const keys = Object.keys(obj);
  const promises: Promise<any>[] = [];

  for (const key of keys) {
    const promise = promisify.call(this, obj[key], controller);
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

function promisify<T, R>(this: any, obj: T, controller: AbortController): Promise<R> {
  assert(!!obj, 'undefined passed to promisify');

  if (isPromise<T, R>(obj)) {
    console.log('isPromise');
    return obj;
  }

  if (isGeneratorFunction(obj)) {
    console.log('is generatorFunction');
    return makeRunnable<T, R>({ fn: obj, controller })();
  }

  if (Array.isArray(obj)) {
    console.log('is array');
    return Promise.all(obj.map((o) => promisify<T, R>(o, controller))) as any;
  }

  if (isObject(obj)) {
    console.log('isArray');
    return objectToPromise(obj, controller) as Promise<R>;
  }

  throw new Error('Unexpected object passed to promisify');
}
