import * as urls from '~/urls';
import * as styles from './Menu.css';
import { Box, Heading, ResponsiveImage, Text } from '@cutting/component-library';
import { NavLink } from 'react-router-dom';
import { TextNavLink } from '../TextNavLink/TextNavLink';
import cow from '~/assets/images/cow-logo.png';
import cowMobile from '~/assets/images/cow-mobile.png';
import cs from 'classnames';
import { Menu as MNU } from './Menu';
import { MenuItem } from './MenuItem';
import { bannerPages } from '~/routes';
import { Menu as VizMenu, MenuItem as VizMenuItem, MenuButton } from '@szhsin/react-menu';

export interface MenuState {
  isExpanded: boolean;
}

export function Menu(): JSX.Element {
  return (
    <>
      <MNU>
        <>
          <MenuItem display="Always">
            <NavLink aria-label="home" to={urls.Home}>
              <ResponsiveImage
                mobile={{ src: cowMobile, dimensions: { width: 75, height: 75 } }}
                tablet={{ src: cow, dimensions: { width: 100, height: 100 } }}
                src={cow}
                alt="cutting-edge logo"
              />
            </NavLink>
          </MenuItem>
          <MenuItem display="Always">
            <TextNavLink aria-label="home" to={urls.Home}>
              <Heading level="2">Paul Cowan</Heading>
            </TextNavLink>
          </MenuItem>
          <MenuItem display="Always">
            <Box
              className={styles.contact}
              borderRadius="full"
              paddingX={{ mobile: 'xsmall', desktop: 'medium' }}
              paddingY={{ mobile: 'medium', desktop: 'large' }}
            >
              <TextNavLink
                to={urls.ContactMe}
                className={({ isActive }) => (isActive ? styles.active : '')}
                // onClick={collapse}
                size="large"
              >
                Contact
              </TextNavLink>
            </Box>
          </MenuItem>
          {bannerPages.map((page, i) => (
            <MenuItem display="SubmenuMobile" key={i}>
              <TextNavLink
                to={page.path?.includes('*') ? page.path.slice(0, -2) : page.path}
                className={({ isActive }) => cs(page.className, { [styles.active]: isActive })}
              >
                {page.heading}
              </TextNavLink>
            </MenuItem>
          ))}
          <MenuItem display="SubmenuMobile">
            <VizMenu
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
          </MenuItem>
        </>
      </MNU>
    </>
  );
}
