import { FC, useRef } from 'react';
import { useParentSize } from '../src/useParentSize/useParentSize';

import styles from './global.module.scss';

export const App: FC = () => {
  const ref = useRef<Element>(null);
  const { width, height } = useParentSize(ref);

  return (
    <>
      <div ref={ref} className={styles.parent}>
        <h1>Subject</h1>
      </div>
      <div className={styles.child} style={{ width, height }}>
        <h1>Observer</h1>
      </div>
    </>
  );
};

export default App;
