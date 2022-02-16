import type { FC } from 'react';
import { bannerPages } from '../../routes';
import cs from 'classnames';
import { NavLink } from 'react-router-dom';
import { Covid19, IncreaseInDeaths } from '../../urls';

import * as styles from './Menu.css';

export interface MenuItemsProps {
  collapse: () => void;
}

export const MenuItems: FC<MenuItemsProps> = ({ collapse }) => (
  <>
    {bannerPages.map((page) => (
      <li key={page.heading} className={styles.horizontal}>
        <NavLink
          to={page.path}
          className={({ isActive }) => page.className + (isActive ? styles.active : '')}
          onClick={collapse}
        >
          {page.heading}
        </NavLink>
      </li>
    ))}
  </>
);

export const MobileMenuItems: FC<MenuItemsProps> = ({ collapse }) => {
  return (
    <div>
      <li className={cs(styles.horizontal, styles.mobile, styles.closeButton)}>
        <button type="button" onClick={collapse}>
          X
        </button>
      </li>
      <MenuItems collapse={collapse} />
      {[
        {
          path: Covid19,
          heading: 'COVID-19 Daily increase in Scottish deaths',
        },
        {
          path: IncreaseInDeaths,
          heading: 'COVID-19 Daily increase in World deaths',
        },
      ].map((page) => {
        return (
          <li key={page.heading} className={cs(styles.horizontal, styles.mobile)}>
            <NavLink to={page.path} className={({ isActive }) => (isActive ? styles.active : '')} onClick={collapse}>
              {page.heading}
            </NavLink>
          </li>
        );
      })}
    </div>
  );
};
