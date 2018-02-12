import * as React from 'react';
import { Layout, GelItem } from '@cutting/react-gel';
import { ApplicationLayout } from '../ApplicationLayout';

export interface StaticLayoutProps {
  heading?: string;
}

export const StaticLayout: React.StatelessComponent<StaticLayoutProps> = ({ heading, children }) => (
  <ApplicationLayout heading={heading}>
    <Layout>
      <GelItem>{children}</GelItem>
    </Layout>
  </ApplicationLayout>
);
