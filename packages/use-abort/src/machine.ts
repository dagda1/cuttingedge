/* eslint-disable @typescript-eslint/no-unused-vars */
import { Machine, StateMachine } from 'xstate';
import { AbortableContext, AbortableSchema } from './types';

export const start = { type: 'START' } as const;
export const abort = { type: 'ABORT' } as const;
export const error = (error: Error) => ({ type: 'ERROR', error } as const);
export const reset = <D>(initialData: D) => ({ type: 'RESET', payload: initialData } as const);
export const success = <D>(data: D) => ({ type: 'SUCCESS', payload: data } as const);

export type AbortableActions<D> =
  | typeof start
  | ReturnType<typeof success>
  | ReturnType<typeof error>
  | typeof abort
  | ReturnType<typeof reset>;

export const createAbortableMachine = <D>(): StateMachine<
  AbortableContext<D>,
  AbortableSchema<D>,
  AbortableActions<D>
> => {
  const context = {
    state: 'IDLE',
    data: undefined,
    error: undefined,
  } as const;

  const machine = Machine<AbortableContext<D>, AbortableSchema<D>, AbortableActions<D>>({
    id: 'fetchable',
    initial: 'IDLE',
    context,
    states: {
      ['IDLE']: {
        on: { START: 'LOADING' },
      },
      ['LOADING']: {
        on: {
          ['SUCCESS']: {
            target: 'SUCCEEDED',
            actions: (context, event) => {
              context.data = event.payload as D;
            },
          },
          ['ERROR']: {
            target: ['ERROR'],
            actions: (context, event) => {
              context.error = event.error;
            },
          },
          ['ABORT']: {
            target: ['ABORTED'],
          },
        },
      },
      ['SUCCEEDED']: {
        on: {
          ['RESET']: {
            target: 'IDLE',
            actions: (_context, event) => {
              _context = context;
              return _context;
            },
          },
        },
      },
      ['ERROR']: {
        on: {
          ['RESET']: {
            target: 'IDLE',
            actions: (_context, event) => {
              _context = context;
              return _context;
            },
          },
        },
      },
      ['ABORTED']: {
        on: {
          ['RESET']: {
            target: 'IDLE',
            actions: (_context, event) => {
              _context = context;
              return _context;
            },
          },
        },
      },
    },
  });

  return machine;
};
