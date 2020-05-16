/* eslint-disable @typescript-eslint/no-use-before-define */
import { isPromise, isGeneratorFunction, isObject } from './utils';
import { Fn, UnknownArgs, UseAbortOptions, ObjectType } from './types';
import { assert } from '@cutting/util';
import { CancellationToken } from './CancellationToken';
import { AbortError } from './AbortError';

type MakeRunnableOptions<R> = UseAbortOptions<R> & { controller: AbortController };

export function makeRunnable<R>(
  this: any,
  {
    fn,
    options,
  }: {
    fn: Fn | GeneratorFunction;
    options: MakeRunnableOptions<R>;
  },
) {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const ctx = this;
  const { controller } = options;

  const token = new CancellationToken(controller);

  return <Args extends any[] = UnknownArgs>(...args: Args): Promise<R> => {
    return new Promise<R>((resolve, reject) => {
      const it = typeof fn === 'function' ? fn.apply(ctx, args || []) : fn;

      const next = ({ value, done }: IteratorResult<R, R>) => {
        if (done) {
          return resolve(value);
        }

        const promise = promisify(value, options);

        return promise.then(resolved, rejected);
      };

      token.promise.catch((reason) => {
        try {
          it.throw(new AbortError('Operation aborted'));

          reject(reason);
        } catch (error) {
          console.log("don't think it should get there");
          return reject(error);
        }
      });

      const resolved = (res?: R) => {
        try {
          const result = it.next(res);

          next(result);
        } catch (e) {
          return reject(e);
        }
      };

      resolved();

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
}

export function objectToPromise<R>(this: any, o: ObjectType, options: MakeRunnableOptions<any>) {
  const results = { ...o };
  const keys = Object.keys(o);
  const promises: Promise<any>[] = [];

  for (const key of keys) {
    const promise = promisify.call(this, o[key], options);
    if (promise && isPromise(promise)) {
      defer(promise, key);
    } else {
      results[key] = o[key];
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
