/* eslint-disable @typescript-eslint/no-unused-vars */
import { useReducer } from 'react';
import { runWithCancel } from './runWithCancel';
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

const initialStateCreator = <D, E = Error>(
  initialData: D | undefined = undefined,
): FetchState<D, E> => ({
  state: FetchStates.Idle,
  data: initialData,
  error: undefined,
});

const loading = { type: FetchStates.Loading } as const;
const success = <D>(data: D) => ({ type: FetchStates.Success, data } as const);
const abort = { type: FetchStates.Cancel } as const;
const error = <E = Error>(error: E) =>
  ({ type: FetchStates.Error, error } as const);

export type FetchActions<D, E = Error> =
  | typeof loading
  | { type: FetchStates.Success; data: D }
  | typeof abort
  | { type: FetchStates.Error; error: E };

function reducer<D, E = Error>(
  current: FetchState<D>,
  action: FetchActions<D>,
): FetchState<D> {
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
          throw new Error(
            `Invalid action ${action.type} in state ${current.state}`,
          );
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
        default:
          throw new Error(
            `Invalid action ${action.type} in state ${current.state}`,
          );
      }
    default:
      return current;
  }
}

export type UseCancelableOptions<D> = {
  initialData: D;
  cancel: Promise<any>;
};

export const useCancelable = <R, N = R, Args extends any[] = UnknownArgs>(
  fn: () => Generator<unknown, R, N>,
  args: Args,
  cancel: Promise<any>,
) => {
  const initialState = initialStateCreator<R>();

  const [state, dispatch] = useReducer(reducer, initialState);

  const stop = new Promise(resolve => {
    cancel.then(reason => {
      dispatch(abort);

      resolve(reason || 'cancelling operation');
    });
  });

  const cancelable = () => {
    runWithCancel({ fn, args, cancel: stop });
  };

  return { ...state, run: cancelable };
};
