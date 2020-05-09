import { useReducer, useCallback, useRef, useEffect } from 'react';
import { makeRunnable } from './runnable';
import { once } from '@cutting/util';
import { UnknownArgs } from './types';

export enum FetchStates {
  Idle = 'idle',
  Loading = 'loading',
  Success = 'success',
  Cancel = 'cancel',
  Error = 'error',
}

export type FetchState<D, E = Error> = {
  state: FetchStates;
  data: D | undefined;
  error?: E;
};

const initialStateCreator = <D, E = Error>(initialData: D | undefined = undefined): FetchState<D, E> => ({
  state: FetchStates.Idle,
  data: initialData,
  error: undefined,
});

const loading = { type: FetchStates.Loading } as const;
export const success = <D>(data: D) => ({ type: FetchStates.Success, data } as const);
const abort = { type: FetchStates.Cancel } as const;
export const error = <E = Error>(error: E) => ({ type: FetchStates.Error, error } as const);

export type FetchActions<D, E = Error> =
  | typeof loading
  | { type: FetchStates.Success; data: D }
  | typeof abort
  | { type: FetchStates.Error; error: E };

function reducer<D, E = Error>(current: FetchState<D>, action: FetchActions<D>): FetchState<D> {
  switch (current.state) {
    case FetchStates.Idle:
    case FetchStates.Error:
      switch (action.type) {
        case FetchStates.Loading:
          return {
            ...current,
            state: FetchStates.Loading,
          };
        default:
          throw new Error(`Invalid action ${action.type} in state ${current.state}`);
      }
    case FetchStates.Loading:
      switch (action.type) {
        case FetchStates.Success:
          return {
            ...current,
            state: FetchStates.Success,
            data: action.data,
          };
        case FetchStates.Error:
          return {
            ...current,
            error: action.error,
          };
        case FetchStates.Loading:
          return {
            ...current,
            state: FetchStates.Loading,
          };
        case FetchStates.Cancel:
          return {
            ...current,
            state: FetchStates.Cancel,
          };
        default:
          throw new Error(`Invalid action ${JSON.stringify(action)} in state ${current.state}`);
      }
    default:
      return current;
  }
}

export type UseCancellableOptions<D> = {
  initialData: D | undefined;
};

export const useCancellable = <R, N = R>(
  fn: () => Generator<unknown, R, N>,
  options: UseCancellableOptions<R> = { initialData: undefined },
) => {
  const initialState = initialStateCreator<R>(options.initialData);
  const abortController = useRef<AbortController>(new AbortController());

  const [state, dispatch] = useReducer(reducer, initialState);

  const abortable = useCallback(() => {
    console.log('yes sir we are cancelling');
    dispatch(abort);
  }, []);

  useEffect(() => {
    once(abortController.current.signal, 'abort', abortable);
  }, [abortable]);

  const { runnable } = makeRunnable({ fn, controller: abortController.current });

  const runner = useCallback(
    (...args: UnknownArgs) => {
      dispatch(loading);
      runnable(...args).then((result) => {
        dispatch(success(result));
      });
    },
    [runnable],
  );

  return { ...state, run: runner, abortController: abortController.current };
};
