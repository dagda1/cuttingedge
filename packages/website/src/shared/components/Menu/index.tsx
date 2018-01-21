import * as React from 'react';
import { Link } from 'react-router-dom';
import * as Urls from '../../../urls';
import { Wrap, Layout, GelItem } from '@cutting/react-gel';

const styles = require('./Menu.scss');

export const Menu: React.StatelessComponent = () => (
  <nav className={styles.container}>
    <Wrap>
      <Layout>
        <GelItem>
          <ul>
            <li>
              <Link to={Urls.Home}>Home</Link>
            </li>
            <li>
              <Link to={Urls.PrivacyPolicy}>Privacy Policy</Link>
            </li>
          </ul>
        </GelItem>
      </Layout>
    </Wrap>
  </nav>
);
