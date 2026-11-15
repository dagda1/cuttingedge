import { Group, Line, ResponsiveSVG } from '@cutting/svg';
import { AxisBottom, AxisLeft } from '@visx/axis';
import { curveMonotoneX } from '@visx/curve';
import { LinePath } from '@visx/shape';
import { useCallback, useEffect, useMemo, useReducer, useRef } from 'react';

import { UnitCircleRays } from '~/components/UnitCircleRays/UnitCircleRays';
import { useContainerSize } from '~/hooks/useContainerSize';
import { ApplicationLayout } from '~/layouts/ApplicationLayout';

import { BottomAxis } from './BottomAxis';
import type { PiMapKeys } from './reducer';
import { getScales, initialState, PiMap, reducer, xTickValues } from './reducer';
import * as styles from './Sine.css';

function Sine(): JSX.Element {
  const { containerRef, width, height } = useContainerSize();

  const tickFrame = useRef<number>(undefined);
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

  return (
    <ApplicationLayout heading="SINE OF THE TIMES" justifyContent="center">
      <section className={styles.main} ref={containerRef}>
        <ResponsiveSVG width={width} height={height}>
          <Group x={initialX} y={initialY}>
            <UnitCircleRays rays={state.rays} rayClassName={styles.ray} />
            <circle className={styles.unitCircle} {...state.unitCircle} />

            <Line className={styles.hypotenuse} {...state.hypotenuse} />
            <Line className={styles.opposite} {...state.opposite} />
            <Line className={styles.adjacent} {...state.adjacent} />
            <circle className={styles.dot} {...state.dot} />
            <circle className={styles.verticalGuide} {...state.verticalDot} />
            <Line className={styles.joiningLine} {...state.joiningLine} />
            <circle className={styles.axisDot} {...state.axisDot} />
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
          </Group>
        </ResponsiveSVG>
      </section>
    </ApplicationLayout>
  );
}

export default Sine;
