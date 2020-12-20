import type { FC } from 'react';
import styles from './Pyramid.module.scss';

export const Pyramid: FC = () => (
  <div className={styles.main}>
    <div className={styles.container}>
      <div className={styles.shape}>
        <div className={styles.base} />
        <div className={styles.front} />
        <div className={styles.back} />
        <div className={styles.right} />
        <div className={styles.left} />
      </div>
    </div>
  </div>
);
