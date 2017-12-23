declare var module: any;

import * as React from 'react';
import { hydrate } from 'react-dom';

import { App } from '../shared/App/App';

const render = (Component: React.ComponentClass) => {
  hydrate(<Component />, document.getElementById('root'));
};

render(App);

if (module.hot && process.env.NODE_ENV === 'development') {
  module.hot.accept('../shared/App/App', () => {
    const App = require('../shared/App/App').default;
    render(App);
  });
}
