import { Heading } from '@cutting/component-library';
import cs from 'classnames';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import * as urls from '../../urls';
import { MobileNavButton } from '../MobileNavButton';
import { Cow } from '../Svg';
import { MenuItems, MobileMenuItems } from './MenuItems';

const styles = require('./Menu.module.scss');

export interface MenuState {
  isExpanded: boolean;
}

export const Menu: React.FC = () => {
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
            <Heading level={2}>Paul Cowan</Heading>
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
