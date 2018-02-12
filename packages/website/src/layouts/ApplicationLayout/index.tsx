import * as React from 'react';
import { Wrap, Layout, GelItem } from '@cutting/react-gel';
import { Heading } from '@cutting/component-library';
export interface ApplicationLayoutProps {
  heading: string;
}

export const ApplicationLayout: React.StatelessComponent<ApplicationLayoutProps> = ({ heading, children }) => (
  <>
    <Wrap>
      <Layout>
        <GelItem>
          <Heading>{heading}</Heading>
        </GelItem>
      </Layout>
      <>{children}</>
    </Wrap>
  </>
);
