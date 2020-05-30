import { Controller } from './controller/controller';
import { Operation } from './operation';
import { isPromise, isIterator } from '../utils';
import { PromiseController } from './controller/PromiseController';
import { IteratorController } from './controller/IteratorController';

export class Task<R> implements PromiseLike<R> {
  private controller: Controller<R>;
  private children: Set<Task<never>> = new Set();
  private promise: Promise<R>;

  constructor(operation: Operation<R>) {
    if (isPromise(operation)) {
      this.controller = new PromiseController(operation);
    } else if (isIterator(operation)) {
      this.controller = new IteratorController(operation);
    } else {
      throw new Error(`unkown type of operation: ${operation}`);
    }

    this.promise = this.run();
  }

  private async haltChildren() {
    await Promise.all(Array.from(this.children).map((c) => c.halt()));
  }

  private async run(): Promise<R> {
    const result = await this.controller;

    await this.haltChildren();

    return result;
  }

  async halt() {
    await this.haltChildren();
    await this.controller.halt();
  }

  then<TResult1 = R, TResult2 = never>(
    onfulfilled?: ((value: R) => TResult1 | PromiseLike<TResult1>) | undefined | null,
    onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
  ): PromiseLike<TResult1 | TResult2> {
    return this.promise.then(onfulfilled, onrejected);
  }

  spawn<R>(operation?: Operation<R>): Task<R> {
    const child = new Task(operation);
    this.children.add(child);
    return child;
  }
}
