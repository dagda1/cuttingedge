import type { ReactNode } from 'react';
import cs from 'classnames';
import type { CheckableEventHandlers, CheckableLayoutProps, CheckableProps, CheckableValueType } from './types';
import { Text } from '~/components/atoms/Text/Text';
import * as styles from './Checkable.css';

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
    innerRef,
  }: CheckableProps<V> & CheckableEventHandlers & CheckableLayoutProps & { children: ReactNode }): JSX.Element {
    return (
      <div
        className={cs(styles.item, {
          [styles.small]: checkableSize === 'small',
          [styles.inline]: checkableLayout === 'inline',
        })}
      >
        <input
          id={id}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          ref={innerRef}
          checked={checked}
        />
        <label htmlFor={id}>{typeof children === 'string' ? <Text>{children}</Text> : children}</label>
      </div>
    );
  };
}
