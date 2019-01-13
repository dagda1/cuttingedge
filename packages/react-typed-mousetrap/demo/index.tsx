import React from 'react';
import { App } from './App';

const ReactDOM = require('react-dom');

const render = (Application: React.ComponentType) => {
  const container = document.getElementById('root');
  const root = ReactDOM.createRoot(container);
  root.render(<Application />);
};

render(App);
