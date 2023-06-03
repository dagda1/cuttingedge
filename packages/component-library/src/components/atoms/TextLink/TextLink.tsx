import type { DetailedHTMLProps, AnchorHTMLAttributes, MouseEventHandler } from 'react';
import cs from 'classnames';
import { identity } from '@cutting/util';
import type { StandardProps, Taggable } from '~/types';
import type { ButtonStyle } from '~/components/atoms/Button/Button.css';
import { Text } from '../Text/Text';

export type TextLinkProps = StandardProps<
  DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>
> & {
  Component?: Taggable<TextLinkProps>;
  onClick?: MouseEventHandler;
  buttonStyle?: ButtonStyle;
  ariaLabel?: string;
  ariaLabelledBy?: string;
};

export function TextLink({
  Component = `a`,
  onClick = identity,
  className,
  children,
  title,
  dataSelector,
  ariaLabel,
  ariaLabelledBy,
  href,
  ...rest
}: TextLinkProps): JSX.Element {
  return (
    <Component
      href={href}
      className={cs(className)}
      onClick={onClick}
      title={title}
      data-testid={dataSelector}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
      {...rest}
    >
      {typeof children === 'string' ? <Text>{children}</Text> : children}
    </Component>
  );
}
