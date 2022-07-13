import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import {assert} from 'assert-ts'

export const container = document.getElementById('root');

assert(!!container, `no container found for #root`);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const root = createRoot(container);


const render = (Component: React.FC) => {
  root.render(<Component />);
};

render(App);

if (import.meta.hot) {
  import.meta.hot.accept('./App', () => import('./App').then(({ App }) => render(App)));
}
