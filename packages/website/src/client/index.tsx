import React from 'react';
import { hydrate } from 'react-dom';
import { loadableReady } from '@loadable/component';

import { App } from '../containers/App';

const bootstrap = (): void => {
  const root = document.getElementById('root');

  if (!root) {
    return;
  }

  hydrate(<App />, root);
};

loadableReady(() => bootstrap());
