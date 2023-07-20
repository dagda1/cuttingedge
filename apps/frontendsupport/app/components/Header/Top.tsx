import type { NavLinkProps } from '@remix-run/react';
import { Nav, NavItem, NavItems } from '@cutting/component-library';
import { CTAButton } from '../CTAButton/CTAButton';
import type { ReactNode } from 'react';
import { useCallback, useState } from 'react';
import { TextNavLink } from '../TextNavLink/TextNavLink';

const MenuItems: NavLinkProps[] = [
  { to: '/services/home', children: 'Services' },
  { to: '/works', children: 'Works' },
  { to: '/works', children: 'Testimonials' },
  { to: '/posts', children: 'Blog' },
];

export function TopNav(): JSX.Element {
  const [open, setOpen] = useState(false);
  const toggle = useCallback(() => setOpen(!open), [open]);

  return (
    <Nav open={open} toggle={toggle} hamburgerVariant="light">
      <NavItems>
        <NavItem display="Always">
          <TextNavLink size="standard" to={'/'}>
            Frontend Support
          </TextNavLink>
        </NavItem>
        {MenuItems.map(({ to, children }, i) => (
          <NavItem display="SubmenuMobile" key={i}>
            <TextNavLink to={to}>{children as ReactNode}</TextNavLink>
          </NavItem>
        ))}
        <NavItem display="Always">
          <CTAButton link="/contact">GET IN TOUCH</CTAButton>
        </NavItem>
      </NavItems>
    </Nav>
  );
}
