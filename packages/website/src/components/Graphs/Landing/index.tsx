import React from 'react';
import loadable from '@loadable/component';

import * as Urls from 'src/urls';
import { Route, Switch } from 'react-router';
import { Page } from 'src/types';

const fallback = <div>loading....</div>;

const Deaths = loadable(() => import('src/components/Confirmed'), {
  fallback,
});

const RateOfChange = loadable(() => import('src/components/RateOfChange'), {
  fallback,
});

const IncreseFromPreviousDay = loadable(() => import('src/components/IncreseFromPreviousDay'), {
  fallback,
});

export const routable: Page[] = [
  {
    heading: 'Deaths',
    path: Urls.Deaths,
    component: Deaths,
    exact: true,
  },
  {
    heading: 'Increase in deathss',
    path: Urls.IncreaseInDeaths,
    component: IncreseFromPreviousDay,
    exact: true,
  },
  {
    heading: 'Rate of change',
    path: Urls.Covid19,
    component: RateOfChange,
    exact: true,
  },
];

export const Landing: React.FC = () => (
  <Switch>
    {routable.map(({ path, ...rest }) => {
      return <Route key={path} path={path} {...rest} />;
    })}
  </Switch>
);

export default Landing;
