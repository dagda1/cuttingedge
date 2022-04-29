import { bannerPages } from '../../routes';
import cs from 'classnames';
import { NavLink } from 'react-router-dom';

import * as styles from './Menu.css';

export interface MenuItemsProps {
  collapse: () => void;
  className?: string;
}

export function MenuItems({ collapse, className }: MenuItemsProps): JSX.Element {
  return (
    <>
      {bannerPages.map((page) => (
        <li key={page.heading} className={cs(styles.horizontal, className)}>
          <NavLink
            to={page.path?.includes('/viz') ? '/viz' : page.path}
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
    <>
      <li className={cs(styles.horizontal, styles.mobile, styles.closeButton)}>
        <button type="button" onClick={collapse}>
          X
        </button>
      </li>
      <MenuItems collapse={collapse} className={styles.mobile} />
    </>
  );
}
