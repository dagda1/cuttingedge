import type { FC, AnchorHTMLAttributes } from 'react';

export interface ExternalLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  dataSelector?: string;
  blank?: boolean;
  ariaLabel?: string;
  ariaLabelledBy?: string;
}

export const ExternalLink: FC<ExternalLinkProps> = ({
  className,
  href,
  dataSelector = 'external-link',
  blank = true,
  children,
  ariaLabel,
  ariaLabelledBy,
  ...rest
}: ExternalLinkProps) => (
  <a
    href={href}
    data-selector={dataSelector}
    rel="noopener noreferrer"
    target={blank ? '_blank' : ''}
    className={className}
    aria-label={ariaLabel}
    aria-labelledby={ariaLabelledBy}
    {...rest}
  >
    {children}
  </a>
);
