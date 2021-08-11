import type { FC } from 'react';
import cs from 'classnames';
import { RadioProps, RadioLayoutProps, RadioEventHandlers } from './types';

import * as styles from './Radio.css';

export const Radio: FC<RadioProps & RadioEventHandlers & RadioLayoutProps> = ({
  id,
  name,
  value,
  checked,
  children,
  layout,
  onChange,
  size,
}) => {
  console.log({ checked });
  return (
    <div
      className={cs(styles.item, {
        [styles.large]: size === 'large',
        [styles.small]: size === 'small',
        [styles.stacked]: layout === 'stacked',
        [styles.inline]: layout === 'inline',
      })}
    >
      <input id={id} name={name} type="radio" value={value} onChange={onChange} checked={checked} />
      <label htmlFor={id}>{children}</label>
    </div>
  );
};
