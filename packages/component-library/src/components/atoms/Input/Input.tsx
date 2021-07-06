import type { FC, InputHTMLAttributes, RefObject } from 'react';
import cs from 'classnames';
import * as styles from './Input.css';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  invalid?: boolean;
  innerRef?: RefObject<HTMLInputElement>;
}

export const Input: FC<InputProps> = ({ invalid, className, required, innerRef, type = 'text', ...rest }) => (
  <input
    required={required}
    aria-required={required}
    className={cs(styles.base, 'form-control', className, {
      [styles.invalid]: invalid,
    })}
    type={type}
    ref={innerRef}
    {...rest}
  />
);

Input.displayName = 'Input';
