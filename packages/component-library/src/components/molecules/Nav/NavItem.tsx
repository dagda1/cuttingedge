import type { ReactNode } from 'react';

import type { ResponsiveSpace } from '~/style/atoms/atoms';

import { Box } from '../Box/Box';

export type NavItemDisplay = 'SubmenuMobile' | 'Always';

export type NavItemProps = { marginRight?: ResponsiveSpace } & {
  children: ReactNode;
  display: NavItemDisplay;
  className?: string;
};

export function NavItem({
  children,
  className,
  marginRight = { mobile: 'xxsmall', desktop: 'medium' },
  display = 'SubmenuMobile',
}: NavItemProps): JSX.Element {
  return (
    <Box
      className={className}
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
