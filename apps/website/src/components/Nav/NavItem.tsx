import { Box } from '@cutting/component-library';
import type { ResponsiveSpace } from '@cutting/component-library';
import type { ReactNode } from 'react';

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
