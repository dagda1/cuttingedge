import '@cutting/component-library/dist/component-library.cjs.development.css';
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
