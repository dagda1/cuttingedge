import type { FC } from 'react';
import loadable from '@loadable/component';
import { Route, Switch, useRouteMatch } from 'react-router';
import { Page } from 'src/types';
import urlJoin from 'url-join';

const fallback = <div>loading.....</div>;

const Sine = loadable(() => import('src/components/Sine/Sine'), {
  fallback,
  ssr: true,
});

export const routes: Page[] = [
  {
    heading: 'Sine Wave with d3',
    path: '/',
    component: Sine,
    exact: true,
  },
];

export const DataViz: FC = () => {
  const match = useRouteMatch();
  return (
    <Switch>
      {routes.map(({ path, ...rest }) => {
        const url = urlJoin(match.path, path);

        return <Route key={path} path={url} {...rest} />;
      })}
    </Switch>
  );
};

export default DataViz;
