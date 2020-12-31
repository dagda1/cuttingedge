import type { FC } from 'react';
import styles from './global.module.scss';

export const App: FC = () => {
  return (
    <div className={styles.container}>
      <h1>Herman</h1>
    </div>
  );
};

export default App;
