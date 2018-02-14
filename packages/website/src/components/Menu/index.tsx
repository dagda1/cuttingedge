import * as React from 'react';
import { Link } from 'react-router-dom';
import { Wrap, Layout, GelItem } from '@cutting/react-gel';
import { Heading, Cow } from '@cutting/component-library';
import { bannerPages } from '../../routes';
import * as cs from 'classnames';
import * as urls from '../../urls';

const styles = require('./Menu.scss');

export const Menu: React.StatelessComponent = () => (
  <nav className={cs(styles.container, 'wrapper')}>
    <Wrap>
      <Layout center>
        <GelItem>
          <ul>
            <li className={styles.logo__container}>
              <Link to={urls.Home}>
                <Cow />
              </Link>
            </li>
            <li>
              <Heading level={2}>Paul Cowan</Heading>
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
