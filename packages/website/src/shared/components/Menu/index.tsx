import * as React from 'react';
import { Link } from 'react-router-dom';
import { Wrap, Layout, GelItem } from '@cutting/react-gel';
import { Heading, Cow } from '@cutting/component-library';
import { bannerPages } from '../../routes';
import * as cs from 'classnames';

const styles = require('./Menu.scss');

export const Menu: React.StatelessComponent = () => (
  <nav className={cs(styles.container, 'wrapper')}>
    <Wrap>
      <Layout>
        <GelItem>
          <ul>
            <li className={styles.logo__container}>
              <Cow />
            </li>
            <li>
              <Heading>Cutting-Edge Solutions (Scotland)</Heading>
            </li>
            {bannerPages.map((page, i) => (
              <li key={page.heading}>
                <Link to={page.path}>{page.heading}</Link>
              </li>
            ))}
          </ul>
        </GelItem>
      </Layout>
    </Wrap>
  </nav>
);
