import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';

export const container = document.getElementById('root');

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const root = createRoot(container);

const render = (Component: React.FC) => {
  root.render(<Component />);
};

render(App);

if (module.hot) {
  module.hot.accept('./App', () => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const App = require('./App').App;
      render(App);
    } catch (e) {
      console.error(e);
    }
  });
}
