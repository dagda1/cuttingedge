import type { NavLinkProps } from '@remix-run/react';
import { NavLink } from '@remix-run/react';
import { Nav, NavItem, NavItems } from '@cutting/component-library';
import { CTAButton } from '../CTAButton/CTAButton';
import { useCallback, useState } from 'react';

const MenuItems: NavLinkProps[] = [
  { to: '/', children: 'Frontend Support' },
  { to: '/posts', children: 'Blog' },
];

export function TopNav(): JSX.Element {
  const [open, setOpen] = useState(false);
  const toggle = useCallback(() => setOpen(!open), [open]);

  return (
    <Nav open={open} toggle={toggle} hamburgerVariant="light">
      <NavItems>
        <NavItem display="Always">
          <CTAButton link="/contact">GET IN TOUCH</CTAButton>
        </NavItem>
        {MenuItems.map(({ to, children }, i) => (
          <NavItem display="SubmenuMobile" key={i}>
            <NavLink to={to}>{children}</NavLink>
          </NavItem>
        ))}
      </NavItems>
    </Nav>
  );
}
