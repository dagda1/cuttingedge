import cs from 'classnames';
import React from 'react';

const styles = require('./Input.scss');

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  invalid?: boolean;
}

export const Input: React.FunctionComponent<InputProps> = ({ invalid, className, required, ...rest }) => (
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
