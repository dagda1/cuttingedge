import type { FC, DetailedHTMLProps, ButtonHTMLAttributes, MouseEventHandler } from 'react';
import cs from 'classnames';
import { identity } from '@cutting/util';
import { StandardProps } from '../../../types';
import styles from './Button.module.scss';

export type ButtonStyle = 'primary' | 'secondary' | 'inverse';

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
  ariaLabel,
  ariaLabelledBy,
  dataSelector,
  ...rest
}) => {
  const primary = buttonStyle === 'primary';
  const secondary = buttonStyle === 'secondary';
  const inverse = buttonStyle === 'inverse';

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
