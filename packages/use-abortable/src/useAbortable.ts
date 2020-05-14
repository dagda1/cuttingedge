import { useReducer, useCallback, useRef, useEffect, useMemo } from 'react';
import { makeRunnable } from './runnable';
import { once } from '@cutting/util';
import { usePrevious } from '@cutting/hooks';
import { UnknownArgs, AbortableState, AbortableStates, AbortableActionTypes, UseAbortableOptions } from './types';

const initialStateCreator = <D>(initialData: D | undefined = undefined): AbortableState<D> => ({
  state: AbortableStates.Idle,
  data: initialData,
  error: undefined,
});

const loading = { type: AbortableActionTypes.Loading } as const;
const abort = { type: AbortableActionTypes.Abort } as const;
const error = (error: any) => ({ type: AbortableActionTypes.Error, error } as const);
const reset = <D>(initialData: D) => ({ type: AbortableActionTypes.Reset, payload: initialData } as const);
const success = <D>(data: D) => ({ type: AbortableActionTypes.Success, payload: data } as const);

export type FetchActions<D> =
  | ReturnType<typeof reset>
  | typeof loading
  | { type: AbortableActionTypes.Success; payload: D } // annoying we cannot use ReturnType<typeof success> but it does not pick up type argument
  | typeof abort
  | ReturnType<typeof error>;

function reducer<D>(current: AbortableState<D>, action: FetchActions<D>): AbortableState<D> {
  switch (current.state) {
    case AbortableStates.Idle:
    case AbortableStates.Error:
      switch (action.type) {
        case AbortableActionTypes.Loading:
          return {
            ...current,
            state: AbortableStates.Loading,
          };
        default:
          throw new Error(`Invalid action ${action.type} in state ${current.state}`);
      }
    case AbortableStates.Loading:
      switch (action.type) {
        case AbortableActionTypes.Success:
          return {
            ...current,
            state: AbortableStates.Idle,
            data: action.payload,
          };
        case AbortableActionTypes.Error:
          return {
            ...current,
            error: action.error,
          };
        case AbortableActionTypes.Loading:
          return {
            ...current,
            state: AbortableStates.Loading,
          };
        case AbortableActionTypes.Abort:
          return {
            ...current,
            state: AbortableStates.Aborted,
          };
        default:
          throw new Error(`Invalid action ${JSON.stringify(action)} in state ${current.state}`);
      }
    case AbortableStates.Aborted: {
      switch (action.type) {
        case AbortableActionTypes.Reset:
          return { ...initialStateCreator<D>(action.payload as D) };
      }
    }
    default:
      return current;
  }
}

const identity = <T>(o: T) => o;

const DefaultAbortableOptions: UseAbortableOptions<undefined> = {
  initialData: undefined,
  onAbort: identity,
};

export const useAbortable = <T, R, N>(
  fn: () => Generator<Promise<T>, R, N>,
  options: Partial<UseAbortableOptions<N>> = {},
) => {
  const resolvedOptions = { ...DefaultAbortableOptions, ...options } as UseAbortableOptions<N>;
  const { initialData, onAbort } = resolvedOptions;
  const initialState = initialStateCreator<N>(initialData);
  const abortController = useRef<AbortController>(new AbortController());
  const counter = useRef(0);

  const [state, dispatch] = useReducer(reducer, initialState);

  const resetable = useCallback(() => {
    dispatch(reset(initialData));
  }, [initialData]);

  const abortable = useCallback(() => {
    onAbort();
    dispatch(abort);
  }, [onAbort]);

  useEffect(() => {
    once(abortController.current.signal, 'abort', abortable);
  }, [abortable]);

  const runnable = useMemo(
    () => makeRunnable({ fn, options: { ...resolvedOptions, controller: abortController.current } }),
    [fn, resolvedOptions],
  );

  const runner = useCallback(
    (...args: UnknownArgs) => {
      console.log(counter.current);

      dispatch(loading);

      runnable(...args)
        .then((result) => {
          dispatch(success<N>(result));
        })
        .finally(() => {
          console.log('heree');
        });
    },
    [runnable],
  );

  const runner2 = usePrevious(runner);

  console.log({ r: runner === runner2 });

  return useMemo(
    () => ({
      ...state,
      run: runner,
      reset: resetable,
      abortController: abortController.current,
      counter: counter.current,
    }),
    [resetable, runner, state],
  );
};
