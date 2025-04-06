import { assert } from '@cutting/assert';
import { Box, RadioGroup } from '@cutting/component-library';
import { ResponsiveSVG } from '@cutting/svg';
import { useParentSize } from '@cutting/use-get-parent-size';
import { MathJax } from '@cutting/use-mathjax';
import { curveCatmullRom } from '@visx/curve';
import { Group } from '@visx/group';
import { scaleLinear } from '@visx/scale';
import { LinePath } from '@visx/shape';
import { extent } from 'd3-array';
import { parse } from 'mathjs';
import { useLayoutEffect, useMemo, useReducer, useRef, useState } from 'react';

import { ApplicationLayout } from '~/layouts/ApplicationLayout';

import * as styles from './Polar.css';
import type { PolarEffect } from './reducer';
import { initialState, reducer } from './reducer';

const margin = { top: 10, right: 10, bottom: 150, left: 10 } as const;

export function Polar(): JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null);
  const { width, height } = useParentSize(containerRef, {
    debounceDelay: 500,
    initialValues: { width: 0, height: 0 },
  });

  const tickFrame = useRef<number>(undefined);
  const [polarEffect, setPolarEffect] = useState<PolarEffect>('butterfly');

  const [state, dispatch] = useReducer(reducer, initialState);

  assert(typeof width === 'number', 'width is not a number');
  assert(typeof height === 'number', 'height is not a number');

  const { xScale, yScale } = useMemo(() => {
    const xDomain = extent(state.bucket, (p) => p.x) as [number, number];
    const yDomain = extent(state.bucket, (p) => p.y) as [number, number];

    const xScale = scaleLinear({
      domain: xDomain,
      range: [margin.left, width - margin.right],
    });

    const yScale = scaleLinear({
      domain: yDomain,
      range: [height - margin.bottom, margin.top],
    });

    return { xScale, yScale };
  }, [state.bucket, width, height]);

  useLayoutEffect(() => {
    dispatch({ type: 'SET_POLAR_EFFECT', payload: { polarEffect } });
  }, [polarEffect, state.expression]);

  useLayoutEffect(() => {
    if (state.time === 0) {
      return;
    }

    tickFrame.current = requestAnimationFrame(() => {
      dispatch({ type: 'TICK' });
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
    <ApplicationLayout heading="The Polar Express" showFooter={false} centerHeading className={styles.main}>
      <section ref={containerRef} className={styles.container}>
        <Box display="flex" flexDirection="column" alignItems="center">
          <RadioGroup<PolarEffect>
            legend="Trigonometric Function"
            legendMode="screen-reader-only"
            name="theme"
            checkableLayout="inline"
            checkableSize="small"
            onChange={(o) => {
              setPolarEffect(o.target.value as PolarEffect);
            }}
            options={[
              {
                value: 'butterfly',
                content: 'Butterfly',
                checked: polarEffect === 'butterfly',
              },
              {
                value: 'rose',
                content: 'Petals',
                checked: polarEffect === 'rose',
              },
              {
                value: 'lemniscate',
                content: 'Lemniscates',
                checked: polarEffect === 'lemniscate',
              },
            ]}
          />
          <Box marginLeft={{ mobile: 'small', desktop: 'none' }}>
            <MathJax className={styles.expression}>{`$ r = ${parse(state.expression).toTex()}$`}</MathJax>
          </Box>
        </Box>
        <ResponsiveSVG width={width} height={height} overflow="hidden" className="polar-svg">
          <Group>
            <LinePath
              data={state.current}
              x={(d) => xScale(d.x)}
              y={(d) => yScale(d.y)}
              stroke="#ffffff"
              strokeWidth={2}
              curve={curveCatmullRom}
            />
          </Group>
        </ResponsiveSVG>
      </section>
    </ApplicationLayout>
  );
}

export default Polar;
