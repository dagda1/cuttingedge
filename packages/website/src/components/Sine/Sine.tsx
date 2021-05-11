import { FC, Reducer, useCallback, useEffect, useMemo, useReducer } from 'react';
import { useRef } from 'react';
import { ApplicationLayout } from 'src/layouts/ApplicationLayout';
import { ResponsiveSVG, Group, Line } from '@cutting/svg';
import { useParentSize } from '@cutting/hooks';
import type { ScaleLinear } from 'd3-scale';
import { scaleLinear } from '@visx/scale';
import { identity } from '@cutting/util';
import { AxisBottom, AxisLeft } from '@visx/axis';
import { LinePath } from '@visx/shape';
import { curveMonotoneX } from '@visx/curve';

import styles from './Sine.module.scss';
import { range } from 'd3-array';

export type Dimensions = { width: number; height: number };

type SineLinear = ScaleLinear<number, number, never>;

export const increase = (Math.PI * 2) / 360;

const xTickValues = [0, 1.57, 3.14, 4.71, 6.28];
const PiMap = { '0': '0', '1.57': '\\pi\\over 2', '3.14': '\\pi', '4.71': '3\\pi\\over 2', '6.28': '2\\pi' } as const;

type PiMapKeys = keyof typeof PiMap;

const radians = [
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

type SineActions = { type: 'TICK'; payload: { radius: number; firstX: number; time: number } };

const MarkerWidth = 5;

const initialState = {
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
  verticalGuide: { cx: 0, cy: 0, r: MarkerWidth },
  joiningLine: { from: { x: 0, y: 0 }, to: { x: 0, y: 0 } },
  axisDot: { cx: 0, cy: 0, r: MarkerWidth },
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
      label: '',
    },
  ],
};

const reducer: Reducer<typeof initialState, SineActions> = (state, action) => {
  switch (action.type) {
    case 'TICK':
      const { radius, firstX } = action.payload;

      const sine = range(0, 54)
        .map((x) => (x * 10) / 85)
        .map((x) => {
          return { x: x, y: -Math.sin(x - state.time) };
        });

      const rays = radians.map(({ value, label }) => ({
        cosX: radius * Math.cos(value),
        sinY: radius * -Math.sin(value),
        label,
      }));

      return {
        ...state,
        unitCircle: {
          ...state.unitCircle,
          r: radius,
        },
        axisDot: {
          ...state.axisDot,
          cx: radius,
        },
        dot: {
          ...state.dot,
          r: radius,
        },
        joiningLine: {
          ...state.joiningLine,
          from: { x: firstX, y: state.joiningLine.from.y },
        },
        time: (state.time += increase),
        sine,
        rays,
      };
    default:
      return state;
  }
};

const Sine: FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { width, height } = useParentSize(containerRef);
  const tickFrame = useRef<number>();
  const { initialX, initialY, firstX, radius, xAxisScale, yAxisScale } = useMemo(() => getScales({ width, height }), [
    width,
    height,
  ]);

  const [state, dispatch] = useReducer(reducer, initialState);

  const animate = useCallback((time: number) => dispatch({ type: 'TICK', payload: { radius, firstX, time } }), [
    firstX,
    radius,
  ]);

  useEffect(() => {
    if (state.time > 100) {
      return;
    }
    tickFrame.current = requestAnimationFrame(animate.bind(state.time));

    return () => {
      if (!tickFrame.current) {
        return;
      }

      cancelAnimationFrame(tickFrame.current);
    };
  }, [animate, firstX, radius, state.time]);

  const expanded = width > 1 && height > 1;

  return (
    <ApplicationLayout heading="Sine Wave">
      <section className={styles.main} ref={containerRef}>
        <ResponsiveSVG width={width} height={height}>
          <Group x={initialX} y={initialY}>
            {state.rays.map(({ cosX, sinY, label }) => (
              <Group key={label}>
                <Line className={styles.ray} from={{ x: 0, y: 0 }} to={{ x: cosX, y: sinY }} />
              </Group>
            ))}
            <circle className={styles['unit-cirle']} {...state.unitCircle} />

            <Line className={styles.hypotenuse} {...state.hypotenuse} />
            <Line className={styles.opposite} {...state.opposite} />
            <Line className={styles.adjacent} {...state.adjacent} />
            <circle className={styles.dot} {...state.dot} />
            <circle className={styles['vertical-guide']} {...state.verticalGuide} />
            <Line className={styles['joining-line']} {...state.joiningLine} />
            <circle className={styles['axis-dot']} {...state.axisDot} />
            {expanded && (
              <>
                <Group transform={`translate(${firstX}, 0)`}>
                  <AxisLeft
                    scale={yAxisScale}
                    tickValues={[-1, 0, 1]}
                    axisClassName={styles.axis}
                    axisLineClassName={styles['axis-line']}
                    tickStroke="#fff"
                  />
                </Group>
                <Group>
                  <AxisBottom
                    scale={xAxisScale}
                    tickValues={xTickValues}
                    tickFormat={(x) => `$${PiMap[(x as unknown) as PiMapKeys]}$`}
                    axisClassName={styles.axis}
                    axisLineClassName={styles['axis-line']}
                    tickStroke="#fff"
                  />
                </Group>
                <LinePath<{ x: number; y: number }>
                  className={styles.sine}
                  x={(d) => xAxisScale(d.x) ?? 0}
                  y={(d) => yAxisScale(d.y) ?? 0}
                  strokeWidth={1}
                  curve={curveMonotoneX}
                  data={state.sine}
                />
              </>
            )}
          </Group>
        </ResponsiveSVG>
      </section>
    </ApplicationLayout>
  );
};

export default Sine;
