import '@cutting/component-library/styles.css';
import { FC, StrictMode } from 'react';
import { Routes } from '../../routes';
import { BrowserRouter as Router } from 'react-router-dom';
import '../../assets/scss/global.css';

export const App: FC = () => (
  <StrictMode>
    <Router>
      <Routes />
    </Router>
  </StrictMode>
);
