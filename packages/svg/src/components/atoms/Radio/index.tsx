import type { FC } from 'react';
import cs from 'classnames';
import { RadioProps, RadioSize, RadioLayout, RadioLayoutProps, RadioEventHandlers } from './types';

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
      [styles.large]: size === RadioSize.large,
      [styles.small]: size === RadioSize.small,
      [styles.stacked]: layout === RadioLayout.stacked,
      [styles.inline]: layout === RadioLayout.inline,
    })}
  >
    <input id={id} name={name} type="radio" value={value} onChange={onChange} checked={checked} />
    <label htmlFor={id}>
      <div className={styles.content}>{children}</div>
    </label>
  </div>
);
