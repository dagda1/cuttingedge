import type { Operation, Task } from 'effection';
import { Slice } from '@effection/atom/dist';

export type FetcherContext<A> = {
  data: A;
  error?: Error;
};

export type FetchStates<T> =
  | { type: 'READY' }
  | { type: 'LOADING' }
  | { type: 'SUCCEEDED'; data: T }
  | { type: 'ERROR'; error: Error }
  | { type: 'ABORTED'; error: Error };

/* eslint-disable @typescript-eslint/ban-types */
export interface FetcherSchema<A> {
  states: {
    ['READY']: {};
    ['LOADING']: {
      states: {
        ['SUCCESS']: {
          context: { payload: A };
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
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type FetcherStates = keyof FetcherSchema<any>['states'];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type FetcherActionTypes = FetchStates<any>['type'];

export interface Runnable<T> {
  run(scope: Task): T;
}

export type ContentType = 'json' | 'text';
export type Methods = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'HEAD';

export type ContentTypeMap = `application/${ContentType}`;

export type Accumulator<A, R> = (initialState: R, current: A, request?: RequestInfo) => R;

type FetchOptions<A, R> = {
  method?: Methods;
  contentType?: ContentType;
  accumulator?: (initialState: R, current: A, request?: RequestInfo) => R;
  initialState?: R;
  onQueryError?: (e: Error) => void;
  onQuerySuccess?: (t?: A) => void;
};

export type UseFetcherOptions<A, R> = Omit<FetchOptions<A, R>, 'method' | 'contentType'> & {
  fetchType?: 'fetch' | 'fetchJsonp';
  onSuccess?: (t?: R) => void;
  executeOnMount?: boolean;
  onError?: (e: Error) => void;
  onAbort?: (e: Error) => void;
  retryAttempts?: number;
  retryDelay?: number;
  timeout?: number;
};

export type FetchRequest<A, R> = {
  request: RequestInfo;
  init?: RequestInit;
} & Required<Omit<FetchOptions<A, R>, 'method' | 'accumulator'>>;

export interface FetchJob<A, R> {
  uuid: string;
  key: string;
  state: FetcherStates;
  fetch: Omit<FetchRequest<A, R>, 'onAbort'>;
}

export interface FetchContext {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  atom: Slice<{ jobs: Record<string, FetchJob<any, any>> }>;
}

export interface FetchClient<A, R = A> {
  jobs: FetchJob<A, R>[];
  addFetchRequest(
    this: FetchClient<A, R>,
    info: RequestInfo,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    options?: RequestInit & Omit<FetchOptions<any, any>, 'onAbort'>,
  ): FetchClient<A, R>;
}

export type AddFetch<A, R> = (fetcher: FetchClient<A, R>) => FetchClient<A, R>;

export interface Effect<A> {
  (slice: Slice<A>): Operation<void>;
}

export type QueryResult<A> =
  | {
      state: 'READY';
      run: (...args: unknown[]) => void;
      reset: () => void;
      abort: () => void;
      data: undefined;
      error: undefined;
      counter?: number;
    }
  | {
      state: 'LOADING';
      run: (...args: unknown[]) => void;
      reset: () => void;
      abort: () => void;
      data: undefined;
      error: undefined;
      counter?: number;
    }
  | {
      state: 'SUCCEEDED';
      data: A;
      run: (...args: unknown[]) => void;
      reset: () => void;
      abort: () => void;
      error: undefined;
      counter?: number;
    }
  | {
      state: 'ERROR';
      error: Error;
      data: undefined;
      run: (...args: unknown[]) => void;
      reset: () => void;
      abort: () => void;
      counter?: number;
    }
  | {
      state: 'ABORTED';
      error: undefined;
      data: undefined;
      run: (...args: unknown[]) => void;
      reset: () => void;
      abort: () => void;
      counter?: number;
    };

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
