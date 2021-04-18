import { useCallback, useRef, useMemo } from 'react';
import { useMachine } from '@xstate/react';
import { createQueryMachine, abort, reset, start, success, error } from './machine';
import { FetcherStates, AddFetch, ContentType, UseFetcherOptions, QueryResult } from './types';
import { run, sleep, Task } from 'effection';
import { createFetchClient } from './client/fetch-client';
import { fetch as nativeFetch } from 'cross-fetch';
import fetchJsonp from 'fetch-jsonp';
import { identity } from '@cutting/util';
import { assert } from 'assert-ts';
import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect';
import { getDefaultAccumulator, noOp } from './default-accumulator';

export const useFetcher = <D, R>(
  addFetch: string | string[] | AddFetch<D, R>,
  {
    accumulator,
    initialState,
    onSuccess = identity,
    onError = console.error,
    onAbort = noOp,
    onQuerySuccess: parentOnQuerySuccess = identity,
    onQueryError: parentOnQueryError = noOp,
    fetchType = 'fetch',
    executeOnMount = true,
    retryAttempts = 3,
    retryDelay = 500,
  }: UseFetcherOptions<D, R> = {},
): QueryResult<R> => {
  const [machine, send] = useMachine(createQueryMachine({ initialState }));
  const abortController = useRef<AbortController>(new AbortController());
  const fetchClient = useRef(createFetchClient<D, R>(addFetch, abortController.current));
  const counter = useRef(0);
  const task = useRef<Task>();
  const retries = useRef(0);

  const acc = accumulator ?? getDefaultAccumulator(initialState);

  const abortable = useCallback(
    (e: Error) => {
      onAbort(e);
      send(abort);
    },
    [onAbort, send],
  );

  const accumulated = useRef(initialState);

  const resetable = useCallback(() => {
    abortController.current = new AbortController();
    counter.current = 0;
    send(reset(initialState));
  }, [initialState, send]);

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
          retries.current = retryAttempts;

          job.state = 'LOADING';

          scope.ensure(() => abortController.current.abort());

          const fetcher = fetchType === 'fetch' ? nativeFetch : fetchJsonp;

          let response: Response & Body = yield fetcher(request as string, init);

          while (!response.ok && retries.current > 0) {
            yield sleep(retryDelay);
            --retries.current;
            console.log(`request failed, ${response.status}: ${response.statusText} -- retrying`);
            console.log(`retry attempts left ${retries.current}`);
            response = yield fetcher(request as string, init);
          }

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
        if (err?.name === 'AbortError') {
          abortable(err);
          return;
        }
        send(error(err));
        onError(err);
        return;
      }
    });
  }, [
    send,
    onSuccess,
    parentOnQuerySuccess,
    parentOnQueryError,
    retryAttempts,
    fetchType,
    acc,
    retryDelay,
    onError,
    abortable,
  ]);

  useIsomorphicLayoutEffect(() => {
    if (executeOnMount && typeof runner !== 'undefined' && machine.value === 'READY') {
      runner();
    }

    return () => {
      if (['SUCCEEDED', 'ERROR', 'ABORTED'].includes(machine.value as FetcherStates)) {
        task.current?.halt();
      }
    };
  }, [executeOnMount, machine.value, runner]);

  const result: QueryResult<R> = useMemo(
    () => ({
      state: machine.value as FetcherStates,
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
