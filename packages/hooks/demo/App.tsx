import '@cutting/component-library/styles.css';
import { FC, useRef } from 'react';
import { useScrollToTop } from '../src/useScrollToTop/useScrollToTop';
import { ApplicationLayout } from '@cutting/component-library';
import { BrowserRouter } from 'react-router-dom';

import * as styles from './global.css';

export const App: FC = () => {
  const ref = useRef<HTMLDivElement>();
  useScrollToTop({ ref });

  return (
    <BrowserRouter>
      <ApplicationLayout heading="@cutting/hooks">
        <div ref={ref} className={styles.parent}>
          <h1>Subject</h1>
        </div>
        <div className={styles.child}>
          <h1>Observer</h1>
        </div>
      </ApplicationLayout>
    </BrowserRouter>
  );
};

export default App;
