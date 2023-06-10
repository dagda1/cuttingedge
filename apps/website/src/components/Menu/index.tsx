import cs from 'classnames';
import { useState } from 'react';
import * as urls from '~/urls';
import { MobileNavButton } from '../MobileNavButton';
import { MenuItems, MobileMenuItems } from './MenuItems';

import * as styles from './Menu.css';
import { Box, Heading, Divider } from '@cutting/component-library';
import { NavLink } from 'react-router-dom';
import { TextNavLink } from '../TextNavLink/TextNavLink';
import cow from '~/assets/images/cow-logo.png';
import cowMobile from '~/assets/images/cow-mobile.png';

export interface MenuState {
  isExpanded: boolean;
}

export function Menu(): JSX.Element {
  const [expanded, setExpanded] = useState(false);

  const collapse = (): void => setExpanded(false);
  const toggleIsExpanded = (): void => {
    setExpanded(!expanded);
  };

  return (
    <Box component="nav" width="full">
      <Box
        component="ul"
        display="flex"
        justifyContent="center"
        alignItems="center"
        style={{ border: '10px solid green' }}
      >
        <Box component="li" marginRight={{ mobile: 'medium' }}>
          <NavLink aria-label="home" to={urls.Home}>
            <img
              srcSet={`${cowMobile} 75w, ${cow} 100w`}
              sizes={`(max-width: 740px) 75px,
         100px`}
              src={cow}
              alt="cutting-edge logo"
            />
          </NavLink>
        </Box>
        <Box component="li" marginRight={{ mobile: 'medium' }}>
          <TextNavLink aria-label="home" className={styles.name} to={urls.Home}>
            <Heading level="2">Paul Cowan</Heading>
          </TextNavLink>
        </Box>
        <Box component="li" className={cs(styles.contact, styles.horizontal)} marginRight={{ mobile: 'medium' }}>
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
