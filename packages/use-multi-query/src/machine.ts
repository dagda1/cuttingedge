/* eslint-disable @typescript-eslint/no-unused-vars */
import { Machine, StateMachine } from 'xstate';
import { MultiQueryContext, MultiQuerySchema } from './types';

export const start = { type: 'START' } as const;
export const abort = { type: 'ABORT' } as const;
export const error = (error: Error) => ({ type: 'ERROR', error } as const);
export const reset = <D>(initialData: D) => ({ type: 'RESET', payload: initialData } as const);
export const success = <D>(data: D) => ({ type: 'SUCCESS', payload: data } as const);

export type MultiQueryActions<D> =
  | typeof start
  | ReturnType<typeof success>
  | ReturnType<typeof error>
  | typeof abort
  | ReturnType<typeof reset>;

export const createMultiQueryMachine = <D>({
  initialData,
}: {
  initialData: D;
}): StateMachine<MultiQueryContext<D>, MultiQuerySchema<D>, MultiQueryActions<D>> => {
  const context: MultiQueryContext<D> = {
    data: initialData,
    error: undefined,
  } as const;

  const machine = Machine<MultiQueryContext<D>, MultiQuerySchema<D>, MultiQueryActions<D>>({
    id: 'fetchable',
    initial: 'IDLE',
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
