import { useCallback, useRef, useMemo, useEffect } from 'react';
import { useMachine } from '@xstate/react';
import { createMultiQueryMachine, abort, reset, start, success, error } from './machine';
import { MultiQueryStates, AddFetch, ContentType, UseAbortOptions, UseAbortResult } from './types';
import { run, Task } from 'effection';
import { createFetchClient } from './client/fetch-client';
import { fetch as nativeFetch } from 'cross-fetch';
import fetchJsonp from 'fetch-jsonp';
import { identity } from '@cutting/util';
import { assert } from 'assert-ts';

function getDefaultAccumulator<D, R>(initialData?: R): Pick<UseAbortOptions<D, R>, 'accumulator'>['accumulator'] {
  if (Array.isArray(initialData)) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (initialData: R, current: D) => ([...(initialData as any), current] as unknown) as R;
  }

  return (_: R, current: D) => (current as unknown) as R;
}

const noOp = () => void 0;

export const useMultiQuery = <D, R>(
  addFetch: AddFetch<D, R> | string | string[],
  {
    accumulator,
    initialData,
    onSuccess = identity,
    onError = console.error,
    onAbort = noOp,
    onQuerySuccess: parentOnQuerySuccess = identity,
    onQueryError: parentOnQueryError = noOp,
    fetchType = 'fetch',
    executeOnload = true,
  }: UseAbortOptions<D, R> = {},
): UseAbortResult<R> => {
  const [machine, send] = useMachine(createMultiQueryMachine({ initialData }));
  const abortController = useRef<AbortController>(new AbortController());
  const counter = useRef(0);
  const task = useRef<Task>();

  let fetchClient = createFetchClient<D, R>(abortController.current);

  const acc = accumulator ?? getDefaultAccumulator(initialData);

  if (typeof addFetch === 'string') {
    fetchClient.addFetchRequest(addFetch);
  } else if (Array.isArray(addFetch)) {
    for (const url of addFetch) {
      fetchClient.addFetchRequest(url);
    }
  } else if (typeof addFetch === 'function') {
    fetchClient = addFetch(fetchClient);
  }

  const abortable = useCallback(
    (e: Error) => {
      onAbort(e);
      send(abort);
    },
    [onAbort, send],
  );

  const accumulated = useRef(initialData);

  const resetable = useCallback(() => {
    abortController.current = new AbortController();
    counter.current = 0;
    send(reset(initialData));
  }, [initialData, send]);

  const runner = useCallback(() => {
    counter.current++;

    send(start);

    task.current = run(function* (scope) {
      try {
        for (const {
          fetch: {
            request,
            init,
            contentType,
            onQuerySuccess = parentOnQuerySuccess,
            onQueryError = parentOnQueryError,
          },
        } of fetchClient.jobs) {
          scope.ensure(() => abortController.current.abort());

          const fetcher = fetchType === 'fetch' ? nativeFetch : fetchJsonp;

          const response: Response & Body = yield fetcher(request as string, init);

          if (!response.ok) {
            const status = `we are not ok, ${response.status}: ${response.statusText}`;
            onQueryError(new Error(status));
            throw new Error(status);
          }

          const data: D = yield response[contentType as ContentType]();

          assert(typeof acc !== 'undefined', `no accumulator function present`);

          accumulated.current = acc(accumulated.current as R, data, request);

          onQuerySuccess(data);
        }

        send(success(accumulated.current));
        onSuccess(accumulated.current);
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
  }, [
    send,
    onSuccess,
    fetchClient.jobs,
    fetchType,
    acc,
    onError,
    abortable,
    machine.value,
    parentOnQueryError,
    parentOnQuerySuccess,
  ]);

  const result: UseAbortResult<R> = useMemo(
    () => ({
      state: machine.value as MultiQueryStates,
      run: runner,
      data: accumulated.current || initialData,
      error: machine.context.error,
      reset: resetable,
      abort: () => abortController.current.abort(),
      counter: counter.current,
    }),
    [machine.context.error, machine.value, resetable, runner, initialData],
  );

  useEffect(() => {
    if (executeOnload && typeof runner !== 'undefined') {
      runner();
    }

    return () => {
      if (['SUCCEEDED', 'ERROR', 'ABORTED'].includes(machine.value as MultiQueryStates)) {
        console.dir('halting');
        task.current?.halt();
      }
    };
  }, [executeOnload, machine.value, runner]);

  return result;
};
