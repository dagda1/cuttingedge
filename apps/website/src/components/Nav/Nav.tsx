import type { ReactElement } from 'react';
import { Children, Fragment, useMemo, useState } from 'react';
import * as styles from './Nav.css';
import { Box, type BoxProps } from '@cutting/component-library';
import cs from 'classnames';
import Hamburger from 'hamburger-react';
import type { NavItemProps } from './NavItem';
import { NavItems } from './NavItems';

export interface MenuState {
  isExpanded: boolean;
}

type NavProps = Pick<BoxProps, 'width' | 'display' | 'justifyContent' | 'alignItems' | 'className'> & {
  children: ReactElement<NavItemProps>;
};

export function Nav({
  width = 'full',
  display = 'flex',
  justifyContent = { mobile: 'flexStart', desktop: 'center' },
  alignItems = 'center',
  children,
}: NavProps): JSX.Element {
  const [open, setOpen] = useState(false);
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
      <Box component="ul" display={display} justifyContent={justifyContent} alignItems={alignItems}>
        <NavItems>
          {desktopItems}
          <Box
            component="li"
            display={{ mobile: 'block', desktop: 'none' }}
            marginRight={{ mobile: 'xxsmall', desktop: 'medium' }}
            className={styles.currentColor}
          >
            <Hamburger toggle={setOpen} toggled={open} />
          </Box>
          {mobileMenuItems}
          <Box
            component="ul"
            padding={{
              mobile: 'xsmall',
              desktop: 'none',
            }}
            className={cs(styles.expandable, { [styles.expanded]: open })}
          >
            {mobileMenuItems}
          </Box>
        </NavItems>
      </Box>
    </Box>
  );
}
