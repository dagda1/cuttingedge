import type { ReactNode } from 'react';
import cs from 'classnames';

import * as styles from './Checkable.css';
import { CheckableEventHandlers, CheckableLayoutProps, CheckableProps, CheckableValueType } from './types';

export function Checkable(type: 'radio' | 'checkbox') {
  return function Radio<V extends CheckableValueType>({
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
        <input id={id} name={name} type={type} value={value} onChange={onChange} checked={checked} />
        <label htmlFor={id}>{children}</label>
      </div>
    );
  };
}
