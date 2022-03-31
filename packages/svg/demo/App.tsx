import * as styles from './global.css';
import '@cutting/component-library/styles.css';
import { useRef } from 'react';
import { ApplicationLayout, cuttingTheme } from '@cutting/component-library';
import { ParentsizeSVG } from '../src/components/ParentsizeSVG/ParentsizeSVG';

export function App(): JSX.Element {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <ApplicationLayout heading="@cutting/svg" className={cuttingTheme}>
      <div className={styles.container} ref={ref}>
        <ParentsizeSVG elementRef={ref} options={{ debounceDelay: 10 }}>
          <rect
            x="0"
            y="0"
            width={'50%'}
            height={'50%'}
            rx="0"
            style={{ fill: '#ff0000', stroke: '#000000', strokeWidth: '2px' }}
          />

          <rect
            x="0"
            y="0"
            width={'50%'}
            height={'50%'}
            rx="40"
            style={{ fill: '#0000ff', stroke: '#000000', strokeWidth: '2px', fillOpacity: 0.7 }}
          />
        </ParentsizeSVG>
      </div>
    </ApplicationLayout>
  );
}
