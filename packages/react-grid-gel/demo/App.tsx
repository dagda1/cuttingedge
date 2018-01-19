import * as React from 'react';
import { Wrap, Layout, GelItem } from '../src';
import { Bar } from './Bar';

export const App = () => (
  <Wrap>
    <h1>react-Layout-gel</h1>
    <Layout>
      <GelItem>
        <h2>Grid</h2>
      </GelItem>
    </Layout>
    <Layout>
      <GelItem m="1/2">
        <Bar>50% tablet - 100% mobile</Bar>
      </GelItem>
      <GelItem m="1/2">
        <Bar>50% tablet - 100% mobile</Bar>
      </GelItem>
    </Layout>
    <Layout>
      <GelItem m="1/3">
        <Bar>33.333% tablet - 100% mobile</Bar>
      </GelItem>
      <GelItem m="1/3">
        <Bar>33.333% tablet - 100% mobile</Bar>
      </GelItem>
      <GelItem m="1/3">
        <Bar>33.333% tablet - 100% mobile</Bar>
      </GelItem>
    </Layout>
  </Wrap>
);
