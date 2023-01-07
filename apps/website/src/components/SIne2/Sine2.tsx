import { ApplicationLayout } from '../../layouts/ApplicationLayout';
import { useParentSize } from '@cutting/use-get-parent-size';
import * as styles from './Sine2.css';
import { useMemo, useRef } from 'react';
import { ResponsiveSVG, Group } from '@cutting/svg';
import type { TickRendererProps } from '@visx/axis';
import { AxisBottom, AxisLeft } from '@visx/axis';
import { scaleLinear } from 'd3-scale';
import { SVGMathJax } from '@cutting/use-mathjax';

const TWO_PI = Math.PI * 2;

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

  const { xScale, yScale, xAxisPosition } = useMemo(() => {
    const xScale = scaleLinear().domain([0, TWO_PI]).range([0, width]);

    const yScale = scaleLinear()
      .domain([-1.0, 1.0])
      .range([height - 100, 0]);

    const xAxisPosition = yScale(0);

    return { xScale, yScale, xAxisPosition };
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
        </ResponsiveSVG>
      </section>
    </ApplicationLayout>
  );
}

export default Sine2;
