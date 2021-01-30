import '@cutting/component-library/dist/component-library.cjs.development.css';
import type { FC } from 'react';
import { Explorer } from 'src/containers/Explorer/Explorer';
import { ApplicationLayout } from '@cutting/component-library';

export const App: FC = () => {
  return (
    <ApplicationLayout heading="@cutting/graphql-explorer">
      <Explorer />
    </ApplicationLayout>
  );
};
