import { Controller } from './controller';
import { once } from '@cutting/util';

export class PromiseController<R> implements Controller<R> {
  private promise: Promise<R>;
  private _reject!: (error: Error) => void;

  constructor(promise: PromiseLike<R>, private signal: AbortSignal) {
    this.promise = new Promise((resolve, reject) => {
      this._reject = reject;
      promise.then(resolve, reject);
    });

    once(this.signal, 'abort', this._reject);
  }

  then<TResult1 = R, TResult2 = never>(
    onfulfilled?: ((value: R) => TResult1 | PromiseLike<TResult1>) | undefined | null,
    onrejected?: (<R>(reason: R) => TResult2 | PromiseLike<TResult2>) | undefined | null,
  ): PromiseLike<TResult1 | TResult2> {
    return this.promise.then(onfulfilled, onrejected);
  }
}
