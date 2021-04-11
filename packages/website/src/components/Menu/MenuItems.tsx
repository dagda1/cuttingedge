import type { FC } from 'react';
import { bannerPages } from '../../routes';
import cs from 'classnames';
import { NavLink } from 'react-router-dom';
import { Covid19, Deaths, IncreaseInDeaths, RateOfChange } from 'src/urls';

import styles from './Menu.module.scss';

export interface MenuItemsProps {
  collapse: () => void;
}

export const MenuItems: FC<MenuItemsProps> = ({ collapse }) => (
  <>
    {bannerPages.map((page) => (
      <li key={page.heading} className={styles.horizontal}>
        <NavLink to={page.path} className={page.className} activeClassName={styles.active} onClick={collapse}>
          {page.heading}
        </NavLink>
      </li>
    ))}
  </>
);

export const MobileMenuItems: FC<MenuItemsProps> = ({ collapse }) => {
  return (
    <div>
      <li className={cs(styles.horizontal, styles.mobile, styles.close__button)}>
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
        {
          path: RateOfChange,
          heading: 'COVID-19 Rate of change',
        },
        { path: Deaths, heading: 'COVID-19 Total deaths' },
      ].map((page) => {
        return (
          <li key={page.heading} className={cs(styles.horizontal, styles.mobile)}>
            <NavLink to={page.path} activeClassName={styles.active} onClick={collapse}>
              {page.heading}
            </NavLink>
          </li>
        );
      })}
    </div>
  );
};
