import '@cutting/component-library/styles.css';
import type { FC } from 'react';
import { Explorer } from '../../containers/Explorer/Explorer';
import { ApplicationLayout } from '@cutting/component-library';

export const App: FC = () => {
  return (
    <ApplicationLayout heading="@cutting/graphql-explorer">
      <Explorer gatewayUrl="http://localhost:4000/graphql" />
    </ApplicationLayout>
  );
};
