import React from 'react';

export interface ExternalLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  dataSelector?: string;
  blank?: boolean;
}

export const ExternalLink: React.SFC<ExternalLinkProps> = ({
  className,
  href,
  dataSelector,
  blank = true,
  children,
  ...rest
}: ExternalLinkProps) => (
  <a href={href} rel="noopener noreferrer" target={blank ? '_blank' : ''} className={className} {...rest}>
    {children}
  </a>
);

ExternalLink.defaultProps = {
  dataSelector: 'external-link'
};
