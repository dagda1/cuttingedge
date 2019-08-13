import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';

export const root = document.getElementById('root');

const render = (Component: React.FC) => {
  ReactDOM.render(<Component />, root);
};

render(App);

if (module.hot && __DEV__) {
  module.hot.accept('./App', () => {
    const App = require('./App').default;
    render(App);
  });
}
