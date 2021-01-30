import '@cutting/component-library/dist/component-library.cjs.development.css';
import { FC } from 'react';
import { ApplicationLayout } from '@cutting/component-library';

export const App: FC = () => {
  return (
    <ApplicationLayout>
      <section>Main Content</section>
    </ApplicationLayout>
  );
};
