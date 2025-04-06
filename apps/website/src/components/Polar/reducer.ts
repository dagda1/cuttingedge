import type { Point } from '@cutting/svg';
import { produce } from 'immer';
import { parse } from 'mathjs';
import type { Reducer } from 'react';
import { match } from 'ts-pattern';

type State = {
  expression: string;
  points: Point[];
  current: Point[];
  bucket: Point[];
  time: number;
};

type PolarActions =
  | {
      type: 'SET_EXPRESSION';
      payload: {
        expression: string;
      };
    }
  | {
      type: 'TICK';
    };

export const increase = (Math.PI * 2) / 720;

function getPolarCurvePointsFromParsed(
  compiledFn: math.EvalFunction,
  thetaStart: number,
  thetaEnd: number,
  steps: number,
): { x: number; y: number }[] {
  const points = [];
  const stepSize = (thetaEnd - thetaStart) / steps;

  for (let i = 0; i <= steps; i++) {
    const theta = thetaStart + i * stepSize;
    const r = compiledFn.evaluate({ x: theta });
    const x = r * Math.cos(theta);
    const y = r * Math.sin(theta);
    points.push({ x, y });
  }

  return points;
}

// butterfly curve  e^(sin(x)) - 2 * cos(4x) + (sin((2x - pi) / 24))^5
// rose curve sin(4x)

export const initialState: State = {
  expression: 'e^(sin(x)) - 2 * cos(4x) + (sin((2x - pi) / 24))^5',
  points: [],
  current: [],
  bucket: [],
  time: 0,
};

export const reducer: Reducer<State, PolarActions> = produce((state, action) => {
  return match(action)
    .with({ type: 'SET_EXPRESSION' }, ({ payload }) => {
      const node = parse(payload.expression);
      const compiledFn = node.compile();
      state.current = [];
      const points = getPolarCurvePointsFromParsed(compiledFn, 0, 2 * Math.PI, 100);

      state.bucket = points;
      state.points = [...points];
      state.expression = payload.expression;
      state.time = 1;
    })
    .with({ type: 'TICK' }, () => {
      if (state.points.length === 1) {
        return;
        state.time = 0;

        state.points = state.bucket.slice();
        state.current = [];
      }

      const [next, ...rest] = state.points;

      state.points = rest;
      state.current.push(next);
      state.time += 1;
    })
    .otherwise(() => state);
});
