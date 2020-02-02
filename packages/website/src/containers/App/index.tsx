require('../../assets/scss/global.module.scss');
import React from 'react';
import Helmet from 'react-helmet';
import { Router } from '@reach/router';
import { routes } from '../../routes';

export const App: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Cutting-Edge Solutions (Scotland)</title>
      </Helmet>
      <Router>{...routes}</Router>
    </>
  );
};
