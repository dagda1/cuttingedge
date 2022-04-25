import { bannerPages } from '../../routes';
import cs from 'classnames';
import { NavLink } from 'react-router-dom';

import * as styles from './Menu.css';

export interface MenuItemsProps {
  collapse: () => void;
}

export function MenuItems({ collapse }: MenuItemsProps): JSX.Element {
  return (
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
}

export function MobileMenuItems({ collapse }: MenuItemsProps): JSX.Element {
  return (
    <div>
      <li className={cs(styles.horizontal, styles.mobile, styles.closeButton)}>
        <button type="button" onClick={collapse}>
          X
        </button>
      </li>
      <MenuItems collapse={collapse} />
    </div>
  );
}
