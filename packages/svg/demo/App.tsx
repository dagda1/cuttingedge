import '@cutting/component-library/dist/component-library.cjs.development.css';
import type { FC } from 'react';
import { useRef } from 'react';
import { ApplicationLayout } from '@cutting/component-library';
import { ParentsizeSVG } from '../src/components/ParentsizeSVG/ParentsizeSVG';

import styles from './global.module.scss';

export const App: FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <ApplicationLayout heading="@cutting/svg">
      <div className={styles.container} ref={ref}>
        <ParentsizeSVG elementRef={ref} options={{ debounceDelay: 0 }}>
          <rect
            x="20%"
            y="20%"
            width={'50%'}
            height={'50%'}
            rx="20"
            style={{ fill: '#ff0000', stroke: '#000000', strokeWidth: '2px' }}
          />

          <rect
            x="30%"
            y="30%"
            width={'50%'}
            height={'50%'}
            rx="40"
            style={{ fill: '#0000ff', stroke: '#000000', strokeWidth: '2px', fillOpacity: 0.7 }}
          />
        </ParentsizeSVG>
      </div>
    </ApplicationLayout>
  );
};
