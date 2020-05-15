import { useCallback, useRef, useMemo } from 'react';
import { useMachine } from '@xstate/react';
import { makeRunnable } from './runnable';
import { UnknownArgs, UseAbortableOptions } from './types';
import { createAbortableMachine, abort, reset, start, success } from './machine';

const identity = <T>(o: T) => o;

const DefaultAbortableOptions: UseAbortableOptions<undefined> = {
  initialData: undefined,
  onAbort: identity,
};

export const useAbortable = <T, R, N>(
  fn: () => Generator<Promise<T>, R, N>,
  options: Partial<UseAbortableOptions<N>> = {},
) => {
  const [current, send] = useMachine(createAbortableMachine());
  const resolvedOptions = useMemo(() => ({ ...DefaultAbortableOptions, ...options }), [options]) as UseAbortableOptions<
    N
  >;
  const { initialData, onAbort } = resolvedOptions;
  const abortController = useRef<AbortController>(new AbortController());
  const counter = useRef(0);

  const abortable = useCallback(
    (e: any) => {
      onAbort(e);
      send(abort);
    },
    [onAbort, send],
  );

  const resetable = useCallback(() => {
    abortController.current = new AbortController();
    counter.current = 0;
    send(reset(initialData));
  }, [initialData, send]);

  const runnable = useMemo(
    () => makeRunnable({ fn, options: { ...resolvedOptions, controller: abortController.current } }),
    [fn, resolvedOptions],
  );

  const runner = useCallback(
    (...args: UnknownArgs) => {
      counter.current++;

      send(start);

      runnable(...args)
        .then((result) => {
          abortController.current = new AbortController();
          counter.current = 0;
          send(success<N>(result));
        })
        .catch((err) => {
          if (err.currentTarget === abortController.current.signal) {
            abortable(err);
            return;
          }

          throw err;
        });
    },
    [abortable, runnable, send],
  );

  return useMemo(
    () => ({
      state: current.value,
      run: runner,
      reset: resetable,
      abortController: abortController.current,
      counter: counter.current,
    }),
    [current.value, resetable, runner],
  );
};
