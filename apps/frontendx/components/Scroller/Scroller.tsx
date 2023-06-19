import * as styles from './Scroller.css';

export function Scroller(): JSX.Element {
  return (
    <div className={styles.scroller}>
      <div className={styles.arrow}></div>
    </div>
  );
}
