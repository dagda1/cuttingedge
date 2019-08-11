import { Heading } from '@cutting/component-library';
import { GelItem, Layout, Wrap } from '@cutting/react-gel';
import cs from 'classnames';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { bannerPages } from '../../routes';
import * as urls from '../../urls';
import { MobileNavButton } from '../MobileNavButton';
import { Cow } from '../Svg';

const styles = require('./Menu.scss');

export interface MenuState {
  isExpanded: boolean;
}

export const Menu: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const collapse = () => setIsExpanded(false);

  const toggleIsExpanded = () => setIsExpanded(!isExpanded);

  const menuItems = () =>
    bannerPages.map((page) => (
      <li key={page.heading} className={cs(styles.horizontal)}>
        <NavLink to={page.path} activeClassName={styles.active} onClick={collapse}>
          {page.heading}
        </NavLink>
      </li>
    ));

  return (
    <nav className={styles.container}>
      <Wrap>
        <Layout center className={styles.full}>
          <GelItem>
            <ul>
              <li className={styles.logo__container}>
                <NavLink to={urls.Home}>
                  <Cow />
                </NavLink>
              </li>
              <li>
                <Heading level={2}>Paul Cowan</Heading>
              </li>
              <li className={styles.mobile__button__container}>
                <MobileNavButton onClick={toggleIsExpanded} isActive={isExpanded} />
              </li>
              {menuItems()}
            </ul>
          </GelItem>
        </Layout>
        <Layout className={cs(styles.expandable, { [styles.expanded]: isExpanded })}>
          <GelItem>
            <ul>{menuItems()}</ul>
          </GelItem>
        </Layout>
      </Wrap>
    </nav>
  );
};
