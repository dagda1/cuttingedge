import type { Point } from '@cutting/svg';
import { current, produce } from 'immer';
import { parse } from 'mathjs';
import type { Reducer } from 'react';
import { match } from 'ts-pattern';

const polarEffects = {
  ['butterfly']: 'e^(sin(x)) - 2 * cos(4x) + (sin((2x - pi) / 24))^5',
  ['rose']: '1.5 * cos(3x) * sin(3x)',
  ['lemniscate']: 'sqrt(abs(cos(2x)))',
} as const;

export type PolarEffect = keyof typeof polarEffects;

type State = {
  expression: string;
  points: Point[];
  current: Point[];
  bucket: Point[];
  time: number;
  polarEffect: PolarEffect;
};

type PolarActions =
  | {
      type: 'SET_POLAR_EFFECT';
      payload: {
        polarEffect: PolarEffect;
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

export const initialState: State = {
  expression: 'e^(sin(x)) - 2 * cos(4x) + (sin((2x - pi) / 24))^5',
  points: [],
  current: [],
  bucket: [],
  time: 0,
  polarEffect: 'butterfly',
};

export const reducer: Reducer<State, PolarActions> = produce((state, action) => {
  return match(action)
    .with({ type: 'SET_POLAR_EFFECT' }, ({ payload }) => {
      const expression = polarEffects[payload.polarEffect];
      const node = parse(expression);
      const compiledFn = node.compile();
      state.current = [];
      const points = getPolarCurvePointsFromParsed(compiledFn, 0, 2 * Math.PI, 500);

      state.bucket = points;
      state.points = [...points];
      state.expression = expression;
      state.time = 1;
    })
    .with({ type: 'TICK' }, () => {
      if (state.points.length <= 1) {
        console.log(current(state));
        state.current = [...state.bucket];
        // state.points = [];
        // state.time = 0;
        return;
      }

      const [next, ...rest] = state.points;

      state.points = rest;
      state.current.push(next);
      state.time += 1;
    })
    .otherwise(() => state);
});
