import * as React from 'react';
import { Header } from '../Header';
import { Wrap, Layout, GelItem } from '@cutting/react-gel';

export interface PageMakerProps {
  Comp: React.ComponentType<any>;
}

export const pageMaker = ({ Comp }: PageMakerProps) => props => (
  <>
    <Header />
    <Wrap className="wrapper">
      <Layout>
        <GelItem>
          <Comp {...props} />
        </GelItem>
      </Layout>
    </Wrap>
  </>
);
