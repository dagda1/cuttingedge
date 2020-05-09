import { Fn } from './types';
import { noop } from './utils';

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
      console.log('fannies');
      const maybeHandleCancel = (value: any) => {
        console.log('foook');
        console.log(handleCancel);
        if (!isSettled) {
          handleCancel(value);
        }
      };

      console.log(cancel);
      if (!cancel) {
        return Promise.resolve();
      }

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
