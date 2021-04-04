import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';

export const root = document.getElementById('root');

const render = (Component: React.FC) => {
  ReactDOM.render(<Component />, root);
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
