import '@cutting/component-library/styles.css';
import { ApplicationLayout } from '@cutting/component-library';
import type { ReactNode } from 'react';

const Header = <header>Header</header>;
const Footer = <footer>Footer</footer>;

export function App({ children }: { children: ReactNode }): JSX.Element {
  return (
    <ApplicationLayout theme="defaultTheme" heading="Main Heading" header={Header} footer={Footer}>
      <section>Main Content</section>
      {children}
    </ApplicationLayout>
  );
}
