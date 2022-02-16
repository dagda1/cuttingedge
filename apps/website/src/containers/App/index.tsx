import '@cutting/component-library/styles.css';
import type { FC } from 'react';
import { StrictMode } from 'react';
import { MainRoutes } from '../../routes';
import { BrowserRouter as Router } from 'react-router-dom';
import '../../assets/scss/global.css';

export const App: FC = () => (
  <StrictMode>
    <Router>
      <MainRoutes />
    </Router>
  </StrictMode>
);
