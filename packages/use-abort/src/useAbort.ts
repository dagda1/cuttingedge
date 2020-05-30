import { useCallback, useRef, useMemo } from 'react';
import { useMachine } from '@xstate/react';
import { UnknownArgs, UseAbortOptions } from './types';
import { createAbortableMachine, abort, reset, start, success } from './machine';

const identity = <T>(o: T) => o;

const DefaultAbortableOptions: UseAbortOptions<undefined> = {
  initialData: undefined,
  onAbort: identity,
};

export const useAbort = <T, R, N>(fn: () => Generator<Promise<T>, R, N>, options: Partial<UseAbortOptions<N>> = {}) => {
  const [current, send] = useMachine(createAbortableMachine());
  const resolvedOptions = useMemo(() => ({ ...DefaultAbortableOptions, ...options }), [options]) as UseAbortOptions<N>;
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

  const runner = useCallback(
    (...args: UnknownArgs) => {
      const runnable = makeRunnable({ fn, options: { ...resolvedOptions, controller: abortController.current } });

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
    [abortable, fn, resolvedOptions, send],
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
