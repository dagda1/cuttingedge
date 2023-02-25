import { Pyramid } from '../../components/Pyramid';
import { ApplicationLayout } from '../../layouts/ApplicationLayout';

export function Home(): JSX.Element {
  return (
    <ApplicationLayout heading="Elite Frontend developer" centerHeading>
      <div>
        <Pyramid />
      </div>
    </ApplicationLayout>
  );
}

export default Home;
