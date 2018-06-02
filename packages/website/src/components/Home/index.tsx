import * as React from 'react';
import { ApplicationLayout } from '../../layouts/ApplicationLayout';
import { Pyramid } from '../Pyramid';

const styles = require('./Home.scss');

export const Home: React.SFC = () => (
  <ApplicationLayout heading="Frontend developer, cutting-edge solutions" italicise>
    <div className={styles.main}>
      <Pyramid />
    </div>
  </ApplicationLayout>
);
