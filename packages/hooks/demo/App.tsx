/* eslint-disable @typescript-eslint/no-unused-vars */
import type { FC } from 'react';
import { useParentSize } from '../src/useParentSize/useParentSize';

import styles from './global.module.scss';

export const App: FC = () => {
  const { width, height, ref } = useParentSize(200);

  // console.log('--------------------');
  // console.log(width, height, ref);
  // console.log('--------------------');

  return (
    <div ref={ref} className={styles.parent}>
      <h1>Parent</h1>
      <div className={styles.child} style={{ width, height }}>
        <h1>Child</h1>
      </div>
    </div>
  );
};

export default App;
