import type { Operation, Task } from 'effection';
import { Fn } from '@cutting/util';
import { Slice } from '@effection/atom/dist';
import { FetchClient } from './context/FetchProvider';

export type AbortableContext<D> = {
  data: D;
  error?: Error;
};

export type FetchStates<T, E = Error> =
  | { type: 'IDLE' }
  | { type: 'LOADING' }
  | { type: 'SUCCEEDED'; data: T }
  | { type: 'ERROR'; error: E };

/* eslint-disable @typescript-eslint/ban-types */
export interface AbortableSchema<D> {
  states: {
    ['IDLE']: {};
    ['LOADING']: {
      states: {
        ['SUCCESS']: {
          context: { payload: D };
        };
        ['ERROR']: {};
        ['ABORT']: {};
      };
    };
    ['SUCCEEDED']: {
      states: {
        ['RESET']: {};
      };
    };
    ['ERROR']: {
      context: { error: Error };
    };
    ['ABORTED']: {};
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
}

export interface Runnable<T> {
  run(scope: Task): T;
}

export interface FetchRequest<T> {
  request: RequestInfo;
  init?: RequestInit;
  onSuccess?: (t?: T) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onError?: (e: any) => void;
  contentType?: 'json' | 'text';
}

export interface FetchJob<T> {
  uuid: string;
  fetchRequests: FetchRequest<T>[];
}

export interface FetchState<T> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  jobs: Record<string, FetchJob<T>>;
}

export type AddFetch = <T>(fetcher: FetchClient, job: FetchJob<T>) => FetchClient;

export interface FetchOptions<T> {
  initialData?: T | undefined;
  onAbort?: Fn;
  onSuccess?: (d: T) => void;
}

export interface Effect<A> {
  (slice: Slice<A>): Operation<void>;
}

export type ExtractType<T> = T extends {
  [Symbol.iterator](): { next(): { done: true; value: infer U } };
}
  ? U
  : T extends { [Symbol.iterator](): { next(): { done: false } } }
  ? never
  : T extends { [Symbol.iterator](): { next(): { value: infer U } } }
  ? U
  : T extends { [Symbol.iterator](): unknown }
  ? unknown
  : never;

export type O<T> = T extends (task: Task<infer U>) => Iterator<infer R>
  ? (task: Task<U>) => Iterator<O<U>, R>
  : T extends PromiseLike<infer U>
  ? PromiseLike<U>
  : T extends Iterator<infer U, infer R, infer N>
  ? Iterator<U, R, N>
  : never;
