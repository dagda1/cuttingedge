import '@cutting/component-library/dist/esm/component-library.esm.css';
import type { FC } from 'react';
import { ApplicationLayout } from '@cutting/component-library';

const Header = <header>Header</header>;
const Footer = <footer>Footer</footer>;

export const App: FC = ({ children }) => {
  return (
    <ApplicationLayout heading="Main Heading" Header={Header} Footer={Footer}>
      <section>Main Content</section>
      {children}
    </ApplicationLayout>
  );
};
