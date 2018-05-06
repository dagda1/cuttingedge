/* import '../src/styles/_main.scss'; */
import * as React from 'react';
import { Wrap, Layout, GelItem } from '@cutting/react-gel';

const styles = require('./App.scss');

export const App = () => (
  <>
    <header>
      <Wrap>
        <Layout>
          <GelItem>
            <h1>Scroll To Any element</h1>
          </GelItem>
        </Layout>
      </Wrap>
    </header>
    <main>
      <h1>Main</h1>
    </main>
  </>
);
