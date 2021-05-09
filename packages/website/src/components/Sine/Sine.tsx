import { FC, useMemo } from 'react';
import { useRef } from 'react';
import { ApplicationLayout } from 'src/layouts/ApplicationLayout';
import { ResponsiveSVG, Group, Line } from '@cutting/svg';
import { useParentSize } from '@cutting/hooks';
import { scaleLinear } from 'd3-scale';

import styles from './Sine.module.scss';

export type Dimensions = { width: number; height: number };

const getScale = ({ width, height }: Dimensions) => ({
  xScale: scaleLinear().domain([0, 20]).range([0, width]),
  yScale: scaleLinear().domain([0, 20]).range([height, 0]),
});

const radius = 90;

export const Sine: FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { width, height } = useParentSize(containerRef);

  const { xScale } = useMemo(() => getScale({ width, height }), [height, width]);

  const initialX = xScale(12);
  const initialY = 125;

  // const firstAxisXCoord = -(radius * 1.5);

  return (
    <ApplicationLayout heading="Sine Wave">
      <section className={styles.main} ref={containerRef}>
        <ResponsiveSVG width={width} height={height}>
          <Group x={initialX} y={initialY}>
            <circle className={styles['unit-circle']} cx={0} cy={0} r={radius} />
            <Line className={styles.hypotenuse} from={{ x: 0, y: 0 }} to={{ x: 0, y: 0 }} />
          </Group>
        </ResponsiveSVG>
      </section>
    </ApplicationLayout>
  );
};

export default Sine;
