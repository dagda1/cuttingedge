import type { FC } from 'react';
import { bannerPages } from '../../routes';
import { NavLink } from 'react-router-dom';
import { Covid19, IncreaseInDeaths } from '../../urls';

export interface MenuItemsProps {
  collapse: () => void;
}

export const MenuItems: FC<MenuItemsProps> = ({ collapse }) => (
  <>
    {bannerPages.map((page) => (
      <li key={page.heading}>
        <NavLink to={page.path} className={page.className} onClick={collapse}>
          {page.heading}
        </NavLink>
      </li>
    ))}
  </>
);

export const MobileMenuItems: FC<MenuItemsProps> = ({ collapse }) => {
  return (
    <div>
      <li>
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
          <li key={page.heading}>
            <NavLink to={page.path}>{page.heading}</NavLink>
          </li>
        );
      })}
    </div>
  );
};
