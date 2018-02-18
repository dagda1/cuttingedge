import * as React from 'react';
import { pageMaker } from '../PageMaker';
import { ApplicationLayout } from '../../layouts/ApplicationLayout';
import { Pyramid } from '../Pyramid';

export const Home: React.StatelessComponent = () => (
  <ApplicationLayout heading="Frontend developer and gun for hire" italicise>
    <Pyramid />
  </ApplicationLayout>
);

export default pageMaker({ Comp: Home });
