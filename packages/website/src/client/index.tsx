import React from 'react';
import { render, Renderer } from 'react-dom';
import { hydrate } from 'react-dom';
import { loadableReady } from '@loadable/component';

import { App } from '../containers/App';

const bootstrap = (renderMethod: Renderer): void => {
  const root = document.getElementById('root');

  if (!root) {
    return;
  }

  renderMethod(<App />, root);
};

if (__DEV__ && typeof module.hot !== undefined) {
  bootstrap(render);
  module.hot?.accept(console.error);
} else {
  loadableReady(() => bootstrap(hydrate));
}
