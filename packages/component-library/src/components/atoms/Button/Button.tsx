import type { FC, DetailedHTMLProps, ButtonHTMLAttributes, MouseEventHandler } from 'react';
import cs from 'classnames';
import { identity } from '@cutting/util';
import { StandardProps } from '../../../types';
import styles from './Button.module.scss';

export type ButtonStyle = 'primary' | 'secondary' | 'inverse' | 'warning';

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
  buttonStyle,
  disabled,
  type = 'button',
  children,
  title,
  dataSelector,
  ...rest
}) => {
  return (
    <button
      className={cs(className, styles.default, {
        [styles[(buttonStyle as string) || 'primary']]: true,
      })}
      type={type}
      onClick={onClick}
      disabled={disabled}
      title={title}
      data-selector={dataSelector}
      {...rest}
    >
      {children}
    </button>
  );
};
