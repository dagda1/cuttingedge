import * as React from 'react';
import { Rhombus, Cow } from '../src/components';
import { Wrap, Layout, GelItem } from '@cutting/react-gel';

require('./App.scss');

export const App = () => (
  <Wrap>
    <Layout>
      <GelItem>
        <Rhombus />
      </GelItem>
    </Layout>
    <Layout>
      <GelItem>
        <Cow />
      </GelItem>
    </Layout>
  </Wrap>
);
