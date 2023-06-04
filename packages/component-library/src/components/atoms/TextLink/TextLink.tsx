import type { DetailedHTMLProps, AnchorHTMLAttributes, MouseEventHandler } from 'react';
import { useMemo } from 'react';
import cs from 'classnames';
import { identity } from '@cutting/util';
import type { StandardProps, Taggable } from '~/types';
import type { ButtonStyle } from '~/components/atoms/Button/Button.css';
import { Text } from '../Text/Text';
import * as styles from './TextLink.css';
import * as typographyStyles from '~/style/typography/typography.css';

export type TextLinkProps = StandardProps<
  DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>
> & {
  Component?: Taggable<TextLinkProps>;
  onClick?: MouseEventHandler;
  buttonStyle?: ButtonStyle;
  ariaLabel?: string;
  ariaLabelledBy?: string;
};

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
  href,
  ...rest
}: TextLinkProps): JSX.Element {
  const linkStyles = useMemo(() => getLinkStyles(), []);
  return (
    <Component
      href={href}
      className={cs(linkStyles, className)}
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
