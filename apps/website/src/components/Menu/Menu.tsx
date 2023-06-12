import type { ReactElement } from 'react';
import { Children, useMemo, useState } from 'react';
import * as styles from './Menu.css';
import { Box, type BoxProps } from '@cutting/component-library';
import cs from 'classnames';
import Hamburger from 'hamburger-react';
import type { MenuItemProps } from './MenuItem';

export interface MenuState {
  isExpanded: boolean;
}

type MenuProps = Pick<BoxProps, 'width' | 'display' | 'justifyContent' | 'alignItems' | 'className'> & {
  children: ReactElement<MenuItemProps>;
};

export function Menu({
  width = 'full',
  display = 'flex',
  justifyContent = { mobile: 'flexStart', desktop: 'center' },
  alignItems = 'center',
  children,
}: MenuProps): JSX.Element {
  const [open, setOpen] = useState(false);
  const desktopItems = useMemo(
    () =>
      Children.toArray(children.props.children)
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .filter((m: any) => m.props.display === 'Always')
        .map((m) => <>{m}</>),
    [children.props.children],
  );
  const mobileMenuItems = useMemo(
    () =>
      Children.toArray(children.props.children)
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .filter((m: any) => m.props.display !== 'Always')
        .map((m) => <>{m}</>),
    [children.props.children],
  );

  return (
    <Box component="nav" width={width} className={styles.container}>
      <Box component="ul" display={display} justifyContent={justifyContent} alignItems={alignItems}>
        <>
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
        </>
      </Box>
    </Box>
  );
}
