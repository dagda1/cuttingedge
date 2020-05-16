/* eslint-disable @typescript-eslint/no-unused-vars */
import { Machine, StateMachine } from 'xstate';
import { AbortableStates, AbortableState, AbortableActionTypes } from './types';

export interface AbortableSchema {
  states: {
    [AbortableStates.Idle]: {};
    [AbortableStates.Loading]: {};
    [AbortableStates.Succeded]: {};
    [AbortableStates.Error]: {};
    [AbortableStates.Aborted]: {};
  };
}

export const start = { type: AbortableActionTypes.Start } as const;
export const abort = { type: AbortableActionTypes.Abort } as const;
export const error = (error: any) => ({ type: AbortableActionTypes.Error, error } as const);
export const reset = <D>(initialData: D) => ({ type: AbortableActionTypes.Reset, payload: initialData } as const);
export const success = <D>(data: D) => ({ type: AbortableActionTypes.Success, payload: data } as const);

export type AbortableActions<D> =
  | typeof start
  | { type: AbortableActionTypes.Success; payload: D } // annoying we cannot use ReturnType<typeof success> but it does not pick up type argument
  | ReturnType<typeof error>
  | typeof abort
  | ReturnType<typeof reset>;

export const createAbortableMachine = <D>(): StateMachine<AbortableState<D>, AbortableSchema, AbortableActions<D>> => {
  const context: AbortableState<D> = {
    state: AbortableStates.Idle,
    data: undefined,
    error: undefined,
  };

  const abortableMachine = Machine<AbortableState<D>, AbortableSchema, AbortableActions<D>>({
    id: 'fetchable',
    initial: AbortableStates.Idle,
    context,
    states: {
      [AbortableStates.Idle]: {
        on: { START: AbortableStates.Loading },
      },
      [AbortableStates.Loading]: {
        on: {
          [AbortableActionTypes.Success]: {
            target: AbortableStates.Succeded,
            actions: (context, event) => {
              context.data = { ...event.payload };
            },
          },
          [AbortableActionTypes.Error]: {
            target: [AbortableStates.Error],
            actions: (context, event) => {
              context.error = { ...event.error };
            },
          },
          [AbortableActionTypes.Abort]: {
            target: [AbortableStates.Aborted],
          },
        },
      },
      [AbortableStates.Succeded]: {
        on: {
          [AbortableActionTypes.Reset]: {
            target: AbortableStates.Idle,
            actions: (_context, event) => {
              _context = context;
              return _context;
            },
          },
        },
      },
      [AbortableStates.Error]: {
        on: {
          [AbortableActionTypes.Reset]: {
            target: AbortableStates.Idle,
            actions: (_context, event) => {
              _context = context;
              return _context;
            },
          },
        },
      },
      [AbortableStates.Aborted]: {
        on: {
          [AbortableActionTypes.Reset]: {
            target: AbortableStates.Idle,
            actions: (_context, event) => {
              console.log(_context);
              _context = context;
              return _context;
            },
          },
        },
      },
    },
  });

  return abortableMachine;
};
