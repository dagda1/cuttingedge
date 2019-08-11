import React from 'react';
import { bannerPages } from '../../routes';
import cs from 'classnames';
import { NavLink } from 'react-router-dom';

const styles = require('./Menu.scss');

export interface MenuItemsProps {
  collapse: () => void;
}

export const MenuItems: React.FC<MenuItemsProps> = ({ collapse }) => (
  <>
    {bannerPages.map((page) => (
      <li key={page.heading} className={cs(styles.horizontal)}>
        <NavLink to={page.path} activeClassName={styles.active} onClick={collapse}>
          {page.heading}
        </NavLink>
      </li>
    ))}
  </>
);
