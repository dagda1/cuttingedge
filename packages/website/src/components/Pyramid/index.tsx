import * as React from 'react';
import { Layout, GelItem } from '@cutting/react-gel';

const styles = require('./Pyramid.scss');

export const Pyramid: React.StatelessComponent = () => (
  <Layout center middle>
    <GelItem s="1/3" className={styles.holder}>
      <div>
        <div className={styles.container}>
          <div className={styles.shape}>
            <div className={styles.base} />
            <div className={styles.front} />
            <div className={styles.back} />
            <div className={styles.right} />
            <div className={styles.left} />
          </div>
        </div>
      </div>
    </GelItem>
  </Layout>
);
