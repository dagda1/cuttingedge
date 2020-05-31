import { Controller } from './controller/controller';
import { Operation } from './operation';
import { isPromise, isIterator } from '../utils';
import { PromiseController } from './controller/PromiseController';
import { IteratorController } from './controller/IteratorController';

export class Task<T> implements PromiseLike<T> {
  private controller: Controller<T>;
  private children: Set<Task<any>> = new Set();
  private promise: Promise<T>;

  constructor(operation: Operation<T>, private signal: AbortSignal) {
    if (isPromise<T>(operation)) {
      this.controller = new PromiseController<T>(operation, signal);
    } else if (isIterator<T>(operation)) {
      this.controller = new IteratorController(operation, signal);
    } else {
      throw new Error(`unkown type of operation: ${operation}`);
    }

    this.promise = this.run();
  }

  private async run(): Promise<T> {
    const result = await this.controller;

    return result;
  }

  then<TResult1 = T, TResult2 = never>(
    onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
    onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
  ): PromiseLike<TResult1 | TResult2> {
    return this.promise.then(onfulfilled, onrejected);
  }

  catch(...args: any[]) {
    return this.promise.catch(...args);
  }

  spawn<R>(operation: Operation<R>): Task<R> {
    const child = new Task(operation, this.signal);
    this.children.add(child);
    return child;
  }
}
