import type { NavLinkProps } from 'react-router-dom';
import type { Taggable } from '@cutting/component-library';
import { useGetTextStyles } from '@cutting/component-library';
import { Text } from '@cutting/component-library';
import { NavLink } from 'react-router-dom';
import cs from 'classnames';

type Props = NavLinkProps & { Component?: Taggable<NavLinkProps> };

function TextNavLinkWrapper({ Component = NavLink, className, ...props }: Props): JSX.Element {
  const linkStyles = useGetTextStyles();
  const classes =
    typeof className === 'function'
      ? (p: { isActive: boolean; isPending: boolean }) => cs(className(p), linkStyles)
      : cs(className, linkStyles);

  return <Component className={classes} {...props} />;
}

export function TextNavLink(props: Props): JSX.Element {
  return (
    <Text>
      <TextNavLinkWrapper {...props} />
    </Text>
  );
}
