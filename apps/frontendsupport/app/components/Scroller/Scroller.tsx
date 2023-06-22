import * as styles from './Scroller.css';
import cs from 'classnames';

export function Scroller(): JSX.Element {
  return (
    <div className={cs('scroller', styles.scroller)}>
      <div className={styles.arrow}></div>
    </div>
  );
}
