import { Fn } from '@cutting/util';

/* eslint-disable @typescript-eslint/ban-types */
export type AbortableStates = 'IDLE' | 'LOADING' | 'SUCCEEDED' | 'ABORTED' | 'ERROR';

export type AbortableActionTypes = 'START' | 'LOADING' | 'SUCCESS' | 'ABORT' | 'ERROR' | 'RESET';

export type AbortableContext<D> = {
  data?: D;
  error?: Error;
};

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

export type UseAbortOptions<D> = {
  initialData: D | undefined;
  onAbort: Fn;
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
