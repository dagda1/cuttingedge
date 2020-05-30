import { Controller } from './controller';
import { HaltError, swallowHalt } from '../HaltError';

export class PromiseController<R> implements Controller<R> {
  private promise: Promise<R>;
  private _reject!: (error: Error) => void;

  constructor(promise: PromiseLike<R>) {
    this.promise = new Promise((resolve, reject) => {
      this._reject = reject;
      promise.then(resolve, reject);
    });
  }

  async halt() {
    this._reject(new HaltError());

    await this.promise.catch(swallowHalt);
  }

  then<TResult1 = R, TResult2 = never>(
    onfulfilled?: ((value: R) => TResult1 | PromiseLike<TResult1>) | undefined | null,
    onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
  ): PromiseLike<TResult1 | TResult2> {
    return this.promise.then(onfulfilled, onrejected);
  }
}
