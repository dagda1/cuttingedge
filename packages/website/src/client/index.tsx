import React from 'react';
import { hydrate } from 'react-dom';

import { App } from '../containers/App';

export const root = document.getElementById('root');

const render = (Component: React.FC): ReturnType<typeof hydrate> => {
  hydrate(<Component />, root);
};

render(App);

if (module.hot && __DEV__) {
  module.hot.accept('../containers/App', () => {
    const App = require('../containers/App').default;
    render(App);
  });
}
