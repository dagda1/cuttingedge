import type { Reducer } from 'react';
import { range } from 'd3-array';
import type { ScaleLinear } from 'd3-scale';
import { scaleLinear } from '@visx/scale';
import { identity } from '@cutting/util';

export type Dimensions = { width: number; height: number };

type SineLinear = ScaleLinear<number, number, never>;

export const increase = (Math.PI * 2) / 360;

export const xTickValues = [0, 1.57, 3.14, 4.71, 6.28];

export const PiMap = {
  '0': '0',
  '1.57': '\\pi\\over 2',
  '3.14': '\\pi',
  '4.71': '3\\pi\\over 2',
  '6.28': '2\\pi',
} as const;

export type PiMapKeys = keyof typeof PiMap;

const radians = [
  { value: Math.PI / 4, label: '$\\frac{\\pi}4$' },
  { value: Math.PI / 2, label: '$\\frac{\\pi}2$' },
  { value: (3 * Math.PI) / 4, label: '$\\frac{3\\pi}4$' },
  { value: Math.PI, label: '$\\pi$' },
  { value: (5 * Math.PI) / 4, label: '$\\frac{5\\pi}4$' },
  { value: (3 * Math.PI) / 2, label: '$\\frac{3\\pi}2$' },
  { value: (7 * Math.PI) / 4, label: '$\\frac{7\\pi}4$' },
  { value: 2 * Math.PI, label: '${2\\pi}$' },
];

export const getScales = ({
  width,
  height,
}: Dimensions): {
  xScale: SineLinear;
  yScale: SineLinear;
  xAxisScale: SineLinear;
  yAxisScale: SineLinear;
  firstX: number;
  initialX: number;
  initialY: number;
  radius: number;
} => {
  if (width === 1 && height === 1) {
    return {
      xScale: identity as SineLinear,
      yScale: identity as SineLinear,
      xAxisScale: identity as SineLinear,
      yAxisScale: identity as SineLinear,
      firstX: 0,
      initialX: 0,
      initialY: 0,
      radius: 0,
    };
  }

  const radius = height / 6;

  const xScale = scaleLinear({ domain: [0, 20], range: [0, width] });
  const yScale = scaleLinear({ domain: [0, 20], range: [height, 0] });

  const firstX = -(radius * 1.25);

  const initialX = xScale(20) - radius;
  const initialY = yScale(12);

  const xAxisScale = scaleLinear({ domain: [0, Math.PI * 2], range: [firstX, -initialX] });
  const yAxisScale = scaleLinear({ domain: [-1, 1], range: [radius, -radius] });

  return {
    xScale,
    yScale,
    xAxisScale,
    yAxisScale,
    firstX,
    initialX,
    initialY,
    radius,
  };
};

type SineActions = { type: 'TICK'; payload: { radius: number; firstX: number; time: number; xAxisScale: SineLinear } };

const MarkerWidth = 5;

export const initialState = {
  time: 0,
  initialX: 0,
  initialY: 0,
  firstX: 0,
  container: { x: 0, y: 0 },
  unitCircle: { cx: 0, cy: 0, r: 0 },
  hypotenuse: { from: { x: 0, y: 0 }, to: { x: 0, y: 0 } },
  opposite: { from: { x: 0, y: 0 }, to: { x: 0, y: 0 } },
  adjacent: { from: { x: 0, y: 0 }, to: { x: 0, y: 0 } },
  dot: { cx: 0, cy: 0, r: MarkerWidth },
  verticalDot: { cx: 0, cy: 0, r: MarkerWidth },
  joiningLine: { from: { x: 0, y: 0 }, to: { x: 0, y: 0 } },
  // TODO: fix axisDot
  // axisDot: { cx: 0, cy: 0, r: MarkerWidth },
  axisDot: { cx: 0, cy: 0, r: 0 },
  sine: [
    {
      x: 0,
      y: 0,
    },
  ],
  xIncrement: 0,
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

export const reducer: Reducer<typeof initialState, SineActions> = (state, action) => {
  switch (action.type) {
    case 'TICK':
      const newTime = state.time + increase;
      const newXIncrement = state.xIncrement > Math.PI * 2 ? increase : state.xIncrement + increase;

      const { radius, firstX } = action.payload;

      const sine = range(0, 54)
        .map((x) => (x * 10) / 85)
        .map((x) => ({ x, y: -Math.sin(x - newTime) }));

      const dx = radius * Math.cos(newTime);
      const dy = radius * -Math.sin(newTime); // counter-clockwise

      const rays = radians.map(({ value, label }) => {
        const offsetX = value > Math.PI / 2 && value < (3 * Math.PI) / 2 ? -20 : -5;
        const offsetY = value > 0 && value < Math.PI ? -35 : 0;
        const cosX = radius * Math.cos(value);
        const sinY = radius * -Math.sin(value);

        return {
          cosX,
          sinY,
          offsetX: offsetX + cosX,
          offsetY: offsetY + sinY,
          label,
        };
      });

      return {
        ...state,
        unitCircle: {
          ...state.unitCircle,
          r: radius,
        },
        // TODO: fix axisDot
        // axisDot: {
        //   ...state.axisDot,
        //   cx: xAxisScale(newXIncrement),
        // },
        dot: {
          cx: dx,
          cy: dy,
          r: MarkerWidth,
        },
        joiningLine: {
          ...state.joiningLine,
          from: { x: firstX, y: state.joiningLine.from.y },
        },
        hypotenuse: {
          ...state.hypotenuse,
          to: { x: dx, y: dy },
        },
        opposite: {
          ...state.opposite,
          from: { x: dx, y: dy },
          to: { x: dx, y: 0 },
        },
        adjacent: {
          ...state.adjacent,
          from: { x: dx, y: 0 },
        },
        verticalDot: {
          ...state.verticalDot,
          cy: dy,
        },
        time: newTime,
        xIncrement: newXIncrement,
        sine,
        rays,
      };
    default:
      return state;
  }
};
