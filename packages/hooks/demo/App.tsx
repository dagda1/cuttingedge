import '@cutting/component-library/dist/component-library.cjs.development.css';
import { FC, useRef } from 'react';
import { useParentSize } from '../src/useParentSize/useParentSize';
import { ApplicationLayout } from '@cutting/component-library';

import styles from './global.module.scss';

export const App: FC = () => {
  const ref = useRef<HTMLDivElement>();
  const { width, height } = useParentSize(ref);

  return (
    <ApplicationLayout heading="@cutting/hooks">
      <div ref={ref} className={styles.parent}>
        <h1>Subject</h1>
      </div>
      <div className={styles.child} style={{ width, height }}>
        <h1>Observer</h1>
      </div>
    </ApplicationLayout>
  );
};

export default App;
