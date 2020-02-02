import React from 'react';
import { bannerPages } from '../../routes';
import cs from 'classnames';
import { Link } from '@reach/router';

const styles = require('./Menu.module.scss');

export interface MenuItemsProps {
  collapse: () => void;
}

export const MenuItems: React.FC<MenuItemsProps> = ({ collapse }) => (
  <>
    {bannerPages.map(page => (
      <li key={page.heading} className={cs(styles.horizontal)}>
        <Link to={page.path} onClick={collapse}>
          {page.heading}
        </Link>
      </li>
    ))}
  </>
);
