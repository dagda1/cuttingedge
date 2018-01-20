import * as React from 'react';
import { Wrap, Layout, GelItem } from '../src';
import { Bar } from './Bar';

const styles = require('./App.scss');

export const App = () => (
  <>
    <header>
      <Wrap>
        <Layout>
          <GelItem>
            <h1>Grid</h1>
            <p>
              This is a working demo of the
              <a target="_blank" href="http://www.bbc.co.uk/gel/guidelines/grid">
                GEL Grid Guidelines
              </a>. The demo shows how our flexible, percentage-based grid works and how you can use it to create a BBC
              website.
            </p>
          </GelItem>
        </Layout>
      </Wrap>
    </header>
    <div>
      <Wrap>
        <Layout center>
          <GelItem xxl="10/12">
            <div className={styles.controls}>
              <p>Your device is currently using:</p>
            </div>
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
    </div>
  </>
);
