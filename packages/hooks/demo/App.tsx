/* eslint-disable @typescript-eslint/no-unused-vars */
import type { FC } from 'react';
import { useParentSize } from '../src/use-parentsize/useParentSize';

import styles from './global.module.scss';

export const App: FC = () => {
  const { width, height, ref } = useParentSize();

  return (
    <div ref={ref} className={styles.parent}>
      <h1>Parnet</h1>
      <div className={styles.child} style={{ width, height }}>
        <h1>Child</h1>
      </div>
    </div>
  );
};

export default App;
