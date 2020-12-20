import type { FC, InputHTMLAttributes } from 'react';
import cs from 'classnames';
import styles from './Input.module.scss';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  invalid?: boolean;
}

export const Input: FC<InputProps> = ({ invalid, className, required, ...rest }) => (
  <input
    autoComplete="off"
    required={required}
    aria-required={required}
    className={cs(styles.default, 'form-control', className, {
      [styles.invalid]: invalid,
    })}
    {...rest}
  />
);

Input.displayName = 'Input';

Input.defaultProps = {
  type: 'text',
};
