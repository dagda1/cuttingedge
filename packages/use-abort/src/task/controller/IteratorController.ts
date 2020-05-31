import { Controller } from './controller';
import { Task } from '../task';
import { Operation } from '../operation';
import { isFunction } from '../../utils';
import { AbortError } from '../../AbortError';

export class IteratorController<T, R = T> implements Controller<R> {
  private promise: Promise<R>;

  constructor(private iterator: Iterator<Operation<T>, Promise<R>>, private signal: AbortSignal) {
    this.promise = this.run();
  }

  private returnIterator() {
    if (isFunction(this.iterator.return)) {
      this.iterator.return();
    }
  }

  private throwIfAborted() {
    if (this.signal?.aborted) {
      throw new AbortError();
    }
  }

  private async run() {
    // TODO: type this thing
    let c: any;

    while (1) {
      try {
        const next: IteratorResult<Operation<T>, Promise<R>> = await this.iterator.next(c);

        this.throwIfAborted();

        if (next.done) {
          this.returnIterator();
          return next.value;
        }

        c = await new Task(next.value, this.signal);
      } catch (e) {
        this.returnIterator();
        const next = this.iterator.throw!(e);
        c = next.value;
        continue;
      }
    }

    throw new Error('should not get here');
  }

  then<TResult1 = R, TResult2 = never>(
    onfulfilled?: ((value: R) => TResult1 | PromiseLike<TResult1>) | undefined | null,
    onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
  ): PromiseLike<TResult1 | TResult2> {
    return this.promise.then(onfulfilled, onrejected);
  }
}
