import cs from 'classnames';
import { useState } from 'react';
import * as urls from '~/urls';
import { MobileNavButton } from '../MobileNavButton';
import { MenuItems, MobileMenuItems } from './MenuItems';

import * as styles from './Menu.css';
import { Cow } from '~/components/Svg/Cow';
import { Heading } from '@cutting/component-library';
import { TextNavLink } from '../TextNavLink/TextNavLink';

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
            <TextNavLink aria-label="home" to={urls.Home}>
              <Cow />
            </TextNavLink>
          </li>
          <li>
            <Heading level="2">
              <TextNavLink aria-label="home" className={styles.name} to={urls.Home}>
                Paul Cowan
              </TextNavLink>
            </Heading>
          </li>
          <li className={cs(styles['contact'], styles.horizontal)}>
            <TextNavLink
              to={urls.ContactMe}
              className={({ isActive }) => (isActive ? styles.active : '')}
              onClick={collapse}
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
