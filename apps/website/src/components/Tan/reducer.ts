import type { Reducer } from 'react';
import { match } from 'ts-pattern';
import produce from 'immer';
import type { ScaleLinear, ScalePoint } from 'd3-scale';
import { line } from 'd3-shape';
import { curveMonotoneX } from '@visx/curve';
import { assert } from 'assert-ts';

export const maxTan = 3;

export const initialState = {
  time: 0,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  tanCurve: (_: number[] | Iterable<number>): string | null => '',
  unitCircle: { cx: 2, cy: 5, r: 2 },
  circleDot: { cx: 0, cy: 0, r: 5 },
  tanDot: { cx: 0, cy: 0, r: 0 },
  hypotenuse: { from: { x: 0, y: 0 }, to: { x: 0, y: 0 } },
  opposite: { from: { x: 0, y: 0 }, to: { x: 0, y: 0 } },
  angle: 0,
  angleText: '',
  tan: { from: { x: 0, y: 0 }, to: { x: 0, y: 0 } },
  tan2: { from: { x: 0, y: 0 }, to: { x: 0, y: 0 } },
  tan3: { from: { x: 0, y: 0 }, to: { x: 0, y: 0 } },
  tanX: 0,
  tanData: [] as number[],
};

type State = typeof initialState;

type Actions =
  | {
      type: 'TICK';
      payload: {
        xScale: ScalePoint<number>;
        yScale: ScalePoint<number>;
        tanXScale: ScaleLinear<number, number, never>;
        tanYScale: ScaleLinear<number, number, never>;
        height: number;
        width: number;
      };
    }
  | {
      type: 'PLAY';
    }
  | {
      type: 'PAUSE';
    };

export const TWO_PI = Math.PI * 2;

const increase = TWO_PI / 360;

export const reducer: Reducer<State, Actions> = produce((state: State, action: Actions) => {
  return match(action)
    .with({ type: 'TICK' }, ({ payload: { xScale, yScale, tanXScale, tanYScale } }) => {
      const minimum = tanXScale.domain()[0];
      const maximum = tanXScale.domain()[1];

      if (state.tanData.length === 0) {
        state.tanData.push(minimum);
      }

      const top = state.tanData.slice(-1)[0];

      const newTime = top + increase;

      if (newTime > maximum) {
        state.tanData = [minimum];
      } else {
        state.tanData.push(newTime);
      }

      state.unitCircle = {
        cx: xScale(0) as number,
        cy: yScale(0) as number,
        r: xScale(0) as number,
      };

      const startOfTan = xScale(1);

      assert(typeof startOfTan === 'number', `non mumeric startOfTan ${startOfTan}`);

      state.tanCurve = line<number>()
        .curve(curveMonotoneX)
        .defined((d) => Math.tan(d) < maxTan && Math.tan(d) > -maxTan)
        .x((d) => startOfTan + tanXScale(newTime + d))
        .y((d) => {
          console.log({ d, t: tanYScale(Math.tan(d)), x: tanXScale.domain(), y: tanYScale.domain() });
          return tanYScale(Math.tan(d));
        });

      const dx = state.unitCircle.r * Math.cos(newTime);
      const dy = state.unitCircle.r * -Math.sin(newTime);

      state.circleDot = {
        cx: dx,
        cy: dy,
        r: state.circleDot.r,
      };

      state.hypotenuse = {
        from: {
          x: 0,
          y: 0,
        },
        to: {
          x: dx,
          y: dy,
        },
      };

      state.tan2 = {
        from: {
          x: 0,
          y: 0,
        },
        to: {
          x: -dx,
          y: -dy,
        },
      };

      state.tanDot = {
        cx: state.tan.to.x,
        cy: state.tan.to.y,
        r: 5,
      };

      let angle = Math.atan2(
        state.hypotenuse.from.y - state.hypotenuse.to.y,
        state.hypotenuse.from.x - state.hypotenuse.to.x,
      );

      if (angle > 0) {
        angle = -2 * Math.PI + angle;
      }

      state.angleText = String(Math.abs((angle * 180) / Math.PI));

      state.angleText = state.angleText.substring(0, state.angleText.indexOf('.'));

      state.angleText = `${state.angleText}°`;

      state.tanX = Number(state.angleText.substring(0, state.angleText.length - 1));

      state.angle = angle + Math.PI / 2;

      state.opposite = {
        from: { x: dx, y: 0 },
        to: { x: dx, y: dy },
      };

      state.time = newTime;

      return;
    })
    .otherwise(() => state);
});
