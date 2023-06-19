import type { ReactNode } from 'react';
import React, { forwardRef, useCallback } from 'react';
import type { ButtonStyle } from '@cutting/component-library';
import { ButtonLink } from '@cutting/component-library';
import type { LinkProps } from 'next/link';
import Link from 'next/link';
import cs from 'classnames';
import * as styles from './LinkWrapper.css';
import { pageview } from '../../util/gtm';

export type LinkWrapperProps = {
  href: string;
  children: ReactNode;
  linkType: 'button' | 'anchor';
  className?: string;
  onClick?: React.MouseEventHandler;
  buttonStyle?: ButtonStyle;
} & Pick<LinkProps, 'as'>;

// eslint-disable-next-line react/display-name
export const ButtonLinkWrapper = forwardRef<HTMLDivElement, Omit<LinkWrapperProps, 'linkType'>>(
  (props, ref): JSX.Element => (
    <div ref={ref}>
      <ButtonLink {...props} />
    </div>
  ),
);

// eslint-disable-next-line react/display-name
export const AnchorLinkWrapper = forwardRef<HTMLSpanElement, Omit<LinkWrapperProps, 'linkType'>>(
  (props, ref): JSX.Element => (
    <span ref={ref}>
      {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
      <a {...props} />
    </span>
  ),
);

export function LinkWrapper({ className, linkType, as, onClick, ...props }: LinkWrapperProps): JSX.Element {
  const Tag = linkType === 'button' ? ButtonLinkWrapper : AnchorLinkWrapper;
  const clickHandler = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      pageview(props.href);
      onClick?.(e);
    },
    [onClick, props.href],
  );
  return (
    <Link href={props.href} as={as} passHref legacyBehavior>
      <Tag onClick={clickHandler} {...props} className={cs(styles.root, className)} />
    </Link>
  );
}
