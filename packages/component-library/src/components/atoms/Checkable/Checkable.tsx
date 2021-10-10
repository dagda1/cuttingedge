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
    checkableLayout,
    onChange,
    onBlur,
    checkableSize,
  }: CheckableProps<V> & CheckableEventHandlers & CheckableLayoutProps & { children: ReactNode }): JSX.Element {
    return (
      <div
        className={cs(styles.item, {
          [styles.small]: checkableSize === 'small',
          [styles.inline]: checkableLayout === 'inline',
        })}
      >
        <input id={id} name={name} type={type} value={value} onChange={onChange} onBlur={onBlur} checked={checked} />
        <label htmlFor={id}>{children}</label>
      </div>
    );
  };
}
