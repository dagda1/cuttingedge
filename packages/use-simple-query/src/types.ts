import type { Operation, Task } from 'effection';
import { Slice } from '@effection/atom/dist';

export type QueryContext<D> = {
  data: D;
  error?: Error;
};

export type FetchStates<T> =
  | { type: 'READY' }
  | { type: 'LOADING' }
  | { type: 'SUCCEEDED'; data: T }
  | { type: 'ERROR'; error: Error }
  | { type: 'ABORTED'; error: Error };

/* eslint-disable @typescript-eslint/ban-types */
export interface QuerySchema<D> {
  states: {
    ['READY']: {};
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
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type QueryStates = keyof QuerySchema<any>['states'];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type QueryActionTypes = FetchStates<any>['type'];

export interface Runnable<T> {
  run(scope: Task): T;
}

export type ContentType = 'json' | 'text';
export type Methods = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'HEAD';

export type ContentTypeMap = `application/${ContentType}`;

export type Accumulator<D, R> = (initialState: R, current: D, request?: RequestInfo) => R;

type FetchOptions<D, R> = {
  method?: Methods;
  contentType?: ContentType;
  accumulator?: (initialState: R, current: D, request?: RequestInfo) => R;
  initialState?: R;
  onQueryError?: (e: Error) => void;
  onQuerySuccess?: (t?: D) => void;
};

export type UseQueryOptions<D, R> = Omit<FetchOptions<D, R>, 'method' | 'contentType'> & {
  fetchType?: 'fetch' | 'fetchJsonp';
  onSuccess?: (t?: R) => void;
  executeOnMount?: boolean;
  onError?: (e: Error) => void;
  onAbort?: (e: Error) => void;
};

export type FetchRequest<D, R> = {
  request: RequestInfo;
  init?: RequestInit;
} & Required<Omit<FetchOptions<D, R>, 'method' | 'accumulator'>>;

export interface FetchJob<D, R> {
  uuid: string;
  key: string;
  state: QueryStates;
  fetch: Omit<FetchRequest<D, R>, 'onAbort'>;
}

export interface FetchContext {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  atom: Slice<{ jobs: Record<string, FetchJob<any, any>> }>;
}

export interface FetchClient<D, R = D> {
  jobs: FetchJob<D, R>[];
  addFetchRequest(
    this: FetchClient<D, R>,
    info: RequestInfo,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    options?: RequestInit & Omit<FetchOptions<any, any>, 'onAbort'>,
  ): FetchClient<D, R>;
}

export type AddFetch<D, R> = (fetcher: FetchClient<D, R>) => FetchClient<D, R>;

export interface Effect<A> {
  (slice: Slice<A>): Operation<void>;
}

export type QueryResult<D> = {
  state: QueryStates;
  run: (...args: unknown[]) => void;
  data?: D;
  reset: () => void;
  abort: () => void;
  error?: Error;
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
