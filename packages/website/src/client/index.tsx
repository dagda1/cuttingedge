declare var module: any;

import * as React from 'react';
import { hydrate } from 'react-dom';

import { App } from '../shared/App/App';

export const root = document.getElementById('root');

const render = (Component: React.ComponentClass) => {
  hydrate(<Component />, root);
};

render(App);

if (module.hot && process.env.NODE_ENV === 'development') {
  module.hot.accept('../shared/App/App', () => {
    const App = require('../shared/App/App').default;
    render(App);
  });
}
