import type { AnchorHTMLAttributes, PropsWithChildren } from 'react';
import cs from 'classnames';
import * as styles from './ExternalLink.css';

export interface ExternalLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  dataSelector?: string;
  blank?: boolean;
  ariaLabel?: string;
  ariaLabelledBy?: string;
}

export function ExternalLink({
  className,
  href,
  dataSelector = 'external-link',
  blank = true,
  children,
  ariaLabel,
  ariaLabelledBy,
  ...rest
}: PropsWithChildren<ExternalLinkProps>): JSX.Element {
  return (
    <a
      href={href}
      data-selector={dataSelector}
      rel="noopener noreferrer"
      target={blank ? '_blank' : ''}
      className={cs(styles.root, className)}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
      {...rest}
    >
      {children}
    </a>
  );
}
