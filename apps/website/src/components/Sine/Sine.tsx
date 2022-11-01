import React, { useCallback, useEffect, useMemo, useReducer } from 'react';
import { useRef } from 'react';
import { ApplicationLayout } from '../../layouts/ApplicationLayout';
import { ResponsiveSVG, Group, Line } from '@cutting/svg';
import { useParentSize } from '@cutting/use-get-parent-size';
import { AxisBottom, AxisLeft } from '@visx/axis';
import { LinePath } from '@visx/shape';
import { curveMonotoneX } from '@visx/curve';
import { SVGMathJax } from '@cutting/use-mathjax';
import * as styles from './Sine.css';
import type { PiMapKeys } from './utils';
import { getScales, reducer, initialState, xTickValues, PiMap } from './utils';
import { BottomAxis } from './BottomAxis';

function Sine(): JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null);
  const { width, height } = useParentSize(containerRef);
  const tickFrame = useRef<number>();
  const { initialX, initialY, firstX, radius, xAxisScale, yAxisScale } = useMemo(
    () => getScales({ width, height }),
    [width, height],
  );

  const [state, dispatch] = useReducer(reducer, initialState);

  const animate = useCallback(
    (time: number) => dispatch({ type: 'TICK', payload: { radius, firstX, time, xAxisScale } }),
    [firstX, radius, xAxisScale],
  );

  useEffect(() => {
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
    <ApplicationLayout heading="Sine of the times">
      <section className={styles.main} ref={containerRef}>
        <ResponsiveSVG width={width} height={height}>
          <Group x={initialX} y={initialY}>
            {state.rays.map(({ cosX, sinY, label, offsetX, offsetY }) => (
              <React.Fragment key={label}>
                <Group transform={`translate(${offsetX}, ${offsetY})`}>
                  <SVGMathJax>{label}</SVGMathJax>
                </Group>
                <Line className={styles.ray} from={{ x: 0, y: 0 }} to={{ x: cosX, y: sinY }} />
              </React.Fragment>
            ))}
            <circle className={styles.unitCircle} {...state.unitCircle} />

            <Line className={styles.hypotenuse} {...state.hypotenuse} />
            <Line className={styles.opposite} {...state.opposite} />
            <Line className={styles.adjacent} {...state.adjacent} />
            <circle className={styles.dot} {...state.dot} />
            <circle className={styles.verticalGuide} {...state.verticalDot} />
            <Line className={styles.joiningLine} {...state.joiningLine} />
            <circle className={styles.axisDot} {...state.axisDot} />
            {expanded && (
              <>
                <Group transform={`translate(${firstX}, 0)`}>
                  <AxisLeft
                    scale={yAxisScale}
                    tickValues={[-1, 0, 1]}
                    axisClassName={styles.axis}
                    axisLineClassName={styles.axisLine}
                    tickStroke="#fff"
                  />
                </Group>
                <Group>
                  <AxisBottom
                    scale={xAxisScale}
                    tickValues={xTickValues}
                    tickFormat={(x) => `$${PiMap[x as unknown as PiMapKeys]}$`}
                    axisClassName={styles.axis}
                    axisLineClassName={styles.axisLine}
                    tickStroke="#fff"
                    tickComponent={BottomAxis}
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
}

export default Sine;
