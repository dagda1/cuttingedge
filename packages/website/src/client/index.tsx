import React from 'react';
import { hydrate } from 'react-dom';

import { App, AppProps } from '../containers/App';
import configureStore from '../store';
import { createBrowserHistory } from 'history';

export const root = document.getElementById('root');

// eslint-disable-next-line
const preloadedState = (window as any).__PRELOADED_STATE__;

const history = createBrowserHistory();

const store = configureStore(preloadedState, history);

const render = (Component: React.ComponentClass, props: AppProps) => {
  hydrate(<Component {...props} />, root);
};

render(App, { store });

if (module.hot && __DEV__) {
  module.hot.accept('../containers/App', () => {
    const App = require('../containers/App').default;
    render(App, { store });
  });
}
