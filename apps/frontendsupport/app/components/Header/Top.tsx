import { Box, Nav, NavItem, NavItems, vars } from '@cutting/component-library';
import { NavLink } from '@remix-run/react';
import { Image } from '@unpic/react';
import { useCallback, useState } from 'react';

import { CTAButton } from '../CTAButton/CTAButton.js';
import { TextNavLink } from '../TextNavLink/TextNavLink.js';
import * as styles from './Top.css';

export function TopNav(): JSX.Element {
  const [open, setOpen] = useState(false);
  const toggle = useCallback(() => setOpen(!open), [open]);
  return (
    <Box width="full" maxWidth="large" className="top-nav">
      <Nav open={open} toggle={toggle} justifyContent="spaceAround" hamburgerVariant="light">
        <NavItems>
          <NavItem display="Always">
            <Box display="flex" alignItems="center" width="full" className={styles.logo}>
              <NavLink to="/" style={{ position: 'relative', top: '-5px', marginRight: vars.space['medium'] }}>
                <Image
                  src="https://res.cloudinary.com/ddospxsc8/image/upload/v1690799896/fire_qfnfwc.png"
                  alt="Frontend Rescue"
                  width={38}
                  height={45}
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
        </NavItems>
      </Nav>
    </Box>
  );
}
