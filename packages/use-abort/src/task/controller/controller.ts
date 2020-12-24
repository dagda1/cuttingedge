import { isPromise } from '@cutting/util';
import { isIterator } from '../../utils';
import { Operation } from '../operation';
import { IteratorController } from './IteratorController';
import { PromiseController } from './PromiseController';

export type Controller<R> = PromiseLike<R>;

export const controllerFactory = <T>(operation: Operation<T>, signal: AbortSignal): Controller<T> => {
  if (isPromise<T>(operation)) {
    return new PromiseController<T>(operation, signal);
  } else if (isIterator<T>(operation)) {
    return new IteratorController(operation, signal);
  } else {
    throw new Error(`unkown type of operation: ${operation}`);
  }
};
