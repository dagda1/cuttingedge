import type { DetailedHTMLProps, AnchorHTMLAttributes, MouseEventHandler } from 'react';
import cs from 'classnames';
import type { StandardProps, Taggable } from '~/types';
import type { ButtonStyle } from '~/components/atoms/Button/Button.css';
import { root, buttons } from '~/components/atoms/Button/Button.css';
import * as styles from './ButtonLink.css';
import { TextLink } from '../TextLink/TextLink';

export type ButtonLinkProps = StandardProps<
  DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>
> & {
  Component?: Taggable<ButtonLinkProps>;
  onClick?: MouseEventHandler;
  buttonStyle?: ButtonStyle;
  ariaLabel?: string;
  ariaLabelledBy?: string;
};

export function ButtonLink({ className, buttonStyle = 'primary', ...props }: ButtonLinkProps): JSX.Element {
  return <TextLink {...props} className={cs(className, root, buttons[buttonStyle], styles.main)} />;
}
