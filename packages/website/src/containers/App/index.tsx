require('../../assets/scss/global.module.scss');
import React from 'react';
import { Routes } from '../../routes';
import { BrowserRouter as Router } from 'react-router-dom';

export const App: React.FC = () => (
  <Router>
    <Routes />
  </Router>
);
