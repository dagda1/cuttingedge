import cs from 'classnames';
import { useState } from 'react';
import * as urls from '~/urls';

import { MenuItems } from './MenuItems';

import * as styles from './Menu.css';
import { Box, Heading, ResponsiveImage } from '@cutting/component-library';
import { NavLink } from 'react-router-dom';
import { TextNavLink } from '../TextNavLink/TextNavLink';
import cow from '~/assets/images/cow-logo.png';
import cowMobile from '~/assets/images/cow-mobile.png';

export interface MenuState {
  isExpanded: boolean;
}

export function Menu(): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_expanded, setExpanded] = useState(false);

  const collapse = (): void => setExpanded(false);
  // const toggleIsExpanded = (): void => {
  //   setExpanded(!expanded);
  // };

  return (
    <Box component="nav" width="full" className={styles.container}>
      <Box component="ul" display="flex" justifyContent="center" alignItems="center">
        <Box component="li" marginRight={{ mobile: 'medium' }}>
          <NavLink aria-label="home" to={urls.Home}>
            <ResponsiveImage
              mobile={{ src: cowMobile, dimensions: { width: 75, height: 75 } }}
              tablet={{ src: cow, dimensions: { width: 100, height: 100 } }}
              src={cow}
              alt="cutting-edge logo"
            />
          </NavLink>
        </Box>
        <Box component="li" marginRight={{ mobile: 'medium' }}>
          <TextNavLink aria-label="home" to={urls.Home}>
            <Heading level="2">Paul Cowan</Heading>
          </TextNavLink>
        </Box>
        <Box
          component="li"
          className={cs(styles.contact, styles.horizontal)}
          marginRight={{ mobile: 'medium' }}
          borderRadius="full"
          paddingX={{ mobile: 'small', desktop: 'medium' }}
          paddingY={{ mobile: 'medium', desktop: 'large' }}
        >
          <TextNavLink
            to={urls.ContactMe}
            className={({ isActive }) => (isActive ? styles.active : '')}
            onClick={collapse}
            size="large"
          >
            Contact
          </TextNavLink>
        </Box>
        {/* <li className={styles.mobileButtonContainer}>
          <MobileNavButton onClick={toggleIsExpanded} isActive={expanded} />
        </li> */}
        <MenuItems collapse={collapse} />
      </Box>
      {/* <ul>
        <MobileMenuItems collapse={collapse} />
      </ul> */}
    </Box>
  );
}
