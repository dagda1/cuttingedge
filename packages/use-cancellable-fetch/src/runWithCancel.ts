/* eslint-disable @typescript-eslint/no-use-before-define */
type UnknownArgs = any[];

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

export const runWithCancel = <R, TNext, Args extends any[] = UnknownArgs>(
  fn: (...args: Args) => Generator<R, R, TNext>,
  ...args: Args
) => {
  const gen = fn(...args);
  const cancellationToken = new CancellationToken();

  const promise = new Promise((resolve, reject) => {
    if (cancellationToken.cancelled) {
      return;
    }

    const next = ({ value, done }: any) => {
      if (done) {
        return resolve(value);
      }

      return value.then(resolved, rejected);
    };

    const rejected = (err: Error) => {
      try {
        if (err instanceof CancellationToken) {
          // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
          // @ts-ignore
          next(gen.return());
        } else {
          next(gen.throw(err));
        }
      } catch (e) {
        return reject(e);
      }
    };

    const resolved = (res: TNext) => {
      try {
        const result = gen.next(res);

        next(result);
      } catch (e) {
        return reject(e);
      }
    };
  });

  return { promise, token: cancellationToken };
};
