import { ApplicationLayout } from '@cutting/component-library';
import { Pyramid } from '../Pyramid';

export function Home(): JSX.Element {
  return (
    <ApplicationLayout heading="Frontend developer, total" italicise center>
      <div>
        <Pyramid />
      </div>
    </ApplicationLayout>
  );
}

export default Home;
