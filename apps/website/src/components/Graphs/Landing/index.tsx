import loadable from '@loadable/component';
import * as Urls from '../../../urls';
import { Route, Routes } from 'react-router';
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
    element: <DailyIncreaseUk />,
  },
  {
    heading: 'Increase in deaths',
    path: Urls.IncreaseInDeaths,
    element: <IncreseFromPreviousDay />,
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

export function Landing(): JSX.Element {
  return (
    <Routes>
      {routable.map(({ path, ...rest }) => {
        return <Route key={path} path={path} {...rest} />;
      })}
    </Routes>
  );
}

export default Landing;
