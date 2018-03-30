import * as React from 'react';
import { pageMaker } from '../PageMaker';
import { ApplicationLayout } from '../../layouts/ApplicationLayout';
import { Pyramid } from '../Pyramid';

const styles = require('./Home.scss');

export const Home: React.StatelessComponent = () => (
  <ApplicationLayout heading="Front end developer, ready for hire" italicise>
    <div className={styles.main}>
      <Pyramid />
    </div>
  </ApplicationLayout>
);

export default pageMaker({ Comp: Home });
