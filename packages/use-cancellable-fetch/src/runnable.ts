/* eslint-disable @typescript-eslint/no-use-before-define */
import { isPromise, isGeneratorFunction, isObject } from './utils';
import { Fn, UnknownArgs, UseAbortableOptions } from './types';
import { assert } from '@cutting/util';
import { CancellationToken } from './CancellationToken';

type MakeRunnableOptions<R> = UseAbortableOptions<R> & { controller: AbortController };

export function makeRunnable<Ret>(
  this: any,
  {
    fn,
    options,
  }: {
    fn: Fn | GeneratorFunction;
    options: MakeRunnableOptions<Ret>;
  },
) {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const ctx = this;
  const { controller, onNext } = options;

  const token = new CancellationToken(controller);

  return <Args extends any[] = UnknownArgs>(...args: Args): Promise<Ret> => {
    return new Promise<Ret>((resolve, reject) => {
      const it = typeof fn === 'function' ? fn.apply(ctx, args || []) : fn;
      const next = ({ value, done }: IteratorResult<Ret, Ret>) => {
        onNext(value);
        if (done) {
          return resolve(value);
        }

        const promise = promisify(value, options);

        return promise.then(resolved, rejected);
      };

      token.promise.catch((reason) => {
        console.log('cancellleeedd');
        try {
          it.throw(reason);
          reject(reason);
        } catch (error) {
          return reject(error);
        }
      });

      const resolved = (res?: any) => {
        try {
          console.log('received something');
          console.log(res);
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

export function objectToPromise<R>(this: any, obj: { [key: string]: any }, options: MakeRunnableOptions<any>) {
  const results = { ...obj };
  const keys = Object.keys(obj);
  const promises: Promise<any>[] = [];

  for (const key of keys) {
    const promise = promisify.call(this, obj[key], options);
    if (promise && isPromise(promise)) {
      defer(promise, key);
    } else {
      results[key] = obj[key];
    }
  }

  return Promise.all(promises).then(() => results);

  function defer(promise: Promise<any>, key: string) {
    results[key] = undefined;
    promises.push(
      promise.then((res) => {
        results[key] = res;
      }),
    );
  }
}

function promisify<T, R>(this: any, obj: T, options: MakeRunnableOptions<R>): Promise<R> {
  assert(!!obj, 'undefined passed to promisify');

  if (isPromise<T, R>(obj)) {
    console.log('isPromise');
    return obj;
  }

  if (isGeneratorFunction(obj)) {
    console.log('is generatorFunction');
    return makeRunnable({ fn: obj, options })();
  }

  if (Array.isArray(obj)) {
    console.log('is array');
    return Promise.all(obj.map((o) => promisify<T, R>(o, options))) as any;
  }

  if (isObject(obj)) {
    console.log('isArray');
    return objectToPromise(obj, options) as Promise<R>;
  }

  throw new Error('Unexpected object passed to promisify');
}
