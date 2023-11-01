import type { NavLinkProps } from 'react-router-dom';
import type { Taggable } from '@cutting/component-library';
import { useGetTextStyles } from '@cutting/component-library';
import { Text, type TextProps } from '@cutting/component-library';
import { NavLink } from 'react-router-dom';
import cs from 'classnames';
import { forwardRef } from 'react';

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
