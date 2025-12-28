import type { Taggable, TextProps } from '@cutting/component-library';
import { Text, useGetTextStyles } from '@cutting/component-library';
import cs from 'classnames';
import { forwardRef } from 'react';
import type { NavLinkProps } from 'react-router';
import { NavLink } from 'react-router';

type Props = NavLinkProps & { Component?: Taggable<NavLinkProps> } & Omit<TextProps, 'className'>;

const TextNavLinkWrapper = forwardRef<HTMLAnchorElement, Props>(({ Component = NavLink, className, ...props }, ref) => {
  const linkStyles = useGetTextStyles();
  const classes =
    typeof className === 'function'
      ? (p: { isActive: boolean; isPending: boolean; isTransitioning: boolean }) => cs(className(p), linkStyles)
      : cs(className, linkStyles);

  return <Component ref={ref} className={classes} {...props} />;
});

TextNavLinkWrapper.displayName = 'TextNavLinkWrapper';

export function TextNavLink({ size, weight, ...props }: Props): JSX.Element {
  return (
    <Text size={size} weight={weight} tone="link">
      <TextNavLinkWrapper {...props} />
    </Text>
  );
}
