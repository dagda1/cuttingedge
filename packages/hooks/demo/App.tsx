/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, useEffect, useLayoutEffect } from 'react';
import { useParentSize } from '../src/useParentSize/useParentSize';

import styles from './global.module.scss';

export const App: FC = () => {
  const { width, height, ref } = useParentSize(3000);

  const el = document.querySelector('.global__child') as HTMLDivElement;
  useLayoutEffect(() => {
    if (!el) {
      return;
    }
    console.log('>>>>>>>>', el?.getBoundingClientRect().height);
  }, [el]);

  return (
    <>
      <div ref={ref} className={styles.parent}>
        <h1>Parent</h1>
        <div className={styles.child} style={{ width, height }}>
          <h1>Child</h1>
        </div>
      </div>
    </>
  );
};

export default App;
