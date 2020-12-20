import type { FC } from 'react';
import { ApplicationLayout } from '../../layouts/ApplicationLayout';
import { Pyramid } from '../Pyramid';

import styles from './Home.module.scss';

export const Home: FC = () => (
  <ApplicationLayout heading="Frontend developer, cutting-edge solutions" italicise center>
    <div className={styles.main}>
      <Pyramid />
    </div>
  </ApplicationLayout>
);

export default Home;
