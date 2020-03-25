import React from 'react';

export interface ExternalLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  dataSelector?: string;
  blank?: boolean;
  ariaLabel?: string;
  ariaLabelledBy?: string;
}

export const ExternalLink: React.FC<ExternalLinkProps> = ({
  className,
  href,
  dataSelector,
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

ExternalLink.defaultProps = {
  dataSelector: 'external-link',
};
