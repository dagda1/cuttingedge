import type { DetailedHTMLProps, AnchorHTMLAttributes, MouseEventHandler } from 'react';
import cs from 'classnames';
import { identity } from '@cutting/util';
import type { StandardProps } from '../../../types';
import type { ButtonStyle } from '../Button/Button.css';
import { root, buttons } from '../Button/Button.css';
import * as styles from './ButtonLink.css';

export type ButtonLinkProps = StandardProps<
  DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>
> & {
  onClick?: MouseEventHandler;
  buttonStyle?: ButtonStyle;
  ariaLabel?: string;
  ariaLabelledBy?: string;
};

export function ButtonLink({
  onClick = identity,
  className,
  buttonStyle = 'primary',
  children,
  title,
  dataSelector,
  ariaLabel,
  ariaLabelledBy,
  href,
  ...rest
}: ButtonLinkProps): JSX.Element {
  return (
    <a
      href={href}
      className={cs(className, root, buttons[buttonStyle], styles.main)}
      onClick={onClick}
      title={title}
      data-selector={dataSelector}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
      {...rest}
    >
      {children}
    </a>
  );
}
