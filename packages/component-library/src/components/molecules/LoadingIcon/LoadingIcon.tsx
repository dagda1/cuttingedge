import { range } from '@cutting/util';
import cs from 'classnames';

import * as styles from './LoadingIcon.css';

export interface LoadingIconProps {
  darkMode?: boolean;
}

const angles = [...range(0, 360, 30)];

export function LoadingIcon({ darkMode }: LoadingIconProps): JSX.Element {
  return (
    <svg
      data-selector="loading-icon"
      className={styles.loadingIcon}
      xmlns="http://www.w3.org/2000/svg"
      width="120px"
      height="120px"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
    >
      <g className={styles.bars}>
        {Array.from(angles).map((angle) => (
          <rect
            key={angle}
            x="48.5"
            y="30"
            width="3"
            height="25"
            rx="2"
            ry="2"
            transform={`rotate(${angle} 50 50) translate(0 -30)`}
            className={cs(styles.bar, { [styles.dark]: darkMode })}
          />
        ))}
      </g>
      <g className={styles.dots}>
        {angles.map((x) => (
          <circle key={x} cx={x} cy="50" r="3" className={styles.dot} />
        ))}
      </g>
    </svg>
  );
}
