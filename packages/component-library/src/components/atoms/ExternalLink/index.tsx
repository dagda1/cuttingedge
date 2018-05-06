import * as React from 'react';

export interface ExternalLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  dataSelector?: string;
}

export const ExternalLink: React.SFC<ExternalLinkProps> = ({
  className,
  href,
  dataSelector,
  children,
  ...rest
}: ExternalLinkProps) => (
  <a href={href} rel="noopener noreferrer" target="_blank" className={className} {...rest}>
    {children}
  </a>
);

ExternalLink.defaultProps = {
  dataSelector: 'external-link'
};
