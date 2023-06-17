import type { ReactNode } from 'react';
import * as styles from './ResponsiveBorders.css';

export function ResponsiveBorders({ children }: { children: ReactNode }): JSX.Element {
  return (
    <div className={styles.main}>
      <h2> </h2>
      {children}
    </div>
  );
}
