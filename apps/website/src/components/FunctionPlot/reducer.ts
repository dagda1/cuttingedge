import type { ScaleLinear } from 'd3-scale';
import { produce } from 'immer';
import type { Reducer } from 'react';
import { match } from 'ts-pattern';

export const increase = (Math.PI * 2) / 360;

type Direction = 'forwards' | 'back';

type State = {
  expression: string;
  range: {
    minX: number;
    maxX: number;
  };
  tangent: {
    x?: number;
    direction: Direction;
    label: {
      text: string;
      dx: number;
      dy: number;
    };
    diff: {
      x: number;
      y: number;
    };
    line: {
      x1: number;
      y1: number;
      x2: number;
      y2: number;
    };
  };
};

type FunctionActions =
  | {
      type: 'DRAW_TANGENT';
      payload: Omit<State['tangent'], 'x'> &
        Required<Pick<State['tangent'], 'x'>> & { xScale: ScaleLinear<number, number, never> };
    }
  | {
      type: 'SET_EXPRESSION';
      payload: {
        expression: string;
      };
    };

export const initialState = {
  expression: 'x^3',
  range: {
    minX: -10,
    maxX: 11,
  },
  tangent: {
    direction: 'forwards' as Direction,
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

export const reducer: Reducer<State, FunctionActions> = produce((state, action) => {
  return match(action)
    .with({ type: 'DRAW_TANGENT' }, ({ payload }) => {
      const { x, xScale } = payload;
      const { minX, maxX } = state.range;

      const getDirection = (): Direction => {
        if (state.tangent.direction === 'forwards') {
          if (x >= xScale(maxX - 2)) {
            return 'back';
          }

          return 'forwards';
        }

        if (state.tangent.direction === 'back') {
          if (x <= xScale(minX + 1)) {
            return 'forwards';
          }

          return 'back';
        }

        throw new Error(`no direction for ${state.tangent.direction}`);
      };

      const nextDirection = getDirection();

      const nextX = nextDirection === 'forwards' ? x + 1 : x - 1;

      state.tangent = { ...payload, x: nextX, direction: nextDirection };
    })
    .with({ type: 'SET_EXPRESSION' }, ({ payload }) => {
      state.expression = payload.expression;
    })
    .otherwise(() => state);
});
