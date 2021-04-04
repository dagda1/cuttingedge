import { useCallback, useRef, useMemo } from 'react';
import { useMachine } from '@xstate/react';
import { createAbortableMachine, abort, reset, start, success, error } from './machine';
import { AbortableStates, AddFetch, ContentType, UseAbortOptions, UseAbortResult } from './types';
import { run } from 'effection';
import { createFetchClient } from './client/fetch-client';
import { fetch as nativeFetch } from 'cross-fetch';
import { identity } from '@cutting/util';

function getDefaultAccumulator<T>(initialData?: T) {
  if (Array.isArray(initialData)) {
    return (a: T) => {
      initialData.push(a);
      return initialData;
    };
  }

  return identity;
}

const noOp = () => void 0;

export const useAbort = <T>(
  addFetch: AddFetch,
  { accumulator, initialData, onSuccess = identity, onError = noOp, onAbort = noOp }: UseAbortOptions<T>,
): UseAbortResult<T> => {
  const [machine, send] = useMachine(createAbortableMachine({ initialData }));
  const abortController = useRef<AbortController>(new AbortController());
  const counter = useRef(0);

  let fetchClient = createFetchClient(abortController.current);

  const acc = accumulator ?? getDefaultAccumulator(initialData);

  fetchClient = addFetch(fetchClient);

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
    send(start);

    counter.current++;

    console.log(`running ${counter.current}`);

    let result: T | T[];

    run(function* (scope) {
      try {
        for (const {
          fetch: { request, init, contentType, onSuccess, onError },
        } of fetchClient.jobs) {
          scope.ensure(() => abortController.current.abort());

          const response: Response & Body = yield nativeFetch(request, init);

          if (!response.ok) {
            const status = `we are not ok, ${response.status}: ${response.statusText}`;
            console.log(status);
            onError(new Error(status));
            throw new Error(status);
          }

          result = acc(yield response[contentType as ContentType]());

          onSuccess(result);
        }

        send(success<T | T[]>(result));
        onSuccess(result as T | T[]);
      } catch (err) {
        if (abortController.current.signal.aborted) {
          abortable(err);
          return;
        }
        send(error(err));
        onError(err);
        return;
      } finally {
        console.log(`completed in a ${machine.value}`);
      }
    });
  }, [abortable, acc, fetchClient.jobs, machine.value, onError, onSuccess, send]);

  const result: UseAbortResult<T> = useMemo(
    () => ({
      state: machine.value as AbortableStates,
      run: runner,
      data: machine.context.data as T | T[],
      error: machine.context.error,
      reset: resetable,
      abort: () => abortController.current.abort(),
      counter: counter.current,
      isSettled: ['SUCCEEDED', 'ERROR'].includes(machine.value as AbortableStates),
    }),
    [machine.context.data, machine.context.error, machine.value, resetable, runner],
  );

  return result;
};
