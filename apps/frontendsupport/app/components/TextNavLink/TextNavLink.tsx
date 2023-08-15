import type { Taggable, TextProps } from '@cutting/component-library';
import { useGetTextStyles, Text } from '@cutting/component-library';
import { NavLink, type NavLinkProps } from '@remix-run/react';
import cs from 'classnames';
import * as styles from './TextNavLink.css';
import { forwardRef } from 'react';

type Props = NavLinkProps & { Component?: Taggable<NavLinkProps> } & { underline?: boolean } & Omit<
    TextProps,
    'className'
  >;

const TextNavLinkWrapper = forwardRef<HTMLAnchorElement, Props>(
  ({ Component = NavLink, className, underline, ...props }, ref) => {
    const linkStyles = useGetTextStyles();
    const classes =
      typeof className === 'function'
        ? (p: { isActive: boolean; isPending: boolean }) => cs(className(p), linkStyles, styles.main)
        : cs(className, linkStyles, styles.main, { [styles.underline]: underline });

    return <Component ref={ref} className={classes} {...props} />;
  },
);

TextNavLinkWrapper.displayName = 'TextNavLinkWrapper';

export const TextNavLink = forwardRef<HTMLAnchorElement, Props>(({ size, weight, ...props }, ref) => {
  return (
    <Text size={size} weight={weight} tone="link">
      <TextNavLinkWrapper ref={ref} {...props} />
    </Text>
  );
});

TextNavLink.displayName = 'TextNavLink';
