import React from 'react';
import { App } from './App';

const ReactDOM = require('react-dom');

const render = (Application: React.ComponentType) => {
  ReactDOM.render(<Application />, document.getElementById('root'));
};

render(App);
