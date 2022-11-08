import { match } from 'ts-pattern';
import produce from 'immer';
import type { Reducer } from 'react';

export const initialState = {
  expression: 'x^2 + 1',
  tangent: {
    label: {
      text: '',
      dx: 0,
      dy: 0,
    },
    diff: {
      x: 0,
      y: 0,
    },
    line: {
      x1: 0,
      y1: 0,
      x2: 0,
      y2: 0,
    },
  },
};

type FunctionActions =
  | {
      type: 'DRAW_TANGENT';
      payload: typeof initialState['tangent'];
    }
  | {
      type: 'SET_EXPRESSION';
      payload: {
        expression: string;
      };
    };

export const reducer: Reducer<typeof initialState, FunctionActions> = produce((state, action) => {
  return match(action)
    .with({ type: 'DRAW_TANGENT' }, ({ payload }) => {
      state.tangent = payload;
    })
    .with({ type: 'SET_EXPRESSION' }, ({ payload }) => {
      state.expression = payload.expression;
    })
    .otherwise(() => state);
});
