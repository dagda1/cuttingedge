import * as styles from './Pyramid.css.js';

export function Pyramid(): JSX.Element {
  return (
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
}
