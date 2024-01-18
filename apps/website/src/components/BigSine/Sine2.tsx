import { ApplicationLayout } from '~/layouts/ApplicationLayout';
import { useParentSize } from '@cutting/use-get-parent-size';
import * as styles from './Sine2.css';
import { useLayoutEffect, useMemo, useReducer, useRef } from 'react';
import { ResponsiveSVG, Group, Line } from '@cutting/svg';
import type { TickRendererProps } from '@visx/axis';
import { AxisBottom, AxisLeft } from '@visx/axis';
import { scaleLinear } from 'd3-scale';
import { SVGMathJax } from '@cutting/use-mathjax';
import { initialState, reducer, TWO_PI } from './reducer';
import { line } from 'd3-shape';
import { curveMonotoneX } from '@visx/curve';
import { Arc, Circle } from '@visx/shape';
import cs from 'classnames';
import { assert } from '@cutting/assert';

const xTickValues = [0, 1.57, 3.14, 4.71, 6.28];
const piMap = {
  [xTickValues[0]]: '',
  [xTickValues[1]]: '$\\frac{\\pi}2$',
  [xTickValues[2]]: '$\\pi$',
  [xTickValues[3]]: '$\\frac{3\\pi}2$',
  [xTickValues[4]]: '$2\\pi$',
};

function TickComponent({ formattedValue, x, y }: TickRendererProps) {
  return (
    <Group x={x - 9} y={y - 5}>
      <SVGMathJax>{formattedValue}</SVGMathJax>
    </Group>
  );
}

export function Sine2(): JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null);
  const { width, height } = useParentSize(containerRef, {
    debounceDelay: 500,
    initialValues: { width: 0, height: 0 },
  });

  assert(typeof width === 'number');
  assert(typeof height === 'number');

  const tickFrame = useRef<number>();
  const [state, dispatch] = useReducer(reducer, initialState);

  const { xScale, yScale, yAxisPosition, sineCurve } = useMemo(() => {
    const xScale = scaleLinear().domain([0, TWO_PI]).range([0, width]);

    const yScale = scaleLinear()
      .domain([-1.0, 1.0])
      .range([height - 100, 0]);

    const yAxisPosition = yScale(0);

    const sineCurve = line<number>()
      .curve(curveMonotoneX)
      .x((d) => xScale(d))
      .y((d) => yScale(Math.sin(d) + 1));

    return { xScale, yScale, yAxisPosition, sineCurve };
  }, [height, width]);

  useLayoutEffect(() => {
    tickFrame.current = requestAnimationFrame(() => dispatch({ type: 'TICK', payload: { xScale, yScale } }));

    return () => {
      if (!tickFrame.current) {
        return;
      }
      cancelAnimationFrame(tickFrame.current);
    };
  }, [state.time, xScale, yScale]);

  return (
    <ApplicationLayout heading="SINETASTIC" justifyContent="center">
      <section className={styles.container} ref={containerRef}>
        <ResponsiveSVG width={width} height={height} className="graph">
          <Group transform={`translate(0, ${yAxisPosition})`}>
            <AxisBottom
              scale={xScale}
              tickValues={xTickValues}
              axisClassName={styles.axisLine}
              tickFormat={(t) => piMap[t as number]}
              tickStroke="#fff"
              tickComponent={TickComponent}
            />
          </Group>
          <Group>
            <AxisLeft scale={yScale} axisLineClassName={styles.axisLine} tickStroke="#fff" />
          </Group>
          <Group>
            <Circle cx={state.xCircle.cx} cy={state.xCircle.cy} radius={10} className={styles.xCircle} />
            <Group transform={`translate(0, ${yScale(0)})`}>
              <Line
                x1={state.hypotenuse.x1}
                y1={state.hypotenuse.y1}
                x2={state.hypotenuse.x2}
                y2={state.hypotenuse.y2}
                className={cs('hypotenuse', styles.hypotenuse)}
              />
              <Arc
                transform={`translate(${state.hypotenuse.x1}, 0)`}
                innerRadius={8}
                outerRadius={12}
                startAngle={Math.PI / 2}
                endAngle={state.angle}
                className={styles.innerArc}
              />
              <Arc
                transform={`translate(${state.hypotenuse.x1}, 0)`}
                innerRadius={state.unitCircle.r - 1}
                outerRadius={state.unitCircle.r + 3}
                startAngle={Math.PI / 2}
                endAngle={state.angle}
                className={styles.outerArc}
              />
              <path className={styles.sineCurve} d={sineCurve(state.sineData) as string} />
              <Line
                x1={state.opposite.x1}
                y1={state.opposite.y1}
                x2={state.opposite.x2}
                y2={state.opposite.y2}
                className={styles.opposite}
              />
            </Group>
            <Line
              x1={state.adjacent.x1}
              y1={state.adjacent.y1}
              x2={state.adjacent.x2}
              y2={state.adjacent.y2}
              className={styles.adjacent}
            />
          </Group>
        </ResponsiveSVG>
      </section>
    </ApplicationLayout>
  );
}

export default Sine2;
