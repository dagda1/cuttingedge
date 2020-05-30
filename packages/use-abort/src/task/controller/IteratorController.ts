import { Controller } from './controller';
import { Task } from '../task';
import { HaltError, swallowHalt } from '../HaltError';

const HALT = Symbol('halt');

export class IteratorController<R> implements Controller<R> {
  private promise: Promise<R>;
  private haltPromise: Promise<symbol>;
  private resolveHaltPromise!: () => void;

  constructor(private iterator: Iterator<R>) {
    this.haltPromise = new Promise((resolve) => {
      this.resolveHaltPromise = () => {
        resolve(HALT);
      };
    });

    this.promise = this.run();
  }

  private async run(): Promise<R> {
    let didHalt = false;
    let getNext: () => IteratorResult<R> = () => this.iterator.next();

    while (true) {
      const next = getNext();

      if (next.done) {
        if (didHalt) {
          throw new HaltError();
        } else {
          return next.value;
        }
      } else {
        const subTask: Task<R> = new Task(next.value);
        let result: R | symbol;

        try {
          result = await Promise.race([subTask, this.haltPromise]);
        } catch (error) {
          getNext = () => this.iterator.throw(error);
          continue;
        }

        if (!didHalt && result === HALT) {
          didHalt = true;
          getNext = () => this.iterator.return();
          await subTask.halt().catch(swallowHalt);
        } else {
          getNext = () => this.iterator.next(result);
        }
      }
    }
  }

  async halt() {
    this.resolveHaltPromise();
    await this.promise.catch(swallowHalt);
  }

  then<TResult1 = R, TResult2 = never>(
    onfulfilled?: ((value: R) => TResult1 | PromiseLike<TResult1>) | undefined | null,
    onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
  ): PromiseLike<TResult1 | TResult2> {
    return this.promise.then(onfulfilled, onrejected);
  }
}
