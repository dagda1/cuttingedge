import '@cutting/component-library/styles.css';
import type { FC } from 'react';
import { Explorer } from 'src/containers/Explorer/Explorer';
import { ApplicationLayout } from '@cutting/component-library';
import './App.module.scss';

export const App: FC = () => {
  return (
    <ApplicationLayout heading="@cutting/graphql-explorer">
      <Explorer gatewayUrl="http://localhost:4000/graphql" />
    </ApplicationLayout>
  );
};
