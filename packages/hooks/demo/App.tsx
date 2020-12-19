/* eslint-disable @typescript-eslint/no-unused-vars */
import { useRef } from 'react';
import { useParentSize } from '../src/use-parentsize/useParentSize';

import styles from './global.module.scss';

export const App: React.FC = () => {
  const ref = useRef<HTMLDivElement>();
  const { width, height } = useParentSize(ref);

  return (
    <div ref={ref} className={styles.subject}>
      <h1>Hello der</h1>
    </div>
  );
};

export default App;
