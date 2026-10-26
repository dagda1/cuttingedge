import cs from 'classnames';
import type { ReactNode } from 'react';

import { Text } from '~/components/atoms/Text/Text';

import * as styles from './Checkable.css';
import type { CheckableEventHandlers, CheckableLayoutProps, CheckableProps, CheckableValueType } from './types';

type CheckableComponentProps<V extends CheckableValueType> = CheckableProps<V> &
  CheckableEventHandlers &
  CheckableLayoutProps & { children: ReactNode };

type CheckableComponent = {
  <V extends CheckableValueType>(props: CheckableComponentProps<V>): JSX.Element;
  displayName: string;
};

export function Checkable(type: 'radio' | 'checkbox'): CheckableComponent {
  function Radio<V extends CheckableValueType>({
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
  }: CheckableComponentProps<V>): JSX.Element {
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
  }

  Radio.displayName = `Checkable(${type})`;

  return Radio;
}
