import * as React from 'react';
import { pageMaker } from '../PageMaker';
import { ApplicationLayout } from '../../layouts/ApplicationLayout';
import { Pyramid } from '../Pyramid';

export const Home: React.StatelessComponent = () => (
  <ApplicationLayout>
    <Pyramid />
  </ApplicationLayout>
);

export default pageMaker({ Comp: Home });
