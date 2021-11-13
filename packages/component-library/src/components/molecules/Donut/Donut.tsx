import * as styles from './Donut.css';
import cs from 'classnames';
import { useMemo, useRef } from 'react';

export function Donut({ score, size = 34 }: { score: number; size?: number }): JSX.Element {
  const halfSize = useRef(size / 2);

  const circleProps = useMemo(
    () => ({
      cx: halfSize.current,
      cy: halfSize.current,
      r: halfSize.current - 1,
    }),
    [halfSize],
  );

  return (
    <div className={cs({ [styles.donutIsNegatvie]: score < 0 }, styles.donut)}>
      <svg
        className={styles.donutCanvas}
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle className={styles.donutFrame} {...circleProps} />

        <circle className={styles.donutCircle} strokeDasharray={`${Math.abs(score)} 100`} {...circleProps} />
      </svg>

      <div className={styles.donutText}>
        <strong>{score}%</strong>
      </div>
    </div>
  );
}
