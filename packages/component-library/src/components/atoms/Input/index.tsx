import type { FC, InputHTMLAttributes, RefObject } from 'react';
import cs from 'classnames';
import styles from './Input.module.scss';
import { atoms } from '../../../style/sprinkles';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  invalid?: boolean;
  innerRef?: RefObject<HTMLInputElement>;
}

export const Input: FC<InputProps> = ({ invalid, className, required, innerRef, type = 'text', ...rest }) => (
  <input
    autoComplete="off"
    required={required}
    aria-required={required}
    className={cs(styles.default, 'form-control', className, {
      [styles.invalid]: invalid,
    })}
    type={type}
    ref={innerRef}
    {...rest}
  />
);

Input.displayName = 'Input';
