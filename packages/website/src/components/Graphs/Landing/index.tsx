import type { FC } from 'react';
import loadable from '@loadable/component';
import * as Urls from '../../../urls';
import { Route, Switch } from 'react-router';
import type { Page } from '@cutting/util';
import { fallback } from '../../../components/Fallback/Fallback';

// const Deaths = loadable(() => import('../../../components/Confirmed'), {
//   fallback,
// });

// const RateOfChange = loadable(() => import('../../../components/RateOfChange'), {
//   fallback,
// });

const IncreseFromPreviousDay = loadable(() => import('../../../components/IncreseFromPreviousDay'), {
  fallback,
});

const DailyIncreaseUk = loadable(() => import('../../../components/DailyIncreaseUk'), {
  fallback,
});

export const routable: Page[] = [
  {
    heading: 'Daily Increase In Scottish deaths',
    path: Urls.Covid19,
    component: DailyIncreaseUk,
    exact: true,
  },
  {
    heading: 'Increase in deaths',
    path: Urls.IncreaseInDeaths,
    component: IncreseFromPreviousDay,
    exact: true,
  },
  // {
  //   heading: 'Deaths',
  //   path: Urls.Deaths,
  //   component: Deaths,
  //   exact: true,
  // },
  // {
  //   heading: 'Rate of change',
  //   path: Urls.RateOfChange,
  //   component: RateOfChange,
  //   exact: true,
  // },
];

export const Landing: FC = () => (
  <Switch>
    {routable.map(({ path, ...rest }) => {
      return <Route key={path} path={path} {...rest} />;
    })}
  </Switch>
);

export default Landing;
