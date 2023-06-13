import type { ReactNode } from 'react';
import { Box } from '../Box/Box';
import type { ResponsiveSpace } from '~/style/atoms/atoms';

export type NavItemDisplay = 'SubmenuMobile' | 'Always';

export type NavItemProps = { marginRight?: ResponsiveSpace } & {
  children: ReactNode;
  display: NavItemDisplay;
};

export function NavItem({
  children,
  marginRight = { mobile: 'xxsmall', desktop: 'medium' },
  display = 'SubmenuMobile',
}: NavItemProps): JSX.Element {
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
