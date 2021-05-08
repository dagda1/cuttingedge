import type { FC } from 'react';
import { Heading } from '@cutting/component-library';
import cs from 'classnames';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import * as urls from '../../urls';
import { MobileNavButton } from '../MobileNavButton';
import { Cow } from '../Svg';
import { MenuItems, MobileMenuItems } from './MenuItems';
import * as Urls from 'src/urls';

import styles from './Menu.module.scss';

export interface MenuState {
  isExpanded: boolean;
}

export const Menu: FC = () => {
  const [expanded, setExpanded] = useState(false);

  const collapse = (): void => setExpanded(false);
  const toggleIsExpanded = (): void => {
    setExpanded(!expanded);
  };

  return (
    <nav className={styles.container}>
      <div className={styles.full}>
        <ul>
          <li className={styles.logo__container}>
            <NavLink aria-label="home" to={urls.Home}>
              <Cow />
            </NavLink>
          </li>
          <li>
            <Heading level={2}>
              <NavLink aria-label="home" className={styles.name} to={urls.Home}>
                Paul Cowan
              </NavLink>
            </Heading>
          </li>
          <li className={cs(styles['contact'], styles.horizontal)}>
            <NavLink to={Urls.ContactMe} activeClassName={styles.active} onClick={collapse}>
              Contact
            </NavLink>
          </li>
          <li className={styles.mobile__button__container}>
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
};
