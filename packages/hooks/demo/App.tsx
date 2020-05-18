/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useRef } from 'react';
import { useParentSize } from '../src/use-parentsize';

const styles = require('./global.module.scss');

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
