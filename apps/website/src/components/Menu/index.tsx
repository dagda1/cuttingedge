import cs from 'classnames';
import { useState } from 'react';
import * as urls from '~/urls';
import { MobileNavButton } from '../MobileNavButton';
import { MenuItems, MobileMenuItems } from './MenuItems';

import * as styles from './Menu.css';
import { Heading } from '@cutting/component-library';
import { NavLink } from 'react-router-dom';
import { TextNavLink } from '../TextNavLink/TextNavLink';
import cow from '~/assets/images/cow-logo.png';

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
    <nav className={styles.container}>
      <div className={styles.full}>
        <ul>
          <li className={styles.logoContainer}>
            <NavLink aria-label="home" to={urls.Home}>
              <img src={cow} alt="cutting-edge logo" />
            </NavLink>
          </li>
          <li>
            <TextNavLink aria-label="home" className={styles.name} to={urls.Home}>
              <Heading level="2">Paul Cowan</Heading>
            </TextNavLink>
          </li>
          <li className={cs(styles.contact, styles.horizontal)}>
            <TextNavLink
              to={urls.ContactMe}
              className={({ isActive }) => (isActive ? styles.active : '')}
              onClick={collapse}
              size="large"
            >
              Contact
            </TextNavLink>
          </li>
          <li className={styles.mobileButtonContainer}>
            <MobileNavButton onClick={toggleIsExpanded} isActive={expanded} />
          </li>
          <MenuItems collapse={collapse} />
        </ul>
      </div>
      <div className={cs(styles.expandable, { [styles.expanded]: expanded })}>
        <ul>
          <MobileMenuItems collapse={collapse} />
        </ul>
      </div>
    </nav>
  );
}
