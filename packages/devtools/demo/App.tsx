import '@cutting/component-library/dist/esm/component-library.esm.css';
import { ApplicationLayout } from '@cutting/component-library';
import { ReactNode } from 'react';

const Header = <header>Header</header>;
const Footer = <footer>Footer</footer>;

export function App({ children }: { children: ReactNode }): JSX.Element {
  return (
    <ApplicationLayout heading="Main Heading" header={Header} footer={Footer}>
      <section>Main Content</section>
      {children}
    </ApplicationLayout>
  );
}
