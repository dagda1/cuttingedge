import { assert } from '@cutting/assert';
import { Box } from '@cutting/component-library';
import type { Point } from '@cutting/svg';
import { Group, ResponsiveSVG } from '@cutting/svg';
import { useParentSize } from '@cutting/use-get-parent-size';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { SVGMathJax } from '@cutting/use-mathjax';
import { AxisBottom, AxisLeft } from '@visx/axis';
import { curveBasisOpen } from '@visx/curve';
import { scaleLinear } from '@visx/scale';
import { Circle, Line, LinePath } from '@visx/shape';
import { Text } from '@visx/text';
import { extent, max, min, range } from 'd3-array';
import { derivative, parse, round } from 'mathjs';
import { useCallback, useEffect, useMemo, useReducer, useRef } from 'react';
import type { SubmitHandler } from 'react-hook-form';

import { ApplicationLayout } from '~/layouts/ApplicationLayout';
import { getYIntercept } from '~/viz/getYIntercept';

import { ExpressionForm, type FormValues } from './ExpressionForm';
import * as styles from './FunctionPlot.css';
import { initialState, reducer } from './reducer';

interface FunctionPlotProps {
  minX?: number;
  maxX?: number;
}

export function FunctionPlot({ minX = -10, maxX = 11 }: FunctionPlotProps): JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null);
  const tangentRef = useRef<SVGCircleElement>(null);
  const { width, height } = useParentSize(containerRef, {
    debounceDelay: 500,
    initialValues: { width: 0, height: 0 },
  });

  assert(typeof width === 'number');
  assert(typeof height === 'number');

  const [state, dispatch] = useReducer(reducer, initialState);

  const tickFrame = useRef<number>();

  const onSubmit: SubmitHandler<FormValues> = useCallback(({ expression }) => {
    dispatch({
      type: 'SET_EXPRESSION',
      payload: {
        expression,
      },
    });
  }, []);

  const data: Point[] = useMemo(() => {
    const expression = parse(state.expression);

    const fn = (x: number) => {
      return expression.evaluate({ x: x });
    };

    return range(minX, maxX).map((d) => {
      return { x: d, y: fn(d) };
    });
  }, [maxX, minX, state.expression]);

  const { xAxisPosition, yAxisPosition, xScale, yScale } = useMemo(() => {
    const xScale = scaleLinear({ range: [0, width] });
    const yScale = scaleLinear({ range: [height, 0] });

    const minY = min(data, (d) => d.y);

    assert(typeof minY !== 'undefined', `no minY ${minY}`);

    const maxY = max(data, (d) => d.y);

    assert(typeof maxY !== 'undefined', `no maxY ${maxY}`);

    const nonNegativeXAxis = minY >= 0 && maxY >= 0;
    const positiveAndNegative = minY < 0 && maxY > 0;

    const xExtent = extent(data, (d) => d.x) as [number, number];
    xScale.domain(xExtent);

    const firstX = xExtent[0];

    const yScaleDomain = nonNegativeXAxis ? [0, max(data, (d) => d.y)] : extent(data, (d) => d.y);
    yScale.domain(yScaleDomain as number[]);

    const xAxisPosition = nonNegativeXAxis ? height : positiveAndNegative ? yScale(0) : 0;

    const minX = min(data, (d) => d.x) as number;
    const maxX = max(data, (d) => d.y) as number;

    const positiveXOnly = minX > 0 && maxX > 0;
    const negativeXOnly = minX < 0 && maxX < 0;

    const yAxisPosition = positiveXOnly ? 0 : negativeXOnly ? width : xScale(0);

    return { xScale, yScale, xAxisPosition, yAxisPosition, firstX };
  }, [width, height, data]);

  const animate = useCallback(
    (x: number) => {
      if (!tangentRef.current) {
        return;
      }

      let y = yScale(
        parse(state.expression).evaluate({
          x: xScale.invert(x),
        }),
      );

      const point: Point = {
        x: xScale.invert(x),
        y: yScale.invert(y),
      };

      if (point.x > maxX) {
        const maxY = data.find((d) => d.x === maxX)?.y;

        if (!maxY) {
          return;
        }

        point.x = maxX;
        point.y = maxY;

        x = xScale(maxX);
        y = yScale(maxY);
      }

      const der = derivative(state.expression, 'x');

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

      const length = xScale(20);

      const tangentPoint1 = getTangentPoint(+length);
      const tangentPoint2 = getTangentPoint(-length);

      dispatch({
        type: 'DRAW_TANGENT',
        payload: {
          x,
          direction: state.tangent.direction,
          label: {
            text: `(${round(point.x)}, ${round(point.y)})`,
            dx: x + 10,
            dy: y + 8,
          },
          diff: {
            x,
            y,
          },
          line: {
            x1: xScale(tangentPoint1.x),
            y1: yScale(tangentPoint1.y),
            x2: xScale(tangentPoint2.x),
            y2: yScale(tangentPoint2.y),
          },
          xScale,
        },
      });
    },
    [data, maxX, state.expression, state.tangent.direction, xScale, yScale],
  );

  useEffect(() => {
    const x = state.tangent.x ?? xScale(minX);
    if (typeof x === 'undefined') {
      return;
    }

    tickFrame.current = requestAnimationFrame(() => animate(x));
    return () => {
      if (!tickFrame.current) {
        return;
      }
      cancelAnimationFrame(tickFrame.current);
    };
  }, [state.tangent.x, minX, xScale, animate]);

  return (
    <ApplicationLayout centerHeading heading="The (function) plot thickens...." showFooter={false}>
      <section ref={containerRef} className={styles.container}>
        <ResponsiveSVG width={width} height={height} overflow="hidden" className="function-svg">
          <Group transform={`translate(0, ${xAxisPosition})`}>
            <AxisBottom scale={xScale} axisLineClassName={styles.axisLine} />
          </Group>
          <Group transform={`translate(${yAxisPosition}, 0)`}>
            <AxisLeft scale={yScale} axisLineClassName={styles.axisLine} tickStroke="#fff" />
          </Group>
          <LinePath<Point>
            curve={curveBasisOpen}
            x={(d) => xScale(d.x)}
            y={(d) => yScale(d.y)}
            data={data}
            strokeWidth={2}
            stroke="#fff"
            className="curve"
          />
          <Group innerRef={tangentRef} className={styles.tangentGroup}>
            <Circle className={styles.diff} r={7} cx={state.tangent.diff.x} cy={state.tangent.diff.y} />
            <Line className={styles.tangent} {...state.tangent.line} />
            <Text className={styles.diffLabel} dx={state.tangent.label.dx} dy={state.tangent.label.dy}>
              {state.tangent.label.text}
            </Text>
          </Group>
        </ResponsiveSVG>
      </section>
      <ExpressionForm onSubmit={onSubmit} expression={state.expression} />
      <Box display="none">
        <SVGMathJax>1</SVGMathJax>
      </Box>
    </ApplicationLayout>
  );
}

export default FunctionPlot;
