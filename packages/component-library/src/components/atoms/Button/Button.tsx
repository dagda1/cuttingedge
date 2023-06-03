import type { DetailedHTMLProps, ButtonHTMLAttributes, MouseEventHandler } from 'react';
import cs from 'classnames';
import { identity } from '@cutting/util';
import type { StandardProps } from '~/types';
import type { ButtonStyle } from './Button.css';
import { root, buttons, disabled as disabledStyle } from './Button.css';
import { Text } from '../Text/Text';

export type ButtonProps = StandardProps<
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
> & {
  onClick?: MouseEventHandler;
  buttonStyle?: ButtonStyle;
  ariaLabel?: string;
  ariaLabelledBy?: string;
};

export function Button({
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
}: ButtonProps): JSX.Element {
  return (
    <button
      className={cs(className, root, buttons[buttonStyle], { [disabledStyle]: disabled })}
      type={type}
      onClick={onClick}
      disabled={disabled}
      title={title}
      data-testid={dataSelector}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
      {...rest}
    >
      <Text>{children}</Text>
    </button>
  );
}
