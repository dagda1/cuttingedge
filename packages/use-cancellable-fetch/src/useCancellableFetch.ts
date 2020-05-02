import { useReducer, Reducer } from 'react';

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
  initialData: D = undefined,
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

export type FetchActions =
  | typeof loading
  | ReturnType<typeof success>
  | typeof cancel
  | ReturnType<typeof error>;

type FetchReducer<D = any> = Reducer<FetchState<D>, FetchActions>;

function reducer<D>(current: FetchState<D>, action: FetchActions) {
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
  initialData: D | undefined;
};

export const useCancellableFetch = <D>(
  request: RequestInfo,
  init: RequestInit,
  options: UseCancellableFetchOptions<D> = { initialData: undefined },
) => {
  const initialState = initialStateCreator<D>(options.initialData);

  const [state, dispatch] = useReducer(reducer<D>, initialState);

  return state;
};
