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
  Loading = 'LOADING',
  Success = 'success',
  Abort = 'abort',
  Error = 'errror',
  Reset = 'reset',
}

export type AbortableState<D> = {
  state: AbortableStates;
  data: D | undefined;
  error?: any;
};

export type UseAbortableOptions<D> = {
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
