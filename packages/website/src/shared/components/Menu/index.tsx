import * as React from 'react';
import { Link } from 'react-router-dom';
import { Wrap, Layout, GelItem } from '@cutting/react-gel';
import { Rhombus } from '../../../client/components/atoms/index';
import { bannerPages } from '../../routes';
import * as cs from 'classnames';

const styles = require('./Menu.scss');

export const Menu: React.StatelessComponent = () => (
  <nav className={cs(styles.container, 'wrapper')}>
    <Wrap>
      <Layout>
        <GelItem>
          <ul>
            <li>
              <Rhombus />
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
