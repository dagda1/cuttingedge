import { Box, Heading, Nav, NavItem, NavItems, ResponsiveImage } from '@cutting/component-library';
import cs from 'classnames';
import { useCallback, useState } from 'react';
import { NavLink } from 'react-router-dom';

import cow from '~/assets/images/cow-logo.png';
import cowMobile from '~/assets/images/cow-mobile.png';
import { bannerPages } from '~/routes';
import * as urls from '~/urls';

import { TextNavLink } from '../TextNavLink/TextNavLink';
import * as styles from './Nav.css';
import { VizPopover } from './VizPopover';

export interface MenuState {
  isExpanded: boolean;
}

export function TopNav(): JSX.Element {
  const [navOpen, setNavOpen] = useState(false);
  const toggle = useCallback(() => setNavOpen(!navOpen), [navOpen]);

  const hideExpanded = useCallback(() => setNavOpen(false), []);

  return (
    <Nav open={navOpen} toggle={toggle} hamburgerVariant="light">
      <NavItems>
        <NavItem display="Always">
          <NavLink aria-label="home" to={urls.Home}>
            <ResponsiveImage
              mobile={{ src: cowMobile, dimensions: { width: 75, height: 75 } }}
              tablet={{ src: cow, dimensions: { width: 100, height: 100 } }}
              src={cow}
              alt="cutting-edge logo"
            />
          </NavLink>
        </NavItem>
        <NavItem display="Always">
          <TextNavLink aria-label="home" to={urls.Home}>
            <Heading level="2">Paul Cowan</Heading>
          </TextNavLink>
        </NavItem>
        <NavItem display="Always">
          <Box
            className={styles.contact}
            borderRadius="full"
            paddingX={{ mobile: 'xsmall', desktop: 'medium' }}
            paddingY={{ mobile: 'medium', desktop: 'large' }}
          >
            <TextNavLink
              to={urls.ContactMe}
              className={({ isActive }) => (isActive ? styles.active : styles.contact)}
              size="large"
            >
              Contact
            </TextNavLink>
          </Box>
        </NavItem>
        {bannerPages.map((page, i) => (
          <NavItem display="SubmenuMobile" key={i}>
            <TextNavLink
              to={page.path?.includes('*') ? page.path.slice(0, -2) : page.path}
              className={({ isActive }) => cs(page.className, { [styles.active]: isActive })}
              onClick={toggle}
            >
              {page.heading}
            </TextNavLink>
          </NavItem>
        ))}
        <NavItem display="SubmenuMobile">
          <VizPopover hideExpanded={hideExpanded} />
        </NavItem>
      </NavItems>
    </Nav>
  );
}
