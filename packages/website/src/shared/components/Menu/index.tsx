import * as React from 'react';
import { Link } from 'react-router-dom';
import { Wrap, Layout, GelItem } from '@cutting/react-gel';
import { Rhombus } from '../../../client/components/atoms/index';
import { pages } from '../../routes';

const styles = require('./Menu.scss');

export const Menu: React.StatelessComponent = () => (
  <nav className={styles.container}>
    <Wrap>
      <Layout center middle equal fit>
        <GelItem>
          <Rhombus />
        </GelItem>
        {pages.map((page, i) => (
          <GelItem key={page.heading}>
            <Link to={page.path}>{page.heading}</Link>
          </GelItem>
        ))}
      </Layout>
    </Wrap>
  </nav>
);
