import type { FC, DetailedHTMLProps, ButtonHTMLAttributes, MouseEventHandler } from 'react';
import cs from 'classnames';
import { identity } from '@cutting/util';
import { StandardProps } from '../../../types';
import styles from './Button.module.scss';

export enum ButtonStyle {
  Primary = 'primary',
  Secondary = 'secondary',
  Inverse = 'inverse',
}

export type ButtonProps = StandardProps<
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
> & {
  onClick?: MouseEventHandler;
  buttonStyle?: ButtonStyle;
  ariaLabel?: string;
  ariaLabelledBy?: string;
};

export const Button: FC<ButtonProps> = ({
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
        [styles.secondary]: secondary,
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
  type: 'button',
};
