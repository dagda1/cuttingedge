import { FC, Reducer, useMemo, useReducer } from 'react';
import { useRef } from 'react';
import { ApplicationLayout } from 'src/layouts/ApplicationLayout';
import { ResponsiveSVG, Group, Line } from '@cutting/svg';
import { useParentSize } from '@cutting/hooks';
import { ScaleLinear, scaleLinear } from 'd3-scale';

import styles from './Sine.module.scss';
import { identity } from '@cutting/util';

export type Dimensions = { width: number; height: number };

type SineLinear = ScaleLinear<number, number, never>;

export const increase = (Math.PI * 2) / 360;

const initialState = {
  initialX: 0,
  initialY: 0,
  firstAxisXCoord: 0,
  container: { x: 0, y: 0 },
  unitCircle: { cx: 0, cy: 0, r: 0 },
  hypotenuse: { from: { x: 0, y: 0 } },
  opposite: { from: { x: 0, y: 0 } },
  adjacent: { from: { x: 0, y: 0 } },
  dot: { cx: 0, cy: 0, r: 0 },
  verticalGuide: { cx: 0, cy: 0, r: 0 },
  joiningLine: { from: { x: 0, y: 0 } },
  axisDot: { cx: 0, cy: 0, r: 0 },
  xIncrement: 0,
};

type SineActions = { type: 'INITIALIZE' } | { type: 'TICK' };

export const radians = [
  { value: Math.PI / 4, label: '$\\frac' + '{\\pi}4$' },
  { value: Math.PI / 2, label: '$\\frac' + '{\\pi}2$' },
  { value: (3 * Math.PI) / 4, label: '$\\frac' + '{3\\pi}4$' },
  { value: Math.PI, label: '$\\pi$' },
  { value: (5 * Math.PI) / 4, label: '$\\frac' + '{5\\pi}4$' },
  { value: (3 * Math.PI) / 2, label: '$\\frac' + '{3\\pi}2$' },
  { value: (7 * Math.PI) / 4, label: '$\\frac' + '{7\\pi}4$' },
  { value: 2 * Math.PI, label: '${2\\pi}$' },
];

const getScales = ({
  width,
  height,
}: Dimensions): {
  xScale: SineLinear;
  yScale: SineLinear;
  xScaleAxis: SineLinear;
  yScaleAxis: SineLinear;
  firstAxisXCoord: number;
  initialX: number;
  initialY: number;
  radius: number;
} => {
  if (width === 1 && height === 1) {
    return {
      xScale: identity as SineLinear,
      yScale: identity as SineLinear,
      xScaleAxis: identity as SineLinear,
      yScaleAxis: identity as SineLinear,
      firstAxisXCoord: 0,
      initialX: 0,
      initialY: 0,
      radius: 0,
    };
  }

  const radius = height / 7;

  const xScale = scaleLinear().domain([0, 20]).range([0, width]);
  const yScale = scaleLinear().domain([0, 20]).range([height, 0]);

  const firstAxisXCoord = -radius;

  const initialX = xScale(20) - radius;
  const initialY = yScale(12);

  const xScaleAxis = scaleLinear()
    .domain([0, Math.PI * 2])
    .range([firstAxisXCoord, -initialX]);

  const yScaleAxis = scaleLinear().domain([-1, 1]).range([radius, -radius]);

  return {
    xScale,
    yScale,
    xScaleAxis,
    yScaleAxis,
    firstAxisXCoord,
    initialX,
    initialY,
    radius,
  };
};

const reducer: Reducer<typeof initialState, SineActions> = (state, action) => {
  console.log({ state });
  switch (action.type) {
    default:
      return state;
  }
};

const Sine: FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { width, height } = useParentSize(containerRef);
  const { initialX, initialY, firstAxisXCoord, radius } = useMemo(() => getScales({ width, height }), [width, height]);

  const [] = useReducer(reducer, initialState);

  console.log({ width, height, radius });

  return (
    <ApplicationLayout heading="Sine Wave">
      <section className={styles.main} ref={containerRef}>
        <ResponsiveSVG width={width} height={height}>
          <Group x={initialX} y={initialY}>
            <circle className={styles['unit-cirle']} cx={0} cy={0} r={radius} />
            <Line className={styles.hypotenuse} from={{ x: 0, y: 0 }} to={{ x: 0, y: 0 }} />
            <Line className={styles.opposite} from={{ x: 0, y: 0 }} to={{ x: 0, y: 0 }} />
            <Line className={styles.adjacent} from={{ x: 0, y: 0 }} to={{ x: 0, y: 0 }} />
            <circle className={styles.dot} cx={radius} cy={0} r={5} />
            <circle className={styles['vertical-guide']} cx={0} cy={0} r={5} />
            <Line className={styles['joining-line']} from={{ x: firstAxisXCoord, y: 0 }} to={{ x: 0, y: 0 }} />
            <circle className={styles['axis-dot']} cx={radius} cy={0} r={5} />
          </Group>
        </ResponsiveSVG>
      </section>
    </ApplicationLayout>
  );
};

export default Sine;
