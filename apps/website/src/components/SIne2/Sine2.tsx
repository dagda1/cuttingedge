import { ApplicationLayout } from '../../layouts/ApplicationLayout';
import { useParentSize } from '@cutting/use-get-parent-size';
import * as styles from './Sine2.css';
import { useMemo, useReducer, useRef } from 'react';
import { ResponsiveSVG, Group, Line } from '@cutting/svg';
import type { TickRendererProps } from '@visx/axis';
import { AxisBottom, AxisLeft } from '@visx/axis';
import { scaleLinear } from 'd3-scale';
import { SVGMathJax } from '@cutting/use-mathjax';
import { initialState, reducer, TWO_PI } from './reducer';
import { line } from 'd3-shape';
import { curveMonotoneX } from '@visx/curve';
import { Arc, Circle } from '@visx/shape';

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
  });
  const [state] = useReducer(reducer, initialState);

  const { xScale, yScale, xAxisPosition, sineCurve } = useMemo(() => {
    const xScale = scaleLinear().domain([0, TWO_PI]).range([0, width]);

    const yScale = scaleLinear()
      .domain([-1.0, 1.0])
      .range([height - 100, 0]);

    const xAxisPosition = yScale(0);

    const sineCurve = line<number>()
      .curve(curveMonotoneX)
      .x((d) => {
        return xScale(d);
      })
      .y((d) => {
        console.dir({ d });
        return yScale(Math.sin(d) + 1);
      });

    return { xScale, yScale, xAxisPosition, sineCurve };
  }, [height, width]);

  return (
    <ApplicationLayout heading="SINETASTIC">
      <section ref={containerRef}>
        <ResponsiveSVG width={width} height={height} className="graph">
          <Group transform={`translate(0, ${xAxisPosition})`}>
            <AxisBottom
              scale={xScale}
              tickValues={xTickValues}
              axisClassName={styles.axisLine}
              tickFormat={(t) => piMap[t]}
              tickStroke="#fff"
              tickComponent={TickComponent}
            />
          </Group>
          <Group>
            <AxisLeft scale={yScale} axisLineClassName={styles.axisLine} tickStroke="#fff" />
          </Group>
          <Group>
            <Circle cx={state.unitCircleCx} cy={0} r={state.radius} className="unit-circle" style={{ fill: 'none' }} />
            <Circle cx={state.xTo} cy={0} radius={10} className="x-circle" />
            <Line
              x1={state.hypotenuse.x1}
              y1={state.hypotenuse.y1}
              x2={state.hypotenuse.x2}
              y2={state.hypotenuse.y2}
              className="hypotenuse"
            />
            <Arc
              innerRadius={8}
              outerRadius={12}
              startAngle={Math.PI / 2}
              endAngle={state.angle}
              className="inner-arc"
            />
            <Arc
              innerRadius={state.radius - 1}
              outerRadius={state.radius + 3}
              startAngle={Math.PI / 2}
              endAngle={state.angle}
              className="outer-arc"
            />
            <path className="sine-curve" d={sineCurve(state.sineData) as string} />
          </Group>
        </ResponsiveSVG>
      </section>
    </ApplicationLayout>
  );
}

export default Sine2;
