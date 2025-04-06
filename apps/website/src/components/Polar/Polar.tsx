import { assert } from '@cutting/assert';
import { Box } from '@cutting/component-library';
import { ResponsiveSVG } from '@cutting/svg';
import { useParentSize } from '@cutting/use-get-parent-size';
import { MathJax } from '@cutting/use-mathjax';
import { curveBasisOpen } from '@visx/curve';
import { Group } from '@visx/group';
import { scaleLinear } from '@visx/scale';
import { LinePath } from '@visx/shape';
import { extent } from 'd3-array';
import { parse } from 'mathjs';
import { useLayoutEffect, useMemo, useReducer, useRef } from 'react';

import { ApplicationLayout } from '~/layouts/ApplicationLayout';

import * as styles from './Polar.css';
import { initialState, reducer } from './reducer';

export function Polar(): JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null);
  const { width, height } = useParentSize(containerRef, {
    debounceDelay: 500,
    initialValues: { width: 0, height: 0 },
  });
  const tickFrame = useRef<number>(undefined);

  const [state, dispatch] = useReducer(reducer, initialState);

  assert(typeof width === 'number', 'width is not a number');
  assert(typeof height === 'number', 'height is not a number');

  const { xScale, yScale } = useMemo(() => {
    const padding = 40;

    const xDomain = extent(state.bucket, (p) => p.x) as [number, number];
    const yDomain = extent(state.bucket, (p) => p.y) as [number, number];

    const xScale = scaleLinear({
      domain: xDomain,
      range: [padding, width - padding],
    });

    const yScale = scaleLinear({
      domain: yDomain,
      range: [height - padding, padding],
    });

    return { xScale, yScale };
  }, [state.bucket, width, height]);

  useLayoutEffect(() => {
    dispatch({ type: 'SET_EXPRESSION', payload: { expression: state.expression } });
  }, [state.expression]);
  useLayoutEffect(() => {
    if (state.time === 0) {
      return;
    }

    tickFrame.current = requestAnimationFrame(() => {
      setTimeout(() => {
        dispatch({ type: 'TICK' });
      }, 50);
    });

    return () => {
      if (!tickFrame.current) {
        return;
      }
      cancelAnimationFrame(tickFrame.current);
    };
  }, [state.time]);

  if (state.points.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <ApplicationLayout heading="The Polar Express!" showFooter={false}>
      <section ref={containerRef} className={styles.container}>
        <Box display="flex" justifyContent="center">
          <MathJax className={styles.expression}>{`$ r = ${parse(state.expression).toTex()}$`}</MathJax>
        </Box>
        <ResponsiveSVG width={width} height={height} overflow="hidden" className="polar-svg">
          <Group>
            <LinePath
              data={state.current}
              x={(d) => xScale(d.x)}
              y={(d) => yScale(d.y)}
              stroke="#ffffff"
              strokeWidth={2}
              curve={curveBasisOpen}
            />
          </Group>
        </ResponsiveSVG>
      </section>
    </ApplicationLayout>
  );
}

export default Polar;
