import type { FC } from 'react';
import { Heading } from '@cutting/component-library';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import * as urls from '../../urls';
import { MobileNavButton } from '../MobileNavButton';
import { MenuItems, MobileMenuItems } from './MenuItems';

import { Cow } from '../Svg/Cow';

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
    <nav>
      <div>
        <ul>
          <li>
            <NavLink aria-label="home" to={urls.Home}>
              <Cow />
            </NavLink>
          </li>
          <li>
            <Heading level={2}>
              <NavLink aria-label="home" to={urls.Home}>
                Paul Cowan
              </NavLink>
            </Heading>
          </li>
          <li>
            <NavLink to={urls.ContactMe} onClick={collapse}>
              Contact
            </NavLink>
          </li>
          <li>
            <MobileNavButton onClick={toggleIsExpanded} isActive={expanded} />
          </li>
          <MenuItems collapse={collapse} />
        </ul>
      </div>
      <div>
        <ul>
          <MobileMenuItems collapse={collapse} />
        </ul>
      </div>
    </nav>
  );
};
