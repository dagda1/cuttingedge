import type { ReactNode } from 'react';
import cs from 'classnames';
import { CheckableProps, CheckableLayoutProps, CheckableEventHandlers, CheckableValueType } from '../Checkable/types';

import * as styles from './Radio.css';

export function Radio<V extends CheckableValueType>({
  id,
  name,
  value,
  checked,
  children,
  layout,
  onChange,
  size,
}: CheckableProps<V> & CheckableEventHandlers & CheckableLayoutProps & { children: ReactNode }): JSX.Element {
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
