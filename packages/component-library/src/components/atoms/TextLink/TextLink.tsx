import type { DetailedHTMLProps, AnchorHTMLAttributes, MouseEventHandler } from 'react';
import { useMemo } from 'react';
import cs from 'classnames';
import { identity } from '@cutting/util';
import type { StandardProps, Taggable } from '~/types';
import type { ButtonStyle } from './../../atoms/Button/Button.css';
import type { TextProps } from '../Text/Text';
import { Text } from '../Text/Text';
import * as styles from './TextLink.css';
import * as typographyStyles from '../../../style/typography/typography.css';

export type TextLinkProps = StandardProps<
  DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>
> & {
  Component?: Taggable<TextLinkProps>;
  onClick?: MouseEventHandler;
  buttonStyle?: ButtonStyle;
  ariaLabel?: string;
  ariaLabelledBy?: string;
  underline?: boolean;
  external?: boolean;
  blank?: boolean;
} & TextProps;

export const getLinkStyles = (): string => cs(styles.base, typographyStyles.fontWeight.medium);

export function TextLink({
  Component = `a`,
  onClick = identity,
  className,
  children,
  title,
  dataSelector,
  ariaLabel,
  ariaLabelledBy,
  underline = true,
  external = false,
  blank = true,
  href,
  ...rest
}: TextLinkProps): JSX.Element {
  const linkStyles = useMemo(() => getLinkStyles(), []);
  return (
    <Component
      href={href}
      className={cs(linkStyles, className, { [styles.underline]: underline })}
      onClick={onClick}
      title={title}
      data-testid={dataSelector}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
      rel={external ? 'noopener noreferrer' : undefined}
      target={external && blank ? '_blank' : ''}
      {...rest}
    >
      {typeof children === 'string' ? <Text {...rest}>{children}</Text> : children}
    </Component>
  );
}
