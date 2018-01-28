import * as React from 'react';
import { Link } from 'react-router-dom';
import * as Urls from '../../../urls';
import { Wrap, Layout, GelItem } from '@cutting/react-gel';
import { Rhombus } from '../../../client/components/atoms/index';
import { pages } from '../../routes';

const styles = require('./Menu.scss');

export const Menu: React.StatelessComponent = () => (
  <nav className={styles.container}>
    <Wrap>
      <Layout>
        <GelItem>
          <ul>
            <li>
              <Rhombus />
            </li>
            {pages.map((page, i) => (
              <li>
                <Link to={page.path}>{page.heading}</Link>
              </li>
            ))}
          </ul>
        </GelItem>
      </Layout>
    </Wrap>
  </nav>
);
