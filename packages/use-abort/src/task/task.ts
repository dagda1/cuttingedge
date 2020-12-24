import type { Controller } from './controller/controller';
import { controllerFactory } from './controller/controller';
import { Operation } from './operation';
import { throwIfAborted } from '../utils';

export class Task<T> implements Promise<T> {
  private controller: Controller<T>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private children: Set<Task<any>> = new Set();
  private promise: Promise<T>;

  constructor(operation: Operation<T>, private signal: AbortSignal) {
    this.controller = controllerFactory(operation, signal);

    this.promise = this.run();
  }

  private async run(): Promise<T> {
    const result = await this.controller;

    if (this.signal.aborted) {
      throwIfAborted(this.signal);
    }

    return result;
  }

  then<TResult1 = T, TResult2 = never>(
    onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
    onrejected?: (<R>(reason: R) => TResult2 | PromiseLike<TResult2>) | undefined | null,
  ): Promise<TResult1 | TResult2> {
    return this.promise.then(onfulfilled, onrejected);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  catch(...args: any[]): Promise<T> {
    return this.promise.catch(...args);
  }

  finally(onfinally?: (() => void) | undefined | null): Promise<T> {
    return this.promise.finally(onfinally);
  }

  [Symbol.toStringTag]: 'Promise';

  spawn<R>(operation: Operation<R>): Task<R> {
    const child = new Task(operation, this.signal);
    this.children.add(child);
    return child;
  }
}
