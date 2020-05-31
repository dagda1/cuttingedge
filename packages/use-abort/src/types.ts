export type Fn = (...args: any[]) => any;

export type ObjectType = { [key: string]: any };

export type UnknownArgs = any[];

export enum AbortableStates {
  Idle = 'idle',
  Loading = 'loading',
  Succeded = 'succeeded',
  Aborted = 'aborted',
  Error = 'error',
}

export enum AbortableActionTypes {
  Start = 'START',
  Loading = 'LOADING',
  Success = 'SUCCESS',
  Abort = 'ABORT',
  Error = 'ERROR',
  Reset = 'RESET',
}

export type AbortableState<D> = {
  state: AbortableStates;
  data?: D;
  error?: any;
};

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
  : T extends { [Symbol.iterator](): any }
  ? unknown
  : never;
