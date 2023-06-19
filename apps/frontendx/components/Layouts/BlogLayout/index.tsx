import type { PropsWithChildren } from 'react';
import { FullPageLayout } from '../FullPageLayout';
import { container } from './BlogLayout.css';

function Layout({ heading, children }: PropsWithChildren<{ heading: string }>): JSX.Element {
  return (
    <FullPageLayout className={container} heading={heading}>
      {children}
    </FullPageLayout>
  );
}

export default Layout;
