import { default as NextLink } from 'next/link';
import type { AnchorHTMLAttributes } from 'react';

export function Link({ href, children, ...rest }: AnchorHTMLAttributes<HTMLAnchorElement>): JSX.Element {
  const isInternalLink = href && href.startsWith('/');
  const isAnchorLink = href && href.startsWith('#');

  if (isInternalLink) {
    return (
      <NextLink href={href}>
        <a {...rest}>{children}</a>
      </NextLink>
    );
  }

  if (isAnchorLink) {
    return (
      <a href={href} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <a target="_blank" rel="noopener noreferrer" href={href} {...rest}>
      {children}
    </a>
  );
}
