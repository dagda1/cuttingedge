import { useCallback, useRef, useMemo } from 'react';
import { useMachine } from '@xstate/react';
import { createQueryMachine, abort, reset, start, success, error } from './machine';
import { QueryStates, AddFetch, ContentType, UseQueryOptions, QueryResult } from './types';
import { run, Task } from 'effection';
import { createFetchClient } from './client/fetch-client';
import { fetch as nativeFetch } from 'cross-fetch';
import fetchJsonp from 'fetch-jsonp';
import { identity } from '@cutting/util';
import { assert } from 'assert-ts';
import { AbortError } from './AbortError';
import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect';
import { getDefaultAccumulator, noOp } from './default-accumulator';

export const useSimpleQuery = <D, R>(
  addFetch: string | string[] | AddFetch<D, R>,
  {
    accumulator,
    initialData,
    onSuccess = identity,
    onError = console.error,
    onAbort = noOp,
    onQuerySuccess: parentOnQuerySuccess = identity,
    onQueryError: parentOnQueryError = noOp,
    fetchType = 'fetch',
    executeOnMount = true,
  }: UseQueryOptions<D, R> = {},
): QueryResult<R> => {
  const [machine, send] = useMachine(createQueryMachine({ initialData }));
  const abortController = useRef<AbortController>(new AbortController());
  const fetchClient = useRef(createFetchClient<D, R>(addFetch, abortController.current));
  const counter = useRef(0);
  const task = useRef<Task>();

  const acc = accumulator ?? getDefaultAccumulator(initialData);

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
    send(start);

    task.current = run(function* (scope) {
      counter.current++;

      try {
        for (const job of fetchClient.current.jobs) {
          const {
            fetch: {
              request,
              init,
              contentType,
              onQuerySuccess = parentOnQuerySuccess,
              onQueryError = parentOnQueryError,
            },
          } = job;

          job.state = 'LOADING';

          scope.ensure(() => abortController.current.abort());

          const fetcher = fetchType === 'fetch' ? nativeFetch : fetchJsonp;

          const response: Response & Body = yield fetcher(request as string, init);

          if (!response.ok) {
            job.state = 'ERROR';
            const status = `we are not ok, ${response.status}: ${response.statusText}`;
            onQueryError(new Error(status));
            throw new Error(status);
          }

          job.state = 'SUCCEEDED';

          const data: D = yield response[contentType as ContentType]();

          assert(typeof acc !== 'undefined', `no accumulator function present`);

          accumulated.current = acc(accumulated.current as R, data, request);

          onQuerySuccess(data);
        }

        send(success(accumulated.current));
        onSuccess(accumulated.current);
      } catch (err) {
        if (abortController.current.signal.aborted) {
          abortable(new AbortError());
          return;
        }
        send(error(err));
        onError(err);
        return;
      }
    });
  }, [send, onSuccess, parentOnQuerySuccess, parentOnQueryError, fetchType, acc, onError, abortable]);

  useIsomorphicLayoutEffect(() => {
    if (executeOnMount && typeof runner !== 'undefined' && machine.value === 'READY') {
      runner();
    }

    return () => {
      if (['SUCCEEDED', 'ERROR', 'ABORTED'].includes(machine.value as QueryStates)) {
        task.current?.halt();
      }
    };
  }, [executeOnMount, machine.value, runner]);

  const result: QueryResult<R> = useMemo(
    () => ({
      state: machine.value as QueryStates,
      run: runner,
      data: machine.context.data,
      error: machine.context.error,
      reset: resetable,
      abort: () => abortController.current.abort(),
    }),
    [machine.value, machine.context.data, machine.context.error, runner, resetable],
  );

  return result;
};
