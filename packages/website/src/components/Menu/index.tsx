import { Heading } from '@cutting/component-library';
import cs from 'classnames';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import * as urls from '../../urls';
import { MobileNavButton } from '../MobileNavButton';
import { Cow } from '../Svg';
import { MenuItems } from './MenuItems';

const styles = require('./Menu.scss');

export interface MenuState {
  isExpanded: boolean;
}

export const Menu: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const collapse = () => setIsExpanded(false);
  const toggleIsExpanded = () => setIsExpanded(!isExpanded);

  return (
    <nav className={styles.container}>
      <div className={styles.full}>
        <ul>
          <li className={styles.logo__container}>
            <NavLink to={urls.Home}>
              <Cow />
            </NavLink>
          </li>
          <li>
            <Heading level={2}>Paul Cowan</Heading>
          </li>
          <li className={styles.mobile__button__container}>
            <MobileNavButton onClick={toggleIsExpanded} isActive={isExpanded} />
          </li>
          <MenuItems collapse={collapse} />
        </ul>
      </div>
      <div className={cs(styles.expandable, { [styles.expanded]: isExpanded })}>
        <MenuItems collapse={collapse} />
      </div>
    </nav>
  );
};
