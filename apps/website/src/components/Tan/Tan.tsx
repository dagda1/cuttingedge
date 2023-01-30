import { Group, Line, ResponsiveSVG } from '@cutting/svg';
import { useParentSize } from '@cutting/use-get-parent-size';
import { scalePoint, scaleLinear } from '@visx/scale';
import { useLayoutEffect, useReducer, useRef } from 'react';
import { initialState, maxTan, reducer } from './reducer';
import { AxisBottom, AxisLeft } from '@visx/axis';
import { range } from '@cutting/util';
import { Arc } from '@visx/shape';
import { Text } from '@visx/text';
import * as styles from './Tan.css';
import cs from 'classnames';
import { ApplicationLayout } from '../../layouts/ApplicationLayout';
import { SVGMathJax } from '@cutting/use-mathjax';

const Ticks = [...range(-1, 1, 0.5)];

const MainTicks = [
  '$-4\\pi$',
  '$-3\\pi\\over 2$',
  '$-3\\pi$',
  '$-2\\pi\\over 2$',
  '$-2\\pi$',
  '$-1\\pi\\over 2$',
  '$-\\pi$',
  '$-\\pi\\over 2$',
  '$0$',
  '$\\pi\\over 2$',
  '$\\pi$',
  '$1\\pi\\over 2$',
  '$2\\pi$',
  '$2\\pi\\over 2$',
  '$3\\pi$',
  '$3\\pi\\over 2$',
  '$4\\pi$',
];

const circles = 1;

export function Tan(): JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null);
  const { width, height } = useParentSize(containerRef, { debounceDelay: 1000 });
  const [state, dispatch] = useReducer(reducer, initialState);

  const left = height / 1.25;

  const tickFrame = useRef<number>();

  const xScale = scalePoint({
    domain: Ticks,
    range: [0, left],
  });

  const yScale = scalePoint({
    domain: Ticks,
    range: [left, 0],
  });

  const mainXscale = scalePoint({
    domain: MainTicks,
    range: [0, width - left],
  });

  const tanXScale = scaleLinear({
    domain: [-circles * Math.PI * 2, circles * Math.PI * 2],
    range: [0, width - left],
  });

  const tanYScale = scaleLinear({
    domain: [-maxTan, maxTan],
    range: [left, 0],
  });
  ``;
  useLayoutEffect(() => {
    if (state.mode === 'PAUSED') {
      if (typeof tickFrame.current === 'number') {
        cancelAnimationFrame(tickFrame.current);
      }
      return;
    }

    tickFrame.current = requestAnimationFrame(() =>
      dispatch({
        type: 'TICK',
        payload: {
          xScale,
          yScale,
          tanXScale,
          tanYScale,
          height,
          width,
        },
      }),
    );

    return () => {
      if (!tickFrame.current) {
        return;
      }
      cancelAnimationFrame(tickFrame.current);
    };
  }, [height, state.mode, state.time, tanXScale, tanYScale, width, xScale, yScale]);

  return (
    <>
      <ApplicationLayout layout="FULL" heading="TANTASTIC" className={styles.container}>
        <section ref={containerRef}>
          <ResponsiveSVG width={width} height={height}>
            <circle className={styles.unitCircle} {...state.unitCircle} />
            <Group transform={`translate(${state.unitCircle.cx}, ${state.unitCircle.cy})`}>
              <Arc
                innerRadius={0}
                outerRadius={30}
                startAngle={Math.PI / 2}
                endAngle={state.angle}
                fill="#E6F0E6"
                stroke="#8FBB8F"
                strokeWidth={2}
              />
              <Text dx={40} dy={-20}>
                {state.angleText}
              </Text>
            </Group>
            <Group transform={`translate(0, ${state.unitCircle.cy})`}>
              <AxisBottom scale={xScale} tickValues={[-1, -0.5, 0, 0.5, 1]} stroke="#ffffff" tickStroke="#ffffff" />
            </Group>
            <Group transform={`translate(${state.unitCircle.cx}, 0)`}>
              <AxisLeft scale={yScale} stroke="#ffffff" />
            </Group>
            <Group transform={`translate(${state.unitCircle.cx}, ${state.unitCircle.cy})`}>
              <Line className={cs(styles.line, styles.hypotenuse)} {...state.hypotenuse} />
              <Line className={cs(styles.line, styles.opposite)} {...state.opposite} />
              <Line className={cs(styles.line, styles.tan2)} {...state.tan2} />
              <circle className={styles.dot} {...state.circleDot} fill="#000000" />
              <circle className={styles.dot} {...state.tanDot} fill="#000000" />
              <Group transform={`translate(${state.hypotenuse.to.x}, ${state.hypotenuse.to.y - 10})`}>
                <Text>P</Text>
              </Group>
            </Group>
            <Group transform={`translate(${left}, 0)`}>
              <path className={styles.tanCurve} d={state.tanCurve(state.tanData) as string} />
            </Group>
            <Group transform={`translate(${xScale(1)}, ${state.unitCircle.cy})`}>
              <AxisBottom
                scale={mainXscale}
                stroke="#ffffff"
                tickStroke="#ffffff"
                tickComponent={(props) => (
                  <Group transform={`translate(${props.x - 5}, ${props.y - 5})`}>
                    <SVGMathJax>{props.formattedValue}</SVGMathJax>
                  </Group>
                )}
              />
            </Group>
          </ResponsiveSVG>
        </section>
      </ApplicationLayout>
    </>
  );
}

export default Tan;
