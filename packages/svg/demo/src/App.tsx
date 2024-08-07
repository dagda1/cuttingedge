import '@cutting/component-library/styles.css';

import { ApplicationLayout } from '@cutting/component-library';
import { useParentSize } from '@cutting/use-get-parent-size';
import { range } from '@cutting/util';
import { scalePoint } from '@visx/scale';
import { useMemo, useRef } from 'react';

import { ResponsiveSVG } from '../../src/components/ResponsiveSVG/ResponsiveSVG';
import * as styles from './global.css';

export function App(): JSX.Element {
  const ref = useRef<HTMLDivElement>(null);
  const { width = 1, height = 1 } = useParentSize(ref);

  const { xScale, yScale, radius } = useMemo(() => {
    const xScale = scalePoint({
      domain: [...range(10)],
      range: [0, width],
    });

    const yScale = scalePoint({
      domain: [...range(10)],
      range: [0, height],
    });

    const radius = yScale(5);

    return { radius, xScale, yScale };
  }, [width, height]);

  return (
    <ApplicationLayout heading="@cutting/svg" theme="salesTheme">
      <div className={styles.container} ref={ref}>
        <ResponsiveSVG width={width} height={height}>
          <circle cx={xScale(5)} cy={yScale(5)} r={radius} fill="#ffffff" />
        </ResponsiveSVG>
      </div>
    </ApplicationLayout>
  );
}
