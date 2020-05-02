import { useReducer } from 'react';

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
const cancel = { type: FetchStates.Cancel } as const;
const error = <E = Error>(error: E) =>
  ({ type: FetchStates.Error, error } as const);

export type FetchActions<D, E = Error> =
  | typeof loading
  | { type: FetchStates.Success; data: D }
  | typeof cancel
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

export type UseCancellableFetchOptions<D> = {
  initialData: D;
};

export const useCancellableFetch = <R, TNext = R>(
  generatorFn: () => Generator<unknown, R, TNext>,
  options: UseCancellableFetchOptions<R | undefined> = {
    initialData: undefined,
  },
) => {
  const initialState = initialStateCreator<R>(options.initialData);

  const [state, dispatch] = useReducer(reducer, initialState);

  return state;
};
