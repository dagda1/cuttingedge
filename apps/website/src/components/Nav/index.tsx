import * as urls from '~/urls';
import * as styles from './Nav.css';
import { Box, Heading, Nav, NavItem, NavItems, ResponsiveImage, Text } from '@cutting/component-library';
import { NavLink } from 'react-router-dom';
import { TextNavLink } from '../TextNavLink/TextNavLink';
import cow from '~/assets/images/cow-logo.png';
import cowMobile from '~/assets/images/cow-mobile.png';
import cs from 'classnames';
import { bannerPages } from '~/routes';
import { Menu as VizMenu, MenuItem as VizMenuItem, MenuButton } from '@szhsin/react-menu';
import { useCallback, useState } from 'react';

export interface MenuState {
  isExpanded: boolean;
}

export function TopNav(): JSX.Element {
  const [open, setOpen] = useState(false);
  const toggle = useCallback(() => setOpen(!open), [open]);

  return (
    <Nav open={open} setOpen={toggle} hamburgerVariant="light">
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
            <TextNavLink to={urls.ContactMe} className={({ isActive }) => (isActive ? styles.active : '')} size="large">
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
          <VizMenu
            onMenuChange={({ open }) => {
              if (!open) {
                setOpen(false);
              }
            }}
            menuButton={
              <MenuButton className={styles.dropdown}>
                <Text>VIZ</Text>
              </MenuButton>
            }
          >
            <VizMenuItem className={styles.VizMenuItem}>
              <TextNavLink className={styles.submenu} to="/viz">
                SINE
              </TextNavLink>
            </VizMenuItem>
            <VizMenuItem className={styles.VizMenuItem}>
              <TextNavLink className={styles.submenu} to="/viz/function-plot">
                FUNCTIONS
              </TextNavLink>
            </VizMenuItem>
            <VizMenuItem className={styles.VizMenuItem}>
              <TextNavLink className={styles.submenu} to="/viz/sine2">
                MORE SINE
              </TextNavLink>
            </VizMenuItem>
            <VizMenuItem className={styles.VizMenuItem}>
              <TextNavLink className={styles.submenu} to="/viz/tan">
                TAN
              </TextNavLink>
            </VizMenuItem>
          </VizMenu>
        </NavItem>
      </NavItems>
    </Nav>
  );
}
