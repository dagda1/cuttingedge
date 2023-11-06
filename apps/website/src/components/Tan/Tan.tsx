import { Group, Line, ResponsiveSVG } from '@cutting/svg';
import { useParentSize } from '@cutting/use-get-parent-size';
import { scalePoint, scaleLinear } from '@visx/scale';
import { Fragment, useLayoutEffect, useMemo, useReducer, useRef } from 'react';
import { initialState, maxTan, reducer } from './reducer';
import { AxisBottom, AxisLeft } from '@visx/axis';
import { range } from '@cutting/util';
import { Arc, LinePath } from '@visx/shape';
import { Text } from '@visx/text';
import * as styles from './Tan.css';
import cs from 'classnames';
``;
import { ApplicationLayout } from '~/layouts/ApplicationLayout';
import { SVGMathJax } from '@cutting/use-mathjax';
import { curveMonotoneX } from 'd3-shape';
import assert from 'assert-ts';

const Ticks = [...range(-1, 1)];

const MainTicks = ['$0$', '$\\pi$', '$2\\pi$', '$3\\pi$', '$4\\pi$'];

const circles = 1;

export function Tan(): JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null);
  const { width, height } = useParentSize(containerRef, {
    debounceDelay: 1000,
    initialValues: { width: 0, height: 0 },
  });

  assert(typeof width === 'number');
  assert(typeof height === 'number');

  const [state, dispatch] = useReducer(reducer, initialState);

  const tickFrame = useRef<number>();

  const { xScale, yScale, mainXscale, tanXScale, tanYScale, unitCircleWidth, initialY } = useMemo(() => {
    const wholeXScale = scaleLinear({
      domain: [0, 10],
      range: [0, width],
    });

    const unitCircleWidth = wholeXScale(3);

    const wholeYScale = scaleLinear({
      domain: [0, 10],
      range: [height, 0],
    });

    const initialY = wholeYScale(9);

    const xScale = scalePoint({
      domain: Ticks,
      range: [0, unitCircleWidth],
    });

    const yScale = scalePoint({
      domain: Ticks,
      range: [unitCircleWidth, 0],
    });

    const mainXscale = scalePoint({
      domain: MainTicks,
      range: [0, width - unitCircleWidth],
    });

    const tanXScale = scaleLinear({
      domain: [-circles * Math.PI * 2, circles * Math.PI * 2],
      range: [0, width - unitCircleWidth],
    });

    const tanYScale = scaleLinear({
      domain: [-maxTan, maxTan],
      range: [unitCircleWidth, 0],
    });

    return { xScale, yScale, mainXscale, tanXScale, tanYScale, unitCircleWidth, initialY };
  }, [height, width]);

  useLayoutEffect(() => {
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
          unitCircleWidth,
        },
      }),
    );

    return () => {
      if (!tickFrame.current) {
        return;
      }
      cancelAnimationFrame(tickFrame.current);
    };
  }, [height, state.time, tanXScale, tanYScale, unitCircleWidth, width, xScale, yScale]);

  const yAxisPosition = mainXscale(MainTicks.slice(-1)[0]);

  assert(typeof yAxisPosition !== 'undefined', 'no yAxisPositionX');

  return (
    <>
      <ApplicationLayout heading="TAN ASYMPTOTES" centerHeading>
        <section className={styles.container} ref={containerRef}>
          <ResponsiveSVG width={width} height={height}>
            <Group transform={`translate(0, ${initialY})`}>
              <Group transform={`translate(${unitCircleWidth * 1}, 0)`}>
                <LinePath<number>
                  defined={(d) => Math.tan(d) < maxTan && Math.tan(d) > -maxTan}
                  className={styles.tanCurve}
                  x={(d) => tanXScale(d)}
                  y={(d) => tanYScale(Math.tan(d))}
                  curve={curveMonotoneX}
                  data={state.tanData}
                />
              </Group>
              <Group transform={`translate(${unitCircleWidth}, ${yScale(0)})`}>
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
              <Group transform={`translate(0, 0)`}>
                <circle className={styles.unitCircle} {...state.unitCircle} />
                <Group transform={`translate(${state.unitCircle.cx}, ${state.unitCircle.cy})`}>
                  <Group className={styles.rays}>
                    {state.rays.map(({ cosX, sinY, label, offsetX, offsetY }) => (
                      <Fragment key={label}>
                        <Group transform={`translate(${offsetX}, ${offsetY})`}>
                          <SVGMathJax>{label}</SVGMathJax>
                        </Group>
                        <Line className={styles.ray} from={{ x: 0, y: 0 }} to={{ x: cosX, y: sinY }} />
                      </Fragment>
                    ))}
                  </Group>
                  <Arc
                    innerRadius={0}
                    outerRadius={30}
                    startAngle={state.angle}
                    endAngle={Math.PI / 2}
                    fill="#E6F0E6"
                    stroke="#8FBB8F"
                    strokeWidth={2}
                  />
                  <Text dx={40} dy={-20}>
                    {state.angleText}
                  </Text>
                </Group>
                <Group transform={`translate(0, ${yScale(0)})`}>
                  <AxisBottom scale={xScale} tickValues={[]} stroke="#ffffff" tickStroke="#ffffff" />
                </Group>
                <Group transform={`translate(${unitCircleWidth}, 0)`}>
                  <AxisLeft scale={yScale} stroke="#ffffff" tickValues={[]} />
                </Group>
                <Group transform={`translate(${state.unitCircle.cx}, ${state.unitCircle.cy})`}>
                  <Line className={cs(styles.line, styles.hypotenuse)} {...state.hypotenuse} />
                  <Line className={cs(styles.line, styles.opposite)} {...state.opposite} />
                  <Line className={cs(styles.line, styles.rearHypotenuse)} {...state.rearHypotenuse} />
                  <Line className={cs(styles.line, styles.tan3)} {...state.tan3} />
                  <circle className={styles.dot} {...state.circleDot} fill="#000000" />
                  <circle className={styles.dot} {...state.tanDot} fill="#000000" />
                  <Group transform={`translate(${state.rearHypotenuse.to.x}, ${state.rearHypotenuse.to.y - 10})`}>
                    <Text>P</Text>
                  </Group>
                </Group>
              </Group>
            </Group>
          </ResponsiveSVG>
          <SVGMathJax>{`$f(x) = tan(x) $`}</SVGMathJax>
        </section>
      </ApplicationLayout>
    </>
  );
}

export default Tan;
