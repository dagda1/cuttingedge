import { FC, Reducer, useMemo, useReducer } from 'react';
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

type Sine = {
  initialX: number;
  initialY: number;
};

type SineActions = { type: 'TICK' };

const reducer: Reducer<Sine, SineActions> = (state, action) => {
  switch (action.type) {
    default:
      throw new Error(`unknown action type ${action.type}`);
  }
};

export const Sine: FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { width, height } = useParentSize(containerRef);
  const { xScale, yScale } = useMemo(() => getScale({ width, height }), [height, width]);

  const [] = useReducer(reducer, { initialX: xScale(12), initialY: yScale(10) });

  const initialX = xScale(12);
  const initialY = 125;

  const firstAxisXCoord = -radius;

  return (
    <ApplicationLayout heading="Sine Wave">
      <section className={styles.main} ref={containerRef}>
        <ResponsiveSVG width={width} height={height}>
          <Group x={initialX} y={initialY}>
            <circle className={styles['unit-cirle']} cx={0} cy={0} r={radius} />
            <Line className={styles.hypotenuse} from={{ x: 0, y: 0 }} to={{ x: 0, y: 0 }} />
            <Line className={styles.opposite} from={{ x: 0, y: 0 }} to={{ x: 0, y: 0 }} />
            <Line className={styles.adjacent} from={{ x: 0, y: 0 }} to={{ x: 0, y: 0 }} />
            <circle className={styles.dot} cx={radius} cy={0} r={5} />
            <circle className={styles['vertical-guide']} cx={0} cy={0} r={5} />
            <Line className={styles['joining-line']} from={{ x: firstAxisXCoord, y: 0 }} to={{ x: 0, y: 0 }} />
            <circle className={styles['axis-dot']} cx={radius} cy={0} r={5} />
          </Group>
        </ResponsiveSVG>
      </section>
    </ApplicationLayout>
  );
};

export default Sine;
