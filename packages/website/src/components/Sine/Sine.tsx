import { FC } from 'react';
import { useRef } from 'react';
import { ApplicationLayout } from 'src/layouts/ApplicationLayout';
import { ResponsiveSVG } from '@cutting/svg';
import { useParentSize } from '@cutting/hooks';
import styles from './Sine.module.scss';

export const Sine: FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { width, height } = useParentSize(containerRef);

  console.log({width,height})
  return (
    <ApplicationLayout heading="Sine Wave">
      <section className={styles.main} ref={containerRef}>
        <ResponsiveSVG width={width} height={height}>
          <circle fill="#fff" cx={width/2} cy={height/2} r={width / 4} />
        </ResponsiveSVG>
      </section>
    </ApplicationLayout>
  );
};

export default Sine;
