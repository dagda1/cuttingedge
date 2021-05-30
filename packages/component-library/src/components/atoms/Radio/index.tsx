import type { FC } from 'react';
import cs from 'classnames';
import { RadioProps, RadioLayoutProps, RadioEventHandlers } from './types';

import styles from './Radio.module.scss';

export const Radio: FC<RadioProps & RadioEventHandlers & RadioLayoutProps> = ({
  id,
  name,
  value,
  checked,
  children,
  layout,
  onChange,
  size,
}) => (
  <div
    className={cs(styles.container, {
      [styles.large]: size === 'large',
      [styles.small]: size === 'small',
      [styles.stacked]: layout === 'stacked',
      [styles.inline]: layout === 'inline',
    })}
  >
    <input id={id} name={name} type="radio" value={value} onChange={onChange} checked={checked} />
    <label htmlFor={id}>
      <div className={styles.content}>{children}</div>
    </label>
  </div>
);
