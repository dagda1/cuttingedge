import React, { useRef } from 'react';
import { useParentSize } from '../src/use-parentsize';

require('./global.module.scss');

export const App: React.FC = () => {
  const ref = useRef<HTMLDivElement>();
  const { width, height } = useParentSize(ref);

  console.log({ width, height });
  return (
    <div style={{ height: '400px', width: '400px' }}>
      <h1>Hello der</h1>
    </div>
  );
};

export default App;
