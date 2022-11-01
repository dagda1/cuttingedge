import { useCallback, useMemo } from 'react';
import { useRef } from 'react';
import { ApplicationLayout } from '../../layouts/ApplicationLayout';
import type { Point } from '@cutting/svg';
import { useParentSize } from '@cutting/use-get-parent-size';
import { AxisBottom, AxisLeft } from '@visx/axis';
import { max, min, extent, range } from 'd3-array';
import { derivative, parse, round } from 'mathjs';
import { scaleLinear } from 'd3-scale';
import { assert } from 'assert-ts';
import { ResponsiveSVG, Group } from '@cutting/svg';
import { Circle, Line, LinePath } from '@visx/shape';
import { curveMonotoneX } from '@visx/curve';
import * as styles from './FunctionPlot.css';
import { MathJax } from '@cutting/use-mathjax';
import { select, pointer } from 'd3-selection';
import { getYIntercept } from '../../viz/getYIntercept';
import { Text } from '@visx/text';

interface FunctionPlotProps {
  rawExpression?: string;
  minX?: number;
  maxX?: number;
}

export function FunctionPlot({ rawExpression = 'x^2 + 1', minX = -10, maxX = 11 }: FunctionPlotProps): JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null);
  const tangentRef = useRef<SVGCircleElement>(null);

  const { width, height } = useParentSize(containerRef, {
    debounceDelay: 500,
  });

  const data: Point[] = useMemo(() => {
    const expression = parse(rawExpression);

    const fn = (x: number) => {
      return expression.evaluate({ x: x });
    };

    return range(minX, maxX).map((d) => {
      return { x: d, y: fn(d) };
    });
  }, [maxX, minX, rawExpression]);

  const { xAxisPosition, yAxisPosition, xScale, yScale } = useMemo(() => {
    const xScale = scaleLinear().range([0, width]);
    const yScale = scaleLinear().range([height, 0]);

    const minY = min(data, (d) => d.y);

    assert(typeof minY !== 'undefined', `no minY ${minY}`);

    const maxY = max(data, (d) => d.y);

    assert(typeof maxY !== 'undefined', `no maxY ${maxY}`);

    const nonNegativeXAxis = minY >= 0 && maxY >= 0;
    const positiveAndNegative = minY < 0 && maxY > 0;

    xScale.domain(extent(data, (d) => d.x) as number[]);

    const yScaleDomain = nonNegativeXAxis ? [0, max(data, (d) => d.y)] : extent(data, (d) => d.y);
    yScale.domain(yScaleDomain as number[]);

    const xAxisPosition = nonNegativeXAxis ? height : positiveAndNegative ? yScale(0) : 0;

    const minX = min(data, (d) => d.x) as number;
    const maxX = max(data, (d) => d.y) as number;

    const positiveXOnly = minX > 0 && maxX > 0;
    const negativeXOnly = minX < 0 && maxX < 0;

    const yAxisPosition = positiveXOnly ? 0 : negativeXOnly ? width : xScale(0);

    return { xScale, yScale, xAxisPosition, yAxisPosition };
  }, [width, height, data]);

  const mouseMove = useCallback(() => {
    if (!tangentRef.current) {
      return;
    }

    const g = select('.tangent-group');
    const m = pointer(select('.curve').node());

    let x = m[0];

    console.log(m);
    let y = yScale(
      parse(rawExpression).evaluate({
        x: xScale.invert(x),
      }),
    );

    const point: Point = {
      x: xScale.invert(x),
      y: yScale.invert(y),
    };

    if (point.x > maxX) {
      const maxY = data.find((d) => d.x === maxX)?.y;

      assert(typeof maxY !== 'undefined', `no maxX at ${maxX}`);

      point.x = maxX;
      point.y = maxY;

      x = xScale(maxX);
      y = yScale(maxY);
    }

    g.select('.diff').attr('cx', x).attr('cy', y);

    g.select('.difflabel')
      .text(function () {
        const xLabel = round(point.x);
        const yLabel = round(point.y);

        return `(${xLabel}, ${yLabel})`;
      })
      .attr('dx', x + 10)
      .attr('dy', y + 8);

    const der = derivative(rawExpression, 'x');

    const gradient = der.evaluate({ x: point.x });

    const yIntercept = getYIntercept(point, gradient);

    const lineEquation = parse('m * x + c');

    const getTangentPoint = (delta: number) => {
      const deltaX = xScale.invert(x + delta);

      const tangentPoint = {
        x: deltaX,
        y: lineEquation.evaluate({
          m: gradient,
          x: deltaX,
          c: yIntercept,
        }),
      };

      return tangentPoint;
    };

    const length = xScale(200);

    const tangentPoint1 = getTangentPoint(+length);
    const tangentPoint2 = getTangentPoint(-length);

    g.select('.tangent')
      .attr('x1', xScale(tangentPoint1.x))
      .attr('y1', yScale(tangentPoint1.y))
      .attr('x2', xScale(tangentPoint2.x))
      .attr('y2', yScale(tangentPoint2.y));
  }, [data, maxX, rawExpression, xScale, yScale]);

  return (
    <ApplicationLayout center heading="The (function) plot thickens...." showFooter={false}>
      <section className={styles.container} ref={containerRef}>
        <ResponsiveSVG onMouseMove={mouseMove} width={width} height={height} className={styles.container}>
          <Group transform={`translate(0, ${xAxisPosition})`}>
            <AxisBottom scale={xScale} axisLineClassName={styles.axisLine} />
          </Group>
          <Group transform={`translate(${yAxisPosition}, 0)`}>
            <AxisLeft scale={yScale} axisLineClassName={styles.axisLine} tickStroke="#fff" />
          </Group>
          <LinePath<Point>
            curve={curveMonotoneX}
            x={(d) => xScale(d.x)}
            y={(d) => yScale(d.y)}
            data={data}
            strokeWidth={2}
            stroke="#fff"
            className="curve"
          />
          <Group innerRef={tangentRef} className="tangent-group">
            <Circle className={styles.diff} r={7} />
            <Line className={styles.tangent} />
            <Text className={styles.diffLabel} />
          </Group>
        </ResponsiveSVG>
        <MathJax>{`$$ f(x) = ${parse(rawExpression).toTex()}$$`}</MathJax>
      </section>
    </ApplicationLayout>
  );
}

export default FunctionPlot;
