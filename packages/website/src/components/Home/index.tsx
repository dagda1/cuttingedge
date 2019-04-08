import React from 'react';
import { ApplicationLayout } from '../../layouts/ApplicationLayout';
import { Pyramid } from '../Pyramid';

const styles = require('./Home.scss');

export const Home: React.FunctionComponent = () => (
  <ApplicationLayout heading="Frontend developer, cutting-edge solutions" italicise center>
    <div className={styles.main}>
      <Pyramid />
    </div>
  </ApplicationLayout>
);
