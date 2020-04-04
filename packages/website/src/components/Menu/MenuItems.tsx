import React from 'react';
import { bannerPages } from '../../routes';
import cs from 'classnames';
import { NavLink } from 'react-router-dom';
import { Covid19, Deaths, IncreaseInDeaths } from 'src/urls';

const styles = require('./Menu.module.scss');

export interface MenuItemsProps {
  collapse: () => void;
}

export const MenuItems: React.FC<MenuItemsProps> = ({ collapse }) => (
  <>
    {bannerPages.map(page => (
      <li key={page.heading} className={cs(styles.horizontal)}>
        <NavLink
          to={page.path}
          activeClassName={styles.active}
          onClick={collapse}
        >
          {page.heading}
        </NavLink>
      </li>
    ))}
  </>
);

export const MobileMenuItems: React.FC<MenuItemsProps> = ({ collapse }) => (
  <>
    <MenuItems collapse={collapse} />
    {[
      {
        path: Covid19,
        heading: 'COVID-19 Rate of change',
      },
      { path: Deaths, heading: 'COVID-19 Total deaths' },
      {
        path: IncreaseInDeaths,
        heading: 'COVID-19 Daily increase in deaths',
      },
    ].map(page => (
      <li key={page.heading} className={cs(styles.horizontal, styles.mobile)}>
        <NavLink
          to={page.path}
          activeClassName={styles.active}
          onClick={collapse}
        >
          {page.heading}
        </NavLink>
      </li>
    ))}
  </>
);
