import type { FC } from 'react';
import { ApplicationLayout } from '../../layouts/ApplicationLayout';
import { Pyramid } from '../Pyramid';

export const Home: FC = () => (
  <ApplicationLayout heading="Frontend developer, total" italicise center>
    <div>
      <Pyramid />
    </div>
  </ApplicationLayout>
);

export default Home;
