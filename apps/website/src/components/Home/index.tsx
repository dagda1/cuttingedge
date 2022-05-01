import { ApplicationLayout } from '../../layouts/ApplicationLayout';
import { Pyramid } from '../Pyramid';

export function Home(): JSX.Element {
  return (
    <ApplicationLayout heading="Elite Frontend developer" center>
      <div>
        <Pyramid />
      </div>
    </ApplicationLayout>
  );
}

export default Home;
