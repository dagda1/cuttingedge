import * as React from 'react';
import { hydrate } from 'react-dom';

import { App } from '../shared/App/App';

const render = (Component: React.ComponentClass) => {
  hydrate(<Component />, document.getElementById('root'));
};

render(App);

/**
 * This script provides hot module reloading in development mode.
 */
if (module.hot && process.env.NODE_ENV === 'development') {
  module.hot.accept('../shared/App', () => {
    const App = require('../shared/App').default;
    render(App);
  });
}
