import '@cutting/component-library/styles.css';
import { FC, useRef } from 'react';
import { useScrollToTop } from '../src/useScrollToTop/useScrollToTop';
import { ApplicationLayout } from '@cutting/component-library';

import * as styles from './global.css';

export const App: FC = () => {
  const ref = useRef<HTMLDivElement>();
  useScrollToTop({ ref });

  return (
    <ApplicationLayout heading="@cutting/hooks">
      <div ref={ref} className={styles.parent}>
        <h1>Subject</h1>
      </div>
      <div className={styles.child}>
        <h1>Observer</h1>
      </div>
    </ApplicationLayout>
  );
};

export default App;
