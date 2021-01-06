import { FC, useRef } from 'react';
import styles from './global.module.scss';
import { ResponsiveSVG } from '../src/components/ResponsiveSVG/ResponsiveSVG';
import { useParentSize } from '@cutting/hooks';

export const App: FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { width, height } = useParentSize(ref as any);

  return (
    <div className={styles.container} ref={ref}>
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      <ResponsiveSVG height={height} width={width}>
        <rect width="100%" height="100%" fill="red" />

        <circle cx="150" cy="100" r="80" fill="green" />

        <text x="150" y="125" fontSize="60" textAnchor="middle" fill="white">
          SVG
        </text>
      </ResponsiveSVG>
    </div>
  );
};

export default App;
