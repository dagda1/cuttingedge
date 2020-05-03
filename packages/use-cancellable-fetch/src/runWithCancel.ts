/* eslint-disable @typescript-eslint/no-use-before-define */
import { cancelable, Cancelable } from './cancelable';

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

    const next = ({ value, done }: any) => {
      if (done) {
        return resolve(value);
      }

      return value.then(resolved, rejected);
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
