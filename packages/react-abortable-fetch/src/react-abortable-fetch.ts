import { useCallback, useRef, useMemo } from 'react';
import { useMachine } from '@xstate/react';
import { createQueryMachine, abort, reset, start, success, error } from './machine';
import { FetchStates, Builder, ContentType, UseFetchOptions, QueryResult } from './types';
import { run, sleep, Task } from 'effection';
import { createFetchClient } from './client/fetch-client';
import { fetch as nativeFetch } from 'cross-fetch';
import fetchJsonp from 'fetch-jsonp';
import { identity } from '@cutting/util';
import { assert } from 'assert-ts';
import { useIsomorphicLayoutEffect } from './hooks/use-Isomorphic-layout-effect';
import { getDefaultAccumulator, noOp } from './default-accumulator';

export function useFetch<R, T = undefined>(url: string, options?: UseFetchOptions<R, T>): QueryResult<R>;
export function useFetch<R, T = undefined>(urls: string[], options?: UseFetchOptions<R, T>): QueryResult<R>;
export function useFetch<R, T = undefined>(builder: Builder<R, T>, options?: UseFetchOptions<R, T>): QueryResult<R>;
export function useFetch<R, T = undefined>(
  builderOrUrls: Builder<R, T> | string | string[],
  options: UseFetchOptions<R, T> = {},
): QueryResult<R> {
  const {
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
    timeout = 180000,
  } = options;

  const [machine, send] = useMachine(createQueryMachine({ initialState }));
  const abortController = useRef(new AbortController());
  const fetchClient = useRef(createFetchClient<R, T>(builderOrUrls, abortController.current));
  const counter = useRef(0);
  const task = useRef<Task>();
  const retries = useRef(0);
  const timeoutRef = useRef<number | undefined>(timeout ?? undefined);

  const acc = accumulator ?? getDefaultAccumulator(initialState);

  const abortable = useCallback(
    (e: Error) => {
      onAbort(e);
      send(abort);
    },
    [onAbort, send],
  );

  const aborter = useCallback(() => {
    console.log(`aborting at ${machine.value}`);
    abortController.current.abort();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [abortController.current, machine.value]);

  const resetable = useCallback(() => {
    task.current?.halt();
    counter.current = 0;
    abortController.current = new AbortController();
    fetchClient.current = createFetchClient<R, T>(builderOrUrls, abortController.current);
    send(reset(initialState));
  }, [builderOrUrls, initialState, send]);

  const accumulated = useRef(initialState);

  const runner = useCallback(() => {
    task.current = run(function* (scope) {
      counter.current += 1;
      send(start);

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

          timeoutRef.current = timeout ? timeout : undefined;

          scope.spawn<void>(function* () {
            if (typeof timeoutRef.current !== 'number') {
              return;
            }

            yield sleep(timeoutRef.current as number);

            console.log(
              `
Request ${request} did not complete in ${timeoutRef.current}ms.
timeout is currently ${timeout} and there are ${fetchClient.current.jobs.length} jobs`,
            );

            abortController.current.abort();
          });

          retries.current = retryAttempts;

          job.state = 'LOADING';

          const fetch = fetchType === 'fetch' ? nativeFetch : fetchJsonp;

          let response: Response & Body = yield fetch(request as string, init);

          while (!response.ok && retries.current > 0) {
            yield sleep(retryDelay);
            --retries.current;

            console.log(`request ${request} failed, ${response.status}: ${response.statusText} -- retrying`);
            console.log(`retry attempts left ${retries.current}`);

            response = yield fetch(request as string, init);
          }

          if (!response.ok) {
            job.state = 'ERROR';
            onQueryError(new Error(status));
            throw new Error(status);
          }

          job.state = 'SUCCEEDED';

          const data: T = yield response[contentType as ContentType]();

          assert(typeof acc !== 'undefined', `no accumulator function present`);

          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          accumulated.current = acc(accumulated.current as R, data as any, request);

          onQuerySuccess(data);
        }

        send(success(accumulated.current));
        onSuccess(accumulated.current);
      } catch (err) {
        if (err?.name === 'AbortError') {
          abortable(err);
          return;
        }

        onError(err);
        send(error(err));
        return;
      } finally {
        abortController.current.abort();
      }
    });
  }, [
    send,
    timeout,
    onSuccess,
    parentOnQuerySuccess,
    parentOnQueryError,
    retryAttempts,
    fetchType,
    acc,
    retryDelay,
    onError,
    abortable,
    abortController,
  ]);

  useIsomorphicLayoutEffect(() => {
    if (executeOnMount && typeof runner !== 'undefined' && machine.value === 'READY') {
      runner();
    }

    return () => {
      if (['SUCCEEDED', 'ERROR', 'ABORTED'].includes(machine.value as FetchStates)) {
        task.current?.halt();
      }
    };
  }, [executeOnMount, machine.value, runner]);

  const result: QueryResult<R> = useMemo(() => {
    switch (machine.value as FetchStates) {
      case 'READY':
        return {
          state: 'READY',
          run: runner,
          reset: resetable,
          abort: aborter,
          data: undefined,
          error: undefined,
          counter: counter.current,
        };
      case 'LOADING':
        return {
          state: 'LOADING',
          run: runner,
          reset: resetable,
          abort: aborter,
          data: undefined,
          error: undefined,
          counter: counter.current,
        };
      case 'SUCCEEDED':
        return {
          state: 'SUCCEEDED',
          run: runner,
          reset: resetable,
          abort: aborter,
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          data: machine.context.data as any,
          error: undefined,
          counter: counter.current,
        };
      case 'ERROR':
        return {
          state: 'ERROR',
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          error: machine.context.error as any,
          data: undefined,
          run: runner,
          reset: resetable,
          abort: aborter,
          counter: counter.current,
        };
      case 'ABORTED':
        return {
          state: 'ABORTED',
          data: undefined,
          error: undefined,
          run: runner,
          reset: resetable,
          abort: aborter,
          counter: counter.current,
        };
      default:
        throw new Error(`unknown state ${machine.value}`);
    }
  }, [machine.value, machine.context.data, machine.context.error, runner, resetable, aborter]);

  return result;
}
