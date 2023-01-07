import { bannerPages } from '../../routes';
import cs from 'classnames';
import { NavLink } from 'react-router-dom';
import { Menu as VizMenu, MenuItem, MenuButton } from '@szhsin/react-menu';

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
            to={page.path?.includes('*') ? page.path.slice(0, -2) : page.path}
            className={({ isActive }) => cs(page.className, { [styles.active]: isActive })}
            onClick={collapse}
          >
            {page.heading}
          </NavLink>
        </li>
      ))}
      <li className={cs(styles.horizontal, className)}>
        <VizMenu menuButton={<MenuButton className={styles.dropdown}>VIZ</MenuButton>}>
          <MenuItem className={styles.VizMenuItem}>
            <NavLink className={styles.submenu} to="/viz">
              SINE
            </NavLink>
          </MenuItem>
          <MenuItem className={styles.VizMenuItem}>
            <NavLink className={styles.submenu} to="/viz/function-plot">
              FUNCTIONS
            </NavLink>
          </MenuItem>
          <MenuItem className={styles.VizMenuItem}>
            <NavLink className={styles.submenu} to="/viz/sine2">
              MORE SINE
            </NavLink>
          </MenuItem>
        </VizMenu>
      </li>
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
