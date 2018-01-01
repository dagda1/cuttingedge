declare var module: any;

import * as React from 'react';
import { hydrate } from 'react-dom';

import { App } from '../shared/components/App/App';

export const root = document.getElementById('root');

const render = (Component: React.ComponentClass) => {
  hydrate(<Component />, root);
};

render(App);

if (module.hot && __DEV__) {
  module.hot.accept('../shared/components/App/App', () => {
    const App = require('../shared/components/App/App').default;
    render(App);
  });
}
