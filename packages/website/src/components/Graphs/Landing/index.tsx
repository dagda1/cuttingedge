import React from 'react';
import loadable from '@loadable/component';

import * as Urls from 'src/urls';
import { Route, Switch } from 'react-router';
import { Page } from 'src/types';

const fallback = <div>loading....</div>;

const Deaths = loadable(() => import('src/components/Deaths'), {
  fallback,
});

const IncreseFromPreviousDay = loadable(
  () => import('src/components/IncreseFromPreviousDay'),
  {
    fallback,
  },
);

export const routable: Page[] = [
  {
    heading: 'Deaths',
    path: Urls.Deaths,
    component: Deaths,
    exact: true,
  },
  {
    heading: 'Rate of Change',
    path: Urls.IncreaseInDeaths,
    component: IncreseFromPreviousDay,
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
