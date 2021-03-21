import { useCallback, useRef, useMemo } from 'react';
import { useMachine } from '@xstate/react';
import { createAbortableMachine, abort, reset, start, success, error } from './machine';
import { FetchState, FetchOptions, AddFetch } from './types';
import { identity } from '@cutting/util';
import { run } from 'effection';

export type UseAbortResult<T> = {
  state: FetchState<T>;
  run: (...args: unknown[]) => void;
  data?: T;
  reset: () => void;
  abortController: AbortController;
  counter: number;
  error?: Error;
  isSettled: boolean;
};

export const useAbort = <T>(addFetch: AddFetch, { onAbort, initialData }: FetchOptions<T>): UseAbortResult<T> => {
  const [machine, send] = useMachine(createAbortableMachine({ initialData }));
  const abortController = useRef<AbortController>(new AbortController());
  const counter = useRef(0);

  const requests = Array.isArray(fetchRequests) ? fetchRequests : [fetchRequests];

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

  const runner = useCallback(() => {
    const signal = abortController.current.signal;

    counter.current++;

    send(start);

    try {
      const result = run(function* (scope) {
        for (const { request, init = {}, onSuccess = identity, onError = identity, contentType = 'json' } of requests) {
          scope.ensure(() => abortController.current.abort());

          init.signal = abortController.current.signal;

          const response: Response = yield fetch(request, init);

          const result: T = yield response[contentType]();

          onSuccess(result);
        }
      });
      abortController.current = new AbortController();
      counter.current = 0;
      send(success<T | T[]>(result));
      return result;
    } catch (err) {
      if (err.currentTarget === abortController.current.signal) {
        abortable(err);
        return;
      }

      send(error(err));
      return;
    }
  }, [abortable, requests, send]);

  const result: UseAbortResult<ReturnType<typeof fn>> = useMemo(
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
