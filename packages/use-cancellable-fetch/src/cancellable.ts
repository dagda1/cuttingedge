import { Fn } from './types';
import { noop } from './utils';

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

export type Cancelable<V> = (resolve: Fn, reject: Fn, onCancel: (c: Fn) => Promise<any>) => void;

export const cancelable = <V>(fn: Cancelable<V>, cancel: Promise<any>) => {
  return new Promise<V>((resolve, reject) => {
    let isSettled = false;

    const resolved = (input: any) => {
      isSettled = true;
      resolve(input);
    };

    const rejected = (input: any) => {
      isSettled = true;
      reject(input);
    };

    const onCancel = (handleCancel: Fn): Promise<any> => {
      const maybeHandleCancel = (value: any) => {
        console.log('foook');
        console.log(handleCancel);
        if (!isSettled) {
          handleCancel(value);
        }
      };

      if (!cancel) {
        return Promise.resolve();
      }

      console.log(cancel);

      return cancel
        .then(
          maybeHandleCancel,
          // ignore cancel rejections
          noop,
        )
        .catch(reject);
    };

    fn(resolved, rejected, onCancel);
  });
};
