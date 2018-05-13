import * as cs from 'classnames';
import * as React from 'react';

const styles = require('./Input.scss');

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  invalid?: boolean;
}

export const Input: React.StatelessComponent<InputProps> = ({
  invalid,
  className,
  required,
  ...rest
}) => (
  <input
    autoComplete="off"
    required={required}
    aria-required={required}
    className={cs(styles.default, 'form-control', className, {
      [styles.invalid]: invalid
    })}
    {...rest}
  />
);

Input.displayName = 'Input';

Input.defaultProps = {
  type: 'text'
};
