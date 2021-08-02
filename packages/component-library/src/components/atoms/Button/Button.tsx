import type { FC, DetailedHTMLProps, ButtonHTMLAttributes, MouseEventHandler } from 'react';
import cs from 'classnames';
import { identity } from '@cutting/util';
import { StandardProps } from '../../../types';
import { root, buttons, ButtonStyle, disabled as disabledStyle } from './Button.css';

export type ButtonProps = StandardProps<
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
> & {
  onClick?: MouseEventHandler;
  buttonStyle?: ButtonStyle;
  ariaLabel?: string;
  ariaLabelledBy?: string;
};

export const Button: FC<ButtonProps> = ({
  onClick = identity,
  className,
  buttonStyle = 'primary',
  disabled,
  type = 'button',
  children,
  title,
  dataSelector,
  ariaLabel,
  ariaLabelledBy,
  ...rest
}) => {
  return (
    <button
      className={cs(className, root, buttons[buttonStyle], { [disabledStyle]: disabled })}
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
