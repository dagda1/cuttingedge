import React from 'react';
import { ApplicationLayout } from '../../layouts/ApplicationLayout';
import { Pyramid } from '../Pyramid';

const styles = require('./Home.module.scss');

export const Home: React.FC = () => (
  <ApplicationLayout heading="Frontend developer, cutting-edge solutions" italicise center>
    <div className={styles.main}>
      <Pyramid />
    </div>
  </ApplicationLayout>
);

export default Home;
