import { Box } from '@cutting/component-library';
import type { ResponsiveSpace } from '@cutting/component-library';
import type { ReactNode } from 'react';

export type MenuItemDisplay = 'SubmenuMobile' | 'Always';
export type MenuItemProps = { marginRight?: ResponsiveSpace } & {
  children: ReactNode;
  display: MenuItemDisplay;
};

export function MenuItem({
  children,
  marginRight = { mobile: 'xxsmall', desktop: 'medium' },
  display = 'SubmenuMobile',
}: MenuItemProps): JSX.Element {
  return (
    <Box
      display={{
        mobile: display === 'SubmenuMobile' ? 'none' : 'block',
        desktop: 'block',
      }}
      component="li"
      marginRight={marginRight}
    >
      {children}
    </Box>
  );
}
