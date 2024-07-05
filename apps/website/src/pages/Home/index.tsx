import { PageBlock } from '@cutting/component-library';

import { Pyramid } from '~/components/Pyramid';
import { ApplicationLayout } from '~/layouts/ApplicationLayout';

export function Home(): JSX.Element {
  return (
    <ApplicationLayout heading="Elite Frontend developer" centerHeading>
      <PageBlock>
        <Pyramid />
      </PageBlock>
    </ApplicationLayout>
  );
}

export default Home;
