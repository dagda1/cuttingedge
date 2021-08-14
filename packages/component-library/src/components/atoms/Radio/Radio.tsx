import type { ReactNode } from 'react';
import cs from 'classnames';
import { RadioProps, RadioLayoutProps, RadioEventHandlers, RadioValueType } from './types';

import * as styles from './Radio.css';

export function Radio<V extends RadioValueType>({
  id,
  name,
  value,
  checked,
  children,
  layout,
  onChange,
  size,
}: RadioProps<V> & RadioEventHandlers & RadioLayoutProps & { children: ReactNode }): JSX.Element {
  return (
    <div
      className={cs(styles.item, {
        [styles.small]: size === 'small',
        [styles.inline]: layout === 'inline',
      })}
    >
      <input id={id} name={name} type="radio" value={value} onChange={onChange} checked={checked} />
      <label htmlFor={id}>{children}</label>
    </div>
  );
}
