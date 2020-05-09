import React from 'react';
import range from 'lodash/range';
import cs from 'classnames';

const styles = require('./LoadingIcon.module.scss');

export interface LoadingIconProps {
  darkMode?: boolean;
}

const LoadingIcon: React.FC<LoadingIconProps> = ({ darkMode }) => (
  <svg
    data-selector="loading-icon"
    className={styles['loading-icon']}
    xmlns="http://www.w3.org/2000/svg"
    width="120px"
    height="120px"
    viewBox="0 0 100 100"
    preserveAspectRatio="xMidYMid"
  >
    <g className={styles.bars}>
      {range(0, 360, 30).map((angle) => (
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
      {range(40, 70, 10).map((x) => (
        <circle key={x} cx={x} cy="50" r="3" className={styles.dot} />
      ))}
    </g>
  </svg>
);

export default LoadingIcon;
