import type { Operation, Task } from 'effection';
import { Slice } from '@effection/atom/dist';

export type AbortableContext<D> = {
  data: D;
  error?: Error;
};

export type FetchStates<T> =
  | { type: 'IDLE' }
  | { type: 'LOADING' }
  | { type: 'SUCCEEDED'; data: T }
  | { type: 'ERROR'; error: Error };

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
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AbortableStates = keyof AbortableSchema<any>['states'];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AbortableActionTypes = FetchStates<any>['type'];

export interface Runnable<T> {
  run(scope: Task): T;
}

export type ContentType = 'json' | 'text';
export type Methods = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'HEAD';

export type ContentTypeMap = `application/${ContentType}`;

type FetchOptions<T> = {
  onSuccess?: (t?: T | T[]) => void;
  onError?: (e: Error) => void;
  onAbort?: (e: Error) => void;
  method?: Methods;
  contentType?: ContentType;
  accumulator?: (a: T) => T;
  initialData?: T | T[];
};

export type UseAbortOptions<T> = Omit<FetchOptions<T>, 'method' | 'contentType'>;

export type FetchRequest<T> = {
  request: RequestInfo;
  init?: RequestInit;
} & Required<Omit<FetchOptions<T>, 'method' | 'accumulator'>>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface FetchJob<T = any> {
  uuid: string;
  fetch: Omit<FetchRequest<T>, 'onAbort'>;
}

export interface FetchContext {
  atom: Slice<{ jobs: Record<string, FetchJob> }>;
}

export interface FetchClient {
  jobs: FetchJob[];
  addFetchRequest(
    this: FetchClient,
    info: RequestInfo,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    options: RequestInit & Omit<FetchOptions<any>, 'onAbort'>,
  ): FetchClient;
}

export type AddFetch = (fetcher: FetchClient) => FetchClient;

export interface Effect<A> {
  (slice: Slice<A>): Operation<void>;
}

export type UseAbortResult<T> = {
  state: AbortableStates;
  run: (...args: unknown[]) => void;
  data?: T | T[];
  reset: () => void;
  abort: () => void;
  counter: number;
  error?: Error;
  isSettled: boolean;
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
