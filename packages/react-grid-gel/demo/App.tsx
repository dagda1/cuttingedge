import * as React from 'react';
import { Wrap, Layout, GelItem } from '../src';
import { Bar } from './Bar';

import './global.scss';

export const App = () => (
  <Wrap>
    <Layout>
      <GelItem>
        <h1>Grid</h1>
      </GelItem>
    </Layout>
    <Layout>
      <GelItem>
        <h2>Sizes</h2>
      </GelItem>
    </Layout>
    <Layout>
      <GelItem>
        <Bar>100%</Bar>
      </GelItem>
    </Layout>
    <Layout>
      <GelItem m="1/2">
        <Bar>50%</Bar>
      </GelItem>
      <GelItem m="1/2">
        <Bar>50%</Bar>
      </GelItem>
    </Layout>
    <Layout>
      <GelItem m="1/3">
        <Bar>33%</Bar>
      </GelItem>
      <GelItem m="1/3">
        <Bar>33%</Bar>
      </GelItem>
      <GelItem m="1/3">
        <Bar>33%</Bar>
      </GelItem>
    </Layout>
    <Layout>
      <GelItem m="1/4">
        <Bar>25%</Bar>
      </GelItem>
      <GelItem m="1/4">
        <Bar>25%</Bar>
      </GelItem>
      <GelItem m="1/4">
        <Bar>25%</Bar>
      </GelItem>
      <GelItem m="1/4">
        <Bar>25%</Bar>
      </GelItem>
    </Layout>
    <Layout>
      <GelItem m="1/8">
        <Bar>12.5%</Bar>
      </GelItem>
      <GelItem m="1/8">
        <Bar>12.5%</Bar>
      </GelItem>
      <GelItem m="1/8">
        <Bar>12.5%</Bar>
      </GelItem>
      <GelItem m="1/8">
        <Bar>12.5%</Bar>
      </GelItem>
      <GelItem m="1/8">
        <Bar>12.5%</Bar>
      </GelItem>
      <GelItem m="1/8">
        <Bar>12.5%</Bar>
      </GelItem>
      <GelItem m="1/8">
        <Bar>12.5%</Bar>
      </GelItem>
      <GelItem m="1/8">
        <Bar>12.5%</Bar>
      </GelItem>
    </Layout>
    <Layout>
      <GelItem>
        <h2>Nested Grids</h2>
      </GelItem>
    </Layout>
    <Layout equal>
      <GelItem m="1/2">
        <Bar>50%</Bar>
      </GelItem>
      <GelItem m="1/2">
        <Layout>
          <GelItem s="1/3">
            <Bar>33%</Bar>
          </GelItem>
          <GelItem s="2/3">
            <Layout>
              <GelItem w="1/2">
                <Bar>50%</Bar>
              </GelItem>
              <GelItem w="1/2">
                <Bar>50%</Bar>
              </GelItem>
              <GelItem m="1/3">
                <Bar>33%</Bar>
              </GelItem>
              <GelItem m="1/3">
                <Bar>33%</Bar>
              </GelItem>
              <GelItem m="1/3">
                <Bar>33%</Bar>
              </GelItem>
            </Layout>
          </GelItem>
        </Layout>
      </GelItem>
    </Layout>
  </Wrap>
);
