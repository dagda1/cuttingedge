import { useCallback, useRef, useMemo } from 'react';
import { useMachine } from '@xstate/react';
import { createQueryMachine } from './machine';
import type { FetchStates, Builder, ContentType, UseFetchOptions, QueryResult, FetchRequestInfo } from './types';
import type { Task } from 'effection';
import { run, sleep } from 'effection';
import { fetch as nativeFetch } from 'cross-fetch';
import { createFetchClient } from './client/fetch-client';
import fetchJsonp from 'fetch-jsonp';
import type { Fn } from '@cutting/util';
import { identity, isPromise } from '@cutting/util';
import { assert } from 'assert-ts';
import { useIsomorphicLayoutEffect } from './hooks/use-Isomorphic-layout-effect';
import { getDefaultAccumulator, noOp } from './default-accumulator';
import { ResponseError } from './errors/errors';

type UseFetchArgs<R, T> = string | string[] | FetchRequestInfo | FetchRequestInfo[] | Builder<R, T>;

type ExtractArgs<Args extends UseFetchArgs<R, T>, R, T> = Args extends { url: string }
  ? FetchRequestInfo
  : Args extends string
  ? string
  : Args extends string[]
  ? string[]
  : Args extends { url: string }[]
  ? FetchRequestInfo[]
  : Args extends Fn
  ? Builder<R, T>
  : never;

const AbortController = global.AbortController;

const finishStates: readonly FetchStates[] = ['succeeded', 'error', 'aborted'] as const;

export function useFetch<R, T = R>(url: string, options?: UseFetchOptions<R, T>): QueryResult<R>;
export function useFetch<R, T = R>(urls: string[], options?: UseFetchOptions<R, T>): QueryResult<R>;
export function useFetch<R, T = R>(
  fetchRequestInfo: FetchRequestInfo[],
  options?: UseFetchOptions<R, T>,
): QueryResult<R>;
export function useFetch<R, T = R>(builder: Builder<R, T>, options?: UseFetchOptions<R, T>): QueryResult<R>;
export function useFetch<R, T = R>(fetchRequestInfo: FetchRequestInfo, options?: UseFetchOptions<R, T>): QueryResult<R>;
export function useFetch<Args extends UseFetchArgs<R, T>, R, T = R>(
  builderOrRequestInfos: ExtractArgs<Args, R, T>,
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

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const machineConfig = useMemo(() => createQueryMachine({ initialData: initialState }), []);

  const [machine, send] = useMachine(machineConfig);
  const abortController = useRef(new AbortController());
  const fetchClient = useRef(createFetchClient<R, T>(builderOrRequestInfos, abortController.current));
  const counter = useRef(0);
  const task = useRef<Task>();
  const retries = useRef(0);
  const timeoutRef = useRef<number | undefined>(timeout ?? undefined);
  const accumulated = useRef(initialState);

  const acc = accumulator ?? getDefaultAccumulator(initialState);

  const abortable = useCallback(
    (e: Error) => {
      onAbort(e);
      send('ABORT');
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
    fetchClient.current = createFetchClient<R, T>(builderOrRequestInfos, abortController.current);
    accumulated.current = initialState;
    send('RESET');
  }, [builderOrRequestInfos, initialState, send]);

  const parseArg = <A>(arg?: A) => {
    if (typeof arg !== 'undefined') {
      return typeof arg === 'object' ? JSON.stringify(arg) : String(arg);
    }
  };

  const runner = useCallback(
    <A>(arg?: A) => {
      task.current = run(function* (scope) {
        counter.current += 1;
        send('START');

        try {
          for (const job of fetchClient.current.jobs) {
            const {
              fetch: {
                request,
                init = {},
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

            job.state = 'loading';

            const fetcher = fetchType === 'fetch' ? nativeFetch : fetchJsonp;

            assert(typeof fetcher === 'function', `something is wrong fetcher is ${typeof fetcher}`);

            const body = parseArg(arg);

            const resolvedInit = { ...init, body };

            let response: Response & Body = yield fetcher(request as string, resolvedInit);

            while (!response.ok && retries.current > 0) {
              yield sleep(retryDelay);
              --retries.current;

              console.log(`request ${request} failed, ${response.status}: ${response.statusText} -- retrying`);
              console.log(`retry attempts left ${retries.current}`);

              response = yield fetcher(request as string, init);
            }

            if (!response.ok) {
              job.state = 'error';
              const responseError = new ResponseError(response.statusText, response.status, null);
              onQueryError(responseError);
              throw responseError;
            }

            job.state = 'succeeded';

            const data: T = yield response[contentType as ContentType]();

            assert(typeof acc !== 'undefined', `no accumulator function present`);

            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const result = acc(accumulated.current as R, data as any, {
              request,
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              fetcher: fetcher as any,
            }) as Promise<R>;

            accumulated.current = isPromise(result) ? yield result : result;

            onQuerySuccess(data);
          }

          send('SUCCESS', { payload: accumulated.current });
          onSuccess(accumulated.current);
        } catch (err) {
          if (err instanceof Error) {
            if (err?.name === 'AbortError') {
              abortable(err);
              return;
            }

            send('ERROR', { error: err });
          } else {
            console.log(`something weird is happening got an error which is not an error! ${JSON.stringify(err)}`);
          }

          onError(err);
          return;
        } finally {
          abortController.current.abort();
        }
      });
    },
    [
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
    ],
  );

  useIsomorphicLayoutEffect(() => {
    if (executeOnMount && typeof runner !== 'undefined' && machine.value === 'ready') {
      runner();
    }

    return () => {
      if (finishStates.includes(machine.value as FetchStates)) {
        task.current?.halt();
      }
    };
  }, [executeOnMount, machine.value, runner]);

  const result: QueryResult<R> = useMemo(() => {
    switch (machine.value as FetchStates) {
      case 'ready':
        return {
          state: 'ready',
          run: runner,
          reset: resetable,
          abort: aborter,
          data: undefined,
          error: undefined,
          counter: counter.current,
        };
      case 'loading':
        return {
          state: 'loading',
          run: runner,
          reset: resetable,
          abort: aborter,
          data: undefined,
          error: undefined,
          counter: counter.current,
        };
      case 'succeeded':
        return {
          state: 'succeeded',
          run: runner,
          reset: resetable,
          abort: aborter,
          data: machine.context.data as R,
          error: undefined,
          counter: counter.current,
        };
      case 'error':
        return {
          state: 'error',
          error: machine.context.error as Error,
          data: undefined,
          run: runner,
          reset: resetable,
          abort: aborter,
          counter: counter.current,
        };
      case 'aborted':
        return {
          state: 'aborted',
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
