import type { DetailedHTMLProps, AnchorHTMLAttributes, MouseEventHandler } from 'react';
import cs from 'classnames';
import { identity } from '@cutting/util';
import type { StandardProps, Taggable } from '~/types/index';
import type { ButtonStyle } from '~/components/atoms/Button/Button.css';
import { root, buttons } from '~/components/atoms/Button/Button.css';
import * as styles from './ButtonLink.css';
import { Text } from '../Text/Text';

type ButtonTone = 'critical' | 'neutral';

export type ButtonLinkProps = StandardProps<
  DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>
> & {
  Component?: Taggable<ButtonLinkProps>;
  onClick?: MouseEventHandler;
  buttonStyle?: ButtonStyle;
  ariaLabel?: string;
  ariaLabelledBy?: string;
  tone?: ButtonTone;
};

export function ButtonLink({
  Component = `a`,
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
    <Component
      href={href}
      className={cs(className, root, buttons[buttonStyle], styles.main)}
      onClick={onClick}
      title={title}
      data-testid={dataSelector}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
      {...rest}
    >
      <Text tone={buttonStyle}>{children}</Text>
    </Component>
  );
}
