import type { NavLinkProps } from 'react-router-dom';
import type { Taggable } from '@cutting/component-library';
import { useGetTextStyles } from '@cutting/component-library';
import { Text, type TextProps } from '@cutting/component-library';
import { NavLink } from 'react-router-dom';
import cs from 'classnames';
import * as styles from './TextNavLink.css';

type Props = NavLinkProps & { Component?: Taggable<NavLinkProps> } & Omit<TextProps, 'className'>;

function TextNavLinkWrapper({ Component = NavLink, className, ...props }: Props): JSX.Element {
  const linkStyles = useGetTextStyles();
  const classes =
    typeof className === 'function'
      ? (p: { isActive: boolean; isPending: boolean }) => cs(className(p), linkStyles, styles.main)
      : cs(className, linkStyles, styles.main);

  return <Component className={classes} {...props} />;
}

export function TextNavLink({ size, weight, ...props }: Props): JSX.Element {
  return (
    <Text size={size} weight={weight} tone="link">
      <TextNavLinkWrapper {...props} />
    </Text>
  );
}
