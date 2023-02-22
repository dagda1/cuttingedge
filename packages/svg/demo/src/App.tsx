import * as styles from './global.css';
import '@cutting/component-library/styles.css';
import { useMemo, useRef } from 'react';
import { ApplicationLayout } from '@cutting/component-library';
import { ResponsiveSVG } from '../../src/components/ResponsiveSVG/ResponsiveSVG';
import { useParentSize } from '@cutting/use-get-parent-size';
import { scaleLinear } from 'd3-scale';

export function App(): JSX.Element {
  const ref = useRef<HTMLDivElement>(null);
  const { width, height } = useParentSize(ref);

  const { radius } = useMemo(() => {
    const xScale = scaleLinear().domain([0, 20]).range([0, width]);
    const yScale = scaleLinear().domain([0, 20]).range([height, 0]);

    const radius = yScale(12);

    return { radius, xScale, yScale };
  }, [width, height]);

  return (
    <ApplicationLayout heading="@cutting/svg" theme="salesTheme">
      <div className={styles.container} ref={ref}>
        <ResponsiveSVG width={width} height={height}>
          <circle cx={width / 2} cy={height / 2} r={radius} />
        </ResponsiveSVG>
      </div>
    </ApplicationLayout>
  );
}
