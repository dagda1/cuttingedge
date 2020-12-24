import { useCallback, useRef, useMemo } from 'react';
import { useMachine } from '@xstate/react';
import { createAbortableMachine, abort, reset, start, success, error } from './machine';
import { Task } from './task/task';
import { AbortableStates, UseAbortOptions } from './types';
import { Fn, identity, isFunction } from '@cutting/util';

export type UseAbortResult<T> = {
  state: AbortableStates;
  run: (...args: unknown[]) => void;
  data?: T;
  reset: () => void;
  abortController: AbortController;
  counter: number;
  error?: Error;
  isSettled: boolean;
};

export const useAbort = <T, R = T>(
  fn: Fn,
  { initialData = undefined, onAbort = identity }: Partial<UseAbortOptions<R>> = {},
): UseAbortResult<R> => {
  const [machine, send] = useMachine(createAbortableMachine({ initialData }));
  const abortController = useRef<AbortController>(new AbortController());
  const counter = useRef(0);

  const abortable = useCallback(
    (e: Error) => {
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
    async (...args: unknown[]) => {
      const signal = abortController.current.signal;

      counter.current++;

      send(start);

      try {
        const it = isFunction(fn) ? fn(...(args || [])) : fn;

        const result = await new Task<R>(it, signal);
        abortController.current = new AbortController();
        counter.current = 0;
        send(success<R>(result));
        return result;
      } catch (err) {
        if (err.currentTarget === abortController.current.signal) {
          abortable(err);
          return;
        }

        send(error(err));
        return;
      }
    },
    [abortable, fn, send],
  );

  const result: UseAbortResult<R> = useMemo(
    () => ({
      state: machine.value as AbortableStates,
      run: runner,
      data: machine.context.data,
      error: machine.context.error,
      reset: resetable,
      abortController: abortController.current,
      counter: counter.current,
      isSettled: ['SUCCEEDED', 'ERROR'].includes(machine.value as AbortableStates),
    }),
    [machine.context.data, machine.context.error, machine.value, resetable, runner],
  );

  return result;
};
