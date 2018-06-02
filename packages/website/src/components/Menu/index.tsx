import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { Wrap, Layout, GelItem } from '@cutting/react-gel';
import { Heading, Cow } from '@cutting/component-library';
import { bannerPages } from '../../routes';
import * as cs from 'classnames';
import * as urls from '../../urls';

const styles = require('./Menu.scss');

export const Menu: React.SFC = () => (
  <nav className={cs(styles.container, 'wrapper')}>
    <Wrap>
      <Layout center>
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
            {bannerPages.map((page, i) => (
              <li key={page.heading}>
                <NavLink to={page.path} activeClassName={styles.active}>
                  {page.heading}
                </NavLink>
              </li>
            ))}
          </ul>
        </GelItem>
      </Layout>
    </Wrap>
  </nav>
);
