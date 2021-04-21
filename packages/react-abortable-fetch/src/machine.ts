/* eslint-disable @typescript-eslint/no-unused-vars */
import { Machine, StateMachine } from 'xstate';
import { FetchContext, FetchSchema } from './types';

export const start = { type: 'START' } as const;
export const abort = { type: 'ABORT' } as const;
export const error = (error: Error) => ({ type: 'ERROR', error } as const);
export const reset = <D>(initialState: D) => ({ type: 'RESET', payload: initialState } as const);
export const success = <D>(data: D) => ({ type: 'SUCCESS', payload: data } as const);

export type QueryActions<D> =
  | typeof start
  | ReturnType<typeof success>
  | ReturnType<typeof error>
  | typeof abort
  | ReturnType<typeof reset>;

export const createQueryMachine = <D>({
  initialState,
}: {
  initialState: D;
}): StateMachine<FetchContext<D>, FetchSchema<D>, QueryActions<D>> => {
  const context: FetchContext<D> = {
    data: initialState,
    error: undefined,
  } as const;

  const machine = Machine<FetchContext<D>, FetchSchema<D>, QueryActions<D>>({
    id: 'fetchable',
    initial: 'READY',
    states: {
      ['READY']: {
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
            target: 'READY',
          },
        },
      },
      ['ERROR']: {
        on: {
          ['RESET']: {
            target: 'READY',
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
            target: 'READY',
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
