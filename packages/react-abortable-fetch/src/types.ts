// import type { Task } from 'effection';
import type { fetch as nativeFetch } from 'cross-fetch';
import type fetchJsonp from 'fetch-jsonp';

export interface Runnable<T> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  run(scope: any): T;
}

export const fetchStates = ['ready', 'loading', 'succeeded', 'error', 'aborted'] as const;

export type FetchStates = (typeof fetchStates)[number];

export type ContentType = 'json' | 'text';
export type Methods = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'HEAD';

export type ContentTypeMap = `application/${ContentType}`;

export type FetchRequestInfo = { url: string } & Omit<RequestInit, 'signal'>;

export interface AccumulationContext {
  request: RequestInfo;
  fetcher: typeof nativeFetch | typeof fetchJsonp;
}

export type Accumulator<R, T> = T extends undefined
  ? R extends Array<infer U>
    ? (initialState: R, current: U, context: AccumulationContext) => R | Promise<R>
    : (initialState: R, current: T, context: AccumulationContext) => R | Promise<R>
  : (initialState: R, current: T, context: AccumulationContext) => R | Promise<R>;

type FetchOptions<R, T> = {
  method?: Methods;
  initialState?: R;
  contentType?: ContentType;
  accumulator?: Accumulator<R, T>;
  onQueryError?: (e: Error) => void;
  onQuerySuccess?: (t?: T) => void;
};

export type UseFetchOptions<R, T> = Omit<FetchOptions<R, T>, 'method' | 'contentType'> & {
  executeOnMount?: boolean;
  // TODO: add graphql
  fetchType?: 'fetch' | 'fetchJsonp';
  onAbort?: (e: Error) => void;
  onError?: (e: Error) => void;
  onSuccess?: (t?: R) => void;
  retryAttempts?: number;
  retryDelay?: number;
  timeout?: number;
};

export type FetchRequest<R, T> = {
  request: RequestInfo;
  init?: RequestInit;
} & Required<Omit<FetchOptions<R, T>, 'method' | 'accumulator'>>;

export interface FetchTask<R, T> {
  uuid: string;
  key: string;
  state: FetchStates;
  fetch: Omit<FetchRequest<R, T>, 'onAbort'>;
}

export interface FetchClient<R, T> {
  jobs: FetchTask<R, T>[];
  addFetchRequest(
    this: FetchClient<R, T>,
    info: string | FetchRequestInfo,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    options?: RequestInit & Omit<FetchOptions<any, any>, 'onAbort'>,
  ): FetchClient<R, T>;
}

export type Builder<R, T> = (fetch: FetchClient<R, T>) => FetchClient<R, T>;

export type QueryResult<A> =
  | {
      state: 'ready';
      run: (...args: unknown[]) => void;
      reset: () => void;
      abort: () => void;
      data: undefined;
      error: undefined;
      counter?: number;
    }
  | {
      state: 'loading';
      run: (...args: unknown[]) => void;
      reset: () => void;
      abort: () => void;
      data: undefined;
      error: undefined;
      counter?: number;
    }
  | {
      state: 'succeeded';
      data: A;
      run: (...args: unknown[]) => void;
      reset: () => void;
      abort: () => void;
      error: undefined;
      counter?: number;
    }
  | {
      state: 'error';
      error: Error;
      data: undefined;
      run: (...args: unknown[]) => void;
      reset: () => void;
      abort: () => void;
      counter?: number;
    }
  | {
      state: 'aborted';
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
