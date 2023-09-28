import { NavLink, type NavLinkProps } from '@remix-run/react';
import { Box, Nav, NavItem, NavItems, vars } from '@cutting/component-library';
import { CTAButton } from '../CTAButton/CTAButton';
import type { ReactNode } from 'react';
import { useCallback, useState } from 'react';
import { TextNavLink } from '../TextNavLink/TextNavLink';
import { Image } from '@unpic/react';
import * as styles from './Top.css';

const MenuItems: NavLinkProps[] = [
  { to: '/services/home', children: 'SERVICES' },
  { to: '/testimonials', children: 'TESTIMONIALS' },
  { to: '/posts', children: 'BLOG' },
  { to: '/about', children: 'ABOUT' },
];

export function TopNav(): JSX.Element {
  const [open, setOpen] = useState(false);
  const toggle = useCallback(() => setOpen(!open), [open]);
  return (
    <Nav open={open} toggle={toggle} hamburgerVariant="light">
      <NavItems>
        <NavItem display="Always">
          <Box display="flex" alignItems="center" width="full" className={styles.logo}>
            <NavLink to="/">
              <Image
                src="https://res.cloudinary.com/ddospxsc8/image/upload/v1690799896/fire_qfnfwc.png"
                alt="Frontend Rescue"
                width={38}
                height={45}
                style={{ position: 'relative', top: '-5px', marginRight: vars.space['medium'] }}
                loading="eager"
              />
            </NavLink>
            <TextNavLink size="large" to={'/'}>
              FRONTEND RESCUE
            </TextNavLink>
          </Box>
        </NavItem>
        <NavItem display="SubmenuMobile">
          <CTAButton clickHandler={toggle} link="/contact">
            CONTACT
          </CTAButton>
        </NavItem>
        {MenuItems.map(({ to, children }, i) => (
          <NavItem display="SubmenuMobile" key={i}>
            <TextNavLink to={to} onClick={toggle}>
              {children as ReactNode}
            </TextNavLink>
          </NavItem>
        ))}
      </NavItems>
    </Nav>
  );
}
