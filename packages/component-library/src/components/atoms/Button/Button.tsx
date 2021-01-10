import type { FC, DetailedHTMLProps, ButtonHTMLAttributes, MouseEventHandler } from 'react';
import cs from 'classnames';
import { identity } from '@cutting/util';
import { StandardProps } from '../../../types';
// import styles from './Button.module.scss';

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
  // const primary = buttonStyle === 'primary';
  // const secondary = buttonStyle === 'secondary';
  // const inverse = buttonStyle === 'inverse';

  console.dir(className, buttonStyle);

  return (
    <button
      // className={cs(className, styles.default, {
      //   [styles.disabled]: disabled,
      //   [styles.inverse]: inverse,
      //   [styles.primary]: primary,
      //   [styles.secondary]: secondary,
      // })}
      className={cs(
        className,
        'bg-blue-500',
        'hover:bg-blue-700',
        'text-white',
        'font-bold',
        'py-2',
        'px-4',
        'rounded',
      )}
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
