import { useCallback, useRef, useMemo } from 'react';
import { useMachine } from '@xstate/react';
import { UnknownArgs, UseAbortOptions } from './types';
import { createAbortableMachine, abort, reset, start, success } from './machine';
import { Task } from './task/task';
import { isFunction } from './utils';

const identity = <T>(o: T) => o;

const DefaultAbortableOptions: UseAbortOptions<undefined> = {
  initialData: undefined,
  onAbort: identity,
};

export const useAbort = <T, R = T>(fn: (...args: any[]) => any, options: Partial<UseAbortOptions<R>> = {}) => {
  const [machine, send] = useMachine(createAbortableMachine());
  const resolvedOptions = useMemo(() => ({ ...DefaultAbortableOptions, ...options }), [options]) as UseAbortOptions<R>;
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
      const signal = abortController.current.signal;

      counter.current++;

      send(start);

      const it = isFunction(fn) ? fn(...(args || [])) : fn;

      new Task<T>(it, signal)
        .then((result) => {
          abortController.current = new AbortController();
          counter.current = 0;
          send(success<T>(result));
          return result;
        })
        .catch((err) => {
          if (err.currentTarget === abortController.current.signal) {
            abortable(err);
            return;
          }

          throw err;
        });
    },
    [abortable, fn, send],
  );

  console.log(machine);

  return useMemo(
    () => ({
      state: machine.value,
      run: runner,
      reset: resetable,
      abortController: abortController.current,
      counter: counter.current,
    }),
    [machine.value, resetable, runner],
  );
};
