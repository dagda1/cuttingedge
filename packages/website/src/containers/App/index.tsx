import type { FC } from 'react';
import { Routes } from '../../routes';
import { BrowserRouter as Router } from 'react-router-dom';

import '../../assets/scss/global.module.scss';

export const App: FC = () => (
  <Router>
    <Routes />
  </Router>
);
