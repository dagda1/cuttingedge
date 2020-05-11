import { Machine, StateMachine } from 'xstate';
import { AbortableStates, AbortableState, AbortableActionTypes } from './types';

export interface AbortableSchema {
  states: {
    [AbortableStates.Idle]: {};
    [AbortableStates.Loading]: {
      states: {
        [AbortableStates.Succeded]: {};
        [AbortableStates.Error]: {};
        [AbortableStates.Aborted]: {};
      };
    };
  };
}

const start = { type: 'START' } as const;
const abort = { type: AbortableActionTypes.Abort } as const;
const error = (error: any) => ({ type: AbortableActionTypes.Error, error } as const);
const reset = <D>(initialData: D) => ({ type: AbortableActionTypes.Reset, payload: initialData } as const);
const success = <D>(data: D) => ({ type: AbortableActionTypes.Success, payload: data } as const);

export type AbortableActions<D> =
  | ReturnType<typeof reset>
  | typeof start
  | { type: AbortableActionTypes.Success; payload: D } // annoying we cannot use ReturnType<typeof success> but it does not pick up type argument
  | typeof abort
  | ReturnType<typeof error>;

export const createAbortableMachine = <D>(): StateMachine<AbortableState<D>, AbortableSchema, AbortableActions<D>> => {
  const context: AbortableState<D> = {
    state: AbortableStates.Idle,
    data: undefined,
    error: undefined,
  };

  const abortableMachine = Machine<AbortableState<D>, AbortableSchema, AbortableActions<D>>({
    id: 'abortable',
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
        states: {
          [AbortableStates.Succeded]: {},
          [AbortableStates.Error]: {
            on: {
              [AbortableActionTypes.Reset]: {
                target: AbortableStates.Idle,
                actions: (_context, event) => {
                  _context = context;
                },
              },
            },
          },
          [AbortableStates.Aborted]: {
            on: {
              [AbortableActionTypes.Reset]: {
                target: AbortableStates.Idle,
                actions: (_context, event) => {
                  _context = context;
                },
              },
            },
          },
        },
      },
    },
  });

  return abortableMachine;
};
