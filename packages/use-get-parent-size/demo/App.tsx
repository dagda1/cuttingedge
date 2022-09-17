import '@cutting/component-library/styles.css';
import { useRef } from 'react';
import { useParentSize } from '../src/useParentSize/useParentSize';
import { ApplicationLayout } from '@cutting/component-library';

import * as styles from './global.css';

export function App(): JSX.Element {
  const ref = useRef<HTMLDivElement>();
  const { width, height } = useParentSize(ref);

  return (
    <div>
      <ApplicationLayout theme="salesTheme" heading="@cutting/use-get-parent-size">
        <div ref={ref} className={styles.parent}>
          <h1>Subject</h1>
        </div>
        <div className={styles.child} style={{ width, height }}>
          <h1>Observer</h1>
        </div>
      </ApplicationLayout>
    </div>
  );
}

export default App;
