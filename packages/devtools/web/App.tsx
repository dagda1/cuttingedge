import '@cutting/component-library/styles.css';
import { ApplicationLayout, defaultTheme } from '@cutting/component-library';
import type { ReactNode } from 'react';

const Header = <header>Header</header>;
const Footer = <footer>Footer</footer>;

export function App({ children }: { children: ReactNode }): JSX.Element {
  return (
    <ApplicationLayout heading="Main Heading" header={Header} footer={Footer} className={defaultTheme}>
      <section>Main Content</section>
      {children}
    </ApplicationLayout>
  );
}
