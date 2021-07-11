import '@cutting/component-library/dist/esm/component-library.esm.css';
import { FC, StrictMode } from 'react';
import { Routes } from '../../routes';
import { BrowserRouter as Router } from 'react-router-dom';
import '../../assets/scss/global.module.scss';

export const App: FC = () => (
  <StrictMode>
    <Router>
      <Routes />
    </Router>
  </StrictMode>
);
