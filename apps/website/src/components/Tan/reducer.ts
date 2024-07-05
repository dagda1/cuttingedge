import type { ScaleLinear, ScalePoint } from 'd3-scale';
import { produce } from 'immer';
import type { Reducer } from 'react';
import { match } from 'ts-pattern';

export const maxTan = 3;

const radians = [
  { value: Math.PI / 2, label: '$\\frac{\\pi}2(0, 1)$' },
  { value: Math.PI / 3, label: '$\\frac{\\pi}3(\\frac{1}{2},\\frac{\\sqrt3}{2}$)' },
  { value: Math.PI / 4, label: '$\\frac{\\pi}4(\\frac{\\sqrt2}{2}, \\frac{\\sqrt2}{2})$' },
  { value: Math.PI / 6, label: '$\\frac{\\pi}6(\\frac{\\sqrt3}{2}, \\frac{1}{2})$' },
  { value: 2 * Math.PI, label: '${2\\pi}$(1,0)' },
  { value: (11 * Math.PI) / 6, label: '$\\frac{11\\pi}6(\\frac{\\sqrt3}{2}, -\\frac{1}{2})$' },
  { value: (7 * Math.PI) / 4, label: '$\\frac{7\\pi}4(\\frac{\\sqrt2}{2}, -\\frac{\\sqrt2}{2})$' },
  { value: (5 * Math.PI) / 3, label: '$\\frac{5\\pi}3(\\frac{1}{2}, -\\frac{\\sqrt3}{2})$' },
  { value: (3 * Math.PI) / 2, label: '$\\frac{3\\pi}2(0,-1)$' },
  { value: (4 * Math.PI) / 3, label: '$\\frac{4\\pi}3(-\\frac{1}{2}, -\\frac{\\sqrt3}{2})$' },
  { value: (5 * Math.PI) / 4, label: '$\\frac{5\\pi}4(-\\frac{\\sqrt2}{2}, -\\frac{\\sqrt2}{2})$' },
  { value: (7 * Math.PI) / 6, label: '$\\frac{7\\pi}6(-\\frac{\\sqrt3}{2}, -\\frac{1}{2})$' },
  { value: Math.PI, label: '$\\pi$(-1,0)' },
  { value: (5 * Math.PI) / 6, label: '$\\frac{5\\pi}6(-\\frac{\\sqrt3}{2}, \\frac{1}{2})$' },
  { value: (3 * Math.PI) / 4, label: '$\\frac{3\\pi}4(-\\frac{\\sqrt2}{2}, \\frac{\\sqrt2}{2})$' },
  { value: (2 * Math.PI) / 3, label: '$\\frac{2\\pi}3(-\\frac{1}{2}, \\frac{\\sqrt3}{2})$' },
];

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
  rays: [
    {
      cosX: 0,
      sinY: 0,
      offsetX: 0,
      offsetY: 0,
      label: '',
    },
  ],
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
        state.tanData.push(minimum);
      }

      const top = state.tanData.slice(-1)[0];

      const newTime = top + increase;

      if (newTime > maximum) {
        state.tanData = [minimum];
      } else {
        state.tanData.push(newTime);
      }

      state.rays = radians.map(({ value, label }) => {
        const offsetX = value > Math.PI / 2 && value < (3 * Math.PI) / 2 ? -20 : -5;
        const offsetY = value > 0 && value < Math.PI ? -35 : 0;
        const cosX = state.unitCircle.r * Math.cos(value);
        const sinY = state.unitCircle.r * -Math.sin(value);

        return {
          cosX,
          sinY,
          offsetX: offsetX + cosX,
          offsetY: offsetY + sinY,
          label,
        };
      });

      state.unitCircle = {
        cx: xScale(0) as number,
        cy: yScale(0) as number,
        r: yScale(0) as number,
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
        state.hypotenuse.from.y + state.hypotenuse.to.y,
        state.hypotenuse.from.x + state.hypotenuse.to.x,
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
