import cs from 'classnames';
import React from 'react';
import { identity } from '@cutting/util';
import { StandardProps } from '../../../types';

const styles = require('./Button.module.scss');

console.log(styles);

export enum ButtonStyle {
  Primary = 'primary',
  Secondary = 'secondary',
  Inverse = 'inverse'
}

export type ButtonProps = StandardProps<
  React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
> & {
  onClick?: React.MouseEventHandler;
  buttonStyle?: ButtonStyle;
  ariaLabel?: string;
  ariaLabelledBy?: string;
};

export const Button: React.FC<ButtonProps> = ({
  onClick,
  className,
  buttonStyle,
  disabled,
  type,
  children,
  title,
  ariaLabel,
  ariaLabelledBy,
  dataSelector,
  ...rest
}) => {
  const primary = buttonStyle === ButtonStyle.Primary;
  const secondary = buttonStyle === ButtonStyle.Secondary;
  const inverse = buttonStyle === ButtonStyle.Inverse;

  return (
    <button
      className={cs(className, styles.default, {
        [styles.disabled]: disabled,
        [styles.inverse]: inverse,
        [styles.primary]: primary,
        [styles.secondary]: secondary
      })}
      type={type}
      onClick={onClick}
      disabled={disabled}
      title={title}
      data-selector={dataSelector}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
      {...rest}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  onClick: identity,
  type: 'button'
};
