import cs from 'classnames';
import type { InputHTMLAttributes, Ref } from 'react';

import * as styles from './Input.css';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  invalid?: boolean;
  innerRef?: Ref<HTMLInputElement>;
}

export function Input({ required, className, invalid, innerRef, type = 'text', ...rest }: InputProps): JSX.Element {
  return (
    <input
      required={required}
      aria-required={required}
      className={cs(styles.root, className, {
        [styles.invalid]: invalid,
      })}
      type={type}
      ref={innerRef}
      {...rest}
    />
  );
}

Input.displayName = 'Input';
