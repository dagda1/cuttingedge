import type { ReactElement } from 'react';
import { Children, Fragment, useMemo } from 'react';
import * as styles from './Nav.css';
import cs from 'classnames';
import type { NavItemProps } from './NavItem';
import { NavItems } from './NavItems';
import { Box, type BoxProps } from '../Box/Box';
import type { HamburgerVariants } from '../Hamburger/Hamburger';
import { Hamburger } from '../Hamburger/Hamburger';

export interface MenuState {
  isExpanded: boolean;
}

type NavProps = Pick<BoxProps, 'width' | 'display' | 'justifyContent' | 'alignItems' | 'className'> & {
  children: ReactElement<NavItemProps>;
  hamburgerVariant?: HamburgerVariants;
  open: boolean;
  toggle(open: boolean): void;
};

export function Nav({
  width = 'full',
  display = 'flex',
  justifyContent = { mobile: 'spaceBetween', desktop: 'center' },
  alignItems = 'center',
  hamburgerVariant = 'dark',
  open,
  toggle,
  children,
}: NavProps): JSX.Element {
  const desktopItems = useMemo(
    () =>
      Children.toArray(children.props.children)
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .filter((m: any) => m.props.display === 'Always')
        .map((m, i) => <Fragment key={i}>{m}</Fragment>),
    [children.props.children],
  );
  const mobileMenuItems = useMemo(
    () =>
      Children.toArray(children.props.children)
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .filter((m: any) => m.props.display !== 'Always')
        .map((m, i) => <Fragment key={i}>{m}</Fragment>),
    [children.props.children],
  );

  return (
    <Box component="nav" width={width} className={styles.container}>
      <Box
        className={styles.navList}
        component="ul"
        display={display}
        justifyContent={justifyContent}
        alignItems={alignItems}
      >
        <NavItems>
          {desktopItems}
          <Box
            component="li"
            display={{ mobile: 'block', desktop: 'none' }}
            marginRight={{ mobile: 'xxsmall', desktop: 'medium' }}
            className={styles.currentColor}
          >
            <Hamburger variant={hamburgerVariant} setOpen={toggle} open={open} />
          </Box>
          <Box
            component="ul"
            padding={{
              mobile: 'xsmall',
              desktop: 'none',
            }}
            display={{ mobile: 'flex', desktop: 'none' }}
            className={cs(styles.expandable, { [styles.expanded]: open })}
          >
            {mobileMenuItems}
          </Box>
        </NavItems>
      </Box>
    </Box>
  );
}
