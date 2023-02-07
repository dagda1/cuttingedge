import type { Reducer } from 'react';
import { match } from 'ts-pattern';
import produce from 'immer';
import type { ScaleLinear, ScalePoint } from 'd3-scale';

export const maxTan = 3;

export const initialState = {
  time: 0,
  unitCircle: { cx: 2, cy: 5, r: 2 },
  circleDot: { cx: 0, cy: 0, r: 5 },
  tanDot: { cx: 0, cy: 0, r: 0 },
  hypotenuse: { from: { x: 0, y: 0 }, to: { x: 0, y: 0 } },
  opposite: { from: { x: 0, y: 0 }, to: { x: 0, y: 0 } },
  angle: 0,
  angleText: '',
  tan: { from: { x: 0, y: 0 }, to: { x: 0, y: 0 } },
  rearHypotenuse: { from: { x: 0, y: 0 }, to: { x: 0, y: 0 } },
  tan3: { from: { x: 0, y: 0 }, to: { x: 0, y: 0 } },
  tanX: 0,
  tanData: [] as number[],
};

type State = typeof initialState;

type Actions = {
  type: 'TICK';
  payload: {
    xScale: ScalePoint<number>;
    yScale: ScalePoint<number>;
    tanXScale: ScaleLinear<number, number, never>;
    tanYScale: ScaleLinear<number, number, never>;
    height: number;
    width: number;
    unitCircleWidth: number;
    yAxisX: number;
  };
};

export const TWO_PI = Math.PI * 2;

const increase = TWO_PI / 360;

export const reducer: Reducer<State, Actions> = produce((state: State, action: Actions) => {
  return match(action)
    .with({ type: 'TICK' }, ({ payload: { xScale, yScale, tanXScale } }) => {
      const minimum = tanXScale.domain()[0];
      const maximum = tanXScale.domain()[1];

      if (state.tanData.length === 0) {
        state.tanData.push(maximum);
      }

      const top = state.tanData.slice(-1)[0];

      const newTime = top - increase;

      if (newTime < minimum) {
        state.tanData = [maximum];
      } else {
        state.tanData.push(newTime);
      }

      state.unitCircle = {
        cx: xScale(0) as number,
        cy: yScale(0) as number,
        r: (xScale(0) as number) / 2,
      };

      const head = state.tanData.slice(-1)[0];

      const dx = state.unitCircle.r * Math.cos(head);
      const dy = state.unitCircle.r * +Math.sin(head);

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

      state.rearHypotenuse = {
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
        from: { x: -dx, y: 0 },
        to: { x: -dx, y: -dy },
      };

      state.time = newTime;

      return;
    })
    .otherwise(() => state);
});
